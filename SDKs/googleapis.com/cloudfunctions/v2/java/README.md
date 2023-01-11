# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "doloribus";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "distinctio";
                    alt = "json";
                    callback = "placeat";
                    fields = "architecto";
                    functionId = "autem";
                    key = "voluptatum";
                    oauthToken = "qui";
                    prettyPrint = true;
                    quotaUser = "nihil";
                    uploadType = "libero";
                    uploadProtocol = "et";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "possimus";
                        dockerRegistry = "ARTIFACT_REGISTRY";
                        dockerRepository = "rerum";
                        entryPoint = "repellat";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("eos", "modi");
                            put("et", "culpa");
                            put("unde", "quae");
                        }};
                        runtime = "incidunt";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "voluptas";
                                commitSha = "nam";
                                dir = "optio";
                                invertRegex = true;
                                projectId = "ratione";
                                repoName = "quaerat";
                                tagName = "qui";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "modi";
                                generation = "cum";
                                object = "rem";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "maxime";
                                commitSha = "cum";
                                dir = "iste";
                                invertRegex = true;
                                projectId = "sunt";
                                repoName = "et";
                                tagName = "dolore";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "placeat";
                                generation = "et";
                                object = "ut";
                            }};
                        }};
                        workerPool = "sapiente";
                    }};
                    description = "laborum";
                    environment = "GEN_1";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "accusamus";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "qui";
                                operator = "eos";
                                value = "ut";
                            }}),
                            add(new EventFilter() {{
                                attribute = "animi";
                                operator = "velit";
                                value = "eum";
                            }}),
                            add(new EventFilter() {{
                                attribute = "quo";
                                operator = "maiores";
                                value = "nesciunt";
                            }}),
                        }};
                        eventType = "velit";
                        pubsubTopic = "at";
                        retryPolicy = "RETRY_POLICY_UNSPECIFIED";
                        serviceAccountEmail = "placeat";
                        triggerRegion = "accusantium";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "et");
                        put("id", "consequatur");
                    }};
                    name = "modi";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = false;
                        availableCpu = "quia";
                        availableMemory = "eaque";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("assumenda", "incidunt");
                            put("perspiciatis", "quia");
                            put("unde", "ipsam");
                        }};
                        ingressSettings = "INGRESS_SETTINGS_UNSPECIFIED";
                        maxInstanceCount = 2565633263143229678;
                        maxInstanceRequestConcurrency = 4411887169756233109;
                        minInstanceCount = 7451324342267124285;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "cupiditate";
                                projectId = "sit";
                                secret = "sapiente";
                                version = "et";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "possimus";
                                projectId = "voluptate";
                                secret = "illum";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "sunt";
                                        version = "saepe";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_OPTIONAL";
                        serviceAccountEmail = "quod";
                        timeoutSeconds = 1786080741491450862;
                        vpcConnector = "esse";
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
* `cloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `cloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
