# videoCategories

### Available Operations

* [youtubeVideoCategoriesList](#youtubevideocategorieslist) - Retrieves a list of resources, possibly filtered.

## youtubeVideoCategoriesList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListRequest;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListResponse;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListSecurity;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeVideoCategoriesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeVideoCategoriesListRequest req = new YoutubeVideoCategoriesListRequest(                new String[]{{
                                add("possimus"),
                                add("fugit"),
                                add("ipsam"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "error";
                hl = "nobis";
                id = new String[]{{
                    add("voluptate"),
                    add("eius"),
                }};
                key = "expedita";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "voluptates";
                regionCode = "possimus";
                uploadType = "fugit";
                uploadProtocol = "voluptatem";
            }};            

            YoutubeVideoCategoriesListResponse res = sdk.videoCategories.youtubeVideoCategoriesList(req, new YoutubeVideoCategoriesListSecurity() {{
                option1 = new YoutubeVideoCategoriesListSecurityOption1("repudiandae", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.videoCategoryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
