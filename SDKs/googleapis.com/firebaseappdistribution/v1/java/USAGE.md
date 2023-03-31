<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadSecurity;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadPathParams;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadQueryParams;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadRequest;
import org.openapis.openapi.models.operations.FirebaseappdistributionMediaUploadResponse;
import org.openapis.openapi.models.shared.GoogleFirebaseAppdistroV1UploadReleaseRequest;
import org.openapis.openapi.models.shared.GdataMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataMedia;
import org.openapis.openapi.models.shared.GdataObjectId;
import org.openapis.openapi.models.shared.GdataDownloadParameters;
import org.openapis.openapi.models.shared.GdataDiffVersionResponse;
import org.openapis.openapi.models.shared.GdataDiffUploadResponse;
import org.openapis.openapi.models.shared.GdataCompositeMediaReferenceTypeEnum;
import org.openapis.openapi.models.shared.GdataCompositeMedia;
import org.openapis.openapi.models.shared.GdataBlobstore2Info;
import org.openapis.openapi.models.shared.GdataDiffUploadRequest;
import org.openapis.openapi.models.shared.GdataDiffDownloadResponse;
import org.openapis.openapi.models.shared.GdataDiffChecksumsResponse;
import org.openapis.openapi.models.shared.GdataContentTypeInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseappdistributionMediaUploadRequest req = new FirebaseappdistributionMediaUploadRequest() {{
                security = new FirebaseappdistributionMediaUploadSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FirebaseappdistributionMediaUploadPathParams() {{
                    app = "corrupti";
                }};
                queryParams = new FirebaseappdistributionMediaUploadQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = "suscipit".getBytes();
            }};            

            FirebaseappdistributionMediaUploadResponse res = sdk.media.firebaseappdistributionMediaUpload(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->