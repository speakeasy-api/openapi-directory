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
        DollarXgafv: "2",
        ConnectivityTestInput: &shared.ConnectivityTestInput{
            Description: "provident",
            Destination: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "https://terrible-nutrient.org",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "https://that-hellcat.name",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://high-hound.biz",
                },
                CloudSQLInstance: "debitis",
                ForwardingRule: "ipsa",
                GkeMasterCluster: "delectus",
                Instance: "tempora",
                IPAddress: "suscipit",
                Network: "molestiae",
                NetworkType: "NON_GCP_NETWORK",
                Port: 812169,
                ProjectID: "voluptatum",
            },
            Labels: map[string]string{
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
            Name: "ab",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "PERMISSION_DENIED",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "veritatis",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "deserunt",
                    DestinationNetworkURI: "perferendis",
                    DestinationPort: 368241,
                    Protocol: "repellendus",
                    SourceAgentURI: "sapiente",
                    SourceIP: "quo",
                    SourceNetworkURI: "odit",
                    SourcePort: 870013,
                },
                Error: &shared.Status{
                    Code: 870088,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "quod": "quod",
                            "esse": "totam",
                        },
                        map[string]interface{}{
                            "dolorum": "dicta",
                            "nam": "officia",
                            "occaecati": "fugit",
                            "deleniti": "hic",
                        },
                        map[string]interface{}{
                            "totam": "beatae",
                            "commodi": "molestiae",
                            "modi": "qui",
                            "impedit": "cum",
                        },
                        map[string]interface{}{
                            "ipsum": "excepturi",
                            "aspernatur": "perferendis",
                        },
                    },
                    Message: "ad",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "sed",
                            Percent: 612096,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "dolor",
                            Percent: 616934,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "laboriosam",
                            Percent: 943749,
                        },
                    },
                },
                Result: "UNDETERMINED",
                SentProbeCount: 681820,
                SuccessfulProbeCount: 449950,
                VerifyTime: "corporis",
            },
            Protocol: "iste",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 437032,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "architecto": "ipsa",
                            "reiciendis": "est",
                            "mollitia": "laborum",
                        },
                        map[string]interface{}{
                            "dolorem": "corporis",
                        },
                        map[string]interface{}{
                            "nobis": "enim",
                        },
                        map[string]interface{}{
                            "nemo": "minima",
                            "excepturi": "accusantium",
                            "iure": "culpa",
                        },
                    },
                    Message: "doloribus",
                },
                Result: "UNDETERMINED",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "mollitia",
                            DestinationNetworkURI: "dolorem",
                            DestinationPort: 635059,
                            Protocol: "consequuntur",
                            SourceAgentURI: "repellat",
                            SourceIP: "mollitia",
                            SourceNetworkURI: "occaecati",
                            SourcePort: 253291,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "velit",
                                        "error",
                                    },
                                    ResourceURI: "quia",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "quis",
                                    Environment: "vitae",
                                    Runtime: "laborum",
                                    URI: "https://frozen-catch.net",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "sequi",
                                    Location: "tenetur",
                                    URI: "http://pushy-snuggle.com",
                                    VersionID: "quasi",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "error",
                                    Location: "temporibus",
                                    ServiceName: "laborum",
                                    ServiceURI: "quasi",
                                    URI: "https://witty-swim.info",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "praesentium",
                                    ExternalIP: "voluptatibus",
                                    InternalIP: "ipsa",
                                    NetworkURI: "omnis",
                                    Region: "voluptate",
                                    URI: "https://agile-arch-rival.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "ut",
                                    Target: "SERVERLESS_NEG",
                                },
                                Description: "dicta",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_NO_INSTANCES",
                                    ResourceURI: "dolore",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "iusto",
                                    DestinationNetworkURI: "dicta",
                                    DestinationPort: 688661,
                                    Protocol: "enim",
                                    SourceAgentURI: "accusamus",
                                    SourceIP: "commodi",
                                    SourceNetworkURI: "repudiandae",
                                    SourcePort: 64147,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "ipsum",
                                    Direction: "quidem",
                                    DisplayName: "molestias",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "pariatur",
                                    Policy: "modi",
                                    Priority: 508969,
                                    TargetServiceAccounts: []string{
                                        "voluptates",
                                        "quasi",
                                        "repudiandae",
                                    },
                                    TargetTags: []string{
                                        "veritatis",
                                        "itaque",
                                        "incidunt",
                                    },
                                    URI: "http://acrobatic-plantation.org",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "explicabo",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "distinctio",
                                    MatchedPortRange: "quibusdam",
                                    MatchedProtocol: "labore",
                                    NetworkURI: "modi",
                                    Target: "qui",
                                    URI: "http://offensive-melody.com",
                                    Vip: "magni",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "assumenda",
                                    ClusterURI: "ipsam",
                                    ExternalIP: "alias",
                                    InternalIP: "fugit",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "dolorum",
                                    ExternalIP: "excepturi",
                                    Interface: "tempora",
                                    InternalIP: "facilis",
                                    NetworkTags: []string{
                                        "labore",
                                        "delectus",
                                        "eum",
                                    },
                                    NetworkURI: "non",
                                    ServiceAccount: "eligendi",
                                    URI: "https://humming-networking.org",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "officia",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "debitis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolorum",
                                                "in",
                                                "in",
                                                "illum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "rerum",
                                                "dicta",
                                                "magnam",
                                                "cumque",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://humming-police.org",
                                        },
                                    },
                                    HealthCheckURI: "non",
                                    LoadBalancerType: "HTTP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "enim",
                                    MatchedIPRange: "accusamus",
                                    URI: "https://repentant-nectar.net",
                                },
                                ProjectID: "id",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "blanditiis",
                                    DestPortRanges: []string{
                                        "sapiente",
                                        "amet",
                                        "deserunt",
                                    },
                                    DisplayName: "nisi",
                                    InstanceTags: []string{
                                        "natus",
                                        "omnis",
                                    },
                                    NetworkURI: "molestiae",
                                    NextHop: "perferendis",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 301575,
                                    Protocols: []string{
                                        "id",
                                        "labore",
                                        "labore",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "natus",
                                    SrcPortRanges: []string{
                                        "eum",
                                        "vero",
                                        "aspernatur",
                                    },
                                    URI: "http://foolhardy-bolero.name",
                                },
                                State: "APPLY_INGRESS_FIREWALL_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "provident",
                                    Location: "quos",
                                    URI: "https://angelic-pharmacist.org",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "mollitia",
                                    IPAddress: "ad",
                                    NetworkURI: "eum",
                                    Region: "dolor",
                                    URI: "https://conventional-frequency.com",
                                    VpnTunnelURI: "iure",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "doloribus",
                                    NetworkURI: "debitis",
                                    Region: "eius",
                                    RemoteGateway: "maxime",
                                    RemoteGatewayIP: "deleniti",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "in",
                                    SourceGatewayIP: "architecto",
                                    URI: "http://vacant-flexibility.net",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "quibusdam",
                                        "sed",
                                        "saepe",
                                        "pariatur",
                                    },
                                    ResourceURI: "accusantium",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "consequuntur",
                                    Environment: "praesentium",
                                    Runtime: "natus",
                                    URI: "http://cloudy-screwdriver.org",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "pariatur",
                                    Location: "maxime",
                                    URI: "http://nimble-caution.info",
                                    VersionID: "accusantium",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ab",
                                    Location: "maiores",
                                    ServiceName: "quidem",
                                    ServiceURI: "ipsam",
                                    URI: "http://impolite-rat.com",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "pariatur",
                                    ExternalIP: "nemo",
                                    InternalIP: "voluptatibus",
                                    NetworkURI: "perferendis",
                                    Region: "fugiat",
                                    URI: "http://adept-sailing.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "hic",
                                    Target: "PSC_GOOGLE_API",
                                },
                                Description: "nobis",
                                Drop: &shared.DropInfo{
                                    Cause: "ROUTE_WRONG_NETWORK",
                                    ResourceURI: "quis",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "totam",
                                    DestinationNetworkURI: "dignissimos",
                                    DestinationPort: 54338,
                                    Protocol: "quis",
                                    SourceAgentURI: "nesciunt",
                                    SourceIP: "eos",
                                    SourceNetworkURI: "perferendis",
                                    SourcePort: 170986,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "minus",
                                    Direction: "quam",
                                    DisplayName: "dolor",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "nostrum",
                                    Policy: "hic",
                                    Priority: 928082,
                                    TargetServiceAccounts: []string{
                                        "facilis",
                                        "perspiciatis",
                                        "voluptatem",
                                    },
                                    TargetTags: []string{
                                        "consequuntur",
                                        "blanditiis",
                                        "error",
                                        "eaque",
                                    },
                                    URI: "https://right-damage.org",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "earum",
                                    Target: "VPN_GATEWAY",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "iste",
                                    MatchedPortRange: "dolorum",
                                    MatchedProtocol: "deleniti",
                                    NetworkURI: "pariatur",
                                    Target: "provident",
                                    URI: "https://secret-wafer.biz",
                                    Vip: "quos",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "aliquid",
                                    ClusterURI: "dolorem",
                                    ExternalIP: "dolorem",
                                    InternalIP: "dolor",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "qui",
                                    ExternalIP: "ipsum",
                                    Interface: "hic",
                                    InternalIP: "excepturi",
                                    NetworkTags: []string{
                                        "voluptate",
                                        "dignissimos",
                                        "reiciendis",
                                    },
                                    NetworkURI: "amet",
                                    ServiceAccount: "dolorum",
                                    URI: "http://both-background.com",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "odio",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "accusamus",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "voluptatibus",
                                                "voluptas",
                                                "natus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "atque",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "https://best-respite.net",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "iusto",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolorum",
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                                "distinctio",
                                                "asperiores",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "http://jolly-pint.org",
                                        },
                                    },
                                    HealthCheckURI: "eius",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "perferendis",
                                    MatchedIPRange: "amet",
                                    URI: "https://uncomfortable-evocation.org",
                                },
                                ProjectID: "suscipit",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "deserunt",
                                    DestPortRanges: []string{
                                        "minima",
                                        "repellendus",
                                        "totam",
                                    },
                                    DisplayName: "similique",
                                    InstanceTags: []string{
                                        "at",
                                    },
                                    NetworkURI: "quaerat",
                                    NextHop: "tempora",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 798047,
                                    Protocols: []string{
                                        "qui",
                                        "dolorum",
                                        "a",
                                        "esse",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "iusto",
                                    SrcPortRanges: []string{
                                        "quisquam",
                                    },
                                    URI: "https://elliptical-rediscovery.org",
                                },
                                State: "START_FROM_CLOUD_FUNCTION",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "enim",
                                    Location: "dolorem",
                                    URI: "https://masculine-introduction.com",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "expedita",
                                    IPAddress: "neque",
                                    NetworkURI: "sed",
                                    Region: "vel",
                                    URI: "https://hasty-pen.info",
                                    VpnTunnelURI: "ipsum",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "incidunt",
                                    NetworkURI: "qui",
                                    Region: "cupiditate",
                                    RemoteGateway: "maxime",
                                    RemoteGatewayIP: "pariatur",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "dicta",
                                    SourceGatewayIP: "laborum",
                                    URI: "https://feisty-carnival.biz",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "distinctio",
            },
            RelatedProjects: []string{
                "aliquid",
                "quam",
                "molestias",
            },
            Source: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "https://delightful-cook.com",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "http://likely-camper.info",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://warlike-ankle.net",
                },
                CloudSQLInstance: "soluta",
                ForwardingRule: "nobis",
                GkeMasterCluster: "et",
                Instance: "saepe",
                IPAddress: "ipsum",
                Network: "veritatis",
                NetworkType: "NON_GCP_NETWORK",
                Port: 552193,
                ProjectID: "tempore",
            },
        },
        AccessToken: "cupiditate",
        Alt: "json",
        Callback: "delectus",
        Fields: "dolorem",
        Key: "dolore",
        OauthToken: "labore",
        Parent: "adipisci",
        PrettyPrint: false,
        QuotaUser: "dolorum",
        TestID: "architecto",
        UploadType: "quae",
        UploadProtocol: "aut",
    }

    ctx := context.Background()
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate(ctx, req, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity{
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