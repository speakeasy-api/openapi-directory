# Projects

### Available Operations

* [ContainerProjectsAggregatedUsableSubnetworksList](#containerprojectsaggregatedusablesubnetworkslist) - Lists subnetworks that are usable for creating clusters in a project.
* [ContainerProjectsLocationsClustersCompleteIPRotation](#containerprojectslocationsclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsLocationsClustersCreate](#containerprojectslocationsclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsLocationsClustersGetJwks](#containerprojectslocationsclustersgetjwks) - Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
* [ContainerProjectsLocationsClustersList](#containerprojectslocationsclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsLocationsClustersNodePoolsCompleteUpgrade](#containerprojectslocationsclustersnodepoolscompleteupgrade) - CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
* [ContainerProjectsLocationsClustersNodePoolsCreate](#containerprojectslocationsclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsDelete](#containerprojectslocationsclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsLocationsClustersNodePoolsList](#containerprojectslocationsclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsLocationsClustersNodePoolsRollback](#containerprojectslocationsclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsLocationsClustersNodePoolsSetAutoscaling](#containerprojectslocationsclustersnodepoolssetautoscaling) - Sets the autoscaling settings for the specified node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetManagement](#containerprojectslocationsclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsLocationsClustersNodePoolsSetSize](#containerprojectslocationsclustersnodepoolssetsize) - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsLocationsClustersNodePoolsUpdate](#containerprojectslocationsclustersnodepoolsupdate) - Updates the version and/or image type for the specified node pool.
* [ContainerProjectsLocationsClustersSetAddons](#containerprojectslocationsclusterssetaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsLocationsClustersSetLegacyAbac](#containerprojectslocationsclusterssetlegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsLocationsClustersSetLocations](#containerprojectslocationsclusterssetlocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
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
* [ContainerProjectsLocationsOperationsCancel](#containerprojectslocationsoperationscancel) - Cancels the specified operation.
* [ContainerProjectsLocationsOperationsGet](#containerprojectslocationsoperationsget) - Gets the specified operation.
* [ContainerProjectsLocationsOperationsList](#containerprojectslocationsoperationslist) - Lists all operations in a project in a specific zone or all zones.
* [ContainerProjectsZonesClustersAddons](#containerprojectszonesclustersaddons) - Sets the addons for a specific cluster.
* [ContainerProjectsZonesClustersCompleteIPRotation](#containerprojectszonesclusterscompleteiprotation) - Completes master IP rotation.
* [ContainerProjectsZonesClustersCreate](#containerprojectszonesclusterscreate) - Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
* [ContainerProjectsZonesClustersDelete](#containerprojectszonesclustersdelete) - Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
* [ContainerProjectsZonesClustersGet](#containerprojectszonesclustersget) - Gets the details of a specific cluster.
* [ContainerProjectsZonesClustersLegacyAbac](#containerprojectszonesclusterslegacyabac) - Enables or disables the ABAC authorization mechanism on a cluster.
* [ContainerProjectsZonesClustersList](#containerprojectszonesclusterslist) - Lists all clusters owned by a project in either the specified zone or all zones.
* [ContainerProjectsZonesClustersLocations](#containerprojectszonesclusterslocations) - Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
* [ContainerProjectsZonesClustersLogging](#containerprojectszonesclusterslogging) - Sets the logging service for a specific cluster.
* [ContainerProjectsZonesClustersMaster](#containerprojectszonesclustersmaster) - Updates the master for a specific cluster.
* [ContainerProjectsZonesClustersMonitoring](#containerprojectszonesclustersmonitoring) - Sets the monitoring service for a specific cluster.
* [ContainerProjectsZonesClustersNodePoolsAutoscaling](#containerprojectszonesclustersnodepoolsautoscaling) - Sets the autoscaling settings for the specified node pool.
* [ContainerProjectsZonesClustersNodePoolsCreate](#containerprojectszonesclustersnodepoolscreate) - Creates a node pool for a cluster.
* [ContainerProjectsZonesClustersNodePoolsDelete](#containerprojectszonesclustersnodepoolsdelete) - Deletes a node pool from a cluster.
* [ContainerProjectsZonesClustersNodePoolsGet](#containerprojectszonesclustersnodepoolsget) - Retrieves the requested node pool.
* [ContainerProjectsZonesClustersNodePoolsList](#containerprojectszonesclustersnodepoolslist) - Lists the node pools for a cluster.
* [ContainerProjectsZonesClustersNodePoolsRollback](#containerprojectszonesclustersnodepoolsrollback) - Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
* [ContainerProjectsZonesClustersNodePoolsSetManagement](#containerprojectszonesclustersnodepoolssetmanagement) - Sets the NodeManagement options for a node pool.
* [ContainerProjectsZonesClustersNodePoolsSetSize](#containerprojectszonesclustersnodepoolssetsize) - Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
* [ContainerProjectsZonesClustersNodePoolsUpdate](#containerprojectszonesclustersnodepoolsupdate) - Updates the version and/or image type for the specified node pool.
* [ContainerProjectsZonesClustersResourceLabels](#containerprojectszonesclustersresourcelabels) - Sets labels on a cluster.
* [ContainerProjectsZonesClustersSetMaintenancePolicy](#containerprojectszonesclusterssetmaintenancepolicy) - Sets the maintenance policy for a cluster.
* [ContainerProjectsZonesClustersSetMasterAuth](#containerprojectszonesclusterssetmasterauth) - Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
* [ContainerProjectsZonesClustersSetNetworkPolicy](#containerprojectszonesclusterssetnetworkpolicy) - Enables or disables Network Policy for a cluster.
* [ContainerProjectsZonesClustersStartIPRotation](#containerprojectszonesclustersstartiprotation) - Starts master IP rotation.
* [ContainerProjectsZonesClustersUpdate](#containerprojectszonesclustersupdate) - Updates the settings of a specific cluster.
* [ContainerProjectsZonesGetServerconfig](#containerprojectszonesgetserverconfig) - Returns configuration info about the Google Kubernetes Engine service.
* [ContainerProjectsZonesOperationsCancel](#containerprojectszonesoperationscancel) - Cancels the specified operation.
* [ContainerProjectsZonesOperationsGet](#containerprojectszonesoperationsget) - Gets the specified operation.
* [ContainerProjectsZonesOperationsList](#containerprojectszonesoperationslist) - Lists all operations in a project in a specific zone or all zones.

## ContainerProjectsAggregatedUsableSubnetworksList

Lists subnetworks that are usable for creating clusters in a project.

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
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
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
                    SecurityGroup: sdk.String("deleniti"),
                },
                Autopilot: &shared.Autopilot{
                    Enabled: sdk.Bool(false),
                },
                Autoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "optio",
                        "totam",
                        "beatae",
                        "commodi",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("molestiae"),
                        DiskSizeGb: sdk.Int(264555),
                        DiskType: sdk.String("qui"),
                        ImageType: sdk.String("impedit"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("cum"),
                                Description: sdk.String("esse"),
                            },
                        },
                        MinCPUPlatform: sdk.String("ipsum"),
                        OauthScopes: []string{
                            "aspernatur",
                            "perferendis",
                            "ad",
                        },
                        ServiceAccount: sdk.String("natus"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("sed"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(612096),
                                    BatchPercentage: sdk.Float32(2223.21),
                                    BatchSoakDuration: sdk.String("natus"),
                                },
                            },
                            MaxSurge: sdk.Int(386489),
                            MaxUnavailable: sdk.Int(943749),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumBalanced.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("corporis"),
                            Minimum: sdk.String("iste"),
                            ResourceType: sdk.String("iure"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("saepe"),
                            Minimum: sdk.String("quidem"),
                            ResourceType: sdk.String("architecto"),
                        },
                    },
                },
                BinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumEvaluationModeUnspecified.ToPointer(),
                },
                ClusterIpv4Cidr: sdk.String("reiciendis"),
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumAborted.ToPointer(),
                        Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                        Message: sdk.String("dolores"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumInvalidArgument.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                        Message: sdk.String("explicabo"),
                    },
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumOutOfRange.ToPointer(),
                        Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                        Message: sdk.String("omnis"),
                    },
                },
                ConfidentialNodes: &shared.ConfidentialNodes{
                    Enabled: sdk.Bool(false),
                },
                CostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                CreateTime: sdk.String("nemo"),
                CurrentMasterVersion: sdk.String("minima"),
                CurrentNodeCount: sdk.Int(570197),
                CurrentNodeVersion: sdk.String("accusantium"),
                DatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("iure"),
                    State: shared.DatabaseEncryptionStateEnumEncrypted.ToPointer(),
                },
                DefaultMaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("doloribus"),
                },
                Description: sdk.String("sapiente"),
                EnableKubernetesAlpha: sdk.Bool(false),
                EnableTpu: sdk.Bool(false),
                Endpoint: sdk.String("architecto"),
                Etag: sdk.String("mollitia"),
                ExpireTime: sdk.String("dolorem"),
                Fleet: &shared.Fleet{
                    Membership: sdk.String("culpa"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("consequuntur"),
                },
                IdentityServiceConfig: &shared.IdentityServiceConfig{
                    Enabled: sdk.Bool(false),
                },
                InitialClusterVersion: sdk.String("repellat"),
                InitialNodeCount: sdk.Int(653108),
                InstanceGroupUrls: []string{
                    "numquam",
                    "commodi",
                    "quam",
                },
                IPAllocationPolicy: &shared.IPAllocationPolicyInput{
                    AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                        PodRangeNames: []string{
                            "velit",
                            "error",
                        },
                    },
                    ClusterIpv4Cidr: sdk.String("quia"),
                    ClusterIpv4CidrBlock: sdk.String("quis"),
                    ClusterSecondaryRangeName: sdk.String("vitae"),
                    CreateSubnetwork: sdk.Bool(false),
                    Ipv6AccessType: shared.IPAllocationPolicyIpv6AccessTypeEnumExternal.ToPointer(),
                    NodeIpv4Cidr: sdk.String("animi"),
                    NodeIpv4CidrBlock: sdk.String("enim"),
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    ServicesIpv4Cidr: sdk.String("odit"),
                    ServicesIpv4CidrBlock: sdk.String("quo"),
                    ServicesSecondaryRangeName: sdk.String("sequi"),
                    StackType: shared.IPAllocationPolicyStackTypeEnumIpv4Ipv6.ToPointer(),
                    SubnetworkName: sdk.String("ipsam"),
                    TpuIpv4CidrBlock: sdk.String("id"),
                    UseIPAliases: sdk.Bool(false),
                    UseRoutes: sdk.Bool(false),
                },
                LabelFingerprint: sdk.String("possimus"),
                LegacyAbac: &shared.LegacyAbac{
                    Enabled: sdk.Bool(false),
                },
                Location: sdk.String("aut"),
                Locations: []string{
                    "error",
                },
                LoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumScheduler,
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                        },
                    },
                },
                LoggingService: sdk.String("vero"),
                MaintenancePolicy: &shared.MaintenancePolicy{
                    ResourceVersion: sdk.String("nihil"),
                    Window: &shared.MaintenanceWindow{
                        DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                            Duration: sdk.String("praesentium"),
                            StartTime: sdk.String("voluptatibus"),
                        },
                        MaintenanceExclusions: map[string]shared.TimeWindow{
                            "omnis": shared.TimeWindow{
                                EndTime: sdk.String("voluptate"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorOrNodeUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("perferendis"),
                            },
                        },
                        RecurringWindow: &shared.RecurringTimeWindow{
                            Recurrence: sdk.String("doloremque"),
                            Window: &shared.TimeWindow{
                                EndTime: sdk.String("reprehenderit"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("maiores"),
                            },
                        },
                    },
                },
                MasterAuth: &shared.MasterAuth{
                    ClientCertificate: sdk.String("dicta"),
                    ClientCertificateConfig: &shared.ClientCertificateConfig{
                        IssueClientCertificate: sdk.Bool(false),
                    },
                    ClientKey: sdk.String("corporis"),
                    ClusterCaCertificate: sdk.String("dolore"),
                    Password: sdk.String("iusto"),
                    Username: sdk.String("Birdie88"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("repudiandae"),
                            DisplayName: sdk.String("quae"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("ipsum"),
                            DisplayName: sdk.String("quidem"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                MeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                MonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumApiserver,
                            shared.MonitoringComponentConfigEnableComponentsEnumControllerManager,
                            shared.MonitoringComponentConfigEnableComponentsEnumSystemComponents,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                MonitoringService: sdk.String("praesentium"),
                Name: sdk.String("Grady Botsford"),
                Network: sdk.String("veritatis"),
                NetworkConfig: &shared.NetworkConfig{
                    DatapathProvider: shared.NetworkConfigDatapathProviderEnumAdvancedDatapath.ToPointer(),
                    DefaultSnatStatus: &shared.DefaultSnatStatus{
                        Disabled: sdk.Bool(false),
                    },
                    DNSConfig: &shared.DNSConfig{
                        ClusterDNS: shared.DNSConfigClusterDNSEnumProviderUnspecified.ToPointer(),
                        ClusterDNSDomain: sdk.String("enim"),
                        ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumDNSScopeUnspecified.ToPointer(),
                    },
                    EnableIntraNodeVisibility: sdk.Bool(false),
                    EnableL4ilbSubsetting: sdk.Bool(false),
                    GatewayAPIConfig: &shared.GatewayAPIConfig{
                        Channel: shared.GatewayAPIConfigChannelEnumChannelExperimental.ToPointer(),
                    },
                    Network: sdk.String("quibusdam"),
                    PrivateIpv6GoogleAccess: shared.NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified.ToPointer(),
                    ServiceExternalIpsConfig: &shared.ServiceExternalIPsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Subnetwork: sdk.String("deserunt"),
                },
                NetworkPolicy: &shared.NetworkPolicy{
                    Enabled: sdk.Bool(false),
                    Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
                },
                NodeConfig: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("labore"),
                            AcceleratorType: sdk.String("modi"),
                            GpuPartitionSize: sdk.String("qui"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("cupiditate"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("quos"),
                            AcceleratorType: sdk.String("perferendis"),
                            GpuPartitionSize: sdk.String("magni"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("ipsam"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("alias"),
                            AcceleratorType: sdk.String("fugit"),
                            GpuPartitionSize: sdk.String("dolorum"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("tempora"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("facilis"),
                            AcceleratorType: sdk.String("tempore"),
                            GpuPartitionSize: sdk.String("labore"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("eum"),
                            },
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("non"),
                    },
                    BootDiskKmsKey: sdk.String("eligendi"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(576157),
                    DiskType: sdk.String("aliquid"),
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(592042),
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
                    ImageType: sdk.String("necessitatibus"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("sint"),
                        CPUManagerPolicy: sdk.String("officia"),
                        PodPidsLimit: sdk.String("dolor"),
                    },
                    Labels: map[string]string{
                        "a": "dolorum",
                        "in": "in",
                        "illum": "maiores",
                        "rerum": "dicta",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                        Sysctls: map[string]string{
                            "facere": "ea",
                            "aliquid": "laborum",
                            "accusamus": "non",
                            "occaecati": "enim",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(881736),
                    },
                    LocalSsdCount: sdk.Int(965417),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("provident"),
                    Metadata: map[string]string{
                        "id": "blanditiis",
                        "deleniti": "sapiente",
                        "amet": "deserunt",
                    },
                    MinCPUPlatform: sdk.String("nisi"),
                    NodeGroup: sdk.String("vel"),
                    OauthScopes: []string{
                        "omnis",
                        "molestiae",
                        "perferendis",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("magnam"),
                        Values: []string{
                            "id",
                            "labore",
                            "labore",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "natus": "nobis",
                        "eum": "vero",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                    },
                    ServiceAccount: sdk.String("architecto"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "et",
                        "excepturi",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("quos"),
                            Value: sdk.String("sint"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                            Key: sdk.String("mollitia"),
                            Value: sdk.String("reiciendis"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                    },
                },
                NodeIpv4CidrSize: sdk.Int(431418),
                NodePoolAutoConfig: &shared.NodePoolAutoConfig{
                    NetworkTags: &shared.NetworkTags{
                        Tags: []string{
                            "necessitatibus",
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
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumLocationPolicyUnspecified.ToPointer(),
                            MaxNodeCount: sdk.Int(435865),
                            MinNodeCount: sdk.Int(984043),
                            TotalMaxNodeCount: sdk.Int(891924),
                            TotalMinNodeCount: sdk.Int(260341),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumResourceExhausted.ToPointer(),
                                Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                                Message: sdk.String("in"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumCancelled.ToPointer(),
                                Code: shared.StatusConditionCodeEnumUnknown.ToPointer(),
                                Message: sdk.String("repudiandae"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumNotFound.ToPointer(),
                                Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                                Message: sdk.String("nihil"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumDataLoss.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCloudKmsKeyError.ToPointer(),
                                Message: sdk.String("sed"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("pariatur"),
                                    AcceleratorType: sdk.String("accusantium"),
                                    GpuPartitionSize: sdk.String("consequuntur"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("natus"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("magni"),
                                    AcceleratorType: sdk.String("sunt"),
                                    GpuPartitionSize: sdk.String("quo"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("pariatur"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("maxime"),
                                    AcceleratorType: sdk.String("ea"),
                                    GpuPartitionSize: sdk.String("excepturi"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("ea"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("accusantium"),
                                    AcceleratorType: sdk.String("ab"),
                                    GpuPartitionSize: sdk.String("maiores"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("ipsam"),
                                    },
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("voluptate"),
                            },
                            BootDiskKmsKey: sdk.String("autem"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(722056),
                            DiskType: sdk.String("eaque"),
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(866383),
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
                            ImageType: sdk.String("nemo"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("voluptatibus"),
                                CPUManagerPolicy: sdk.String("perferendis"),
                                PodPidsLimit: sdk.String("fugiat"),
                            },
                            Labels: map[string]string{
                                "aut": "cumque",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                                Sysctls: map[string]string{
                                    "libero": "nobis",
                                    "dolores": "quis",
                                    "totam": "dignissimos",
                                    "eaque": "quis",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(199996),
                            },
                            LocalSsdCount: sdk.Int(179490),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("dolores"),
                            Metadata: map[string]string{
                                "quam": "dolor",
                                "vero": "nostrum",
                                "hic": "recusandae",
                                "omnis": "facilis",
                            },
                            MinCPUPlatform: sdk.String("perspiciatis"),
                            NodeGroup: sdk.String("voluptatem"),
                            OauthScopes: []string{
                                "consequuntur",
                                "blanditiis",
                                "error",
                                "eaque",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumAnyReservation.ToPointer(),
                                Key: sdk.String("rerum"),
                                Values: []string{
                                    "asperiores",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "modi": "iste",
                                "dolorum": "deleniti",
                                "pariatur": "provident",
                                "nobis": "libero",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("quaerat"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "aliquid",
                                "dolorem",
                                "dolorem",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("ipsum"),
                                    Value: sdk.String("hic"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                            },
                        },
                        Etag: sdk.String("voluptate"),
                        InitialNodeCount: sdk.Int(490459),
                        InstanceGroupUrls: []string{
                            "amet",
                            "dolorum",
                            "numquam",
                            "veritatis",
                        },
                        Locations: []string{
                            "ipsa",
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
                            MaxPodsPerNode: sdk.String("quaerat"),
                        },
                        Name: sdk.String("Rickey Wolf"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("atque"),
                            PodRange: sdk.String("sit"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(67249),
                        SelfLink: sdk.String("soluta"),
                        Status: shared.NodePoolStatusEnumReconciling.ToPointer(),
                        StatusMessage: sdk.String("iusto"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "dolorum",
                                    "deleniti",
                                },
                                BluePoolDeletionStartTime: sdk.String("omnis"),
                                GreenInstanceGroupUrls: []string{
                                    "distinctio",
                                    "asperiores",
                                    "nihil",
                                    "ipsum",
                                },
                                GreenPoolVersion: sdk.String("voluptate"),
                                Phase: shared.BlueGreenInfoPhaseEnumNodePoolSoaking.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("saepe"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(263322),
                                    BatchPercentage: sdk.Float32(1372.2),
                                    BatchSoakDuration: sdk.String("perferendis"),
                                },
                            },
                            MaxSurge: sdk.Int(229219),
                            MaxUnavailable: sdk.Int(758379),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("ad"),
                    },
                    shared.NodePool{
                        Autoscaling: &shared.NodePoolAutoscaling{
                            Autoprovisioned: sdk.Bool(false),
                            Enabled: sdk.Bool(false),
                            LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                            MaxNodeCount: sdk.Int(383464),
                            MinNodeCount: sdk.Int(645785),
                            TotalMaxNodeCount: sdk.Int(588317),
                            TotalMinNodeCount: sdk.Int(324683),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnauthenticated.ToPointer(),
                                Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                                Message: sdk.String("alias"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumInternal.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                                Message: sdk.String("tempora"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumPermissionDenied.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCloudKmsKeyError.ToPointer(),
                                Message: sdk.String("officiis"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumInvalidArgument.ToPointer(),
                                Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                                Message: sdk.String("a"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("harum"),
                                    AcceleratorType: sdk.String("iusto"),
                                    GpuPartitionSize: sdk.String("ipsum"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("tenetur"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("amet"),
                                    AcceleratorType: sdk.String("tempore"),
                                    GpuPartitionSize: sdk.String("accusamus"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("enim"),
                                    },
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("dolorem"),
                            },
                            BootDiskKmsKey: sdk.String("sapiente"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(518201),
                            DiskType: sdk.String("nihil"),
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(25662),
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
                            ImageType: sdk.String("expedita"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("neque"),
                                CPUManagerPolicy: sdk.String("sed"),
                                PodPidsLimit: sdk.String("vel"),
                            },
                            Labels: map[string]string{
                                "voluptas": "deserunt",
                                "quam": "ipsum",
                                "incidunt": "qui",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV1.ToPointer(),
                                Sysctls: map[string]string{
                                    "pariatur": "soluta",
                                    "dicta": "laborum",
                                    "totam": "incidunt",
                                    "aspernatur": "dolores",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(716860),
                            },
                            LocalSsdCount: sdk.Int(704474),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("quam"),
                            Metadata: map[string]string{
                                "temporibus": "qui",
                                "neque": "fugit",
                                "magni": "odio",
                            },
                            MinCPUPlatform: sdk.String("sunt"),
                            NodeGroup: sdk.String("ullam"),
                            OauthScopes: []string{
                                "hic",
                                "voluptatem",
                                "cumque",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumAnyReservation.ToPointer(),
                                Key: sdk.String("nobis"),
                                Values: []string{
                                    "saepe",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "veritatis": "nobis",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                            },
                            ServiceAccount: sdk.String("tempore"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "aperiam",
                                "delectus",
                                "dolorem",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("adipisci"),
                                    Value: sdk.String("dolorum"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("quae"),
                                    Value: sdk.String("aut"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                            },
                        },
                        Etag: sdk.String("consequatur"),
                        InitialNodeCount: sdk.Int(669917),
                        InstanceGroupUrls: []string{
                            "porro",
                            "doloribus",
                            "ut",
                            "facilis",
                        },
                        Locations: []string{
                            "qui",
                            "quae",
                            "laudantium",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("odio"),
                                Description: sdk.String("occaecati"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("voluptatibus"),
                        },
                        Name: sdk.String("Ignacio Moen"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("voluptate"),
                            PodRange: sdk.String("consectetur"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(949319),
                        SelfLink: sdk.String("dignissimos"),
                        Status: shared.NodePoolStatusEnumError.ToPointer(),
                        StatusMessage: sdk.String("distinctio"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "odio",
                                    "similique",
                                    "facilis",
                                    "vero",
                                },
                                BluePoolDeletionStartTime: sdk.String("ducimus"),
                                GreenInstanceGroupUrls: []string{
                                    "quibusdam",
                                    "illum",
                                },
                                GreenPoolVersion: sdk.String("sequi"),
                                Phase: shared.BlueGreenInfoPhaseEnumDrainingBluePool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("impedit"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(13236),
                                    BatchPercentage: sdk.Float32(9742.59),
                                    BatchSoakDuration: sdk.String("exercitationem"),
                                },
                            },
                            MaxSurge: sdk.Int(862310),
                            MaxUnavailable: sdk.Int(148141),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                        Version: sdk.String("maiores"),
                    },
                },
                NotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumUpgradeAvailableEvent,
                                shared.FilterEventTypeEnumSecurityBulletinEvent,
                                shared.FilterEventTypeEnumUpgradeAvailableEvent,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                            },
                        },
                        Topic: sdk.String("officia"),
                    },
                },
                PrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("tempora"),
                    PeeringName: sdk.String("ipsam"),
                    PrivateEndpoint: sdk.String("ea"),
                    PrivateEndpointSubnetwork: sdk.String("aspernatur"),
                    PublicEndpoint: sdk.String("vel"),
                },
                ReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumStable.ToPointer(),
                },
                ResourceLabels: map[string]string{
                    "ratione": "ex",
                    "laudantium": "dicta",
                },
                ResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("dolor"),
                    },
                    ConsumptionMeteringConfig: &shared.ConsumptionMeteringConfig{
                        Enabled: sdk.Bool(false),
                    },
                    EnableNetworkEgressMetering: sdk.Bool(false),
                },
                SelfLink: sdk.String("maiores"),
                ServicesIpv4Cidr: sdk.String("quasi"),
                ShieldedNodes: &shared.ShieldedNodes{
                    Enabled: sdk.Bool(false),
                },
                Status: shared.ClusterStatusEnumRunning.ToPointer(),
                StatusMessage: sdk.String("nulla"),
                Subnetwork: sdk.String("excepturi"),
                TpuIpv4CidrBlock: sdk.String("voluptatibus"),
                VerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                WorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    WorkloadPool: sdk.String("nostrum"),
                },
                Zone: sdk.String("sapiente"),
            },
            Parent: sdk.String("quisquam"),
            ProjectID: sdk.String("saepe"),
            Zone: sdk.String("ea"),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("magnam"),
        Parent: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("recusandae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("libero"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("aut"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("fugit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("placeat"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("eum"),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("quas"),
        Zone: sdk.String("assumenda"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "libero": "quasi",
            "tempora": "numquam",
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("magnam"),
        Name: "Esther Koch",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("fugiat"),
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
            ClusterID: sdk.String("eum"),
            NodePool: &shared.NodePool{
                Autoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                    MaxNodeCount: sdk.Int(826871),
                    MinNodeCount: sdk.Int(181151),
                    TotalMaxNodeCount: sdk.Int(509342),
                    TotalMinNodeCount: sdk.Int(788546),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumOk.ToPointer(),
                        Code: shared.StatusConditionCodeEnumSetByOperator.ToPointer(),
                        Message: sdk.String("quidem"),
                    },
                },
                Config: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("quo"),
                            AcceleratorType: sdk.String("illum"),
                            GpuPartitionSize: sdk.String("quo"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("eius"),
                            },
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("eos"),
                    },
                    BootDiskKmsKey: sdk.String("voluptas"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(69859),
                    DiskType: sdk.String("cupiditate"),
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(9688),
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
                    ImageType: sdk.String("tempora"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("debitis"),
                        CPUManagerPolicy: sdk.String("ipsam"),
                        PodPidsLimit: sdk.String("aspernatur"),
                    },
                    Labels: map[string]string{
                        "quo": "esse",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                        Sysctls: map[string]string{
                            "distinctio": "quod",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(490819),
                    },
                    LocalSsdCount: sdk.Int(76956),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("totam"),
                    Metadata: map[string]string{
                        "aliquam": "odio",
                        "occaecati": "commodi",
                        "sapiente": "dolores",
                        "deserunt": "molestiae",
                    },
                    MinCPUPlatform: sdk.String("accusantium"),
                    NodeGroup: sdk.String("porro"),
                    OauthScopes: []string{
                        "quas",
                        "praesentium",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumUnspecified.ToPointer(),
                        Key: sdk.String("deleniti"),
                        Values: []string{
                            "fuga",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "incidunt": "atque",
                        "explicabo": "minima",
                        "nisi": "fugit",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        Type: shared.SandboxConfigTypeEnumGvisor.ToPointer(),
                    },
                    ServiceAccount: sdk.String("consequuntur"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "explicabo",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("atque"),
                            Value: sdk.String("et"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                            Key: sdk.String("eveniet"),
                            Value: sdk.String("accusamus"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                            Key: sdk.String("esse"),
                            Value: sdk.String("quod"),
                        },
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                            Key: sdk.String("vero"),
                            Value: sdk.String("aliquid"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionUnspecified.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
                    },
                },
                Etag: sdk.String("vel"),
                InitialNodeCount: sdk.Int(690025),
                InstanceGroupUrls: []string{
                    "rerum",
                    "occaecati",
                },
                Locations: []string{
                    "distinctio",
                    "eligendi",
                },
                Management: &shared.NodeManagement{
                    AutoRepair: sdk.Bool(false),
                    AutoUpgrade: sdk.Bool(false),
                    UpgradeOptions: &shared.AutoUpgradeOptions{
                        AutoUpgradeStartTime: sdk.String("sit"),
                        Description: sdk.String("culpa"),
                    },
                },
                MaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("tempore"),
                },
                Name: sdk.String("Miss Blanca Cronin"),
                NetworkConfig: &shared.NodeNetworkConfig{
                    CreatePodRange: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                        TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                    },
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    PodIpv4CidrBlock: sdk.String("consectetur"),
                    PodRange: sdk.String("esse"),
                },
                PlacementPolicy: &shared.PlacementPolicy{
                    Type: shared.PlacementPolicyTypeEnumCompact.ToPointer(),
                },
                PodIpv4CidrSize: sdk.Int(590984),
                SelfLink: sdk.String("a"),
                Status: shared.NodePoolStatusEnumError.ToPointer(),
                StatusMessage: sdk.String("quas"),
                UpdateInfo: &shared.UpdateInfo{
                    BlueGreenInfo: &shared.BlueGreenInfo{
                        BlueInstanceGroupUrls: []string{
                            "quasi",
                            "a",
                        },
                        BluePoolDeletionStartTime: sdk.String("error"),
                        GreenInstanceGroupUrls: []string{
                            "pariatur",
                            "possimus",
                            "quia",
                        },
                        GreenPoolVersion: sdk.String("eveniet"),
                        Phase: shared.BlueGreenInfoPhaseEnumRollbackStarted.ToPointer(),
                    },
                },
                UpgradeSettings: &shared.UpgradeSettings{
                    BlueGreenSettings: &shared.BlueGreenSettings{
                        NodePoolSoakDuration: sdk.String("facere"),
                        StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                            BatchNodeCount: sdk.Int(85001),
                            BatchPercentage: sdk.Float32(1594.14),
                            BatchSoakDuration: sdk.String("quasi"),
                        },
                    },
                    MaxSurge: sdk.Int(628899),
                    MaxUnavailable: sdk.Int(633608),
                    Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
                },
                Version: sdk.String("tenetur"),
            },
            Parent: sdk.String("quae"),
            ProjectID: sdk.String("earum"),
            Zone: sdk.String("vel"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("illum"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("accusantium"),
        Parent: "aliquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("ullam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        ClusterID: sdk.String("voluptatum"),
        Fields: sdk.String("qui"),
        Key: sdk.String("quibusdam"),
        Name: "Cassandra Ward V",
        NodePoolID: sdk.String("tenetur"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("at"),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("ipsa"),
        Zone: sdk.String("minima"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        ClusterID: sdk.String("temporibus"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("aut"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("eum"),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("corrupti"),
        Zone: sdk.String("non"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RollbackNodePoolUpgradeRequest: &shared.RollbackNodePoolUpgradeRequest{
            ClusterID: sdk.String("dolor"),
            Name: sdk.String("Francis Russel"),
            NodePoolID: sdk.String("aut"),
            ProjectID: sdk.String("dignissimos"),
            RespectPdb: sdk.Bool(false),
            Zone: sdk.String("dicta"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("voluptas"),
        Name: "Kevin Jast",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("dignissimos"),
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

Sets the autoscaling settings for the specified node pool.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNodePoolAutoscalingRequest: &shared.SetNodePoolAutoscalingRequest{
            Autoscaling: &shared.NodePoolAutoscaling{
                Autoprovisioned: sdk.Bool(false),
                Enabled: sdk.Bool(false),
                LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                MaxNodeCount: sdk.Int(368102),
                MinNodeCount: sdk.Int(65304),
                TotalMaxNodeCount: sdk.Int(312753),
                TotalMinNodeCount: sdk.Int(783235),
            },
            ClusterID: sdk.String("quod"),
            Name: sdk.String("Kathleen Flatley"),
            NodePoolID: sdk.String("suscipit"),
            ProjectID: sdk.String("velit"),
            Zone: sdk.String("culpa"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("vel"),
        Name: "Billie Keebler",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("in"),
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
            ClusterID: sdk.String("reiciendis"),
            Management: &shared.NodeManagement{
                AutoRepair: sdk.Bool(false),
                AutoUpgrade: sdk.Bool(false),
                UpgradeOptions: &shared.AutoUpgradeOptions{
                    AutoUpgradeStartTime: sdk.String("assumenda"),
                    Description: sdk.String("nemo"),
                },
            },
            Name: sdk.String("Gilbert Bayer"),
            NodePoolID: sdk.String("in"),
            ProjectID: sdk.String("exercitationem"),
            Zone: sdk.String("earum"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("reiciendis"),
        Name: "Bert Treutel DVM",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("beatae"),
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

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
            ClusterID: sdk.String("a"),
            Name: sdk.String("Glenn Herzog"),
            NodeCount: sdk.Int(58356),
            NodePoolID: sdk.String("voluptates"),
            ProjectID: sdk.String("libero"),
            Zone: sdk.String("vitae"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("voluptas"),
        Name: "Melanie Hane",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("blanditiis"),
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

Updates the version and/or image type for the specified node pool.

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
            ClusterID: sdk.String("dolore"),
            ConfidentialNodes: &shared.ConfidentialNodes{
                Enabled: sdk.Bool(false),
            },
            Etag: sdk.String("aliquam"),
            FastSocket: &shared.FastSocket{
                Enabled: sdk.Bool(false),
            },
            GcfsConfig: &shared.GcfsConfig{
                Enabled: sdk.Bool(false),
            },
            Gvnic: &shared.VirtualNIC{
                Enabled: sdk.Bool(false),
            },
            ImageType: sdk.String("officiis"),
            KubeletConfig: &shared.NodeKubeletConfig{
                CPUCfsQuota: sdk.Bool(false),
                CPUCfsQuotaPeriod: sdk.String("temporibus"),
                CPUManagerPolicy: sdk.String("ullam"),
                PodPidsLimit: sdk.String("adipisci"),
            },
            Labels: &shared.NodeLabels{
                Labels: map[string]string{
                    "blanditiis": "quas",
                    "hic": "nesciunt",
                    "culpa": "corrupti",
                },
            },
            LinuxNodeConfig: &shared.LinuxNodeConfig{
                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeV2.ToPointer(),
                Sysctls: map[string]string{
                    "hic": "exercitationem",
                    "nobis": "sit",
                    "rerum": "sed",
                },
            },
            Locations: []string{
                "explicabo",
                "asperiores",
                "facilis",
                "voluptate",
            },
            LoggingConfig: &shared.NodePoolLoggingConfig{
                VariantConfig: &shared.LoggingVariantConfig{
                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                },
            },
            Name: sdk.String("Margarita Greenholt"),
            NodeNetworkConfig: &shared.NodeNetworkConfig{
                CreatePodRange: sdk.Bool(false),
                EnablePrivateNodes: sdk.Bool(false),
                NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                    TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                },
                PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                    Disable: sdk.Bool(false),
                },
                PodIpv4CidrBlock: sdk.String("commodi"),
                PodRange: sdk.String("quidem"),
            },
            NodePoolID: sdk.String("explicabo"),
            NodeVersion: sdk.String("voluptas"),
            ProjectID: sdk.String("unde"),
            ResourceLabels: &shared.ResourceLabels{
                Labels: map[string]string{
                    "suscipit": "sapiente",
                },
            },
            Tags: &shared.NetworkTags{
                Tags: []string{
                    "illo",
                    "reiciendis",
                    "perferendis",
                    "corrupti",
                },
            },
            Taints: &shared.NodeTaints{
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("sed"),
                        Value: sdk.String("provident"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("necessitatibus"),
                        Value: sdk.String("ipsum"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                        Key: sdk.String("occaecati"),
                        Value: sdk.String("quos"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                        Key: sdk.String("tempora"),
                        Value: sdk.String("tempora"),
                    },
                },
            },
            UpgradeSettings: &shared.UpgradeSettings{
                BlueGreenSettings: &shared.BlueGreenSettings{
                    NodePoolSoakDuration: sdk.String("voluptate"),
                    StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                        BatchNodeCount: sdk.Int(970076),
                        BatchPercentage: sdk.Float32(4017.13),
                        BatchSoakDuration: sdk.String("sit"),
                    },
                },
                MaxSurge: sdk.Int(248413),
                MaxUnavailable: sdk.Int(888044),
                Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
            },
            WindowsNodeConfig: &shared.WindowsNodeConfig{
                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
            },
            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
            },
            Zone: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("sit"),
        Key: sdk.String("nobis"),
        Name: "Floyd Harber",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("saepe"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
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
                GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                    Enabled: sdk.Bool(false),
                },
                HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                    Disabled: sdk.Bool(false),
                },
                HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                    Disabled: sdk.Bool(false),
                },
                KubernetesDashboard: &shared.KubernetesDashboard{
                    Disabled: sdk.Bool(false),
                },
                NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                    Disabled: sdk.Bool(false),
                },
            },
            ClusterID: sdk.String("in"),
            Name: sdk.String("Jack Langworth"),
            ProjectID: sdk.String("cum"),
            Zone: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("hic"),
        Key: sdk.String("expedita"),
        Name: "Tony Pagac",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("tempora"),
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
            ClusterID: sdk.String("fugit"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Janis Bartell"),
            ProjectID: sdk.String("magnam"),
            Zone: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("quas"),
        Name: "Zachary Borer",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("nostrum"),
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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLocationsRequest: &shared.SetLocationsRequest{
            ClusterID: sdk.String("error"),
            Locations: []string{
                "incidunt",
            },
            Name: sdk.String("Mr. Mike Pollich"),
            ProjectID: sdk.String("labore"),
            Zone: sdk.String("quidem"),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("laboriosam"),
        Name: "Grace O'Connell",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("delectus"),
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
            ClusterID: sdk.String("perferendis"),
            LoggingService: sdk.String("est"),
            Name: sdk.String("Ron Schulist"),
            ProjectID: sdk.String("mollitia"),
            Zone: sdk.String("veniam"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("atque"),
        Name: "Tabitha Leannon",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("amet"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetMaintenancePolicyRequest: &shared.SetMaintenancePolicyRequest{
            ClusterID: sdk.String("ea"),
            MaintenancePolicy: &shared.MaintenancePolicy{
                ResourceVersion: sdk.String("atque"),
                Window: &shared.MaintenanceWindow{
                    DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                        Duration: sdk.String("error"),
                        StartTime: sdk.String("officiis"),
                    },
                    MaintenanceExclusions: map[string]shared.TimeWindow{
                        "accusamus": shared.TimeWindow{
                            EndTime: sdk.String("natus"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("aspernatur"),
                        },
                        "ex": shared.TimeWindow{
                            EndTime: sdk.String("maiores"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("at"),
                        },
                        "error": shared.TimeWindow{
                            EndTime: sdk.String("blanditiis"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("repudiandae"),
                        },
                        "atque": shared.TimeWindow{
                            EndTime: sdk.String("atque"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("recusandae"),
                        },
                    },
                    RecurringWindow: &shared.RecurringTimeWindow{
                        Recurrence: sdk.String("dolorum"),
                        Window: &shared.TimeWindow{
                            EndTime: sdk.String("repellendus"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("reiciendis"),
                        },
                    },
                },
            },
            Name: sdk.String("Mr. Elvira Buckridge"),
            ProjectID: sdk.String("enim"),
            Zone: sdk.String("laboriosam"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("saepe"),
        Name: "Toni Torphy",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eveniet"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("consequuntur"),
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
            Action: shared.SetMasterAuthRequestActionEnumGeneratePassword.ToPointer(),
            ClusterID: sdk.String("quis"),
            Name: sdk.String("Isabel Blick"),
            ProjectID: sdk.String("eveniet"),
            Update: &shared.MasterAuth{
                ClientCertificate: sdk.String("non"),
                ClientCertificateConfig: &shared.ClientCertificateConfig{
                    IssueClientCertificate: sdk.Bool(false),
                },
                ClientKey: sdk.String("vero"),
                ClusterCaCertificate: sdk.String("doloremque"),
                Password: sdk.String("iure"),
                Username: sdk.String("Andy47"),
            },
            Zone: sdk.String("eveniet"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("ratione"),
        Name: "Kelvin Lehner",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("corporis"),
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
            ClusterID: sdk.String("nihil"),
            MonitoringService: sdk.String("mollitia"),
            Name: sdk.String("Linda Wuckert"),
            ProjectID: sdk.String("id"),
            Zone: sdk.String("minima"),
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("quae"),
        Key: sdk.String("recusandae"),
        Name: "Calvin Kreiger",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("laudantium"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNetworkPolicyRequest: &shared.SetNetworkPolicyRequest{
            ClusterID: sdk.String("nemo"),
            Name: sdk.String("Cory Medhurst"),
            NetworkPolicy: &shared.NetworkPolicy{
                Enabled: sdk.Bool(false),
                Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
            },
            ProjectID: sdk.String("provident"),
            Zone: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("mollitia"),
        Name: "Rufus Okuneva",
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("ullam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetLabelsRequest: &shared.SetLabelsRequest{
            ClusterID: sdk.String("nam"),
            LabelFingerprint: sdk.String("earum"),
            Name: sdk.String("Neal Schulist"),
            ProjectID: sdk.String("molestias"),
            ResourceLabels: map[string]string{
                "sapiente": "cumque",
                "vitae": "rerum",
                "tempora": "quis",
                "inventore": "fugit",
            },
            Zone: sdk.String("cumque"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("eum"),
        Name: "Deanna Swaniawski",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("minima"),
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
            ClusterID: sdk.String("cupiditate"),
            Name: sdk.String("Darin Rodriguez"),
            ProjectID: sdk.String("eaque"),
            RotateCredentials: sdk.Bool(false),
            Zone: sdk.String("earum"),
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("porro"),
        Name: "Connie Corkery",
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("nulla"),
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
            ClusterID: sdk.String("quasi"),
            MasterVersion: sdk.String("et"),
            Name: sdk.String("Ada McClure"),
            ProjectID: sdk.String("quasi"),
            Zone: sdk.String("magni"),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("tempora"),
        Name: "Tanya Buckridge",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("vel"),
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
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("odio"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("esse"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("ipsa"),
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
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("aliquid"),
        Name: "Ms. Ricardo Jacobi",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("id"),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
        Zone: sdk.String("voluptates"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CancelOperationRequest: &shared.CancelOperationRequest{
            Name: sdk.String("Wm Hane"),
            OperationID: sdk.String("vitae"),
            ProjectID: sdk.String("repellendus"),
            Zone: sdk.String("ex"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("ad"),
        Key: sdk.String("expedita"),
        Name: "Leona Rippin IV",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("est"),
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
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("fuga"),
        Name: "Ms. Doyle Barrows",
        OauthToken: sdk.String("ex"),
        OperationID: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("rem"),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("asperiores"),
        Zone: sdk.String("ratione"),
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

Lists all operations in a project in a specific zone or all zones.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("nam"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        ProjectID: sdk.String("culpa"),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("inventore"),
        Zone: sdk.String("deleniti"),
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
                GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                    Enabled: sdk.Bool(false),
                },
                HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                    Disabled: sdk.Bool(false),
                },
                HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                    Disabled: sdk.Bool(false),
                },
                KubernetesDashboard: &shared.KubernetesDashboard{
                    Disabled: sdk.Bool(false),
                },
                NetworkPolicyConfig: &shared.NetworkPolicyConfig{
                    Disabled: sdk.Bool(false),
                },
            },
            ClusterID: sdk.String("dolor"),
            Name: sdk.String("Alice Bailey"),
            ProjectID: sdk.String("ab"),
            Zone: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        ClusterID: "ipsam",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "eveniet",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("esse"),
        Zone: "necessitatibus",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CompleteIPRotationRequest: &shared.CompleteIPRotationRequest{
            ClusterID: sdk.String("veniam"),
            Name: sdk.String("Lula Kemmer"),
            ProjectID: sdk.String("magnam"),
            Zone: sdk.String("exercitationem"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        ClusterID: "nobis",
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatem",
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("quasi"),
        Zone: "nisi",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateClusterRequestInput: &shared.CreateClusterRequestInput{
            Cluster: &shared.ClusterInput{
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
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
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
                    SecurityGroup: sdk.String("est"),
                },
                Autopilot: &shared.Autopilot{
                    Enabled: sdk.Bool(false),
                },
                Autoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "sequi",
                        "doloribus",
                        "repudiandae",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("optio"),
                        DiskSizeGb: sdk.Int(579681),
                        DiskType: sdk.String("nemo"),
                        ImageType: sdk.String("voluptate"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("blanditiis"),
                                Description: sdk.String("officia"),
                            },
                        },
                        MinCPUPlatform: sdk.String("voluptas"),
                        OauthScopes: []string{
                            "nemo",
                            "quos",
                        },
                        ServiceAccount: sdk.String("eius"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("aspernatur"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(495970),
                                    BatchPercentage: sdk.Float32(2005.16),
                                    BatchSoakDuration: sdk.String("fuga"),
                                },
                            },
                            MaxSurge: sdk.Int(514054),
                            MaxUnavailable: sdk.Int(277340),
                            Strategy: shared.UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumOptimizeUtilization.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("dicta"),
                            Minimum: sdk.String("nisi"),
                            ResourceType: sdk.String("consequuntur"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("consectetur"),
                            Minimum: sdk.String("aperiam"),
                            ResourceType: sdk.String("cupiditate"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("reiciendis"),
                            Minimum: sdk.String("soluta"),
                            ResourceType: sdk.String("alias"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("omnis"),
                            Minimum: sdk.String("eos"),
                            ResourceType: sdk.String("occaecati"),
                        },
                    },
                },
                BinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumDisabled.ToPointer(),
                },
                ClusterIpv4Cidr: sdk.String("magni"),
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumAborted.ToPointer(),
                        Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                        Message: sdk.String("voluptatibus"),
                    },
                },
                ConfidentialNodes: &shared.ConfidentialNodes{
                    Enabled: sdk.Bool(false),
                },
                CostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                CreateTime: sdk.String("distinctio"),
                CurrentMasterVersion: sdk.String("omnis"),
                CurrentNodeCount: sdk.Int(966390),
                CurrentNodeVersion: sdk.String("minima"),
                DatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("praesentium"),
                    State: shared.DatabaseEncryptionStateEnumDecrypted.ToPointer(),
                },
                DefaultMaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("magnam"),
                },
                Description: sdk.String("temporibus"),
                EnableKubernetesAlpha: sdk.Bool(false),
                EnableTpu: sdk.Bool(false),
                Endpoint: sdk.String("quos"),
                Etag: sdk.String("commodi"),
                ExpireTime: sdk.String("itaque"),
                Fleet: &shared.Fleet{
                    Membership: sdk.String("commodi"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("totam"),
                },
                IdentityServiceConfig: &shared.IdentityServiceConfig{
                    Enabled: sdk.Bool(false),
                },
                InitialClusterVersion: sdk.String("earum"),
                InitialNodeCount: sdk.Int(267207),
                InstanceGroupUrls: []string{
                    "vero",
                    "voluptatem",
                    "ipsam",
                },
                IPAllocationPolicy: &shared.IPAllocationPolicyInput{
                    AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                        PodRangeNames: []string{
                            "alias",
                            "quasi",
                        },
                    },
                    ClusterIpv4Cidr: sdk.String("non"),
                    ClusterIpv4CidrBlock: sdk.String("maiores"),
                    ClusterSecondaryRangeName: sdk.String("enim"),
                    CreateSubnetwork: sdk.Bool(false),
                    Ipv6AccessType: shared.IPAllocationPolicyIpv6AccessTypeEnumInternal.ToPointer(),
                    NodeIpv4Cidr: sdk.String("nulla"),
                    NodeIpv4CidrBlock: sdk.String("deserunt"),
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    ServicesIpv4Cidr: sdk.String("esse"),
                    ServicesIpv4CidrBlock: sdk.String("nemo"),
                    ServicesSecondaryRangeName: sdk.String("reprehenderit"),
                    StackType: shared.IPAllocationPolicyStackTypeEnumIpv4Ipv6.ToPointer(),
                    SubnetworkName: sdk.String("quis"),
                    TpuIpv4CidrBlock: sdk.String("sint"),
                    UseIPAliases: sdk.Bool(false),
                    UseRoutes: sdk.Bool(false),
                },
                LabelFingerprint: sdk.String("accusamus"),
                LegacyAbac: &shared.LegacyAbac{
                    Enabled: sdk.Bool(false),
                },
                Location: sdk.String("impedit"),
                Locations: []string{
                    "necessitatibus",
                    "asperiores",
                    "ex",
                    "voluptas",
                },
                LoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.LoggingComponentConfigEnableComponentsEnumScheduler,
                            shared.LoggingComponentConfigEnableComponentsEnumScheduler,
                        },
                    },
                },
                LoggingService: sdk.String("laborum"),
                MaintenancePolicy: &shared.MaintenancePolicy{
                    ResourceVersion: sdk.String("consectetur"),
                    Window: &shared.MaintenanceWindow{
                        DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                            Duration: sdk.String("velit"),
                            StartTime: sdk.String("atque"),
                        },
                        MaintenanceExclusions: map[string]shared.TimeWindow{
                            "impedit": shared.TimeWindow{
                                EndTime: sdk.String("magni"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorOrNodeUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("repudiandae"),
                            },
                        },
                        RecurringWindow: &shared.RecurringTimeWindow{
                            Recurrence: sdk.String("nam"),
                            Window: &shared.TimeWindow{
                                EndTime: sdk.String("dolore"),
                                MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                    Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                                },
                                StartTime: sdk.String("voluptate"),
                            },
                        },
                    },
                },
                MasterAuth: &shared.MasterAuth{
                    ClientCertificate: sdk.String("sequi"),
                    ClientCertificateConfig: &shared.ClientCertificateConfig{
                        IssueClientCertificate: sdk.Bool(false),
                    },
                    ClientKey: sdk.String("dignissimos"),
                    ClusterCaCertificate: sdk.String("neque"),
                    Password: sdk.String("quo"),
                    Username: sdk.String("Kailee.Sporer"),
                },
                MasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("vel"),
                            DisplayName: sdk.String("magnam"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("quibusdam"),
                            DisplayName: sdk.String("inventore"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("facere"),
                            DisplayName: sdk.String("libero"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("architecto"),
                            DisplayName: sdk.String("voluptatibus"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                MeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                MonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumScheduler,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                MonitoringService: sdk.String("aliquam"),
                Name: sdk.String("Martha Bashirian"),
                Network: sdk.String("beatae"),
                NetworkConfig: &shared.NetworkConfig{
                    DatapathProvider: shared.NetworkConfigDatapathProviderEnumAdvancedDatapath.ToPointer(),
                    DefaultSnatStatus: &shared.DefaultSnatStatus{
                        Disabled: sdk.Bool(false),
                    },
                    DNSConfig: &shared.DNSConfig{
                        ClusterDNS: shared.DNSConfigClusterDNSEnumPlatformDefault.ToPointer(),
                        ClusterDNSDomain: sdk.String("eum"),
                        ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumDNSScopeUnspecified.ToPointer(),
                    },
                    EnableIntraNodeVisibility: sdk.Bool(false),
                    EnableL4ilbSubsetting: sdk.Bool(false),
                    GatewayAPIConfig: &shared.GatewayAPIConfig{
                        Channel: shared.GatewayAPIConfigChannelEnumChannelDisabled.ToPointer(),
                    },
                    Network: sdk.String("perspiciatis"),
                    PrivateIpv6GoogleAccess: shared.NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessBidirectional.ToPointer(),
                    ServiceExternalIpsConfig: &shared.ServiceExternalIPsConfig{
                        Enabled: sdk.Bool(false),
                    },
                    Subnetwork: sdk.String("dicta"),
                },
                NetworkPolicy: &shared.NetworkPolicy{
                    Enabled: sdk.Bool(false),
                    Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
                },
                NodeConfig: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("iste"),
                            AcceleratorType: sdk.String("itaque"),
                            GpuPartitionSize: sdk.String("alias"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("itaque"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("velit"),
                            AcceleratorType: sdk.String("laborum"),
                            GpuPartitionSize: sdk.String("non"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("iusto"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("sit"),
                            AcceleratorType: sdk.String("doloremque"),
                            GpuPartitionSize: sdk.String("consequatur"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("recusandae"),
                            },
                        },
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("ea"),
                            AcceleratorType: sdk.String("quidem"),
                            GpuPartitionSize: sdk.String("voluptas"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("placeat"),
                            },
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("perspiciatis"),
                    },
                    BootDiskKmsKey: sdk.String("expedita"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(537236),
                    DiskType: sdk.String("a"),
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(455579),
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
                    ImageType: sdk.String("ullam"),
                    KubeletConfig: &shared.NodeKubeletConfig{
                        CPUCfsQuota: sdk.Bool(false),
                        CPUCfsQuotaPeriod: sdk.String("unde"),
                        CPUManagerPolicy: sdk.String("necessitatibus"),
                        PodPidsLimit: sdk.String("animi"),
                    },
                    Labels: map[string]string{
                        "ipsam": "corporis",
                        "est": "error",
                        "esse": "labore",
                        "veritatis": "vero",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                        Sysctls: map[string]string{
                            "inventore": "dolorem",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(322017),
                    },
                    LocalSsdCount: sdk.Int(183033),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("ex"),
                    Metadata: map[string]string{
                        "soluta": "libero",
                        "rem": "dolorum",
                    },
                    MinCPUPlatform: sdk.String("odio"),
                    NodeGroup: sdk.String("fugit"),
                    OauthScopes: []string{
                        "magni",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                        Key: sdk.String("quae"),
                        Values: []string{
                            "modi",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "exercitationem": "itaque",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                    },
                    ServiceAccount: sdk.String("ipsum"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "nulla",
                        "distinctio",
                        "maxime",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                            Key: sdk.String("nostrum"),
                            Value: sdk.String("omnis"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                    },
                },
                NodeIpv4CidrSize: sdk.Int(663318),
                NodePoolAutoConfig: &shared.NodePoolAutoConfig{
                    NetworkTags: &shared.NetworkTags{
                        Tags: []string{
                            "fugiat",
                            "officia",
                            "quos",
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
                                Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
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
                            MaxNodeCount: sdk.Int(57320),
                            MinNodeCount: sdk.Int(914864),
                            TotalMaxNodeCount: sdk.Int(80061),
                            TotalMinNodeCount: sdk.Int(49348),
                        },
                        Conditions: []shared.StatusCondition{
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumDeadlineExceeded.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCloudKmsKeyError.ToPointer(),
                                Message: sdk.String("distinctio"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumOk.ToPointer(),
                                Code: shared.StatusConditionCodeEnumGkeServiceAccountDeleted.ToPointer(),
                                Message: sdk.String("esse"),
                            },
                            shared.StatusCondition{
                                CanonicalCode: shared.StatusConditionCanonicalCodeEnumUnknown.ToPointer(),
                                Code: shared.StatusConditionCodeEnumCloudKmsKeyError.ToPointer(),
                                Message: sdk.String("beatae"),
                            },
                        },
                        Config: &shared.NodeConfig{
                            Accelerators: []shared.AcceleratorConfig{
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("facere"),
                                    AcceleratorType: sdk.String("corrupti"),
                                    GpuPartitionSize: sdk.String("molestiae"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumTimeSharing.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("accusamus"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("necessitatibus"),
                                    AcceleratorType: sdk.String("tempore"),
                                    GpuPartitionSize: sdk.String("sint"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("autem"),
                                    },
                                },
                                shared.AcceleratorConfig{
                                    AcceleratorCount: sdk.String("ipsam"),
                                    AcceleratorType: sdk.String("rerum"),
                                    GpuPartitionSize: sdk.String("laudantium"),
                                    GpuSharingConfig: &shared.GPUSharingConfig{
                                        GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                        MaxSharedClientsPerGpu: sdk.String("officiis"),
                                    },
                                },
                            },
                            AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                                ThreadsPerCore: sdk.String("voluptatibus"),
                            },
                            BootDiskKmsKey: sdk.String("cum"),
                            ConfidentialNodes: &shared.ConfidentialNodes{
                                Enabled: sdk.Bool(false),
                            },
                            DiskSizeGb: sdk.Int(872303),
                            DiskType: sdk.String("alias"),
                            EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                                LocalSsdCount: sdk.Int(156653),
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
                            ImageType: sdk.String("quidem"),
                            KubeletConfig: &shared.NodeKubeletConfig{
                                CPUCfsQuota: sdk.Bool(false),
                                CPUCfsQuotaPeriod: sdk.String("fuga"),
                                CPUManagerPolicy: sdk.String("repudiandae"),
                                PodPidsLimit: sdk.String("accusantium"),
                            },
                            Labels: map[string]string{
                                "officiis": "eos",
                                "quibusdam": "odio",
                                "praesentium": "odit",
                            },
                            LinuxNodeConfig: &shared.LinuxNodeConfig{
                                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                                Sysctls: map[string]string{
                                    "error": "earum",
                                    "adipisci": "recusandae",
                                },
                            },
                            LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                                LocalSsdCount: sdk.Int(630871),
                            },
                            LocalSsdCount: sdk.Int(282837),
                            LoggingConfig: &shared.NodePoolLoggingConfig{
                                VariantConfig: &shared.LoggingVariantConfig{
                                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                                },
                            },
                            MachineType: sdk.String("quis"),
                            Metadata: map[string]string{
                                "unde": "molestiae",
                            },
                            MinCPUPlatform: sdk.String("delectus"),
                            NodeGroup: sdk.String("cupiditate"),
                            OauthScopes: []string{
                                "numquam",
                            },
                            Preemptible: sdk.Bool(false),
                            ReservationAffinity: &shared.ReservationAffinity{
                                ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumNoReservation.ToPointer(),
                                Key: sdk.String("nesciunt"),
                                Values: []string{
                                    "officia",
                                    "dignissimos",
                                    "optio",
                                    "necessitatibus",
                                },
                            },
                            ResourceLabels: map[string]string{
                                "qui": "expedita",
                                "voluptatum": "cupiditate",
                            },
                            SandboxConfig: &shared.SandboxConfig{
                                Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                            },
                            ServiceAccount: sdk.String("placeat"),
                            ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                                EnableIntegrityMonitoring: sdk.Bool(false),
                                EnableSecureBoot: sdk.Bool(false),
                            },
                            Spot: sdk.Bool(false),
                            Tags: []string{
                                "neque",
                                "in",
                            },
                            Taints: []shared.NodeTaint{
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("modi"),
                                    Value: sdk.String("corporis"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                                    Key: sdk.String("voluptates"),
                                    Value: sdk.String("maiores"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumPreferNoSchedule.ToPointer(),
                                    Key: sdk.String("aperiam"),
                                    Value: sdk.String("libero"),
                                },
                                shared.NodeTaint{
                                    Effect: shared.NodeTaintEffectEnumEffectUnspecified.ToPointer(),
                                    Key: sdk.String("labore"),
                                    Value: sdk.String("totam"),
                                },
                            },
                            WindowsNodeConfig: &shared.WindowsNodeConfig{
                                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                            },
                            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                                Mode: shared.WorkloadMetadataConfigModeEnumGceMetadata.ToPointer(),
                            },
                        },
                        Etag: sdk.String("quo"),
                        InitialNodeCount: sdk.Int(242099),
                        InstanceGroupUrls: []string{
                            "fuga",
                            "nostrum",
                            "est",
                            "impedit",
                        },
                        Locations: []string{
                            "tempore",
                            "vero",
                            "odit",
                            "repellat",
                        },
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("pariatur"),
                                Description: sdk.String("nemo"),
                            },
                        },
                        MaxPodsConstraint: &shared.MaxPodsConstraint{
                            MaxPodsPerNode: sdk.String("reprehenderit"),
                        },
                        Name: sdk.String("Viola Hane"),
                        NetworkConfig: &shared.NodeNetworkConfig{
                            CreatePodRange: sdk.Bool(false),
                            EnablePrivateNodes: sdk.Bool(false),
                            NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                                TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                            },
                            PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                                Disable: sdk.Bool(false),
                            },
                            PodIpv4CidrBlock: sdk.String("dolores"),
                            PodRange: sdk.String("error"),
                        },
                        PlacementPolicy: &shared.PlacementPolicy{
                            Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                        },
                        PodIpv4CidrSize: sdk.Int(498180),
                        SelfLink: sdk.String("voluptate"),
                        Status: shared.NodePoolStatusEnumError.ToPointer(),
                        StatusMessage: sdk.String("itaque"),
                        UpdateInfo: &shared.UpdateInfo{
                            BlueGreenInfo: &shared.BlueGreenInfo{
                                BlueInstanceGroupUrls: []string{
                                    "optio",
                                    "ex",
                                    "quaerat",
                                },
                                BluePoolDeletionStartTime: sdk.String("commodi"),
                                GreenInstanceGroupUrls: []string{
                                    "placeat",
                                    "quidem",
                                    "exercitationem",
                                    "quam",
                                },
                                GreenPoolVersion: sdk.String("dolorem"),
                                Phase: shared.BlueGreenInfoPhaseEnumCreatingGreenPool.ToPointer(),
                            },
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("ipsa"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(575534),
                                    BatchPercentage: sdk.Float32(8760.27),
                                    BatchSoakDuration: sdk.String("sequi"),
                                },
                            },
                            MaxSurge: sdk.Int(918547),
                            MaxUnavailable: sdk.Int(741232),
                            Strategy: shared.UpgradeSettingsStrategyEnumNodePoolUpdateStrategyUnspecified.ToPointer(),
                        },
                        Version: sdk.String("earum"),
                    },
                },
                NotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumUpgradeEvent,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                            },
                        },
                        Topic: sdk.String("nam"),
                    },
                },
                PrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("dicta"),
                    PeeringName: sdk.String("consequuntur"),
                    PrivateEndpoint: sdk.String("necessitatibus"),
                    PrivateEndpointSubnetwork: sdk.String("nobis"),
                    PublicEndpoint: sdk.String("ipsa"),
                },
                ReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumRapid.ToPointer(),
                },
                ResourceLabels: map[string]string{
                    "veritatis": "quasi",
                    "laboriosam": "pariatur",
                    "libero": "excepturi",
                    "occaecati": "nemo",
                },
                ResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("aliquam"),
                    },
                    ConsumptionMeteringConfig: &shared.ConsumptionMeteringConfig{
                        Enabled: sdk.Bool(false),
                    },
                    EnableNetworkEgressMetering: sdk.Bool(false),
                },
                SelfLink: sdk.String("nostrum"),
                ServicesIpv4Cidr: sdk.String("doloribus"),
                ShieldedNodes: &shared.ShieldedNodes{
                    Enabled: sdk.Bool(false),
                },
                Status: shared.ClusterStatusEnumError.ToPointer(),
                StatusMessage: sdk.String("sint"),
                Subnetwork: sdk.String("enim"),
                TpuIpv4CidrBlock: sdk.String("hic"),
                VerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                WorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    WorkloadPool: sdk.String("animi"),
                },
                Zone: sdk.String("quas"),
            },
            Parent: sdk.String("totam"),
            ProjectID: sdk.String("molestias"),
            Zone: sdk.String("odio"),
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("quos"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "tempore",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("doloremque"),
        Zone: "delectus",
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
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        ClusterID: "saepe",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("doloremque"),
        Name: sdk.String("Ms. Sally Rempel"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "possimus",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("itaque"),
        Zone: "sed",
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

Gets the details of a specific cluster.

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
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facere"),
        ClusterID: "laudantium",
        Fields: sdk.String("odit"),
        Key: sdk.String("pariatur"),
        Name: sdk.String("Yvonne Bernhard"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nisi",
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("blanditiis"),
        Zone: "distinctio",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetLegacyAbacRequest: &shared.SetLegacyAbacRequest{
            ClusterID: sdk.String("quis"),
            Enabled: sdk.Bool(false),
            Name: sdk.String("Jeannette Schimmel"),
            ProjectID: sdk.String("ipsum"),
            Zone: sdk.String("ad"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        ClusterID: "debitis",
        Fields: sdk.String("labore"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "reprehenderit",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("iusto"),
        Zone: "est",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolor"),
        Parent: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "error",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("dignissimos"),
        Zone: "esse",
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

Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLocationsRequest: &shared.SetLocationsRequest{
            ClusterID: sdk.String("ad"),
            Locations: []string{
                "enim",
            },
            Name: sdk.String("Tyrone Kulas Jr."),
            ProjectID: sdk.String("incidunt"),
            Zone: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veniam"),
        ClusterID: "eos",
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "praesentium",
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quisquam"),
        Zone: "sequi",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetLoggingServiceRequest: &shared.SetLoggingServiceRequest{
            ClusterID: sdk.String("deleniti"),
            LoggingService: sdk.String("illo"),
            Name: sdk.String("Nadine Gutmann"),
            ProjectID: sdk.String("laudantium"),
            Zone: sdk.String("repudiandae"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        ClusterID: "nam",
        Fields: sdk.String("expedita"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "repudiandae",
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("corporis"),
        Zone: "vero",
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
            ClusterID: sdk.String("repellendus"),
            MasterVersion: sdk.String("iure"),
            Name: sdk.String("Gertrude Russel Jr."),
            ProjectID: sdk.String("ad"),
            Zone: sdk.String("quae"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        ClusterID: "quidem",
        Fields: sdk.String("cum"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dicta",
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("earum"),
        Zone: "iusto",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetMonitoringServiceRequest: &shared.SetMonitoringServiceRequest{
            ClusterID: sdk.String("provident"),
            MonitoringService: sdk.String("dolorum"),
            Name: sdk.String("Mrs. Terrence Waelchi"),
            ProjectID: sdk.String("itaque"),
            Zone: sdk.String("facilis"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        ClusterID: "accusamus",
        Fields: sdk.String("eos"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatem",
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("sunt"),
        Zone: "a",
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

Sets the autoscaling settings for the specified node pool.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolAutoscalingRequest: &shared.SetNodePoolAutoscalingRequest{
            Autoscaling: &shared.NodePoolAutoscaling{
                Autoprovisioned: sdk.Bool(false),
                Enabled: sdk.Bool(false),
                LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumBalanced.ToPointer(),
                MaxNodeCount: sdk.Int(539813),
                MinNodeCount: sdk.Int(107472),
                TotalMaxNodeCount: sdk.Int(868255),
                TotalMinNodeCount: sdk.Int(287544),
            },
            ClusterID: sdk.String("minus"),
            Name: sdk.String("Donna Aufderhar"),
            NodePoolID: sdk.String("aperiam"),
            ProjectID: sdk.String("dignissimos"),
            Zone: sdk.String("repellat"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        ClusterID: "consectetur",
        Fields: sdk.String("eligendi"),
        Key: sdk.String("dignissimos"),
        NodePoolID: "consectetur",
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "natus",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("amet"),
        Zone: "tenetur",
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
            ClusterID: sdk.String("quo"),
            NodePool: &shared.NodePool{
                Autoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                    MaxNodeCount: sdk.Int(848346),
                    MinNodeCount: sdk.Int(670762),
                    TotalMaxNodeCount: sdk.Int(490420),
                    TotalMinNodeCount: sdk.Int(876285),
                },
                Conditions: []shared.StatusCondition{
                    shared.StatusCondition{
                        CanonicalCode: shared.StatusConditionCanonicalCodeEnumInvalidArgument.ToPointer(),
                        Code: shared.StatusConditionCodeEnumCaExpiring.ToPointer(),
                        Message: sdk.String("explicabo"),
                    },
                },
                Config: &shared.NodeConfig{
                    Accelerators: []shared.AcceleratorConfig{
                        shared.AcceleratorConfig{
                            AcceleratorCount: sdk.String("exercitationem"),
                            AcceleratorType: sdk.String("nihil"),
                            GpuPartitionSize: sdk.String("non"),
                            GpuSharingConfig: &shared.GPUSharingConfig{
                                GpuSharingStrategy: shared.GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified.ToPointer(),
                                MaxSharedClientsPerGpu: sdk.String("illo"),
                            },
                        },
                    },
                    AdvancedMachineFeatures: &shared.AdvancedMachineFeatures{
                        ThreadsPerCore: sdk.String("hic"),
                    },
                    BootDiskKmsKey: sdk.String("deserunt"),
                    ConfidentialNodes: &shared.ConfidentialNodes{
                        Enabled: sdk.Bool(false),
                    },
                    DiskSizeGb: sdk.Int(964925),
                    DiskType: sdk.String("non"),
                    EphemeralStorageLocalSsdConfig: &shared.EphemeralStorageLocalSsdConfig{
                        LocalSsdCount: sdk.Int(719389),
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
                        CPUCfsQuotaPeriod: sdk.String("exercitationem"),
                        CPUManagerPolicy: sdk.String("labore"),
                        PodPidsLimit: sdk.String("numquam"),
                    },
                    Labels: map[string]string{
                        "modi": "in",
                        "explicabo": "accusamus",
                        "rem": "aperiam",
                        "odit": "deleniti",
                    },
                    LinuxNodeConfig: &shared.LinuxNodeConfig{
                        CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                        Sysctls: map[string]string{
                            "similique": "minima",
                            "libero": "magnam",
                        },
                    },
                    LocalNvmeSsdBlockConfig: &shared.LocalNvmeSsdBlockConfig{
                        LocalSsdCount: sdk.Int(24272),
                    },
                    LocalSsdCount: sdk.Int(266788),
                    LoggingConfig: &shared.NodePoolLoggingConfig{
                        VariantConfig: &shared.LoggingVariantConfig{
                            Variant: shared.LoggingVariantConfigVariantEnumDefault.ToPointer(),
                        },
                    },
                    MachineType: sdk.String("nesciunt"),
                    Metadata: map[string]string{
                        "dignissimos": "fugiat",
                        "nostrum": "molestiae",
                        "veniam": "reiciendis",
                    },
                    MinCPUPlatform: sdk.String("ab"),
                    NodeGroup: sdk.String("modi"),
                    OauthScopes: []string{
                        "aut",
                    },
                    Preemptible: sdk.Bool(false),
                    ReservationAffinity: &shared.ReservationAffinity{
                        ConsumeReservationType: shared.ReservationAffinityConsumeReservationTypeEnumSpecificReservation.ToPointer(),
                        Key: sdk.String("odio"),
                        Values: []string{
                            "numquam",
                            "dolorum",
                        },
                    },
                    ResourceLabels: map[string]string{
                        "voluptate": "consectetur",
                        "nesciunt": "quaerat",
                        "itaque": "minus",
                        "sunt": "distinctio",
                    },
                    SandboxConfig: &shared.SandboxConfig{
                        Type: shared.SandboxConfigTypeEnumUnspecified.ToPointer(),
                    },
                    ServiceAccount: sdk.String("quas"),
                    ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                        EnableIntegrityMonitoring: sdk.Bool(false),
                        EnableSecureBoot: sdk.Bool(false),
                    },
                    Spot: sdk.Bool(false),
                    Tags: []string{
                        "facilis",
                    },
                    Taints: []shared.NodeTaint{
                        shared.NodeTaint{
                            Effect: shared.NodeTaintEffectEnumNoSchedule.ToPointer(),
                            Key: sdk.String("fuga"),
                            Value: sdk.String("alias"),
                        },
                    },
                    WindowsNodeConfig: &shared.WindowsNodeConfig{
                        OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2019.ToPointer(),
                    },
                    WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                        Mode: shared.WorkloadMetadataConfigModeEnumModeUnspecified.ToPointer(),
                    },
                },
                Etag: sdk.String("quos"),
                InitialNodeCount: sdk.Int(511222),
                InstanceGroupUrls: []string{
                    "veritatis",
                    "quae",
                    "eaque",
                    "saepe",
                },
                Locations: []string{
                    "mollitia",
                    "nulla",
                    "officia",
                    "sed",
                },
                Management: &shared.NodeManagement{
                    AutoRepair: sdk.Bool(false),
                    AutoUpgrade: sdk.Bool(false),
                    UpgradeOptions: &shared.AutoUpgradeOptions{
                        AutoUpgradeStartTime: sdk.String("voluptatem"),
                        Description: sdk.String("alias"),
                    },
                },
                MaxPodsConstraint: &shared.MaxPodsConstraint{
                    MaxPodsPerNode: sdk.String("eveniet"),
                },
                Name: sdk.String("Mark Gottlieb"),
                NetworkConfig: &shared.NodeNetworkConfig{
                    CreatePodRange: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                        TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1.ToPointer(),
                    },
                    PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                        Disable: sdk.Bool(false),
                    },
                    PodIpv4CidrBlock: sdk.String("harum"),
                    PodRange: sdk.String("explicabo"),
                },
                PlacementPolicy: &shared.PlacementPolicy{
                    Type: shared.PlacementPolicyTypeEnumTypeUnspecified.ToPointer(),
                },
                PodIpv4CidrSize: sdk.Int(397988),
                SelfLink: sdk.String("modi"),
                Status: shared.NodePoolStatusEnumStopping.ToPointer(),
                StatusMessage: sdk.String("voluptatibus"),
                UpdateInfo: &shared.UpdateInfo{
                    BlueGreenInfo: &shared.BlueGreenInfo{
                        BlueInstanceGroupUrls: []string{
                            "officia",
                            "libero",
                            "totam",
                        },
                        BluePoolDeletionStartTime: sdk.String("sequi"),
                        GreenInstanceGroupUrls: []string{
                            "ea",
                            "impedit",
                        },
                        GreenPoolVersion: sdk.String("ducimus"),
                        Phase: shared.BlueGreenInfoPhaseEnumUpdateStarted.ToPointer(),
                    },
                },
                UpgradeSettings: &shared.UpgradeSettings{
                    BlueGreenSettings: &shared.BlueGreenSettings{
                        NodePoolSoakDuration: sdk.String("velit"),
                        StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                            BatchNodeCount: sdk.Int(967338),
                            BatchPercentage: sdk.Float32(9979.18),
                            BatchSoakDuration: sdk.String("nulla"),
                        },
                    },
                    MaxSurge: sdk.Int(671116),
                    MaxUnavailable: sdk.Int(617657),
                    Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                },
                Version: sdk.String("doloremque"),
            },
            Parent: sdk.String("nisi"),
            ProjectID: sdk.String("rerum"),
            Zone: sdk.String("recusandae"),
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        ClusterID: "quia",
        Fields: sdk.String("ullam"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "voluptatibus",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("officiis"),
        Zone: "architecto",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        ClusterID: "perferendis",
        Fields: sdk.String("facilis"),
        Key: sdk.String("reiciendis"),
        Name: sdk.String("Nick Carroll"),
        NodePoolID: "dolore",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "itaque",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("consequuntur"),
        Zone: "assumenda",
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
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        ClusterID: "accusamus",
        Fields: sdk.String("totam"),
        Key: sdk.String("reiciendis"),
        Name: sdk.String("Becky Kozey"),
        NodePoolID: "odio",
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "debitis",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("corporis"),
        Zone: "voluptas",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        ClusterID: "eius",
        Fields: sdk.String("ipsa"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("maiores"),
        Parent: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "veniam",
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("facere"),
        Zone: "aliquam",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RollbackNodePoolUpgradeRequest: &shared.RollbackNodePoolUpgradeRequest{
            ClusterID: sdk.String("doloribus"),
            Name: sdk.String("Ernesto Windler I"),
            NodePoolID: sdk.String("similique"),
            ProjectID: sdk.String("illo"),
            RespectPdb: sdk.Bool(false),
            Zone: sdk.String("repellat"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        ClusterID: "unde",
        Fields: sdk.String("incidunt"),
        Key: sdk.String("explicabo"),
        NodePoolID: "ipsam",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "optio",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("nesciunt"),
        Zone: "commodi",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetNodePoolManagementRequest: &shared.SetNodePoolManagementRequest{
            ClusterID: sdk.String("consequuntur"),
            Management: &shared.NodeManagement{
                AutoRepair: sdk.Bool(false),
                AutoUpgrade: sdk.Bool(false),
                UpgradeOptions: &shared.AutoUpgradeOptions{
                    AutoUpgradeStartTime: sdk.String("veniam"),
                    Description: sdk.String("debitis"),
                },
            },
            Name: sdk.String("Kirk Goyette"),
            NodePoolID: sdk.String("adipisci"),
            ProjectID: sdk.String("libero"),
            Zone: sdk.String("in"),
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        ClusterID: "ab",
        Fields: sdk.String("beatae"),
        Key: sdk.String("hic"),
        NodePoolID: "nisi",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolor",
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("minima"),
        Zone: "architecto",
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

Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetNodePoolSizeRequest: &shared.SetNodePoolSizeRequest{
            ClusterID: sdk.String("aliquid"),
            Name: sdk.String("Amber Fisher"),
            NodeCount: sdk.Int(349898),
            NodePoolID: sdk.String("expedita"),
            ProjectID: sdk.String("facilis"),
            Zone: sdk.String("impedit"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        ClusterID: "consequuntur",
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        NodePoolID: "modi",
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "quod",
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("quisquam"),
        Zone: "enim",
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

Updates the version and/or image type for the specified node pool.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateNodePoolRequest: &shared.UpdateNodePoolRequest{
            ClusterID: sdk.String("assumenda"),
            ConfidentialNodes: &shared.ConfidentialNodes{
                Enabled: sdk.Bool(false),
            },
            Etag: sdk.String("officiis"),
            FastSocket: &shared.FastSocket{
                Enabled: sdk.Bool(false),
            },
            GcfsConfig: &shared.GcfsConfig{
                Enabled: sdk.Bool(false),
            },
            Gvnic: &shared.VirtualNIC{
                Enabled: sdk.Bool(false),
            },
            ImageType: sdk.String("architecto"),
            KubeletConfig: &shared.NodeKubeletConfig{
                CPUCfsQuota: sdk.Bool(false),
                CPUCfsQuotaPeriod: sdk.String("alias"),
                CPUManagerPolicy: sdk.String("culpa"),
                PodPidsLimit: sdk.String("ipsa"),
            },
            Labels: &shared.NodeLabels{
                Labels: map[string]string{
                    "necessitatibus": "quia",
                    "dicta": "vel",
                    "perspiciatis": "debitis",
                    "ullam": "architecto",
                },
            },
            LinuxNodeConfig: &shared.LinuxNodeConfig{
                CgroupMode: shared.LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified.ToPointer(),
                Sysctls: map[string]string{
                    "veritatis": "provident",
                },
            },
            Locations: []string{
                "iure",
                "quibusdam",
                "quod",
                "nemo",
            },
            LoggingConfig: &shared.NodePoolLoggingConfig{
                VariantConfig: &shared.LoggingVariantConfig{
                    Variant: shared.LoggingVariantConfigVariantEnumMaxThroughput.ToPointer(),
                },
            },
            Name: sdk.String("Danielle Kunde"),
            NodeNetworkConfig: &shared.NodeNetworkConfig{
                CreatePodRange: sdk.Bool(false),
                EnablePrivateNodes: sdk.Bool(false),
                NetworkPerformanceConfig: &shared.NetworkPerformanceConfig{
                    TotalEgressBandwidthTier: shared.NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified.ToPointer(),
                },
                PodCidrOverprovisionConfig: &shared.PodCIDROverprovisionConfig{
                    Disable: sdk.Bool(false),
                },
                PodIpv4CidrBlock: sdk.String("natus"),
                PodRange: sdk.String("provident"),
            },
            NodePoolID: sdk.String("cum"),
            NodeVersion: sdk.String("doloribus"),
            ProjectID: sdk.String("facilis"),
            ResourceLabels: &shared.ResourceLabels{
                Labels: map[string]string{
                    "itaque": "laboriosam",
                    "unde": "modi",
                    "perspiciatis": "hic",
                },
            },
            Tags: &shared.NetworkTags{
                Tags: []string{
                    "aspernatur",
                    "libero",
                    "nam",
                },
            },
            Taints: &shared.NodeTaints{
                Taints: []shared.NodeTaint{
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                        Key: sdk.String("quod"),
                        Value: sdk.String("id"),
                    },
                    shared.NodeTaint{
                        Effect: shared.NodeTaintEffectEnumNoExecute.ToPointer(),
                        Key: sdk.String("autem"),
                        Value: sdk.String("quo"),
                    },
                },
            },
            UpgradeSettings: &shared.UpgradeSettings{
                BlueGreenSettings: &shared.BlueGreenSettings{
                    NodePoolSoakDuration: sdk.String("nesciunt"),
                    StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                        BatchNodeCount: sdk.Int(849383),
                        BatchPercentage: sdk.Float32(3674.75),
                        BatchSoakDuration: sdk.String("illum"),
                    },
                },
                MaxSurge: sdk.Int(706872),
                MaxUnavailable: sdk.Int(247618),
                Strategy: shared.UpgradeSettingsStrategyEnumBlueGreen.ToPointer(),
            },
            WindowsNodeConfig: &shared.WindowsNodeConfig{
                OsVersion: shared.WindowsNodeConfigOsVersionEnumOsVersionLtsc2022.ToPointer(),
            },
            WorkloadMetadataConfig: &shared.WorkloadMetadataConfig{
                Mode: shared.WorkloadMetadataConfigModeEnumGkeMetadata.ToPointer(),
            },
            Zone: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facere"),
        ClusterID: "laborum",
        Fields: sdk.String("eveniet"),
        Key: sdk.String("laborum"),
        NodePoolID: "incidunt",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "ipsam",
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("deserunt"),
        Zone: "molestias",
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
            ClusterID: sdk.String("est"),
            LabelFingerprint: sdk.String("occaecati"),
            Name: sdk.String("Roxanne Aufderhar"),
            ProjectID: sdk.String("magnam"),
            ResourceLabels: map[string]string{
                "eligendi": "hic",
                "nostrum": "officiis",
            },
            Zone: sdk.String("unde"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        ClusterID: "magnam",
        Fields: sdk.String("nostrum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "fuga",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("quasi"),
        Zone: "deserunt",
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
            ClusterID: sdk.String("laboriosam"),
            MaintenancePolicy: &shared.MaintenancePolicy{
                ResourceVersion: sdk.String("doloremque"),
                Window: &shared.MaintenanceWindow{
                    DailyMaintenanceWindow: &shared.DailyMaintenanceWindow{
                        Duration: sdk.String("voluptatem"),
                        StartTime: sdk.String("facere"),
                    },
                    MaintenanceExclusions: map[string]shared.TimeWindow{
                        "maxime": shared.TimeWindow{
                            EndTime: sdk.String("consequatur"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("architecto"),
                        },
                        "similique": shared.TimeWindow{
                            EndTime: sdk.String("porro"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("quae"),
                        },
                        "magni": shared.TimeWindow{
                            EndTime: sdk.String("officiis"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("necessitatibus"),
                        },
                        "impedit": shared.TimeWindow{
                            EndTime: sdk.String("ipsa"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("a"),
                        },
                    },
                    RecurringWindow: &shared.RecurringTimeWindow{
                        Recurrence: sdk.String("maiores"),
                        Window: &shared.TimeWindow{
                            EndTime: sdk.String("laudantium"),
                            MaintenanceExclusionOptions: &shared.MaintenanceExclusionOptions{
                                Scope: shared.MaintenanceExclusionOptionsScopeEnumNoMinorOrNodeUpgrades.ToPointer(),
                            },
                            StartTime: sdk.String("alias"),
                        },
                    },
                },
            },
            Name: sdk.String("Jordan Carter"),
            ProjectID: sdk.String("doloribus"),
            Zone: sdk.String("velit"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        ClusterID: "eligendi",
        Fields: sdk.String("quasi"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "excepturi",
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("impedit"),
        Zone: "beatae",
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
            Action: shared.SetMasterAuthRequestActionEnumUnknown.ToPointer(),
            ClusterID: sdk.String("odit"),
            Name: sdk.String("Susie Abshire"),
            ProjectID: sdk.String("accusantium"),
            Update: &shared.MasterAuth{
                ClientCertificate: sdk.String("id"),
                ClientCertificateConfig: &shared.ClientCertificateConfig{
                    IssueClientCertificate: sdk.Bool(false),
                },
                ClientKey: sdk.String("laboriosam"),
                ClusterCaCertificate: sdk.String("ex"),
                Password: sdk.String("quas"),
                Username: sdk.String("Arvilla63"),
            },
            Zone: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        ClusterID: "delectus",
        Fields: sdk.String("omnis"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "maxime",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("aliquam"),
        Zone: "excepturi",
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
            ClusterID: sdk.String("laudantium"),
            Name: sdk.String("Johanna Fay DDS"),
            NetworkPolicy: &shared.NetworkPolicy{
                Enabled: sdk.Bool(false),
                Provider: shared.NetworkPolicyProviderEnumCalico.ToPointer(),
            },
            ProjectID: sdk.String("quas"),
            Zone: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        ClusterID: "nobis",
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "minus",
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("porro"),
        Zone: "tempore",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        StartIPRotationRequest: &shared.StartIPRotationRequest{
            ClusterID: sdk.String("modi"),
            Name: sdk.String("Billy Gerlach"),
            ProjectID: sdk.String("asperiores"),
            RotateCredentials: sdk.Bool(false),
            Zone: sdk.String("esse"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        ClusterID: "a",
        Fields: sdk.String("animi"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "nulla",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("velit"),
        Zone: "officiis",
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

Updates the settings of a specific cluster.

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
            ClusterID: sdk.String("officia"),
            Name: sdk.String("Miss Duane Walker"),
            ProjectID: sdk.String("quasi"),
            Update: &shared.ClusterUpdate{
                AdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                    PodRangeNames: []string{
                        "eius",
                        "quisquam",
                        "eos",
                    },
                },
                DesiredAddonsConfig: &shared.AddonsConfig{
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
                    GkeBackupAgentConfig: &shared.GkeBackupAgentConfig{
                        Enabled: sdk.Bool(false),
                    },
                    HorizontalPodAutoscaling: &shared.HorizontalPodAutoscaling{
                        Disabled: sdk.Bool(false),
                    },
                    HTTPLoadBalancing: &shared.HTTPLoadBalancing{
                        Disabled: sdk.Bool(false),
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
                    SecurityGroup: sdk.String("natus"),
                },
                DesiredBinaryAuthorization: &shared.BinaryAuthorization{
                    Enabled: sdk.Bool(false),
                    EvaluationMode: shared.BinaryAuthorizationEvaluationModeEnumProjectSingletonPolicyEnforce.ToPointer(),
                },
                DesiredClusterAutoscaling: &shared.ClusterAutoscaling{
                    AutoprovisioningLocations: []string{
                        "magnam",
                    },
                    AutoprovisioningNodePoolDefaults: &shared.AutoprovisioningNodePoolDefaults{
                        BootDiskKmsKey: sdk.String("reprehenderit"),
                        DiskSizeGb: sdk.Int(800799),
                        DiskType: sdk.String("quos"),
                        ImageType: sdk.String("corrupti"),
                        Management: &shared.NodeManagement{
                            AutoRepair: sdk.Bool(false),
                            AutoUpgrade: sdk.Bool(false),
                            UpgradeOptions: &shared.AutoUpgradeOptions{
                                AutoUpgradeStartTime: sdk.String("amet"),
                                Description: sdk.String("molestiae"),
                            },
                        },
                        MinCPUPlatform: sdk.String("amet"),
                        OauthScopes: []string{
                            "modi",
                            "perferendis",
                            "necessitatibus",
                        },
                        ServiceAccount: sdk.String("architecto"),
                        ShieldedInstanceConfig: &shared.ShieldedInstanceConfig{
                            EnableIntegrityMonitoring: sdk.Bool(false),
                            EnableSecureBoot: sdk.Bool(false),
                        },
                        UpgradeSettings: &shared.UpgradeSettings{
                            BlueGreenSettings: &shared.BlueGreenSettings{
                                NodePoolSoakDuration: sdk.String("molestias"),
                                StandardRolloutPolicy: &shared.StandardRolloutPolicy{
                                    BatchNodeCount: sdk.Int(292177),
                                    BatchPercentage: sdk.Float32(1258.11),
                                    BatchSoakDuration: sdk.String("maiores"),
                                },
                            },
                            MaxSurge: sdk.Int(205011),
                            MaxUnavailable: sdk.Int(139745),
                            Strategy: shared.UpgradeSettingsStrategyEnumSurge.ToPointer(),
                        },
                    },
                    AutoscalingProfile: shared.ClusterAutoscalingAutoscalingProfileEnumProfileUnspecified.ToPointer(),
                    EnableNodeAutoprovisioning: sdk.Bool(false),
                    ResourceLimits: []shared.ResourceLimit{
                        shared.ResourceLimit{
                            Maximum: sdk.String("eaque"),
                            Minimum: sdk.String("exercitationem"),
                            ResourceType: sdk.String("veniam"),
                        },
                        shared.ResourceLimit{
                            Maximum: sdk.String("nihil"),
                            Minimum: sdk.String("ad"),
                            ResourceType: sdk.String("nisi"),
                        },
                    },
                },
                DesiredCostManagementConfig: &shared.CostManagementConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredDatabaseEncryption: &shared.DatabaseEncryption{
                    KeyName: sdk.String("tenetur"),
                    State: shared.DatabaseEncryptionStateEnumEncrypted.ToPointer(),
                },
                DesiredDatapathProvider: shared.ClusterUpdateDesiredDatapathProviderEnumAdvancedDatapath.ToPointer(),
                DesiredDefaultSnatStatus: &shared.DefaultSnatStatus{
                    Disabled: sdk.Bool(false),
                },
                DesiredDNSConfig: &shared.DNSConfig{
                    ClusterDNS: shared.DNSConfigClusterDNSEnumPlatformDefault.ToPointer(),
                    ClusterDNSDomain: sdk.String("suscipit"),
                    ClusterDNSScope: shared.DNSConfigClusterDNSScopeEnumVpcScope.ToPointer(),
                },
                DesiredEnablePrivateEndpoint: sdk.Bool(false),
                DesiredFleet: &shared.Fleet{
                    Membership: sdk.String("sit"),
                    PreRegistered: sdk.Bool(false),
                    Project: sdk.String("quidem"),
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
                DesiredImageType: sdk.String("perferendis"),
                DesiredIntraNodeVisibilityConfig: &shared.IntraNodeVisibilityConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredL4ilbSubsettingConfig: &shared.ILBSubsettingConfig{
                    Enabled: sdk.Bool(false),
                },
                DesiredLocations: []string{
                    "sapiente",
                    "sed",
                    "possimus",
                },
                DesiredLoggingConfig: &shared.LoggingConfig{
                    ComponentConfig: &shared.LoggingComponentConfig{
                        EnableComponents: []shared.LoggingComponentConfigEnableComponentsEnum{
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                            shared.LoggingComponentConfigEnableComponentsEnumComponentUnspecified,
                            shared.LoggingComponentConfigEnableComponentsEnumSystemComponents,
                            shared.LoggingComponentConfigEnableComponentsEnumControllerManager,
                        },
                    },
                },
                DesiredLoggingService: sdk.String("harum"),
                DesiredMasterAuthorizedNetworksConfig: &shared.MasterAuthorizedNetworksConfig{
                    CidrBlocks: []shared.CidrBlock{
                        shared.CidrBlock{
                            CidrBlock: sdk.String("voluptatibus"),
                            DisplayName: sdk.String("iure"),
                        },
                        shared.CidrBlock{
                            CidrBlock: sdk.String("explicabo"),
                            DisplayName: sdk.String("minus"),
                        },
                    },
                    Enabled: sdk.Bool(false),
                    GcpPublicCidrsAccessEnabled: sdk.Bool(false),
                },
                DesiredMasterVersion: sdk.String("soluta"),
                DesiredMeshCertificates: &shared.MeshCertificates{
                    EnableCertificates: sdk.Bool(false),
                },
                DesiredMonitoringConfig: &shared.MonitoringConfig{
                    ComponentConfig: &shared.MonitoringComponentConfig{
                        EnableComponents: []shared.MonitoringComponentConfigEnableComponentsEnum{
                            shared.MonitoringComponentConfigEnableComponentsEnumSystemComponents,
                            shared.MonitoringComponentConfigEnableComponentsEnumControllerManager,
                            shared.MonitoringComponentConfigEnableComponentsEnumApiserver,
                        },
                    },
                    ManagedPrometheusConfig: &shared.ManagedPrometheusConfig{
                        Enabled: sdk.Bool(false),
                    },
                },
                DesiredMonitoringService: sdk.String("error"),
                DesiredNodePoolAutoConfigNetworkTags: &shared.NetworkTags{
                    Tags: []string{
                        "quasi",
                        "mollitia",
                    },
                },
                DesiredNodePoolAutoscaling: &shared.NodePoolAutoscaling{
                    Autoprovisioned: sdk.Bool(false),
                    Enabled: sdk.Bool(false),
                    LocationPolicy: shared.NodePoolAutoscalingLocationPolicyEnumAny.ToPointer(),
                    MaxNodeCount: sdk.Int(687589),
                    MinNodeCount: sdk.Int(769156),
                    TotalMaxNodeCount: sdk.Int(42615),
                    TotalMinNodeCount: sdk.Int(711871),
                },
                DesiredNodePoolID: sdk.String("corrupti"),
                DesiredNodePoolLoggingConfig: &shared.NodePoolLoggingConfig{
                    VariantConfig: &shared.LoggingVariantConfig{
                        Variant: shared.LoggingVariantConfigVariantEnumVariantUnspecified.ToPointer(),
                    },
                },
                DesiredNodeVersion: sdk.String("deserunt"),
                DesiredNotificationConfig: &shared.NotificationConfig{
                    Pubsub: &shared.PubSub{
                        Enabled: sdk.Bool(false),
                        Filter: &shared.Filter{
                            EventType: []shared.FilterEventTypeEnum{
                                shared.FilterEventTypeEnumUpgradeEvent,
                                shared.FilterEventTypeEnumEventTypeUnspecified,
                            },
                        },
                        Topic: sdk.String("tempora"),
                    },
                },
                DesiredPrivateClusterConfig: &shared.PrivateClusterConfig{
                    EnablePrivateEndpoint: sdk.Bool(false),
                    EnablePrivateNodes: sdk.Bool(false),
                    MasterGlobalAccessConfig: &shared.PrivateClusterMasterGlobalAccessConfig{
                        Enabled: sdk.Bool(false),
                    },
                    MasterIpv4CidrBlock: sdk.String("possimus"),
                    PeeringName: sdk.String("dolor"),
                    PrivateEndpoint: sdk.String("rerum"),
                    PrivateEndpointSubnetwork: sdk.String("sed"),
                    PublicEndpoint: sdk.String("accusamus"),
                },
                DesiredPrivateIpv6GoogleAccess: shared.ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessBidirectional.ToPointer(),
                DesiredReleaseChannel: &shared.ReleaseChannel{
                    Channel: shared.ReleaseChannelChannelEnumStable.ToPointer(),
                },
                DesiredResourceUsageExportConfig: &shared.ResourceUsageExportConfig{
                    BigqueryDestination: &shared.BigQueryDestination{
                        DatasetID: sdk.String("minus"),
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
                DesiredStackType: shared.ClusterUpdateDesiredStackTypeEnumIpv4Ipv6.ToPointer(),
                DesiredVerticalPodAutoscaling: &shared.VerticalPodAutoscaling{
                    Enabled: sdk.Bool(false),
                },
                DesiredWorkloadIdentityConfig: &shared.WorkloadIdentityConfig{
                    WorkloadPool: sdk.String("quos"),
                },
                Etag: sdk.String("asperiores"),
                RemovedAdditionalPodRangesConfig: &shared.AdditionalPodRangesConfig{
                    PodRangeNames: []string{
                        "iste",
                        "corporis",
                        "accusantium",
                    },
                },
            },
            Zone: sdk.String("illo"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nostrum"),
        ClusterID: "at",
        Fields: sdk.String("possimus"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "vel",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("quae"),
        Zone: "quos",
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
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("quisquam"),
        Name: sdk.String("Ms. Russell Wunsch"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "dolor",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("cumque"),
        Zone: "rem",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CancelOperationRequest: &shared.CancelOperationRequest{
            Name: sdk.String("Sherry Walter"),
            OperationID: sdk.String("numquam"),
            ProjectID: sdk.String("sequi"),
            Zone: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("quidem"),
        OperationID: "totam",
        PrettyPrint: sdk.Bool(false),
        ProjectID: "porro",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("nihil"),
        Zone: "voluptas",
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("aut"),
        Key: sdk.String("dolore"),
        Name: sdk.String("Jay Morar"),
        OauthToken: sdk.String("placeat"),
        OperationID: "voluptas",
        PrettyPrint: sdk.Bool(false),
        ProjectID: "occaecati",
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("nihil"),
        Zone: "inventore",
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

Lists all operations in a project in a specific zone or all zones.

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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("facere"),
        Parent: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "beatae",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("labore"),
        Zone: "expedita",
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
