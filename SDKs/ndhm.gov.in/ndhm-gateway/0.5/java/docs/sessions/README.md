# sessions

### Available Operations

* [getV05WellKnownOpenidConfiguration](#getv05wellknownopenidconfiguration) - Get openid configuration
* [getV05Certs](#getv05certs) - Get certs for JWT verification
* [postV05SessionsJson](#postv05sessionsjson) - Get access token
* [postV05SessionsRaw](#postv05sessionsraw) - Get access token

## getV05WellKnownOpenidConfiguration

Get openid configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05WellKnownOpenidConfigurationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05WellKnownOpenidConfigurationResponse res = sdk.sessions.getV05WellKnownOpenidConfiguration();

            if (res.openIdConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV05Certs

Get certs for JWT verification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV05CertsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV05CertsResponse res = sdk.sessions.getV05Certs();

            if (res.certs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SessionsJson

Get access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SessionsJsonResponse;
import org.openapis.openapi.models.shared.SessionRequest;
import org.openapis.openapi.models.shared.SessionRequestGrantTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SessionRequest req = new SessionRequest("in", "quisquam", SessionRequestGrantTypeEnum.CLIENT_CREDENTIALS) {{
                refreshToken = "enim";
            }};            

            PostV05SessionsJsonResponse res = sdk.sessions.postV05SessionsJson(req);

            if (res.sessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV05SessionsRaw

Get access token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV05SessionsRawResponse;
import org.openapis.openapi.models.shared.SessionRequest;
import org.openapis.openapi.models.shared.SessionRequestGrantTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "nulla".getBytes()            

            PostV05SessionsRawResponse res = sdk.sessions.postV05SessionsRaw(req);

            if (res.sessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
