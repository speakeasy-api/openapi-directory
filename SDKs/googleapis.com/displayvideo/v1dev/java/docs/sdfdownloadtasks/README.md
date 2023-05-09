# sdfdownloadtasks

### Available Operations

* [displayvideoSdfdownloadtasksOperationsGet](#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

## displayvideoSdfdownloadtasksOperationsGet

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoSdfdownloadtasksOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoSdfdownloadtasksOperationsGetRequest req = new DisplayvideoSdfdownloadtasksOperationsGetRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "nam";
                uploadProtocol = "officia";
            }};            

            DisplayvideoSdfdownloadtasksOperationsGetResponse res = sdk.sdfdownloadtasks.displayvideoSdfdownloadtasksOperationsGet(req, new DisplayvideoSdfdownloadtasksOperationsGetSecurity() {{
                option1 = new DisplayvideoSdfdownloadtasksOperationsGetSecurityOption1("occaecati", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
