# media

### Available Operations

* [displayvideoMediaDownload](#displayvideomediadownload) - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* [displayvideoMediaUpload](#displayvideomediaupload) - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

## displayvideoMediaDownload

Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadRequest;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadResponse;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurity;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoMediaDownloadRequest req = new DisplayvideoMediaDownloadRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "a";
                key = "consequatur";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "error";
                uploadProtocol = "ratione";
            }};            

            DisplayvideoMediaDownloadResponse res = sdk.media.displayvideoMediaDownload(req, new DisplayvideoMediaDownloadSecurity() {{
                option1 = new DisplayvideoMediaDownloadSecurityOption1("perferendis", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleBytestreamMedia != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoMediaUpload

Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoMediaUploadRequest;
import org.openapis.openapi.models.operations.DisplayvideoMediaUploadResponse;
import org.openapis.openapi.models.operations.DisplayvideoMediaUploadSecurity;
import org.openapis.openapi.models.operations.DisplayvideoMediaUploadSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoMediaUploadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleBytestreamMedia;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoMediaUploadRequest req = new DisplayvideoMediaUploadRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "maiores".getBytes();
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "consequuntur";
                key = "maiores";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "delectus";
                uploadProtocol = "quos";
            }};            

            DisplayvideoMediaUploadResponse res = sdk.media.displayvideoMediaUpload(req, new DisplayvideoMediaUploadSecurity() {{
                option1 = new DisplayvideoMediaUploadSecurityOption1("deleniti", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleBytestreamMedia != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
