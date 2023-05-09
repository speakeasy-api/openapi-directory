# media

### Available Operations

* [cloudsearchMediaUpload](#cloudsearchmediaupload) - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

## cloudsearchMediaUpload

Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchMediaUploadRequest;
import org.openapis.openapi.models.operations.CloudsearchMediaUploadResponse;
import org.openapis.openapi.models.operations.CloudsearchMediaUploadSecurity;
import org.openapis.openapi.models.operations.CloudsearchMediaUploadSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchMediaUploadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Media;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchMediaUploadRequest req = new CloudsearchMediaUploadRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "temporibus".getBytes();
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "blanditiis";
                key = "quas";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "culpa";
                uploadProtocol = "corrupti";
            }};            

            CloudsearchMediaUploadResponse res = sdk.media.cloudsearchMediaUpload(req, new CloudsearchMediaUploadSecurity() {{
                option1 = new CloudsearchMediaUploadSecurityOption1("pariatur", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
