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