# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.RemotebuildexecutionProjectsInstancesCreateRequest{
        Security: operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RemotebuildexecutionProjectsInstancesCreatePathParams{
            Parent: "ut",
        },
        QueryParams: operations.RemotebuildexecutionProjectsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "proto",
            Callback: "veritatis",
            Fields: "voluptas",
            Key: "doloribus",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "odit",
            UploadType: "et",
            UploadProtocol: "mollitia",
        },
        Request: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: "ACTION_HERMETICITY_ENFORCED",
                    ActionIsolation: "ACTION_ISOLATION_UNSPECIFIED",
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "nulla",
                            "repudiandae",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "et",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "dignissimos",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "id",
                            "sunt",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "magni",
                            "nihil",
                            "et",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "est",
                            "optio",
                            "natus",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "numquam",
                            "aut",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "exercitationem",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quidem",
                            "quibusdam",
                        },
                        Policy: "ALLOWED",
                    },
                    LinuxExecution: "LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL",
                    LinuxIsolation: "GVISOR",
                    MacExecution: "MAC_EXECUTION_UNSPECIFIED",
                    VMVerification: "VM_VERIFICATION_OFF",
                    WindowsExecution: "WINDOWS_EXECUTION_FORBIDDEN",
                },
                Location: "sed",
                LoggingEnabled: true,
                Name: "alias",
                State: "INACTIVE",
            },
            InstanceID: "ut",
            Parent: "quos",
        },
    }
    
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RemotebuildexecutionProjectsInstancesCreate` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesList` - Lists instances in a project.
* `RemotebuildexecutionProjectsInstancesTestNotify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsCreate` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsDelete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsList` - Lists worker pools in an instance.
* `RemotebuildexecutionProjectsInstancesWorkerpoolsPatch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `RemotebuildexecutionProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
