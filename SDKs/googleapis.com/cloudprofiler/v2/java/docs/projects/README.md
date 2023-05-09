# projects

### Available Operations

* [cloudprofilerProjectsProfilesCreate](#cloudprofilerprojectsprofilescreate) - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* [cloudprofilerProjectsProfilesCreateOffline](#cloudprofilerprojectsprofilescreateoffline) - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* [cloudprofilerProjectsProfilesPatch](#cloudprofilerprojectsprofilespatch) - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

## cloudprofilerProjectsProfilesCreate

CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateResponse;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateProfileRequest;
import org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesCreateRequest req = new CloudprofilerProjectsProfilesCreateRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                createProfileRequest = new CreateProfileRequest() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("ab", "quis");
                            put("veritatis", "deserunt");
                            put("perferendis", "ipsam");
                            put("repellendus", "sapiente");
                        }};
                        projectId = "quo";
                        target = "odit";
                    }};;
                    profileType = new org.openapis.openapi.models.shared.CreateProfileRequestProfileTypeEnum[]{{
                        add(CreateProfileRequestProfileTypeEnum.PEAK_HEAP),
                        add(CreateProfileRequestProfileTypeEnum.HEAP_ALLOC),
                        add(CreateProfileRequestProfileTypeEnum.HEAP),
                        add(CreateProfileRequestProfileTypeEnum.PEAK_HEAP),
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            CloudprofilerProjectsProfilesCreateResponse res = sdk.projects.cloudprofilerProjectsProfilesCreate(req, new CloudprofilerProjectsProfilesCreateSecurity() {{
                option1 = new CloudprofilerProjectsProfilesCreateSecurityOption1("fugit", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprofilerProjectsProfilesCreateOffline

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineResponse;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesCreateOfflineSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.ProfileInput;
import org.openapis.openapi.models.shared.ProfileProfileTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesCreateOfflineRequest req = new CloudprofilerProjectsProfilesCreateOfflineRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                profileInput = new ProfileInput() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("beatae", "commodi");
                            put("molestiae", "modi");
                            put("qui", "impedit");
                        }};
                        projectId = "cum";
                        target = "esse";
                    }};;
                    duration = "ipsum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aspernatur", "perferendis");
                        put("ad", "natus");
                        put("sed", "iste");
                    }};
                    profileBytes = "dolor";
                    profileType = ProfileProfileTypeEnum.THREADS;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            CloudprofilerProjectsProfilesCreateOfflineResponse res = sdk.projects.cloudprofilerProjectsProfilesCreateOffline(req, new CloudprofilerProjectsProfilesCreateOfflineSecurity() {{
                option1 = new CloudprofilerProjectsProfilesCreateOfflineSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprofilerProjectsProfilesPatch

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchRequest;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchResponse;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchSecurity;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchSecurityOption2;
import org.openapis.openapi.models.operations.CloudprofilerProjectsProfilesPatchSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.ProfileInput;
import org.openapis.openapi.models.shared.ProfileProfileTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprofilerProjectsProfilesPatchRequest req = new CloudprofilerProjectsProfilesPatchRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                profileInput = new ProfileInput() {{
                    deployment = new Deployment() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("mollitia", "laborum");
                            put("dolores", "dolorem");
                            put("corporis", "explicabo");
                        }};
                        projectId = "nobis";
                        target = "enim";
                    }};;
                    duration = "omnis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minima", "excepturi");
                        put("accusantium", "iure");
                    }};
                    profileBytes = "culpa";
                    profileType = ProfileProfileTypeEnum.HEAP_ALLOC;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                updateMask = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            CloudprofilerProjectsProfilesPatchResponse res = sdk.projects.cloudprofilerProjectsProfilesPatch(req, new CloudprofilerProjectsProfilesPatchSecurity() {{
                option1 = new CloudprofilerProjectsProfilesPatchSecurityOption1("commodi", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.profile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
