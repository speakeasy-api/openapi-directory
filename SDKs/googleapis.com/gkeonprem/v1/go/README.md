# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkeonprem/v1/go
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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalAdminClustersCreate(ctx, operations.GkeonpremProjectsLocationsBareMetalAdminClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BareMetalAdminClusterInput: &shared.BareMetalAdminClusterInput{
            Annotations: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            BareMetalVersion: sdk.String("vel"),
            ClusterOperations: &shared.BareMetalAdminClusterOperationsConfig{
                EnableApplicationLogs: sdk.Bool(false),
            },
            ControlPlane: &shared.BareMetalAdminControlPlaneConfig{
                APIServerArgs: []shared.BareMetalAdminAPIServerArgument{
                    shared.BareMetalAdminAPIServerArgument{
                        Argument: sdk.String("deserunt"),
                        Value: sdk.String("suscipit"),
                    },
                    shared.BareMetalAdminAPIServerArgument{
                        Argument: sdk.String("iure"),
                        Value: sdk.String("magnam"),
                    },
                    shared.BareMetalAdminAPIServerArgument{
                        Argument: sdk.String("debitis"),
                        Value: sdk.String("ipsa"),
                    },
                },
                ControlPlaneNodePoolConfig: &shared.BareMetalAdminControlPlaneNodePoolConfig{
                    NodePoolConfig: &shared.BareMetalNodePoolConfig{
                        KubeletConfig: &shared.BareMetalKubeletConfig{
                            RegistryBurst: sdk.Int(963663),
                            RegistryPullQPS: sdk.Int(272656),
                            SerializeImagePullsDisabled: sdk.Bool(false),
                        },
                        Labels: map[string]string{
                            "molestiae": "minus",
                            "placeat": "voluptatum",
                        },
                        NodeConfigs: []shared.BareMetalNodeConfig{
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "nisi": "recusandae",
                                    "temporibus": "ab",
                                    "quis": "veritatis",
                                },
                                NodeIP: sdk.String("deserunt"),
                            },
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "ipsam": "repellendus",
                                },
                                NodeIP: sdk.String("sapiente"),
                            },
                        },
                        OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumLinux.ToPointer(),
                        Taints: []shared.NodeTaint{
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                Key: sdk.String("at"),
                                Value: sdk.String("maiores"),
                            },
                        },
                    },
                },
            },
            Description: sdk.String("molestiae"),
            Etag: sdk.String("quod"),
            LoadBalancer: &shared.BareMetalAdminLoadBalancerConfig{
                ManualLbConfig: &shared.BareMetalAdminManualLbConfig{
                    Enabled: sdk.Bool(false),
                },
                PortConfig: &shared.BareMetalAdminPortConfig{
                    ControlPlaneLoadBalancerPort: sdk.Int(800911),
                },
                VipConfig: &shared.BareMetalAdminVipConfig{
                    ControlPlaneVip: sdk.String("esse"),
                },
            },
            MaintenanceConfig: &shared.BareMetalAdminMaintenanceConfig{
                MaintenanceAddressCidrBlocks: []string{
                    "porro",
                    "dolorum",
                    "dicta",
                },
            },
            MaintenanceStatus: &shared.BareMetalAdminMaintenanceStatus{
                MachineDrainStatus: &shared.BareMetalAdminMachineDrainStatus{
                    DrainedMachines: []shared.BareMetalAdminDrainedMachine{
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("officia"),
                        },
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("occaecati"),
                        },
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("fugit"),
                        },
                    },
                    DrainingMachines: []shared.BareMetalAdminDrainingMachine{
                        shared.BareMetalAdminDrainingMachine{
                            NodeIP: sdk.String("hic"),
                            PodCount: sdk.Int(758616),
                        },
                        shared.BareMetalAdminDrainingMachine{
                            NodeIP: sdk.String("totam"),
                            PodCount: sdk.Int(105907),
                        },
                        shared.BareMetalAdminDrainingMachine{
                            NodeIP: sdk.String("commodi"),
                            PodCount: sdk.Int(473600),
                        },
                    },
                },
            },
            Name: sdk.String("Norma Ryan"),
            NetworkConfig: &shared.BareMetalAdminNetworkConfig{
                IslandModeCidr: &shared.BareMetalAdminIslandModeCidrConfig{
                    PodAddressCidrBlocks: []string{
                        "excepturi",
                    },
                    ServiceAddressCidrBlocks: []string{
                        "perferendis",
                    },
                },
            },
            NodeAccessConfig: &shared.BareMetalAdminNodeAccessConfig{
                LoginUser: sdk.String("ad"),
            },
            NodeConfig: &shared.BareMetalAdminWorkloadNodeConfig{
                MaxPodsPerNode: sdk.String("natus"),
            },
            OsEnvironmentConfig: &shared.BareMetalAdminOsEnvironmentConfig{
                PackageRepoExcluded: sdk.Bool(false),
            },
            Proxy: &shared.BareMetalAdminProxyConfig{
                NoProxy: []string{
                    "iste",
                },
                URI: sdk.String("http://periodic-glasses.org"),
            },
            SecurityConfig: &shared.BareMetalAdminSecurityConfig{
                Authorization: &shared.Authorization{
                    AdminUsers: []shared.ClusterUser{
                        shared.ClusterUser{
                            Username: sdk.String("Marisa_Kirlin"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Humberto.Turcotte6"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Waino_Orn"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Cecilia.Ebert"),
                        },
                    },
                },
            },
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("enim"),
                        Message: sdk.String("omnis"),
                        Reason: sdk.String("nemo"),
                        State: shared.ResourceConditionStateEnumStateTrue.ToPointer(),
                        Type: sdk.String("excepturi"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("accusantium"),
                        Message: sdk.String("iure"),
                        Reason: sdk.String("culpa"),
                        State: shared.ResourceConditionStateEnumStateUnknown.ToPointer(),
                        Type: sdk.String("sapiente"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("architecto"),
                        Message: sdk.String("mollitia"),
                        Reason: sdk.String("dolorem"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("consequuntur"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("repellat"),
                        Message: sdk.String("mollitia"),
                        Reason: sdk.String("occaecati"),
                        State: shared.ResourceConditionStateEnumStateTrue.ToPointer(),
                        Type: sdk.String("commodi"),
                    },
                },
                ErrorMessage: sdk.String("quam"),
            },
            Storage: &shared.BareMetalAdminStorageConfig{
                LvpNodeMountsConfig: &shared.BareMetalLvpConfig{
                    Path: sdk.String("molestiae"),
                    StorageClass: sdk.String("velit"),
                },
                LvpShareConfig: &shared.BareMetalLvpShareConfig{
                    LvpConfig: &shared.BareMetalLvpConfig{
                        Path: sdk.String("error"),
                        StorageClass: sdk.String("quia"),
                    },
                    SharedPathPvCount: sdk.Int(338007),
                },
            },
            ValidationCheck: &shared.ValidationCheckInput{
                Option: shared.ValidationCheckOptionEnumOptionsUnspecified.ToPointer(),
                Status: &shared.ValidationCheckStatus{
                    Result: []shared.ValidationCheckResult{
                        shared.ValidationCheckResult{
                            Category: sdk.String("animi"),
                            Description: sdk.String("enim"),
                            Details: sdk.String("odit"),
                            Reason: sdk.String("quo"),
                            State: shared.ValidationCheckResultStateEnumStateUnknown.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("tenetur"),
                            Description: sdk.String("ipsam"),
                            Details: sdk.String("id"),
                            Reason: sdk.String("possimus"),
                            State: shared.ValidationCheckResultStateEnumStateUnknown.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("quasi"),
                            Description: sdk.String("error"),
                            Details: sdk.String("temporibus"),
                            Reason: sdk.String("laborum"),
                            State: shared.ValidationCheckResultStateEnumStateUnknown.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        BareMetalAdminClusterID: sdk.String("vero"),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("ipsa"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsBareMetalAdminClustersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [GkeonpremProjectsLocationsBareMetalAdminClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclusterscreate) - Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
* [GkeonpremProjectsLocationsBareMetalAdminClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclustersenroll) - Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [GkeonpremProjectsLocationsBareMetalAdminClustersList](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclusterslist) - Lists bare metal admin clusters in a given project and location.
* [GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsbaremetaladminclustersqueryversionconfig) - Queries the bare metal admin cluster version config.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolscreate) - Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolsenroll) - Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolslist) - Lists bare metal node pools in a given project, location and bare metal cluster.
* [GkeonpremProjectsLocationsBareMetalClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclusterscreate) - Creates a new bare metal cluster in a given project and location.
* [GkeonpremProjectsLocationsBareMetalClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersenroll) - Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [GkeonpremProjectsLocationsBareMetalClustersList](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclusterslist) - Lists bare metal clusters in a given project and location.
* [GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsbaremetalclustersqueryversionconfig) - Queries the bare metal user cluster version config.
* [GkeonpremProjectsLocationsList](docs/projects/README.md#gkeonpremprojectslocationslist) - Lists information about the supported locations for this service.
* [GkeonpremProjectsLocationsOperationsCancel](docs/projects/README.md#gkeonpremprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkeonpremProjectsLocationsVmwareAdminClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareadminclustersenroll) - Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [GkeonpremProjectsLocationsVmwareAdminClustersList](docs/projects/README.md#gkeonpremprojectslocationsvmwareadminclusterslist) - Lists VMware admin clusters in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersCreate](docs/projects/README.md#gkeonpremprojectslocationsvmwareclusterscreate) - Creates a new VMware cluster in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersenroll) - Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [GkeonpremProjectsLocationsVmwareClustersList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclusterslist) - Lists VMware Clusters in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersQueryVersionConfig](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersqueryversionconfig) - Queries the VMware user cluster version config.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolscreate) - Creates a new VMware node pool in a given project, location and VMWare cluster.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsdelete) - Deletes a single VMware node pool.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsenroll) - Enrolls a VMware node pool to Anthos On-Prem API
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolslist) - Lists VMware node pools in a given project, location and VMWare cluster.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolspatch) - Updates the parameters of a single VMware node pool.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll](docs/projects/README.md#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsunenroll) - Unenrolls a VMware node pool to Anthos On-Prem API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
