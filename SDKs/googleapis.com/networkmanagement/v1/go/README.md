# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networkmanagement/v1/go
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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectivityTestInput: &shared.ConnectivityTestInput{
            Description: sdk.String("provident"),
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://terrible-nutrient.org"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://that-hellcat.name"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://high-hound.biz"),
                },
                CloudSQLInstance: sdk.String("debitis"),
                GkeMasterCluster: sdk.String("ipsa"),
                Instance: sdk.String("delectus"),
                IPAddress: sdk.String("tempora"),
                Network: sdk.String("suscipit"),
                NetworkType: shared.EndpointNetworkTypeEnumGcpNetwork.ToPointer(),
                Port: sdk.Int(791725),
                ProjectID: sdk.String("placeat"),
            },
            Labels: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            Name: sdk.String("Mrs. Marie O'Connell"),
            Protocol: sdk.String("sapiente"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(778157),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "at": "maiores",
                            "molestiae": "quod",
                            "quod": "esse",
                            "totam": "porro",
                        },
                    },
                    Message: sdk.String("dolorum"),
                },
                Result: shared.ReachabilityDetailsResultEnumResultUnspecified.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("officia"),
                            DestinationNetworkURI: sdk.String("occaecati"),
                            DestinationPort: sdk.Int(143353),
                            Protocol: sdk.String("deleniti"),
                            SourceIP: sdk.String("hic"),
                            SourceNetworkURI: sdk.String("optio"),
                            SourcePort: sdk.Int(521848),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumNoExternalIP.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "modi",
                                        "qui",
                                    },
                                    ResourceURI: sdk.String("impedit"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("cum"),
                                    Environment: sdk.String("esse"),
                                    Runtime: sdk.String("ipsum"),
                                    URI: sdk.String("https://composed-alb.biz"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("natus"),
                                    Location: sdk.String("sed"),
                                    URI: sdk.String("https://ecstatic-original.info"),
                                    VersionID: sdk.String("hic"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("saepe"),
                                    Location: sdk.String("fuga"),
                                    ServiceURI: sdk.String("in"),
                                    URI: sdk.String("http://past-hostess.org"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("quidem"),
                                    ExternalIP: sdk.String("architecto"),
                                    InternalIP: sdk.String("ipsa"),
                                    NetworkURI: sdk.String("reiciendis"),
                                    Region: sdk.String("est"),
                                    URI: sdk.String("https://questionable-clockwork.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("corporis"),
                                    Target: shared.DeliverInfoTargetEnumInstance.ToPointer(),
                                },
                                Description: sdk.String("nobis"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumForwardingRuleMismatch.ToPointer(),
                                    ResourceURI: sdk.String("omnis"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("nemo"),
                                    DestinationNetworkURI: sdk.String("minima"),
                                    DestinationPort: sdk.Int(570197),
                                    Protocol: sdk.String("accusantium"),
                                    SourceIP: sdk.String("iure"),
                                    SourceNetworkURI: sdk.String("culpa"),
                                    SourcePort: sdk.Int(988374),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("sapiente"),
                                    Direction: sdk.String("architecto"),
                                    DisplayName: sdk.String("mollitia"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("culpa"),
                                    Policy: sdk.String("consequuntur"),
                                    Priority: sdk.Int(995300),
                                    TargetServiceAccounts: []string{
                                        "occaecati",
                                        "numquam",
                                        "commodi",
                                    },
                                    TargetTags: []string{
                                        "molestiae",
                                        "velit",
                                    },
                                    URI: sdk.String("https://cultivated-feather.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("laborum"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("enim"),
                                    MatchedPortRange: sdk.String("odit"),
                                    MatchedProtocol: sdk.String("quo"),
                                    NetworkURI: sdk.String("sequi"),
                                    Target: sdk.String("tenetur"),
                                    URI: sdk.String("http://pushy-snuggle.com"),
                                    Vip: sdk.String("quasi"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("error"),
                                    ClusterURI: sdk.String("temporibus"),
                                    ExternalIP: sdk.String("laborum"),
                                    InternalIP: sdk.String("quasi"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("reiciendis"),
                                    ExternalIP: sdk.String("voluptatibus"),
                                    Interface: sdk.String("vero"),
                                    InternalIP: sdk.String("nihil"),
                                    NetworkTags: []string{
                                        "voluptatibus",
                                        "ipsa",
                                        "omnis",
                                    },
                                    NetworkURI: sdk.String("voluptate"),
                                    ServiceAccount: sdk.String("cum"),
                                    URI: sdk.String("http://anxious-hunt.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("dicta"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("dolore"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dicta",
                                                "harum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "accusamus",
                                                "commodi",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://dutiful-printing.name"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("excepturi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "modi",
                                                "praesentium",
                                                "rem",
                                                "voluptates",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repudiandae",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://vicious-donut.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("consequatur"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("quibusdam"),
                                    MatchedIPRange: sdk.String("explicabo"),
                                    URI: sdk.String("https://sandy-spruce.biz"),
                                },
                                ProjectID: sdk.String("modi"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("qui"),
                                    DestPortRanges: []string{
                                        "cupiditate",
                                        "quos",
                                    },
                                    DisplayName: sdk.String("perferendis"),
                                    InstanceTags: []string{
                                        "assumenda",
                                    },
                                    NetworkURI: sdk.String("ipsam"),
                                    NextHop: sdk.String("alias"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIP.ToPointer(),
                                    Priority: sdk.Int(677817),
                                    Protocols: []string{
                                        "tempora",
                                        "facilis",
                                        "tempore",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("delectus"),
                                    SrcPortRanges: []string{
                                        "non",
                                        "eligendi",
                                    },
                                    URI: sdk.String("https://humming-networking.org"),
                                },
                                State: shared.StepStateEnumArriveAtInternalLoadBalancer.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("officia"),
                                    Location: sdk.String("dolor"),
                                    URI: sdk.String("https://weepy-pork.info"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("in"),
                                    IPAddress: sdk.String("illum"),
                                    NetworkURI: sdk.String("maiores"),
                                    Region: sdk.String("rerum"),
                                    URI: sdk.String("http://fond-salute.net"),
                                    VpnTunnelURI: sdk.String("ea"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("aliquid"),
                                    NetworkURI: sdk.String("laborum"),
                                    Region: sdk.String("accusamus"),
                                    RemoteGateway: sdk.String("non"),
                                    RemoteGatewayIP: sdk.String("occaecati"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("accusamus"),
                                    SourceGatewayIP: sdk.String("delectus"),
                                    URI: sdk.String("https://old-reality.name"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("blanditiis"),
                            DestinationNetworkURI: sdk.String("deleniti"),
                            DestinationPort: sdk.Int(956084),
                            Protocol: sdk.String("amet"),
                            SourceIP: sdk.String("deserunt"),
                            SourceNetworkURI: sdk.String("nisi"),
                            SourcePort: sdk.Int(423855),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "perferendis",
                                        "nihil",
                                    },
                                    ResourceURI: sdk.String("magnam"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("distinctio"),
                                    Environment: sdk.String("id"),
                                    Runtime: sdk.String("labore"),
                                    URI: sdk.String("http://hideous-ottoman.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("eum"),
                                    Location: sdk.String("vero"),
                                    URI: sdk.String("http://buzzing-efficiency.com"),
                                    VersionID: sdk.String("excepturi"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ullam"),
                                    Location: sdk.String("provident"),
                                    ServiceURI: sdk.String("quos"),
                                    URI: sdk.String("https://angelic-pharmacist.org"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("mollitia"),
                                    ExternalIP: sdk.String("ad"),
                                    InternalIP: sdk.String("eum"),
                                    NetworkURI: sdk.String("dolor"),
                                    Region: sdk.String("necessitatibus"),
                                    URI: sdk.String("http://handy-borrowing.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("doloribus"),
                                    Target: shared.DeliverInfoTargetEnumPscVpcSc.ToPointer(),
                                },
                                Description: sdk.String("eius"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumPublicCloudSQLInstanceToPrivateDestination.ToPointer(),
                                    ResourceURI: sdk.String("deleniti"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("facilis"),
                                    DestinationNetworkURI: sdk.String("in"),
                                    DestinationPort: sdk.Int(100226),
                                    Protocol: sdk.String("architecto"),
                                    SourceIP: sdk.String("repudiandae"),
                                    SourceNetworkURI: sdk.String("ullam"),
                                    SourcePort: sdk.Int(714242),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("nihil"),
                                    Direction: sdk.String("repellat"),
                                    DisplayName: sdk.String("quibusdam"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumFirewallRuleTypeUnspecified.ToPointer(),
                                    NetworkURI: sdk.String("saepe"),
                                    Policy: sdk.String("pariatur"),
                                    Priority: sdk.Int(37559),
                                    TargetServiceAccounts: []string{
                                        "praesentium",
                                    },
                                    TargetTags: []string{
                                        "magni",
                                        "sunt",
                                        "quo",
                                    },
                                    URI: sdk.String("https://treasured-simple.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("excepturi"),
                                    Target: shared.ForwardInfoTargetEnumPeeringVpc.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("ea"),
                                    MatchedPortRange: sdk.String("accusantium"),
                                    MatchedProtocol: sdk.String("ab"),
                                    NetworkURI: sdk.String("maiores"),
                                    Target: sdk.String("quidem"),
                                    URI: sdk.String("http://jealous-hearing.net"),
                                    Vip: sdk.String("eaque"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("pariatur"),
                                    ClusterURI: sdk.String("nemo"),
                                    ExternalIP: sdk.String("voluptatibus"),
                                    InternalIP: sdk.String("perferendis"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("fugiat"),
                                    ExternalIP: sdk.String("amet"),
                                    Interface: sdk.String("aut"),
                                    InternalIP: sdk.String("cumque"),
                                    NetworkTags: []string{
                                        "hic",
                                        "libero",
                                    },
                                    NetworkURI: sdk.String("nobis"),
                                    ServiceAccount: sdk.String("dolores"),
                                    URI: sdk.String("http://mealy-kilometer.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("nesciunt"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("perferendis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dolor",
                                                "vero",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://verifiable-offence.net"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("perspiciatis"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("porro"),
                                    MatchedIPRange: sdk.String("consequuntur"),
                                    URI: sdk.String("https://petty-atom.name"),
                                },
                                ProjectID: sdk.String("rerum"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("adipisci"),
                                    DestPortRanges: []string{
                                        "earum",
                                        "modi",
                                        "iste",
                                        "dolorum",
                                    },
                                    DisplayName: sdk.String("deleniti"),
                                    InstanceTags: []string{
                                        "provident",
                                        "nobis",
                                        "libero",
                                        "delectus",
                                    },
                                    NetworkURI: sdk.String("quaerat"),
                                    NextHop: sdk.String("quos"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(212390),
                                    Protocols: []string{
                                        "dolor",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("ipsum"),
                                    SrcPortRanges: []string{
                                        "excepturi",
                                        "cum",
                                        "voluptate",
                                        "dignissimos",
                                    },
                                    URI: sdk.String("https://electric-porter.biz"),
                                },
                                State: shared.StepStateEnumStartFromInternet.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("ipsa"),
                                    Location: sdk.String("ipsa"),
                                    URI: sdk.String("http://likely-epauliere.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("quidem"),
                                    IPAddress: sdk.String("voluptatibus"),
                                    NetworkURI: sdk.String("voluptas"),
                                    Region: sdk.String("natus"),
                                    URI: sdk.String("http://monstrous-ambassador.org"),
                                    VpnTunnelURI: sdk.String("ab"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("soluta"),
                                    NetworkURI: sdk.String("dolorum"),
                                    Region: sdk.String("iusto"),
                                    RemoteGateway: sdk.String("voluptate"),
                                    RemoteGatewayIP: sdk.String("dolorum"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("omnis"),
                                    SourceGatewayIP: sdk.String("necessitatibus"),
                                    URI: sdk.String("https://wrong-intercourse.biz"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnintendedDestination.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "saepe",
                                        "eius",
                                        "aspernatur",
                                    },
                                    ResourceURI: sdk.String("perferendis"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("amet"),
                                    Environment: sdk.String("optio"),
                                    Runtime: sdk.String("accusamus"),
                                    URI: sdk.String("http://untimely-gherkin.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("provident"),
                                    Location: sdk.String("minima"),
                                    URI: sdk.String("https://mature-pansy.com"),
                                    VersionID: sdk.String("at"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quaerat"),
                                    Location: sdk.String("tempora"),
                                    ServiceURI: sdk.String("vel"),
                                    URI: sdk.String("https://uneven-commitment.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("a"),
                                    ExternalIP: sdk.String("esse"),
                                    InternalIP: sdk.String("harum"),
                                    NetworkURI: sdk.String("iusto"),
                                    Region: sdk.String("ipsum"),
                                    URI: sdk.String("https://wavy-cuisine.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("accusamus"),
                                    Target: shared.DeliverInfoTargetEnumInternet.ToPointer(),
                                },
                                Description: sdk.String("enim"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumPrivateGoogleAccessDisallowed.ToPointer(),
                                    ResourceURI: sdk.String("sapiente"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("totam"),
                                    DestinationNetworkURI: sdk.String("nihil"),
                                    DestinationPort: sdk.Int(25662),
                                    Protocol: sdk.String("expedita"),
                                    SourceIP: sdk.String("neque"),
                                    SourceNetworkURI: sdk.String("sed"),
                                    SourcePort: sdk.Int(424685),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("libero"),
                                    Direction: sdk.String("voluptas"),
                                    DisplayName: sdk.String("deserunt"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("ipsum"),
                                    Policy: sdk.String("incidunt"),
                                    Priority: sdk.Int(186458),
                                    TargetServiceAccounts: []string{
                                        "maxime",
                                        "pariatur",
                                        "soluta",
                                    },
                                    TargetTags: []string{
                                        "laborum",
                                    },
                                    URI: sdk.String("https://feisty-carnival.biz"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("distinctio"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("aliquid"),
                                    MatchedPortRange: sdk.String("quam"),
                                    MatchedProtocol: sdk.String("molestias"),
                                    NetworkURI: sdk.String("temporibus"),
                                    Target: sdk.String("qui"),
                                    URI: sdk.String("http://coordinated-clan.info"),
                                    Vip: sdk.String("sunt"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("ullam"),
                                    ClusterURI: sdk.String("nam"),
                                    ExternalIP: sdk.String("hic"),
                                    InternalIP: sdk.String("voluptatem"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("cumque"),
                                    ExternalIP: sdk.String("soluta"),
                                    Interface: sdk.String("nobis"),
                                    InternalIP: sdk.String("et"),
                                    NetworkTags: []string{
                                        "ipsum",
                                        "veritatis",
                                        "nobis",
                                        "quos",
                                    },
                                    NetworkURI: sdk.String("tempore"),
                                    ServiceAccount: sdk.String("cupiditate"),
                                    URI: sdk.String("http://which-corporation.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("adipisci"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("architecto"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aut",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "itaque",
                                                "consequatur",
                                                "est",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://worse-dragonfly.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("cupiditate"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "odio",
                                                "occaecati",
                                                "voluptatibus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://overlooked-feature.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("delectus"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "consectetur",
                                                "vero",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dignissimos",
                                                "hic",
                                                "distinctio",
                                                "quod",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://rubbery-surname.info"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("dolore"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumSslProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("illum"),
                                    MatchedIPRange: sdk.String("sequi"),
                                    URI: sdk.String("https://sociable-affidavit.org"),
                                },
                                ProjectID: sdk.String("exercitationem"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("nulla"),
                                    DestPortRanges: []string{
                                        "porro",
                                    },
                                    DisplayName: sdk.String("maiores"),
                                    InstanceTags: []string{
                                        "iusto",
                                        "eligendi",
                                        "ducimus",
                                        "alias",
                                    },
                                    NetworkURI: sdk.String("officia"),
                                    NextHop: sdk.String("tempora"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(410492),
                                    Protocols: []string{
                                        "vel",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("magnam"),
                                    SrcPortRanges: []string{
                                        "ex",
                                    },
                                    URI: sdk.String("https://clear-cut-criteria.org"),
                                },
                                State: shared.StepStateEnumStartFromInternet.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("ex"),
                                    Location: sdk.String("nulla"),
                                    URI: sdk.String("https://winding-fifth.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("quisquam"),
                                    IPAddress: sdk.String("saepe"),
                                    NetworkURI: sdk.String("ea"),
                                    Region: sdk.String("impedit"),
                                    URI: sdk.String("http://glass-gray.com"),
                                    VpnTunnelURI: sdk.String("magnam"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("ea"),
                                    NetworkURI: sdk.String("quo"),
                                    Region: sdk.String("consectetur"),
                                    RemoteGateway: sdk.String("recusandae"),
                                    RemoteGatewayIP: sdk.String("aspernatur"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("eaque"),
                                    SourceGatewayIP: sdk.String("a"),
                                    URI: sdk.String("https://adolescent-advancement.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumDestinationEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "fugit",
                                        "accusamus",
                                    },
                                    ResourceURI: sdk.String("inventore"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("non"),
                                    Environment: sdk.String("et"),
                                    Runtime: sdk.String("dolorum"),
                                    URI: sdk.String("https://striped-deduce.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("autem"),
                                    Location: sdk.String("nobis"),
                                    URI: sdk.String("https://sweaty-stripe.info"),
                                    VersionID: sdk.String("libero"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quasi"),
                                    Location: sdk.String("tempora"),
                                    ServiceURI: sdk.String("numquam"),
                                    URI: sdk.String("http://optimistic-avenue.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("magnam"),
                                    ExternalIP: sdk.String("odio"),
                                    InternalIP: sdk.String("eius"),
                                    NetworkURI: sdk.String("esse"),
                                    Region: sdk.String("esse"),
                                    URI: sdk.String("https://ready-hunting.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("fugiat"),
                                    Target: shared.DeliverInfoTargetEnumInternet.ToPointer(),
                                },
                                Description: sdk.String("eum"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumFirewallBlockingLoadBalancerBackendHealthCheck.ToPointer(),
                                    ResourceURI: sdk.String("assumenda"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("eos"),
                                    DestinationNetworkURI: sdk.String("praesentium"),
                                    DestinationPort: sdk.Int(788546),
                                    Protocol: sdk.String("veritatis"),
                                    SourceIP: sdk.String("ipsa"),
                                    SourceNetworkURI: sdk.String("id"),
                                    SourcePort: sdk.Int(696997),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("neque"),
                                    Direction: sdk.String("quo"),
                                    DisplayName: sdk.String("illum"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("fuga"),
                                    Policy: sdk.String("eius"),
                                    Priority: sdk.Int(178367),
                                    TargetServiceAccounts: []string{
                                        "ab",
                                        "cupiditate",
                                    },
                                    TargetTags: []string{
                                        "tempora",
                                    },
                                    URI: sdk.String("https://hard-to-find-carrot.biz"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("quo"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("recusandae"),
                                    MatchedPortRange: sdk.String("aperiam"),
                                    MatchedProtocol: sdk.String("distinctio"),
                                    NetworkURI: sdk.String("quod"),
                                    Target: sdk.String("dignissimos"),
                                    URI: sdk.String("http://knobby-liver.org"),
                                    Vip: sdk.String("aliquam"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("odio"),
                                    ClusterURI: sdk.String("occaecati"),
                                    ExternalIP: sdk.String("commodi"),
                                    InternalIP: sdk.String("sapiente"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("dolores"),
                                    ExternalIP: sdk.String("deserunt"),
                                    Interface: sdk.String("molestiae"),
                                    InternalIP: sdk.String("accusantium"),
                                    NetworkTags: []string{
                                        "eum",
                                        "quas",
                                        "praesentium",
                                        "consequuntur",
                                    },
                                    NetworkURI: sdk.String("deleniti"),
                                    ServiceAccount: sdk.String("fugit"),
                                    URI: sdk.String("https://prickly-donor.name"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("minima"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("fugit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "consequuntur",
                                                "ratione",
                                                "explicabo",
                                                "saepe",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "atque",
                                                "et",
                                                "esse",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://bony-infection.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("nam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aliquid",
                                                "quasi",
                                                "saepe",
                                                "vel",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "molestiae",
                                                "rerum",
                                                "occaecati",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://sinful-analogy.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("tempore"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("cumque"),
                                    MatchedIPRange: sdk.String("consequuntur"),
                                    URI: sdk.String("http://staid-energy.org"),
                                },
                                ProjectID: sdk.String("consectetur"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("esse"),
                                    DestPortRanges: []string{
                                        "provident",
                                        "a",
                                        "nulla",
                                    },
                                    DisplayName: sdk.String("quas"),
                                    InstanceTags: []string{
                                        "quasi",
                                        "a",
                                    },
                                    NetworkURI: sdk.String("error"),
                                    NextHop: sdk.String("sint"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIlb.ToPointer(),
                                    Priority: sdk.Int(820767),
                                    Protocols: []string{
                                        "eveniet",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPolicyBased.ToPointer(),
                                    SrcIPRange: sdk.String("facere"),
                                    SrcPortRanges: []string{
                                        "consequuntur",
                                    },
                                    URI: sdk.String("http://pleasant-parenting.info"),
                                },
                                State: shared.StepStateEnumAbort.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("quae"),
                                    Location: sdk.String("earum"),
                                    URI: sdk.String("http://ironclad-diaphragm.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("illum"),
                                    IPAddress: sdk.String("soluta"),
                                    NetworkURI: sdk.String("accusantium"),
                                    Region: sdk.String("aliquam"),
                                    URI: sdk.String("https://clear-fly.info"),
                                    VpnTunnelURI: sdk.String("ullam"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("nisi"),
                                    NetworkURI: sdk.String("aut"),
                                    Region: sdk.String("voluptatum"),
                                    RemoteGateway: sdk.String("qui"),
                                    RemoteGatewayIP: sdk.String("quibusdam"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("deleniti"),
                                    SourceGatewayIP: sdk.String("itaque"),
                                    URI: sdk.String("https://burly-official.org"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("quasi"),
                            DestinationNetworkURI: sdk.String("at"),
                            DestinationPort: sdk.Int(92027),
                            Protocol: sdk.String("voluptate"),
                            SourceIP: sdk.String("ipsa"),
                            SourceNetworkURI: sdk.String("minima"),
                            SourcePort: sdk.Int(86532),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumPermissionDenied.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "temporibus",
                                        "accusantium",
                                        "rem",
                                    },
                                    ResourceURI: sdk.String("aut"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("laudantium"),
                                    Environment: sdk.String("eum"),
                                    Runtime: sdk.String("mollitia"),
                                    URI: sdk.String("http://moral-derrick.com"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("dolor"),
                                    Location: sdk.String("occaecati"),
                                    URI: sdk.String("http://sneaky-cardigan.info"),
                                    VersionID: sdk.String("aut"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("dignissimos"),
                                    Location: sdk.String("dicta"),
                                    ServiceURI: sdk.String("maiores"),
                                    URI: sdk.String("https://even-weasel.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    ExternalIP: sdk.String("aperiam"),
                                    InternalIP: sdk.String("ea"),
                                    NetworkURI: sdk.String("quaerat"),
                                    Region: sdk.String("consequuntur"),
                                    URI: sdk.String("https://portly-silver.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("officia"),
                                    Target: shared.DeliverInfoTargetEnumPscVpcSc.ToPointer(),
                                },
                                Description: sdk.String("nemo"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumForeignIPDisallowed.ToPointer(),
                                    ResourceURI: sdk.String("quaerat"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("porro"),
                                    DestinationNetworkURI: sdk.String("quod"),
                                    DestinationPort: sdk.Int(288398),
                                    Protocol: sdk.String("ab"),
                                    SourceIP: sdk.String("adipisci"),
                                    SourceNetworkURI: sdk.String("fuga"),
                                    SourcePort: sdk.Int(662505),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("suscipit"),
                                    Direction: sdk.String("velit"),
                                    DisplayName: sdk.String("culpa"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("recusandae"),
                                    Policy: sdk.String("totam"),
                                    Priority: sdk.Int(853940),
                                    TargetServiceAccounts: []string{
                                        "ducimus",
                                        "quos",
                                    },
                                    TargetTags: []string{
                                        "labore",
                                        "possimus",
                                    },
                                    URI: sdk.String("https://shabby-harmonize.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("corporis"),
                                    Target: shared.ForwardInfoTargetEnumAnotherProject.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("assumenda"),
                                    MatchedPortRange: sdk.String("nemo"),
                                    MatchedProtocol: sdk.String("recusandae"),
                                    NetworkURI: sdk.String("aliquid"),
                                    Target: sdk.String("aperiam"),
                                    URI: sdk.String("https://emotional-ignorant.info"),
                                    Vip: sdk.String("earum"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("facere"),
                                    ClusterURI: sdk.String("numquam"),
                                    ExternalIP: sdk.String("doloribus"),
                                    InternalIP: sdk.String("suscipit"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("reiciendis"),
                                    ExternalIP: sdk.String("quidem"),
                                    Interface: sdk.String("saepe"),
                                    InternalIP: sdk.String("necessitatibus"),
                                    NetworkTags: []string{
                                        "sunt",
                                        "asperiores",
                                    },
                                    NetworkURI: sdk.String("adipisci"),
                                    ServiceAccount: sdk.String("non"),
                                    URI: sdk.String("http://canine-kilometer.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("consectetur"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("harum"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ipsa",
                                                "voluptates",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "vitae",
                                                "accusamus",
                                                "similique",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://heavenly-gall-bladder.info"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("minima"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolorum",
                                                "adipisci",
                                                "minus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "blanditiis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://fragrant-tambour.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("ullam"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("cum"),
                                    MatchedIPRange: sdk.String("blanditiis"),
                                    URI: sdk.String("https://warped-context.name"),
                                },
                                ProjectID: sdk.String("corrupti"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("pariatur"),
                                    DestPortRanges: []string{
                                        "hic",
                                        "exercitationem",
                                        "nobis",
                                    },
                                    DisplayName: sdk.String("sit"),
                                    InstanceTags: []string{
                                        "sed",
                                        "reiciendis",
                                        "explicabo",
                                    },
                                    NetworkURI: sdk.String("asperiores"),
                                    NextHop: sdk.String("facilis"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(709072),
                                    Protocols: []string{
                                        "iste",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("laborum"),
                                    SrcPortRanges: []string{
                                        "in",
                                    },
                                    URI: sdk.String("http://revolving-career.info"),
                                },
                                State: shared.StepStateEnumArriveAtExternalLoadBalancer.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("architecto"),
                                    Location: sdk.String("suscipit"),
                                    URI: sdk.String("https://unlawful-beach.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("perferendis"),
                                    IPAddress: sdk.String("corrupti"),
                                    NetworkURI: sdk.String("maiores"),
                                    Region: sdk.String("incidunt"),
                                    URI: sdk.String("http://optimistic-diaphragm.org"),
                                    VpnTunnelURI: sdk.String("ipsum"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("ea"),
                                    NetworkURI: sdk.String("occaecati"),
                                    Region: sdk.String("quos"),
                                    RemoteGateway: sdk.String("voluptatibus"),
                                    RemoteGatewayIP: sdk.String("tempora"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("voluptate"),
                                    SourceGatewayIP: sdk.String("reiciendis"),
                                    URI: sdk.String("http://alienated-democrat.org"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("praesentium"),
            },
            RelatedProjects: []string{
                "quaerat",
                "incidunt",
                "ipsam",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://mediocre-analgesia.net"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://glass-eyelid.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://torn-cleft.com"),
                },
                CloudSQLInstance: sdk.String("saepe"),
                GkeMasterCluster: sdk.String("numquam"),
                Instance: sdk.String("veniam"),
                IPAddress: sdk.String("in"),
                Network: sdk.String("officiis"),
                NetworkType: shared.EndpointNetworkTypeEnumNetworkTypeUnspecified.ToPointer(),
                Port: sdk.Int(512452),
                ProjectID: sdk.String("exercitationem"),
            },
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("error"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        TestID: sdk.String("debitis"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity{
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

* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsList](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworkmanagementProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkmanagementProjectsLocationsGlobalOperationsDelete](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [NetworkmanagementProjectsLocationsGlobalOperationsGet](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [NetworkmanagementProjectsLocationsGlobalOperationsList](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkmanagementProjectsLocationsList](docs/projects/README.md#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
