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
            Protocol: "fugiat",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 957156,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "accusamus": "accusamus",
                        },
                        map[string]interface{}{
                            "rem": "quibusdam",
                            "et": "praesentium",
                            "occaecati": "dolor",
                            "soluta": "sed",
                        },
                        map[string]interface{}{
                            "rerum": "culpa",
                            "qui": "sed",
                            "rerum": "possimus",
                        },
                        map[string]interface{}{
                            "odit": "esse",
                            "rem": "voluptatem",
                            "amet": "est",
                        },
                    },
                    Message: "id",
                },
                Result: "UNREACHABLE",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "similique",
                            DestinationNetworkURI: "dolores",
                            DestinationPort: 18789,
                            Protocol: "quia",
                            SourceIP: "et",
                            SourceNetworkURI: "voluptatem",
                            SourcePort: 612096,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "SOURCE_ENDPOINT_NOT_FOUND",
                                    ProjectsMissingPermission: []string{
                                        "earum",
                                        "ut",
                                    },
                                    ResourceURI: "soluta",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "qui",
                                    Environment: "ea",
                                    Runtime: "laborum",
                                    URI: "http://sterling.net",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "aspernatur",
                                    Location: "inventore",
                                    URI: "https://manuel.name",
                                    VersionID: "libero",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ipsum",
                                    Location: "non",
                                    ServiceURI: "ea",
                                    URI: "http://nestor.biz",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "est",
                                    ExternalIP: "commodi",
                                    InternalIP: "quia",
                                    NetworkURI: "similique",
                                    Region: "eaque",
                                    URI: "http://lorenza.org",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "a",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "et",
                                Drop: &shared.DropInfo{
                                    Cause: "PRIVATE_TRAFFIC_TO_INTERNET",
                                    ResourceURI: "quidem",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "neque",
                                    DestinationNetworkURI: "asperiores",
                                    DestinationPort: 653108,
                                    Protocol: "culpa",
                                    SourceIP: "aliquam",
                                    SourceNetworkURI: "esse",
                                    SourcePort: 466311,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "voluptatum",
                                    Direction: "et",
                                    DisplayName: "fuga",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "laboriosam",
                                    Policy: "aut",
                                    Priority: 674752,
                                    TargetServiceAccounts: []string{
                                        "ipsam",
                                        "eos",
                                        "omnis",
                                    },
                                    TargetTags: []string{
                                        "hic",
                                    },
                                    URI: "http://makayla.net",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "perferendis",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "fuga",
                                    MatchedPortRange: "quo",
                                    MatchedProtocol: "tempore",
                                    NetworkURI: "explicabo",
                                    Target: "aut",
                                    URI: "https://shad.info",
                                    Vip: "molestias",
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: "reiciendis",
                                    ClusterURI: "illo",
                                    ExternalIP: "id",
                                    InternalIP: "qui",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "quod",
                                    ExternalIP: "sit",
                                    Interface: "eaque",
                                    InternalIP: "odio",
                                    NetworkTags: []string{
                                        "reiciendis",
                                        "sed",
                                    },
                                    NetworkURI: "ea",
                                    ServiceAccount: "exercitationem",
                                    URI: "http://blair.net",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "aut",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sint",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "numquam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "error",
                                                "similique",
                                                "et",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "https://juanita.org",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "explicabo",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "in",
                                                "vitae",
                                                "non",
                                                "minima",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aut",
                                                "libero",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "http://luther.net",
                                        },
                                    },
                                    HealthCheckURI: "voluptas",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "voluptatem",
                                    MatchedIPRange: "sit",
                                    URI: "http://kyleigh.name",
                                },
                                ProjectID: "voluptatem",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "dolorem",
                                    DestPortRanges: []string{
                                        "quis",
                                        "consequatur",
                                        "ratione",
                                        "cum",
                                    },
                                    DisplayName: "similique",
                                    InstanceTags: []string{
                                        "nihil",
                                        "id",
                                    },
                                    NetworkURI: "quis",
                                    NextHop: "sapiente",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 248753,
                                    Protocols: []string{
                                        "in",
                                        "qui",
                                        "deserunt",
                                        "eveniet",
                                    },
                                    RouteType: "PEERING_SUBNET",
                                    SrcIPRange: "rerum",
                                    SrcPortRanges: []string{
                                        "necessitatibus",
                                    },
                                    URI: "https://marilie.info",
                                },
                                State: "APPLY_FORWARDING_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "nulla",
                                    Location: "reiciendis",
                                    URI: "https://bettye.biz",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "voluptas",
                                    IPAddress: "vel",
                                    NetworkURI: "velit",
                                    Region: "qui",
                                    URI: "https://shaniya.biz",
                                    VpnTunnelURI: "culpa",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "enim",
                                    NetworkURI: "aut",
                                    Region: "delectus",
                                    RemoteGateway: "eligendi",
                                    RemoteGatewayIP: "officia",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "distinctio",
                                    SourceGatewayIP: "et",
                                    URI: "https://verla.biz",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "facilis",
            },
            RelatedProjects: []string{
                "nihil",
                "dolorum",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "https://jaron.com",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "http://elisha.net",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "https://edward.biz",
                },
                CloudSQLInstance: "eum",
                GkeMasterCluster: "et",
                Instance: "placeat",
                IPAddress: "molestiae",
                Network: "debitis",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 102863,
                ProjectID: "ullam",
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