# customFieldSelectOptions

### Available Operations

* [getCustomFieldsIdSelectOptionsJson](#getcustomfieldsidselectoptionsjson) - Retrieve all Store's Custom Fields.
* [getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#getcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Retrieve a single SelectOption from a CustomField.
* [postCustomFieldsIdSelectOptionsJson](#postcustomfieldsidselectoptionsjson) - Create a new Custom Field Select Option.
* [putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson](#putcustomfieldsidselectoptionscustomfieldselectoptionidjson) - Update a SelectOption from a CustomField.

## getCustomFieldsIdSelectOptionsJson

Retrieve all Store's Custom Fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldsIdSelectOptionsJsonRequest;
import org.openapis.openapi.models.operations.GetCustomFieldsIdSelectOptionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomFieldsIdSelectOptionsJsonRequest req = new GetCustomFieldsIdSelectOptionsJsonRequest("est", 653140, "laborum");            

            GetCustomFieldsIdSelectOptionsJsonResponse res = sdk.customFieldSelectOptions.getCustomFieldsIdSelectOptionsJson(req);

            if (res.customFieldSelectOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Retrieve a single SelectOption from a CustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;
import org.openapis.openapi.models.operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest req = new GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest("dolores", 210382, 358152, "explicabo");            

            GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse res = sdk.customFieldSelectOptions.getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req);

            if (res.customFieldSelectOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomFieldsIdSelectOptionsJson

Create a new Custom Field Select Option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomFieldsIdSelectOptionsJsonRequest;
import org.openapis.openapi.models.operations.PostCustomFieldsIdSelectOptionsJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldSelectOptionEdit;
import org.openapis.openapi.models.shared.CustomFieldSelectOptionEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomFieldsIdSelectOptionsJsonRequest req = new PostCustomFieldsIdSelectOptionsJsonRequest(                new CustomFieldSelectOptionEdit() {{
                                customFieldSelectOption = new CustomFieldSelectOptionEditFields() {{
                                    value = "nobis";
                                }};;
                            }};, "enim", "omnis", "nemo");            

            PostCustomFieldsIdSelectOptionsJsonResponse res = sdk.customFieldSelectOptions.postCustomFieldsIdSelectOptionsJson(req);

            if (res.customFieldSelectOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson

Update a SelectOption from a CustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;
import org.openapis.openapi.models.operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldSelectOptionEdit;
import org.openapis.openapi.models.shared.CustomFieldSelectOptionEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest req = new PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest(                new CustomFieldSelectOptionEdit() {{
                                customFieldSelectOption = new CustomFieldSelectOptionEditFields() {{
                                    value = "minima";
                                }};;
                            }};, "excepturi", 38425, 438601, "culpa");            

            PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse res = sdk.customFieldSelectOptions.putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req);

            if (res.customFieldSelectOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
