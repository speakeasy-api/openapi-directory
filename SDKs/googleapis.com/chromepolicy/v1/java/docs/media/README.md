# media

### Available Operations

* [chromepolicyMediaUpload](#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

## chromepolicyMediaUpload

Creates an enterprise file from the content provided by user. Returns a public download url for end user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromepolicyMediaUploadRequest;
import org.openapis.openapi.models.operations.ChromepolicyMediaUploadResponse;
import org.openapis.openapi.models.operations.ChromepolicyMediaUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleChromePolicyVersionsV1UploadPolicyFileRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromepolicyMediaUploadRequest req = new ChromepolicyMediaUploadRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "voluptate".getBytes();
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "necessitatibus";
                key = "distinctio";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "ipsum";
                uploadProtocol = "voluptate";
            }};            

            ChromepolicyMediaUploadResponse res = sdk.media.chromepolicyMediaUpload(req, new ChromepolicyMediaUploadSecurity("id", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromePolicyVersionsV1UploadPolicyFileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
