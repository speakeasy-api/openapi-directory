# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/networkmanagement/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "corrupti",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            TestID: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "iure",
            Destination: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "http://unique-baboon.org",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "http://hideous-jam.net",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://menacing-jewellery.name",
                },
                CloudSQLInstance: "nisi",
                ForwardingRule: "recusandae",
                GkeMasterCluster: "temporibus",
                Instance: "ab",
                IPAddress: "quis",
                Network: "veritatis",
                NetworkType: "GCP_NETWORK",
                Port: 20218,
                ProjectID: "ipsam",
            },
            Labels: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            Name: "quod",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "PERMISSION_DENIED",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "totam",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "porro",
                    DestinationNetworkURI: "dolorum",
                    DestinationPort: 118274,
                    Protocol: "nam",
                    SourceAgentURI: "officia",
                    SourceIP: "occaecati",
                    SourceNetworkURI: "fugit",
                    SourcePort: 537373,
                },
                Error: &shared.Status{
                    Code: 944669,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "beatae": "commodi",
                            "molestiae": "modi",
                            "qui": "impedit",
                        },
                        map[string]interface{}{
                            "esse": "ipsum",
                            "excepturi": "aspernatur",
                            "perferendis": "ad",
                        },
                        map[string]interface{}{
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                        map[string]interface{}{
                            "fuga": "in",
                            "corporis": "iste",
                            "iure": "saepe",
                            "quidem": "architecto",
                        },
                    },
                    Message: "ipsa",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "est",
                            Percent: 653140,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "laborum",
                            Percent: 170909,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "dolorem",
                            Percent: 358152,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "explicabo",
                            Percent: 750686,
                        },
                    },
                },
                Result: "REACHABLE",
                SentProbeCount: 607831,
                SuccessfulProbeCount: 363711,
                VerifyTime: "minima",
            },
            Protocol: "excepturi",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 38425,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "doloribus": "sapiente",
                            "architecto": "mollitia",
                            "dolorem": "culpa",
                        },
                        map[string]interface{}{
                            "repellat": "mollitia",
                        },
                    },
                    Message: "occaecati",
                },
                Result: "REACHABLE",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "quam",
                            DestinationNetworkURI: "molestiae",
                            DestinationPort: 244425,
                            Protocol: "error",
                            SourceAgentURI: "quia",
                            SourceIP: "quis",
                            SourceNetworkURI: "vitae",
                            SourcePort: 674752,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "NO_SOURCE_LOCATION",
                                    ProjectsMissingPermission: []string{
                                        "quo",
                                    },
                                    ResourceURI: "sequi",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "tenetur",
                                    Environment: "ipsam",
                                    Runtime: "id",
                                    URI: "https://adolescent-borrower.name",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "temporibus",
                                    Location: "laborum",
                                    URI: "http://wilted-weight.org",
                                    VersionID: "nihil",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "praesentium",
                                    Location: "voluptatibus",
                                    ServiceName: "ipsa",
                                    ServiceURI: "omnis",
                                    URI: "http://shadowy-alfalfa.com",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "reprehenderit",
                                    ExternalIP: "ut",
                                    InternalIP: "maiores",
                                    NetworkURI: "dicta",
                                    Region: "corporis",
                                    URI: "http://lazy-butterfly.net",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "enim",
                                    Target: "PSC_VPC_SC",
                                },
                                Description: "commodi",
                                Drop: &shared.DropInfo{
                                    Cause: "VPC_CONNECTOR_NOT_RUNNING",
                                    ResourceURI: "quae",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "ipsum",
                                    DestinationNetworkURI: "quidem",
                                    DestinationPort: 565189,
                                    Protocol: "excepturi",
                                    SourceAgentURI: "pariatur",
                                    SourceIP: "modi",
                                    SourceNetworkURI: "praesentium",
                                    SourcePort: 523248,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "voluptates",
                                    Direction: "quasi",
                                    DisplayName: "repudiandae",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "veritatis",
                                    Policy: "itaque",
                                    Priority: 277718,
                                    TargetServiceAccounts: []string{
                                        "consequatur",
                                        "est",
                                    },
                                    TargetTags: []string{
                                        "explicabo",
                                        "deserunt",
                                        "distinctio",
                                        "quibusdam",
                                    },
                                    URI: "http://familiar-combination.info",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "cupiditate",
                                    Target: "GKE_MASTER",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "perferendis",
                                    MatchedPortRange: "magni",
                                    MatchedProtocol: "assumenda",
                                    NetworkURI: "ipsam",
                                    Target: "alias",
                                    URI: "http://rapid-moat.biz",
                                    Vip: "facilis",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "tempore",
                                    ClusterURI: "labore",
                                    ExternalIP: "delectus",
                                    InternalIP: "eum",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "non",
                                    ExternalIP: "eligendi",
                                    Interface: "sint",
                                    InternalIP: "aliquid",
                                    NetworkTags: []string{
                                        "necessitatibus",
                                        "sint",
                                        "officia",
                                    },
                                    NetworkURI: "dolor",
                                    ServiceAccount: "debitis",
                                    URI: "https://raw-icing.info",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "maiores",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "dicta",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cumque",
                                                "facere",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aliquid",
                                                "laborum",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://oblong-epoxy.org",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "delectus",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "provident",
                                                "nam",
                                                "id",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "deleniti",
                                                "sapiente",
                                                "amet",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "http://impressive-outfit.name",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "molestiae",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "nihil",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "distinctio",
                                                "id",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "http://hideous-ottoman.net",
                                        },
                                    },
                                    HealthCheckURI: "eum",
                                    LoadBalancerType: "SSL_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "aspernatur",
                                    MatchedIPRange: "architecto",
                                    URI: "http://brisk-mobile.info",
                                },
                                ProjectID: "provident",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "quos",
                                    DestPortRanges: []string{
                                        "accusantium",
                                        "mollitia",
                                        "reiciendis",
                                    },
                                    DisplayName: "mollitia",
                                    InstanceTags: []string{
                                        "eum",
                                        "dolor",
                                    },
                                    NetworkURI: "necessitatibus",
                                    NextHop: "odit",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 97260,
                                    Protocols: []string{
                                        "doloribus",
                                        "debitis",
                                    },
                                    RouteType: "STATIC",
                                    SrcIPRange: "maxime",
                                    SrcPortRanges: []string{
                                        "facilis",
                                        "in",
                                        "architecto",
                                    },
                                    URI: "http://vacant-flexibility.net",
                                },
                                State: "APPLY_FORWARDING_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "repellat",
                                    Location: "quibusdam",
                                    URI: "http://untimely-suicide.com",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "consequuntur",
                                    IPAddress: "praesentium",
                                    NetworkURI: "natus",
                                    Region: "magni",
                                    URI: "http://sore-statin.org",
                                    VpnTunnelURI: "maxime",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "ea",
                                    NetworkURI: "excepturi",
                                    Region: "odit",
                                    RemoteGateway: "ea",
                                    RemoteGatewayIP: "accusantium",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "maiores",
                                    SourceGatewayIP: "quidem",
                                    URI: "http://jealous-hearing.net",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "CAUSE_UNSPECIFIED",
                                    ProjectsMissingPermission: []string{
                                        "nemo",
                                        "voluptatibus",
                                        "perferendis",
                                        "fugiat",
                                    },
                                    ResourceURI: "amet",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "aut",
                                    Environment: "cumque",
                                    Runtime: "corporis",
                                    URI: "https://secret-rhinoceros.biz",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "quis",
                                    Location: "totam",
                                    URI: "http://avaricious-feed.biz",
                                    VersionID: "eos",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "perferendis",
                                    Location: "dolores",
                                    ServiceName: "minus",
                                    ServiceURI: "quam",
                                    URI: "http://trusty-filter.org",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "recusandae",
                                    ExternalIP: "omnis",
                                    InternalIP: "facilis",
                                    NetworkURI: "perspiciatis",
                                    Region: "voluptatem",
                                    URI: "https://damp-laryngitis.name",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "eaque",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                Description: "rerum",
                                Drop: &shared.DropInfo{
                                    Cause: "NO_EXTERNAL_ADDRESS",
                                    ResourceURI: "asperiores",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "earum",
                                    DestinationNetworkURI: "modi",
                                    DestinationPort: 613966,
                                    Protocol: "dolorum",
                                    SourceAgentURI: "deleniti",
                                    SourceIP: "pariatur",
                                    SourceNetworkURI: "provident",
                                    SourcePort: 750844,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "libero",
                                    Direction: "delectus",
                                    DisplayName: "quaerat",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "aliquid",
                                    Policy: "dolorem",
                                    Priority: 209843,
                                    TargetServiceAccounts: []string{
                                        "qui",
                                    },
                                    TargetTags: []string{
                                        "hic",
                                    },
                                    URI: "https://shady-import.info",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "reiciendis",
                                    Target: "PEERING_VPC",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "dolorum",
                                    MatchedPortRange: "numquam",
                                    MatchedProtocol: "veritatis",
                                    NetworkURI: "ipsa",
                                    Target: "ipsa",
                                    URI: "http://likely-epauliere.org",
                                    Vip: "quidem",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "voluptatibus",
                                    ClusterURI: "voluptas",
                                    ExternalIP: "natus",
                                    InternalIP: "eos",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "atque",
                                    ExternalIP: "sit",
                                    Interface: "fugiat",
                                    InternalIP: "ab",
                                    NetworkTags: []string{
                                        "dolorum",
                                        "iusto",
                                        "voluptate",
                                    },
                                    NetworkURI: "dolorum",
                                    ServiceAccount: "deleniti",
                                    URI: "https://unlucky-quotation.org",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "ipsum",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "id",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "eius",
                                                "aspernatur",
                                                "perferendis",
                                                "amet",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "accusamus",
                                                "ad",
                                                "saepe",
                                                "suscipit",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "https://gaseous-spank.name",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "similique",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "at",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "tempora",
                                                "vel",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "https://dense-porcupine.org",
                                        },
                                    },
                                    HealthCheckURI: "esse",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "iusto",
                                    MatchedIPRange: "ipsum",
                                    URI: "https://wavy-cuisine.net",
                                },
                                ProjectID: "accusamus",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "numquam",
                                    DestPortRanges: []string{
                                        "dolorem",
                                        "sapiente",
                                    },
                                    DisplayName: "totam",
                                    InstanceTags: []string{
                                        "sit",
                                        "expedita",
                                    },
                                    NetworkURI: "neque",
                                    NextHop: "sed",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 730442,
                                    Protocols: []string{
                                        "deserunt",
                                        "quam",
                                    },
                                    RouteType: "SUBNET",
                                    SrcIPRange: "incidunt",
                                    SrcPortRanges: []string{
                                        "cupiditate",
                                    },
                                    URI: "https://tough-reunion.com",
                                },
                                State: "ARRIVE_AT_VPN_TUNNEL",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "totam",
                                    Location: "incidunt",
                                    URI: "http://decisive-radiosonde.net",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "aliquid",
                                    IPAddress: "quam",
                                    NetworkURI: "molestias",
                                    Region: "temporibus",
                                    URI: "http://dirty-chain.com",
                                    VpnTunnelURI: "odio",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "sunt",
                                    NetworkURI: "ullam",
                                    Region: "nam",
                                    RemoteGateway: "hic",
                                    RemoteGatewayIP: "voluptatem",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "soluta",
                                    SourceGatewayIP: "nobis",
                                    URI: "http://untidy-cradle.com",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "DESTINATION_ENDPOINT_NOT_FOUND",
                                    ProjectsMissingPermission: []string{
                                        "tempore",
                                        "cupiditate",
                                        "aperiam",
                                    },
                                    ResourceURI: "delectus",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "dolorem",
                                    Environment: "dolore",
                                    Runtime: "labore",
                                    URI: "http://ragged-bowler.com",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "aut",
                                    Location: "quas",
                                    URI: "https://acrobatic-plea.net",
                                    VersionID: "porro",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "doloribus",
                                    Location: "ut",
                                    ServiceName: "facilis",
                                    ServiceURI: "cupiditate",
                                    URI: "http://beautiful-lifetime.info",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "occaecati",
                                    ExternalIP: "voluptatibus",
                                    InternalIP: "quisquam",
                                    NetworkURI: "vero",
                                    Region: "omnis",
                                    URI: "http://eager-vivo.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "consectetur",
                                    Target: "PSC_VPC_SC",
                                },
                                Description: "tenetur",
                                Drop: &shared.DropInfo{
                                    Cause: "TRAFFIC_TYPE_BLOCKED",
                                    ResourceURI: "hic",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "distinctio",
                                    DestinationNetworkURI: "quod",
                                    DestinationPort: 486160,
                                    Protocol: "similique",
                                    SourceAgentURI: "facilis",
                                    SourceIP: "vero",
                                    SourceNetworkURI: "ducimus",
                                    SourcePort: 293020,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "quibusdam",
                                    Direction: "illum",
                                    DisplayName: "sequi",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "impedit",
                                    Policy: "aut",
                                    Priority: 974259,
                                    TargetServiceAccounts: []string{
                                        "nulla",
                                        "fugit",
                                    },
                                    TargetTags: []string{
                                        "maiores",
                                        "doloribus",
                                        "iusto",
                                        "eligendi",
                                    },
                                    URI: "http://academic-path.biz",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "ipsam",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "aspernatur",
                                    MatchedPortRange: "vel",
                                    MatchedProtocol: "possimus",
                                    NetworkURI: "magnam",
                                    Target: "ratione",
                                    URI: "http://mad-caboose.biz",
                                    Vip: "maiores",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "quasi",
                                    ClusterURI: "ex",
                                    ExternalIP: "nulla",
                                    InternalIP: "excepturi",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "voluptatibus",
                                    ExternalIP: "nostrum",
                                    Interface: "sapiente",
                                    InternalIP: "quisquam",
                                    NetworkTags: []string{
                                        "ea",
                                        "impedit",
                                        "corporis",
                                        "veniam",
                                    },
                                    NetworkURI: "aliquid",
                                    ServiceAccount: "inventore",
                                    URI: "http://illegal-scholarship.biz",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "aspernatur",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "eaque",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "libero",
                                                "aut",
                                                "aut",
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aliquam",
                                                "fugit",
                                                "accusamus",
                                                "inventore",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "http://rapid-plum.net",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "velit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "autem",
                                                "nobis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "assumenda",
                                                "nulla",
                                                "voluptas",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://far-off-development.com",
                                        },
                                    },
                                    HealthCheckURI: "provident",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "molestiae",
                                    MatchedIPRange: "magnam",
                                    URI: "http://fair-infection.info",
                                },
                                ProjectID: "rem",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "fuga",
                                    DestPortRanges: []string{
                                        "quidem",
                                        "fugiat",
                                    },
                                    DisplayName: "ut",
                                    InstanceTags: []string{
                                        "suscipit",
                                        "assumenda",
                                    },
                                    NetworkURI: "eos",
                                    NextHop: "praesentium",
                                    NextHopType: "NEXT_HOP_BLACKHOLE",
                                    Priority: 86377,
                                    Protocols: []string{
                                        "id",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "neque",
                                    SrcPortRanges: []string{
                                        "illum",
                                        "quo",
                                        "fuga",
                                        "eius",
                                    },
                                    URI: "http://harsh-bass.name",
                                },
                                State: "STATE_UNSPECIFIED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "tempora",
                                    Location: "debitis",
                                    URI: "http://complete-consciousness.net",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "esse",
                                    IPAddress: "recusandae",
                                    NetworkURI: "aperiam",
                                    Region: "distinctio",
                                    URI: "https://linear-behalf.info",
                                    VpnTunnelURI: "totam",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "accusamus",
                                    NetworkURI: "aliquam",
                                    Region: "odio",
                                    RemoteGateway: "occaecati",
                                    RemoteGatewayIP: "commodi",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "dolores",
                                    SourceGatewayIP: "deserunt",
                                    URI: "http://anguished-sediment.info",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "quas",
                            DestinationNetworkURI: "praesentium",
                            DestinationPort: 159867,
                            Protocol: "deleniti",
                            SourceAgentURI: "fugit",
                            SourceIP: "fuga",
                            SourceNetworkURI: "mollitia",
                            SourcePort: 277596,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNKNOWN_IP",
                                    ProjectsMissingPermission: []string{
                                        "nisi",
                                        "fugit",
                                    },
                                    ResourceURI: "sapiente",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "consequuntur",
                                    Environment: "ratione",
                                    Runtime: "explicabo",
                                    URI: "https://nutty-markup.com",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "esse",
                                    Location: "eveniet",
                                    URI: "https://bony-infection.net",
                                    VersionID: "nam",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "vero",
                                    Location: "aliquid",
                                    ServiceName: "quasi",
                                    ServiceURI: "saepe",
                                    URI: "http://relieved-investigator.net",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "occaecati",
                                    ExternalIP: "minima",
                                    InternalIP: "distinctio",
                                    NetworkURI: "eligendi",
                                    Region: "sit",
                                    URI: "https://self-reliant-data.net",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "consequuntur",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "minus",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_MISMATCH",
                                    ResourceURI: "sapiente",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "consectetur",
                                    DestinationNetworkURI: "esse",
                                    DestinationPort: 503427,
                                    Protocol: "provident",
                                    SourceAgentURI: "a",
                                    SourceIP: "nulla",
                                    SourceNetworkURI: "quas",
                                    SourcePort: 457223,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "quasi",
                                    Direction: "a",
                                    DisplayName: "error",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "pariatur",
                                    Policy: "possimus",
                                    Priority: 157632,
                                    TargetServiceAccounts: []string{
                                        "asperiores",
                                        "facere",
                                        "veritatis",
                                        "consequuntur",
                                    },
                                    TargetTags: []string{
                                        "similique",
                                    },
                                    URI: "https://hurtful-vase.com",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "earum",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "in",
                                    MatchedPortRange: "eius",
                                    MatchedProtocol: "libero",
                                    NetworkURI: "illum",
                                    Target: "soluta",
                                    URI: "http://free-violet.com",
                                    Vip: "ullam",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "reprehenderit",
                                    ClusterURI: "ullam",
                                    ExternalIP: "nisi",
                                    InternalIP: "aut",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "voluptatum",
                                    ExternalIP: "qui",
                                    Interface: "quibusdam",
                                    InternalIP: "ex",
                                    NetworkTags: []string{
                                        "itaque",
                                        "dolorum",
                                        "architecto",
                                    },
                                    NetworkURI: "omnis",
                                    ServiceAccount: "tenetur",
                                    URI: "http://trifling-body.info",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_TYPE_UNSPECIFIED",
                                    BackendURI: "minima",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "consectetur",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "iste",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "accusantium",
                                                "rem",
                                                "aut",
                                                "laudantium",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "https://bewitched-marten.biz",
                                        },
                                    },
                                    HealthCheckURI: "voluptatem",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "occaecati",
                                    MatchedIPRange: "numquam",
                                    URI: "https://common-garage.com",
                                },
                                ProjectID: "dignissimos",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "dicta",
                                    DestPortRanges: []string{
                                        "natus",
                                        "velit",
                                        "voluptatibus",
                                        "voluptas",
                                    },
                                    DisplayName: "asperiores",
                                    InstanceTags: []string{
                                        "ea",
                                    },
                                    NetworkURI: "quaerat",
                                    NextHop: "consequuntur",
                                    NextHopType: "NEXT_HOP_BLACKHOLE",
                                    Priority: 638762,
                                    Protocols: []string{
                                        "dignissimos",
                                        "officia",
                                        "asperiores",
                                        "nemo",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "quaerat",
                                    SrcPortRanges: []string{
                                        "quod",
                                        "labore",
                                        "ab",
                                        "adipisci",
                                    },
                                    URI: "https://pushy-gender.biz",
                                },
                                State: "ARRIVE_AT_VPN_GATEWAY",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "est",
                                    Location: "recusandae",
                                    URI: "https://those-helo.info",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "quos",
                                    IPAddress: "vel",
                                    NetworkURI: "labore",
                                    Region: "possimus",
                                    URI: "https://shabby-harmonize.info",
                                    VpnTunnelURI: "corporis",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "reiciendis",
                                    NetworkURI: "assumenda",
                                    Region: "nemo",
                                    RemoteGateway: "recusandae",
                                    RemoteGatewayIP: "aliquid",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "cum",
                                    SourceGatewayIP: "consectetur",
                                    URI: "http://gray-twig.net",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "PERMISSION_DENIED",
                                    ProjectsMissingPermission: []string{
                                        "suscipit",
                                        "reiciendis",
                                        "quidem",
                                        "saepe",
                                    },
                                    ResourceURI: "necessitatibus",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "dolore",
                                    Environment: "sunt",
                                    Runtime: "asperiores",
                                    URI: "http://excellent-crystal.com",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "dignissimos",
                                    Location: "a",
                                    URI: "https://empty-foot.net",
                                    VersionID: "laboriosam",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ipsa",
                                    Location: "voluptates",
                                    ServiceName: "libero",
                                    ServiceURI: "vitae",
                                    URI: "https://plump-divan.com",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "voluptas",
                                    ExternalIP: "voluptas",
                                    InternalIP: "voluptas",
                                    NetworkURI: "minima",
                                    Region: "nobis",
                                    URI: "https://enraged-shelf.biz",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "blanditiis",
                                    Target: "GKE_MASTER",
                                },
                                Description: "dolore",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_MISMATCH",
                                    ResourceURI: "officiis",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "temporibus",
                                    DestinationNetworkURI: "ullam",
                                    DestinationPort: 237742,
                                    Protocol: "cum",
                                    SourceAgentURI: "blanditiis",
                                    SourceIP: "quas",
                                    SourceNetworkURI: "hic",
                                    SourcePort: 201517,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "culpa",
                                    Direction: "corrupti",
                                    DisplayName: "pariatur",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "hic",
                                    Policy: "exercitationem",
                                    Priority: 750765,
                                    TargetServiceAccounts: []string{
                                        "rerum",
                                    },
                                    TargetTags: []string{
                                        "reiciendis",
                                    },
                                    URI: "http://yellowish-punctuation.info",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "expedita",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "iste",
                                    MatchedPortRange: "dolore",
                                    MatchedProtocol: "laborum",
                                    NetworkURI: "sed",
                                    Target: "in",
                                    URI: "http://revolving-career.info",
                                    Vip: "unde",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "architecto",
                                    ClusterURI: "suscipit",
                                    ExternalIP: "sapiente",
                                    InternalIP: "debitis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "illo",
                                    ExternalIP: "reiciendis",
                                    Interface: "perferendis",
                                    InternalIP: "corrupti",
                                    NetworkTags: []string{
                                        "incidunt",
                                        "sed",
                                        "provident",
                                        "eius",
                                    },
                                    NetworkURI: "necessitatibus",
                                    ServiceAccount: "ipsum",
                                    URI: "http://obedient-medicine.org",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "tempora",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "reiciendis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sit",
                                                "non",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "praesentium",
                                                "facilis",
                                                "quaerat",
                                                "incidunt",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "https://mediocre-analgesia.net",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "error",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minima",
                                                "recusandae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "nulla",
                                                "magni",
                                                "aperiam",
                                                "saepe",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "http://international-tax.com",
                                        },
                                    },
                                    HealthCheckURI: "laudantium",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "praesentium",
                                    MatchedIPRange: "cum",
                                    URI: "http://recent-macaroon.name",
                                },
                                ProjectID: "hic",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "expedita",
                                    DestPortRanges: []string{
                                        "neque",
                                        "dolorum",
                                        "nostrum",
                                        "officia",
                                    },
                                    DisplayName: "dolorum",
                                    InstanceTags: []string{
                                        "accusamus",
                                        "tempora",
                                        "atque",
                                    },
                                    NetworkURI: "fugit",
                                    NextHop: "ut",
                                    NextHopType: "NEXT_HOP_ILB",
                                    Priority: 30235,
                                    Protocols: []string{
                                        "expedita",
                                        "magnam",
                                        "consequatur",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "ipsam",
                                    SrcPortRanges: []string{
                                        "voluptatum",
                                    },
                                    URI: "https://valid-forestry.com",
                                },
                                State: "SPOOFING_APPROVED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "ex",
                                    Location: "sed",
                                    URI: "http://impure-fibrosis.org",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "error",
                                    IPAddress: "consequatur",
                                    NetworkURI: "incidunt",
                                    Region: "reiciendis",
                                    URI: "http://remorseful-burglar.com",
                                    VpnTunnelURI: "occaecati",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "labore",
                                    NetworkURI: "quidem",
                                    Region: "atque",
                                    RemoteGateway: "laborum",
                                    RemoteGatewayIP: "nam",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "laboriosam",
                                    SourceGatewayIP: "alias",
                                    URI: "http://pretty-inch.name",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                                    ProjectsMissingPermission: []string{
                                        "repellendus",
                                        "delectus",
                                        "voluptates",
                                    },
                                    ResourceURI: "perferendis",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "est",
                                    Environment: "quidem",
                                    Runtime: "reprehenderit",
                                    URI: "https://reasonable-lever.name",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "veniam",
                                    Location: "voluptatem",
                                    URI: "https://vacant-borrowing.name",
                                    VersionID: "reprehenderit",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "asperiores",
                                    Location: "totam",
                                    ServiceName: "suscipit",
                                    ServiceURI: "quidem",
                                    URI: "https://bright-inhibition.biz",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "assumenda",
                                    ExternalIP: "ea",
                                    InternalIP: "atque",
                                    NetworkURI: "error",
                                    Region: "officiis",
                                    URI: "https://unacceptable-outfit.biz",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "aspernatur",
                                    Target: "GKE_MASTER",
                                },
                                Description: "maiores",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS",
                                    ResourceURI: "at",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "error",
                                    DestinationNetworkURI: "blanditiis",
                                    DestinationPort: 379356,
                                    Protocol: "repudiandae",
                                    SourceAgentURI: "atque",
                                    SourceIP: "atque",
                                    SourceNetworkURI: "sunt",
                                    SourcePort: 923306,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "dolorum",
                                    Direction: "repellendus",
                                    DisplayName: "labore",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "doloremque",
                                    Policy: "repudiandae",
                                    Priority: 116098,
                                    TargetServiceAccounts: []string{
                                        "beatae",
                                    },
                                    TargetTags: []string{
                                        "enim",
                                    },
                                    URI: "http://every-vengeance.name",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "magnam",
                                    Target: "ANOTHER_PROJECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "consequuntur",
                                    MatchedPortRange: "occaecati",
                                    MatchedProtocol: "officiis",
                                    NetworkURI: "perspiciatis",
                                    Target: "in",
                                    URI: "http://unusual-mouth.com",
                                    Vip: "fugit",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "id",
                                    ClusterURI: "quis",
                                    ExternalIP: "reprehenderit",
                                    InternalIP: "error",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "illo",
                                    ExternalIP: "corporis",
                                    Interface: "quidem",
                                    InternalIP: "eveniet",
                                    NetworkTags: []string{
                                        "vero",
                                    },
                                    NetworkURI: "doloremque",
                                    ServiceAccount: "iure",
                                    URI: "http://masculine-balaclava.info",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "qui",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "iure",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ratione",
                                                "laborum",
                                                "distinctio",
                                                "voluptatum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aliquam",
                                                "ad",
                                                "repellat",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "http://ordinary-interpretation.name",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "voluptas",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "maiores",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dolores",
                                                "id",
                                                "minima",
                                                "dolore",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://basic-traveler.name",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quaerat",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ex",
                                                "ut",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "adipisci",
                                                "debitis",
                                                "laudantium",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "http://verifiable-independent.name",
                                        },
                                    },
                                    HealthCheckURI: "quis",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "reiciendis",
                                    MatchedIPRange: "provident",
                                    URI: "http://grizzled-border.name",
                                },
                                ProjectID: "nostrum",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "mollitia",
                                    DestPortRanges: []string{
                                        "possimus",
                                        "animi",
                                        "ex",
                                    },
                                    DisplayName: "aliquid",
                                    InstanceTags: []string{
                                        "repellat",
                                    },
                                    NetworkURI: "doloribus",
                                    NextHop: "ullam",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 721407,
                                    Protocols: []string{
                                        "officia",
                                        "laborum",
                                        "placeat",
                                        "modi",
                                    },
                                    RouteType: "POLICY_BASED",
                                    SrcIPRange: "molestias",
                                    SrcPortRanges: []string{
                                        "sapiente",
                                        "cumque",
                                        "vitae",
                                        "rerum",
                                    },
                                    URI: "http://glistening-bike.com",
                                },
                                State: "NAT",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "quae",
                                    Location: "perferendis",
                                    URI: "http://concrete-homonym.biz",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "rem",
                                    IPAddress: "at",
                                    NetworkURI: "impedit",
                                    Region: "eos",
                                    URI: "https://infantile-bush.biz",
                                    VpnTunnelURI: "beatae",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "cupiditate",
                                    NetworkURI: "provident",
                                    Region: "earum",
                                    RemoteGateway: "soluta",
                                    RemoteGatewayIP: "hic",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "eaque",
                                    SourceGatewayIP: "earum",
                                    URI: "https://worried-teen.info",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "porro",
            },
            RelatedProjects: []string{
                "dolorem",
                "fugit",
            },
            Source: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "https://reasonable-completion.name",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "https://torn-addiction.com",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "http://lonely-outlaw.name",
                },
                CloudSQLInstance: "suscipit",
                ForwardingRule: "adipisci",
                GkeMasterCluster: "quasi",
                Instance: "magni",
                IPAddress: "doloribus",
                Network: "nulla",
                NetworkType: "NON_GCP_NETWORK",
                Port: 58534,
                ProjectID: "tempora",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate(ctx, req)
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
## SDK Available Operations


### Projects

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
* `NetworkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `NetworkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
