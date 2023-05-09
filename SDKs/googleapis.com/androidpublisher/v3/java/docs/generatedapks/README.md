# generatedapks

### Available Operations

* [androidpublisherGeneratedapksDownload](#androidpublishergeneratedapksdownload) - Downloads a single signed APK generated from an app bundle.
* [androidpublisherGeneratedapksList](#androidpublishergeneratedapkslist) - Returns download metadata for all APKs that were generated from a given app bundle.

## androidpublisherGeneratedapksDownload

Downloads a single signed APK generated from an app bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksDownloadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksDownloadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksDownloadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherGeneratedapksDownloadRequest req = new AndroidpublisherGeneratedapksDownloadRequest("nisi", "at", 878373L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "repudiandae";
                key = "optio";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "voluptate";
                uploadProtocol = "blanditiis";
            }};            

            AndroidpublisherGeneratedapksDownloadResponse res = sdk.generatedapks.androidpublisherGeneratedapksDownload(req, new AndroidpublisherGeneratedapksDownloadSecurity("officia", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherGeneratedapksList

Returns download metadata for all APKs that were generated from a given app bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherGeneratedapksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherGeneratedapksListRequest req = new AndroidpublisherGeneratedapksListRequest("numquam", 364912L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "ducimus";
                fields = "nesciunt";
                key = "fuga";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "quasi";
                uploadProtocol = "rem";
            }};            

            AndroidpublisherGeneratedapksListResponse res = sdk.generatedapks.androidpublisherGeneratedapksList(req, new AndroidpublisherGeneratedapksListSecurity("fugiat", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.generatedApksListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
