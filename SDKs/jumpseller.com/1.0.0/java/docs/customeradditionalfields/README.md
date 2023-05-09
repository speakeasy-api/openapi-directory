# customerAdditionalFields

### Available Operations

* [deleteCustomersIdFieldsFieldId](#deletecustomersidfieldsfieldid) - Delete a Customer Additional Field.
* [getCustomersIdFields](#getcustomersidfields) - Retrieves the Customer Additional Field of a Customer.
* [getCustomersIdFieldsFieldId](#getcustomersidfieldsfieldid) - Retrieve a single Customer Additional Field.
* [postCustomersIdFields](#postcustomersidfields) - Adds Customer Additional Fields to a Customer.
* [putCustomersIdFieldsFieldId](#putcustomersidfieldsfieldid) - Update a Customer Additional Field.

## deleteCustomersIdFieldsFieldId

Delete a Customer Additional Field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomersIdFieldsFieldIdRequest;
import org.openapis.openapi.models.operations.DeleteCustomersIdFieldsFieldIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomersIdFieldsFieldIdRequest req = new DeleteCustomersIdFieldsFieldIdRequest("id", 820994, 13571, "quasi");            

            DeleteCustomersIdFieldsFieldIdResponse res = sdk.customerAdditionalFields.deleteCustomersIdFieldsFieldId(req);

            if (res.deleteCustomersIdFieldsFieldId200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersIdFields

Retrieves the Customer Additional Field of a Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersIdFieldsRequest;
import org.openapis.openapi.models.operations.GetCustomersIdFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersIdFieldsRequest req = new GetCustomersIdFieldsRequest("error", 837945, "laborum");            

            GetCustomersIdFieldsResponse res = sdk.customerAdditionalFields.getCustomersIdFields(req);

            if (res.customerAdditionalFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomersIdFieldsFieldId

Retrieve a single Customer Additional Field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersIdFieldsFieldIdRequest;
import org.openapis.openapi.models.operations.GetCustomersIdFieldsFieldIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomersIdFieldsFieldIdRequest req = new GetCustomersIdFieldsFieldIdRequest("quasi", 971945, 976460, "vero");            

            GetCustomersIdFieldsFieldIdResponse res = sdk.customerAdditionalFields.getCustomersIdFieldsFieldId(req);

            if (res.customerAdditionalField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCustomersIdFields

Adds Customer Additional Fields to a Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCustomersIdFieldsRequest;
import org.openapis.openapi.models.operations.PostCustomersIdFieldsResponse;
import org.openapis.openapi.models.shared.CustomerAdditionalFieldEdit;
import org.openapis.openapi.models.shared.CustomerAdditionalFieldEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCustomersIdFieldsRequest req = new PostCustomersIdFieldsRequest(                new CustomerAdditionalFieldEdit() {{
                                customerAdditionalField = new CustomerAdditionalFieldEditFields() {{
                                    checkoutCustomFieldId = 468651;
                                    value = "praesentium";
                                }};;
                            }};, "voluptatibus", 55714, "omnis");            

            PostCustomersIdFieldsResponse res = sdk.customerAdditionalFields.postCustomersIdFields(req);

            if (res.customerAdditionalField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCustomersIdFieldsFieldId

Update a Customer Additional Field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCustomersIdFieldsFieldIdRequest;
import org.openapis.openapi.models.operations.PutCustomersIdFieldsFieldIdResponse;
import org.openapis.openapi.models.shared.CustomerAdditionalFieldEdit;
import org.openapis.openapi.models.shared.CustomerAdditionalFieldEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCustomersIdFieldsFieldIdRequest req = new PutCustomersIdFieldsFieldIdRequest(                new CustomerAdditionalFieldEdit() {{
                                customerAdditionalField = new CustomerAdditionalFieldEditFields() {{
                                    checkoutCustomFieldId = 451159;
                                    value = "cum";
                                }};;
                            }};, "perferendis", 39187, 441711, "ut");            

            PutCustomersIdFieldsFieldIdResponse res = sdk.customerAdditionalFields.putCustomersIdFieldsFieldId(req);

            if (res.customerAdditionalField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
