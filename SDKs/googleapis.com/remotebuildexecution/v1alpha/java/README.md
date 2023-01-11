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
                    parent = "non";
                }};
                queryParams = new RemotebuildexecutionProjectsInstancesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sit";
                    alt = "json";
                    callback = "consequatur";
                    fields = "ex";
                    key = "ut";
                    oauthToken = "quas";
                    prettyPrint = true;
                    quotaUser = "consequuntur";
                    uploadType = "maxime";
                    uploadProtocol = "enim";
                }};
                request = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest() {{
                    instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance() {{
                        featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy() {{
                            actionHermeticity = "ACTION_HERMETICITY_UNSPECIFIED";
                            actionIsolation = "ACTION_ISOLATION_ENFORCED";
                            containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("nesciunt"),
                                    add("voluptatum"),
                                    add("voluptatem"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("laborum"),
                                    add("molestiae"),
                                    add("maxime"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("eaque"),
                                    add("a"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("est"),
                                    add("quibusdam"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("omnis"),
                                    add("illum"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("voluptas"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("explicabo"),
                                    add("nostrum"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("aut"),
                                    add("ut"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]() {{
                                    add("aliquam"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            linuxExecution = "LINUX_EXECUTION_FORBIDDEN";
                            linuxIsolation = "LINUX_ISOLATION_UNSPECIFIED";
                            macExecution = "MAC_EXECUTION_FORBIDDEN";
                            vmVerification = "VM_VERIFICATION_GCP_TOKEN";
                            windowsExecution = "WINDOWS_EXECUTION_TERMINAL";
                        }};
                        location = "voluptas";
                        loggingEnabled = true;
                        name = "quae";
                        state = "RUNNING";
                    }};
                    instanceId = "vero";
                    parent = "aut";
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
