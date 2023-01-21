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
            Parent: "sit",
        },
        QueryParams: operations.RemotebuildexecutionProjectsInstancesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: "ACTION_HERMETICITY_BEST_EFFORT",
                    ActionIsolation: "ACTION_ISOLATION_UNSPECIFIED",
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "et",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "et",
                            "voluptate",
                            "iste",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "dolores",
                            "illum",
                            "debitis",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "dolore",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "accusantium",
                        },
                        Policy: "ALLOWED",
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quis",
                            "est",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "non",
                            "voluptas",
                        },
                        Policy: "RESTRICTED",
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "illo",
                        },
                        Policy: "FORBIDDEN",
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "autem",
                            "consectetur",
                        },
                        Policy: "POLICY_UNSPECIFIED",
                    },
                    LinuxExecution: "LINUX_EXECUTION_UNRESTRICTED",
                    LinuxIsolation: "LINUX_ISOLATION_UNSPECIFIED",
                    MacExecution: "MAC_EXECUTION_UNSPECIFIED",
                    VMVerification: "VM_VERIFICATION_GCP_TOKEN",
                    WindowsExecution: "WINDOWS_EXECUTION_UNRESTRICTED",
                },
                Location: "eveniet",
                LoggingEnabled: false,
                Name: "sint",
                State: "CREATING",
            },
            InstanceID: "ut",
            Parent: "exercitationem",
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
