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
            Parent: "quas",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "proto",
            Callback: "rerum",
            Fields: "occaecati",
            Key: "iure",
            OauthToken: "voluptatem",
            PrettyPrint: false,
            QuotaUser: "perspiciatis",
            TestID: "qui",
            UploadType: "ab",
            UploadProtocol: "maxime",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "molestias",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "quia",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "amet",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "non",
                },
                CloudSQLInstance: "dignissimos",
                GkeMasterCluster: "quisquam",
                Instance: "nihil",
                IPAddress: "illo",
                Network: "tempore",
                NetworkType: "NON_GCP_NETWORK",
                Port: 2233041482023323714,
                ProjectID: "dolorem",
            },
            Labels: map[string]string{
                "pariatur": "inventore",
                "reiciendis": "quidem",
            },
            Name: "ut",
            Protocol: "eum",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 5784953783784128218,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "ad": "placeat",
                            "est": "necessitatibus",
                            "nulla": "necessitatibus",
                        },
                        map[string]interface{}{
                            "corporis": "voluptatem",
                        },
                        map[string]interface{}{
                            "fugit": "dolorum",
                            "praesentium": "totam",
                        },
                    },
                    Message: "voluptates",
                },
                Result: "AMBIGUOUS",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "ratione",
                            DestinationNetworkURI: "rerum",
                            DestinationPort: 3434140040730593016,
                            Protocol: "enim",
                            SourceIP: "distinctio",
                            SourceNetworkURI: "voluptatem",
                            SourcePort: 2180619842207098683,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_IP_VERSION",
                                    ProjectsMissingPermission: []string{
                                        "enim",
                                    },
                                    ResourceURI: "aperiam",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "dolor",
                                    Environment: "hic",
                                    Runtime: "sed",
                                    URI: "quisquam",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "deleniti",
                                    Location: "ut",
                                    URI: "quo",
                                    VersionID: "voluptatem",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "iure",
                                    Location: "porro",
                                    ServiceURI: "rem",
                                    URI: "fugiat",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "nihil",
                                    ExternalIP: "voluptatibus",
                                    InternalIP: "beatae",
                                    NetworkURI: "nobis",
                                    Region: "sit",
                                    URI: "ut",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "iusto",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                Description: "aliquam",
                                Drop: &shared.DropInfo{
                                    Cause: "GOOGLE_MANAGED_SERVICE_NO_PEERING",
                                    ResourceURI: "autem",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "dignissimos",
                                    DestinationNetworkURI: "impedit",
                                    DestinationPort: 4588591247940668785,
                                    Protocol: "sed",
                                    SourceIP: "facere",
                                    SourceNetworkURI: "corporis",
                                    SourcePort: 7509308858631046411,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "architecto",
                                    Direction: "nemo",
                                    DisplayName: "quos",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "mollitia",
                                    Policy: "ipsam",
                                    Priority: 4176275961616769381,
                                    TargetServiceAccounts: []string{
                                        "architecto",
                                        "minus",
                                        "nulla",
                                    },
                                    TargetTags: []string{
                                        "dignissimos",
                                        "cupiditate",
                                        "voluptates",
                                    },
                                    URI: "libero",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "mollitia",
                                    Target: "ANOTHER_PROJECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "eveniet",
                                    MatchedPortRange: "autem",
                                    MatchedProtocol: "sapiente",
                                    NetworkURI: "maxime",
                                    Target: "tempora",
                                    URI: "sunt",
                                    Vip: "temporibus",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "delectus",
                                    ClusterURI: "adipisci",
                                    ExternalIP: "cum",
                                    InternalIP: "ipsam",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "qui",
                                    ExternalIP: "quaerat",
                                    Interface: "et",
                                    InternalIP: "ex",
                                    NetworkTags: []string{
                                        "exercitationem",
                                        "debitis",
                                        "debitis",
                                    },
                                    NetworkURI: "eum",
                                    ServiceAccount: "possimus",
                                    URI: "enim",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "eligendi",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "sit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "unde",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "labore",
                                                "accusantium",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "sed",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "harum",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "aut",
                                                "consequatur",
                                                "iste",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "consequatur",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "a",
                                        },
                                    },
                                    HealthCheckURI: "ut",
                                    LoadBalancerType: "HTTP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "maxime",
                                    MatchedIPRange: "odio",
                                    URI: "temporibus",
                                },
                                ProjectID: "quia",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "dolorem",
                                    DestPortRanges: []string{
                                        "occaecati",
                                    },
                                    DisplayName: "ea",
                                    InstanceTags: []string{
                                        "nisi",
                                        "sint",
                                    },
                                    NetworkURI: "itaque",
                                    NextHop: "doloremque",
                                    NextHopType: "NEXT_HOP_IP",
                                    Priority: 1531065649725113112,
                                    Protocols: []string{
                                        "consequatur",
                                        "atque",
                                        "et",
                                    },
                                    RouteType: "STATIC",
                                    SrcIPRange: "qui",
                                    SrcPortRanges: []string{
                                        "sit",
                                    },
                                    URI: "accusamus",
                                },
                                State: "START_FROM_GKE_MASTER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "similique",
                                    Location: "quibusdam",
                                    URI: "et",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "assumenda",
                                    IPAddress: "consectetur",
                                    NetworkURI: "earum",
                                    Region: "quos",
                                    URI: "illo",
                                    VpnTunnelURI: "eligendi",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "quam",
                                    NetworkURI: "modi",
                                    Region: "at",
                                    RemoteGateway: "illum",
                                    RemoteGatewayIP: "unde",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "aperiam",
                                    SourceGatewayIP: "ipsam",
                                    URI: "vel",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_SOURCE_NETWORK",
                                    ProjectsMissingPermission: []string{
                                        "quod",
                                    },
                                    ResourceURI: "provident",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "facilis",
                                    Environment: "fuga",
                                    Runtime: "reiciendis",
                                    URI: "aut",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "eum",
                                    Location: "et",
                                    URI: "assumenda",
                                    VersionID: "ut",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "est",
                                    Location: "ut",
                                    ServiceURI: "eos",
                                    URI: "quas",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "beatae",
                                    ExternalIP: "cumque",
                                    InternalIP: "aliquid",
                                    NetworkURI: "culpa",
                                    Region: "accusantium",
                                    URI: "qui",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "est",
                                    Target: "PSC_PUBLISHED_SERVICE",
                                },
                                Description: "veniam",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS",
                                    ResourceURI: "amet",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "consequuntur",
                                    DestinationNetworkURI: "ad",
                                    DestinationPort: 6985733985065254468,
                                    Protocol: "sunt",
                                    SourceIP: "et",
                                    SourceNetworkURI: "aut",
                                    SourcePort: 3301332129576033385,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "aut",
                                    Direction: "voluptas",
                                    DisplayName: "accusamus",
                                    FirewallRuleType: "HIERARCHICAL_FIREWALL_POLICY_RULE",
                                    NetworkURI: "ut",
                                    Policy: "quod",
                                    Priority: 4718252859492518805,
                                    TargetServiceAccounts: []string{
                                        "eum",
                                        "quis",
                                        "nihil",
                                    },
                                    TargetTags: []string{
                                        "et",
                                        "temporibus",
                                    },
                                    URI: "occaecati",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "expedita",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "commodi",
                                    MatchedPortRange: "soluta",
                                    MatchedProtocol: "nobis",
                                    NetworkURI: "illo",
                                    Target: "blanditiis",
                                    URI: "voluptatem",
                                    Vip: "accusamus",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "adipisci",
                                    ClusterURI: "beatae",
                                    ExternalIP: "autem",
                                    InternalIP: "corporis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "sit",
                                    ExternalIP: "animi",
                                    Interface: "possimus",
                                    InternalIP: "ut",
                                    NetworkTags: []string{
                                        "nostrum",
                                        "expedita",
                                        "aspernatur",
                                    },
                                    NetworkURI: "recusandae",
                                    ServiceAccount: "fugiat",
                                    URI: "non",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "et",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "qui",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "laborum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "eum",
                                                "dolore",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "recusandae",
                                        },
                                    },
                                    HealthCheckURI: "aliquid",
                                    LoadBalancerType: "HTTP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "maxime",
                                    MatchedIPRange: "at",
                                    URI: "accusantium",
                                },
                                ProjectID: "voluptatibus",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "ut",
                                    DestPortRanges: []string{
                                        "nesciunt",
                                        "quisquam",
                                        "et",
                                    },
                                    DisplayName: "tempore",
                                    InstanceTags: []string{
                                        "quasi",
                                    },
                                    NetworkURI: "quos",
                                    NextHop: "minima",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 8032793475605582005,
                                    Protocols: []string{
                                        "dolor",
                                        "rerum",
                                        "amet",
                                    },
                                    RouteType: "SUBNET",
                                    SrcIPRange: "non",
                                    SrcPortRanges: []string{
                                        "eius",
                                        "ducimus",
                                    },
                                    URI: "illo",
                                },
                                State: "APPLY_EGRESS_FIREWALL_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "cum",
                                    Location: "ipsa",
                                    URI: "suscipit",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "nihil",
                                    IPAddress: "dignissimos",
                                    NetworkURI: "voluptatum",
                                    Region: "sed",
                                    URI: "iure",
                                    VpnTunnelURI: "quos",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "porro",
                                    NetworkURI: "est",
                                    Region: "nobis",
                                    RemoteGateway: "quibusdam",
                                    RemoteGatewayIP: "assumenda",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "voluptas",
                                    SourceGatewayIP: "repudiandae",
                                    URI: "in",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "NO_SOURCE_LOCATION",
                                    ProjectsMissingPermission: []string{
                                        "delectus",
                                        "sunt",
                                        "inventore",
                                    },
                                    ResourceURI: "fugiat",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "optio",
                                    Environment: "veritatis",
                                    Runtime: "natus",
                                    URI: "quae",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "sequi",
                                    Location: "quia",
                                    URI: "accusantium",
                                    VersionID: "iste",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "maxime",
                                    Location: "quaerat",
                                    ServiceURI: "maxime",
                                    URI: "quae",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "optio",
                                    ExternalIP: "quod",
                                    InternalIP: "dolor",
                                    NetworkURI: "inventore",
                                    Region: "neque",
                                    URI: "sunt",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "culpa",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "blanditiis",
                                Drop: &shared.DropInfo{
                                    Cause: "GKE_CONTROL_PLANE_NO_ROUTE",
                                    ResourceURI: "officia",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "corporis",
                                    DestinationNetworkURI: "autem",
                                    DestinationPort: 2062896542521360649,
                                    Protocol: "rerum",
                                    SourceIP: "perspiciatis",
                                    SourceNetworkURI: "quibusdam",
                                    SourcePort: 3942352969971975134,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "aut",
                                    Direction: "non",
                                    DisplayName: "ea",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "incidunt",
                                    Policy: "debitis",
                                    Priority: 6149488419985030920,
                                    TargetServiceAccounts: []string{
                                        "dolorem",
                                    },
                                    TargetTags: []string{
                                        "cum",
                                        "dolor",
                                        "necessitatibus",
                                    },
                                    URI: "sit",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "omnis",
                                    Target: "VPN_GATEWAY",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "porro",
                                    MatchedPortRange: "corrupti",
                                    MatchedProtocol: "debitis",
                                    NetworkURI: "rerum",
                                    Target: "ut",
                                    URI: "occaecati",
                                    Vip: "quaerat",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "qui",
                                    ClusterURI: "dolor",
                                    ExternalIP: "similique",
                                    InternalIP: "quam",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "dolor",
                                    ExternalIP: "quo",
                                    Interface: "minus",
                                    InternalIP: "eum",
                                    NetworkTags: []string{
                                        "quibusdam",
                                    },
                                    NetworkURI: "ab",
                                    ServiceAccount: "aspernatur",
                                    URI: "et",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "veritatis",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "dignissimos",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sapiente",
                                                "non",
                                                "in",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quam",
                                                "impedit",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "quod",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "accusamus",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "numquam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "atque",
                                                "velit",
                                                "in",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "quae",
                                        },
                                    },
                                    HealthCheckURI: "aspernatur",
                                    LoadBalancerType: "HTTP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "ea",
                                    MatchedIPRange: "commodi",
                                    URI: "qui",
                                },
                                ProjectID: "aperiam",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "explicabo",
                                    DestPortRanges: []string{
                                        "laboriosam",
                                    },
                                    DisplayName: "et",
                                    InstanceTags: []string{
                                        "ut",
                                        "illo",
                                        "et",
                                    },
                                    NetworkURI: "sit",
                                    NextHop: "cupiditate",
                                    NextHopType: "NEXT_HOP_NETWORK",
                                    Priority: 7192645318736719558,
                                    Protocols: []string{
                                        "similique",
                                        "sit",
                                        "velit",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "repellendus",
                                    SrcPortRanges: []string{
                                        "dolorum",
                                        "eligendi",
                                    },
                                    URI: "ut",
                                },
                                State: "PROXY_CONNECTION",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "voluptatem",
                                    Location: "animi",
                                    URI: "voluptatem",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "eum",
                                    IPAddress: "non",
                                    NetworkURI: "eos",
                                    Region: "dolor",
                                    URI: "modi",
                                    VpnTunnelURI: "rerum",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "voluptatem",
                                    NetworkURI: "possimus",
                                    Region: "nesciunt",
                                    RemoteGateway: "incidunt",
                                    RemoteGatewayIP: "molestiae",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "suscipit",
                                    SourceGatewayIP: "soluta",
                                    URI: "est",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "corporis",
            },
            RelatedProjects: []string{
                "natus",
                "quae",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "laboriosam",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "qui",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "labore",
                },
                CloudSQLInstance: "non",
                GkeMasterCluster: "ullam",
                Instance: "quo",
                IPAddress: "commodi",
                Network: "voluptas",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 7191728301637773524,
                ProjectID: "et",
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