# userinfo

### Available Operations

* [oauth2UserinfoGet](#oauth2userinfoget)
* [oauth2UserinfoV2MeGet](#oauth2userinfov2meget)

## oauth2UserinfoGet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetRequest;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetResponse;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetSecurity;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetSecurityOption1;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetSecurityOption2;
import org.openapis.openapi.models.operations.Oauth2UserinfoGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Oauth2UserinfoGetRequest req = new Oauth2UserinfoGetRequest() {{
                alt = AltEnum.JSON;
                fields = "debitis";
                key = "ipsa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                userIp = "suscipit";
            }};            

            Oauth2UserinfoGetResponse res = sdk.userinfo.oauth2UserinfoGet(req, new Oauth2UserinfoGetSecurity() {{
                option1 = new Oauth2UserinfoGetSecurityOption1("molestiae", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userinfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## oauth2UserinfoV2MeGet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetRequest;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetResponse;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetSecurity;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetSecurityOption1;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetSecurityOption2;
import org.openapis.openapi.models.operations.Oauth2UserinfoV2MeGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Oauth2UserinfoV2MeGetRequest req = new Oauth2UserinfoV2MeGetRequest() {{
                alt = AltEnum.JSON;
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                userIp = "nisi";
            }};            

            Oauth2UserinfoV2MeGetResponse res = sdk.userinfo.oauth2UserinfoV2MeGet(req, new Oauth2UserinfoV2MeGetSecurity() {{
                option1 = new Oauth2UserinfoV2MeGetSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.userinfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
