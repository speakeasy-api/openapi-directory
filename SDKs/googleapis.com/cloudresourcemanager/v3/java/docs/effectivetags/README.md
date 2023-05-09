# effectiveTags

### Available Operations

* [cloudresourcemanagerEffectiveTagsList](#cloudresourcemanagereffectivetagslist) - Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

## cloudresourcemanagerEffectiveTagsList

Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerEffectiveTagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerEffectiveTagsListRequest req = new CloudresourcemanagerEffectiveTagsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                pageSize = 528895L;
                pageToken = "iusto";
                parent = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            CloudresourcemanagerEffectiveTagsListResponse res = sdk.effectiveTags.cloudresourcemanagerEffectiveTagsList(req, new CloudresourcemanagerEffectiveTagsListSecurity() {{
                option1 = new CloudresourcemanagerEffectiveTagsListSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listEffectiveTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
