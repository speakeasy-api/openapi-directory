# customers

### Available Operations

* [getSetupV1Customers](#getsetupv1customers) - List Customers
* [getSetupV1CustomersId](#getsetupv1customersid) - Get Customer
* [getSetupV1CustomersIdPrivacy](#getsetupv1customersidprivacy) - Get Customer Data

## getSetupV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CustomersRequest;
import org.openapis.openapi.models.operations.GetSetupV1CustomersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CustomersRequest req = new GetSetupV1CustomersRequest() {{
                deleted = false;
                email = "Timothy_Mohr3@hotmail.com";
                groupId = "porro";
                lastname = "Cruickshank";
                limit = 500026;
                locationId = "error";
                offset = 50370;
            }};            

            GetSetupV1CustomersResponse res = sdk.customers.getSetupV1Customers(req);

            if (res.customerListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CustomersId

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CustomersIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1CustomersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CustomersIdRequest req = new GetSetupV1CustomersIdRequest("rerum");            

            GetSetupV1CustomersIdResponse res = sdk.customers.getSetupV1CustomersId(req);

            if (res.customerViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1CustomersIdPrivacy

<p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1CustomersIdPrivacyRequest;
import org.openapis.openapi.models.operations.GetSetupV1CustomersIdPrivacyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1CustomersIdPrivacyRequest req = new GetSetupV1CustomersIdPrivacyRequest("asperiores");            

            GetSetupV1CustomersIdPrivacyResponse res = sdk.customers.getSetupV1CustomersIdPrivacy(req);

            if (res.customerPrivacyViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
