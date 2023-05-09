# authController

## Overview

Auth Controller

### Available Operations

* [getBasicUserInformation](#getbasicuserinformation) - Get Basic User Information
* [logIn](#login) - Log In
* [logOut](#logout) - Log Out

## getBasicUserInformation

Once logged in and have a token, get basic user information including group role membership

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBasicUserInformationRequest;
import org.openapis.openapi.models.operations.GetBasicUserInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBasicUserInformationRequest req = new GetBasicUserInformationRequest("provident");            

            GetBasicUserInformationResponse res = sdk.authController.getBasicUserInformation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## logIn

Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogInResponse;
import org.openapis.openapi.models.shared.Credentials;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Credentials req = new Credentials() {{
                apiKey = "distinctio";
                password = "quibusdam";
                username = "Leda_Stiedemann";
            }};            

            LogInResponse res = sdk.authController.logIn(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## logOut

Log Out

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogOutRequest;
import org.openapis.openapi.models.operations.LogOutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LogOutRequest req = new LogOutRequest("vel");            

            LogOutResponse res = sdk.authController.logOut(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
