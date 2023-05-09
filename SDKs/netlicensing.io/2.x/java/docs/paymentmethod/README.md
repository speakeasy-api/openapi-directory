# paymentMethod

## Overview

Payment Method operations

Payment Method Services
<https://netlicensing.io/wiki/payment-method-services>
### Available Operations

* [getPaymentMethod](#getpaymentmethod) - Get Payment Method
* [listPaymentMethods](#listpaymentmethods) - List Payment Methods
* [updatePaymentMethod](#updatepaymentmethod) - Update Payment Method

## getPaymentMethod

Return a Payment Method info by 'paymentMethodNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentMethodRequest;
import org.openapis.openapi.models.operations.GetPaymentMethodResponse;
import org.openapis.openapi.models.operations.GetPaymentMethodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentMethodRequest req = new GetPaymentMethodRequest("nihil");            

            GetPaymentMethodResponse res = sdk.paymentMethod.getPaymentMethod(req, new GetPaymentMethodSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPaymentMethods

Return a list of all Payment Methods for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentMethodsResponse;
import org.openapis.openapi.models.operations.ListPaymentMethodsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPaymentMethodsResponse res = sdk.paymentMethod.listPaymentMethods(new ListPaymentMethodsSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePaymentMethod

Sets the provided properties to a Payment Method. Return an updated Payment Method

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentMethodRequest;
import org.openapis.openapi.models.operations.UpdatePaymentMethodRequestBody;
import org.openapis.openapi.models.operations.UpdatePaymentMethodResponse;
import org.openapis.openapi.models.operations.UpdatePaymentMethodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentMethodRequest req = new UpdatePaymentMethodRequest("voluptate") {{
                requestBody = new UpdatePaymentMethodRequestBody() {{
                    active = false;
                    paypalSubject = "cum";
                }};;
            }};            

            UpdatePaymentMethodResponse res = sdk.paymentMethod.updatePaymentMethod(req, new UpdatePaymentMethodSecurity("perferendis", "doloremque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
