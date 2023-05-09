# checkoutCustomFields

### Available Operations

* [deleteCheckoutCustomFieldsIdJson](#deletecheckoutcustomfieldsidjson) - Delete an existing CheckoutCustomField.
* [getCheckoutCustomFieldsJson](#getcheckoutcustomfieldsjson) - Retrieve all Checkout Custom Fields.
* [getCheckoutCustomFieldsIdJson](#getcheckoutcustomfieldsidjson) - Retrieve a single CheckoutCustomField.
* [postCheckoutCustomFieldsJson](#postcheckoutcustomfieldsjson) - Create a new CheckoutCustomField.
* [putCheckoutCustomFieldsIdJson](#putcheckoutcustomfieldsidjson) - Update a CheckoutCustomField.

## deleteCheckoutCustomFieldsIdJson

Delete an existing CheckoutCustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCheckoutCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteCheckoutCustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCheckoutCustomFieldsIdJsonRequest req = new DeleteCheckoutCustomFieldsIdJsonRequest("esse", 520478, "porro");            

            DeleteCheckoutCustomFieldsIdJsonResponse res = sdk.checkoutCustomFields.deleteCheckoutCustomFieldsIdJson(req);

            if (res.deleteCheckoutCustomFieldsIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCheckoutCustomFieldsJson

Retrieve all Checkout Custom Fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckoutCustomFieldsJsonRequest;
import org.openapis.openapi.models.operations.GetCheckoutCustomFieldsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckoutCustomFieldsJsonRequest req = new GetCheckoutCustomFieldsJsonRequest("dolorum", "dicta") {{
                limit = 720633L;
                page = 639921L;
            }};            

            GetCheckoutCustomFieldsJsonResponse res = sdk.checkoutCustomFields.getCheckoutCustomFieldsJson(req);

            if (res.checkoutCustomFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCheckoutCustomFieldsIdJson

Retrieve a single CheckoutCustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckoutCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.GetCheckoutCustomFieldsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckoutCustomFieldsIdJsonRequest req = new GetCheckoutCustomFieldsIdJsonRequest("occaecati", 143353, "deleniti");            

            GetCheckoutCustomFieldsIdJsonResponse res = sdk.checkoutCustomFields.getCheckoutCustomFieldsIdJson(req);

            if (res.checkoutCustomField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCheckoutCustomFieldsJson

Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckoutCustomFieldsJsonRequest;
import org.openapis.openapi.models.operations.PostCheckoutCustomFieldsJsonResponse;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEdit;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFields;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFieldsAreaEnum;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFieldsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCheckoutCustomFieldsJsonRequest req = new PostCheckoutCustomFieldsJsonRequest(                new CheckoutCustomFieldEdit() {{
                                checkoutCustomField = new CheckoutCustomFieldEditFields() {{
                                    area = CheckoutCustomFieldEditFieldsAreaEnum.OTHER;
                                    customFieldSelectOptions = new String[]{{
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    deletable = false;
                                    label = "modi";
                                    position = 186332;
                                    required = false;
                                    type = CheckoutCustomFieldEditFieldsTypeEnum.CHECKBOX;
                                }};;
                            }};, "cum", "esse");            

            PostCheckoutCustomFieldsJsonResponse res = sdk.checkoutCustomFields.postCheckoutCustomFieldsJson(req);

            if (res.checkoutCustomField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCheckoutCustomFieldsIdJson

Update a CheckoutCustomField.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCheckoutCustomFieldsIdJsonRequest;
import org.openapis.openapi.models.operations.PutCheckoutCustomFieldsIdJsonResponse;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEdit;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFields;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFieldsAreaEnum;
import org.openapis.openapi.models.shared.CheckoutCustomFieldEditFieldsTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCheckoutCustomFieldsIdJsonRequest req = new PutCheckoutCustomFieldsIdJsonRequest(                new CheckoutCustomFieldEdit() {{
                                checkoutCustomField = new CheckoutCustomFieldEditFields() {{
                                    area = CheckoutCustomFieldEditFieldsAreaEnum.CONTACT;
                                    customFieldSelectOptions = new String[]{{
                                        add("aspernatur"),
                                        add("perferendis"),
                                        add("ad"),
                                    }};
                                    deletable = false;
                                    label = "natus";
                                    position = 149675;
                                    required = false;
                                    type = CheckoutCustomFieldEditFieldsTypeEnum.CHECKBOX;
                                }};;
                            }};, "dolor", 616934, "laboriosam");            

            PutCheckoutCustomFieldsIdJsonResponse res = sdk.checkoutCustomFields.putCheckoutCustomFieldsIdJson(req);

            if (res.checkoutCustomField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
