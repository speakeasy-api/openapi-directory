# i18nRegions

### Available Operations

* [youtubeI18nRegionsList](#youtubei18nregionslist) - Retrieves a list of resources, possibly filtered.

## youtubeI18nRegionsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListRequest;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListResponse;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListSecurity;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeI18nRegionsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeI18nRegionsListRequest req = new YoutubeI18nRegionsListRequest(                new String[]{{
                                add("asperiores"),
                                add("ex"),
                                add("voluptas"),
                                add("debitis"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "laborum";
                hl = "consectetur";
                key = "velit";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "impedit";
                uploadProtocol = "magni";
            }};            

            YoutubeI18nRegionsListResponse res = sdk.i18nRegions.youtubeI18nRegionsList(req, new YoutubeI18nRegionsListSecurity() {{
                option1 = new YoutubeI18nRegionsListSecurityOption1("soluta", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.i18nRegionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
