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
            Destination: &shared.EndpointInput{
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
                ForwardingRule: sdk.String("ipsa"),
                GkeMasterCluster: sdk.String("delectus"),
                Instance: sdk.String("tempora"),
                IPAddress: sdk.String("suscipit"),
                Network: sdk.String("molestiae"),
                NetworkType: shared.EndpointNetworkTypeEnumNonGcpNetwork.ToPointer(),
                Port: sdk.Int(812169),
                ProjectID: sdk.String("voluptatum"),
            },
            Labels: map[string]string{
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
            Name: sdk.String("Erica Bogisich III"),
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: shared.ProbingDetailsAbortCauseEnumNoSourceLocation.ToPointer(),
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: sdk.String("sapiente"),
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: sdk.String("quo"),
                    DestinationNetworkURI: sdk.String("odit"),
                    DestinationPort: sdk.Int(870013),
                    Protocol: sdk.String("at"),
                    SourceAgentURI: sdk.String("maiores"),
                    SourceIP: sdk.String("molestiae"),
                    SourceNetworkURI: sdk.String("quod"),
                    SourcePort: sdk.Int(800911),
                },
                Error: &shared.Status{
                    Code: sdk.Int(461479),
                    Details: []map[string]interface{}{
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
                    Message: sdk.String("ad"),
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("sed"),
                            Percent: sdk.Int(612096),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("dolor"),
                            Percent: sdk.Int(616934),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("laboriosam"),
                            Percent: sdk.Int(943749),
                        },
                    },
                },
                Result: shared.ProbingDetailsResultEnumUndetermined.ToPointer(),
                SentProbeCount: sdk.Int(681820),
                SuccessfulProbeCount: sdk.Int(449950),
                VerifyTime: sdk.String("corporis"),
            },
            Protocol: sdk.String("iste"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(437032),
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
                    Message: sdk.String("doloribus"),
                },
                Result: shared.ReachabilityDetailsResultEnumUndetermined.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("mollitia"),
                            DestinationNetworkURI: sdk.String("dolorem"),
                            DestinationPort: sdk.Int(635059),
                            Protocol: sdk.String("consequuntur"),
                            SourceAgentURI: sdk.String("repellat"),
                            SourceIP: sdk.String("mollitia"),
                            SourceNetworkURI: sdk.String("occaecati"),
                            SourcePort: sdk.Int(253291),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnintendedDestination.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "velit",
                                        "error",
                                    },
                                    ResourceURI: sdk.String("quia"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("quis"),
                                    Environment: sdk.String("vitae"),
                                    Runtime: sdk.String("laborum"),
                                    URI: sdk.String("https://frozen-catch.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("sequi"),
                                    Location: sdk.String("tenetur"),
                                    URI: sdk.String("http://pushy-snuggle.com"),
                                    VersionID: sdk.String("quasi"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("error"),
                                    Location: sdk.String("temporibus"),
                                    ServiceName: sdk.String("laborum"),
                                    ServiceURI: sdk.String("quasi"),
                                    URI: sdk.String("https://witty-swim.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("praesentium"),
                                    ExternalIP: sdk.String("voluptatibus"),
                                    InternalIP: sdk.String("ipsa"),
                                    NetworkURI: sdk.String("omnis"),
                                    Region: sdk.String("voluptate"),
                                    URI: sdk.String("https://agile-arch-rival.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("ut"),
                                    Target: shared.DeliverInfoTargetEnumServerlessNeg.ToPointer(),
                                },
                                Description: sdk.String("dicta"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumForwardingRuleNoInstances.ToPointer(),
                                    ResourceURI: sdk.String("dolore"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("iusto"),
                                    DestinationNetworkURI: sdk.String("dicta"),
                                    DestinationPort: sdk.Int(688661),
                                    Protocol: sdk.String("enim"),
                                    SourceAgentURI: sdk.String("accusamus"),
                                    SourceIP: sdk.String("commodi"),
                                    SourceNetworkURI: sdk.String("repudiandae"),
                                    SourcePort: sdk.Int(64147),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("ipsum"),
                                    Direction: sdk.String("quidem"),
                                    DisplayName: sdk.String("molestias"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("pariatur"),
                                    Policy: sdk.String("modi"),
                                    Priority: sdk.Int(508969),
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
                                    URI: sdk.String("http://acrobatic-plantation.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("explicabo"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("distinctio"),
                                    MatchedPortRange: sdk.String("quibusdam"),
                                    MatchedProtocol: sdk.String("labore"),
                                    NetworkURI: sdk.String("modi"),
                                    Target: sdk.String("qui"),
                                    URI: sdk.String("http://offensive-melody.com"),
                                    Vip: sdk.String("magni"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("assumenda"),
                                    ClusterURI: sdk.String("ipsam"),
                                    ExternalIP: sdk.String("alias"),
                                    InternalIP: sdk.String("fugit"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("dolorum"),
                                    ExternalIP: sdk.String("excepturi"),
                                    Interface: sdk.String("tempora"),
                                    InternalIP: sdk.String("facilis"),
                                    NetworkTags: []string{
                                        "labore",
                                        "delectus",
                                        "eum",
                                    },
                                    NetworkURI: sdk.String("non"),
                                    ServiceAccount: sdk.String("eligendi"),
                                    URI: sdk.String("https://humming-networking.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("officia"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("debitis"),
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
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://humming-police.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("non"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumHTTPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("enim"),
                                    MatchedIPRange: sdk.String("accusamus"),
                                    URI: sdk.String("https://repentant-nectar.net"),
                                },
                                ProjectID: sdk.String("id"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("blanditiis"),
                                    DestPortRanges: []string{
                                        "sapiente",
                                        "amet",
                                        "deserunt",
                                    },
                                    DisplayName: sdk.String("nisi"),
                                    InstanceTags: []string{
                                        "natus",
                                        "omnis",
                                    },
                                    NetworkURI: sdk.String("molestiae"),
                                    NextHop: sdk.String("perferendis"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(301575),
                                    Protocols: []string{
                                        "id",
                                        "labore",
                                        "labore",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("natus"),
                                    SrcPortRanges: []string{
                                        "eum",
                                        "vero",
                                        "aspernatur",
                                    },
                                    URI: sdk.String("http://foolhardy-bolero.name"),
                                },
                                State: shared.StepStateEnumApplyIngressFirewallRule.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("provident"),
                                    Location: sdk.String("quos"),
                                    URI: sdk.String("https://angelic-pharmacist.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("mollitia"),
                                    IPAddress: sdk.String("ad"),
                                    NetworkURI: sdk.String("eum"),
                                    Region: sdk.String("dolor"),
                                    URI: sdk.String("https://conventional-frequency.com"),
                                    VpnTunnelURI: sdk.String("iure"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("doloribus"),
                                    NetworkURI: sdk.String("debitis"),
                                    Region: sdk.String("eius"),
                                    RemoteGateway: sdk.String("maxime"),
                                    RemoteGatewayIP: sdk.String("deleniti"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("in"),
                                    SourceGatewayIP: sdk.String("architecto"),
                                    URI: sdk.String("http://vacant-flexibility.net"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnintendedDestination.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "quibusdam",
                                        "sed",
                                        "saepe",
                                        "pariatur",
                                    },
                                    ResourceURI: sdk.String("accusantium"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("consequuntur"),
                                    Environment: sdk.String("praesentium"),
                                    Runtime: sdk.String("natus"),
                                    URI: sdk.String("http://cloudy-screwdriver.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("pariatur"),
                                    Location: sdk.String("maxime"),
                                    URI: sdk.String("http://nimble-caution.info"),
                                    VersionID: sdk.String("accusantium"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ab"),
                                    Location: sdk.String("maiores"),
                                    ServiceName: sdk.String("quidem"),
                                    ServiceURI: sdk.String("ipsam"),
                                    URI: sdk.String("http://impolite-rat.com"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("pariatur"),
                                    ExternalIP: sdk.String("nemo"),
                                    InternalIP: sdk.String("voluptatibus"),
                                    NetworkURI: sdk.String("perferendis"),
                                    Region: sdk.String("fugiat"),
                                    URI: sdk.String("http://adept-sailing.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("hic"),
                                    Target: shared.DeliverInfoTargetEnumPscGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("nobis"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumRouteWrongNetwork.ToPointer(),
                                    ResourceURI: sdk.String("quis"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("totam"),
                                    DestinationNetworkURI: sdk.String("dignissimos"),
                                    DestinationPort: sdk.Int(54338),
                                    Protocol: sdk.String("quis"),
                                    SourceAgentURI: sdk.String("nesciunt"),
                                    SourceIP: sdk.String("eos"),
                                    SourceNetworkURI: sdk.String("perferendis"),
                                    SourcePort: sdk.Int(170986),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("minus"),
                                    Direction: sdk.String("quam"),
                                    DisplayName: sdk.String("dolor"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("nostrum"),
                                    Policy: sdk.String("hic"),
                                    Priority: sdk.Int(928082),
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
                                    URI: sdk.String("https://right-damage.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("earum"),
                                    Target: shared.ForwardInfoTargetEnumVpnGateway.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("iste"),
                                    MatchedPortRange: sdk.String("dolorum"),
                                    MatchedProtocol: sdk.String("deleniti"),
                                    NetworkURI: sdk.String("pariatur"),
                                    Target: sdk.String("provident"),
                                    URI: sdk.String("https://secret-wafer.biz"),
                                    Vip: sdk.String("quos"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("aliquid"),
                                    ClusterURI: sdk.String("dolorem"),
                                    ExternalIP: sdk.String("dolorem"),
                                    InternalIP: sdk.String("dolor"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("qui"),
                                    ExternalIP: sdk.String("ipsum"),
                                    Interface: sdk.String("hic"),
                                    InternalIP: sdk.String("excepturi"),
                                    NetworkTags: []string{
                                        "voluptate",
                                        "dignissimos",
                                        "reiciendis",
                                    },
                                    NetworkURI: sdk.String("amet"),
                                    ServiceAccount: sdk.String("dolorum"),
                                    URI: sdk.String("http://both-background.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("odio"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("accusamus"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "voluptatibus",
                                                "voluptas",
                                                "natus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "atque",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://best-respite.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("iusto"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolorum",
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                                "distinctio",
                                                "asperiores",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://jolly-pint.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("eius"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("perferendis"),
                                    MatchedIPRange: sdk.String("amet"),
                                    URI: sdk.String("https://uncomfortable-evocation.org"),
                                },
                                ProjectID: sdk.String("suscipit"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("deserunt"),
                                    DestPortRanges: []string{
                                        "minima",
                                        "repellendus",
                                        "totam",
                                    },
                                    DisplayName: sdk.String("similique"),
                                    InstanceTags: []string{
                                        "at",
                                    },
                                    NetworkURI: sdk.String("quaerat"),
                                    NextHop: sdk.String("tempora"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(798047),
                                    Protocols: []string{
                                        "qui",
                                        "dolorum",
                                        "a",
                                        "esse",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("iusto"),
                                    SrcPortRanges: []string{
                                        "quisquam",
                                    },
                                    URI: sdk.String("https://elliptical-rediscovery.org"),
                                },
                                State: shared.StepStateEnumStartFromCloudFunction.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("enim"),
                                    Location: sdk.String("dolorem"),
                                    URI: sdk.String("https://masculine-introduction.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("expedita"),
                                    IPAddress: sdk.String("neque"),
                                    NetworkURI: sdk.String("sed"),
                                    Region: sdk.String("vel"),
                                    URI: sdk.String("https://hasty-pen.info"),
                                    VpnTunnelURI: sdk.String("ipsum"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("incidunt"),
                                    NetworkURI: sdk.String("qui"),
                                    Region: sdk.String("cupiditate"),
                                    RemoteGateway: sdk.String("maxime"),
                                    RemoteGatewayIP: sdk.String("pariatur"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("dicta"),
                                    SourceGatewayIP: sdk.String("laborum"),
                                    URI: sdk.String("https://feisty-carnival.biz"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("distinctio"),
            },
            RelatedProjects: []string{
                "aliquid",
                "quam",
                "molestias",
            },
            Source: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://delightful-cook.com"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("http://likely-camper.info"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://warlike-ankle.net"),
                },
                CloudSQLInstance: sdk.String("soluta"),
                ForwardingRule: sdk.String("nobis"),
                GkeMasterCluster: sdk.String("et"),
                Instance: sdk.String("saepe"),
                IPAddress: sdk.String("ipsum"),
                Network: sdk.String("veritatis"),
                NetworkType: shared.EndpointNetworkTypeEnumNonGcpNetwork.ToPointer(),
                Port: sdk.Int(552193),
                ProjectID: sdk.String("tempore"),
            },
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("labore"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        TestID: sdk.String("architecto"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
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
