# customFields

### Available Operations

* [deleteCustomFieldsIdJson](#deletecustomfieldsidjson) - Delete an existing CustomField.
* [deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#deletecustomfieldsidselectoptionscustomfieldselectoptionidjson) - Delete an existing CustomFieldSelectOption.
* [getCustomFieldsJson](#getcustomfieldsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdJson](#getcustomfieldsidjson) - Retrieve a single CustomField.
* [postCustomFieldsJson](#postcustomfieldsjson) - Create a new Custom Field.
* [putCustomFieldsIdJson](#putcustomfieldsidjson) - Update a CustomField.

## deleteCustomFieldsIdJson

Delete an existing CustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomFieldsIdJsonRequest req = new DeleteCustomFieldsIdJsonRequest("doloribus", 958950, "architecto");            

            DeleteCustomFieldsIdJsonResponse res = sdk.customFields.deleteCustomFieldsIdJson(req);

            if (res.deleteCustomFieldsIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Delete an existing CustomFieldSelectOption.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest req = new DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest("mollitia", 208876, 635059, "consequuntur");            

            DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse res = sdk.customFields.deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req);

            if (res.deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFieldsJson

Retrieve all Store's Custom Fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldsJsonRequest;
import org.openapis.openapi.models.operations.GetCustomFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomFieldsJsonRequest req = new GetCustomFieldsJsonRequest("repellat", "mollitia");            

            GetCustomFieldsJsonResponse res = sdk.customFields.getCustomFieldsJson(req);

            if (res.customFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFieldsIdJson

Retrieve a single CustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.GetCustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomFieldsIdJsonRequest req = new GetCustomFieldsIdJsonRequest("occaecati", 253291, "commodi");            

            GetCustomFieldsIdJsonResponse res = sdk.customFields.getCustomFieldsIdJson(req);

            if (res.customField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomFieldsJson

Create a new Custom Field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomFieldsJsonRequest;
import org.openapis.openapi.models.operations.PostCustomFieldsJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldEdit;
import org.openapis.openapi.models.shared.CustomFieldEditFields;
import org.openapis.openapi.models.shared.CustomFieldEditFieldsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomFieldsJsonRequest req = new PostCustomFieldsJsonRequest(                new CustomFieldEdit() {{
                                customField = new CustomFieldEditFields() {{
                                    label = "quam";
                                    type = CustomFieldEditFieldsTypeEnum.SELECTION;
                                    values = new String[]{{
                                        add("error"),
                                    }};
                                }};;
                            }};, "quia", "quis");            

            PostCustomFieldsJsonResponse res = sdk.customFields.postCustomFieldsJson(req);

            if (res.customField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCustomFieldsIdJson

Update a CustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.PutCustomFieldsIdJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldEdit;
import org.openapis.openapi.models.shared.CustomFieldEditFields;
import org.openapis.openapi.models.shared.CustomFieldEditFieldsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCustomFieldsIdJsonRequest req = new PutCustomFieldsIdJsonRequest(                new CustomFieldEdit() {{
                                customField = new CustomFieldEditFields() {{
                                    label = "vitae";
                                    type = CustomFieldEditFieldsTypeEnum.INPUT;
                                    values = new String[]{{
                                        add("enim"),
                                        add("odit"),
                                        add("quo"),
                                    }};
                                }};;
                            }};, "sequi", 949572, "ipsam");            

            PutCustomFieldsIdJsonResponse res = sdk.customFields.putCustomFieldsIdJson(req);

            if (res.customField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
