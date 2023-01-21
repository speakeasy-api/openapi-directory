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
            Parent: "sit",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            TestID: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "debitis",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "voluptatum",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "et",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "ut",
                },
                CloudSQLInstance: "dolorem",
                GkeMasterCluster: "et",
                Instance: "voluptate",
                IPAddress: "iste",
                Network: "vitae",
                NetworkType: "NON_GCP_NETWORK",
                Port: 2217592893536642650,
                ProjectID: "illum",
            },
            Labels: map[string]string{
                "vel": "odio",
            },
            Name: "dolore",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "PERMISSION_DENIED",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "aspernatur",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "accusantium",
                    DestinationNetworkURI: "totam",
                    DestinationPort: 6745438398739480977,
                    Protocol: "quis",
                    SourceAgentURI: "est",
                    SourceIP: "aut",
                    SourceNetworkURI: "odit",
                    SourcePort: 5001958211167890979,
                },
                Error: &shared.Status{
                    Code: 167566062957544642,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "illo": "sed",
                        },
                        map[string]interface{}{
                            "autem": "consectetur",
                            "nobis": "odio",
                        },
                    },
                    Message: "qui",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "at",
                            Percent: 3959279844101328186,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "eveniet",
                            Percent: 303089054982227392,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "sint",
                            Percent: 5392504858645185670,
                        },
                    },
                },
                Result: "UNDETERMINED",
                SentProbeCount: 406703151708498928,
                SuccessfulProbeCount: 4756106358532488297,
                VerifyTime: "reprehenderit",
            },
            Protocol: "tempore",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 2264299874001785192,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "beatae": "veritatis",
                            "in": "et",
                        },
                        map[string]interface{}{
                            "ipsum": "ex",
                            "dolores": "placeat",
                        },
                        map[string]interface{}{
                            "rerum": "mollitia",
                            "voluptas": "quam",
                        },
                    },
                    Message: "reprehenderit",
                },
                Result: "UNDETERMINED",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "unde",
                            DestinationNetworkURI: "in",
                            DestinationPort: 7132033595893905170,
                            Protocol: "qui",
                            SourceAgentURI: "ut",
                            SourceIP: "itaque",
                            SourceNetworkURI: "ab",
                            SourcePort: 8218430188258725598,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "esse",
                                        "architecto",
                                        "quam",
                                    },
                                    ResourceURI: "velit",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "cumque",
                                    Environment: "soluta",
                                    Runtime: "sunt",
                                    URI: "voluptates",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "et",
                                    Location: "optio",
                                    URI: "qui",
                                    VersionID: "earum",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "illo",
                                    Location: "omnis",
                                    ServiceName: "ut",
                                    ServiceURI: "consequatur",
                                    URI: "dolor",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "commodi",
                                    ExternalIP: "error",
                                    InternalIP: "reprehenderit",
                                    NetworkURI: "consectetur",
                                    Region: "nostrum",
                                    URI: "ut",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "laboriosam",
                                    Target: "INTERNET",
                                },
                                Description: "a",
                                Drop: &shared.DropInfo{
                                    Cause: "TRAFFIC_TYPE_BLOCKED",
                                    ResourceURI: "aut",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "quas",
                                    DestinationNetworkURI: "consequuntur",
                                    DestinationPort: 6521671820626549617,
                                    Protocol: "autem",
                                    SourceAgentURI: "ipsa",
                                    SourceIP: "expedita",
                                    SourceNetworkURI: "doloremque",
                                    SourcePort: 4234137922270959652,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "atque",
                                    Direction: "ratione",
                                    DisplayName: "quisquam",
                                    FirewallRuleType: "VPC_FIREWALL_RULE",
                                    NetworkURI: "ea",
                                    Policy: "maxime",
                                    Priority: 8392001091488039958,
                                    TargetServiceAccounts: []string{
                                        "et",
                                        "rerum",
                                    },
                                    TargetTags: []string{
                                        "quis",
                                        "cumque",
                                        "minima",
                                    },
                                    URI: "necessitatibus",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "est",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "eum",
                                    MatchedPortRange: "labore",
                                    MatchedProtocol: "et",
                                    NetworkURI: "impedit",
                                    Target: "ad",
                                    URI: "expedita",
                                    Vip: "vel",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "qui",
                                    ClusterURI: "modi",
                                    ExternalIP: "nihil",
                                    InternalIP: "tempora",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "deserunt",
                                    ExternalIP: "eaque",
                                    Interface: "sunt",
                                    InternalIP: "sit",
                                    NetworkTags: []string{
                                        "quis",
                                    },
                                    NetworkURI: "vel",
                                    ServiceAccount: "vel",
                                    URI: "placeat",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "nisi",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "adipisci",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "rerum",
                                                "et",
                                                "accusamus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "laborum",
                                                "rerum",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "laborum",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "fugit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minus",
                                                "soluta",
                                                "aperiam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "excepturi",
                                                "mollitia",
                                                "inventore",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "ipsa",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "animi",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ut",
                                                "aliquam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "sed",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "et",
                                        },
                                    },
                                    HealthCheckURI: "consequuntur",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "cupiditate",
                                    MatchedIPRange: "provident",
                                    URI: "molestiae",
                                },
                                ProjectID: "pariatur",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "quasi",
                                    DestPortRanges: []string{
                                        "enim",
                                        "qui",
                                        "sit",
                                    },
                                    DisplayName: "possimus",
                                    InstanceTags: []string{
                                        "neque",
                                        "consequuntur",
                                    },
                                    NetworkURI: "quia",
                                    NextHop: "et",
                                    NextHopType: "NEXT_HOP_TYPE_UNSPECIFIED",
                                    Priority: 6028661030721431741,
                                    Protocols: []string{
                                        "voluptatem",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "temporibus",
                                    SrcPortRanges: []string{
                                        "quae",
                                    },
                                    URI: "est",
                                },
                                State: "VIEWER_PERMISSION_MISSING",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "necessitatibus",
                                    Location: "in",
                                    URI: "possimus",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "voluptatem",
                                    IPAddress: "dolorum",
                                    NetworkURI: "doloribus",
                                    Region: "saepe",
                                    URI: "sunt",
                                    VpnTunnelURI: "earum",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "et",
                                    NetworkURI: "ut",
                                    Region: "asperiores",
                                    RemoteGateway: "et",
                                    RemoteGatewayIP: "est",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "quam",
                                    SourceGatewayIP: "voluptas",
                                    URI: "nihil",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "TRACE_TOO_LONG",
                                    ProjectsMissingPermission: []string{
                                        "impedit",
                                        "non",
                                    },
                                    ResourceURI: "magnam",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "ut",
                                    Environment: "possimus",
                                    Runtime: "illo",
                                    URI: "qui",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "ipsam",
                                    Location: "ducimus",
                                    URI: "enim",
                                    VersionID: "blanditiis",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "distinctio",
                                    Location: "delectus",
                                    ServiceName: "rerum",
                                    ServiceURI: "dolore",
                                    URI: "repellat",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "velit",
                                    ExternalIP: "officia",
                                    InternalIP: "modi",
                                    NetworkURI: "sunt",
                                    Region: "voluptas",
                                    URI: "amet",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "et",
                                    Target: "PSC_PUBLISHED_SERVICE",
                                },
                                Description: "qui",
                                Drop: &shared.DropInfo{
                                    Cause: "PSC_CONNECTION_NOT_ACCEPTED",
                                    ResourceURI: "autem",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "corporis",
                                    DestinationNetworkURI: "dicta",
                                    DestinationPort: 2561456965494580126,
                                    Protocol: "doloremque",
                                    SourceAgentURI: "quae",
                                    SourceIP: "nisi",
                                    SourceNetworkURI: "recusandae",
                                    SourcePort: 7110471015351200494,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "minus",
                                    Direction: "et",
                                    DisplayName: "rerum",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "rem",
                                    Policy: "eos",
                                    Priority: 4110169879782881404,
                                    TargetServiceAccounts: []string{
                                        "aspernatur",
                                        "praesentium",
                                        "porro",
                                    },
                                    TargetTags: []string{
                                        "adipisci",
                                    },
                                    URI: "consequatur",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "illum",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "atque",
                                    MatchedPortRange: "amet",
                                    MatchedProtocol: "nisi",
                                    NetworkURI: "quidem",
                                    Target: "est",
                                    URI: "quo",
                                    Vip: "vero",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "alias",
                                    ClusterURI: "totam",
                                    ExternalIP: "deserunt",
                                    InternalIP: "eius",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "repellat",
                                    ExternalIP: "beatae",
                                    Interface: "omnis",
                                    InternalIP: "totam",
                                    NetworkTags: []string{
                                        "et",
                                        "magni",
                                    },
                                    NetworkURI: "necessitatibus",
                                    ServiceAccount: "et",
                                    URI: "culpa",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "voluptas",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "veniam",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "molestias",
                                                "rerum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "et",
                                                "saepe",
                                                "commodi",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "quibusdam",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "asperiores",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ea",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "tempora",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "blanditiis",
                                        },
                                    },
                                    HealthCheckURI: "facere",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "et",
                                    MatchedIPRange: "odit",
                                    URI: "est",
                                },
                                ProjectID: "id",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "ipsum",
                                    DestPortRanges: []string{
                                        "perspiciatis",
                                    },
                                    DisplayName: "et",
                                    InstanceTags: []string{
                                        "voluptatem",
                                        "ex",
                                    },
                                    NetworkURI: "magni",
                                    NextHop: "vero",
                                    NextHopType: "NEXT_HOP_TYPE_UNSPECIFIED",
                                    Priority: 8141978658923475747,
                                    Protocols: []string{
                                        "non",
                                        "non",
                                    },
                                    RouteType: "POLICY_BASED",
                                    SrcIPRange: "beatae",
                                    SrcPortRanges: []string{
                                        "qui",
                                    },
                                    URI: "magni",
                                },
                                State: "DELIVER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "sit",
                                    Location: "aut",
                                    URI: "neque",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "iusto",
                                    IPAddress: "quia",
                                    NetworkURI: "repudiandae",
                                    Region: "debitis",
                                    URI: "autem",
                                    VpnTunnelURI: "odit",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "enim",
                                    NetworkURI: "ut",
                                    Region: "non",
                                    RemoteGateway: "nihil",
                                    RemoteGatewayIP: "laborum",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "nihil",
                                    SourceGatewayIP: "exercitationem",
                                    URI: "iste",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNKNOWN_NETWORK",
                                    ProjectsMissingPermission: []string{
                                        "autem",
                                        "hic",
                                        "voluptatem",
                                    },
                                    ResourceURI: "omnis",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "libero",
                                    Environment: "qui",
                                    Runtime: "omnis",
                                    URI: "minus",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "non",
                                    Location: "sit",
                                    URI: "repellat",
                                    VersionID: "quo",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "dolorum",
                                    Location: "laboriosam",
                                    ServiceName: "velit",
                                    ServiceURI: "ea",
                                    URI: "tempore",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "fugit",
                                    ExternalIP: "aut",
                                    InternalIP: "tempora",
                                    NetworkURI: "aliquid",
                                    Region: "mollitia",
                                    URI: "non",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "magni",
                                    Target: "INTERNET",
                                },
                                Description: "illum",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_MISMATCH",
                                    ResourceURI: "dolores",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "hic",
                                    DestinationNetworkURI: "nihil",
                                    DestinationPort: 1595294774483826936,
                                    Protocol: "ex",
                                    SourceAgentURI: "iure",
                                    SourceIP: "et",
                                    SourceNetworkURI: "quos",
                                    SourcePort: 6531361177861028646,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "explicabo",
                                    Direction: "necessitatibus",
                                    DisplayName: "veniam",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "in",
                                    Policy: "odit",
                                    Priority: 2552826169751964368,
                                    TargetServiceAccounts: []string{
                                        "tenetur",
                                    },
                                    TargetTags: []string{
                                        "similique",
                                        "mollitia",
                                    },
                                    URI: "id",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "laboriosam",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "maiores",
                                    MatchedPortRange: "totam",
                                    MatchedProtocol: "iusto",
                                    NetworkURI: "aperiam",
                                    Target: "repellendus",
                                    URI: "sunt",
                                    Vip: "eum",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "earum",
                                    ClusterURI: "et",
                                    ExternalIP: "officia",
                                    InternalIP: "aut",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "dolor",
                                    ExternalIP: "quia",
                                    Interface: "quaerat",
                                    InternalIP: "ea",
                                    NetworkTags: []string{
                                        "expedita",
                                        "recusandae",
                                        "qui",
                                    },
                                    NetworkURI: "qui",
                                    ServiceAccount: "aut",
                                    URI: "explicabo",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "temporibus",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sed",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "vel",
                                                "fugiat",
                                                "nesciunt",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "qui",
                                                "quis",
                                                "eligendi",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "fuga",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "aliquid",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aut",
                                                "et",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "sunt",
                                                "quae",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "vitae",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "rerum",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "commodi",
                                                "sed",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "enim",
                                                "eos",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "cum",
                                        },
                                    },
                                    HealthCheckURI: "sint",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "eaque",
                                    MatchedIPRange: "facilis",
                                    URI: "et",
                                },
                                ProjectID: "ut",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "et",
                                    DestPortRanges: []string{
                                        "sit",
                                    },
                                    DisplayName: "voluptate",
                                    InstanceTags: []string{
                                        "consequuntur",
                                        "et",
                                        "amet",
                                    },
                                    NetworkURI: "distinctio",
                                    NextHop: "in",
                                    NextHopType: "NEXT_HOP_NETWORK",
                                    Priority: 3636785156313008209,
                                    Protocols: []string{
                                        "et",
                                        "consequatur",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "sunt",
                                    SrcPortRanges: []string{
                                        "quam",
                                        "repellendus",
                                        "dolores",
                                    },
                                    URI: "nihil",
                                },
                                State: "NAT",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "architecto",
                                    Location: "architecto",
                                    URI: "beatae",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "consequatur",
                                    IPAddress: "veniam",
                                    NetworkURI: "hic",
                                    Region: "beatae",
                                    URI: "veritatis",
                                    VpnTunnelURI: "architecto",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "voluptas",
                                    NetworkURI: "voluptatibus",
                                    Region: "maiores",
                                    RemoteGateway: "consectetur",
                                    RemoteGatewayIP: "modi",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "praesentium",
                                    SourceGatewayIP: "itaque",
                                    URI: "ipsum",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "natus",
            },
            RelatedProjects: []string{
                "nesciunt",
                "nostrum",
                "quod",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "repudiandae",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "eius",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "totam",
                },
                CloudSQLInstance: "amet",
                GkeMasterCluster: "blanditiis",
                Instance: "unde",
                IPAddress: "nihil",
                Network: "asperiores",
                NetworkType: "GCP_NETWORK",
                Port: 2015984567592718565,
                ProjectID: "quo",
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
