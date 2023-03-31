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
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest;
import org.openapis.openapi.models.operations.CloudfunctionsProjectsLocationsFunctionsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudfunctionsProjectsLocationsFunctionsCreateRequest req = new CloudfunctionsProjectsLocationsFunctionsCreateRequest() {{
                security = new CloudfunctionsProjectsLocationsFunctionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudfunctionsProjectsLocationsFunctionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    functionId = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "iure";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "debitis";
                        entryPoint = "ipsa";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                        }};
                        runtime = "nisi";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "recusandae";
                                commitSha = "temporibus";
                                dir = "ab";
                                invertRegex = false;
                                projectId = "quis";
                                repoName = "veritatis";
                                tagName = "deserunt";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "perferendis";
                                generation = "ipsam";
                                object = "repellendus";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "sapiente";
                                commitSha = "quo";
                                dir = "odit";
                                invertRegex = false;
                                projectId = "at";
                                repoName = "at";
                                tagName = "maiores";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "molestiae";
                                generation = "quod";
                                object = "quod";
                            }};
                        }};
                        workerPool = "esse";
                    }};
                    description = "totam";
                    environment = "GEN_2";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "dolorum";
                        eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                            add(new EventFilter() {{
                                attribute = "nam";
                                operator = "officia";
                                value = "occaecati";
                            }}),
                        }};
                        eventType = "fugit";
                        pubsubTopic = "deleniti";
                        retryPolicy = "RETRY_POLICY_RETRY";
                        serviceAccountEmail = "optio";
                        triggerRegion = "totam";
                    }};
                    kmsKeyName = "beatae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    name = "cum";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "esse";
                        availableMemory = "ipsum";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("aspernatur", "perferendis");
                            put("ad", "natus");
                            put("sed", "iste");
                        }};
                        ingressSettings = "INGRESS_SETTINGS_UNSPECIFIED";
                        maxInstanceCount = 616934;
                        maxInstanceRequestConcurrency = 386489;
                        minInstanceCount = 943749;
                        secretEnvironmentVariables = new org.openapis.openapi.models.shared.SecretEnvVar[]{{
                            add(new SecretEnvVar() {{
                                key = "fuga";
                                projectId = "in";
                                secret = "corporis";
                                version = "iste";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "iure";
                                projectId = "saepe";
                                secret = "quidem";
                                version = "architecto";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "ipsa";
                                projectId = "reiciendis";
                                secret = "est";
                                version = "mollitia";
                            }}),
                            add(new SecretEnvVar() {{
                                key = "laborum";
                                projectId = "dolores";
                                secret = "dolorem";
                                version = "corporis";
                            }}),
                        }};
                        secretVolumes = new org.openapis.openapi.models.shared.SecretVolume[]{{
                            add(new SecretVolume() {{
                                mountPath = "nobis";
                                projectId = "enim";
                                secret = "omnis";
                                versions = new org.openapis.openapi.models.shared.SecretVersion[]{{
                                    add(new SecretVersion() {{
                                        path = "minima";
                                        version = "excepturi";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "accusantium";
                                        version = "iure";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_ALWAYS";
                        serviceAccountEmail = "doloribus";
                        timeoutSeconds = 958950;
                        vpcConnector = "architecto";
                        vpcConnectorEgressSettings = "PRIVATE_RANGES_ONLY";
                    }};
                }};
            }};            

            CloudfunctionsProjectsLocationsFunctionsCreateResponse res = sdk.projects.cloudfunctionsProjectsLocationsFunctionsCreate(req);

            if (res.operation.isPresent()) {
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
