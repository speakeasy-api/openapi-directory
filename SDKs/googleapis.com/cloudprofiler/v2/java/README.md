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

import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption3;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreatePathParams;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateQueryParams;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateResponse;
import org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum;
import org.openapis.openapi.models.shared.CreateProfileRequest;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesCreateRequest req = new CloudprofilerProjectsProfilesCreateRequest() {{
                security = new CloudprofilerProjectsProfilesCreateSecurity() {{
                    option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudprofilerProjectsProfilesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudprofilerProjectsProfilesCreateQueryParams() {{
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
                request = new CreateProfileRequest() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        projectId = "delectus";
                        target = "tempora";
                    }};
                    profileType = new org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum[]{{
                        add("HEAP"),
                        add("PEAK_HEAP"),
                    }};
                }};
            }};            

            CloudprofilerProjectsProfilesCreateResponse res = sdk.projects.cloudprofilerProjectsProfilesCreate(req);

            if (res.profile.isPresent()) {
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

* `cloudprofilerProjectsProfilesCreate` - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* `cloudprofilerProjectsProfilesCreateOffline` - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* `cloudprofilerProjectsProfilesPatch` - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
