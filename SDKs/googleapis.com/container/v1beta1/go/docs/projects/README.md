# Projects

### Available Operations

* [ContainerProjectsAggregatedUsableSubnetworksList](#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that can be used for creating clusters in a project.
* [ContainerProjectsLocationsClustersCompleteIPRotation](#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsLocationsClustersCreate](#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsLocationsClustersGetJwks](#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [ContainerProjectsLocationsClustersList](#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade](#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [ContainerProjectsLocationsClustersNodePoolsCreate](#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsDelete](#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsLocationsClustersNodePoolsList](#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsRollback](#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsLocationsClustersNodePoolsSetAutoscaling](#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings of a specific node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetManagement](#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetSize](#containerprojectslocationsclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsLocationsClustersNodePoolsUpdate](#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [ContainerProjectsLocationsClustersSetAddons](#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsLocationsClustersSetLegacyAbac](#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsLocationsClustersSetLocations](#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [ContainerProjectsLocationsClustersSetLogging](#containerprojectslocationsclusterssetlogging) - Sets the logging service for a specific cluster.
* [ContainerProjectsLocationsClustersSetMaintenancePolicy](#containerprojectslocationsclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [ContainerProjectsLocationsClustersSetMasterAuth](#containerprojectslocationsclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [ContainerProjectsLocationsClustersSetMonitoring](#containerprojectslocationsclusterssetmonitoring) - Sets the monitoring service for a specific cluster.
* [ContainerProjectsLocationsClustersSetNetworkPolicy](#containerprojectslocationsclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [ContainerProjectsLocationsClustersSetResourceLabels](#containerprojectslocationsclusterssetresourcelabels) - Sets labels on a cluster.
* [ContainerProjectsLocationsClustersStartIPRotation](#containerprojectslocationsclustersstartiprotation) - Starts master IP rotation.
* [ContainerProjectsLocationsClustersUpdateMaster](#containerprojectslocationsclustersupdatemaster) - Updates the master for a specific cluster.
* [ContainerProjectsLocationsClustersWellKnownGetOpenidConfiguration](#containerprojectslocationsclusterswellknowngetopenidconfiguration) - Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
* [ContainerProjectsLocationsGetServerConfig](#containerprojectslocationsgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [ContainerProjectsLocationsList](#containerprojectslocationslist) - Fetches locations that offer Google Kubernetes Engine.
* [ContainerProjectsLocationsOperationsCancel](#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [ContainerProjectsLocationsOperationsGet](#containerprojectslocationsoperationsget) - Gets the specified operation.
* [ContainerProjectsLocationsOperationsList](#containerprojectslocationsoperationslist) - Lists all operations in a project in the specified zone or all zones.
* [ContainerProjectsZonesClustersAddons](#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsZonesClustersCompleteIPRotation](#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsZonesClustersCreate](#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsZonesClustersDelete](#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [ContainerProjectsZonesClustersGet](#containerprojectszonesclustersget) - Gets the details for a specific cluster.
* [ContainerProjectsZonesClustersLegacyAbac](#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsZonesClustersList](#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsZonesClustersLocations](#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.
* [ContainerProjectsZonesClustersLogging](#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [ContainerProjectsZonesClustersMaster](#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [ContainerProjectsZonesClustersMonitoring](#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [ContainerProjectsZonesClustersNodePoolsAutoscaling](#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings of a specific node pool.
* [ContainerProjectsZonesClustersNodePoolsCreate](#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsZonesClustersNodePoolsDelete](#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsZonesClustersNodePoolsGet](#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [ContainerProjectsZonesClustersNodePoolsList](#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsZonesClustersNodePoolsRollback](#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsZonesClustersNodePoolsSetManagement](#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsZonesClustersNodePoolsSetSize](#containerprojectszonesclustersnodepoolssetsize) - SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsZonesClustersNodePoolsUpdate](#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type of a specific node pool.
* [ContainerProjectsZonesClustersResourceLabels](#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [ContainerProjectsZonesClustersSetMaintenancePolicy](#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [ContainerProjectsZonesClustersSetMasterAuth](#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [ContainerProjectsZonesClustersSetNetworkPolicy](#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [ContainerProjectsZonesClustersStartIPRotation](#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [ContainerProjectsZonesClustersUpdate](#containerprojectszonesclustersupdate) - Updates the settings for a specific cluster.
* [ContainerProjectsZonesGetServerconfig](#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [ContainerProjectsZonesOperationsCancel](#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [ContainerProjectsZonesOperationsGet](#containerprojectszonesoperationsget) - Gets the specified operation.
* [ContainerProjectsZonesOperationsList](#containerprojectszonesoperationslist) - Lists all operations in a project in the specified zone or all zones.

## ContainerProjectsAggregatedUsableSubnetworksList

Lists subnetworks that can be used for creating clusters in a project.

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
    res, err := s.Projects.ContainerProjectsAggregatedUsableSubnetworksList(ctx, operations.ContainerProjectsAggregatedUsableSubnetworksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.ContainerProjectsAggregatedUsableSubnetworksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsableSubnetworksResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsClustersCompleteIPRotation

Completes master IP rotation.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersCompleteIPRotation(ctx, operations.ContainerProjectsLocationsClustersCompleteIPRotationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CompleteIPRotationRequest: &shared.CompleteIPRotationRequest{
            ClusterID: sdk.String("quis"),
            Name: sdk.String("Iris Aufderhar"),
            ProjectID: sdk.String("sapiente"),
            Zone: sdk.String("quo"),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        Name: "Forrest Koepp",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ContainerProjectsLocationsClustersCompleteIPRotationSecurity{
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

## ContainerProjectsLocationsClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersCreate(ctx, operations.ContainerProjectsLocationsClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateClusterRequestInput: &shared.CreateClusterRequestInput{
            Cluster: &shared.ClusterInput{
                AddonsConfig: &shared.AddonsConfig{
                    CloudRunConfig: &shared.CloudRunConfig{
                        Disabled: sdk.Bool(false),
                        LoadBalancerType: shared.CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                    },
                    ConfigConnectorConfig: &shared.ConfigConnectorConfig{
                        Enabled: sdk.Bool(false),
                    },
                    DNSCacheConfig: &shared.DNSCacheConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcePersistentDiskCsiDriverConfig: &shared.GcePersistentDiskCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcpFilestoreCsiDriverConfig: &shared.GcpFilestoreCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcsFuseCsiDriverConfig: &shared.GcsFuseCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
                    },
                    IstioConfig: &shared.IstioConfig{
                        Auth: shared.IstioConfigAuthEnumAuthMutualTLS.ToPointer(),
                        Disabled: sdk.Bool(false),
                    },
                    KalmConfig: &shared.KalmConfig{
                        Enabled: sdk.Bool(false),
                    },
                    KubernetesDashboard: &shared.KubernetesDashboard{
                        Disabled: sdk.Bool(false),
                    },
                    NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                        Disabled: sdk.Bool(false),
                    },
                },
                AuthenticatorGroupsConfig: &shared.AuthenticatorGroupsConfig{
                    Enabled: sdk.Bool(false),
                    SecurityGroup: sdk.String("hic"),
                },
                Autopilot: &shared.Autopilot{
                    Enabled: sdk.Bool(false),
                },
                Autoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("modi"),
                        DiskSizeGb: sdk.Int(186332),
                        DiskType: sdk.String("impedit"),
                        ImageType: sdk.String("cum"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("esse"),
                                Description: sdk.String("ipsum"),
                            },
                        },
                        MinCPUPlatform: sdk.String("excepturi"),
                        OauthScopes: []string{
                            "perferendis",
                        },
                        ServiceAccount: sdk.String("ad"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("natus"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(149675),
                                    BatchPercentage: sdk.Float32(6120.96),
                                    BatchSoakDuration: sdk.String("dolor"),
                                },
                            },
                            MaxSurge: sdk.Int(616934),
                            MaxUnavailable: sdk.Int(386489),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumBalanced.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("in"),
                            Minimum: sdk.String("corporis"),
                            ResourceType: sdk.String("iste"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("iure"),
                            Minimum: sdk.String("saepe"),
                            ResourceType: sdk.String("quidem"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("architecto"),
                            Minimum: sdk.String("ipsa"),
                            ResourceType: sdk.String("reiciendis"),
                        },
                    },
                },
                BinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumProjectSingletonPolicyEnforce.ToPointer(),
                },
                ClusterIpv4Cidr: sdk.String("mollitia"),
                ClusterTelemetry: &shared.ClusterTelemetry{
                    Type: shared.ClusterTelemetryTypeEnumEnabled.ToPointer(),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumInvalidArgument.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                        Message: sdk.String("explicabo"),
                    },
                },
                ConfidentialNodes: &shared.ConfidentialNodes{
                    Enabled: sdk.Bool(false),
                },
                CostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                CreateTime: sdk.String("nobis"),
                CurrentMasterVersion: sdk.String("enim"),
                CurrentNodeCount: sdk.Int(607831),
                CurrentNodeVersion: sdk.String("nemo"),
                DatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("minima"),
                    State: shared.DatabaseEncryptionStateEnumEncrypted.ToPointer(),
                },
                DefaultMaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("accusantium"),
                },
                Description: sdk.String("iure"),
                EnableKubernetesAlpha: sdk.Bool(false),
                EnableTpu: sdk.Bool(false),
                Endpoint: sdk.String("culpa"),
                Etag: sdk.String("doloribus"),
                ExpireTime: sdk.String("sapiente"),
                Fleet: &shared.Fleet{
                    Membership: sdk.String("architecto"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("mollitia"),
                },
                IdentityServiceConfig: &shared.IdentityServiceConfig{
                    Enabled: sdk.Bool(false),
                },
                InitialClusterVersion: sdk.String("dolorem"),
                InitialNodeCount: sdk.Int(635059),
                InstanceGroupUrls: []string{
                    "repellat",
                },
                IPAllocationPolicy: &shared.IPAllocationPolicyInput{
                    AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                        PodRangeNames: []string{
                            "occaecati",
                            "numquam",
                            "commodi",
                        },
                    },
                    AllowRouteOverlap: sdk.Bool(false),
                    ClusterIpv4Cidr: sdk.String("quam"),
                    ClusterIpv4CidrBlock: sdk.String("molestiae"),
                    ClusterSecondaryRangeName: sdk.String("velit"),
                    CreateSubnetwork: sdk.Bool(false),
                    Ipv6AccessType: shared.IPAllocationPolicyIpv6AccessTypeEnumInternal.ToPointer(),
                    NodeIpv4Cidr: sdk.String("quia"),
                    NodeIpv4CidrBlock: sdk.String("quis"),
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    ServicesIpv4Cidr: sdk.String("vitae"),
                    ServicesIpv4CidrBlock: sdk.String("laborum"),
                    ServicesSecondaryRangeName: sdk.String("animi"),
                    StackType: shared.IPAllocationPolicyStackTypeEnumStackTypeUnspecified.ToPointer(),
                    SubnetworkName: sdk.String("odit"),
                    TpuIpv4CidrBlock: sdk.String("quo"),
                    UseIPAliases: sdk.Bool(false),
                    UseRoutes: sdk.Bool(false),
                },
                LabelFingerprint: sdk.String("sequi"),
                LegacyAbac: &shared.LegacyAbac{
                    Enabled: sdk.Bool(false),
                },
                Location: sdk.String("tenetur"),
                Locations: []string{
                    "id",
                    "possimus",
                },
                LoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                        },
                    },
                },
                LoggingService: sdk.String("error"),
                MaintenancePolicy: &shared.MaintenancePolicy{
                    ResourceVersion: sdk.String("temporibus"),
                    Window: &shared.MaintenanceWindow{
                        DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                            Duration: sdk.String("laborum"),
                            StartTime: sdk.String("quasi"),
                        },
                        MaintenanceExclusions: map[string]shared.TimeWindow{
                            "voluptatibus": shared.TimeWindow{
                                EndTime: sdk.String("vero"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("praesentium"),
                            },
                            "voluptatibus": shared.TimeWindow{
                                EndTime: sdk.String("ipsa"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("voluptate"),
                            },
                            "cum": shared.TimeWindow{
                                EndTime: sdk.String("perferendis"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("reprehenderit"),
                            },
                            "ut": shared.TimeWindow{
                                EndTime: sdk.String("maiores"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("corporis"),
                            },
                        },
                        RecurringWindow: &shared.RecurringTimeWindow{
                            Recurrence: sdk.String("dolore"),
                            Window: &shared.TimeWindow{
                                EndTime: sdk.String("iusto"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("harum"),
                            },
                        },
                    },
                },
                Master: map[string]interface{}{
                    "accusamus": "commodi",
                    "repudiandae": "quae",
                },
                MasterAuth: &shared.MasterAuth{
                    ClientCertificate: sdk.String("ipsum"),
                    ClientCertificateConfig: &shared.ClientCertificateConfig{
                        IssueClientCertificate: sdk.Bool(false),
                    },
                    ClientKey: sdk.String("quidem"),
                    ClusterCaCertificate: sdk.String("molestias"),
                    Password: sdk.String("excepturi"),
                    Username: sdk.String("Samantha_Gleason"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("quasi"),
                            DisplayName: sdk.String("repudiandae"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("sint"),
                            DisplayName: sdk.String("veritatis"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("itaque"),
                            DisplayName: sdk.String("incidunt"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("enim"),
                            DisplayName: sdk.String("consequatur"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                MasterIpv4CidrBlock: sdk.String("est"),
                MeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                MonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.MonitoringComponentConfigEnableComponentsEnumApiserver,
                            shared.MonitoringComponentConfigEnableComponentsEnumScheduler,
                            shared.MonitoringComponentConfigEnableComponentsEnumControllerManager,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                MonitoringService: sdk.String("labore"),
                Name: sdk.String("Tina Jacobi"),
                Network: sdk.String("perferendis"),
                NetworkConfig: &shared.NetworkConfig{
                    DatapathProvider: shared.NetworkConfigDatapathProviderEnumDatapathProviderUnspecified.ToPointer(),
                    DefaultSnatStatus: &shared.DefaultSnatStatus{
                        Disabled: sdk.Bool(false),
                    },
                    DNSConfig: &shared.DNSConfig{
                        ClusterDNS: shared.DNSConfigClusterDNSEnumCloudDNS.ToPointer(),
                        ClusterDNSDomain: sdk.String("ipsam"),
                        ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumDNSScopeUnspecified.ToPointer(),
                    },
                    EnableIntraNodeVisibility: sdk.Bool(false),
                    EnableL4ilbSubsetting: sdk.Bool(false),
                    GatewayAPIConfig: &shared.GatewayAPIConfig{
                        Channel: shared.GatewayAPIConfigChannelEnumChannelUnspecified.ToPointer(),
                    },
                    Network: sdk.String("dolorum"),
                    PrivateIpv6GoogleAccess: shared.NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessToGoogle.ToPointer(),
                    ServiceExternalIpsConfig: &shared.ServiceExternalIPsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Subnetwork: sdk.String("tempora"),
                },
                NetworkPolicy: &shared.NetworkPolicy{
                    Enabled: sdk.Bool(false),
                    Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
                },
                NodeConfig: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("labore"),
                            AcceleratorType: sdk.String("delectus"),
                            GpuPartitionSize: sdk.String("eum"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("eligendi"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("sint"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("aliquid"),
                            AcceleratorType: sdk.String("provident"),
                            GpuPartitionSize: sdk.String("necessitatibus"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("officia"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("dolor"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("debitis"),
                            AcceleratorType: sdk.String("a"),
                            GpuPartitionSize: sdk.String("dolorum"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("in"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("illum"),
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("maiores"),
                    },
                    BootDiskKmsKey: sdk.String("rerum"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(116202),
                    DiskType: sdk.String("magnam"),
                    EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                        LocalSsdCount: sdk.Int(767024),
                    },
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(813798),
                    },
                    FastSocket: &shared.FastSocket{
                        Enabled: sdk.Bool(false),
                    },
                    GcfsConfig: &shared.GcfsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Gvnic: &shared.VirtualNIC{
                        Enabled: sdk.Bool(false),
                    },
                    ImageType: sdk.String("ea"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("aliquid"),
                        CPUManagerPolicy: sdk.String("laborum"),
                        PodPidsLimit: sdk.String("accusamus"),
                    },
                    Labels: map[string]string{
                        "occaecati": "enim",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                        Sysctls: map[string]string{
                            "quidem": "provident",
                            "nam": "id",
                            "blanditiis": "deleniti",
                            "sapiente": "amet",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(643990),
                    },
                    LocalSsdCount: sdk.Int(394869),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("natus"),
                    Metadata: map[string]string{
                        "molestiae": "perferendis",
                        "nihil": "magnam",
                        "distinctio": "id",
                    },
                    MinCPUPlatform: sdk.String("labore"),
                    NodeGroup: sdk.String("labore"),
                    OauthScopes: []string{
                        "natus",
                        "nobis",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("vero"),
                        Values: []string{
                            "architecto",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "et": "excepturi",
                        "ullam": "provident",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        SandboxType: sdk.String("quos"),
                        Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                    },
                    ServiceAccount: sdk.String("accusantium"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "reiciendis",
                        "mollitia",
                        "ad",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                            Key: sdk.String("necessitatibus"),
                            Value: sdk.String("odit"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                            Key: sdk.String("quasi"),
                            Value: sdk.String("iure"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                        NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumSecure.ToPointer(),
                    },
                },
                NodeIpv4CidrSize: sdk.Int(806194),
                NodePoolAutoConfig: &shared.NodePoolAutoConfig{
                    NetworkTags: &shared.NetworkTags{
                        Tags: []string{
                            "facilis",
                            "in",
                            "architecto",
                        },
                    },
                },
                NodePoolDefaults: &shared.NodePoolDefaults{
                    NodeConfigDefaults: &shared.NodeConfigDefaults{
                        GcfsConfig: &shared.GcfsConfig{
                            Enabled: sdk.Bool(false),
                        },
                        LoggingConfig: &shared.NodePoolLoggingConfig{
                            VariantConfig: &shared.LoggingVariantConfig{
                                Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                            },
                        },
                    },
                },
                NodePools: []shared.NodePool{
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                            MaxNodeCount: sdk.Int(714242),
                            MinNodeCount: sdk.Int(469249),
                            TotalMaxNodeCount: sdk.Int(998848),
                            TotalMinNodeCount: sdk.Int(841140),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnavailable.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                                Message: sdk.String("accusantium"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("praesentium"),
                                    AcceleratorType: sdk.String("natus"),
                                    GpuPartitionSize: sdk.String("magni"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("quo"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("illum"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("pariatur"),
                            },
                            BootDiskKmsKey: sdk.String("maxime"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(411397),
                            DiskType: sdk.String("excepturi"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(139972),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(407183),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("accusantium"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("ab"),
                                CPUManagerPolicy: sdk.String("maiores"),
                                PodPidsLimit: sdk.String("quidem"),
                            },
                            Labels: map[string]string{
                                "voluptate": "autem",
                                "nam": "eaque",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                                Sysctls: map[string]string{
                                    "voluptatibus": "perferendis",
                                    "fugiat": "amet",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(11714),
                            },
                            LocalSsdCount: sdk.Int(764912),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("hic"),
                            Metadata: map[string]string{
                                "nobis": "dolores",
                                "quis": "totam",
                                "dignissimos": "eaque",
                            },
                            MinCPUPlatform: sdk.String("quis"),
                            NodeGroup: sdk.String("nesciunt"),
                            OauthScopes: []string{
                                "perferendis",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                                Key: sdk.String("minus"),
                                Values: []string{
                                    "dolor",
                                    "vero",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "hic": "recusandae",
                                "omnis": "facilis",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("perspiciatis"),
                                Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                            },
                            ServiceAccount: sdk.String("porro"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "blanditiis",
                            },
                            Taints: []shared.NodeTaint{
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
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumExpose.ToPointer(),
                            },
                        },
                        Etag: sdk.String("nobis"),
                        InitialNodeCount: sdk.Int(730122),
                        InstanceGroupUrls: []string{
                            "quaerat",
                            "quos",
                            "aliquid",
                            "dolorem",
                        },
                        Locations: []string{
                            "dolor",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("qui"),
                                Description: sdk.String("ipsum"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("hic"),
                        },
                        Name: sdk.String("Felipe Klein"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("numquam"),
                            PodRange: sdk.String("veritatis"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(56418),
                        SelfLink: sdk.String("iure"),
                        Status: shared.NodePoolStatusEnumRunningWithError.ToPointer(),
                        StatusMessage: sdk.String("quaerat"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "quidem",
                                    "voluptatibus",
                                    "voluptas",
                                    "natus",
                                },
                                BluePoolDeletionStartTime: sdk.String("eos"),
                                GreenInstanceGroupUrls: []string{
                                    "sit",
                                    "fugiat",
                                    "ab",
                                },
                                GreenPoolVersion: sdk.String("soluta"),
                                Phase: shared.BlueGreenInfoPhaseEnumNodePoolSoaking.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("iusto"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(453697),
                                    BatchPercentage: sdk.Float32(6770.82),
                                    BatchSoakDuration: sdk.String("deleniti"),
                                },
                            },
                            MaxSurge: sdk.Int(607045),
                            MaxUnavailable: sdk.Int(896672),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("asperiores"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                            MaxNodeCount: sdk.Int(216897),
                            MinNodeCount: sdk.Int(456015),
                            TotalMaxNodeCount: sdk.Int(663078),
                            TotalMinNodeCount: sdk.Int(906418),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnknown.ToPointer(),
                                Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                                Message: sdk.String("amet"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumOutOfRange.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                                Message: sdk.String("ad"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("suscipit"),
                                    AcceleratorType: sdk.String("deserunt"),
                                    GpuPartitionSize: sdk.String("provident"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("repellendus"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("totam"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("similique"),
                                    AcceleratorType: sdk.String("alias"),
                                    GpuPartitionSize: sdk.String("at"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("tempora"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("vel"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("quod"),
                                    AcceleratorType: sdk.String("officiis"),
                                    GpuPartitionSize: sdk.String("qui"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("a"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("esse"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("harum"),
                                    AcceleratorType: sdk.String("iusto"),
                                    GpuPartitionSize: sdk.String("ipsum"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("tenetur"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("amet"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("tempore"),
                            },
                            BootDiskKmsKey: sdk.String("accusamus"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(253941),
                            DiskType: sdk.String("enim"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(213312),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(957451),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("totam"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("nihil"),
                                CPUManagerPolicy: sdk.String("sit"),
                                PodPidsLimit: sdk.String("expedita"),
                            },
                            Labels: map[string]string{
                                "sed": "vel",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                                Sysctls: map[string]string{
                                    "deserunt": "quam",
                                    "ipsum": "incidunt",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(186458),
                            },
                            LocalSsdCount: sdk.Int(586784),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("pariatur"),
                            Metadata: map[string]string{
                                "dicta": "laborum",
                                "totam": "incidunt",
                                "aspernatur": "dolores",
                            },
                            MinCPUPlatform: sdk.String("distinctio"),
                            NodeGroup: sdk.String("facilis"),
                            OauthScopes: []string{
                                "quam",
                                "molestias",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumSpecificReservation.ToPointer(),
                                Key: sdk.String("qui"),
                                Values: []string{
                                    "fugit",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "odio": "sunt",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("ullam"),
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("hic"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "cumque",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("et"),
                                    Value: sdk.String("saepe"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("veritatis"),
                                    Value: sdk.String("nobis"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("tempore"),
                                    Value: sdk.String("cupiditate"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumUnspecified.ToPointer(),
                            },
                        },
                        Etag: sdk.String("dolore"),
                        InitialNodeCount: sdk.Int(286915),
                        InstanceGroupUrls: []string{
                            "dolorum",
                        },
                        Locations: []string{
                            "quae",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("aut"),
                                Description: sdk.String("quas"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("itaque"),
                        },
                        Name: sdk.String("Jodi Skiles"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("cupiditate"),
                            PodRange: sdk.String("qui"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(512393),
                        SelfLink: sdk.String("odio"),
                        Status: shared.NodePoolStatusEnumReconciling.ToPointer(),
                        StatusMessage: sdk.String("voluptatibus"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "vero",
                                    "omnis",
                                    "quis",
                                    "ipsum",
                                },
                                BluePoolDeletionStartTime: sdk.String("delectus"),
                                GreenInstanceGroupUrls: []string{
                                    "consectetur",
                                    "vero",
                                },
                                GreenPoolVersion: sdk.String("tenetur"),
                                Phase: shared.BlueGreenInfoPhaseEnumCordoningBluePool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("hic"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(715561),
                                    BatchPercentage: sdk.Float32(7992.03),
                                    BatchSoakDuration: sdk.String("odio"),
                                },
                            },
                            MaxSurge: sdk.Int(630448),
                            MaxUnavailable: sdk.Int(708548),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("ducimus"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified.ToPointer(),
                            MaxNodeCount: sdk.Int(844550),
                            MinNodeCount: sdk.Int(848944),
                            TotalMaxNodeCount: sdk.Int(194342),
                            TotalMinNodeCount: sdk.Int(617877),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumOk.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                                Message: sdk.String("exercitationem"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumInternal.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                                Message: sdk.String("porro"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumDataLoss.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                                Message: sdk.String("iusto"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumOutOfRange.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceQuotaExceeded.ToPointer(),
                                Message: sdk.String("alias"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("tempora"),
                                    AcceleratorType: sdk.String("ipsam"),
                                    GpuPartitionSize: sdk.String("ea"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("vel"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("possimus"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("magnam"),
                                    AcceleratorType: sdk.String("ratione"),
                                    GpuPartitionSize: sdk.String("ex"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("dicta"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("dolor"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("maiores"),
                                    AcceleratorType: sdk.String("quasi"),
                                    GpuPartitionSize: sdk.String("ex"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("excepturi"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("voluptatibus"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("nostrum"),
                            },
                            BootDiskKmsKey: sdk.String("sapiente"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(788873),
                            DiskType: sdk.String("saepe"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(411372),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(774048),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("corporis"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("veniam"),
                                CPUManagerPolicy: sdk.String("aliquid"),
                                PodPidsLimit: sdk.String("inventore"),
                            },
                            Labels: map[string]string{
                                "ea": "quo",
                                "consectetur": "recusandae",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                                Sysctls: map[string]string{
                                    "eaque": "a",
                                    "libero": "aut",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(11427),
                            },
                            LocalSsdCount: sdk.Int(533466),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("aliquam"),
                            Metadata: map[string]string{
                                "accusamus": "inventore",
                            },
                            MinCPUPlatform: sdk.String("non"),
                            NodeGroup: sdk.String("et"),
                            OauthScopes: []string{
                                "laborum",
                                "placeat",
                                "velit",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                                Key: sdk.String("autem"),
                                Values: []string{
                                    "quas",
                                    "assumenda",
                                    "nulla",
                                    "voluptas",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "quasi": "tempora",
                                "numquam": "explicabo",
                                "provident": "ipsa",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("molestiae"),
                                Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                            },
                            ServiceAccount: sdk.String("odio"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "esse",
                                "esse",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("reprehenderit"),
                                    Value: sdk.String("quidem"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("ut"),
                                    Value: sdk.String("eum"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("assumenda"),
                                    Value: sdk.String("eos"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumUnspecified.ToPointer(),
                            },
                        },
                        Etag: sdk.String("ipsa"),
                        InitialNodeCount: sdk.Int(660040),
                        InstanceGroupUrls: []string{
                            "neque",
                            "quo",
                            "illum",
                        },
                        Locations: []string{
                            "fuga",
                            "eius",
                            "eos",
                            "voluptas",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("ab"),
                                Description: sdk.String("cupiditate"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("consequatur"),
                        },
                        Name: sdk.String("Henrietta Hilpert"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("recusandae"),
                            PodRange: sdk.String("aperiam"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(799796),
                        SelfLink: sdk.String("dignissimos"),
                        Status: shared.NodePoolStatusEnumStatusUnspecified.ToPointer(),
                        StatusMessage: sdk.String("nihil"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "accusamus",
                                    "aliquam",
                                    "odio",
                                },
                                BluePoolDeletionStartTime: sdk.String("occaecati"),
                                GreenInstanceGroupUrls: []string{
                                    "sapiente",
                                    "dolores",
                                },
                                GreenPoolVersion: sdk.String("deserunt"),
                                Phase: shared.BlueGreenInfoPhaseEnumCordoningBluePool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("accusantium"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(783648),
                                    BatchPercentage: sdk.Float32(4304.02),
                                    BatchSoakDuration: sdk.String("quas"),
                                },
                            },
                            MaxSurge: sdk.Int(510017),
                            MaxUnavailable: sdk.Int(159867),
                            Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
                        },
                        Version: sdk.String("fugit"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                            MaxNodeCount: sdk.Int(649463),
                            MinNodeCount: sdk.Int(277596),
                            TotalMaxNodeCount: sdk.Int(539224),
                            TotalMinNodeCount: sdk.Int(128860),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumAlreadyExists.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                                Message: sdk.String("sapiente"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnknown.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                                Message: sdk.String("explicabo"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("occaecati"),
                                    AcceleratorType: sdk.String("atque"),
                                    GpuPartitionSize: sdk.String("et"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("eveniet"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("accusamus"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("veritatis"),
                                    AcceleratorType: sdk.String("esse"),
                                    GpuPartitionSize: sdk.String("quod"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("vero"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("aliquid"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("quasi"),
                                    AcceleratorType: sdk.String("saepe"),
                                    GpuPartitionSize: sdk.String("vel"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("molestiae"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("rerum"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("occaecati"),
                                    AcceleratorType: sdk.String("minima"),
                                    GpuPartitionSize: sdk.String("distinctio"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("sit"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("culpa"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("tempore"),
                            },
                            BootDiskKmsKey: sdk.String("adipisci"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(766964),
                            DiskType: sdk.String("consequuntur"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(9766),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(796392),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("quaerat"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("sapiente"),
                                CPUManagerPolicy: sdk.String("consectetur"),
                                PodPidsLimit: sdk.String("esse"),
                            },
                            Labels: map[string]string{
                                "provident": "a",
                                "nulla": "quas",
                                "esse": "quasi",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                                Sysctls: map[string]string{
                                    "sint": "pariatur",
                                    "possimus": "quia",
                                    "eveniet": "asperiores",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(815524),
                            },
                            LocalSsdCount: sdk.Int(85001),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("quasi"),
                            Metadata: map[string]string{
                                "culpa": "aliquid",
                                "tenetur": "quae",
                                "earum": "vel",
                            },
                            MinCPUPlatform: sdk.String("in"),
                            NodeGroup: sdk.String("eius"),
                            OauthScopes: []string{
                                "illum",
                                "soluta",
                                "accusantium",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                                Key: sdk.String("sapiente"),
                                Values: []string{
                                    "ullam",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "ullam": "nisi",
                                "aut": "voluptatum",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("qui"),
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("ex"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "itaque",
                                "dolorum",
                                "architecto",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("quasi"),
                                    Value: sdk.String("at"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("voluptate"),
                                    Value: sdk.String("ipsa"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("veritatis"),
                                    Value: sdk.String("consectetur"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumGkeMetadataServer.ToPointer(),
                            },
                        },
                        Etag: sdk.String("accusantium"),
                        InitialNodeCount: sdk.Int(522371),
                        InstanceGroupUrls: []string{
                            "laudantium",
                        },
                        Locations: []string{
                            "mollitia",
                            "ab",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("corrupti"),
                                Description: sdk.String("non"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("voluptatem"),
                        },
                        Name: sdk.String("Toni Fritsch"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("dignissimos"),
                            PodRange: sdk.String("dicta"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(618480),
                        SelfLink: sdk.String("velit"),
                        Status: shared.NodePoolStatusEnumError.ToPointer(),
                        StatusMessage: sdk.String("voluptas"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "aperiam",
                                    "ea",
                                    "quaerat",
                                    "consequuntur",
                                },
                                BluePoolDeletionStartTime: sdk.String("repellendus"),
                                GreenInstanceGroupUrls: []string{
                                    "maxime",
                                    "dignissimos",
                                    "officia",
                                },
                                GreenPoolVersion: sdk.String("asperiores"),
                                Phase: shared.BlueGreenInfoPhaseEnumCreatingGreenPool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("quae"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(312753),
                                    BatchPercentage: sdk.Float32(7832.35),
                                    BatchSoakDuration: sdk.String("quod"),
                                },
                            },
                            MaxSurge: sdk.Int(288398),
                            MaxUnavailable: sdk.Int(70447),
                            Strategy: shared.UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified.ToPointer(),
                        },
                        Version: sdk.String("fuga"),
                    },
                },
                NotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumUpgradeAvailableEvent,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                                shared.FilterEventTypeEnumUpgradeEvent,
                            },
                        },
                        Topic: sdk.String("est"),
                    },
                },
                PodSecurityPolicyConfig: &shared.PodSecurityPolicyConfig{
                    Enabled: sdk.Bool(false),
                },
                PrivateCluster: sdk.Bool(false),
                PrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("recusandae"),
                    PeeringName: sdk.String("totam"),
                    PrivateEndpoint: sdk.String("fugiat"),
                    PrivateEndpointSubnetwork: sdk.String("vel"),
                    PublicEndpoint: sdk.String("ducimus"),
                },
                ProtectConfig: &shared.ProtectConfig{
                    WorkloadConfig: &shared.WorkloadConfig{
                        AuditMode: shared.WorkloadConfigAuditModeEnumBasic.ToPointer(),
                    },
                    WorkloadVulnerabilityMode: shared.ProtectConfigWorkloadVulnerabilityModeEnumDisabled.ToPointer(),
                },
                ReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumRapid.ToPointer(),
                },
                ResourceLabels: map[string]string{
                    "facilis": "cum",
                    "commodi": "in",
                    "corporis": "reiciendis",
                    "assumenda": "nemo",
                },
                ResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("recusandae"),
                    },
                    ConsumptionMeteringConfig: &shared.ConsumptionMeteringConfig{
                        Enabled: sdk.Bool(false),
                    },
                    EnableNetworkEgressMetering: sdk.Bool(false),
                },
                SelfLink: sdk.String("aliquid"),
                ServicesIpv4Cidr: sdk.String("aperiam"),
                ShieldedNodes: &shared.ShieldedNodes{
                    Enabled: sdk.Bool(false),
                },
                Status: shared.ClusterStatusEnumError.ToPointer(),
                StatusMessage: sdk.String("consectetur"),
                Subnetwork: sdk.String("in"),
                TpuConfig: &shared.TpuConfig{
                    Enabled: sdk.Bool(false),
                    Ipv4CidrBlock: sdk.String("exercitationem"),
                    UseServiceNetworking: sdk.Bool(false),
                },
                TpuIpv4CidrBlock: sdk.String("earum"),
                VerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                WorkloadAltsConfig: &shared.WorkloadALTSConfig{
                    EnableAlts: sdk.Bool(false),
                },
                WorkloadCertificates: &shared.WorkloadCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                WorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    IdentityNamespace: sdk.String("facere"),
                    IdentityProvider: sdk.String("numquam"),
                    WorkloadPool: sdk.String("doloribus"),
                },
                Zone: sdk.String("suscipit"),
            },
            Parent: sdk.String("reiciendis"),
            ProjectID: sdk.String("quidem"),
            Zone: sdk.String("saepe"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("non"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("a"),
    }, operations.ContainerProjectsLocationsClustersCreateSecurity{
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

## ContainerProjectsLocationsClustersGetJwks

Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersGetJwks(ctx, operations.ContainerProjectsLocationsClustersGetJwksRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("voluptates"),
        Parent: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJSONWebKeysResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersList(ctx, operations.ContainerProjectsLocationsClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("nobis"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("adipisci"),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("blanditiis"),
        Zone: sdk.String("in"),
    }, operations.ContainerProjectsLocationsClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade(ctx, operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "officiis": "temporibus",
            "ullam": "adipisci",
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("hic"),
        Key: sdk.String("nesciunt"),
        Name: "Byron Stroman",
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsCreate

Creates a node pool for a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsCreate(ctx, operations.ContainerProjectsLocationsClustersNodePoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateNodePoolRequest: &shared.CreateNodePoolRequest{
            ClusterID: sdk.String("reiciendis"),
            NodePool: &shared.NodePool{
                Autoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified.ToPointer(),
                    MaxNodeCount: sdk.Int(994401),
                    MinNodeCount: sdk.Int(707918),
                    TotalMaxNodeCount: sdk.Int(451822),
                    TotalMinNodeCount: sdk.Int(709072),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumFailedPrecondition.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                        Message: sdk.String("laborum"),
                    },
                },
                Config: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("in"),
                            AcceleratorType: sdk.String("commodi"),
                            GpuPartitionSize: sdk.String("quidem"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("voluptas"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("unde"),
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("architecto"),
                    },
                    BootDiskKmsKey: sdk.String("suscipit"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(960257),
                    DiskType: sdk.String("debitis"),
                    EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                        LocalSsdCount: sdk.Int(72434),
                    },
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(967795),
                    },
                    FastSocket: &shared.FastSocket{
                        Enabled: sdk.Bool(false),
                    },
                    GcfsConfig: &shared.GcfsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Gvnic: &shared.VirtualNIC{
                        Enabled: sdk.Bool(false),
                    },
                    ImageType: sdk.String("perferendis"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("corrupti"),
                        CPUManagerPolicy: sdk.String("maiores"),
                        PodPidsLimit: sdk.String("incidunt"),
                    },
                    Labels: map[string]string{
                        "provident": "eius",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                        Sysctls: map[string]string{
                            "ea": "occaecati",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(552078),
                    },
                    LocalSsdCount: sdk.Int(975752),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("tempora"),
                    Metadata: map[string]string{
                        "reiciendis": "ex",
                        "sit": "non",
                    },
                    MinCPUPlatform: sdk.String("officiis"),
                    NodeGroup: sdk.String("praesentium"),
                    OauthScopes: []string{
                        "quaerat",
                        "incidunt",
                        "ipsam",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumSpecificReservation.ToPointer(),
                        Key: sdk.String("rem"),
                        Values: []string{
                            "nobis",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "veniam": "minima",
                        "recusandae": "reiciendis",
                        "nulla": "magni",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        SandboxType: sdk.String("aperiam"),
                        Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                    },
                    ServiceAccount: sdk.String("numquam"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "in",
                        "officiis",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("exercitationem"),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                        NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumExpose.ToPointer(),
                    },
                },
                Etag: sdk.String("voluptatum"),
                InitialNodeCount: sdk.Int(622385),
                InstanceGroupUrls: []string{
                    "expedita",
                    "debitis",
                    "neque",
                    "dolorum",
                },
                Locations: []string{
                    "officia",
                    "dolorum",
                },
                Management: &shared.NodeManagement{
                    AutoRepair: sdk.Bool(false),
                    AutoUpgrade: sdk.Bool(false),
                    UpgradeOptions: &shared.AutoUpgradeOptions{
                        AutoUpgradeStartTime: sdk.String("corrupti"),
                        Description: sdk.String("accusamus"),
                    },
                },
                MaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("tempora"),
                },
                Name: sdk.String("Louis Grady V"),
                NetworkConfig: &shared.NodeNetworkConfig{
                    CreatePodRange: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                        ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                        TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                    },
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    PodIpv4CidrBlock: sdk.String("consequatur"),
                    PodRange: sdk.String("esse"),
                },
                PlacementPolicy: &shared.PlacementPolicy{
                    Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                },
                PodIpv4CidrSize: sdk.Int(24527),
                SelfLink: sdk.String("voluptatum"),
                Status: shared.NodePoolStatusEnumRunningWithError.ToPointer(),
                StatusMessage: sdk.String("repudiandae"),
                UpdateInfo: &shared.UpdateInfo{
                    BlueGreenInfo: &shared.BlueGreenInfo{
                        BlueInstanceGroupUrls: []string{
                            "et",
                            "blanditiis",
                        },
                        BluePoolDeletionStartTime: sdk.String("ex"),
                        GreenInstanceGroupUrls: []string{
                            "sit",
                        },
                        GreenPoolVersion: sdk.String("vel"),
                        Phase: shared.BlueGreenInfoPhaseEnumCreatingGreenPool.ToPointer(),
                    },
                },
                UpgradeSettings: &shared.UpgradeSettings{
                    BlueGreenSettings: &shared.BlueGreenSettings{
                        NodePoolSoakDuration: sdk.String("saepe"),
                        StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                            BatchNodeCount: sdk.Int(622231),
                            BatchPercentage: sdk.Float32(85.11),
                            BatchSoakDuration: sdk.String("incidunt"),
                        },
                    },
                    MaxSurge: sdk.Int(968865),
                    MaxUnavailable: sdk.Int(209750),
                    Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                },
                Version: sdk.String("dicta"),
            },
            Parent: sdk.String("architecto"),
            ProjectID: sdk.String("occaecati"),
            Zone: sdk.String("labore"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("nam"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("laboriosam"),
        Parent: "alias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsCreateSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsDelete

Deletes a node pool from a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsDelete(ctx, operations.ContainerProjectsLocationsClustersNodePoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        ClusterID: sdk.String("delectus"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("perferendis"),
        Name: "Rickey Kiehn",
        NodePoolID: sdk.String("praesentium"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("veniam"),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("repudiandae"),
        Zone: sdk.String("quasi"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsDeleteSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsList

Lists the node pools for a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsList(ctx, operations.ContainerProjectsLocationsClustersNodePoolsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        ClusterID: sdk.String("suscipit"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("et"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("amet"),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("atque"),
        Zone: sdk.String("error"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNodePoolsResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsRollback(ctx, operations.ContainerProjectsLocationsClustersNodePoolsRollbackRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RollbackNodePoolUpgradeRequest: &shared.RollbackNodePoolUpgradeRequest{
            ClusterID: sdk.String("officiis"),
            Name: sdk.String("Wendell Harber"),
            NodePoolID: sdk.String("maiores"),
            ProjectID: sdk.String("corrupti"),
            RespectPdb: sdk.Bool(false),
            Zone: sdk.String("at"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("atque"),
        Name: "Willie Walker",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsRollbackSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsSetAutoscaling

Sets the autoscaling settings of a specific node pool.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsSetAutoscaling(ctx, operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolAutoscalingRequest: &shared.SetNodePoolAutoscalingRequest{
            Autoscaling: &shared.NodePoolAutoscaling{
                Autoprovisioned: sdk.Bool(false),
                Enabled: sdk.Bool(false),
                LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified.ToPointer(),
                MaxNodeCount: sdk.Int(106429),
                MinNodeCount: sdk.Int(174772),
                TotalMaxNodeCount: sdk.Int(316488),
                TotalMinNodeCount: sdk.Int(389135),
            },
            ClusterID: sdk.String("velit"),
            Name: sdk.String("Ross Gusikowski"),
            NodePoolID: sdk.String("occaecati"),
            ProjectID: sdk.String("officiis"),
            Zone: sdk.String("perspiciatis"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("consequuntur"),
        Name: "Amelia Harvey",
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsSetManagement(ctx, operations.ContainerProjectsLocationsClustersNodePoolsSetManagementRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolManagementRequest: &shared.SetNodePoolManagementRequest{
            ClusterID: sdk.String("vero"),
            Management: &shared.NodeManagement{
                AutoRepair: sdk.Bool(false),
                AutoUpgrade: sdk.Bool(false),
                UpgradeOptions: &shared.AutoUpgradeOptions{
                    AutoUpgradeStartTime: sdk.String("doloremque"),
                    Description: sdk.String("iure"),
                },
            },
            Name: sdk.String("Lena Beier"),
            NodePoolID: sdk.String("qui"),
            ProjectID: sdk.String("cum"),
            Zone: sdk.String("iure"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("voluptatum"),
        Name: "Jim Hammes II",
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsSetSize

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsSetSize(ctx, operations.ContainerProjectsLocationsClustersNodePoolsSetSizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolSizeRequest: &shared.SetNodePoolSizeRequest{
            ClusterID: sdk.String("maiores"),
            Name: sdk.String("Todd O'Reilly"),
            NodeCount: sdk.Int(680349),
            NodePoolID: sdk.String("nesciunt"),
            ProjectID: sdk.String("quae"),
            Zone: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("ex"),
        Key: sdk.String("ut"),
        Name: "Jeff Toy",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity{
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

## ContainerProjectsLocationsClustersNodePoolsUpdate

Updates the version and/or image type of a specific node pool.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersNodePoolsUpdate(ctx, operations.ContainerProjectsLocationsClustersNodePoolsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateNodePoolRequest: &shared.UpdateNodePoolRequest{
            ClusterID: sdk.String("eum"),
            ConfidentialNodes: &shared.ConfidentialNodes{
                Enabled: sdk.Bool(false),
            },
            Etag: sdk.String("reiciendis"),
            FastSocket: &shared.FastSocket{
                Enabled: sdk.Bool(false),
            },
            GcfsConfig: &shared.GcfsConfig{
                Enabled: sdk.Bool(false),
            },
            Gvnic: &shared.VirtualNIC{
                Enabled: sdk.Bool(false),
            },
            ImageType: sdk.String("provident"),
            KubeletConfig: &shared.NodeKubeletConfig{
                CPUCfsQuota: sdk.Bool(false),
                CPUCfsQuotaPeriod: sdk.String("aspernatur"),
                CPUManagerPolicy: sdk.String("ullam"),
                PodPidsLimit: sdk.String("quasi"),
            },
            Labels: &shared.NodeLabels{
                Labels: map[string]string{
                    "nostrum": "mollitia",
                    "provident": "possimus",
                    "animi": "ex",
                },
            },
            LinuxNodeConfig: &shared.LinuxNodeConfig{
                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                Sysctls: map[string]string{
                    "repellat": "doloribus",
                },
            },
            Locations: []string{
                "in",
                "nam",
            },
            LoggingConfig: &shared.NodePoolLoggingConfig{
                VariantConfig: &shared.LoggingVariantConfig{
                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                },
            },
            Name: sdk.String("Neal Schulist"),
            NodeNetworkConfig: &shared.NodeNetworkConfig{
                CreatePodRange: sdk.Bool(false),
                EnablePrivateNodes: sdk.Bool(false),
                NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                    ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                    TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                },
                PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                    Disable: sdk.Bool(false),
                },
                PodIpv4CidrBlock: sdk.String("sapiente"),
                PodRange: sdk.String("cumque"),
            },
            NodePoolID: sdk.String("vitae"),
            NodeVersion: sdk.String("rerum"),
            ProjectID: sdk.String("tempora"),
            ResourceLabels: &shared.ResourceLabels{
                Labels: map[string]string{
                    "inventore": "fugit",
                    "cumque": "quae",
                },
            },
            Tags: &shared.NetworkTags{
                Tags: []string{
                    "velit",
                },
            },
            Taints: &shared.NodeTaints{
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("eius"),
                        Value: sdk.String("rem"),
                    },
                },
            },
            UpgradeSettings: &shared.UpgradeSettings{
                BlueGreenSettings: &shared.BlueGreenSettings{
                    NodePoolSoakDuration: sdk.String("at"),
                    StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                        BatchNodeCount: sdk.Int(773084),
                        BatchPercentage: sdk.Float32(1794.1),
                        BatchSoakDuration: sdk.String("sapiente"),
                    },
                },
                MaxSurge: sdk.Int(433279),
                MaxUnavailable: sdk.Int(117320),
                Strategy: shared.UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified.ToPointer(),
            },
            WindowsNodeConfig: &shared.WindowsNodeConfig{
                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
            },
            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumExpose.ToPointer(),
            },
            Zone: sdk.String("earum"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("earum"),
        Name: "Cary Toy",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.ContainerProjectsLocationsClustersNodePoolsUpdateSecurity{
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

## ContainerProjectsLocationsClustersSetAddons

Sets the addons for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetAddons(ctx, operations.ContainerProjectsLocationsClustersSetAddonsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetAddonsConfigRequest: &shared.SetAddonsConfigRequest{
            AddonsConfig: &shared.AddonsConfig{
                CloudRunConfig: &shared.CloudRunConfig{
                    Disabled: sdk.Bool(false),
                    LoadBalancerType: shared.CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                },
                ConfigConnectorConfig: &shared.ConfigConnectorConfig{
                    Enabled: sdk.Bool(false),
                },
                DNSCacheConfig: &shared.DNSCacheConfig{
                    Enabled: sdk.Bool(false),
                },
                GcePersistentDiskCsiDriverConfig: &shared.GcePersistentDiskCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GcpFilestoreCsiDriverConfig: &shared.GcpFilestoreCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GcsFuseCsiDriverConfig: &shared.GcsFuseCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                    Enabled: sdk.Bool(false),
                },
                HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                    Disabled: sdk.Bool(false),
                },
                HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                    Disabled: sdk.Bool(false),
                },
                IstioConfig: &shared.IstioConfig{
                    Auth: shared.IstioConfigAuthEnumAuthMutualTLS.ToPointer(),
                    Disabled: sdk.Bool(false),
                },
                KalmConfig: &shared.KalmConfig{
                    Enabled: sdk.Bool(false),
                },
                KubernetesDashboard: &shared.KubernetesDashboard{
                    Disabled: sdk.Bool(false),
                },
                NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                    Disabled: sdk.Bool(false),
                },
            },
            ClusterID: sdk.String("necessitatibus"),
            Name: sdk.String("Ms. William Boyle"),
            ProjectID: sdk.String("occaecati"),
            Zone: sdk.String("suscipit"),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("nulla"),
        Name: "Jeffrey Goldner",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ContainerProjectsLocationsClustersSetAddonsSecurity{
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

## ContainerProjectsLocationsClustersSetLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetLegacyAbac(ctx, operations.ContainerProjectsLocationsClustersSetLegacyAbacRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLegacyAbacRequest: &shared.SetLegacyAbacRequest{
            ClusterID: sdk.String("reiciendis"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Mr. Diane Stiedemann"),
            ProjectID: sdk.String("tempora"),
            Zone: sdk.String("esse"),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("laborum"),
        Name: "Audrey Stiedemann",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ContainerProjectsLocationsClustersSetLegacyAbacSecurity{
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

## ContainerProjectsLocationsClustersSetLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetLocations(ctx, operations.ContainerProjectsLocationsClustersSetLocationsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetLocationsRequest: &shared.SetLocationsRequest{
            ClusterID: sdk.String("voluptas"),
            Locations: []string{
                "id",
                "ab",
                "error",
            },
            Name: sdk.String("Pat O'Keefe"),
            ProjectID: sdk.String("ad"),
            Zone: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("ex"),
        Key: sdk.String("quo"),
        Name: "Debbie Hammes V",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.ContainerProjectsLocationsClustersSetLocationsSecurity{
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

## ContainerProjectsLocationsClustersSetLogging

Sets the logging service for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetLogging(ctx, operations.ContainerProjectsLocationsClustersSetLoggingRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLoggingServiceRequest: &shared.SetLoggingServiceRequest{
            ClusterID: sdk.String("veritatis"),
            LoggingService: sdk.String("rerum"),
            Name: sdk.String("Trevor Bartell"),
            ProjectID: sdk.String("architecto"),
            Zone: sdk.String("fuga"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("alias"),
        Key: sdk.String("deleniti"),
        Name: "Ruben Williamson",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.ContainerProjectsLocationsClustersSetLoggingSecurity{
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

## ContainerProjectsLocationsClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetMaintenancePolicy(ctx, operations.ContainerProjectsLocationsClustersSetMaintenancePolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetMaintenancePolicyRequest: &shared.SetMaintenancePolicyRequest{
            ClusterID: sdk.String("illum"),
            MaintenancePolicy: &shared.MaintenancePolicy{
                ResourceVersion: sdk.String("totam"),
                Window: &shared.MaintenanceWindow{
                    DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                        Duration: sdk.String("impedit"),
                        StartTime: sdk.String("quibusdam"),
                    },
                    MaintenanceExclusions: map[string]shared.TimeWindow{
                        "ipsam": shared.TimeWindow{
                            EndTime: sdk.String("culpa"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("aliquam"),
                        },
                        "inventore": shared.TimeWindow{
                            EndTime: sdk.String("deleniti"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("tempora"),
                        },
                        "dolor": shared.TimeWindow{
                            EndTime: sdk.String("consequatur"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("sit"),
                        },
                    },
                    RecurringWindow: &shared.RecurringTimeWindow{
                        Recurrence: sdk.String("modi"),
                        Window: &shared.TimeWindow{
                            EndTime: sdk.String("fugit"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("laudantium"),
                        },
                    },
                },
            },
            Name: sdk.String("Rosa Stiedemann"),
            ProjectID: sdk.String("ipsa"),
            Zone: sdk.String("quas"),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("esse"),
        Key: sdk.String("necessitatibus"),
        Name: "Sally Dooley",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.ContainerProjectsLocationsClustersSetMaintenancePolicySecurity{
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

## ContainerProjectsLocationsClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetMasterAuth(ctx, operations.ContainerProjectsLocationsClustersSetMasterAuthRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetMasterAuthRequest: &shared.SetMasterAuthRequest{
            Action: shared.SetMasterAuthRequestActionEnumSetUsername.ToPointer(),
            ClusterID: sdk.String("autem"),
            Name: sdk.String("Brent Walter II"),
            ProjectID: sdk.String("necessitatibus"),
            Update: &shared.MasterAuth{
                ClientCertificate: sdk.String("quasi"),
                ClientCertificateConfig: &shared.ClientCertificateConfig{
                    IssueClientCertificate: sdk.Bool(false),
                },
                ClientKey: sdk.String("nisi"),
                ClusterCaCertificate: sdk.String("at"),
                Password: sdk.String("vero"),
                Username: sdk.String("Marcel98"),
            },
            Zone: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("blanditiis"),
        Name: "Hector Funk",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.ContainerProjectsLocationsClustersSetMasterAuthSecurity{
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

## ContainerProjectsLocationsClustersSetMonitoring

Sets the monitoring service for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetMonitoring(ctx, operations.ContainerProjectsLocationsClustersSetMonitoringRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetMonitoringServiceRequest: &shared.SetMonitoringServiceRequest{
            ClusterID: sdk.String("laudantium"),
            MonitoringService: sdk.String("incidunt"),
            Name: sdk.String("Mrs. Hilda Stark"),
            ProjectID: sdk.String("consectetur"),
            Zone: sdk.String("aperiam"),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("alias"),
        Key: sdk.String("omnis"),
        Name: "Kristina Moore MD",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.ContainerProjectsLocationsClustersSetMonitoringSecurity{
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

## ContainerProjectsLocationsClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetNetworkPolicy(ctx, operations.ContainerProjectsLocationsClustersSetNetworkPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNetworkPolicyRequest: &shared.SetNetworkPolicyRequest{
            ClusterID: sdk.String("minima"),
            Name: sdk.String("Wilbert Gutkowski"),
            NetworkPolicy: &shared.NetworkPolicy{
                Enabled: sdk.Bool(false),
                Provider: shared.NetworkPolicyProviderEnumProviderUnspecified.ToPointer(),
            },
            ProjectID: sdk.String("itaque"),
            Zone: sdk.String("commodi"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("nam"),
        Key: sdk.String("vero"),
        Name: "Mr. Holly Kautzer",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.ContainerProjectsLocationsClustersSetNetworkPolicySecurity{
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

## ContainerProjectsLocationsClustersSetResourceLabels

Sets labels on a cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersSetResourceLabels(ctx, operations.ContainerProjectsLocationsClustersSetResourceLabelsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLabelsRequest: &shared.SetLabelsRequest{
            ClusterID: sdk.String("esse"),
            LabelFingerprint: sdk.String("nemo"),
            Name: sdk.String("Monique Harvey"),
            ProjectID: sdk.String("impedit"),
            ResourceLabels: map[string]string{
                "necessitatibus": "asperiores",
                "ex": "voluptas",
                "debitis": "delectus",
                "quae": "minus",
            },
            Zone: sdk.String("fuga"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("atque"),
        Key: sdk.String("ipsum"),
        Name: "Victor Rogahn",
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.ContainerProjectsLocationsClustersSetResourceLabelsSecurity{
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

## ContainerProjectsLocationsClustersStartIPRotation

Starts master IP rotation.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersStartIPRotation(ctx, operations.ContainerProjectsLocationsClustersStartIPRotationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StartIPRotationRequest: &shared.StartIPRotationRequest{
            ClusterID: sdk.String("neque"),
            Name: sdk.String("Casey Sporer"),
            ProjectID: sdk.String("voluptatibus"),
            RotateCredentials: sdk.Bool(false),
            Zone: sdk.String("vel"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("facere"),
        Key: sdk.String("libero"),
        Name: "Camille Crist",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ContainerProjectsLocationsClustersStartIPRotationSecurity{
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

## ContainerProjectsLocationsClustersUpdateMaster

Updates the master for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersUpdateMaster(ctx, operations.ContainerProjectsLocationsClustersUpdateMasterRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateMasterRequest: &shared.UpdateMasterRequest{
            ClusterID: sdk.String("beatae"),
            MasterVersion: sdk.String("vero"),
            Name: sdk.String("Franklin Franecki"),
            ProjectID: sdk.String("earum"),
            Zone: sdk.String("dicta"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("alias"),
        Name: "Lorena Flatley",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.ContainerProjectsLocationsClustersUpdateMasterSecurity{
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

## ContainerProjectsLocationsClustersWellKnownGetOpenidConfiguration

Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.

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
    res, err := s.Projects.ContainerProjectsLocationsClustersWellKnownGetOpenidConfiguration(ctx, operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("facilis"),
        Parent: "placeat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOpenIDConfigResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsGetServerConfig

Returns configuration info about the Google Kubernetes Engine service.

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
    res, err := s.Projects.ContainerProjectsLocationsGetServerConfig(ctx, operations.ContainerProjectsLocationsGetServerConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("animi"),
        Name: "Clyde Herzog",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("labore"),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("consectetur"),
        Zone: sdk.String("vitae"),
    }, operations.ContainerProjectsLocationsGetServerConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerConfig != nil {
        // handle response
    }
}
```

## ContainerProjectsLocationsList

Fetches locations that offer Google Kubernetes Engine.

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
    res, err := s.Projects.ContainerProjectsLocationsList(ctx, operations.ContainerProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("iste"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("nemo"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.ContainerProjectsLocationsListSecurity{
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

## ContainerProjectsLocationsOperationsCancel

Cancels the specified operation.

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
    res, err := s.Projects.ContainerProjectsLocationsOperationsCancel(ctx, operations.ContainerProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CancelOperationRequest: &shared.CancelOperationRequest{
            Name: sdk.String("Mary Cummings Jr."),
            OperationID: sdk.String("modi"),
            ProjectID: sdk.String("neque"),
            Zone: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        Name: "Wilbert Crona",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("id"),
    }, operations.ContainerProjectsLocationsOperationsCancelSecurity{
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

## ContainerProjectsLocationsOperationsGet

Gets the specified operation.

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
    res, err := s.Projects.ContainerProjectsLocationsOperationsGet(ctx, operations.ContainerProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("sit"),
        Name: "Mr. Angela Volkman",
        OauthToken: sdk.String("dolore"),
        OperationID: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("distinctio"),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("esse"),
        Zone: sdk.String("dolores"),
    }, operations.ContainerProjectsLocationsOperationsGetSecurity{
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

## ContainerProjectsLocationsOperationsList

Lists all operations in a project in the specified zone or all zones.

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
    res, err := s.Projects.ContainerProjectsLocationsOperationsList(ctx, operations.ContainerProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("provident"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("necessitatibus"),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("ea"),
        Zone: sdk.String("autem"),
    }, operations.ContainerProjectsLocationsOperationsListSecurity{
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

## ContainerProjectsZonesClustersAddons

Sets the addons for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersAddons(ctx, operations.ContainerProjectsZonesClustersAddonsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetAddonsConfigRequest: &shared.SetAddonsConfigRequest{
            AddonsConfig: &shared.AddonsConfig{
                CloudRunConfig: &shared.CloudRunConfig{
                    Disabled: sdk.Bool(false),
                    LoadBalancerType: shared.CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeInternal.ToPointer(),
                },
                ConfigConnectorConfig: &shared.ConfigConnectorConfig{
                    Enabled: sdk.Bool(false),
                },
                DNSCacheConfig: &shared.DNSCacheConfig{
                    Enabled: sdk.Bool(false),
                },
                GcePersistentDiskCsiDriverConfig: &shared.GcePersistentDiskCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GcpFilestoreCsiDriverConfig: &shared.GcpFilestoreCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GcsFuseCsiDriverConfig: &shared.GcsFuseCsiDriverConfig{
                    Enabled: sdk.Bool(false),
                },
                GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                    Enabled: sdk.Bool(false),
                },
                HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                    Disabled: sdk.Bool(false),
                },
                HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                    Disabled: sdk.Bool(false),
                },
                IstioConfig: &shared.IstioConfig{
                    Auth: shared.IstioConfigAuthEnumAuthMutualTLS.ToPointer(),
                    Disabled: sdk.Bool(false),
                },
                KalmConfig: &shared.KalmConfig{
                    Enabled: sdk.Bool(false),
                },
                KubernetesDashboard: &shared.KubernetesDashboard{
                    Disabled: sdk.Bool(false),
                },
                NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                    Disabled: sdk.Bool(false),
                },
            },
            ClusterID: sdk.String("corporis"),
            Name: sdk.String("Boyd Rippin Sr."),
            ProjectID: sdk.String("quidem"),
            Zone: sdk.String("fuga"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        ClusterID: "officiis",
        Fields: sdk.String("eos"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "praesentium",
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("corporis"),
        Zone: "error",
    }, operations.ContainerProjectsZonesClustersAddonsSecurity{
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

## ContainerProjectsZonesClustersCompleteIPRotation

Completes master IP rotation.

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
    res, err := s.Projects.ContainerProjectsZonesClustersCompleteIPRotation(ctx, operations.ContainerProjectsZonesClustersCompleteIPRotationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompleteIPRotationRequest: &shared.CompleteIPRotationRequest{
            ClusterID: sdk.String("adipisci"),
            Name: sdk.String("Otis Grady"),
            ProjectID: sdk.String("beatae"),
            Zone: sdk.String("unde"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        ClusterID: "fugit",
        Fields: sdk.String("numquam"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "at",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("optio"),
        Zone: "necessitatibus",
    }, operations.ContainerProjectsZonesClustersCompleteIPRotationSecurity{
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

## ContainerProjectsZonesClustersCreate

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

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
    res, err := s.Projects.ContainerProjectsZonesClustersCreate(ctx, operations.ContainerProjectsZonesClustersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateClusterRequestInput: &shared.CreateClusterRequestInput{
            Cluster: &shared.ClusterInput{
                AddonsConfig: &shared.AddonsConfig{
                    CloudRunConfig: &shared.CloudRunConfig{
                        Disabled: sdk.Bool(false),
                        LoadBalancerType: shared.CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                    },
                    ConfigConnectorConfig: &shared.ConfigConnectorConfig{
                        Enabled: sdk.Bool(false),
                    },
                    DNSCacheConfig: &shared.DNSCacheConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcePersistentDiskCsiDriverConfig: &shared.GcePersistentDiskCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcpFilestoreCsiDriverConfig: &shared.GcpFilestoreCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcsFuseCsiDriverConfig: &shared.GcsFuseCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
                    },
                    IstioConfig: &shared.IstioConfig{
                        Auth: shared.IstioConfigAuthEnumAuthMutualTLS.ToPointer(),
                        Disabled: sdk.Bool(false),
                    },
                    KalmConfig: &shared.KalmConfig{
                        Enabled: sdk.Bool(false),
                    },
                    KubernetesDashboard: &shared.KubernetesDashboard{
                        Disabled: sdk.Bool(false),
                    },
                    NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                        Disabled: sdk.Bool(false),
                    },
                },
                AuthenticatorGroupsConfig: &shared.AuthenticatorGroupsConfig{
                    Enabled: sdk.Bool(false),
                    SecurityGroup: sdk.String("voluptatum"),
                },
                Autopilot: &shared.Autopilot{
                    Enabled: sdk.Bool(false),
                },
                Autoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "minima",
                        "placeat",
                        "enim",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("neque"),
                        DiskSizeGb: sdk.Int(446877),
                        DiskType: sdk.String("minus"),
                        ImageType: sdk.String("eum"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("modi"),
                                Description: sdk.String("corporis"),
                            },
                        },
                        MinCPUPlatform: sdk.String("magnam"),
                        OauthScopes: []string{
                            "maiores",
                            "tempore",
                            "aperiam",
                            "libero",
                        },
                        ServiceAccount: sdk.String("ratione"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("labore"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(520875),
                                    BatchPercentage: sdk.Float32(5777.09),
                                    BatchSoakDuration: sdk.String("voluptas"),
                                },
                            },
                            MaxSurge: sdk.Int(779180),
                            MaxUnavailable: sdk.Int(242099),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumBalanced.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("est"),
                            Minimum: sdk.String("impedit"),
                            ResourceType: sdk.String("delectus"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("tempore"),
                            Minimum: sdk.String("vero"),
                            ResourceType: sdk.String("odit"),
                        },
                    },
                },
                BinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumProjectSingletonPolicyEnforce.ToPointer(),
                },
                ClusterIpv4Cidr: sdk.String("pariatur"),
                ClusterTelemetry: &shared.ClusterTelemetry{
                    Type: shared.ClusterTelemetryTypeEnumDisabled.ToPointer(),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumOk.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGceQuotaExceeded.ToPointer(),
                        Message: sdk.String("minima"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumPermissionDenied.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGceQuotaExceeded.ToPointer(),
                        Message: sdk.String("excepturi"),
                    },
                },
                ConfidentialNodes: &shared.ConfidentialNodes{
                    Enabled: sdk.Bool(false),
                },
                CostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                CreateTime: sdk.String("dolores"),
                CurrentMasterVersion: sdk.String("error"),
                CurrentNodeCount: sdk.Int(85076),
                CurrentNodeVersion: sdk.String("ducimus"),
                DatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("voluptate"),
                    State: shared.DatabaseEncryptionStateEnumDecrypted.ToPointer(),
                },
                DefaultMaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("itaque"),
                },
                Description: sdk.String("similique"),
                EnableKubernetesAlpha: sdk.Bool(false),
                EnableTpu: sdk.Bool(false),
                Endpoint: sdk.String("optio"),
                Etag: sdk.String("ex"),
                ExpireTime: sdk.String("quaerat"),
                Fleet: &shared.Fleet{
                    Membership: sdk.String("commodi"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("officiis"),
                },
                IdentityServiceConfig: &shared.IdentityServiceConfig{
                    Enabled: sdk.Bool(false),
                },
                InitialClusterVersion: sdk.String("placeat"),
                InitialNodeCount: sdk.Int(697274),
                InstanceGroupUrls: []string{
                    "quam",
                    "dolorem",
                },
                IPAllocationPolicy: &shared.IPAllocationPolicyInput{
                    AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                        PodRangeNames: []string{
                            "ipsa",
                            "sint",
                        },
                    },
                    AllowRouteOverlap: sdk.Bool(false),
                    ClusterIpv4Cidr: sdk.String("vero"),
                    ClusterIpv4CidrBlock: sdk.String("sequi"),
                    ClusterSecondaryRangeName: sdk.String("repudiandae"),
                    CreateSubnetwork: sdk.Bool(false),
                    Ipv6AccessType: shared.IPAllocationPolicyIpv6AccessTypeEnumExternal.ToPointer(),
                    NodeIpv4Cidr: sdk.String("dicta"),
                    NodeIpv4CidrBlock: sdk.String("earum"),
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    ServicesIpv4Cidr: sdk.String("veniam"),
                    ServicesIpv4CidrBlock: sdk.String("animi"),
                    ServicesSecondaryRangeName: sdk.String("dolores"),
                    StackType: shared.IPAllocationPolicyStackTypeEnumIpv4Ipv6.ToPointer(),
                    SubnetworkName: sdk.String("dicta"),
                    TpuIpv4CidrBlock: sdk.String("consequuntur"),
                    UseIPAliases: sdk.Bool(false),
                    UseRoutes: sdk.Bool(false),
                },
                LabelFingerprint: sdk.String("necessitatibus"),
                LegacyAbac: &shared.LegacyAbac{
                    Enabled: sdk.Bool(false),
                },
                Location: sdk.String("nobis"),
                Locations: []string{
                    "ducimus",
                },
                LoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.LoggingComponentConfigEnableComponentsEnumWorkloads,
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                        },
                    },
                },
                LoggingService: sdk.String("libero"),
                MaintenancePolicy: &shared.MaintenancePolicy{
                    ResourceVersion: sdk.String("excepturi"),
                    Window: &shared.MaintenanceWindow{
                        DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                            Duration: sdk.String("occaecati"),
                            StartTime: sdk.String("nemo"),
                        },
                        MaintenanceExclusions: map[string]shared.TimeWindow{
                            "nostrum": shared.TimeWindow{
                                EndTime: sdk.String("doloribus"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorOrNodeUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("sint"),
                            },
                            "enim": shared.TimeWindow{
                                EndTime: sdk.String("hic"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("quas"),
                            },
                        },
                        RecurringWindow: &shared.RecurringTimeWindow{
                            Recurrence: sdk.String("totam"),
                            Window: &shared.TimeWindow{
                                EndTime: sdk.String("molestias"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("eaque"),
                            },
                        },
                    },
                },
                Master: map[string]interface{}{
                    "architecto": "quos",
                    "iste": "assumenda",
                    "tempore": "libero",
                    "velit": "doloremque",
                },
                MasterAuth: &shared.MasterAuth{
                    ClientCertificate: sdk.String("delectus"),
                    ClientCertificateConfig: &shared.ClientCertificateConfig{
                        IssueClientCertificate: sdk.Bool(false),
                    },
                    ClientKey: sdk.String("impedit"),
                    ClusterCaCertificate: sdk.String("cum"),
                    Password: sdk.String("ipsum"),
                    Username: sdk.String("Davin.Turner"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("veniam"),
                            DisplayName: sdk.String("libero"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("architecto"),
                            DisplayName: sdk.String("cupiditate"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                MasterIpv4CidrBlock: sdk.String("molestiae"),
                MeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                MonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumScheduler,
                            shared.MonitoringComponentConfigEnableComponentsEnumSystemComponents,
                            shared.MonitoringComponentConfigEnableComponentsEnumSystemComponents,
                            shared.MonitoringComponentConfigEnableComponentsEnumControllerManager,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                MonitoringService: sdk.String("sed"),
                Name: sdk.String("Jerome Cruickshank"),
                Network: sdk.String("odit"),
                NetworkConfig: &shared.NetworkConfig{
                    DatapathProvider: shared.NetworkConfigDatapathProviderEnumAdvancedDatapath.ToPointer(),
                    DefaultSnatStatus: &shared.DefaultSnatStatus{
                        Disabled: sdk.Bool(false),
                    },
                    DNSConfig: &shared.DNSConfig{
                        ClusterDNS: shared.DNSConfigClusterDNSEnumProviderUnspecified.ToPointer(),
                        ClusterDNSDomain: sdk.String("exercitationem"),
                        ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumDNSScopeUnspecified.ToPointer(),
                    },
                    EnableIntraNodeVisibility: sdk.Bool(false),
                    EnableL4ilbSubsetting: sdk.Bool(false),
                    GatewayAPIConfig: &shared.GatewayAPIConfig{
                        Channel: shared.GatewayAPIConfigChannelEnumChannelUnspecified.ToPointer(),
                    },
                    Network: sdk.String("facilis"),
                    PrivateIpv6GoogleAccess: shared.NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessToGoogle.ToPointer(),
                    ServiceExternalIpsConfig: &shared.ServiceExternalIPsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Subnetwork: sdk.String("nisi"),
                },
                NetworkPolicy: &shared.NetworkPolicy{
                    Enabled: sdk.Bool(false),
                    Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
                },
                NodeConfig: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("blanditiis"),
                            AcceleratorType: sdk.String("distinctio"),
                            GpuPartitionSize: sdk.String("nisi"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("nisi"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("libero"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("minus"),
                            AcceleratorType: sdk.String("facere"),
                            GpuPartitionSize: sdk.String("facilis"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("ad"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("voluptatibus"),
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("voluptatibus"),
                    },
                    BootDiskKmsKey: sdk.String("consequuntur"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(891581),
                    DiskType: sdk.String("labore"),
                    EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                        LocalSsdCount: sdk.Int(700928),
                    },
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(179795),
                    },
                    FastSocket: &shared.FastSocket{
                        Enabled: sdk.Bool(false),
                    },
                    GcfsConfig: &shared.GcfsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Gvnic: &shared.VirtualNIC{
                        Enabled: sdk.Bool(false),
                    },
                    ImageType: sdk.String("reprehenderit"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("nostrum"),
                        CPUManagerPolicy: sdk.String("neque"),
                        PodPidsLimit: sdk.String("iusto"),
                    },
                    Labels: map[string]string{
                        "rem": "eligendi",
                        "fugiat": "unde",
                        "officiis": "ducimus",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                        Sysctls: map[string]string{
                            "error": "porro",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(111496),
                    },
                    LocalSsdCount: sdk.Int(491591),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("fugiat"),
                    Metadata: map[string]string{
                        "aspernatur": "enim",
                        "delectus": "iusto",
                    },
                    MinCPUPlatform: sdk.String("dignissimos"),
                    NodeGroup: sdk.String("libero"),
                    OauthScopes: []string{
                        "ab",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("accusamus"),
                        Values: []string{
                            "tempore",
                            "veniam",
                            "eos",
                            "reiciendis",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "reprehenderit": "praesentium",
                        "nemo": "repellat",
                        "quisquam": "sequi",
                        "nihil": "deleniti",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        SandboxType: sdk.String("illo"),
                        Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                    },
                    ServiceAccount: sdk.String("assumenda"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "quisquam",
                        "provident",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                            Key: sdk.String("consequatur"),
                            Value: sdk.String("maxime"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                            Key: sdk.String("nam"),
                            Value: sdk.String("expedita"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("provident"),
                            Value: sdk.String("repudiandae"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                        NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumSecure.ToPointer(),
                    },
                },
                NodeIpv4CidrSize: sdk.Int(873833),
                NodePoolAutoConfig: &shared.NodePoolAutoConfig{
                    NetworkTags: &shared.NetworkTags{
                        Tags: []string{
                            "repellendus",
                            "iure",
                            "dolorem",
                        },
                    },
                },
                NodePoolDefaults: &shared.NodePoolDefaults{
                    NodeConfigDefaults: &shared.NodeConfigDefaults{
                        GcfsConfig: &shared.GcfsConfig{
                            Enabled: sdk.Bool(false),
                        },
                        LoggingConfig: &shared.NodePoolLoggingConfig{
                            VariantConfig: &shared.LoggingVariantConfig{
                                Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                            },
                        },
                    },
                },
                NodePools: []shared.NodePool{
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                            MaxNodeCount: sdk.Int(12171),
                            MinNodeCount: sdk.Int(32055),
                            TotalMaxNodeCount: sdk.Int(322829),
                            TotalMinNodeCount: sdk.Int(60995),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumInternal.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceQuotaExceeded.ToPointer(),
                                Message: sdk.String("quidem"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("amet"),
                                    AcceleratorType: sdk.String("quasi"),
                                    GpuPartitionSize: sdk.String("dicta"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("doloremque"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("earum"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("iusto"),
                                    AcceleratorType: sdk.String("amet"),
                                    GpuPartitionSize: sdk.String("provident"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("necessitatibus"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("provident"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("repudiandae"),
                                    AcceleratorType: sdk.String("consequatur"),
                                    GpuPartitionSize: sdk.String("nemo"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("itaque"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("facilis"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("corrupti"),
                            },
                            BootDiskKmsKey: sdk.String("aperiam"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(574092),
                            DiskType: sdk.String("accusamus"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(178635),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(520081),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("dicta"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("voluptatem"),
                                CPUManagerPolicy: sdk.String("velit"),
                                PodPidsLimit: sdk.String("dolor"),
                            },
                            Labels: map[string]string{
                                "a": "dolor",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                                Sysctls: map[string]string{
                                    "beatae": "at",
                                    "labore": "minus",
                                    "esse": "voluptatem",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(20950),
                            },
                            LocalSsdCount: sdk.Int(698558),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("aperiam"),
                            Metadata: map[string]string{
                                "repellat": "velit",
                                "porro": "provident",
                            },
                            MinCPUPlatform: sdk.String("consectetur"),
                            NodeGroup: sdk.String("eligendi"),
                            OauthScopes: []string{
                                "consectetur",
                                "soluta",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumAnyReservation.ToPointer(),
                                Key: sdk.String("temporibus"),
                                Values: []string{
                                    "amet",
                                    "tenetur",
                                    "aspernatur",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "itaque": "illum",
                                "laborum": "dignissimos",
                                "vero": "qui",
                                "consectetur": "repellat",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("explicabo"),
                                Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                            },
                            ServiceAccount: sdk.String("exercitationem"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "non",
                                "ab",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("deserunt"),
                                    Value: sdk.String("delectus"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumSecure.ToPointer(),
                            },
                        },
                        Etag: sdk.String("exercitationem"),
                        InitialNodeCount: sdk.Int(288300),
                        InstanceGroupUrls: []string{
                            "repudiandae",
                            "modi",
                        },
                        Locations: []string{
                            "explicabo",
                            "accusamus",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("rem"),
                                Description: sdk.String("aperiam"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("odit"),
                        },
                        Name: sdk.String("Bill Kling"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("sit"),
                            PodRange: sdk.String("modi"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(199529),
                        SelfLink: sdk.String("mollitia"),
                        Status: shared.NodePoolStatusEnumRunningWithError.ToPointer(),
                        StatusMessage: sdk.String("fugiat"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "molestiae",
                                    "veniam",
                                },
                                BluePoolDeletionStartTime: sdk.String("reiciendis"),
                                GreenInstanceGroupUrls: []string{
                                    "modi",
                                },
                                GreenPoolVersion: sdk.String("aut"),
                                Phase: shared.BlueGreenInfoPhaseEnumPhaseUnspecified.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("eveniet"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(483753),
                                    BatchPercentage: sdk.Float32(4137.58),
                                    BatchSoakDuration: sdk.String("numquam"),
                                },
                            },
                            MaxSurge: sdk.Int(677045),
                            MaxUnavailable: sdk.Int(823718),
                            Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
                        },
                        Version: sdk.String("consectetur"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified.ToPointer(),
                            MaxNodeCount: sdk.Int(310629),
                            MinNodeCount: sdk.Int(929476),
                            TotalMaxNodeCount: sdk.Int(791228),
                            TotalMinNodeCount: sdk.Int(122662),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnauthenticated.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceQuotaExceeded.ToPointer(),
                                Message: sdk.String("et"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumAborted.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                                Message: sdk.String("autem"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumAborted.ToPointer(),
                                Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                                Message: sdk.String("rem"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("quos"),
                                    AcceleratorType: sdk.String("laudantium"),
                                    GpuPartitionSize: sdk.String("repellendus"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("quae"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("eaque"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("saepe"),
                            },
                            BootDiskKmsKey: sdk.String("delectus"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(651228),
                            DiskType: sdk.String("nulla"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(640907),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(152027),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("voluptatem"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("alias"),
                                CPUManagerPolicy: sdk.String("eveniet"),
                                PodPidsLimit: sdk.String("hic"),
                            },
                            Labels: map[string]string{
                                "incidunt": "qui",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                                Sysctls: map[string]string{
                                    "harum": "explicabo",
                                    "beatae": "aliquid",
                                    "modi": "optio",
                                    "voluptatibus": "molestias",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(639463),
                            },
                            LocalSsdCount: sdk.Int(730478),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("sequi"),
                            Metadata: map[string]string{
                                "ea": "impedit",
                                "ducimus": "odit",
                            },
                            MinCPUPlatform: sdk.String("velit"),
                            NodeGroup: sdk.String("reiciendis"),
                            OauthScopes: []string{
                                "nulla",
                                "laborum",
                                "natus",
                                "accusamus",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                                Key: sdk.String("nisi"),
                                Values: []string{
                                    "recusandae",
                                    "voluptates",
                                    "non",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "quia": "ullam",
                                "quisquam": "dicta",
                                "voluptatibus": "eligendi",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("quae"),
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("architecto"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "enim",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("perferendis"),
                                    Value: sdk.String("facilis"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("a"),
                                    Value: sdk.String("iste"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("quos"),
                                    Value: sdk.String("ullam"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("modi"),
                                    Value: sdk.String("itaque"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumUnspecified.ToPointer(),
                            },
                        },
                        Etag: sdk.String("assumenda"),
                        InitialNodeCount: sdk.Int(876840),
                        InstanceGroupUrls: []string{
                            "impedit",
                            "porro",
                            "accusamus",
                            "totam",
                        },
                        Locations: []string{
                            "ab",
                            "sint",
                            "nihil",
                            "esse",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("iure"),
                                Description: sdk.String("odio"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("nesciunt"),
                        },
                        Name: sdk.String("Ben Durgan"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("reprehenderit"),
                            PodRange: sdk.String("distinctio"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(56372),
                        SelfLink: sdk.String("rem"),
                        Status: shared.NodePoolStatusEnumError.ToPointer(),
                        StatusMessage: sdk.String("accusantium"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "saepe",
                                    "neque",
                                },
                                BluePoolDeletionStartTime: sdk.String("facere"),
                                GreenInstanceGroupUrls: []string{
                                    "quos",
                                    "doloribus",
                                },
                                GreenPoolVersion: sdk.String("fugiat"),
                                Phase: shared.BlueGreenInfoPhaseEnumNodePoolSoaking.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("delectus"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(245278),
                                    BatchPercentage: sdk.Float32(1105.22),
                                    BatchSoakDuration: sdk.String("nesciunt"),
                                },
                            },
                            MaxSurge: sdk.Int(630832),
                            MaxUnavailable: sdk.Int(74895),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("nemo"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                            MaxNodeCount: sdk.Int(823753),
                            MinNodeCount: sdk.Int(603323),
                            TotalMaxNodeCount: sdk.Int(275425),
                            TotalMinNodeCount: sdk.Int(128021),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumResourceExhausted.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCloudKmsKeyError.ToPointer(),
                                Message: sdk.String("alias"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumAborted.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                                Message: sdk.String("commodi"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("consequuntur"),
                                    AcceleratorType: sdk.String("veniam"),
                                    GpuPartitionSize: sdk.String("debitis"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("sint"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("ut"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("numquam"),
                                    AcceleratorType: sdk.String("tenetur"),
                                    GpuPartitionSize: sdk.String("adipisci"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("in"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("minima"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("ex"),
                                    AcceleratorType: sdk.String("minus"),
                                    GpuPartitionSize: sdk.String("ab"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("hic"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("nisi"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("quisquam"),
                                    AcceleratorType: sdk.String("dolor"),
                                    GpuPartitionSize: sdk.String("ducimus"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("minima"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("architecto"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("qui"),
                            },
                            BootDiskKmsKey: sdk.String("aliquid"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(166289),
                            DiskType: sdk.String("incidunt"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(240490),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(506343),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("dolor"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("exercitationem"),
                                CPUManagerPolicy: sdk.String("expedita"),
                                PodPidsLimit: sdk.String("facilis"),
                            },
                            Labels: map[string]string{
                                "sit": "nemo",
                                "culpa": "consequuntur",
                                "amet": "deserunt",
                                "modi": "veniam",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                                Sysctls: map[string]string{
                                    "a": "quisquam",
                                    "enim": "doloribus",
                                    "assumenda": "officiis",
                                    "architecto": "alias",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(633982),
                            },
                            LocalSsdCount: sdk.Int(60335),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("necessitatibus"),
                            Metadata: map[string]string{
                                "dicta": "vel",
                            },
                            MinCPUPlatform: sdk.String("perspiciatis"),
                            NodeGroup: sdk.String("debitis"),
                            OauthScopes: []string{
                                "architecto",
                                "accusantium",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                                Key: sdk.String("veritatis"),
                                Values: []string{
                                    "cumque",
                                    "iure",
                                    "quibusdam",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "nemo": "recusandae",
                                "velit": "magnam",
                                "dignissimos": "laboriosam",
                                "sed": "odio",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("natus"),
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("cum"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "facilis",
                                "quidem",
                                "itaque",
                                "laboriosam",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("perspiciatis"),
                                    Value: sdk.String("hic"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("aspernatur"),
                                    Value: sdk.String("libero"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("incidunt"),
                                    Value: sdk.String("recusandae"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumGkeMetadataServer.ToPointer(),
                            },
                        },
                        Etag: sdk.String("autem"),
                        InitialNodeCount: sdk.Int(779409),
                        InstanceGroupUrls: []string{
                            "illum",
                        },
                        Locations: []string{
                            "illum",
                            "facilis",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("non"),
                                Description: sdk.String("mollitia"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("assumenda"),
                        },
                        Name: sdk.String("Preston Stroman"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("laborum"),
                            PodRange: sdk.String("incidunt"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(369523),
                        SelfLink: sdk.String("alias"),
                        Status: shared.NodePoolStatusEnumRunning.ToPointer(),
                        StatusMessage: sdk.String("deserunt"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "laborum",
                                    "est",
                                    "occaecati",
                                },
                                BluePoolDeletionStartTime: sdk.String("labore"),
                                GreenInstanceGroupUrls: []string{
                                    "perferendis",
                                    "fugit",
                                    "aliquid",
                                    "magnam",
                                },
                                GreenPoolVersion: sdk.String("quaerat"),
                                Phase: shared.BlueGreenInfoPhaseEnumDeletingBluePool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("hic"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(342921),
                                    BatchPercentage: sdk.Float32(8882.65),
                                    BatchSoakDuration: sdk.String("unde"),
                                },
                            },
                            MaxSurge: sdk.Int(860311),
                            MaxUnavailable: sdk.Int(621393),
                            Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
                        },
                        Version: sdk.String("magnam"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                            MaxNodeCount: sdk.Int(460909),
                            MinNodeCount: sdk.Int(548849),
                            TotalMaxNodeCount: sdk.Int(684799),
                            TotalMinNodeCount: sdk.Int(815225),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumCancelled.ToPointer(),
                                Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                                Message: sdk.String("quod"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumAlreadyExists.ToPointer(),
                                Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                                Message: sdk.String("voluptatem"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnimplemented.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                                Message: sdk.String("maxime"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumOk.ToPointer(),
                                Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                                Message: sdk.String("architecto"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("porro"),
                                    AcceleratorType: sdk.String("blanditiis"),
                                    GpuPartitionSize: sdk.String("quae"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("officiis"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("sed"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("necessitatibus"),
                                    AcceleratorType: sdk.String("impedit"),
                                    GpuPartitionSize: sdk.String("ipsa"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("a"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("maiores"),
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("laudantium"),
                                    AcceleratorType: sdk.String("maiores"),
                                    GpuPartitionSize: sdk.String("alias"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("rem"),
                                    },
                                    MaxTimeSharedClientsPerGpu: sdk.String("dicta"),
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("suscipit"),
                            },
                            BootDiskKmsKey: sdk.String("earum"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(985360),
                            DiskType: sdk.String("velit"),
                            EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                                LocalSsdCount: sdk.Int(260588),
                            },
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(458212),
                            },
                            FastSocket: &shared.FastSocket{
                                Enabled: sdk.Bool(false),
                            },
                            GcfsConfig: &shared.GcfsConfig{
                                Enabled: sdk.Bool(false),
                            },
                            Gvnic: &shared.VirtualNIC{
                                Enabled: sdk.Bool(false),
                            },
                            ImageType: sdk.String("in"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("eligendi"),
                                CPUManagerPolicy: sdk.String("quasi"),
                                PodPidsLimit: sdk.String("neque"),
                            },
                            Labels: map[string]string{
                                "excepturi": "accusantium",
                                "qui": "impedit",
                                "beatae": "incidunt",
                                "dicta": "odit",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                                Sysctls: map[string]string{
                                    "alias": "error",
                                    "vel": "accusantium",
                                    "id": "laboriosam",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(401688),
                            },
                            LocalSsdCount: sdk.Int(555679),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("ullam"),
                            Metadata: map[string]string{
                                "similique": "incidunt",
                            },
                            MinCPUPlatform: sdk.String("quam"),
                            NodeGroup: sdk.String("magni"),
                            OauthScopes: []string{
                                "delectus",
                                "omnis",
                                "sed",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                                Key: sdk.String("maxime"),
                                Values: []string{
                                    "cupiditate",
                                    "aliquam",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "maiores": "laudantium",
                                "velit": "reiciendis",
                                "amet": "nemo",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                SandboxType: sdk.String("ipsa"),
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("tenetur"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "molestiae",
                                "aliquid",
                                "asperiores",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("perspiciatis"),
                                    Value: sdk.String("accusantium"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("minus"),
                                    Value: sdk.String("commodi"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                                    Key: sdk.String("porro"),
                                    Value: sdk.String("tempore"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("modi"),
                                    Value: sdk.String("voluptates"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumUnspecified.ToPointer(),
                            },
                        },
                        Etag: sdk.String("eligendi"),
                        InitialNodeCount: sdk.Int(992887),
                        InstanceGroupUrls: []string{
                            "blanditiis",
                            "sint",
                        },
                        Locations: []string{
                            "a",
                            "animi",
                            "maiores",
                            "itaque",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("nulla"),
                                Description: sdk.String("deserunt"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("corporis"),
                        },
                        Name: sdk.String("Gretchen Halvorson"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("accusantium"),
                            PodRange: sdk.String("officia"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(97896),
                        SelfLink: sdk.String("blanditiis"),
                        Status: shared.NodePoolStatusEnumProvisioning.ToPointer(),
                        StatusMessage: sdk.String("quisquam"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "nobis",
                                },
                                BluePoolDeletionStartTime: sdk.String("natus"),
                                GreenInstanceGroupUrls: []string{
                                    "quia",
                                    "magnam",
                                    "reprehenderit",
                                    "quod",
                                },
                                GreenPoolVersion: sdk.String("quos"),
                                Phase: shared.BlueGreenInfoPhaseEnumDrainingBluePool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("amet"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(473326),
                                    BatchPercentage: sdk.Float32(2271.56),
                                    BatchSoakDuration: sdk.String("laborum"),
                                },
                            },
                            MaxSurge: sdk.Int(266946),
                            MaxUnavailable: sdk.Int(21358),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("architecto"),
                    },
                },
                NotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumUpgradeAvailableEvent,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                                shared.FilterEventTypeEnumSecurityBulletinEvent,
                            },
                        },
                        Topic: sdk.String("neque"),
                    },
                },
                PodSecurityPolicyConfig: &shared.PodSecurityPolicyConfig{
                    Enabled: sdk.Bool(false),
                },
                PrivateCluster: sdk.Bool(false),
                PrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("odit"),
                    PeeringName: sdk.String("earum"),
                    PrivateEndpoint: sdk.String("veniam"),
                    PrivateEndpointSubnetwork: sdk.String("ipsam"),
                    PublicEndpoint: sdk.String("eaque"),
                },
                ProtectConfig: &shared.ProtectConfig{
                    WorkloadConfig: &shared.WorkloadConfig{
                        AuditMode: shared.WorkloadConfigAuditModeEnumDisabled.ToPointer(),
                    },
                    WorkloadVulnerabilityMode: shared.ProtectConfigWorkloadVulnerabilityModeEnumWorkloadVulnerabilityModeUnspecified.ToPointer(),
                },
                ReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumRapid.ToPointer(),
                },
                ResourceLabels: map[string]string{
                    "nisi": "tenetur",
                    "quis": "quibusdam",
                },
                ResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("nemo"),
                    },
                    ConsumptionMeteringConfig: &shared.ConsumptionMeteringConfig{
                        Enabled: sdk.Bool(false),
                    },
                    EnableNetworkEgressMetering: sdk.Bool(false),
                },
                SelfLink: sdk.String("suscipit"),
                ServicesIpv4Cidr: sdk.String("pariatur"),
                ShieldedNodes: &shared.ShieldedNodes{
                    Enabled: sdk.Bool(false),
                },
                Status: shared.ClusterStatusEnumStatusUnspecified.ToPointer(),
                StatusMessage: sdk.String("quidem"),
                Subnetwork: sdk.String("repellendus"),
                TpuConfig: &shared.TpuConfig{
                    Enabled: sdk.Bool(false),
                    Ipv4CidrBlock: sdk.String("perferendis"),
                    UseServiceNetworking: sdk.Bool(false),
                },
                TpuIpv4CidrBlock: sdk.String("id"),
                VerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                WorkloadAltsConfig: &shared.WorkloadALTSConfig{
                    EnableAlts: sdk.Bool(false),
                },
                WorkloadCertificates: &shared.WorkloadCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                WorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    IdentityNamespace: sdk.String("sapiente"),
                    IdentityProvider: sdk.String("sed"),
                    WorkloadPool: sdk.String("possimus"),
                },
                Zone: sdk.String("repellat"),
            },
            Parent: sdk.String("repudiandae"),
            ProjectID: sdk.String("architecto"),
            Zone: sdk.String("adipisci"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "minus",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("velit"),
        Zone: "earum",
    }, operations.ContainerProjectsZonesClustersCreateSecurity{
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

## ContainerProjectsZonesClustersDelete

Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

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
    res, err := s.Projects.ContainerProjectsZonesClustersDelete(ctx, operations.ContainerProjectsZonesClustersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quasi"),
        ClusterID: "mollitia",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("harum"),
        Name: sdk.String("Anthony Rath MD"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("possimus"),
        Zone: "dolor",
    }, operations.ContainerProjectsZonesClustersDeleteSecurity{
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

## ContainerProjectsZonesClustersGet

Gets the details for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersGet(ctx, operations.ContainerProjectsZonesClustersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        ClusterID: "delectus",
        Fields: sdk.String("minus"),
        Key: sdk.String("quo"),
        Name: sdk.String("Emanuel Lemke"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "illo",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("nostrum"),
        Zone: "at",
    }, operations.ContainerProjectsZonesClustersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Cluster != nil {
        // handle response
    }
}
```

## ContainerProjectsZonesClustersLegacyAbac

Enables or disables the ABAC authorization mechanism on a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersLegacyAbac(ctx, operations.ContainerProjectsZonesClustersLegacyAbacRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLegacyAbacRequest: &shared.SetLegacyAbacRequest{
            ClusterID: sdk.String("neque"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Chester Willms V"),
            ProjectID: sdk.String("aperiam"),
            Zone: sdk.String("non"),
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        ClusterID: "quisquam",
        Fields: sdk.String("quas"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "inventore",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("est"),
        Zone: "dolor",
    }, operations.ContainerProjectsZonesClustersLegacyAbacSecurity{
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

## ContainerProjectsZonesClustersList

Lists all clusters owned by a project in either the specified zone or all zones.

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
    res, err := s.Projects.ContainerProjectsZonesClustersList(ctx, operations.ContainerProjectsZonesClustersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("adipisci"),
        Parent: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "tempora",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("sequi"),
        Zone: "voluptatum",
    }, operations.ContainerProjectsZonesClustersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListClustersResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsZonesClustersLocations

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters/update) instead.

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
    res, err := s.Projects.ContainerProjectsZonesClustersLocations(ctx, operations.ContainerProjectsZonesClustersLocationsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetLocationsRequest: &shared.SetLocationsRequest{
            ClusterID: sdk.String("rerum"),
            Locations: []string{
                "tenetur",
            },
            Name: sdk.String("Yvette Larson"),
            ProjectID: sdk.String("magni"),
            Zone: sdk.String("nihil"),
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        ClusterID: "alias",
        Fields: sdk.String("fuga"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "maxime",
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("ullam"),
        Zone: "eligendi",
    }, operations.ContainerProjectsZonesClustersLocationsSecurity{
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

## ContainerProjectsZonesClustersLogging

Sets the logging service for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersLogging(ctx, operations.ContainerProjectsZonesClustersLoggingRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLoggingServiceRequest: &shared.SetLoggingServiceRequest{
            ClusterID: sdk.String("voluptas"),
            LoggingService: sdk.String("occaecati"),
            Name: sdk.String("Miss Joshua Koss"),
            ProjectID: sdk.String("quasi"),
            Zone: sdk.String("cumque"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        ClusterID: "facilis",
        Fields: sdk.String("beatae"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "labore",
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("rem"),
        Zone: "atque",
    }, operations.ContainerProjectsZonesClustersLoggingSecurity{
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

## ContainerProjectsZonesClustersMaster

Updates the master for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersMaster(ctx, operations.ContainerProjectsZonesClustersMasterRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateMasterRequest: &shared.UpdateMasterRequest{
            ClusterID: sdk.String("cum"),
            MasterVersion: sdk.String("pariatur"),
            Name: sdk.String("Garrett Gottlieb"),
            ProjectID: sdk.String("porro"),
            Zone: sdk.String("id"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        ClusterID: "quo",
        Fields: sdk.String("esse"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "accusantium",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("pariatur"),
        Zone: "eligendi",
    }, operations.ContainerProjectsZonesClustersMasterSecurity{
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

## ContainerProjectsZonesClustersMonitoring

Sets the monitoring service for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersMonitoring(ctx, operations.ContainerProjectsZonesClustersMonitoringRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetMonitoringServiceRequest: &shared.SetMonitoringServiceRequest{
            ClusterID: sdk.String("veritatis"),
            MonitoringService: sdk.String("aut"),
            Name: sdk.String("Mathew Erdman"),
            ProjectID: sdk.String("magni"),
            Zone: sdk.String("rerum"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        ClusterID: "at",
        Fields: sdk.String("eum"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "blanditiis",
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("rerum"),
        Zone: "deserunt",
    }, operations.ContainerProjectsZonesClustersMonitoringSecurity{
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

## ContainerProjectsZonesClustersNodePoolsAutoscaling

Sets the autoscaling settings of a specific node pool.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsAutoscaling(ctx, operations.ContainerProjectsZonesClustersNodePoolsAutoscalingRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNodePoolAutoscalingRequest: &shared.SetNodePoolAutoscalingRequest{
            Autoscaling: &shared.NodePoolAutoscaling{
                Autoprovisioned: sdk.Bool(false),
                Enabled: sdk.Bool(false),
                LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                MaxNodeCount: sdk.Int(542340),
                MinNodeCount: sdk.Int(101107),
                TotalMaxNodeCount: sdk.Int(667213),
                TotalMinNodeCount: sdk.Int(318379),
            },
            ClusterID: sdk.String("rem"),
            Name: sdk.String("Amy Lynch"),
            NodePoolID: sdk.String("labore"),
            ProjectID: sdk.String("sapiente"),
            Zone: sdk.String("saepe"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        ClusterID: "cumque",
        Fields: sdk.String("natus"),
        Key: sdk.String("quaerat"),
        NodePoolID: "doloribus",
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "officiis",
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("quis"),
        Zone: "enim",
    }, operations.ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity{
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

## ContainerProjectsZonesClustersNodePoolsCreate

Creates a node pool for a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsCreate(ctx, operations.ContainerProjectsZonesClustersNodePoolsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateNodePoolRequest: &shared.CreateNodePoolRequest{
            ClusterID: sdk.String("nemo"),
            NodePool: &shared.NodePool{
                Autoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                    MaxNodeCount: sdk.Int(201266),
                    MinNodeCount: sdk.Int(22331),
                    TotalMaxNodeCount: sdk.Int(487148),
                    TotalMinNodeCount: sdk.Int(794306),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnavailable.ToPointer(),
                        Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                        Message: sdk.String("praesentium"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnknown.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGceStockout.ToPointer(),
                        Message: sdk.String("sit"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumAlreadyExists.ToPointer(),
                        Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                        Message: sdk.String("sed"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumResourceExhausted.ToPointer(),
                        Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                        Message: sdk.String("nesciunt"),
                    },
                },
                Config: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("laborum"),
                            AcceleratorType: sdk.String("aliquam"),
                            GpuPartitionSize: sdk.String("deserunt"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("sunt"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("impedit"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("eius"),
                            AcceleratorType: sdk.String("voluptatum"),
                            GpuPartitionSize: sdk.String("ipsa"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("dolorem"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("repellat"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("aspernatur"),
                            AcceleratorType: sdk.String("inventore"),
                            GpuPartitionSize: sdk.String("sequi"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("fuga"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("hic"),
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("eaque"),
                            AcceleratorType: sdk.String("dolorem"),
                            GpuPartitionSize: sdk.String("architecto"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("aspernatur"),
                            },
                            MaxTimeSharedClientsPerGpu: sdk.String("nulla"),
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("enim"),
                    },
                    BootDiskKmsKey: sdk.String("illo"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(298750),
                    DiskType: sdk.String("delectus"),
                    EphemeralStorageConfig: &shared.EphemeralStorageConfig{
                        LocalSsdCount: sdk.Int(255064),
                    },
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(760279),
                    },
                    FastSocket: &shared.FastSocket{
                        Enabled: sdk.Bool(false),
                    },
                    GcfsConfig: &shared.GcfsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Gvnic: &shared.VirtualNIC{
                        Enabled: sdk.Bool(false),
                    },
                    ImageType: sdk.String("nobis"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("ex"),
                        CPUManagerPolicy: sdk.String("repellat"),
                        PodPidsLimit: sdk.String("quae"),
                    },
                    Labels: map[string]string{
                        "expedita": "hic",
                        "excepturi": "aliquid",
                        "sed": "beatae",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                        Sysctls: map[string]string{
                            "animi": "dolore",
                            "tenetur": "dignissimos",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(457835),
                    },
                    LocalSsdCount: sdk.Int(657044),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("esse"),
                    Metadata: map[string]string{
                        "earum": "velit",
                        "officiis": "eius",
                        "rerum": "itaque",
                        "dignissimos": "ipsam",
                    },
                    MinCPUPlatform: sdk.String("explicabo"),
                    NodeGroup: sdk.String("impedit"),
                    OauthScopes: []string{
                        "quis",
                        "facilis",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                        Key: sdk.String("ut"),
                        Values: []string{
                            "architecto",
                            "praesentium",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "dolor": "expedita",
                        "libero": "iste",
                        "illo": "minus",
                        "quos": "temporibus",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        SandboxType: sdk.String("sint"),
                        Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                    },
                    ServiceAccount: sdk.String("enim"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "aperiam",
                        "voluptates",
                        "laudantium",
                        "tempora",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("illum"),
                            Value: sdk.String("rem"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                        NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumSecure.ToPointer(),
                    },
                },
                Etag: sdk.String("earum"),
                InitialNodeCount: sdk.Int(101374),
                InstanceGroupUrls: []string{
                    "labore",
                    "maiores",
                },
                Locations: []string{
                    "saepe",
                },
                Management: &shared.NodeManagement{
                    AutoRepair: sdk.Bool(false),
                    AutoUpgrade: sdk.Bool(false),
                    UpgradeOptions: &shared.AutoUpgradeOptions{
                        AutoUpgradeStartTime: sdk.String("consequatur"),
                        Description: sdk.String("esse"),
                    },
                },
                MaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("debitis"),
                },
                Name: sdk.String("Devin Runte"),
                NetworkConfig: &shared.NodeNetworkConfig{
                    CreatePodRange: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                        ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                        TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                    },
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    PodIpv4CidrBlock: sdk.String("reiciendis"),
                    PodRange: sdk.String("sequi"),
                },
                PlacementPolicy: &shared.PlacementPolicy{
                    Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                },
                PodIpv4CidrSize: sdk.Int(671528),
                SelfLink: sdk.String("nobis"),
                Status: shared.NodePoolStatusEnumStopping.ToPointer(),
                StatusMessage: sdk.String("omnis"),
                UpdateInfo: &shared.UpdateInfo{
                    BlueGreenInfo: &shared.BlueGreenInfo{
                        BlueInstanceGroupUrls: []string{
                            "ipsam",
                        },
                        BluePoolDeletionStartTime: sdk.String("officia"),
                        GreenInstanceGroupUrls: []string{
                            "reprehenderit",
                            "quia",
                            "necessitatibus",
                        },
                        GreenPoolVersion: sdk.String("accusantium"),
                        Phase: shared.BlueGreenInfoPhaseEnumCreatingGreenPool.ToPointer(),
                    },
                },
                UpgradeSettings: &shared.UpgradeSettings{
                    BlueGreenSettings: &shared.BlueGreenSettings{
                        NodePoolSoakDuration: sdk.String("nisi"),
                        StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                            BatchNodeCount: sdk.Int(474185),
                            BatchPercentage: sdk.Float32(1541.3),
                            BatchSoakDuration: sdk.String("laudantium"),
                        },
                    },
                    MaxSurge: sdk.Int(152742),
                    MaxUnavailable: sdk.Int(140439),
                    Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
                },
                Version: sdk.String("expedita"),
            },
            Parent: sdk.String("eos"),
            ProjectID: sdk.String("repellendus"),
            Zone: sdk.String("nesciunt"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        ClusterID: "esse",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quam",
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("delectus"),
        Zone: "culpa",
    }, operations.ContainerProjectsZonesClustersNodePoolsCreateSecurity{
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

## ContainerProjectsZonesClustersNodePoolsDelete

Deletes a node pool from a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsDelete(ctx, operations.ContainerProjectsZonesClustersNodePoolsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        ClusterID: "voluptas",
        Fields: sdk.String("non"),
        Key: sdk.String("ullam"),
        Name: sdk.String("Shane Yundt"),
        NodePoolID: "corporis",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "necessitatibus",
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("laboriosam"),
        Zone: "voluptatem",
    }, operations.ContainerProjectsZonesClustersNodePoolsDeleteSecurity{
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

## ContainerProjectsZonesClustersNodePoolsGet

Retrieves the requested node pool.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsGet(ctx, operations.ContainerProjectsZonesClustersNodePoolsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        ClusterID: "voluptatibus",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("sed"),
        Name: sdk.String("Luz King"),
        NodePoolID: "ratione",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nisi",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("itaque"),
        Zone: "vitae",
    }, operations.ContainerProjectsZonesClustersNodePoolsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NodePool != nil {
        // handle response
    }
}
```

## ContainerProjectsZonesClustersNodePoolsList

Lists the node pools for a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsList(ctx, operations.ContainerProjectsZonesClustersNodePoolsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("minus"),
        ClusterID: "quos",
        Fields: sdk.String("possimus"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("odio"),
        Parent: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "sapiente",
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("nesciunt"),
        Zone: "provident",
    }, operations.ContainerProjectsZonesClustersNodePoolsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNodePoolsResponse != nil {
        // handle response
    }
}
```

## ContainerProjectsZonesClustersNodePoolsRollback

Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsRollback(ctx, operations.ContainerProjectsZonesClustersNodePoolsRollbackRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RollbackNodePoolUpgradeRequest: &shared.RollbackNodePoolUpgradeRequest{
            ClusterID: sdk.String("repellendus"),
            Name: sdk.String("James Rutherford"),
            NodePoolID: sdk.String("labore"),
            ProjectID: sdk.String("expedita"),
            RespectPdb: sdk.Bool(false),
            Zone: sdk.String("in"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        ClusterID: "nulla",
        Fields: sdk.String("maiores"),
        Key: sdk.String("distinctio"),
        NodePoolID: "mollitia",
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "accusamus",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("blanditiis"),
        Zone: "cum",
    }, operations.ContainerProjectsZonesClustersNodePoolsRollbackSecurity{
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

## ContainerProjectsZonesClustersNodePoolsSetManagement

Sets the NodeManagement options for a node pool.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsSetManagement(ctx, operations.ContainerProjectsZonesClustersNodePoolsSetManagementRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolManagementRequest: &shared.SetNodePoolManagementRequest{
            ClusterID: sdk.String("impedit"),
            Management: &shared.NodeManagement{
                AutoRepair: sdk.Bool(false),
                AutoUpgrade: sdk.Bool(false),
                UpgradeOptions: &shared.AutoUpgradeOptions{
                    AutoUpgradeStartTime: sdk.String("tempora"),
                    Description: sdk.String("eveniet"),
                },
            },
            Name: sdk.String("Jeremy Rutherford"),
            NodePoolID: sdk.String("vel"),
            ProjectID: sdk.String("eligendi"),
            Zone: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        ClusterID: "maiores",
        Fields: sdk.String("itaque"),
        Key: sdk.String("vero"),
        NodePoolID: "quidem",
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quo",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("distinctio"),
        Zone: "possimus",
    }, operations.ContainerProjectsZonesClustersNodePoolsSetManagementSecurity{
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

## ContainerProjectsZonesClustersNodePoolsSetSize

SetNodePoolSizeRequest sets the size of a node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsSetSize(ctx, operations.ContainerProjectsZonesClustersNodePoolsSetSizeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNodePoolSizeRequest: &shared.SetNodePoolSizeRequest{
            ClusterID: sdk.String("suscipit"),
            Name: sdk.String("Merle Schmidt"),
            NodeCount: sdk.Int(215959),
            NodePoolID: sdk.String("ducimus"),
            ProjectID: sdk.String("laudantium"),
            Zone: sdk.String("rerum"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        ClusterID: "sequi",
        Fields: sdk.String("beatae"),
        Key: sdk.String("iusto"),
        NodePoolID: "esse",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "odio",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cupiditate"),
        Zone: "illo",
    }, operations.ContainerProjectsZonesClustersNodePoolsSetSizeSecurity{
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

## ContainerProjectsZonesClustersNodePoolsUpdate

Updates the version and/or image type of a specific node pool.

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
    res, err := s.Projects.ContainerProjectsZonesClustersNodePoolsUpdate(ctx, operations.ContainerProjectsZonesClustersNodePoolsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateNodePoolRequest: &shared.UpdateNodePoolRequest{
            ClusterID: sdk.String("laborum"),
            ConfidentialNodes: &shared.ConfidentialNodes{
                Enabled: sdk.Bool(false),
            },
            Etag: sdk.String("illum"),
            FastSocket: &shared.FastSocket{
                Enabled: sdk.Bool(false),
            },
            GcfsConfig: &shared.GcfsConfig{
                Enabled: sdk.Bool(false),
            },
            Gvnic: &shared.VirtualNIC{
                Enabled: sdk.Bool(false),
            },
            ImageType: sdk.String("fugit"),
            KubeletConfig: &shared.NodeKubeletConfig{
                CPUCfsQuota: sdk.Bool(false),
                CPUCfsQuotaPeriod: sdk.String("maxime"),
                CPUManagerPolicy: sdk.String("dolorum"),
                PodPidsLimit: sdk.String("repellat"),
            },
            Labels: &shared.NodeLabels{
                Labels: map[string]string{
                    "illum": "quibusdam",
                    "commodi": "esse",
                },
            },
            LinuxNodeConfig: &shared.LinuxNodeConfig{
                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                Sysctls: map[string]string{
                    "temporibus": "optio",
                },
            },
            Locations: []string{
                "maiores",
            },
            LoggingConfig: &shared.NodePoolLoggingConfig{
                VariantConfig: &shared.LoggingVariantConfig{
                    Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                },
            },
            Name: sdk.String("Phil Collier"),
            NodeNetworkConfig: &shared.NodeNetworkConfig{
                CreatePodRange: sdk.Bool(false),
                EnablePrivateNodes: sdk.Bool(false),
                NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                    ExternalIPEgressBandwidthTier: shared.NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1.ToPointer(),
                    TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                },
                PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                    Disable: sdk.Bool(false),
                },
                PodIpv4CidrBlock: sdk.String("harum"),
                PodRange: sdk.String("ducimus"),
            },
            NodePoolID: sdk.String("doloremque"),
            NodeVersion: sdk.String("perferendis"),
            ProjectID: sdk.String("laudantium"),
            ResourceLabels: &shared.ResourceLabels{
                Labels: map[string]string{
                    "corrupti": "molestiae",
                    "quis": "iure",
                },
            },
            Tags: &shared.NetworkTags{
                Tags: []string{
                    "quaerat",
                },
            },
            Taints: &shared.NodeTaints{
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                        Key: sdk.String("corporis"),
                        Value: sdk.String("est"),
                    },
                },
            },
            UpgradeSettings: &shared.UpgradeSettings{
                BlueGreenSettings: &shared.BlueGreenSettings{
                    NodePoolSoakDuration: sdk.String("iure"),
                    StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                        BatchNodeCount: sdk.Int(787629),
                        BatchPercentage: sdk.Float32(5909.27),
                        BatchSoakDuration: sdk.String("laudantium"),
                    },
                },
                MaxSurge: sdk.Int(722392),
                MaxUnavailable: sdk.Int(366147),
                Strategy: shared.UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified.ToPointer(),
            },
            WindowsNodeConfig: &shared.WindowsNodeConfig{
                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
            },
            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                NodeMetadata: shared.WorkloadMetadataConfigNodeMetadataEnumSecure.ToPointer(),
            },
            Zone: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        ClusterID: "numquam",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("cum"),
        NodePoolID: "nobis",
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "porro",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("cumque"),
        Zone: "soluta",
    }, operations.ContainerProjectsZonesClustersNodePoolsUpdateSecurity{
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

## ContainerProjectsZonesClustersResourceLabels

Sets labels on a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersResourceLabels(ctx, operations.ContainerProjectsZonesClustersResourceLabelsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLabelsRequest: &shared.SetLabelsRequest{
            ClusterID: sdk.String("laboriosam"),
            LabelFingerprint: sdk.String("nam"),
            Name: sdk.String("Shawna Feil"),
            ProjectID: sdk.String("cupiditate"),
            ResourceLabels: map[string]string{
                "provident": "adipisci",
            },
            Zone: sdk.String("accusantium"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        ClusterID: "explicabo",
        Fields: sdk.String("vel"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "possimus",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("nostrum"),
        Zone: "sequi",
    }, operations.ContainerProjectsZonesClustersResourceLabelsSecurity{
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

## ContainerProjectsZonesClustersSetMaintenancePolicy

Sets the maintenance policy for a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersSetMaintenancePolicy(ctx, operations.ContainerProjectsZonesClustersSetMaintenancePolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetMaintenancePolicyRequest: &shared.SetMaintenancePolicyRequest{
            ClusterID: sdk.String("quasi"),
            MaintenancePolicy: &shared.MaintenancePolicy{
                ResourceVersion: sdk.String("error"),
                Window: &shared.MaintenanceWindow{
                    DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                        Duration: sdk.String("nobis"),
                        StartTime: sdk.String("tempora"),
                    },
                    MaintenanceExclusions: map[string]shared.TimeWindow{
                        "eius": shared.TimeWindow{
                            EndTime: sdk.String("expedita"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("voluptates"),
                        },
                        "possimus": shared.TimeWindow{
                            EndTime: sdk.String("fugit"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("repudiandae"),
                        },
                    },
                    RecurringWindow: &shared.RecurringTimeWindow{
                        Recurrence: sdk.String("corporis"),
                        Window: &shared.TimeWindow{
                            EndTime: sdk.String("ea"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("aliquam"),
                        },
                    },
                },
            },
            Name: sdk.String("Moses Wuckert"),
            ProjectID: sdk.String("nesciunt"),
            Zone: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        ClusterID: "ipsa",
        Fields: sdk.String("mollitia"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quo",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("commodi"),
        Zone: "fugit",
    }, operations.ContainerProjectsZonesClustersSetMaintenancePolicySecurity{
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

## ContainerProjectsZonesClustersSetMasterAuth

Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

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
    res, err := s.Projects.ContainerProjectsZonesClustersSetMasterAuth(ctx, operations.ContainerProjectsZonesClustersSetMasterAuthRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetMasterAuthRequest: &shared.SetMasterAuthRequest{
            Action: shared.SetMasterAuthRequestActionEnumSetPassword.ToPointer(),
            ClusterID: sdk.String("nisi"),
            Name: sdk.String("Daisy Howe DVM"),
            ProjectID: sdk.String("quisquam"),
            Update: &shared.MasterAuth{
                ClientCertificate: sdk.String("eaque"),
                ClientCertificateConfig: &shared.ClientCertificateConfig{
                    IssueClientCertificate: sdk.Bool(false),
                },
                ClientKey: sdk.String("alias"),
                ClusterCaCertificate: sdk.String("qui"),
                Password: sdk.String("consequuntur"),
                Username: sdk.String("Bertha22"),
            },
            Zone: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        ClusterID: "similique",
        Fields: sdk.String("eligendi"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "debitis",
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("temporibus"),
        Zone: "id",
    }, operations.ContainerProjectsZonesClustersSetMasterAuthSecurity{
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

## ContainerProjectsZonesClustersSetNetworkPolicy

Enables or disables Network Policy for a cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersSetNetworkPolicy(ctx, operations.ContainerProjectsZonesClustersSetNetworkPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNetworkPolicyRequest: &shared.SetNetworkPolicyRequest{
            ClusterID: sdk.String("quibusdam"),
            Name: sdk.String("Angelica Harris"),
            NetworkPolicy: &shared.NetworkPolicy{
                Enabled: sdk.Bool(false),
                Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
            },
            ProjectID: sdk.String("earum"),
            Zone: sdk.String("doloremque"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        ClusterID: "tempora",
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "officia",
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("a"),
        Zone: "laborum",
    }, operations.ContainerProjectsZonesClustersSetNetworkPolicySecurity{
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

## ContainerProjectsZonesClustersStartIPRotation

Starts master IP rotation.

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
    res, err := s.Projects.ContainerProjectsZonesClustersStartIPRotation(ctx, operations.ContainerProjectsZonesClustersStartIPRotationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        StartIPRotationRequest: &shared.StartIPRotationRequest{
            ClusterID: sdk.String("quod"),
            Name: sdk.String("Clarence Barton"),
            ProjectID: sdk.String("totam"),
            RotateCredentials: sdk.Bool(false),
            Zone: sdk.String("tenetur"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        ClusterID: "vitae",
        Fields: sdk.String("sapiente"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptate",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("maxime"),
        Zone: "fuga",
    }, operations.ContainerProjectsZonesClustersStartIPRotationSecurity{
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

## ContainerProjectsZonesClustersUpdate

Updates the settings for a specific cluster.

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
    res, err := s.Projects.ContainerProjectsZonesClustersUpdate(ctx, operations.ContainerProjectsZonesClustersUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateClusterRequest: &shared.UpdateClusterRequest{
            ClusterID: sdk.String("ex"),
            Name: sdk.String("Ebony Cremin"),
            ProjectID: sdk.String("eligendi"),
            Update: &shared.ClusterUpdate{
                AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                    PodRangeNames: []string{
                        "perferendis",
                        "laborum",
                        "omnis",
                    },
                },
                DesiredAddonsConfig: &shared.AddonsConfig{
                    CloudRunConfig: &shared.CloudRunConfig{
                        Disabled: sdk.Bool(false),
                        LoadBalancerType: shared.CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeExternal.ToPointer(),
                    },
                    ConfigConnectorConfig: &shared.ConfigConnectorConfig{
                        Enabled: sdk.Bool(false),
                    },
                    DNSCacheConfig: &shared.DNSCacheConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcePersistentDiskCsiDriverConfig: &shared.GcePersistentDiskCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcpFilestoreCsiDriverConfig: &shared.GcpFilestoreCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GcsFuseCsiDriverConfig: &shared.GcsFuseCsiDriverConfig{
                        Enabled: sdk.Bool(false),
                    },
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
                    },
                    IstioConfig: &shared.IstioConfig{
                        Auth: shared.IstioConfigAuthEnumAuthMutualTLS.ToPointer(),
                        Disabled: sdk.Bool(false),
                    },
                    KalmConfig: &shared.KalmConfig{
                        Enabled: sdk.Bool(false),
                    },
                    KubernetesDashboard: &shared.KubernetesDashboard{
                        Disabled: sdk.Bool(false),
                    },
                    NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                        Disabled: sdk.Bool(false),
                    },
                },
                DesiredAuthenticatorGroupsConfig: &shared.AuthenticatorGroupsConfig{
                    Enabled: sdk.Bool(false),
                    SecurityGroup: sdk.String("sapiente"),
                },
                DesiredBinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumEvaluationModeUnspecified.ToPointer(),
                },
                DesiredClusterAutoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "non",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("optio"),
                        DiskSizeGb: sdk.Int(850196),
                        DiskType: sdk.String("at"),
                        ImageType: sdk.String("tenetur"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("molestias"),
                                Description: sdk.String("ipsam"),
                            },
                        },
                        MinCPUPlatform: sdk.String("esse"),
                        OauthScopes: []string{
                            "perspiciatis",
                            "voluptates",
                            "eum",
                        },
                        ServiceAccount: sdk.String("quasi"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("quas"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(484942),
                                    BatchPercentage: sdk.Float32(4169.34),
                                    BatchSoakDuration: sdk.String("porro"),
                                },
                            },
                            MaxSurge: sdk.Int(400470),
                            MaxUnavailable: sdk.Int(648497),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumProfileUnspecified.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("nulla"),
                            Minimum: sdk.String("magni"),
                            ResourceType: sdk.String("natus"),
                        },
                    },
                },
                DesiredClusterTelemetry: &shared.ClusterTelemetry{
                    Type: shared.ClusterTelemetryTypeEnumSystemOnly.ToPointer(),
                },
                DesiredCostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredDatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("a"),
                    State: shared.DatabaseEncryptionStateEnumDecrypted.ToPointer(),
                },
                DesiredDatapathProvider: shared.ClusterUpdateDesiredDatapathProviderEnumLegacyDatapath.ToPointer(),
                DesiredDefaultSnatStatus: &shared.DefaultSnatStatus{
                    Disabled: sdk.Bool(false),
                },
                DesiredDNSConfig: &shared.DNSConfig{
                    ClusterDNS: shared.DNSConfigClusterDNSEnumProviderUnspecified.ToPointer(),
                    ClusterDNSDomain: sdk.String("facere"),
                    ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumClusterScope.ToPointer(),
                },
                DesiredEnablePrivateEndpoint: sdk.Bool(false),
                DesiredFleet: &shared.Fleet{
                    Membership: sdk.String("doloribus"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("recusandae"),
                },
                DesiredGatewayAPIConfig: &shared.GatewayAPIConfig{
                    Channel: shared.GatewayAPIConfigChannelEnumChannelStandard.ToPointer(),
                },
                DesiredGcfsConfig: &shared.GcfsConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredIdentityServiceConfig: &shared.IdentityServiceConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredImageType: sdk.String("facere"),
                DesiredIntraNodeVisibilityConfig: &shared.IntraNodeVisibilityConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredL4ilbSubsettingConfig: &shared.ILBSubsettingConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredLocations: []string{
                    "iste",
                    "provident",
                },
                DesiredLoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumApiserver,
                        },
                    },
                },
                DesiredLoggingService: sdk.String("aperiam"),
                DesiredMaster: map[string]interface{}{
                    "eum": "laboriosam",
                },
                DesiredMasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("autem"),
                            DisplayName: sdk.String("assumenda"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("explicabo"),
                            DisplayName: sdk.String("fugiat"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("doloremque"),
                            DisplayName: sdk.String("voluptatem"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                DesiredMasterVersion: sdk.String("alias"),
                DesiredMeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                DesiredMonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumWorkloads,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                DesiredMonitoringService: sdk.String("quis"),
                DesiredNodePoolAutoConfigNetworkTags: &shared.NetworkTags{
                    Tags: []string{
                        "ratione",
                    },
                },
                DesiredNodePoolAutoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                    MaxNodeCount: sdk.Int(802976),
                    MinNodeCount: sdk.Int(923935),
                    TotalMaxNodeCount: sdk.Int(767466),
                    TotalMinNodeCount: sdk.Int(39047),
                },
                DesiredNodePoolID: sdk.String("totam"),
                DesiredNodePoolLoggingConfig: &shared.NodePoolLoggingConfig{
                    VariantConfig: &shared.LoggingVariantConfig{
                        Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                    },
                },
                DesiredNodeVersion: sdk.String("maiores"),
                DesiredNotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                                shared.FilterEventTypeEnumSecurityBulletinEvent,
                            },
                        },
                        Topic: sdk.String("iste"),
                    },
                },
                DesiredPodSecurityPolicyConfig: &shared.PodSecurityPolicyConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredPrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("dicta"),
                    PeeringName: sdk.String("ipsam"),
                    PrivateEndpoint: sdk.String("consequuntur"),
                    PrivateEndpointSubnetwork: sdk.String("cumque"),
                    PublicEndpoint: sdk.String("quidem"),
                },
                DesiredPrivateIpv6GoogleAccess: shared.ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified.ToPointer(),
                DesiredProtectConfig: &shared.ProtectConfig{
                    WorkloadConfig: &shared.WorkloadConfig{
                        AuditMode: shared.WorkloadConfigAuditModeEnumModeUnspecified.ToPointer(),
                    },
                    WorkloadVulnerabilityMode: shared.ProtectConfigWorkloadVulnerabilityModeEnumWorkloadVulnerabilityModeUnspecified.ToPointer(),
                },
                DesiredReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumRegular.ToPointer(),
                },
                DesiredResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("beatae"),
                    },
                    ConsumptionMeteringConfig: &shared.ConsumptionMeteringConfig{
                        Enabled: sdk.Bool(false),
                    },
                    EnableNetworkEgressMetering: sdk.Bool(false),
                },
                DesiredServiceExternalIpsConfig: &shared.ServiceExternalIPsConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredShieldedNodes: &shared.ShieldedNodes{
                    Enabled: sdk.Bool(false),
                },
                DesiredStackType: shared.ClusterUpdateDesiredStackTypeEnumIpv4.ToPointer(),
                DesiredTpuConfig: &shared.TpuConfig{
                    Enabled: sdk.Bool(false),
                    Ipv4CidrBlock: sdk.String("ducimus"),
                    UseServiceNetworking: sdk.Bool(false),
                },
                DesiredVerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                DesiredWorkloadAltsConfig: &shared.WorkloadALTSConfig{
                    EnableAlts: sdk.Bool(false),
                },
                DesiredWorkloadCertificates: &shared.WorkloadCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                DesiredWorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    IdentityNamespace: sdk.String("libero"),
                    IdentityProvider: sdk.String("molestias"),
                    WorkloadPool: sdk.String("necessitatibus"),
                },
                Etag: sdk.String("ipsum"),
                RemovedAdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                    PodRangeNames: []string{
                        "quos",
                        "illum",
                        "distinctio",
                        "voluptatem",
                    },
                },
            },
            Zone: sdk.String("non"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        ClusterID: "repellendus",
        Fields: sdk.String("commodi"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptas",
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("tenetur"),
        Zone: "assumenda",
    }, operations.ContainerProjectsZonesClustersUpdateSecurity{
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

## ContainerProjectsZonesGetServerconfig

Returns configuration info about the Google Kubernetes Engine service.

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
    res, err := s.Projects.ContainerProjectsZonesGetServerconfig(ctx, operations.ContainerProjectsZonesGetServerconfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("alias"),
        Key: sdk.String("ex"),
        Name: sdk.String("Keith Crist"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "numquam",
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("omnis"),
        Zone: "neque",
    }, operations.ContainerProjectsZonesGetServerconfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ServerConfig != nil {
        // handle response
    }
}
```

## ContainerProjectsZonesOperationsCancel

Cancels the specified operation.

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
    res, err := s.Projects.ContainerProjectsZonesOperationsCancel(ctx, operations.ContainerProjectsZonesOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CancelOperationRequest: &shared.CancelOperationRequest{
            Name: sdk.String("Todd Schowalter"),
            OperationID: sdk.String("quos"),
            ProjectID: sdk.String("dicta"),
            Zone: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("recusandae"),
        OperationID: "labore",
        PrettyPrint: sdk.Bool(false),
        ProjectID: "adipisci",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("dolores"),
        Zone: "illum",
    }, operations.ContainerProjectsZonesOperationsCancelSecurity{
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

## ContainerProjectsZonesOperationsGet

Gets the specified operation.

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
    res, err := s.Projects.ContainerProjectsZonesOperationsGet(ctx, operations.ContainerProjectsZonesOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("ad"),
        Key: sdk.String("voluptate"),
        Name: sdk.String("Cathy Bailey"),
        OauthToken: sdk.String("quaerat"),
        OperationID: "quasi",
        PrettyPrint: sdk.Bool(false),
        ProjectID: "rem",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("assumenda"),
        Zone: "provident",
    }, operations.ContainerProjectsZonesOperationsGetSecurity{
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

## ContainerProjectsZonesOperationsList

Lists all operations in a project in the specified zone or all zones.

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
    res, err := s.Projects.ContainerProjectsZonesOperationsList(ctx, operations.ContainerProjectsZonesOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("unde"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("repellendus"),
        Parent: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "adipisci",
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("tempora"),
        Zone: "debitis",
    }, operations.ContainerProjectsZonesOperationsListSecurity{
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
