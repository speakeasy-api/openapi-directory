# media

### Available Operations

* [cloudsupportMediaDownload](#cloudsupportmediadownload) - Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
* [cloudsupportMediaUpload](#cloudsupportmediaupload) - Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

## cloudsupportMediaDownload

Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportMediaDownloadRequest;
import org.openapis.openapi.models.operations.CloudsupportMediaDownloadResponse;
import org.openapis.openapi.models.operations.CloudsupportMediaDownloadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportMediaDownloadRequest req = new CloudsupportMediaDownloadRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            CloudsupportMediaDownloadResponse res = sdk.media.cloudsupportMediaDownload(req, new CloudsupportMediaDownloadSecurity("natus", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudsupportMediaUpload

Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportMediaUploadRequest;
import org.openapis.openapi.models.operations.CloudsupportMediaUploadResponse;
import org.openapis.openapi.models.operations.CloudsupportMediaUploadSecurity;
import org.openapis.openapi.models.shared.ActorInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttachmentInput;
import org.openapis.openapi.models.shared.CreateAttachmentRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportMediaUploadRequest req = new CloudsupportMediaUploadRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "illum".getBytes();
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            CloudsupportMediaUploadResponse res = sdk.media.cloudsupportMediaUpload(req, new CloudsupportMediaUploadSecurity("quidem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
