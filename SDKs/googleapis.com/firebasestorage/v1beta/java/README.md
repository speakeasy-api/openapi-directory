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

import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebasePathParams;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsAddFirebaseRequest req = new FirebasestorageProjectsBucketsAddFirebaseRequest() {{
                security = new FirebasestorageProjectsBucketsAddFirebaseSecurity() {{
                    option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasestorageProjectsBucketsAddFirebasePathParams() {{
                    bucket = "corrupti";
                }};
                queryParams = new FirebasestorageProjectsBucketsAddFirebaseQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            FirebasestorageProjectsBucketsAddFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsAddFirebase(req);

            if (res.bucket.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `firebasestorageProjectsBucketsAddFirebase` - Links a Google Cloud Storage bucket to a Firebase project.
* `firebasestorageProjectsBucketsGet` - Gets a single linked storage bucket.
* `firebasestorageProjectsBucketsList` - Lists the linked storage buckets for a project.
* `firebasestorageProjectsBucketsRemoveFirebase` - Unlinks a linked Google Cloud Storage bucket from a Firebase project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
