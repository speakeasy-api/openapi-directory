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

            DisplayvideoMediaDownloadRequest req = new DisplayvideoMediaDownloadRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "ex";
                key = "occaecati";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "ad";
                uploadProtocol = "asperiores";
            }};            

            DisplayvideoMediaDownloadResponse res = sdk.media.displayvideoMediaDownload(req, new DisplayvideoMediaDownloadSecurity() {{
                option1 = new DisplayvideoMediaDownloadSecurityOption1("nam", "cumque") {{
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

            DisplayvideoMediaUploadRequest req = new DisplayvideoMediaUploadRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "occaecati".getBytes();
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "rem";
                key = "fuga";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "magni";
                uploadProtocol = "eos";
            }};            

            DisplayvideoMediaUploadResponse res = sdk.media.displayvideoMediaUpload(req, new DisplayvideoMediaUploadSecurity() {{
                option1 = new DisplayvideoMediaUploadSecurityOption1("harum", "voluptatibus") {{
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
