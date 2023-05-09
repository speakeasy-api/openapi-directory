# threatLists

### Available Operations

* [webriskThreatListsComputeDiff](#webriskthreatlistscomputediff) - Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

## webriskThreatListsComputeDiff

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum;
import org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffRequest;
import org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffResponse;
import org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffSecurity;
import org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffThreatTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebriskThreatListsComputeDiffRequest req = new WebriskThreatListsComputeDiffRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                constraintsMaxDatabaseEntries = 208876L;
                constraintsMaxDiffEntries = 635059L;
                constraintsSupportedCompressions = new org.openapis.openapi.models.operations.WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[]{{
                    add(WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum.RICE),
                }};
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                threatType = WebriskThreatListsComputeDiffThreatTypeEnum.SOCIAL_ENGINEERING;
                uploadType = "molestiae";
                uploadProtocol = "velit";
                versionToken = "error";
            }};            

            WebriskThreatListsComputeDiffResponse res = sdk.threatLists.webriskThreatListsComputeDiff(req, new WebriskThreatListsComputeDiffSecurity("quia", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudWebriskV1ComputeThreatListDiffResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
