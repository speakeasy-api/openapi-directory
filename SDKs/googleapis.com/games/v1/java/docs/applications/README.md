# applications

### Available Operations

* [gamesApplicationsGet](#gamesapplicationsget) - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* [gamesApplicationsGetEndPoint](#gamesapplicationsgetendpoint) - Returns a URL for the requested end point type.
* [gamesApplicationsPlayed](#gamesapplicationsplayed) - Indicate that the currently authenticated user is playing your application.
* [gamesApplicationsVerify](#gamesapplicationsverify) - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

## gamesApplicationsGet

Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesApplicationsGetPlatformTypeEnum;
import org.openapis.openapi.models.operations.GamesApplicationsGetRequest;
import org.openapis.openapi.models.operations.GamesApplicationsGetResponse;
import org.openapis.openapi.models.operations.GamesApplicationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesApplicationsGetRequest req = new GamesApplicationsGetRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                language = "corporis";
                oauthToken = "dolore";
                platformType = GamesApplicationsGetPlatformTypeEnum.ANDROID;
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            GamesApplicationsGetResponse res = sdk.applications.gamesApplicationsGet(req, new GamesApplicationsGetSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesApplicationsGetEndPoint

Returns a URL for the requested end point type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesApplicationsGetEndPointEndPointTypeEnum;
import org.openapis.openapi.models.operations.GamesApplicationsGetEndPointRequest;
import org.openapis.openapi.models.operations.GamesApplicationsGetEndPointResponse;
import org.openapis.openapi.models.operations.GamesApplicationsGetEndPointSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesApplicationsGetEndPointRequest req = new GamesApplicationsGetEndPointRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                applicationId = "quidem";
                callback = "molestias";
                endPointType = GamesApplicationsGetEndPointEndPointTypeEnum.PROFILE_CREATION;
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            GamesApplicationsGetEndPointResponse res = sdk.applications.gamesApplicationsGetEndPoint(req, new GamesApplicationsGetEndPointSecurity("repudiandae", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.endPoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesApplicationsPlayed

Indicate that the currently authenticated user is playing your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesApplicationsPlayedRequest;
import org.openapis.openapi.models.operations.GamesApplicationsPlayedResponse;
import org.openapis.openapi.models.operations.GamesApplicationsPlayedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesApplicationsPlayedRequest req = new GamesApplicationsPlayedRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            GamesApplicationsPlayedResponse res = sdk.applications.gamesApplicationsPlayed(req, new GamesApplicationsPlayedSecurity("quibusdam", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesApplicationsVerify

Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesApplicationsVerifyRequest;
import org.openapis.openapi.models.operations.GamesApplicationsVerifyResponse;
import org.openapis.openapi.models.operations.GamesApplicationsVerifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesApplicationsVerifyRequest req = new GamesApplicationsVerifyRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "alias";
                uploadProtocol = "fugit";
            }};            

            GamesApplicationsVerifyResponse res = sdk.applications.gamesApplicationsVerify(req, new GamesApplicationsVerifySecurity("dolorum", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.applicationVerifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
