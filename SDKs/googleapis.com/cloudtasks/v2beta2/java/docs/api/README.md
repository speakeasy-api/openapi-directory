# api

### Available Operations

* [cloudtasksApiQueueUpdate](#cloudtasksapiqueueupdate) - Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

## cloudtasksApiQueueUpdate

Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateRequest;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateResponse;
import org.openapis.openapi.models.operations.CloudtasksApiQueueUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HttpBody;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudtasksApiQueueUpdateRequest req = new CloudtasksApiQueueUpdateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                httpBody = new HttpBody() {{
                    contentType = "quod";
                    data = "esse";
                    extensions = new java.util.HashMap<String, Object>[]{{
                        add(new java.util.HashMap<String, Object>() {{
                            put("dolorum", "dicta");
                            put("nam", "officia");
                            put("occaecati", "fugit");
                            put("deleniti", "hic");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("totam", "beatae");
                            put("commodi", "molestiae");
                            put("modi", "qui");
                            put("impedit", "cum");
                        }}),
                        add(new java.util.HashMap<String, Object>() {{
                            put("ipsum", "excepturi");
                            put("aspernatur", "perferendis");
                        }}),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                appId = "sed";
                callback = "iste";
                fields = "dolor";
                key = "natus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            CloudtasksApiQueueUpdateResponse res = sdk.api.cloudtasksApiQueueUpdate(req, new CloudtasksApiQueueUpdateSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
