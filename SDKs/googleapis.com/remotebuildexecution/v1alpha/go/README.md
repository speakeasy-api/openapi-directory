# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/remotebuildexecution/v1alpha/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RemotebuildexecutionProjectsInstancesCreateRequest{
        DollarXgafv: "2",
        GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: "ACTION_HERMETICITY_ENFORCED",
                    ActionIsolation: "ACTION_ISOLATION_ENFORCED",
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "ipsam",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quo",
                            "odit",
                            "at",
                            "at",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quod",
                            "quod",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        Policy: "FORBIDDEN",
                    },
                    LinuxExecution: "LINUX_EXECUTION_HARDENED_GVISOR",
                    LinuxIsolation: "GVISOR",
                    MacExecution: "MAC_EXECUTION_UNSPECIFIED",
                    VMVerification: "VM_VERIFICATION_GCP_TOKEN",
                    WindowsExecution: "WINDOWS_EXECUTION_TERMINAL",
                },
                Location: "optio",
                SchedulerNotificationConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig{
                    Topic: "totam",
                },
            },
            InstanceID: "beatae",
            Parent: "commodi",
        },
        AccessToken: "molestiae",
        Alt: "json",
        Callback: "qui",
        Fields: "impedit",
        Key: "cum",
        OauthToken: "esse",
        Parent: "ipsum",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "aspernatur",
        UploadProtocol: "perferendis",
    }

    ctx := context.Background()
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, req, operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `RemotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `RemotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `RemotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
