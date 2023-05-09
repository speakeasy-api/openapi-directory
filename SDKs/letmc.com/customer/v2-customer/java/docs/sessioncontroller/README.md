# sessionController

### Available Operations

* [sessionControllerChangePassword](#sessioncontrollerchangepassword) - Change the password of a customer given their existing and new password.
* [sessionControllerCreateLandlordLogin](#sessioncontrollercreatelandlordlogin) - Send a request to the in-tray to create a landlord login.
* [sessionControllerGetSessionInfo](#sessioncontrollergetsessioninfo) - Gets information about the currently logged on customer.
* [sessionControllerLogin](#sessioncontrollerlogin) - Login as a customer given their username and password.
* [sessionControllerLogout](#sessioncontrollerlogout) - Logout a customer previously logged in via the Login endpoint.
* [sessionControllerResetPassword](#sessioncontrollerresetpassword) - Reset the customer's password. An email will be sent out to reset.

## sessionControllerChangePassword

Change the password of a customer given their existing and new password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerChangePasswordRequest;
import org.openapis.openapi.models.operations.SessionControllerChangePasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerChangePasswordRequest req = new SessionControllerChangePasswordRequest("optio", "totam", "beatae", "commodi");            

            SessionControllerChangePasswordResponse res = sdk.sessionController.sessionControllerChangePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionControllerCreateLandlordLogin

Send a request to the in-tray to create a landlord login.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerCreateLandlordLoginRequest;
import org.openapis.openapi.models.operations.SessionControllerCreateLandlordLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerCreateLandlordLoginRequest req = new SessionControllerCreateLandlordLoginRequest("molestiae", "modi", "qui", "impedit", "cum", "esse", "ipsum") {{
                branchID = "excepturi";
            }};            

            SessionControllerCreateLandlordLoginResponse res = sdk.sessionController.sessionControllerCreateLandlordLogin(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionControllerGetSessionInfo

Gets information about the currently logged on customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerGetSessionInfoRequest;
import org.openapis.openapi.models.operations.SessionControllerGetSessionInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerGetSessionInfoRequest req = new SessionControllerGetSessionInfoRequest("aspernatur", "perferendis");            

            SessionControllerGetSessionInfoResponse res = sdk.sessionController.sessionControllerGetSessionInfo(req);

            if (res.sessionControllerGetSessionInfo200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionControllerLogin

Login as a customer given their username and password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerLoginRequest;
import org.openapis.openapi.models.operations.SessionControllerLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerLoginRequest req = new SessionControllerLoginRequest("ad", "natus", "sed");            

            SessionControllerLoginResponse res = sdk.sessionController.sessionControllerLogin(req);

            if (res.sessionControllerLogin200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionControllerLogout

Logout a customer previously logged in via the Login endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerLogoutRequest;
import org.openapis.openapi.models.operations.SessionControllerLogoutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerLogoutRequest req = new SessionControllerLogoutRequest("iste", "dolor");            

            SessionControllerLogoutResponse res = sdk.sessionController.sessionControllerLogout(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sessionControllerResetPassword

Reset the customer's password. An email will be sent out to reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SessionControllerResetPasswordRequest;
import org.openapis.openapi.models.operations.SessionControllerResetPasswordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SessionControllerResetPasswordRequest req = new SessionControllerResetPasswordRequest("natus", "laboriosam");            

            SessionControllerResetPasswordResponse res = sdk.sessionController.sessionControllerResetPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
