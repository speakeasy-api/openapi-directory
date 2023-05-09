# customers

## Overview

Create, List, Updated and Delete Customers

### Available Operations

* [getCustomer](#getcustomer) - Represents a customer
* [getCustomers](#getcustomers) - List all customers or find your own account

## getCustomer

Represents a customer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerRequest;
import org.openapis.openapi.models.operations.GetCustomerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("at", "maiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCustomerRequest req = new GetCustomerRequest(473608L);            

            GetCustomerResponse res = sdk.customers.getCustomer(req);

            if (res.getCustomer200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomers

List all customers or find your own account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quod", "quod") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCustomersResponse res = sdk.customers.getCustomers();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
