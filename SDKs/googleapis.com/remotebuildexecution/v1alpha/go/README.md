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
        Security: operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RemotebuildexecutionProjectsInstancesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.RemotebuildexecutionProjectsInstancesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: "ACTION_HERMETICITY_OFF",
                    ActionIsolation: "ACTION_ISOLATION_OFF",
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "debitis",
                            "ipsa",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "suscipit",
                            "molestiae",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "voluptatum",
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "ab",
                            "quis",
                            "veritatis",
                            "deserunt",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "repellendus",
                            "sapiente",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "at",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "molestiae",
                            "quod",
                            "quod",
                            "esse",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "dolorum",
                            "dicta",
                            "nam",
                            "officia",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "deleniti",
                        },
                        Policy: "RESTRICTED",
                    },
                    LinuxExecution: "LINUX_EXECUTION_HARDENED_GVISOR",
                    LinuxIsolation: "GVISOR",
                    MacExecution: "MAC_EXECUTION_UNSPECIFIED",
                    VMVerification: "VM_VERIFICATION_GCP_TOKEN",
                    WindowsExecution: "WINDOWS_EXECUTION_FORBIDDEN",
                },
                Location: "modi",
                SchedulerNotificationConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig{
                    Topic: "qui",
                },
            },
            InstanceID: "impedit",
            Parent: "cum",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
