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
            Destination: &shared.Endpoint{
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
                GkeMasterCluster: "recusandae",
                Instance: "temporibus",
                IPAddress: "ab",
                Network: "quis",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 648172,
                ProjectID: "perferendis",
            },
            Labels: map[string]string{
                "repellendus": "sapiente",
                "quo": "odit",
            },
            Name: "at",
            Protocol: "at",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 978619,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "quod": "esse",
                            "totam": "porro",
                            "dolorum": "dicta",
                            "nam": "officia",
                        },
                        map[string]interface{}{
                            "fugit": "deleniti",
                            "hic": "optio",
                            "totam": "beatae",
                        },
                    },
                    Message: "commodi",
                },
                Result: "UNREACHABLE",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "qui",
                            DestinationNetworkURI: "impedit",
                            DestinationPort: 736918,
                            Protocol: "esse",
                            SourceIP: "ipsum",
                            SourceNetworkURI: "excepturi",
                            SourcePort: 135218,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "NO_SOURCE_LOCATION",
                                    ProjectsMissingPermission: []string{
                                        "sed",
                                        "iste",
                                        "dolor",
                                    },
                                    ResourceURI: "natus",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "laboriosam",
                                    Environment: "hic",
                                    Runtime: "saepe",
                                    URI: "https://itchy-forager.name",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "iure",
                                    Location: "saepe",
                                    URI: "https://burdensome-bail.org",
                                    VersionID: "est",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "mollitia",
                                    Location: "laborum",
                                    ServiceURI: "dolores",
                                    URI: "http://growing-cappelletti.net",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "enim",
                                    ExternalIP: "omnis",
                                    InternalIP: "nemo",
                                    NetworkURI: "minima",
                                    Region: "excepturi",
                                    URI: "http://insidious-parole.org",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "sapiente",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "mollitia",
                                Drop: &shared.DropInfo{
                                    Cause: "PRIVATE_TRAFFIC_TO_INTERNET",
                                    ResourceURI: "culpa",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "consequuntur",
                                    DestinationNetworkURI: "repellat",
                                    DestinationPort: 653108,
                                    Protocol: "occaecati",
                                    SourceIP: "numquam",
                                    SourceNetworkURI: "commodi",
                                    SourcePort: 466311,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "molestiae",
                                    Direction: "velit",
                                    DisplayName: "error",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "quis",
                                    Policy: "vitae",
                                    Priority: 674752,
                                    TargetServiceAccounts: []string{
                                        "enim",
                                        "odit",
                                        "quo",
                                    },
                                    TargetTags: []string{
                                        "tenetur",
                                    },
                                    URI: "http://pushy-snuggle.com",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "quasi",
                                    Target: "GKE_MASTER",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "temporibus",
                                    MatchedPortRange: "laborum",
                                    MatchedProtocol: "quasi",
                                    NetworkURI: "reiciendis",
                                    Target: "voluptatibus",
                                    URI: "https://klutzy-level.org",
                                    Vip: "ipsa",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "omnis",
                                    ClusterURI: "voluptate",
                                    ExternalIP: "cum",
                                    InternalIP: "perferendis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "doloremque",
                                    ExternalIP: "reprehenderit",
                                    Interface: "ut",
                                    InternalIP: "maiores",
                                    NetworkTags: []string{
                                        "corporis",
                                    },
                                    NetworkURI: "dolore",
                                    ServiceAccount: "iusto",
                                    URI: "http://reliable-evaluation.org",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "repudiandae",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "ipsum",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "molestias",
                                                "excepturi",
                                                "pariatur",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "praesentium",
                                                "rem",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://vain-moose.com",
                                        },
                                    },
                                    HealthCheckURI: "itaque",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "enim",
                                    MatchedIPRange: "consequatur",
                                    URI: "https://tender-carload.name",
                                },
                                ProjectID: "distinctio",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "quibusdam",
                                    DestPortRanges: []string{
                                        "modi",
                                        "qui",
                                    },
                                    DisplayName: "aliquid",
                                    InstanceTags: []string{
                                        "quos",
                                        "perferendis",
                                        "magni",
                                    },
                                    NetworkURI: "assumenda",
                                    NextHop: "ipsam",
                                    NextHopType: "NEXT_HOP_TYPE_UNSPECIFIED",
                                    Priority: 146441,
                                    Protocols: []string{
                                        "excepturi",
                                        "tempora",
                                        "facilis",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "labore",
                                    SrcPortRanges: []string{
                                        "eum",
                                        "non",
                                        "eligendi",
                                        "sint",
                                    },
                                    URI: "http://optimistic-tenth.name",
                                },
                                State: "ARRIVE_AT_VPN_GATEWAY",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "dolor",
                                    Location: "debitis",
                                    URI: "https://raw-icing.info",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "illum",
                                    IPAddress: "maiores",
                                    NetworkURI: "rerum",
                                    Region: "dicta",
                                    URI: "http://smoggy-sledge.info",
                                    VpnTunnelURI: "aliquid",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "laborum",
                                    NetworkURI: "accusamus",
                                    Region: "non",
                                    RemoteGateway: "occaecati",
                                    RemoteGatewayIP: "enim",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "delectus",
                                    SourceGatewayIP: "quidem",
                                    URI: "https://scornful-pike.name",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "deleniti",
                            DestinationNetworkURI: "sapiente",
                            DestinationPort: 230533,
                            Protocol: "deserunt",
                            SourceIP: "nisi",
                            SourceNetworkURI: "vel",
                            SourcePort: 618809,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "nihil",
                                    },
                                    ResourceURI: "magnam",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "distinctio",
                                    Environment: "id",
                                    Runtime: "labore",
                                    URI: "http://hideous-ottoman.net",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "eum",
                                    Location: "vero",
                                    URI: "http://buzzing-efficiency.com",
                                    VersionID: "excepturi",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ullam",
                                    Location: "provident",
                                    ServiceURI: "quos",
                                    URI: "https://angelic-pharmacist.org",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "mollitia",
                                    ExternalIP: "ad",
                                    InternalIP: "eum",
                                    NetworkURI: "dolor",
                                    Region: "necessitatibus",
                                    URI: "http://handy-borrowing.info",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "doloribus",
                                    Target: "PSC_VPC_SC",
                                },
                                Description: "eius",
                                Drop: &shared.DropInfo{
                                    Cause: "PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION",
                                    ResourceURI: "deleniti",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "facilis",
                                    DestinationNetworkURI: "in",
                                    DestinationPort: 100226,
                                    Protocol: "architecto",
                                    SourceIP: "repudiandae",
                                    SourceNetworkURI: "ullam",
                                    SourcePort: 714242,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "nihil",
                                    Direction: "repellat",
                                    DisplayName: "quibusdam",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "saepe",
                                    Policy: "pariatur",
                                    Priority: 37559,
                                    TargetServiceAccounts: []string{
                                        "praesentium",
                                    },
                                    TargetTags: []string{
                                        "magni",
                                        "sunt",
                                        "quo",
                                    },
                                    URI: "https://treasured-simple.info",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "excepturi",
                                    Target: "PEERING_VPC",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "ea",
                                    MatchedPortRange: "accusantium",
                                    MatchedProtocol: "ab",
                                    NetworkURI: "maiores",
                                    Target: "quidem",
                                    URI: "http://jealous-hearing.net",
                                    Vip: "eaque",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "pariatur",
                                    ClusterURI: "nemo",
                                    ExternalIP: "voluptatibus",
                                    InternalIP: "perferendis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "fugiat",
                                    ExternalIP: "amet",
                                    Interface: "aut",
                                    InternalIP: "cumque",
                                    NetworkTags: []string{
                                        "hic",
                                        "libero",
                                    },
                                    NetworkURI: "nobis",
                                    ServiceAccount: "dolores",
                                    URI: "http://mealy-kilometer.com",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "nesciunt",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "perferendis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dolor",
                                                "vero",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "https://verifiable-offence.net",
                                        },
                                    },
                                    HealthCheckURI: "perspiciatis",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "porro",
                                    MatchedIPRange: "consequuntur",
                                    URI: "https://petty-atom.name",
                                },
                                ProjectID: "rerum",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "adipisci",
                                    DestPortRanges: []string{
                                        "earum",
                                        "modi",
                                        "iste",
                                        "dolorum",
                                    },
                                    DisplayName: "deleniti",
                                    InstanceTags: []string{
                                        "provident",
                                        "nobis",
                                        "libero",
                                        "delectus",
                                    },
                                    NetworkURI: "quaerat",
                                    NextHop: "quos",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 212390,
                                    Protocols: []string{
                                        "dolor",
                                    },
                                    RouteType: "SUBNET",
                                    SrcIPRange: "ipsum",
                                    SrcPortRanges: []string{
                                        "excepturi",
                                        "cum",
                                        "voluptate",
                                        "dignissimos",
                                    },
                                    URI: "https://electric-porter.biz",
                                },
                                State: "START_FROM_INTERNET",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "ipsa",
                                    Location: "ipsa",
                                    URI: "http://likely-epauliere.org",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "quidem",
                                    IPAddress: "voluptatibus",
                                    NetworkURI: "voluptas",
                                    Region: "natus",
                                    URI: "http://monstrous-ambassador.org",
                                    VpnTunnelURI: "ab",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "soluta",
                                    NetworkURI: "dolorum",
                                    Region: "iusto",
                                    RemoteGateway: "voluptate",
                                    RemoteGatewayIP: "dolorum",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "omnis",
                                    SourceGatewayIP: "necessitatibus",
                                    URI: "https://wrong-intercourse.biz",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNINTENDED_DESTINATION",
                                    ProjectsMissingPermission: []string{
                                        "saepe",
                                        "eius",
                                        "aspernatur",
                                    },
                                    ResourceURI: "perferendis",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "amet",
                                    Environment: "optio",
                                    Runtime: "accusamus",
                                    URI: "http://untimely-gherkin.name",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "provident",
                                    Location: "minima",
                                    URI: "https://mature-pansy.com",
                                    VersionID: "at",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "quaerat",
                                    Location: "tempora",
                                    ServiceURI: "vel",
                                    URI: "https://uneven-commitment.net",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "a",
                                    ExternalIP: "esse",
                                    InternalIP: "harum",
                                    NetworkURI: "iusto",
                                    Region: "ipsum",
                                    URI: "https://wavy-cuisine.net",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "accusamus",
                                    Target: "INTERNET",
                                },
                                Description: "enim",
                                Drop: &shared.DropInfo{
                                    Cause: "PRIVATE_GOOGLE_ACCESS_DISALLOWED",
                                    ResourceURI: "sapiente",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "totam",
                                    DestinationNetworkURI: "nihil",
                                    DestinationPort: 25662,
                                    Protocol: "expedita",
                                    SourceIP: "neque",
                                    SourceNetworkURI: "sed",
                                    SourcePort: 424685,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "libero",
                                    Direction: "voluptas",
                                    DisplayName: "deserunt",
                                    FirewallRuleType: "VPC_FIREWALL_RULE",
                                    NetworkURI: "ipsum",
                                    Policy: "incidunt",
                                    Priority: 186458,
                                    TargetServiceAccounts: []string{
                                        "maxime",
                                        "pariatur",
                                        "soluta",
                                    },
                                    TargetTags: []string{
                                        "laborum",
                                    },
                                    URI: "https://feisty-carnival.biz",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "distinctio",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "aliquid",
                                    MatchedPortRange: "quam",
                                    MatchedProtocol: "molestias",
                                    NetworkURI: "temporibus",
                                    Target: "qui",
                                    URI: "http://coordinated-clan.info",
                                    Vip: "sunt",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "ullam",
                                    ClusterURI: "nam",
                                    ExternalIP: "hic",
                                    InternalIP: "voluptatem",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "cumque",
                                    ExternalIP: "soluta",
                                    Interface: "nobis",
                                    InternalIP: "et",
                                    NetworkTags: []string{
                                        "ipsum",
                                        "veritatis",
                                        "nobis",
                                        "quos",
                                    },
                                    NetworkURI: "tempore",
                                    ServiceAccount: "cupiditate",
                                    URI: "http://which-corporation.biz",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "adipisci",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "architecto",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aut",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "itaque",
                                                "consequatur",
                                                "est",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "https://worse-dragonfly.net",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "cupiditate",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "odio",
                                                "occaecati",
                                                "voluptatibus",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "https://overlooked-feature.biz",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "delectus",
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
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "https://rubbery-surname.info",
                                        },
                                    },
                                    HealthCheckURI: "dolore",
                                    LoadBalancerType: "SSL_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "illum",
                                    MatchedIPRange: "sequi",
                                    URI: "https://sociable-affidavit.org",
                                },
                                ProjectID: "exercitationem",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "nulla",
                                    DestPortRanges: []string{
                                        "porro",
                                    },
                                    DisplayName: "maiores",
                                    InstanceTags: []string{
                                        "iusto",
                                        "eligendi",
                                        "ducimus",
                                        "alias",
                                    },
                                    NetworkURI: "officia",
                                    NextHop: "tempora",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 410492,
                                    Protocols: []string{
                                        "vel",
                                    },
                                    RouteType: "PEERING_DYNAMIC",
                                    SrcIPRange: "magnam",
                                    SrcPortRanges: []string{
                                        "ex",
                                    },
                                    URI: "https://clear-cut-criteria.org",
                                },
                                State: "START_FROM_INTERNET",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "ex",
                                    Location: "nulla",
                                    URI: "https://winding-fifth.org",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "quisquam",
                                    IPAddress: "saepe",
                                    NetworkURI: "ea",
                                    Region: "impedit",
                                    URI: "http://glass-gray.com",
                                    VpnTunnelURI: "magnam",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "ea",
                                    NetworkURI: "quo",
                                    Region: "consectetur",
                                    RemoteGateway: "recusandae",
                                    RemoteGatewayIP: "aspernatur",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "eaque",
                                    SourceGatewayIP: "a",
                                    URI: "https://adolescent-advancement.name",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "DESTINATION_ENDPOINT_NOT_FOUND",
                                    ProjectsMissingPermission: []string{
                                        "fugit",
                                        "accusamus",
                                    },
                                    ResourceURI: "inventore",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "non",
                                    Environment: "et",
                                    Runtime: "dolorum",
                                    URI: "https://striped-deduce.info",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "autem",
                                    Location: "nobis",
                                    URI: "https://sweaty-stripe.info",
                                    VersionID: "libero",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "quasi",
                                    Location: "tempora",
                                    ServiceURI: "numquam",
                                    URI: "http://optimistic-avenue.info",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "magnam",
                                    ExternalIP: "odio",
                                    InternalIP: "eius",
                                    NetworkURI: "esse",
                                    Region: "esse",
                                    URI: "https://ready-hunting.net",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "fugiat",
                                    Target: "INTERNET",
                                },
                                Description: "eum",
                                Drop: &shared.DropInfo{
                                    Cause: "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK",
                                    ResourceURI: "assumenda",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "eos",
                                    DestinationNetworkURI: "praesentium",
                                    DestinationPort: 788546,
                                    Protocol: "veritatis",
                                    SourceIP: "ipsa",
                                    SourceNetworkURI: "id",
                                    SourcePort: 696997,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "neque",
                                    Direction: "quo",
                                    DisplayName: "illum",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "fuga",
                                    Policy: "eius",
                                    Priority: 178367,
                                    TargetServiceAccounts: []string{
                                        "ab",
                                        "cupiditate",
                                    },
                                    TargetTags: []string{
                                        "tempora",
                                    },
                                    URI: "https://hard-to-find-carrot.biz",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "quo",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "recusandae",
                                    MatchedPortRange: "aperiam",
                                    MatchedProtocol: "distinctio",
                                    NetworkURI: "quod",
                                    Target: "dignissimos",
                                    URI: "http://knobby-liver.org",
                                    Vip: "aliquam",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "odio",
                                    ClusterURI: "occaecati",
                                    ExternalIP: "commodi",
                                    InternalIP: "sapiente",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "dolores",
                                    ExternalIP: "deserunt",
                                    Interface: "molestiae",
                                    InternalIP: "accusantium",
                                    NetworkTags: []string{
                                        "eum",
                                        "quas",
                                        "praesentium",
                                        "consequuntur",
                                    },
                                    NetworkURI: "deleniti",
                                    ServiceAccount: "fugit",
                                    URI: "https://prickly-donor.name",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_TYPE_UNSPECIFIED",
                                    BackendURI: "minima",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "fugit",
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
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "https://bony-infection.net",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "nam",
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
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "https://sinful-analogy.name",
                                        },
                                    },
                                    HealthCheckURI: "tempore",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "cumque",
                                    MatchedIPRange: "consequuntur",
                                    URI: "http://staid-energy.org",
                                },
                                ProjectID: "consectetur",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "esse",
                                    DestPortRanges: []string{
                                        "provident",
                                        "a",
                                        "nulla",
                                    },
                                    DisplayName: "quas",
                                    InstanceTags: []string{
                                        "quasi",
                                        "a",
                                    },
                                    NetworkURI: "error",
                                    NextHop: "sint",
                                    NextHopType: "NEXT_HOP_ILB",
                                    Priority: 820767,
                                    Protocols: []string{
                                        "eveniet",
                                    },
                                    RouteType: "POLICY_BASED",
                                    SrcIPRange: "facere",
                                    SrcPortRanges: []string{
                                        "consequuntur",
                                    },
                                    URI: "http://pleasant-parenting.info",
                                },
                                State: "ABORT",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "quae",
                                    Location: "earum",
                                    URI: "http://ironclad-diaphragm.net",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "illum",
                                    IPAddress: "soluta",
                                    NetworkURI: "accusantium",
                                    Region: "aliquam",
                                    URI: "https://clear-fly.info",
                                    VpnTunnelURI: "ullam",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "nisi",
                                    NetworkURI: "aut",
                                    Region: "voluptatum",
                                    RemoteGateway: "qui",
                                    RemoteGatewayIP: "quibusdam",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "deleniti",
                                    SourceGatewayIP: "itaque",
                                    URI: "https://burly-official.org",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "quasi",
            },
            RelatedProjects: []string{
                "et",
                "voluptate",
                "ipsa",
                "minima",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "http://emotional-daikon.name",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "https://ancient-loggia.com",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://inconsequential-performance.com",
                },
                CloudSQLInstance: "corrupti",
                GkeMasterCluster: "non",
                Instance: "voluptatem",
                IPAddress: "dolor",
                Network: "occaecati",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 771089,
                ProjectID: "explicabo",
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
