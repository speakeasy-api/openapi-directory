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
                    parent = "sit";
                }};
                queryParams = new CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    functionId = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new FunctionInput() {{
                    buildConfig = new BuildConfigInput() {{
                        buildpackStack = "debitis";
                        dockerRegistry = "DOCKER_REGISTRY_UNSPECIFIED";
                        dockerRepository = "et";
                        entryPoint = "ut";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("et", "voluptate");
                            put("iste", "vitae");
                            put("totam", "dolores");
                        }};
                        runtime = "illum";
                        source = new Source() {{
                            repoSource = new RepoSource() {{
                                branchName = "debitis";
                                commitSha = "vel";
                                dir = "odio";
                                invertRegex = true;
                                projectId = "id";
                                repoName = "aspernatur";
                                tagName = "accusantium";
                            }};
                            storageSource = new StorageSource() {{
                                bucket = "totam";
                                generation = "commodi";
                                object = "quis";
                            }};
                        }};
                        sourceProvenance = new SourceProvenance() {{
                            resolvedRepoSource = new RepoSource() {{
                                branchName = "est";
                                commitSha = "aut";
                                dir = "odit";
                                invertRegex = true;
                                projectId = "voluptas";
                                repoName = "omnis";
                                tagName = "aut";
                            }};
                            resolvedStorageSource = new StorageSource() {{
                                bucket = "illo";
                                generation = "sed";
                                object = "officiis";
                            }};
                        }};
                        workerPool = "autem";
                    }};
                    description = "consectetur";
                    environment = "ENVIRONMENT_UNSPECIFIED";
                    eventTrigger = new EventTriggerInput() {{
                        channel = "odio";
                        eventFilters = new openapisdk.models.shared.EventFilter[]() {{
                            add(new EventFilter() {{
                                attribute = "recusandae";
                                operator = "at";
                                value = "ipsum";
                            }}),
                        }};
                        eventType = "eveniet";
                        pubsubTopic = "modi";
                        retryPolicy = "RETRY_POLICY_UNSPECIFIED";
                        serviceAccountEmail = "inventore";
                        triggerRegion = "ut";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "reprehenderit");
                        put("tempore", "maiores");
                        put("incidunt", "dolor");
                    }};
                    name = "beatae";
                    serviceConfig = new ServiceConfigInput() {{
                        allTrafficOnLatestRevision = true;
                        availableCpu = "in";
                        availableMemory = "et";
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("ipsum", "ex");
                            put("dolores", "placeat");
                        }};
                        ingressSettings = "ALLOW_INTERNAL_ONLY";
                        maxInstanceCount = 2587000937929698613;
                        maxInstanceRequestConcurrency = 8489437897698681073;
                        minInstanceCount = 1938800996802160635;
                        secretEnvironmentVariables = new openapisdk.models.shared.SecretEnvVar[]() {{
                            add(new SecretEnvVar() {{
                                key = "reprehenderit";
                                projectId = "qui";
                                secret = "qui";
                                version = "unde";
                            }}),
                        }};
                        secretVolumes = new openapisdk.models.shared.SecretVolume[]() {{
                            add(new SecretVolume() {{
                                mountPath = "autem";
                                projectId = "qui";
                                secret = "ut";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "ab";
                                        version = "neque";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "ullam";
                                        version = "et";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "accusantium";
                                        version = "esse";
                                    }}),
                                }};
                            }}),
                            add(new SecretVolume() {{
                                mountPath = "architecto";
                                projectId = "quam";
                                secret = "velit";
                                versions = new openapisdk.models.shared.SecretVersion[]() {{
                                    add(new SecretVersion() {{
                                        path = "soluta";
                                        version = "sunt";
                                    }}),
                                    add(new SecretVersion() {{
                                        path = "voluptates";
                                        version = "magni";
                                    }}),
                                }};
                            }}),
                        }};
                        securityLevel = "SECURE_OPTIONAL";
                        serviceAccountEmail = "optio";
                        timeoutSeconds = 8482125374365136680;
                        vpcConnector = "earum";
                        vpcConnectorEgressSettings = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED";
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
