# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            DisplayvideoMediaDownloadRequest req = new DisplayvideoMediaDownloadRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            DisplayvideoMediaDownloadResponse res = sdk.media.displayvideoMediaDownload(req, new DisplayvideoMediaDownloadSecurity() {{
                option1 = new DisplayvideoMediaDownloadSecurityOption1("suscipit", "iure") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [media](docs/media/README.md)

* [displayvideoMediaDownload](docs/media/README.md#displayvideomediadownload) - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* [displayvideoMediaUpload](docs/media/README.md#displayvideomediaupload) - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### [sdfdownloadtasks](docs/sdfdownloadtasks/README.md)

* [displayvideoSdfdownloadtasksOperationsGet](docs/sdfdownloadtasks/README.md#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
