# Projects

### Available Operations

* [GkeonpremProjectsLocationsBareMetalAdminClustersCreate](#gkeonpremprojectslocationsbaremetaladminclusterscreate) - Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment
* [GkeonpremProjectsLocationsBareMetalAdminClustersEnroll](#gkeonpremprojectslocationsbaremetaladminclustersenroll) - Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [GkeonpremProjectsLocationsBareMetalAdminClustersList](#gkeonpremprojectslocationsbaremetaladminclusterslist) - Lists bare metal admin clusters in a given project and location.
* [GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig](#gkeonpremprojectslocationsbaremetaladminclustersqueryversionconfig) - Queries the bare metal admin cluster version config.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolscreate) - Creates a new bare metal node pool in a given project, location and Bare Metal cluster.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolsenroll) - Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.
* [GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList](#gkeonpremprojectslocationsbaremetalclustersbaremetalnodepoolslist) - Lists bare metal node pools in a given project, location and bare metal cluster.
* [GkeonpremProjectsLocationsBareMetalClustersCreate](#gkeonpremprojectslocationsbaremetalclusterscreate) - Creates a new bare metal cluster in a given project and location.
* [GkeonpremProjectsLocationsBareMetalClustersEnroll](#gkeonpremprojectslocationsbaremetalclustersenroll) - Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [GkeonpremProjectsLocationsBareMetalClustersList](#gkeonpremprojectslocationsbaremetalclusterslist) - Lists bare metal clusters in a given project and location.
* [GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig](#gkeonpremprojectslocationsbaremetalclustersqueryversionconfig) - Queries the bare metal user cluster version config.
* [GkeonpremProjectsLocationsList](#gkeonpremprojectslocationslist) - Lists information about the supported locations for this service.
* [GkeonpremProjectsLocationsOperationsCancel](#gkeonpremprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [GkeonpremProjectsLocationsVmwareAdminClustersEnroll](#gkeonpremprojectslocationsvmwareadminclustersenroll) - Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.
* [GkeonpremProjectsLocationsVmwareAdminClustersList](#gkeonpremprojectslocationsvmwareadminclusterslist) - Lists VMware admin clusters in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersCreate](#gkeonpremprojectslocationsvmwareclusterscreate) - Creates a new VMware cluster in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersEnroll](#gkeonpremprojectslocationsvmwareclustersenroll) - Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.
* [GkeonpremProjectsLocationsVmwareClustersList](#gkeonpremprojectslocationsvmwareclusterslist) - Lists VMware Clusters in a given project and location.
* [GkeonpremProjectsLocationsVmwareClustersQueryVersionConfig](#gkeonpremprojectslocationsvmwareclustersqueryversionconfig) - Queries the VMware user cluster version config.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolscreate) - Creates a new VMware node pool in a given project, location and VMWare cluster.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsdelete) - Deletes a single VMware node pool.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsenroll) - Enrolls a VMware node pool to Anthos On-Prem API
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolslist) - Lists VMware node pools in a given project, location and VMWare cluster.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolspatch) - Updates the parameters of a single VMware node pool.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll](#gkeonpremprojectslocationsvmwareclustersvmwarenodepoolsunenroll) - Unenrolls a VMware node pool to Anthos On-Prem API

## GkeonpremProjectsLocationsBareMetalAdminClustersCreate

Creates a new bare metal admin cluster in a given project and location. The API needs to be combined with creating a bootstrap cluster to work. See: https://cloud.google.com/anthos/clusters/docs/bare-metal/latest/installing/creating-clusters/create-admin-cluster-api#prepare_bootstrap_environment

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BareMetalAdminClusterInput: &shared.BareMetalAdminClusterInput{
            Annotations: map[string]string{
                "ut": "maiores",
                "dicta": "corporis",
            },
            BareMetalVersion: sdk.String("dolore"),
            ClusterOperations: &shared.BareMetalAdminClusterOperationsConfig{
                EnableApplicationLogs: sdk.Bool(false),
            },
            ControlPlane: &shared.BareMetalAdminControlPlaneConfig{
                APIServerArgs: []shared.BareMetalAdminAPIServerArgument{
                    shared.BareMetalAdminAPIServerArgument{
                        Argument: sdk.String("dicta"),
                        Value: sdk.String("harum"),
                    },
                    shared.BareMetalAdminAPIServerArgument{
                        Argument: sdk.String("enim"),
                        Value: sdk.String("accusamus"),
                    },
                },
                ControlPlaneNodePoolConfig: &shared.BareMetalAdminControlPlaneNodePoolConfig{
                    NodePoolConfig: &shared.BareMetalNodePoolConfig{
                        KubeletConfig: &shared.BareMetalKubeletConfig{
                            RegistryBurst: sdk.Int(414263),
                            RegistryPullQPS: sdk.Int(918236),
                            SerializeImagePullsDisabled: sdk.Bool(false),
                        },
                        Labels: map[string]string{
                            "ipsum": "quidem",
                        },
                        NodeConfigs: []shared.BareMetalNodeConfig{
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "pariatur": "modi",
                                    "praesentium": "rem",
                                    "voluptates": "quasi",
                                },
                                NodeIP: sdk.String("repudiandae"),
                            },
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "veritatis": "itaque",
                                    "incidunt": "enim",
                                    "consequatur": "est",
                                },
                                NodeIP: sdk.String("quibusdam"),
                            },
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "deserunt": "distinctio",
                                },
                                NodeIP: sdk.String("quibusdam"),
                            },
                        },
                        OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumOperatingSystemUnspecified.ToPointer(),
                        Taints: []shared.NodeTaint{
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                Key: sdk.String("aliquid"),
                                Value: sdk.String("cupiditate"),
                            },
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                Key: sdk.String("perferendis"),
                                Value: sdk.String("magni"),
                            },
                        },
                    },
                },
            },
            Description: sdk.String("assumenda"),
            Etag: sdk.String("ipsam"),
            LoadBalancer: &shared.BareMetalAdminLoadBalancerConfig{
                ManualLbConfig: &shared.BareMetalAdminManualLbConfig{
                    Enabled: sdk.Bool(false),
                },
                PortConfig: &shared.BareMetalAdminPortConfig{
                    ControlPlaneLoadBalancerPort: sdk.Int(4695),
                },
                VipConfig: &shared.BareMetalAdminVipConfig{
                    ControlPlaneVip: sdk.String("fugit"),
                },
            },
            MaintenanceConfig: &shared.BareMetalAdminMaintenanceConfig{
                MaintenanceAddressCidrBlocks: []string{
                    "excepturi",
                    "tempora",
                    "facilis",
                },
            },
            MaintenanceStatus: &shared.BareMetalAdminMaintenanceStatus{
                MachineDrainStatus: &shared.BareMetalAdminMachineDrainStatus{
                    DrainedMachines: []shared.BareMetalAdminDrainedMachine{
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("labore"),
                        },
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("delectus"),
                        },
                        shared.BareMetalAdminDrainedMachine{
                            NodeIP: sdk.String("eum"),
                        },
                    },
                    DrainingMachines: []shared.BareMetalAdminDrainingMachine{
                        shared.BareMetalAdminDrainingMachine{
                            NodeIP: sdk.String("eligendi"),
                            PodCount: sdk.Int(576157),
                        },
                    },
                },
            },
            Name: sdk.String("Sherri Tremblay"),
            NetworkConfig: &shared.BareMetalAdminNetworkConfig{
                IslandModeCidr: &shared.BareMetalAdminIslandModeCidrConfig{
                    PodAddressCidrBlocks: []string{
                        "debitis",
                    },
                    ServiceAddressCidrBlocks: []string{
                        "dolorum",
                        "in",
                        "in",
                        "illum",
                    },
                },
            },
            NodeAccessConfig: &shared.BareMetalAdminNodeAccessConfig{
                LoginUser: sdk.String("maiores"),
            },
            NodeConfig: &shared.BareMetalAdminWorkloadNodeConfig{
                MaxPodsPerNode: sdk.String("rerum"),
            },
            OsEnvironmentConfig: &shared.BareMetalAdminOsEnvironmentConfig{
                PackageRepoExcluded: sdk.Bool(false),
            },
            Proxy: &shared.BareMetalAdminProxyConfig{
                NoProxy: []string{
                    "magnam",
                },
                URI: sdk.String("https://stupendous-handmaiden.info"),
            },
            SecurityConfig: &shared.BareMetalAdminSecurityConfig{
                Authorization: &shared.Authorization{
                    AdminUsers: []shared.ClusterUser{
                        shared.ClusterUser{
                            Username: sdk.String("Shaniya.Friesen"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Shannon_Wintheiser72"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Magdalena_Kuvalis"),
                        },
                    },
                },
            },
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("deserunt"),
                        Message: sdk.String("nisi"),
                        Reason: sdk.String("vel"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("omnis"),
                    },
                },
                ErrorMessage: sdk.String("molestiae"),
            },
            Storage: &shared.BareMetalAdminStorageConfig{
                LvpNodeMountsConfig: &shared.BareMetalLvpConfig{
                    Path: sdk.String("perferendis"),
                    StorageClass: sdk.String("nihil"),
                },
                LvpShareConfig: &shared.BareMetalLvpShareConfig{
                    LvpConfig: &shared.BareMetalLvpConfig{
                        Path: sdk.String("magnam"),
                        StorageClass: sdk.String("distinctio"),
                    },
                    SharedPathPvCount: sdk.Int(660174),
                },
            },
            ValidationCheck: &shared.ValidationCheckInput{
                Option: shared.ValidationCheckOptionEnumOptionsUnspecified.ToPointer(),
                Status: &shared.ValidationCheckStatus{
                    Result: []shared.ValidationCheckResult{
                        shared.ValidationCheckResult{
                            Category: sdk.String("suscipit"),
                            Description: sdk.String("natus"),
                            Details: sdk.String("nobis"),
                            Reason: sdk.String("eum"),
                            State: shared.ValidationCheckResultStateEnumStateWarning.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("aspernatur"),
                            Description: sdk.String("architecto"),
                            Details: sdk.String("magnam"),
                            Reason: sdk.String("et"),
                            State: shared.ValidationCheckResultStateEnumStateSkipped.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BareMetalAdminClusterID: sdk.String("quos"),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
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

## GkeonpremProjectsLocationsBareMetalAdminClustersEnroll

Enrolls an existing bare metal admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalAdminClustersEnroll(ctx, operations.GkeonpremProjectsLocationsBareMetalAdminClustersEnrollRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnrollBareMetalAdminClusterRequest: &shared.EnrollBareMetalAdminClusterRequest{
            BareMetalAdminClusterID: sdk.String("odit"),
            LocalName: sdk.String("nemo"),
            Membership: sdk.String("quasi"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("deleniti"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.GkeonpremProjectsLocationsBareMetalAdminClustersEnrollSecurity{
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

## GkeonpremProjectsLocationsBareMetalAdminClustersList

Lists bare metal admin clusters in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalAdminClustersList(ctx, operations.GkeonpremProjectsLocationsBareMetalAdminClustersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(904648),
        PageToken: sdk.String("pariatur"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
        View: operations.GkeonpremProjectsLocationsBareMetalAdminClustersListViewEnumClusterViewUnspecified.ToPointer(),
    }, operations.GkeonpremProjectsLocationsBareMetalAdminClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBareMetalAdminClustersResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig

Queries the bare metal admin cluster version config.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfig(ctx, operations.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("excepturi"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UpgradeConfigClusterName: sdk.String("accusantium"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.GkeonpremProjectsLocationsBareMetalAdminClustersQueryVersionConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryBareMetalAdminVersionConfigResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate

Creates a new bare metal node pool in a given project, location and Bare Metal cluster.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreate(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BareMetalNodePoolInput: &shared.BareMetalNodePoolInput{
            Annotations: map[string]string{
                "voluptate": "autem",
                "nam": "eaque",
            },
            DisplayName: sdk.String("pariatur"),
            Etag: sdk.String("nemo"),
            Name: sdk.String("Joseph Steuber DDS"),
            NodePoolConfig: &shared.BareMetalNodePoolConfig{
                KubeletConfig: &shared.BareMetalKubeletConfig{
                    RegistryBurst: sdk.Int(359978),
                    RegistryPullQPS: sdk.Int(944124),
                    SerializeImagePullsDisabled: sdk.Bool(false),
                },
                Labels: map[string]string{
                    "nobis": "dolores",
                    "quis": "totam",
                    "dignissimos": "eaque",
                },
                NodeConfigs: []shared.BareMetalNodeConfig{
                    shared.BareMetalNodeConfig{
                        Labels: map[string]string{
                            "eos": "perferendis",
                        },
                        NodeIP: sdk.String("dolores"),
                    },
                    shared.BareMetalNodeConfig{
                        Labels: map[string]string{
                            "quam": "dolor",
                            "vero": "nostrum",
                            "hic": "recusandae",
                            "omnis": "facilis",
                        },
                        NodeIP: sdk.String("perspiciatis"),
                    },
                },
                OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumOperatingSystemUnspecified.ToPointer(),
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                        Key: sdk.String("blanditiis"),
                        Value: sdk.String("error"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                        Key: sdk.String("occaecati"),
                        Value: sdk.String("rerum"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                        Key: sdk.String("asperiores"),
                        Value: sdk.String("earum"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("iste"),
                        Value: sdk.String("dolorum"),
                    },
                },
            },
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("pariatur"),
                        Message: sdk.String("provident"),
                        Reason: sdk.String("nobis"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("delectus"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("quaerat"),
                        Message: sdk.String("quos"),
                        Reason: sdk.String("aliquid"),
                        State: shared.ResourceConditionStateEnumStateUnspecified.ToPointer(),
                        Type: sdk.String("dolorem"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("dolor"),
                        Message: sdk.String("qui"),
                        Reason: sdk.String("ipsum"),
                        State: shared.ResourceConditionStateEnumStateUnknown.ToPointer(),
                        Type: sdk.String("excepturi"),
                    },
                },
                ErrorMessage: sdk.String("cum"),
            },
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BareMetalNodePoolID: sdk.String("reiciendis"),
        Callback: sdk.String("amet"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veritatis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("odio"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsCreateSecurity{
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

## GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll

Enrolls an existing bare metal node pool to the Anthos On-Prem API within a given project and location. Through enrollment, an existing node pool will become Anthos On-Prem API managed. The corresponding GCP resources will be created.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnroll(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnrollBareMetalNodePoolRequest: &shared.EnrollBareMetalNodePoolRequest{
            BareMetalNodePoolID: sdk.String("accusamus"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("atque"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsEnrollSecurity{
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

## GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList

Lists bare metal node pools in a given project, location and bare metal cluster.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsList(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(714697),
        PageToken: sdk.String("asperiores"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("id"),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersBareMetalNodePoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBareMetalNodePoolsResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsBareMetalClustersCreate

Creates a new bare metal cluster in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersCreate(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BareMetalClusterInput: &shared.BareMetalClusterInput{
            AdminClusterMembership: sdk.String("eius"),
            Annotations: map[string]string{
                "perferendis": "amet",
            },
            BareMetalVersion: sdk.String("optio"),
            ClusterOperations: &shared.BareMetalClusterOperationsConfig{
                EnableApplicationLogs: sdk.Bool(false),
            },
            ControlPlane: &shared.BareMetalControlPlaneConfig{
                APIServerArgs: []shared.BareMetalAPIServerArgument{
                    shared.BareMetalAPIServerArgument{
                        Argument: sdk.String("ad"),
                        Value: sdk.String("saepe"),
                    },
                    shared.BareMetalAPIServerArgument{
                        Argument: sdk.String("suscipit"),
                        Value: sdk.String("deserunt"),
                    },
                    shared.BareMetalAPIServerArgument{
                        Argument: sdk.String("provident"),
                        Value: sdk.String("minima"),
                    },
                    shared.BareMetalAPIServerArgument{
                        Argument: sdk.String("repellendus"),
                        Value: sdk.String("totam"),
                    },
                },
                ControlPlaneNodePoolConfig: &shared.BareMetalControlPlaneNodePoolConfig{
                    NodePoolConfig: &shared.BareMetalNodePoolConfig{
                        KubeletConfig: &shared.BareMetalKubeletConfig{
                            RegistryBurst: sdk.Int(628982),
                            RegistryPullQPS: sdk.Int(55),
                            SerializeImagePullsDisabled: sdk.Bool(false),
                        },
                        Labels: map[string]string{
                            "quaerat": "tempora",
                            "vel": "quod",
                            "officiis": "qui",
                            "dolorum": "a",
                        },
                        NodeConfigs: []shared.BareMetalNodeConfig{
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "iusto": "ipsum",
                                    "quisquam": "tenetur",
                                    "amet": "tempore",
                                },
                                NodeIP: sdk.String("accusamus"),
                            },
                            shared.BareMetalNodeConfig{
                                Labels: map[string]string{
                                    "enim": "dolorem",
                                    "sapiente": "totam",
                                },
                                NodeIP: sdk.String("nihil"),
                            },
                        },
                        OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumOperatingSystemUnspecified.ToPointer(),
                        Taints: []shared.NodeTaint{
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                Key: sdk.String("sed"),
                                Value: sdk.String("vel"),
                            },
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                Key: sdk.String("voluptas"),
                                Value: sdk.String("deserunt"),
                            },
                            shared.NodeTaint{
                                Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                Key: sdk.String("ipsum"),
                                Value: sdk.String("incidunt"),
                            },
                        },
                    },
                },
            },
            Description: sdk.String("qui"),
            LoadBalancer: &shared.BareMetalLoadBalancerConfig{
                BgpLbConfig: &shared.BareMetalBgpLbConfig{
                    AddressPools: []shared.BareMetalLoadBalancerAddressPool{
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "pariatur",
                                "soluta",
                                "dicta",
                                "laborum",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("totam"),
                        },
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "aspernatur",
                                "dolores",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("distinctio"),
                        },
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "aliquid",
                                "quam",
                                "molestias",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("temporibus"),
                        },
                    },
                    Asn: sdk.String("qui"),
                    BgpPeerConfigs: []shared.BareMetalBgpPeerConfig{
                        shared.BareMetalBgpPeerConfig{
                            Asn: sdk.String("fugit"),
                            ControlPlaneNodes: []string{
                                "odio",
                            },
                            IPAddress: sdk.String("sunt"),
                        },
                    },
                    LoadBalancerNodePoolConfig: &shared.BareMetalLoadBalancerNodePoolConfig{
                        NodePoolConfig: &shared.BareMetalNodePoolConfig{
                            KubeletConfig: &shared.BareMetalKubeletConfig{
                                RegistryBurst: sdk.Int(355613),
                                RegistryPullQPS: sdk.Int(722081),
                                SerializeImagePullsDisabled: sdk.Bool(false),
                            },
                            Labels: map[string]string{
                                "voluptatem": "cumque",
                                "soluta": "nobis",
                                "et": "saepe",
                                "ipsum": "veritatis",
                            },
                            NodeConfigs: []shared.BareMetalNodeConfig{
                                shared.BareMetalNodeConfig{
                                    Labels: map[string]string{
                                        "tempore": "cupiditate",
                                        "aperiam": "delectus",
                                        "dolorem": "dolore",
                                    },
                                    NodeIP: sdk.String("labore"),
                                },
                                shared.BareMetalNodeConfig{
                                    Labels: map[string]string{
                                        "dolorum": "architecto",
                                    },
                                    NodeIP: sdk.String("quae"),
                                },
                                shared.BareMetalNodeConfig{
                                    Labels: map[string]string{
                                        "quas": "itaque",
                                    },
                                    NodeIP: sdk.String("consequatur"),
                                },
                            },
                            OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumLinux.ToPointer(),
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("doloribus"),
                                    Value: sdk.String("ut"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("cupiditate"),
                                    Value: sdk.String("qui"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("laudantium"),
                                    Value: sdk.String("odio"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("voluptatibus"),
                                    Value: sdk.String("quisquam"),
                                },
                            },
                        },
                    },
                },
                ManualLbConfig: &shared.BareMetalManualLbConfig{
                    Enabled: sdk.Bool(false),
                },
                MetalLbConfig: &shared.BareMetalMetalLbConfig{
                    AddressPools: []shared.BareMetalLoadBalancerAddressPool{
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "quis",
                                "ipsum",
                                "delectus",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("voluptate"),
                        },
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "vero",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("tenetur"),
                        },
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "hic",
                                "distinctio",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("quod"),
                        },
                        shared.BareMetalLoadBalancerAddressPool{
                            Addresses: []string{
                                "similique",
                                "facilis",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("vero"),
                        },
                    },
                    LoadBalancerNodePoolConfig: &shared.BareMetalLoadBalancerNodePoolConfig{
                        NodePoolConfig: &shared.BareMetalNodePoolConfig{
                            KubeletConfig: &shared.BareMetalKubeletConfig{
                                RegistryBurst: sdk.Int(498140),
                                RegistryPullQPS: sdk.Int(293020),
                                SerializeImagePullsDisabled: sdk.Bool(false),
                            },
                            Labels: map[string]string{
                                "illum": "sequi",
                                "natus": "impedit",
                                "aut": "voluptatibus",
                                "exercitationem": "nulla",
                            },
                            NodeConfigs: []shared.BareMetalNodeConfig{
                                shared.BareMetalNodeConfig{
                                    Labels: map[string]string{
                                        "maiores": "doloribus",
                                        "iusto": "eligendi",
                                        "ducimus": "alias",
                                        "officia": "tempora",
                                    },
                                    NodeIP: sdk.String("ipsam"),
                                },
                            },
                            OperatingSystem: shared.BareMetalNodePoolConfigOperatingSystemEnumOperatingSystemUnspecified.ToPointer(),
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("possimus"),
                                    Value: sdk.String("magnam"),
                                },
                            },
                        },
                    },
                },
                PortConfig: &shared.BareMetalPortConfig{
                    ControlPlaneLoadBalancerPort: sdk.Int(189848),
                },
                VipConfig: &shared.BareMetalVipConfig{
                    ControlPlaneVip: sdk.String("ex"),
                    IngressVip: sdk.String("laudantium"),
                },
            },
            MaintenanceConfig: &shared.BareMetalMaintenanceConfig{
                MaintenanceAddressCidrBlocks: []string{
                    "dolor",
                },
            },
            MaintenanceStatus: &shared.BareMetalMaintenanceStatus{
                MachineDrainStatus: &shared.BareMetalMachineDrainStatus{
                    DrainedMachines: []shared.BareMetalDrainedMachine{
                        shared.BareMetalDrainedMachine{
                            NodeIP: sdk.String("quasi"),
                        },
                        shared.BareMetalDrainedMachine{
                            NodeIP: sdk.String("ex"),
                        },
                        shared.BareMetalDrainedMachine{
                            NodeIP: sdk.String("nulla"),
                        },
                        shared.BareMetalDrainedMachine{
                            NodeIP: sdk.String("excepturi"),
                        },
                    },
                    DrainingMachines: []shared.BareMetalDrainingMachine{
                        shared.BareMetalDrainingMachine{
                            NodeIP: sdk.String("nostrum"),
                            PodCount: sdk.Int(960835),
                        },
                        shared.BareMetalDrainingMachine{
                            NodeIP: sdk.String("quisquam"),
                            PodCount: sdk.Int(906556),
                        },
                        shared.BareMetalDrainingMachine{
                            NodeIP: sdk.String("ea"),
                            PodCount: sdk.Int(774048),
                        },
                        shared.BareMetalDrainingMachine{
                            NodeIP: sdk.String("corporis"),
                            PodCount: sdk.Int(333145),
                        },
                    },
                },
            },
            Name: sdk.String("Stephanie Gutkowski"),
            NetworkConfig: &shared.BareMetalNetworkConfig{
                AdvancedNetworking: sdk.Bool(false),
                IslandModeCidr: &shared.BareMetalIslandModeCidrConfig{
                    PodAddressCidrBlocks: []string{
                        "recusandae",
                    },
                    ServiceAddressCidrBlocks: []string{
                        "minima",
                    },
                },
                MultipleNetworkInterfacesConfig: &shared.BareMetalMultipleNetworkInterfacesConfig{
                    Enabled: sdk.Bool(false),
                },
                SrIovConfig: &shared.BareMetalSrIovConfig{
                    Enabled: sdk.Bool(false),
                },
            },
            NodeAccessConfig: &shared.BareMetalNodeAccessConfig{
                LoginUser: sdk.String("eaque"),
            },
            NodeConfig: &shared.BareMetalWorkloadNodeConfig{
                ContainerRuntime: shared.BareMetalWorkloadNodeConfigContainerRuntimeEnumContainerd.ToPointer(),
                MaxPodsPerNode: sdk.String("libero"),
            },
            OsEnvironmentConfig: &shared.BareMetalOsEnvironmentConfig{
                PackageRepoExcluded: sdk.Bool(false),
            },
            Proxy: &shared.BareMetalProxyConfig{
                NoProxy: []string{
                    "aut",
                },
                URI: sdk.String("https://snarling-emery.com"),
            },
            SecurityConfig: &shared.BareMetalSecurityConfig{
                Authorization: &shared.Authorization{
                    AdminUsers: []shared.ClusterUser{
                        shared.ClusterUser{
                            Username: sdk.String("Arjun67"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Margarett43"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Helen_Rolfson"),
                        },
                        shared.ClusterUser{
                            Username: sdk.String("Sabina.Hoeger27"),
                        },
                    },
                },
            },
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("explicabo"),
                        Message: sdk.String("provident"),
                        Reason: sdk.String("ipsa"),
                        State: shared.ResourceConditionStateEnumStateTrue.ToPointer(),
                        Type: sdk.String("magnam"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("odio"),
                        Message: sdk.String("eius"),
                        Reason: sdk.String("esse"),
                        State: shared.ResourceConditionStateEnumStateTrue.ToPointer(),
                        Type: sdk.String("rem"),
                    },
                },
                ErrorMessage: sdk.String("fuga"),
            },
            Storage: &shared.BareMetalStorageConfig{
                LvpNodeMountsConfig: &shared.BareMetalLvpConfig{
                    Path: sdk.String("reprehenderit"),
                    StorageClass: sdk.String("quidem"),
                },
                LvpShareConfig: &shared.BareMetalLvpShareConfig{
                    LvpConfig: &shared.BareMetalLvpConfig{
                        Path: sdk.String("fugiat"),
                        StorageClass: sdk.String("ut"),
                    },
                    SharedPathPvCount: sdk.Int(433439),
                },
            },
            ValidationCheck: &shared.ValidationCheckInput{
                Option: shared.ValidationCheckOptionEnumSkipValidationCheckBlocking.ToPointer(),
                Status: &shared.ValidationCheckStatus{
                    Result: []shared.ValidationCheckResult{
                        shared.ValidationCheckResult{
                            Category: sdk.String("eos"),
                            Description: sdk.String("praesentium"),
                            Details: sdk.String("quisquam"),
                            Reason: sdk.String("veritatis"),
                            State: shared.ValidationCheckResultStateEnumStateUnknown.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("id"),
                            Description: sdk.String("quidem"),
                            Details: sdk.String("neque"),
                            Reason: sdk.String("quo"),
                            State: shared.ValidationCheckResultStateEnumStateWarning.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("quo"),
                            Description: sdk.String("fuga"),
                            Details: sdk.String("eius"),
                            Reason: sdk.String("eos"),
                            State: shared.ValidationCheckResultStateEnumStateFailure.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("ab"),
                            Description: sdk.String("cupiditate"),
                            Details: sdk.String("consequatur"),
                            Reason: sdk.String("tempora"),
                            State: shared.ValidationCheckResultStateEnumStateWarning.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BareMetalClusterID: sdk.String("sequi"),
        Callback: sdk.String("quo"),
        Fields: sdk.String("esse"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("aperiam"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("inventore"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersCreateSecurity{
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

## GkeonpremProjectsLocationsBareMetalClustersEnroll

Enrolls an existing bare metal user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersEnroll(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersEnrollRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnrollBareMetalClusterRequest: &shared.EnrollBareMetalClusterRequest{
            AdminClusterMembership: sdk.String("totam"),
            BareMetalClusterID: sdk.String("accusamus"),
            LocalName: sdk.String("aliquam"),
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("deserunt"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("eum"),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersEnrollSecurity{
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

## GkeonpremProjectsLocationsBareMetalClustersList

Lists bare metal clusters in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersList(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("fugit"),
        Filter: sdk.String("fuga"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("incidunt"),
        PageSize: sdk.Int64(539224),
        PageToken: sdk.String("explicabo"),
        Parent: "minima",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("sapiente"),
        View: operations.GkeonpremProjectsLocationsBareMetalClustersListViewEnumClusterViewUnspecified.ToPointer(),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBareMetalClustersResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig

Queries the bare metal user cluster version config.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfig(ctx, operations.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        CreateConfigAdminClusterMembership: sdk.String("atque"),
        CreateConfigAdminClusterName: sdk.String("et"),
        Fields: sdk.String("esse"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("accusamus"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UpgradeConfigClusterName: sdk.String("quod"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("vero"),
    }, operations.GkeonpremProjectsLocationsBareMetalClustersQueryVersionConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryBareMetalVersionConfigResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsList(ctx, operations.GkeonpremProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("harum"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        Name: "Warren Rau V",
        OauthToken: sdk.String("tempore"),
        PageSize: sdk.Int64(240020),
        PageToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("minus"),
    }, operations.GkeonpremProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsOperationsCancel(ctx, operations.GkeonpremProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "consectetur": "esse",
            "blanditiis": "provident",
            "a": "nulla",
            "quas": "esse",
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("sint"),
        Key: sdk.String("pariatur"),
        Name: "Howard Upton",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("similique"),
    }, operations.GkeonpremProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareAdminClustersEnroll

Enrolls an existing VMware admin cluster to the Anthos On-Prem API within a given project and location. Through enrollment, an existing admin cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster will be expected to be performed through the API.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareAdminClustersEnroll(ctx, operations.GkeonpremProjectsLocationsVmwareAdminClustersEnrollRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnrollVmwareAdminClusterRequest: &shared.EnrollVmwareAdminClusterRequest{
            LocalName: sdk.String("aliquid"),
            Membership: sdk.String("tenetur"),
            VmwareAdminClusterID: sdk.String("quae"),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("eius"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("illum"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.GkeonpremProjectsLocationsVmwareAdminClustersEnrollSecurity{
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

## GkeonpremProjectsLocationsVmwareAdminClustersList

Lists VMware admin clusters in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareAdminClustersList(ctx, operations.GkeonpremProjectsLocationsVmwareAdminClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("voluptatum"),
        PageSize: sdk.Int64(185232),
        PageToken: sdk.String("quibusdam"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("dolorum"),
        View: operations.GkeonpremProjectsLocationsVmwareAdminClustersListViewEnumClusterViewUnspecified.ToPointer(),
    }, operations.GkeonpremProjectsLocationsVmwareAdminClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVmwareAdminClustersResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersCreate

Creates a new VMware cluster in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersCreate(ctx, operations.GkeonpremProjectsLocationsVmwareClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VmwareClusterInput: &shared.VmwareClusterInput{
            AdminClusterMembership: sdk.String("tenetur"),
            Annotations: map[string]string{
                "at": "et",
            },
            AntiAffinityGroups: &shared.VmwareAAGConfig{
                AagConfigDisabled: sdk.Bool(false),
            },
            Authorization: &shared.Authorization{
                AdminUsers: []shared.ClusterUser{
                    shared.ClusterUser{
                        Username: sdk.String("Anabel23"),
                    },
                    shared.ClusterUser{
                        Username: sdk.String("Dasia.Morar52"),
                    },
                },
            },
            AutoRepairConfig: &shared.VmwareAutoRepairConfig{
                Enabled: sdk.Bool(false),
            },
            ControlPlaneNode: &shared.VmwareControlPlaneNodeConfig{
                AutoResizeConfig: &shared.VmwareAutoResizeConfig{
                    Enabled: sdk.Bool(false),
                },
                Cpus: sdk.String("aut"),
                Memory: sdk.String("laudantium"),
                Replicas: sdk.String("eum"),
                VsphereConfig: &shared.VmwareControlPlaneVsphereConfig{
                    Datastore: sdk.String("mollitia"),
                },
            },
            DataplaneV2: &shared.VmwareDataplaneV2Config{
                AdvancedNetworking: sdk.Bool(false),
                DataplaneV2Enabled: sdk.Bool(false),
                WindowsDataplaneV2Enabled: sdk.Bool(false),
            },
            Description: sdk.String("ab"),
            EnableControlPlaneV2: sdk.Bool(false),
            Etag: sdk.String("corrupti"),
            LoadBalancer: &shared.VmwareLoadBalancerConfig{
                F5Config: &shared.VmwareF5BigIPConfig{
                    Address: sdk.String("02527 Garrison Branch"),
                    Partition: sdk.String("dignissimos"),
                    SnatPool: sdk.String("dicta"),
                },
                ManualLbConfig: &shared.VmwareManualLbConfig{
                    ControlPlaneNodePort: sdk.Int(981640),
                    IngressHTTPNodePort: sdk.Int(618480),
                    IngressHTTPSNodePort: sdk.Int(244651),
                    KonnectivityServerNodePort: sdk.Int(974257),
                },
                MetalLbConfig: &shared.VmwareMetalLbConfig{
                    AddressPools: []shared.VmwareAddressPool{
                        shared.VmwareAddressPool{
                            Addresses: []string{
                                "aperiam",
                                "ea",
                                "quaerat",
                                "consequuntur",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("repellendus"),
                        },
                        shared.VmwareAddressPool{
                            Addresses: []string{
                                "maxime",
                                "dignissimos",
                                "officia",
                            },
                            AvoidBuggyIps: sdk.Bool(false),
                            ManualAssign: sdk.Bool(false),
                            Pool: sdk.String("asperiores"),
                        },
                    },
                },
                VipConfig: &shared.VmwareVipConfig{
                    ControlPlaneVip: sdk.String("nemo"),
                    IngressVip: sdk.String("quae"),
                },
            },
            Name: sdk.String("Robyn Schmitt I"),
            NetworkConfig: &shared.VmwareNetworkConfigInput{
                ControlPlaneV2Config: &shared.VmwareControlPlaneV2Config{
                    ControlPlaneIPBlock: &shared.VmwareIPBlock{
                        Gateway: sdk.String("fuga"),
                        Ips: []shared.VmwareHostIP{
                            shared.VmwareHostIP{
                                Hostname: sdk.String("hefty-default.name"),
                                IP: sdk.String("est"),
                            },
                            shared.VmwareHostIP{
                                Hostname: sdk.String("vengeful-liquidity.org"),
                                IP: sdk.String("vel"),
                            },
                            shared.VmwareHostIP{
                                Hostname: sdk.String("lonely-mentor.info"),
                                IP: sdk.String("labore"),
                            },
                        },
                        Netmask: sdk.String("possimus"),
                    },
                },
                DhcpIPConfig: &shared.VmwareDhcpIPConfig{
                    Enabled: sdk.Bool(false),
                },
                HostConfig: &shared.VmwareHostConfig{
                    DNSSearchDomains: []string{
                        "cum",
                        "commodi",
                        "in",
                    },
                    DNSServers: []string{
                        "reiciendis",
                        "assumenda",
                    },
                    NtpServers: []string{
                        "recusandae",
                        "aliquid",
                    },
                },
                PodAddressCidrBlocks: []string{
                    "cum",
                },
                ServiceAddressCidrBlocks: []string{
                    "in",
                },
                StaticIPConfig: &shared.VmwareStaticIPConfig{
                    IPBlocks: []shared.VmwareIPBlock{
                        shared.VmwareIPBlock{
                            Gateway: sdk.String("earum"),
                            Ips: []shared.VmwareHostIP{
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("extroverted-wisdom.info"),
                                    IP: sdk.String("reiciendis"),
                                },
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("rewarding-thumb.org"),
                                    IP: sdk.String("dolore"),
                                },
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("clever-wreck.biz"),
                                    IP: sdk.String("non"),
                                },
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("elegant-brick.info"),
                                    IP: sdk.String("a"),
                                },
                            },
                            Netmask: sdk.String("debitis"),
                        },
                        shared.VmwareIPBlock{
                            Gateway: sdk.String("consectetur"),
                            Ips: []shared.VmwareHostIP{
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("relieved-girl.com"),
                                    IP: sdk.String("voluptates"),
                                },
                                shared.VmwareHostIP{
                                    Hostname: sdk.String("self-assured-bull.org"),
                                    IP: sdk.String("similique"),
                                },
                            },
                            Netmask: sdk.String("tempora"),
                        },
                    },
                },
            },
            OnPremVersion: sdk.String("aspernatur"),
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("voluptas"),
                        Message: sdk.String("voluptas"),
                        Reason: sdk.String("minima"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("dolorum"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("adipisci"),
                        Message: sdk.String("minus"),
                        Reason: sdk.String("dolores"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("in"),
                    },
                },
                ErrorMessage: sdk.String("dolore"),
            },
            Storage: &shared.VmwareStorageConfig{
                VsphereCsiDisabled: sdk.Bool(false),
            },
            ValidationCheck: &shared.ValidationCheckInput{
                Option: shared.ValidationCheckOptionEnumOptionsUnspecified.ToPointer(),
                Status: &shared.ValidationCheckStatus{
                    Result: []shared.ValidationCheckResult{
                        shared.ValidationCheckResult{
                            Category: sdk.String("temporibus"),
                            Description: sdk.String("ullam"),
                            Details: sdk.String("adipisci"),
                            Reason: sdk.String("cum"),
                            State: shared.ValidationCheckResultStateEnumStateSkipped.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("quas"),
                            Description: sdk.String("hic"),
                            Details: sdk.String("nesciunt"),
                            Reason: sdk.String("culpa"),
                            State: shared.ValidationCheckResultStateEnumStateSkipped.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("pariatur"),
                            Description: sdk.String("totam"),
                            Details: sdk.String("hic"),
                            Reason: sdk.String("exercitationem"),
                            State: shared.ValidationCheckResultStateEnumStateFatal.ToPointer(),
                        },
                        shared.ValidationCheckResult{
                            Category: sdk.String("sit"),
                            Description: sdk.String("rerum"),
                            Details: sdk.String("sed"),
                            Reason: sdk.String("reiciendis"),
                            State: shared.ValidationCheckResultStateEnumStateUnknown.ToPointer(),
                        },
                    },
                },
            },
            Vcenter: &shared.VmwareVCenterConfig{
                Address: sdk.String("747 Leopoldo Forks"),
                CaCertData: sdk.String("laborum"),
                Cluster: sdk.String("sed"),
                Datacenter: sdk.String("in"),
                Datastore: sdk.String("commodi"),
                Folder: sdk.String("quidem"),
                ResourcePool: sdk.String("explicabo"),
            },
            VMTrackingEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("debitis"),
        Parent: "illo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("corrupti"),
        ValidateOnly: sdk.Bool(false),
        VmwareClusterID: sdk.String("maiores"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersCreateSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersEnroll

Enrolls an existing VMware user cluster and its node pools to the Anthos On-Prem API within a given project and location. Through enrollment, an existing cluster will become Anthos On-Prem API managed. The corresponding GCP resources will be created and all future modifications to the cluster and/or its node pools will be expected to be performed through the API.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersEnroll(ctx, operations.GkeonpremProjectsLocationsVmwareClustersEnrollRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnrollVmwareClusterRequest: &shared.EnrollVmwareClusterRequest{
            AdminClusterMembership: sdk.String("sed"),
            LocalName: sdk.String("provident"),
            ValidateOnly: sdk.Bool(false),
            VmwareClusterID: sdk.String("eius"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersEnrollSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersList

Lists VMware Clusters in a given project and location.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersList(ctx, operations.GkeonpremProjectsLocationsVmwareClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("praesentium"),
        Filter: sdk.String("facilis"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("incidunt"),
        PageSize: sdk.Int64(373035),
        PageToken: sdk.String("debitis"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("error"),
        View: operations.GkeonpremProjectsLocationsVmwareClustersListViewEnumBasic.ToPointer(),
    }, operations.GkeonpremProjectsLocationsVmwareClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVmwareClustersResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersQueryVersionConfig

Queries the VMware user cluster version config.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfig(ctx, operations.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        CreateConfigAdminClusterMembership: sdk.String("magni"),
        CreateConfigAdminClusterName: sdk.String("aperiam"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veniam"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UpgradeConfigClusterName: sdk.String("beatae"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersQueryVersionConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryVmwareVersionConfigResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate

Creates a new VMware node pool in a given project, location and VMWare cluster.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreate(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VmwareNodePoolInput: &shared.VmwareNodePoolInput{
            Annotations: map[string]string{
                "laboriosam": "dolorum",
                "voluptatum": "error",
                "hic": "expedita",
            },
            Config: &shared.VmwareNodeConfig{
                BootDiskSizeGb: sdk.String("debitis"),
                Cpus: sdk.String("neque"),
                EnableLoadBalancer: sdk.Bool(false),
                Image: sdk.String("dolorum"),
                ImageType: sdk.String("nostrum"),
                Labels: map[string]string{
                    "dolorum": "corrupti",
                    "accusamus": "tempora",
                    "atque": "fugit",
                },
                MemoryMb: sdk.String("ut"),
                Replicas: sdk.String("fugiat"),
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("expedita"),
                        Value: sdk.String("magnam"),
                    },
                },
                VsphereConfig: &shared.VmwareVsphereConfig{
                    Datastore: sdk.String("consequatur"),
                    Tags: []shared.VmwareVsphereTag{
                        shared.VmwareVsphereTag{
                            Category: sdk.String("ipsam"),
                            Tag: sdk.String("sit"),
                        },
                        shared.VmwareVsphereTag{
                            Category: sdk.String("voluptatum"),
                            Tag: sdk.String("quas"),
                        },
                    },
                },
            },
            DisplayName: sdk.String("repudiandae"),
            Etag: sdk.String("corporis"),
            Name: sdk.String("Mattie Jaskolski III"),
            NodePoolAutoscaling: &shared.VmwareNodePoolAutoscalingConfig{
                MaxReplicas: sdk.Int(342611),
                MinReplicas: sdk.Int(906172),
            },
            OnPremVersion: sdk.String("error"),
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("incidunt"),
                        Message: sdk.String("reiciendis"),
                        Reason: sdk.String("dolorem"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("dicta"),
                    },
                },
                ErrorMessage: sdk.String("architecto"),
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("atque"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("nam"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("amet"),
        ValidateOnly: sdk.Bool(false),
        VmwareNodePoolID: sdk.String("deserunt"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsCreateSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete

Deletes a single VMware node pool.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDelete(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("unde"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Etag: sdk.String("repellendus"),
        Fields: sdk.String("delectus"),
        IgnoreErrors: sdk.Bool(false),
        Key: sdk.String("voluptates"),
        Name: "Monique Predovic",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("veniam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsDeleteSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll

Enrolls a VMware node pool to Anthos On-Prem API

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnroll(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnrollVmwareNodePoolRequest: &shared.EnrollVmwareNodePoolRequest{
            VmwareNodePoolID: sdk.String("quisquam"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("totam"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("et"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsEnrollSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicy(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("atque"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("officiis"),
        OptionsRequestedPolicyVersion: sdk.Int64(886961),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        Resource: "natus",
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList

Lists VMware node pools in a given project, location and VMWare cluster.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsList(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("error"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("suscipit"),
        PageSize: sdk.Int64(922348),
        PageToken: sdk.String("atque"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVmwareNodePoolsResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGet(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("dicta"),
        Name: "Teresa Daniel",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsGetSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsList(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("perspiciatis"),
        Filter: sdk.String("in"),
        Key: sdk.String("adipisci"),
        Name: "Tracy Cronin",
        OauthToken: sdk.String("quis"),
        PageSize: sdk.Int64(440264),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch

Updates the parameters of a single VMware node pool.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatch(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VmwareNodePoolInput: &shared.VmwareNodePoolInput{
            Annotations: map[string]string{
                "vero": "doloremque",
            },
            Config: &shared.VmwareNodeConfig{
                BootDiskSizeGb: sdk.String("iure"),
                Cpus: sdk.String("ipsa"),
                EnableLoadBalancer: sdk.Bool(false),
                Image: sdk.String("totam"),
                ImageType: sdk.String("quae"),
                Labels: map[string]string{
                    "eveniet": "qui",
                    "cum": "iure",
                },
                MemoryMb: sdk.String("necessitatibus"),
                Replicas: sdk.String("ratione"),
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                        Key: sdk.String("voluptatum"),
                        Value: sdk.String("rem"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("ad"),
                        Value: sdk.String("repellat"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                        Key: sdk.String("corporis"),
                        Value: sdk.String("perspiciatis"),
                    },
                },
                VsphereConfig: &shared.VmwareVsphereConfig{
                    Datastore: sdk.String("nihil"),
                    Tags: []shared.VmwareVsphereTag{
                        shared.VmwareVsphereTag{
                            Category: sdk.String("voluptas"),
                            Tag: sdk.String("alias"),
                        },
                        shared.VmwareVsphereTag{
                            Category: sdk.String("maiores"),
                            Tag: sdk.String("reiciendis"),
                        },
                        shared.VmwareVsphereTag{
                            Category: sdk.String("dolores"),
                            Tag: sdk.String("id"),
                        },
                    },
                },
            },
            DisplayName: sdk.String("minima"),
            Etag: sdk.String("dolore"),
            Name: sdk.String("Danny Berge"),
            NodePoolAutoscaling: &shared.VmwareNodePoolAutoscalingConfig{
                MaxReplicas: sdk.Int(309251),
                MinReplicas: sdk.Int(477646),
            },
            OnPremVersion: sdk.String("ex"),
            Status: &shared.ResourceStatus{
                Conditions: []shared.ResourceCondition{
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("culpa"),
                        Message: sdk.String("adipisci"),
                        Reason: sdk.String("debitis"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("eum"),
                    },
                    shared.ResourceCondition{
                        LastTransitionTime: sdk.String("nemo"),
                        Message: sdk.String("recusandae"),
                        Reason: sdk.String("esse"),
                        State: shared.ResourceConditionStateEnumStateFalse.ToPointer(),
                        Type: sdk.String("quis"),
                    },
                },
                ErrorMessage: sdk.String("eum"),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("quasi"),
        Name: "Gordon O'Hara",
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UpdateMask: sdk.String("aliquid"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("repellat"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsPatchSecurity{
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

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicy(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("in"),
                            Expression: sdk.String("nam"),
                            Location: sdk.String("earum"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "placeat",
                            "modi",
                            "voluptatibus",
                        },
                        Role: sdk.String("molestias"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("officiis"),
                            Expression: sdk.String("sapiente"),
                            Location: sdk.String("cumque"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "tempora",
                            "quis",
                            "inventore",
                        },
                        Role: sdk.String("fugit"),
                    },
                },
                Etag: sdk.String("cumque"),
                Version: sdk.Int(62636),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("eum"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        Resource: "impedit",
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissions(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "minima",
            },
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("earum"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        Resource: "eaque",
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll

Unenrolls a VMware node pool to Anthos On-Prem API

### Example Usage

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
    res, err := s.Projects.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenroll(ctx, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Etag: sdk.String("suscipit"),
        Fields: sdk.String("dolorem"),
        Force: sdk.Bool(false),
        Key: sdk.String("fugit"),
        Name: "Grant Dickens",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("et"),
        ValidateOnly: sdk.Bool(false),
    }, operations.GkeonpremProjectsLocationsVmwareClustersVmwareNodePoolsUnenrollSecurity{
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
