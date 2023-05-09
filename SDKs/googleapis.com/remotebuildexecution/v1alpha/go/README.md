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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RemotebuildexecutionProjectsInstancesCreate(ctx, operations.RemotebuildexecutionProjectsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequestInput{
            Instance: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceInput{
                FeaturePolicy: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy{
                    ActionHermeticity: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionHermeticityEnumActionHermeticityEnforced.ToPointer(),
                    ActionIsolation: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyActionIsolationEnumActionIsolationEnforced.ToPointer(),
                    ContainerImageSources: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "unde",
                            "nulla",
                            "corrupti",
                            "illum",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerAddCapabilities: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "deserunt",
                            "suscipit",
                            "iure",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerChrootPath: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "ipsa",
                            "delectus",
                            "tempora",
                            "suscipit",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerNetwork: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "placeat",
                            "voluptatum",
                            "iusto",
                            "excepturi",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerPrivileged: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "temporibus",
                            "ab",
                            "quis",
                            "veritatis",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumForbidden.ToPointer(),
                    },
                    DockerRunAsContainerProvidedUser: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "ipsam",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumRestricted.ToPointer(),
                    },
                    DockerRunAsRoot: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quo",
                            "odit",
                            "at",
                            "at",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumRestricted.ToPointer(),
                    },
                    DockerRuntime: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "quod",
                            "quod",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumAllowed.ToPointer(),
                    },
                    DockerSiblingContainers: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature{
                        AllowedValues: []string{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        Policy: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnumForbidden.ToPointer(),
                    },
                    LinuxExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnumLinuxExecutionHardenedGvisor.ToPointer(),
                    LinuxIsolation: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumGvisor.ToPointer(),
                    MacExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyMacExecutionEnumMacExecutionUnspecified.ToPointer(),
                    VMVerification: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationGcpToken.ToPointer(),
                    WindowsExecution: shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyWindowsExecutionEnumWindowsExecutionTerminal.ToPointer(),
                },
                Location: sdk.String("optio"),
                SchedulerNotificationConfig: &shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig{
                    Topic: sdk.String("totam"),
                },
            },
            InstanceID: sdk.String("beatae"),
            Parent: sdk.String("commodi"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("esse"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.RemotebuildexecutionProjectsInstancesCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [RemotebuildexecutionProjectsInstancesCreate](docs/projects/README.md#remotebuildexecutionprojectsinstancescreate) - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* [RemotebuildexecutionProjectsInstancesList](docs/projects/README.md#remotebuildexecutionprojectsinstanceslist) - Lists instances in a project.
* [RemotebuildexecutionProjectsInstancesTestNotify](docs/projects/README.md#remotebuildexecutionprojectsinstancestestnotify) - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsCreate](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolscreate) - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsDelete](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolsdelete) - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsList](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolslist) - Lists worker pools in an instance.
* [RemotebuildexecutionProjectsInstancesWorkerpoolsPatch](docs/projects/README.md#remotebuildexecutionprojectsinstancesworkerpoolspatch) - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* [RemotebuildexecutionProjectsOperationsGet](docs/projects/README.md#remotebuildexecutionprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
