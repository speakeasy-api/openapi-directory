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

import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FunctionEnvironmentEnum;
import org.openapis.openapi.models.shared.FunctionInput;
import org.openapis.openapi.models.shared.ServiceConfigIngressSettingsEnum;
import org.openapis.openapi.models.shared.ServiceConfigSecurityLevelEnum;
import org.openapis.openapi.models.shared.ServiceConfigVpcConnectorEgressSettingsEnum;
import org.openapis.openapi.models.shared.ServiceConfigInput;
import org.openapis.openapi.models.shared.SecretVolume;
import org.openapis.openapi.models.shared.SecretVersion;
import org.openapis.openapi.models.shared.SecretEnvVar;
import org.openapis.openapi.models.shared.EventTriggerRetryPolicyEnum;
import org.openapis.openapi.models.shared.EventTriggerInput;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.BuildConfigDockerRegistryEnum;
import org.openapis.openapi.models.shared.BuildConfigInput;
import org.openapis.openapi.models.shared.SourceProvenance;
import org.openapis.openapi.models.shared.StorageSource;
import org.openapis.openapi.models.shared.RepoSource;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest() {{
                dollarXgafv = "2";
                functionInput = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "provident";
                        dockerRegistry = "ARTIFACT_REGISTRY";
                        dockerRepository = "quibusdam";
                        entryPoint = "unde";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("corrupti", "illum");
                            put("vel", "error");
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                        }};
                        runtime = "debitis";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "ipsa";
                                commitSha = "delectus";
                                dir = "tempora";
                                invertRegex = false;
                                projectId = "suscipit";
                                repoName = "molestiae";
                                tagName = "minus";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "placeat";
                                generation = "voluptatum";
                                object = "iusto";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "excepturi";
                                commitSha = "nisi";
                                dir = "recusandae";
                                invertRegex = false;
                                projectId = "temporibus";
                                repoName = "ab";
                                tagName = "quis";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "veritatis";
                                generation = "deserunt";
                                object = "perferendis";
                            }};
                        }};
                        workerPool = "ipsam";
                    }};
                    description = "repellendus";
                    environment = "GEN_2";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "quo";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "at";
                                operator = "at";
                                value = "maiores";
                            }}),
                        }};
                        eventType = "molestiae";
                        pubsubTopic = "quod";
                        retryPolicy = "RETRY_POLICY_RETRY";
                        serviceAccountEmail = "esse";
                        triggerRegion = "totam";
                    }};
                    kmsKeyName = "porro";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "nam");
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                    }};
                    name = "hic";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "optio";
                        availableMemory = "totam";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("commodi", "molestiae");
                        }};
                        ingressSettings = "ALLOW_ALL";
                        maxInstanceCount = 186332;
                        maxInstanceRequestConcurrency = 774234;
                        minInstanceCount = 736918;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "ipsum";
                                projectId = "excepturi";
                                secret = "aspernatur";
                                version = "perferendis";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "ad";
                                projectId = "natus";
                                secret = "sed";
                                version = "iste";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "natus";
                                projectId = "laboriosam";
                                secret = "hic";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "fuga";
                                        version = "in";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "corporis";
                                        version = "iste";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "iure";
                                        version = "saepe";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "quidem";
                                        version = "architecto";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURITY_LEVEL_UNSPECIFIED";
                        serviceAccountEmail = "reiciendis";
                        timeoutSeconds = 666767;
                        vpcConnector = "mollitia";
                        vpcConnectorEgressSettings = "ALL_TRAFFIC";
                    }};
                }};
                accessToken = "dolores";
                alt = "json";
                callback = "corporis";
                fields = "explicabo";
                functionId = "nobis";
                key = "enim";
                oauthToken = "omnis";
                parent = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }}            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req, new CloudfunctionsProjectsLocationsFunctionsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudfunctionsProjectsLocationsFunctionsCreate` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctionsProjectsLocationsFunctionsDelete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrl` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctionsProjectsLocationsFunctionsGenerateUploadUrl` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctionsProjectsLocationsFunctionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudfunctionsProjectsLocationsFunctionsList` - Returns a list of functions that belong to the requested project.
* `cloudfunctionsProjectsLocationsFunctionsPatch` - Updates existing function.
* `cloudfunctionsProjectsLocationsFunctionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudfunctionsProjectsLocationsFunctionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudfunctionsProjectsLocationsList` - Lists information about the supported locations for this service.
* `cloudfunctionsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `cloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
