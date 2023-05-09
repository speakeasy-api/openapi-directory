# babelFeeController

### Available Operations

* [checkForNotifications](#checkfornotifications)
* [ergoPayCreateBabelBox1](#ergopaycreatebabelbox1)
* [getBabelFeeOverview](#getbabelfeeoverview)

## checkForNotifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckForNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckForNotificationsResponse res = sdk.babelFeeController.checkForNotifications();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ergoPayCreateBabelBox1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErgoPayCreateBabelBox1Request;
import org.openapis.openapi.models.operations.ErgoPayCreateBabelBox1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErgoPayCreateBabelBox1Request req = new ErgoPayCreateBabelBox1Request("suscipit");            

            ErgoPayCreateBabelBox1Response res = sdk.babelFeeController.ergoPayCreateBabelBox1(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBabelFeeOverview

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBabelFeeOverviewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBabelFeeOverviewResponse res = sdk.babelFeeController.getBabelFeeOverview();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
