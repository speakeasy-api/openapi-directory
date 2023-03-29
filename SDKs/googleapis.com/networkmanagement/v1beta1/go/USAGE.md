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
            Parent: "unde",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            TestID: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "iusto",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "http://sim.com",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "https://donny.info",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "http://pauline.net",
                },
                CloudSQLInstance: "non",
                GkeMasterCluster: "deleniti",
                Instance: "similique",
                IPAddress: "reprehenderit",
                Network: "molestiae",
                NetworkType: "NON_GCP_NETWORK",
                Port: 71036,
                ProjectID: "laboriosam",
            },
            Labels: map[string]string{
                "est": "voluptatem",
            },
            Name: "consequatur",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "NO_SOURCE_LOCATION",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "a",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "omnis",
                    DestinationNetworkURI: "eos",
                    DestinationPort: 870013,
                    Protocol: "accusamus",
                    SourceAgentURI: "reiciendis",
                    SourceIP: "rem",
                    SourceNetworkURI: "quibusdam",
                    SourcePort: 800911,
                },
                Error: &shared.Status{
                    Code: 461479,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "soluta": "sed",
                            "quisquam": "rerum",
                            "culpa": "qui",
                            "sed": "rerum",
                        },
                        map[string]interface{}{
                            "occaecati": "odit",
                            "esse": "rem",
                            "voluptatem": "amet",
                            "est": "id",
                        },
                        map[string]interface{}{
                            "numquam": "similique",
                            "dolores": "sit",
                        },
                    },
                    Message: "quia",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "voluptatem",
                            Percent: 612096,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "modi",
                            Percent: 616934,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "iure",
                            Percent: 943749,
                        },
                    },
                },
                Result: "UNDETERMINED",
                SentProbeCount: 681820,
                SuccessfulProbeCount: 449950,
                VerifyTime: "ea",
            },
            Protocol: "laborum",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 437032,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "aspernatur": "inventore",
                            "ut": "libero",
                            "et": "libero",
                        },
                        map[string]interface{}{
                            "non": "ea",
                        },
                        map[string]interface{}{
                            "placeat": "ipsam",
                        },
                        map[string]interface{}{
                            "commodi": "quia",
                            "similique": "eaque",
                            "odio": "harum",
                        },
                    },
                    Message: "doloribus",
                },
                Result: "UNDETERMINED",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "et",
                            DestinationNetworkURI: "non",
                            DestinationPort: 635059,
                            Protocol: "neque",
                            SourceAgentURI: "asperiores",
                            SourceIP: "et",
                            SourceNetworkURI: "culpa",
                            SourcePort: 253291,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "et",
                                        "fuga",
                                    },
                                    ResourceURI: "nesciunt",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "laboriosam",
                                    Environment: "aut",
                                    Runtime: "cum",
                                    URI: "https://emilia.com",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "omnis",
                                    Location: "adipisci",
                                    URI: "https://freida.name",
                                    VersionID: "qui",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "perferendis",
                                    Location: "aspernatur",
                                    ServiceName: "fuga",
                                    ServiceURI: "quo",
                                    URI: "https://austyn.org",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "reiciendis",
                                    ExternalIP: "debitis",
                                    InternalIP: "totam",
                                    NetworkURI: "molestias",
                                    Region: "reiciendis",
                                    URI: "http://lela.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "quod",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "eaque",
                                Drop: &shared.DropInfo{
                                    Cause: "GKE_CLUSTER_NOT_RUNNING",
                                    ResourceURI: "veniam",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "reiciendis",
                                    DestinationNetworkURI: "sed",
                                    DestinationPort: 359444,
                                    Protocol: "exercitationem",
                                    SourceAgentURI: "deleniti",
                                    SourceIP: "sed",
                                    SourceNetworkURI: "est",
                                    SourcePort: 317983,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "aut",
                                    Direction: "esse",
                                    DisplayName: "sint",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "numquam",
                                    Policy: "eligendi",
                                    Priority: 565189,
                                    TargetServiceAccounts: []string{
                                        "et",
                                        "ut",
                                        "molestias",
                                    },
                                    TargetTags: []string{
                                        "sint",
                                        "explicabo",
                                        "et",
                                    },
                                    URI: "https://arnoldo.org",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "minima",
                                    Target: "VPN_GATEWAY",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "aut",
                                    MatchedPortRange: "libero",
                                    MatchedProtocol: "voluptas",
                                    NetworkURI: "magni",
                                    Target: "est",
                                    URI: "https://ron.biz",
                                    Vip: "voluptatem",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "sit",
                                    ClusterURI: "in",
                                    ExternalIP: "officia",
                                    InternalIP: "omnis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "voluptatem",
                                    ExternalIP: "dolorem",
                                    Interface: "eum",
                                    InternalIP: "quis",
                                    NetworkTags: []string{
                                        "ratione",
                                    },
                                    NetworkURI: "cum",
                                    ServiceAccount: "similique",
                                    URI: "http://mckayla.net",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "sapiente",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "dolore",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "in",
                                                "qui",
                                                "deserunt",
                                                "eveniet",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "rerum",
                                                "modi",
                                                "necessitatibus",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "https://isac.info",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "nulla",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cumque",
                                                "fugit",
                                                "ullam",
                                                "voluptas",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "velit",
                                                "qui",
                                                "cum",
                                                "aut",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "https://elyssa.org",
                                        },
                                    },
                                    HealthCheckURI: "delectus",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "officia",
                                    MatchedIPRange: "est",
                                    URI: "https://jewel.name",
                                },
                                ProjectID: "a",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "incidunt",
                                    DestPortRanges: []string{
                                        "qui",
                                        "nihil",
                                        "dolorum",
                                    },
                                    DisplayName: "id",
                                    InstanceTags: []string{
                                        "sit",
                                        "rem",
                                    },
                                    NetworkURI: "corporis",
                                    NextHop: "porro",
                                    NextHopType: "NEXT_HOP_VPN_GATEWAY",
                                    Priority: 287991,
                                    Protocols: []string{
                                        "eum",
                                        "et",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "molestiae",
                                    SrcPortRanges: []string{
                                        "dolores",
                                        "aut",
                                        "ullam",
                                        "explicabo",
                                    },
                                    URI: "https://fidel.name",
                                },
                                State: "ARRIVE_AT_INSTANCE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "in",
                                    Location: "aperiam",
                                    URI: "https://vivienne.name",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "voluptatem",
                                    IPAddress: "et",
                                    NetworkURI: "modi",
                                    Region: "eveniet",
                                    URI: "http://fredy.com",
                                    VpnTunnelURI: "iusto",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "maiores",
                                    NetworkURI: "saepe",
                                    Region: "quaerat",
                                    RemoteGateway: "aut",
                                    RemoteGatewayIP: "sed",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "ducimus",
                                    SourceGatewayIP: "aspernatur",
                                    URI: "http://tessie.info",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_SOURCE_NETWORK",
                                    ProjectsMissingPermission: []string{
                                        "repellat",
                                        "voluptas",
                                    },
                                    ResourceURI: "voluptatem",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "et",
                                    Environment: "accusamus",
                                    Runtime: "eaque",
                                    URI: "http://joey.name",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "dolorem",
                                    Location: "quia",
                                    URI: "https://rosemary.org",
                                    VersionID: "consequatur",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "velit",
                                    Location: "similique",
                                    ServiceName: "eos",
                                    ServiceURI: "voluptate",
                                    URI: "http://annie.org",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "optio",
                                    ExternalIP: "quis",
                                    InternalIP: "qui",
                                    NetworkURI: "quam",
                                    Region: "quisquam",
                                    URI: "http://sammy.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "aut",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "vero",
                                Drop: &shared.DropInfo{
                                    Cause: "PRIVATE_GOOGLE_ACCESS_DISALLOWED",
                                    ResourceURI: "aut",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "voluptas",
                                    DestinationNetworkURI: "ea",
                                    DestinationPort: 944124,
                                    Protocol: "qui",
                                    SourceAgentURI: "placeat",
                                    SourceIP: "ipsum",
                                    SourceNetworkURI: "laboriosam",
                                    SourcePort: 521037,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "corrupti",
                                    Direction: "illo",
                                    DisplayName: "laboriosam",
                                    FirewallRuleType: "HIERARCHICAL_FIREWALL_POLICY_RULE",
                                    NetworkURI: "dolor",
                                    Policy: "sit",
                                    Priority: 170986,
                                    TargetServiceAccounts: []string{
                                        "laudantium",
                                        "modi",
                                        "officiis",
                                        "nisi",
                                    },
                                    TargetTags: []string{
                                        "non",
                                        "est",
                                        "nihil",
                                        "mollitia",
                                    },
                                    URI: "http://ottilie.com",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "et",
                                    Target: "GKE_MASTER",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "ab",
                                    MatchedPortRange: "in",
                                    MatchedProtocol: "cumque",
                                    NetworkURI: "labore",
                                    Target: "asperiores",
                                    URI: "https://dolly.name",
                                    Vip: "soluta",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "sed",
                                    ClusterURI: "et",
                                    ExternalIP: "officia",
                                    InternalIP: "placeat",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "qui",
                                    ExternalIP: "delectus",
                                    Interface: "enim",
                                    InternalIP: "iste",
                                    NetworkTags: []string{
                                        "non",
                                        "non",
                                    },
                                    NetworkURI: "modi",
                                    ServiceAccount: "amet",
                                    URI: "http://tyreek.name",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "qui",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "ut",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "soluta",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dicta",
                                                "inventore",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "http://jedidiah.biz",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "aut",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "reiciendis",
                                                "vel",
                                                "et",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "perspiciatis",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "https://annamae.net",
                                        },
                                    },
                                    HealthCheckURI: "soluta",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "qui",
                                    MatchedIPRange: "cum",
                                    URI: "https://lennie.org",
                                },
                                ProjectID: "quo",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "doloribus",
                                    DestPortRanges: []string{
                                        "eius",
                                        "blanditiis",
                                    },
                                    DisplayName: "nam",
                                    InstanceTags: []string{
                                        "voluptatem",
                                        "eos",
                                        "voluptatem",
                                        "incidunt",
                                    },
                                    NetworkURI: "possimus",
                                    NextHop: "aut",
                                    NextHopType: "NEXT_HOP_NETWORK",
                                    Priority: 904425,
                                    Protocols: []string{
                                        "facilis",
                                        "officia",
                                    },
                                    RouteType: "STATIC",
                                    SrcIPRange: "eum",
                                    SrcPortRanges: []string{
                                        "et",
                                        "alias",
                                        "officiis",
                                    },
                                    URI: "http://dorian.info",
                                },
                                State: "PROXY_CONNECTION",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "rerum",
                                    Location: "amet",
                                    URI: "https://veda.info",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "est",
                                    IPAddress: "atque",
                                    NetworkURI: "numquam",
                                    Region: "temporibus",
                                    URI: "https://daphnee.net",
                                    VpnTunnelURI: "aut",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "aliquam",
                                    NetworkURI: "ipsam",
                                    Region: "numquam",
                                    RemoteGateway: "a",
                                    RemoteGatewayIP: "occaecati",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "accusantium",
                                    SourceGatewayIP: "quo",
                                    URI: "http://candido.info",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "qui",
            },
            RelatedProjects: []string{
                "facilis",
                "laudantium",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "http://drew.biz",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "https://rafael.org",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://bill.net",
                },
                CloudSQLInstance: "sint",
                GkeMasterCluster: "ad",
                Instance: "magni",
                IPAddress: "quia",
                Network: "porro",
                NetworkType: "NON_GCP_NETWORK",
                Port: 396060,
                ProjectID: "laudantium",
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