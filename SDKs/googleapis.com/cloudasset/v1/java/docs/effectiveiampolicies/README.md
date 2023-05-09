# effectiveIamPolicies

### Available Operations

* [cloudassetEffectiveIamPoliciesBatchGet](#cloudasseteffectiveiampoliciesbatchget) - Gets effective IAM policies for a batch of resources.

## cloudassetEffectiveIamPoliciesBatchGet

Gets effective IAM policies for a batch of resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetEffectiveIamPoliciesBatchGetRequest;
import org.openapis.openapi.models.operations.CloudassetEffectiveIamPoliciesBatchGetResponse;
import org.openapis.openapi.models.operations.CloudassetEffectiveIamPoliciesBatchGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetEffectiveIamPoliciesBatchGetRequest req = new CloudassetEffectiveIamPoliciesBatchGetRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                names = new String[]{{
                    add("totam"),
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            CloudassetEffectiveIamPoliciesBatchGetResponse res = sdk.effectiveIamPolicies.cloudassetEffectiveIamPoliciesBatchGet(req, new CloudassetEffectiveIamPoliciesBatchGetSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchGetEffectiveIamPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
