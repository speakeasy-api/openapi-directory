# SDK

## Overview

Obtains end-user authorization grants for use with other Google APIs.

<https://developers.google.com/identity/protocols/oauth2/>
### Available Operations

* [oauth2Tokeninfo](#oauth2tokeninfo) - Get token info

## oauth2Tokeninfo

Get token info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Oauth2TokeninfoRequest;
import org.openapis.openapi.models.operations.Oauth2TokeninfoResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Oauth2TokeninfoRequest req = new Oauth2TokeninfoRequest() {{
                accessToken = "illum";
                alt = AltEnum.JSON;
                fields = "vel";
                idToken = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                userIp = "magnam";
            }};            

            Oauth2TokeninfoResponse res = sdk.sdk.oauth2Tokeninfo(req);

            if (res.tokeninfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
