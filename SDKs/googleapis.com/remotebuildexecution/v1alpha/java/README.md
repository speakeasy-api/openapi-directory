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

            RemotebuildexecutionProjectsInstancesCreateRequest req = new RemotebuildexecutionProjectsInstancesCreateRequest() {{
                security = new RemotebuildexecutionProjectsInstancesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RemotebuildexecutionProjectsInstancesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new RemotebuildexecutionProjectsInstancesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest() {{
                    instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance() {{
                        featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy() {{
                            actionHermeticity = "ACTION_HERMETICITY_BEST_EFFORT";
                            actionIsolation = "ACTION_ISOLATION_UNSPECIFIED";
                            containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("et"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("et"),
                                    add("voluptate"),
                                    add("iste"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("dolores"),
                                    add("illum"),
                                    add("debitis"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("dolore"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("accusantium"),
                                }};
                                policy = "ALLOWED";
                            }};
                            dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("quis"),
                                    add("est"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("non"),
                                    add("voluptas"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("illo"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("autem"),
                                    add("consectetur"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            linuxExecution = "LINUX_EXECUTION_UNRESTRICTED";
                            linuxIsolation = "LINUX_ISOLATION_UNSPECIFIED";
                            macExecution = "MAC_EXECUTION_UNSPECIFIED";
                            vmVerification = "VM_VERIFICATION_GCP_TOKEN";
                            windowsExecution = "WINDOWS_EXECUTION_UNRESTRICTED";
                        }};
                        location = "eveniet";
                        loggingEnabled = false;
                        name = "sint";
                        state = "CREATING";
                    }};
                    instanceId = "ut";
                    parent = "exercitationem";
                }};
            }};

            RemotebuildexecutionProjectsInstancesCreateResponse res = sdk.projects.remotebuildexecutionProjectsInstancesCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
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

* `remotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `remotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `remotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `remotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `remotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `remotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `remotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
