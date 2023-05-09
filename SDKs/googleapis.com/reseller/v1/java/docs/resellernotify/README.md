# resellernotify

### Available Operations

* [resellerResellernotifyGetwatchdetails](#resellerresellernotifygetwatchdetails) - Returns all the details of the watch corresponding to the reseller.
* [resellerResellernotifyRegister](#resellerresellernotifyregister) - Registers a Reseller for receiving notifications.
* [resellerResellernotifyUnregister](#resellerresellernotifyunregister) - Unregisters a Reseller for receiving notifications.

## resellerResellernotifyGetwatchdetails

Returns all the details of the watch corresponding to the reseller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerResellernotifyGetwatchdetailsRequest;
import org.openapis.openapi.models.operations.ResellerResellernotifyGetwatchdetailsResponse;
import org.openapis.openapi.models.operations.ResellerResellernotifyGetwatchdetailsSecurity;
import org.openapis.openapi.models.operations.ResellerResellernotifyGetwatchdetailsSecurityOption1;
import org.openapis.openapi.models.operations.ResellerResellernotifyGetwatchdetailsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerResellernotifyGetwatchdetailsRequest req = new ResellerResellernotifyGetwatchdetailsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            ResellerResellernotifyGetwatchdetailsResponse res = sdk.resellernotify.resellerResellernotifyGetwatchdetails(req, new ResellerResellernotifyGetwatchdetailsSecurity() {{
                option1 = new ResellerResellernotifyGetwatchdetailsSecurityOption1("cum", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.resellernotifyGetwatchdetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerResellernotifyRegister

Registers a Reseller for receiving notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerResellernotifyRegisterRequest;
import org.openapis.openapi.models.operations.ResellerResellernotifyRegisterResponse;
import org.openapis.openapi.models.operations.ResellerResellernotifyRegisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerResellernotifyRegisterRequest req = new ResellerResellernotifyRegisterRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                serviceAccountEmailAddress = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            ResellerResellernotifyRegisterResponse res = sdk.resellernotify.resellerResellernotifyRegister(req, new ResellerResellernotifyRegisterSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resellernotifyResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resellerResellernotifyUnregister

Unregisters a Reseller for receiving notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResellerResellernotifyUnregisterRequest;
import org.openapis.openapi.models.operations.ResellerResellernotifyUnregisterResponse;
import org.openapis.openapi.models.operations.ResellerResellernotifyUnregisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResellerResellernotifyUnregisterRequest req = new ResellerResellernotifyUnregisterRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                serviceAccountEmailAddress = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            ResellerResellernotifyUnregisterResponse res = sdk.resellernotify.resellerResellernotifyUnregister(req, new ResellerResellernotifyUnregisterSecurity("quasi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resellernotifyResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
