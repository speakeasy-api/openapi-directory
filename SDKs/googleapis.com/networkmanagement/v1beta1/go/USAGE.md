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
            Parent: "enim",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "excepturi",
            Fields: "in",
            Key: "in",
            OauthToken: "odio",
            PrettyPrint: false,
            QuotaUser: "ipsam",
            TestID: "facere",
            UploadType: "repellendus",
            UploadProtocol: "aliquid",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "quo",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "nihil",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "et",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "velit",
                },
                CloudSQLInstance: "facere",
                GkeMasterCluster: "numquam",
                Instance: "et",
                IPAddress: "dolor",
                Network: "et",
                NetworkType: "GCP_NETWORK",
                Port: 7474912460289985426,
                ProjectID: "sit",
            },
            Labels: map[string]string{
                "illum": "et",
                "at": "rerum",
            },
            Name: "asperiores",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "PROBING_ABORT_CAUSE_UNSPECIFIED",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "dolorem",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "totam",
                    DestinationNetworkURI: "suscipit",
                    DestinationPort: 1486398947064006535,
                    Protocol: "facere",
                    SourceAgentURI: "et",
                    SourceIP: "voluptas",
                    SourceNetworkURI: "dicta",
                    SourcePort: 4007692296035145867,
                },
                Error: &shared.Status{
                    Code: 5871626182699634335,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "ea": "pariatur",
                        },
                        map[string]interface{}{
                            "voluptatibus": "saepe",
                        },
                    },
                    Message: "beatae",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "eveniet",
                            Percent: 3878018562079187265,
                        },
                    },
                },
                Result: "REACHABILITY_INCONSISTENT",
                SentProbeCount: 5389154542438195396,
                SuccessfulProbeCount: 1309104963060985054,
                VerifyTime: "quia",
            },
            Protocol: "non",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 3773125752805152147,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "esse": "distinctio",
                            "ipsam": "molestiae",
                            "dolorem": "esse",
                        },
                        map[string]interface{}{
                            "non": "suscipit",
                            "similique": "vel",
                        },
                        map[string]interface{}{
                            "provident": "ducimus",
                            "ea": "quaerat",
                        },
                    },
                    Message: "rerum",
                },
                Result: "RESULT_UNSPECIFIED",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "sapiente",
                            DestinationNetworkURI: "voluptates",
                            DestinationPort: 9048330780894816929,
                            Protocol: "earum",
                            SourceAgentURI: "non",
                            SourceIP: "praesentium",
                            SourceNetworkURI: "maxime",
                            SourcePort: 3978552581117283843,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "NO_EXTERNAL_IP",
                                    ProjectsMissingPermission: []string{
                                        "dolores",
                                    },
                                    ResourceURI: "quia",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "ex",
                                    Environment: "aliquid",
                                    Runtime: "aliquid",
                                    URI: "nesciunt",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "molestias",
                                    Location: "maiores",
                                    URI: "qui",
                                    VersionID: "voluptatem",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "itaque",
                                    Location: "est",
                                    ServiceName: "optio",
                                    ServiceURI: "consectetur",
                                    URI: "id",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "ab",
                                    ExternalIP: "ab",
                                    InternalIP: "qui",
                                    NetworkURI: "eum",
                                    Region: "numquam",
                                    URI: "ut",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "aut",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                Description: "incidunt",
                                Drop: &shared.DropInfo{
                                    Cause: "PSC_CONNECTION_NOT_ACCEPTED",
                                    ResourceURI: "sint",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "et",
                                    DestinationNetworkURI: "officia",
                                    DestinationPort: 6367645579123277970,
                                    Protocol: "inventore",
                                    SourceAgentURI: "soluta",
                                    SourceIP: "quia",
                                    SourceNetworkURI: "fugiat",
                                    SourcePort: 9055824927754207746,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "repellat",
                                    Direction: "eum",
                                    DisplayName: "quasi",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "minima",
                                    Policy: "saepe",
                                    Priority: 6799224384682378931,
                                    TargetServiceAccounts: []string{
                                        "quo",
                                        "omnis",
                                        "ex",
                                    },
                                    TargetTags: []string{
                                        "corrupti",
                                        "voluptates",
                                    },
                                    URI: "sunt",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "ipsam",
                                    Target: "GKE_MASTER",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "vel",
                                    MatchedPortRange: "et",
                                    MatchedProtocol: "cum",
                                    NetworkURI: "maiores",
                                    Target: "et",
                                    URI: "voluptatem",
                                    Vip: "sapiente",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "voluptatum",
                                    ClusterURI: "aliquam",
                                    ExternalIP: "ut",
                                    InternalIP: "consectetur",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "minima",
                                    ExternalIP: "laudantium",
                                    Interface: "rerum",
                                    InternalIP: "aut",
                                    NetworkTags: []string{
                                        "rerum",
                                        "reprehenderit",
                                        "nobis",
                                    },
                                    NetworkURI: "repudiandae",
                                    ServiceAccount: "dolorem",
                                    URI: "occaecati",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "ducimus",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "et",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ipsam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "qui",
                                                "necessitatibus",
                                                "voluptas",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "quisquam",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "esse",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "rerum",
                                                "repellat",
                                                "voluptatem",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "qui",
                                                "quos",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "sunt",
                                        },
                                    },
                                    HealthCheckURI: "maiores",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "id",
                                    MatchedIPRange: "eligendi",
                                    URI: "tenetur",
                                },
                                ProjectID: "et",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "consectetur",
                                    DestPortRanges: []string{
                                        "quas",
                                        "consequuntur",
                                    },
                                    DisplayName: "et",
                                    InstanceTags: []string{
                                        "voluptatem",
                                        "earum",
                                    },
                                    NetworkURI: "quibusdam",
                                    NextHop: "velit",
                                    NextHopType: "NEXT_HOP_BLACKHOLE",
                                    Priority: 3057975202466959259,
                                    Protocols: []string{
                                        "et",
                                        "accusamus",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "accusamus",
                                    SrcPortRanges: []string{
                                        "iste",
                                    },
                                    URI: "et",
                                },
                                State: "NAT",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "possimus",
                                    Location: "eos",
                                    URI: "porro",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "quaerat",
                                    IPAddress: "explicabo",
                                    NetworkURI: "perspiciatis",
                                    Region: "atque",
                                    URI: "quidem",
                                    VpnTunnelURI: "qui",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "suscipit",
                                    NetworkURI: "maiores",
                                    Region: "sed",
                                    RemoteGateway: "vitae",
                                    RemoteGatewayIP: "mollitia",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "voluptatem",
                                    SourceGatewayIP: "dolor",
                                    URI: "labore",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "INTERNAL_ERROR",
                                    ProjectsMissingPermission: []string{
                                        "animi",
                                        "possimus",
                                    },
                                    ResourceURI: "laborum",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "maiores",
                                    Environment: "nobis",
                                    Runtime: "id",
                                    URI: "at",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "et",
                                    Location: "quasi",
                                    URI: "sint",
                                    VersionID: "vel",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "culpa",
                                    Location: "fuga",
                                    ServiceName: "et",
                                    ServiceURI: "cumque",
                                    URI: "debitis",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "optio",
                                    ExternalIP: "commodi",
                                    InternalIP: "placeat",
                                    NetworkURI: "nihil",
                                    Region: "quia",
                                    URI: "saepe",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "voluptas",
                                    Target: "GKE_MASTER",
                                },
                                Description: "earum",
                                Drop: &shared.DropInfo{
                                    Cause: "INSTANCE_NOT_RUNNING",
                                    ResourceURI: "quia",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "nam",
                                    DestinationNetworkURI: "in",
                                    DestinationPort: 4267405350723073573,
                                    Protocol: "et",
                                    SourceAgentURI: "nisi",
                                    SourceIP: "aspernatur",
                                    SourceNetworkURI: "et",
                                    SourcePort: 3766016014891718208,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "nobis",
                                    Direction: "ex",
                                    DisplayName: "repellat",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "voluptatibus",
                                    Policy: "consequatur",
                                    Priority: 782149683674065337,
                                    TargetServiceAccounts: []string{
                                        "in",
                                    },
                                    TargetTags: []string{
                                        "adipisci",
                                    },
                                    URI: "provident",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "maxime",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "sunt",
                                    MatchedPortRange: "quaerat",
                                    MatchedProtocol: "omnis",
                                    NetworkURI: "et",
                                    Target: "sed",
                                    URI: "dolorum",
                                    Vip: "numquam",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "nostrum",
                                    ClusterURI: "aut",
                                    ExternalIP: "autem",
                                    InternalIP: "harum",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "veritatis",
                                    ExternalIP: "in",
                                    Interface: "totam",
                                    InternalIP: "aut",
                                    NetworkTags: []string{
                                        "temporibus",
                                    },
                                    NetworkURI: "molestias",
                                    ServiceAccount: "fugit",
                                    URI: "quae",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "voluptate",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "pariatur",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "itaque",
                                                "quos",
                                                "assumenda",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "id",
                                                "et",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "sint",
                                        },
                                    },
                                    HealthCheckURI: "quo",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "magnam",
                                    MatchedIPRange: "quis",
                                    URI: "doloremque",
                                },
                                ProjectID: "sit",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "ratione",
                                    DestPortRanges: []string{
                                        "distinctio",
                                        "ut",
                                    },
                                    DisplayName: "et",
                                    InstanceTags: []string{
                                        "voluptate",
                                    },
                                    NetworkURI: "quo",
                                    NextHop: "corporis",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 2838845698748661087,
                                    Protocols: []string{
                                        "vel",
                                        "incidunt",
                                    },
                                    RouteType: "SUBNET",
                                    SrcIPRange: "incidunt",
                                    SrcPortRanges: []string{
                                        "aut",
                                        "odio",
                                    },
                                    URI: "ipsam",
                                },
                                State: "ARRIVE_AT_VPC_CONNECTOR",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "similique",
                                    Location: "est",
                                    URI: "optio",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "dolor",
                                    IPAddress: "voluptatum",
                                    NetworkURI: "dolore",
                                    Region: "itaque",
                                    URI: "hic",
                                    VpnTunnelURI: "velit",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "ad",
                                    NetworkURI: "esse",
                                    Region: "sit",
                                    RemoteGateway: "similique",
                                    RemoteGatewayIP: "reprehenderit",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "saepe",
                                    SourceGatewayIP: "tempora",
                                    URI: "harum",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "aut",
                            DestinationNetworkURI: "dignissimos",
                            DestinationPort: 5419928639108021462,
                            Protocol: "et",
                            SourceAgentURI: "eveniet",
                            SourceIP: "qui",
                            SourceNetworkURI: "ut",
                            SourcePort: 2439242324817047891,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_IP_VERSION",
                                    ProjectsMissingPermission: []string{
                                        "alias",
                                        "animi",
                                        "atque",
                                    },
                                    ResourceURI: "dolore",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "voluptatem",
                                    Environment: "est",
                                    Runtime: "quo",
                                    URI: "ipsam",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "tempora",
                                    Location: "voluptatibus",
                                    URI: "corporis",
                                    VersionID: "ex",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "voluptatem",
                                    Location: "est",
                                    ServiceName: "dolorem",
                                    ServiceURI: "qui",
                                    URI: "maxime",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "consequatur",
                                    ExternalIP: "quaerat",
                                    InternalIP: "amet",
                                    NetworkURI: "ullam",
                                    Region: "adipisci",
                                    URI: "culpa",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "sit",
                                    Target: "INSTANCE",
                                },
                                Description: "aliquam",
                                Drop: &shared.DropInfo{
                                    Cause: "PRIVATE_GOOGLE_ACCESS_DISALLOWED",
                                    ResourceURI: "dolorum",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "eum",
                                    DestinationNetworkURI: "consequatur",
                                    DestinationPort: 3263665173629000651,
                                    Protocol: "hic",
                                    SourceAgentURI: "facilis",
                                    SourceIP: "molestiae",
                                    SourceNetworkURI: "et",
                                    SourcePort: 2663639040805923516,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "culpa",
                                    Direction: "error",
                                    DisplayName: "nostrum",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "voluptate",
                                    Policy: "dolore",
                                    Priority: 4196622254287554681,
                                    TargetServiceAccounts: []string{
                                        "saepe",
                                        "illum",
                                    },
                                    TargetTags: []string{
                                        "atque",
                                        "cupiditate",
                                        "ipsum",
                                    },
                                    URI: "ut",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "et",
                                    Target: "ANOTHER_PROJECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "assumenda",
                                    MatchedPortRange: "non",
                                    MatchedProtocol: "mollitia",
                                    NetworkURI: "sed",
                                    Target: "ducimus",
                                    URI: "quo",
                                    Vip: "id",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "enim",
                                    ClusterURI: "quia",
                                    ExternalIP: "sit",
                                    InternalIP: "impedit",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "error",
                                    ExternalIP: "et",
                                    Interface: "autem",
                                    InternalIP: "quasi",
                                    NetworkTags: []string{
                                        "dolorum",
                                        "incidunt",
                                        "tenetur",
                                    },
                                    NetworkURI: "quasi",
                                    ServiceAccount: "animi",
                                    URI: "non",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_TYPE_UNSPECIFIED",
                                    BackendURI: "non",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "velit",
                                                "sed",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "non",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "quia",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sint",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ea",
                                                "quia",
                                                "pariatur",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quidem",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "quam",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "cum",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aut",
                                                "pariatur",
                                                "voluptas",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "vitae",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "rerum",
                                        },
                                    },
                                    HealthCheckURI: "rerum",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "soluta",
                                    MatchedIPRange: "enim",
                                    URI: "dolores",
                                },
                                ProjectID: "eos",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "sunt",
                                    DestPortRanges: []string{
                                        "illum",
                                        "dolores",
                                    },
                                    DisplayName: "dolor",
                                    InstanceTags: []string{
                                        "in",
                                    },
                                    NetworkURI: "facere",
                                    NextHop: "tempore",
                                    NextHopType: "NEXT_HOP_INTERNET_GATEWAY",
                                    Priority: 1502012250273769560,
                                    Protocols: []string{
                                        "quidem",
                                        "totam",
                                        "unde",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "et",
                                    SrcPortRanges: []string{
                                        "temporibus",
                                        "blanditiis",
                                    },
                                    URI: "iure",
                                },
                                State: "ARRIVE_AT_EXTERNAL_LOAD_BALANCER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "iste",
                                    Location: "aut",
                                    URI: "maxime",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "dignissimos",
                                    IPAddress: "ipsam",
                                    NetworkURI: "voluptatem",
                                    Region: "error",
                                    URI: "et",
                                    VpnTunnelURI: "qui",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "voluptatibus",
                                    NetworkURI: "praesentium",
                                    Region: "hic",
                                    RemoteGateway: "magni",
                                    RemoteGatewayIP: "aut",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "a",
                                    SourceGatewayIP: "aliquam",
                                    URI: "nihil",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "exercitationem",
            },
            RelatedProjects: []string{
                "sunt",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "sit",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "ut",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "quo",
                },
                CloudSQLInstance: "minus",
                GkeMasterCluster: "est",
                Instance: "beatae",
                IPAddress: "animi",
                Network: "quibusdam",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 2669512404719852363,
                ProjectID: "consequatur",
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