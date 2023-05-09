# internalappsharingartifacts

### Available Operations

* [androidpublisherInternalappsharingartifactsUploadapk](#androidpublisherinternalappsharingartifactsuploadapk) - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherInternalappsharingartifactsUploadbundle](#androidpublisherinternalappsharingartifactsuploadbundle) - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

## androidpublisherInternalappsharingartifactsUploadapk

Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadapkResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadapkSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInternalappsharingartifactsUploadapkRequest req = new AndroidpublisherInternalappsharingartifactsUploadapkRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "libero";
                key = "ratione";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "occaecati";
                uploadProtocol = "voluptas";
            }};            

            AndroidpublisherInternalappsharingartifactsUploadapkResponse res = sdk.internalappsharingartifacts.androidpublisherInternalappsharingartifactsUploadapk(req, new AndroidpublisherInternalappsharingartifactsUploadapkSecurity("quo", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.internalAppSharingArtifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherInternalappsharingartifactsUploadbundle

Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadbundleResponse;
import org.openapis.openapi.models.operations.AndroidpublisherInternalappsharingartifactsUploadbundleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherInternalappsharingartifactsUploadbundleRequest req = new AndroidpublisherInternalappsharingartifactsUploadbundleRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "delectus";
                key = "tempore";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "repellat";
                uploadProtocol = "pariatur";
            }};            

            AndroidpublisherInternalappsharingartifactsUploadbundleResponse res = sdk.internalappsharingartifacts.androidpublisherInternalappsharingartifactsUploadbundle(req, new AndroidpublisherInternalappsharingartifactsUploadbundleSecurity("nemo", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.internalAppSharingArtifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
