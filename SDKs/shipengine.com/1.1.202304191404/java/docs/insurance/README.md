# insurance

## Overview

insurance


### Available Operations

* [addFundsToInsurance](#addfundstoinsurance) - Add Funds To Insurance
* [connectInsurer](#connectinsurer) - Connect a Shipsurance Account
* [disconnectInsurer](#disconnectinsurer) - Disconnect a Shipsurance Account
* [getInsuranceBalance](#getinsurancebalance) - Get Insurance Funds Balance

## addFundsToInsurance

You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
and may want to add funds to insurance rather than keeping the account funded.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFundsToInsuranceResponse;
import org.openapis.openapi.models.shared.AddFundsToInsuranceRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.AddFundsToInsuranceRequestBody req = new AddFundsToInsuranceRequestBody(6342.74, "doloribus");            

            AddFundsToInsuranceResponse res = sdk.insurance.addFundsToInsurance(req);

            if (res.addFundsToInsuranceResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectInsurer

Connect a Shipsurance Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectInsurerResponse;
import org.openapis.openapi.models.shared.ConnectInsurerRequestBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ConnectInsurerRequestBody req = new ConnectInsurerRequestBody("john.doe@example.com", "architecto");            

            ConnectInsurerResponse res = sdk.insurance.connectInsurer(req);

            if (res.connectInsurerResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectInsurer

Disconnect a Shipsurance Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectInsurerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectInsurerResponse res = sdk.insurance.disconnectInsurer();

            if (res.disconnectInsurerResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsuranceBalance

Retrieve the balance of your Shipsurance account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsuranceBalanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsuranceBalanceResponse res = sdk.insurance.getInsuranceBalance();

            if (res.getInsuranceBalanceResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
