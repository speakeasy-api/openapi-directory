<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadResponse;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GdataBlobstore2Info;
import org.openapis.openapi.models.shared.GdataCompositeMedia;
import org.openapis.openapi.models.shared.GdataCompositeMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataContentTypeInfo;
import org.openapis.openapi.models.shared.GdataDiffChecksumsResponse;
import org.openapis.openapi.models.shared.GdataDiffDownloadResponse;
import org.openapis.openapi.models.shared.GdataDiffUploadRequest;
import org.openapis.openapi.models.shared.GdataDiffUploadResponse;
import org.openapis.openapi.models.shared.GdataDiffVersionResponse;
import org.openapis.openapi.models.shared.GdataDownloadParameters;
import org.openapis.openapi.models.shared.GdataMedia;
import org.openapis.openapi.models.shared.GdataMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataObjectId;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1UploadReleaseRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionMediaUploadRequest req = new FirebaseappdistributionMediaUploadRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "distinctio".getBytes();
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            FirebaseappdistributionMediaUploadResponse res = sdk.media.firebaseappdistributionMediaUpload(req, new FirebaseappdistributionMediaUploadSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->