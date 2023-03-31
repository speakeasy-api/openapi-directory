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

import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateSecurity;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreatePathParams;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateQueryParams;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateRequest;
import org.openapis.openapi.models.operations.RemotebuildexecutionProjectsInstancesCreateResponse;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum;
import org.openapis.openapi.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RemotebuildexecutionProjectsInstancesCreateQueryParams() {{
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
                request = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput() {{
                    instance = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput() {{
                        featurePolicy = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy() {{
                            actionHermeticity = "ACTION_HERMETICITY_OFF";
                            actionIsolation = "ACTION_ISOLATION_OFF";
                            containerImageSources = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("debitis"),
                                    add("ipsa"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerAddCapabilities = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerChrootPath = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerNetwork = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                                policy = "POLICY_UNSPECIFIED";
                            }};
                            dockerPrivileged = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("repellendus"),
                                    add("sapiente"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerRunAsContainerProvidedUser = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("at"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            dockerRunAsRoot = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                    add("esse"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerRuntime = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("dolorum"),
                                    add("dicta"),
                                    add("nam"),
                                    add("officia"),
                                }};
                                policy = "FORBIDDEN";
                            }};
                            dockerSiblingContainers = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature() {{
                                allowedValues = new String[]{{
                                    add("deleniti"),
                                }};
                                policy = "RESTRICTED";
                            }};
                            linuxExecution = "LINUX_EXECUTION_HARDENED_GVISOR";
                            linuxIsolation = "GVISOR";
                            macExecution = "MAC_EXECUTION_UNSPECIFIED";
                            vmVerification = "VM_VERIFICATION_GCP_TOKEN";
                            windowsExecution = "WINDOWS_EXECUTION_FORBIDDEN";
                        }};
                        location = "modi";
                        schedulerNotificationConfig = new GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig() {{
                            topic = "qui";
                        }};
                    }};
                    instanceId = "impedit";
                    parent = "cum";
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
