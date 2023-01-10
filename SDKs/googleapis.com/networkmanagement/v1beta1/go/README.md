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
    
    req := operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest{
        Security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams{
            Parent: "exercitationem",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "officiis",
            Alt: "proto",
            Callback: "fuga",
            Fields: "eum",
            Key: "nihil",
            OauthToken: "deserunt",
            PrettyPrint: true,
            QuotaUser: "repellendus",
            TestID: "tempora",
            UploadType: "qui",
            UploadProtocol: "ad",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "sequi",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "fuga",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "recusandae",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "sed",
                },
                CloudSQLInstance: "placeat",
                GkeMasterCluster: "et",
                Instance: "fuga",
                IPAddress: "aut",
                Network: "illum",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 755610081521335885,
                ProjectID: "et",
            },
            Labels: map[string]string{
                "ut": "magnam",
            },
            Name: "velit",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "NO_SOURCE_LOCATION",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "voluptas",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "consequatur",
                    DestinationNetworkURI: "est",
                    DestinationPort: 1674643065284669027,
                    Protocol: "mollitia",
                    SourceAgentURI: "dolor",
                    SourceIP: "magni",
                    SourceNetworkURI: "et",
                    SourcePort: 4708476304598192687,
                },
                Error: &shared.Status{
                    Code: 710465773829253296,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "id": "voluptatem",
                        },
                        map[string]interface{}{
                            "debitis": "reiciendis",
                        },
                        map[string]interface{}{
                            "illo": "ut",
                            "in": "assumenda",
                            "debitis": "cum",
                        },
                    },
                    Message: "sequi",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "cupiditate",
                            Percent: 8645351535884760696,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "ut",
                            Percent: 8969871973830252585,
                        },
                    },
                },
                Result: "UNDETERMINED",
                SentProbeCount: 4512013393758712479,
                SuccessfulProbeCount: 7014242841903057669,
                VerifyTime: "assumenda",
            },
            Protocol: "sed",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 1755706906807156752,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "consequatur": "commodi",
                        },
                        map[string]interface{}{
                            "dolorum": "rerum",
                        },
                    },
                    Message: "dolore",
                },
                Result: "UNREACHABLE",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "vel",
                            DestinationNetworkURI: "maxime",
                            DestinationPort: 6467762878223027401,
                            Protocol: "dolor",
                            SourceAgentURI: "eos",
                            SourceIP: "cupiditate",
                            SourceNetworkURI: "recusandae",
                            SourcePort: 573407582595366246,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "PERMISSION_DENIED",
                                    ProjectsMissingPermission: []string{
                                        "non",
                                    },
                                    ResourceURI: "consequuntur",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "expedita",
                                    Environment: "omnis",
                                    Runtime: "ipsa",
                                    URI: "consectetur",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "dolorem",
                                    Location: "quis",
                                    URI: "et",
                                    VersionID: "cum",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "mollitia",
                                    Location: "dignissimos",
                                    ServiceName: "eos",
                                    ServiceURI: "debitis",
                                    URI: "ratione",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "quibusdam",
                                    ExternalIP: "voluptatem",
                                    InternalIP: "quo",
                                    NetworkURI: "molestiae",
                                    Region: "quos",
                                    URI: "laboriosam",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "et",
                                    Target: "GOOGLE_API",
                                },
                                Description: "voluptatem",
                                Drop: &shared.DropInfo{
                                    Cause: "DROPPED_INSIDE_CLOUD_SQL_SERVICE",
                                    ResourceURI: "quia",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "eveniet",
                                    DestinationNetworkURI: "quia",
                                    DestinationPort: 1520442046973755748,
                                    Protocol: "qui",
                                    SourceAgentURI: "aut",
                                    SourceIP: "rerum",
                                    SourceNetworkURI: "consectetur",
                                    SourcePort: 1969263363825528541,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "laudantium",
                                    Direction: "ea",
                                    DisplayName: "commodi",
                                    FirewallRuleType: "VPC_FIREWALL_RULE",
                                    NetworkURI: "et",
                                    Policy: "nesciunt",
                                    Priority: 1595091969417641904,
                                    TargetServiceAccounts: []string{
                                        "iste",
                                    },
                                    TargetTags: []string{
                                        "eligendi",
                                        "id",
                                    },
                                    URI: "non",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "dignissimos",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "alias",
                                    MatchedPortRange: "eveniet",
                                    MatchedProtocol: "quod",
                                    NetworkURI: "voluptatem",
                                    Target: "fuga",
                                    URI: "praesentium",
                                    Vip: "ut",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "nam",
                                    ClusterURI: "iusto",
                                    ExternalIP: "quia",
                                    InternalIP: "et",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "occaecati",
                                    ExternalIP: "sed",
                                    Interface: "asperiores",
                                    InternalIP: "assumenda",
                                    NetworkTags: []string{
                                        "sunt",
                                        "qui",
                                        "fugiat",
                                    },
                                    NetworkURI: "aperiam",
                                    ServiceAccount: "quos",
                                    URI: "nemo",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "qui",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "voluptatem",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "tempore",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "tempora",
                                                "sequi",
                                                "nostrum",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "omnis",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "est",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "rerum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quos",
                                                "minima",
                                                "praesentium",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "in",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "eaque",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "debitis",
                                                "quia",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "molestias",
                                                "minus",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "placeat",
                                        },
                                    },
                                    HealthCheckURI: "harum",
                                    LoadBalancerType: "SSL_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "aut",
                                    MatchedIPRange: "quia",
                                    URI: "quia",
                                },
                                ProjectID: "soluta",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "qui",
                                    DestPortRanges: []string{
                                        "ut",
                                    },
                                    DisplayName: "nam",
                                    InstanceTags: []string{
                                        "perferendis",
                                    },
                                    NetworkURI: "ut",
                                    NextHop: "veniam",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 1560358327973961373,
                                    Protocols: []string{
                                        "sint",
                                    },
                                    RouteType: "POLICY_BASED",
                                    SrcIPRange: "quasi",
                                    SrcPortRanges: []string{
                                        "voluptas",
                                        "unde",
                                        "rerum",
                                    },
                                    URI: "nemo",
                                },
                                State: "DELIVER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "laudantium",
                                    Location: "voluptatem",
                                    URI: "veniam",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "modi",
                                    IPAddress: "ut",
                                    NetworkURI: "consectetur",
                                    Region: "possimus",
                                    URI: "tenetur",
                                    VpnTunnelURI: "ullam",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "modi",
                                    NetworkURI: "quo",
                                    Region: "tempore",
                                    RemoteGateway: "omnis",
                                    RemoteGatewayIP: "quidem",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "aut",
                                    SourceGatewayIP: "ipsum",
                                    URI: "minus",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNSUPPORTED",
                                    ProjectsMissingPermission: []string{
                                        "eum",
                                        "unde",
                                    },
                                    ResourceURI: "eos",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "sed",
                                    Environment: "perspiciatis",
                                    Runtime: "quia",
                                    URI: "qui",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "dolorem",
                                    Location: "autem",
                                    URI: "fugiat",
                                    VersionID: "tempore",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "enim",
                                    Location: "vitae",
                                    ServiceName: "natus",
                                    ServiceURI: "dolores",
                                    URI: "ut",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "et",
                                    ExternalIP: "qui",
                                    InternalIP: "molestiae",
                                    NetworkURI: "eos",
                                    Region: "est",
                                    URI: "eaque",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "aliquid",
                                    Target: "PSC_VPC_SC",
                                },
                                Description: "exercitationem",
                                Drop: &shared.DropInfo{
                                    Cause: "CAUSE_UNSPECIFIED",
                                    ResourceURI: "asperiores",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "exercitationem",
                                    DestinationNetworkURI: "et",
                                    DestinationPort: 8326600461687117106,
                                    Protocol: "ipsam",
                                    SourceAgentURI: "provident",
                                    SourceIP: "et",
                                    SourceNetworkURI: "eos",
                                    SourcePort: 1852088458822905920,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "reprehenderit",
                                    Direction: "soluta",
                                    DisplayName: "modi",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "maiores",
                                    Policy: "et",
                                    Priority: 427966507688336275,
                                    TargetServiceAccounts: []string{
                                        "doloribus",
                                        "voluptatem",
                                        "rerum",
                                    },
                                    TargetTags: []string{
                                        "quasi",
                                    },
                                    URI: "aliquid",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "autem",
                                    Target: "PEERING_VPC",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "non",
                                    MatchedPortRange: "soluta",
                                    MatchedProtocol: "sint",
                                    NetworkURI: "voluptatum",
                                    Target: "praesentium",
                                    URI: "enim",
                                    Vip: "fuga",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "vel",
                                    ClusterURI: "quibusdam",
                                    ExternalIP: "ea",
                                    InternalIP: "soluta",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "ducimus",
                                    ExternalIP: "possimus",
                                    Interface: "mollitia",
                                    InternalIP: "ducimus",
                                    NetworkTags: []string{
                                        "alias",
                                        "voluptatem",
                                        "autem",
                                    },
                                    NetworkURI: "ut",
                                    ServiceAccount: "sapiente",
                                    URI: "ut",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "eligendi",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quia",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sunt",
                                                "aut",
                                                "ullam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quos",
                                                "placeat",
                                                "explicabo",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "qui",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "omnis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "nobis",
                                                "reprehenderit",
                                                "quae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "unde",
                                                "voluptas",
                                                "labore",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "explicabo",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "accusamus",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aspernatur",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                                "aut",
                                                "in",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "modi",
                                        },
                                    },
                                    HealthCheckURI: "odio",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "dolore",
                                    MatchedIPRange: "et",
                                    URI: "deserunt",
                                },
                                ProjectID: "ducimus",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "qui",
                                    DestPortRanges: []string{
                                        "aut",
                                        "et",
                                        "natus",
                                    },
                                    DisplayName: "perspiciatis",
                                    InstanceTags: []string{
                                        "et",
                                        "tempore",
                                    },
                                    NetworkURI: "consequuntur",
                                    NextHop: "officia",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 845292289208288340,
                                    Protocols: []string{
                                        "ut",
                                        "consectetur",
                                    },
                                    RouteType: "STATIC",
                                    SrcIPRange: "hic",
                                    SrcPortRanges: []string{
                                        "sit",
                                    },
                                    URI: "non",
                                },
                                State: "START_FROM_CLOUD_SQL_INSTANCE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "voluptas",
                                    Location: "perspiciatis",
                                    URI: "qui",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "quasi",
                                    IPAddress: "aliquam",
                                    NetworkURI: "expedita",
                                    Region: "ipsam",
                                    URI: "iusto",
                                    VpnTunnelURI: "nemo",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "illum",
                                    NetworkURI: "temporibus",
                                    Region: "aut",
                                    RemoteGateway: "ex",
                                    RemoteGatewayIP: "voluptatem",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "corporis",
                                    SourceGatewayIP: "vel",
                                    URI: "commodi",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "TRACE_TOO_LONG",
                                    ProjectsMissingPermission: []string{
                                        "animi",
                                    },
                                    ResourceURI: "quam",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "sit",
                                    Environment: "aut",
                                    Runtime: "assumenda",
                                    URI: "asperiores",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "autem",
                                    Location: "saepe",
                                    URI: "enim",
                                    VersionID: "dicta",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "vero",
                                    Location: "esse",
                                    ServiceName: "facilis",
                                    ServiceURI: "ipsa",
                                    URI: "animi",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "voluptate",
                                    ExternalIP: "qui",
                                    InternalIP: "excepturi",
                                    NetworkURI: "excepturi",
                                    Region: "aut",
                                    URI: "quia",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "nulla",
                                    Target: "GOOGLE_API",
                                },
                                Description: "in",
                                Drop: &shared.DropInfo{
                                    Cause: "ROUTE_WRONG_NETWORK",
                                    ResourceURI: "necessitatibus",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "aut",
                                    DestinationNetworkURI: "neque",
                                    DestinationPort: 7205684613211767704,
                                    Protocol: "autem",
                                    SourceAgentURI: "sint",
                                    SourceIP: "perferendis",
                                    SourceNetworkURI: "ut",
                                    SourcePort: 290669334676491225,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "laudantium",
                                    Direction: "quis",
                                    DisplayName: "aspernatur",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "cupiditate",
                                    Policy: "qui",
                                    Priority: 5857699715334436502,
                                    TargetServiceAccounts: []string{
                                        "voluptas",
                                        "libero",
                                        "quis",
                                    },
                                    TargetTags: []string{
                                        "sed",
                                    },
                                    URI: "beatae",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "et",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "dolor",
                                    MatchedPortRange: "molestiae",
                                    MatchedProtocol: "inventore",
                                    NetworkURI: "vel",
                                    Target: "corrupti",
                                    URI: "eum",
                                    Vip: "temporibus",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "et",
                                    ClusterURI: "quia",
                                    ExternalIP: "placeat",
                                    InternalIP: "sit",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "veritatis",
                                    ExternalIP: "aliquam",
                                    Interface: "iure",
                                    InternalIP: "et",
                                    NetworkTags: []string{
                                        "aliquid",
                                        "nemo",
                                    },
                                    NetworkURI: "voluptate",
                                    ServiceAccount: "recusandae",
                                    URI: "quis",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_TYPE_UNSPECIFIED",
                                    BackendURI: "magni",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sint",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quas",
                                                "culpa",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "est",
                                                "animi",
                                                "fugiat",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "et",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "est",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolores",
                                                "exercitationem",
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "et",
                                                "cupiditate",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "mollitia",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "facilis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "molestias",
                                                "sunt",
                                                "delectus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "nulla",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "possimus",
                                        },
                                    },
                                    HealthCheckURI: "nobis",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "voluptates",
                                    MatchedIPRange: "porro",
                                    URI: "et",
                                },
                                ProjectID: "dolores",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "velit",
                                    DestPortRanges: []string{
                                        "necessitatibus",
                                    },
                                    DisplayName: "enim",
                                    InstanceTags: []string{
                                        "exercitationem",
                                        "velit",
                                        "dicta",
                                    },
                                    NetworkURI: "molestiae",
                                    NextHop: "labore",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 9115084133346914763,
                                    Protocols: []string{
                                        "doloremque",
                                        "qui",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "quia",
                                    SrcPortRanges: []string{
                                        "atque",
                                    },
                                    URI: "et",
                                },
                                State: "STATE_UNSPECIFIED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "non",
                                    Location: "aut",
                                    URI: "iure",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "sapiente",
                                    IPAddress: "sapiente",
                                    NetworkURI: "fugit",
                                    Region: "sit",
                                    URI: "odio",
                                    VpnTunnelURI: "asperiores",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "accusantium",
                                    NetworkURI: "quo",
                                    Region: "dolorum",
                                    RemoteGateway: "aut",
                                    RemoteGatewayIP: "error",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "repudiandae",
                                    SourceGatewayIP: "consequatur",
                                    URI: "tempora",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "velit",
                            DestinationNetworkURI: "voluptatum",
                            DestinationPort: 879397370658672803,
                            Protocol: "exercitationem",
                            SourceAgentURI: "consectetur",
                            SourceIP: "a",
                            SourceNetworkURI: "architecto",
                            SourcePort: 3663932191970973070,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "nemo",
                                        "aspernatur",
                                        "perspiciatis",
                                    },
                                    ResourceURI: "corporis",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "voluptates",
                                    Environment: "error",
                                    Runtime: "nostrum",
                                    URI: "in",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "neque",
                                    Location: "modi",
                                    URI: "et",
                                    VersionID: "qui",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ut",
                                    Location: "tempore",
                                    ServiceName: "quia",
                                    ServiceURI: "sed",
                                    URI: "harum",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "praesentium",
                                    ExternalIP: "natus",
                                    InternalIP: "voluptatum",
                                    NetworkURI: "est",
                                    Region: "commodi",
                                    URI: "officiis",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "quas",
                                    Target: "INSTANCE",
                                },
                                Description: "non",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_NO_INSTANCES",
                                    ResourceURI: "qui",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "laborum",
                                    DestinationNetworkURI: "dolores",
                                    DestinationPort: 8676999452286422394,
                                    Protocol: "dolore",
                                    SourceAgentURI: "amet",
                                    SourceIP: "animi",
                                    SourceNetworkURI: "sequi",
                                    SourcePort: 8041449945015521011,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "fugiat",
                                    Direction: "repudiandae",
                                    DisplayName: "deleniti",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "tenetur",
                                    Policy: "tempore",
                                    Priority: 2300636480339287537,
                                    TargetServiceAccounts: []string{
                                        "commodi",
                                    },
                                    TargetTags: []string{
                                        "et",
                                        "totam",
                                        "facere",
                                    },
                                    URI: "aperiam",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "aliquid",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "minus",
                                    MatchedPortRange: "ad",
                                    MatchedProtocol: "id",
                                    NetworkURI: "accusamus",
                                    Target: "quasi",
                                    URI: "iure",
                                    Vip: "deserunt",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "quas",
                                    ClusterURI: "vero",
                                    ExternalIP: "totam",
                                    InternalIP: "omnis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "ipsum",
                                    ExternalIP: "temporibus",
                                    Interface: "est",
                                    InternalIP: "impedit",
                                    NetworkTags: []string{
                                        "ad",
                                        "dolores",
                                    },
                                    NetworkURI: "et",
                                    ServiceAccount: "tempore",
                                    URI: "molestiae",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "error",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "voluptatem",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "soluta",
                                                "ut",
                                                "doloribus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "et",
                                                "autem",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "repellat",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "molestiae",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sit",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "facere",
                                                "debitis",
                                                "quasi",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "unde",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "non",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "excepturi",
                                                "et",
                                                "itaque",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "consectetur",
                                                "eaque",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "est",
                                        },
                                    },
                                    HealthCheckURI: "laudantium",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "alias",
                                    MatchedIPRange: "a",
                                    URI: "eum",
                                },
                                ProjectID: "aut",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "et",
                                    DestPortRanges: []string{
                                        "autem",
                                        "repellat",
                                    },
                                    DisplayName: "vel",
                                    InstanceTags: []string{
                                        "sunt",
                                        "autem",
                                    },
                                    NetworkURI: "quia",
                                    NextHop: "commodi",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 5452774670388541514,
                                    Protocols: []string{
                                        "et",
                                    },
                                    RouteType: "PEERING_DYNAMIC",
                                    SrcIPRange: "ducimus",
                                    SrcPortRanges: []string{
                                        "magni",
                                        "laudantium",
                                    },
                                    URI: "natus",
                                },
                                State: "START_FROM_INTERNET",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "rerum",
                                    Location: "perferendis",
                                    URI: "aspernatur",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "et",
                                    IPAddress: "perferendis",
                                    NetworkURI: "voluptates",
                                    Region: "ut",
                                    URI: "aperiam",
                                    VpnTunnelURI: "minima",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "illo",
                                    NetworkURI: "quam",
                                    Region: "consequatur",
                                    RemoteGateway: "pariatur",
                                    RemoteGatewayIP: "neque",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "harum",
                                    SourceGatewayIP: "sunt",
                                    URI: "sed",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "qui",
            },
            RelatedProjects: []string{
                "enim",
                "impedit",
                "provident",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "dolorum",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "aut",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "et",
                },
                CloudSQLInstance: "nihil",
                GkeMasterCluster: "tempora",
                Instance: "accusamus",
                IPAddress: "cupiditate",
                Network: "eum",
                NetworkType: "GCP_NETWORK",
                Port: 2605685789889317289,
                ProjectID: "velit",
            },
        },
    }
    
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate` - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsList` - Lists all Connectivity Tests owned by a project.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch` - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun` - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `NetworkmanagementProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworkmanagementProjectsLocationsGlobalOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `NetworkmanagementProjectsLocationsGlobalOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `NetworkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `NetworkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
