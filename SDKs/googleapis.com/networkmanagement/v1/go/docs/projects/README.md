# Projects

### Available Operations

* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate](#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsList](#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch](#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun](#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [NetworkmanagementProjectsLocationsGlobalOperationsCancel](#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [NetworkmanagementProjectsLocationsGlobalOperationsDelete](#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [NetworkmanagementProjectsLocationsGlobalOperationsGet](#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [NetworkmanagementProjectsLocationsGlobalOperationsList](#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [NetworkmanagementProjectsLocationsList](#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectivityTestInput: &shared.ConnectivityTestInput{
            Description: sdk.String("officia"),
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://muddy-switching.biz"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://courteous-dramaturge.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("http://pointed-pusher.biz"),
                },
                CloudSQLInstance: sdk.String("consequatur"),
                GkeMasterCluster: sdk.String("esse"),
                Instance: sdk.String("ipsam"),
                IPAddress: sdk.String("sit"),
                Network: sdk.String("voluptatum"),
                NetworkType: shared.EndpointNetworkTypeEnumGcpNetwork.ToPointer(),
                Port: sdk.Int(922112),
                ProjectID: sdk.String("corporis"),
            },
            Labels: map[string]string{
                "blanditiis": "ex",
            },
            Name: sdk.String("Karen Kautzer"),
            Protocol: sdk.String("error"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(8511),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "dolorem": "harum",
                            "dicta": "architecto",
                            "occaecati": "labore",
                            "quidem": "atque",
                        },
                        map[string]interface{}{
                            "nam": "tenetur",
                            "laboriosam": "alias",
                            "amet": "deserunt",
                        },
                    },
                    Message: sdk.String("voluptate"),
                },
                Result: shared.ReachabilityDetailsResultEnumAmbiguous.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("provident"),
                            DestinationNetworkURI: sdk.String("repellendus"),
                            DestinationPort: sdk.Int(962771),
                            Protocol: sdk.String("voluptates"),
                            SourceIP: sdk.String("perferendis"),
                            SourceNetworkURI: sdk.String("est"),
                            SourcePort: sdk.Int(696483),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumMismatchedDestinationNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "praesentium",
                                        "mollitia",
                                        "veniam",
                                    },
                                    ResourceURI: sdk.String("voluptatem"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("quisquam"),
                                    Environment: sdk.String("repudiandae"),
                                    Runtime: sdk.String("quasi"),
                                    URI: sdk.String("https://insubstantial-worth.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("suscipit"),
                                    Location: sdk.String("quidem"),
                                    URI: sdk.String("https://bright-inhibition.biz"),
                                    VersionID: sdk.String("assumenda"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ea"),
                                    Location: sdk.String("atque"),
                                    ServiceURI: sdk.String("error"),
                                    URI: sdk.String("https://unfit-symbol.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("minima"),
                                    ExternalIP: sdk.String("aspernatur"),
                                    InternalIP: sdk.String("ex"),
                                    NetworkURI: sdk.String("maiores"),
                                    Region: sdk.String("corrupti"),
                                    URI: sdk.String("https://petty-lawyer.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("repudiandae"),
                                    Target: shared.DeliverInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                Description: sdk.String("atque"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumNoRoute.ToPointer(),
                                    ResourceURI: sdk.String("recusandae"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("dolorum"),
                                    DestinationNetworkURI: sdk.String("repellendus"),
                                    DestinationPort: sdk.Int(287119),
                                    Protocol: sdk.String("reiciendis"),
                                    SourceIP: sdk.String("doloremque"),
                                    SourceNetworkURI: sdk.String("repudiandae"),
                                    SourcePort: sdk.Int(116098),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("accusantium"),
                                    Direction: sdk.String("beatae"),
                                    DisplayName: sdk.String("dolores"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("laboriosam"),
                                    Policy: sdk.String("velit"),
                                    Priority: sdk.Int(952143),
                                    TargetServiceAccounts: []string{
                                        "magnam",
                                        "saepe",
                                        "consequuntur",
                                    },
                                    TargetTags: []string{
                                        "officiis",
                                        "perspiciatis",
                                        "in",
                                    },
                                    URI: sdk.String("http://unusual-mouth.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("fugit"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("quis"),
                                    MatchedPortRange: sdk.String("reprehenderit"),
                                    MatchedProtocol: sdk.String("error"),
                                    NetworkURI: sdk.String("illo"),
                                    Target: sdk.String("corporis"),
                                    URI: sdk.String("https://unwitting-degree.org"),
                                    Vip: sdk.String("doloremque"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("iure"),
                                    ClusterURI: sdk.String("ipsa"),
                                    ExternalIP: sdk.String("totam"),
                                    InternalIP: sdk.String("quae"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("molestiae"),
                                    ExternalIP: sdk.String("eveniet"),
                                    Interface: sdk.String("qui"),
                                    InternalIP: sdk.String("cum"),
                                    NetworkTags: []string{
                                        "necessitatibus",
                                        "ratione",
                                    },
                                    NetworkURI: sdk.String("laborum"),
                                    ServiceAccount: sdk.String("distinctio"),
                                    URI: sdk.String("https://meaty-emery.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("alias"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("perspiciatis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "mollitia",
                                                "voluptas",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "maiores",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://putrid-extinction.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("dolorum"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "omnis",
                                                "quaerat",
                                                "molestiae",
                                                "ex",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://entire-teapot.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("eum"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumNetworkTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("recusandae"),
                                    MatchedIPRange: sdk.String("esse"),
                                    URI: sdk.String("https://gloomy-homework.org"),
                                },
                                ProjectID: sdk.String("provident"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("aspernatur"),
                                    DestPortRanges: []string{
                                        "quasi",
                                        "animi",
                                    },
                                    DisplayName: sdk.String("nostrum"),
                                    InstanceTags: []string{
                                        "provident",
                                        "possimus",
                                        "animi",
                                    },
                                    NetworkURI: sdk.String("ex"),
                                    NextHop: sdk.String("aliquid"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopTypeUnspecified.ToPointer(),
                                    Priority: sdk.Int(999278),
                                    Protocols: []string{
                                        "ullam",
                                        "in",
                                        "nam",
                                        "earum",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("laborum"),
                                    SrcPortRanges: []string{
                                        "modi",
                                        "voluptatibus",
                                        "molestias",
                                        "officiis",
                                    },
                                    URI: sdk.String("https://slow-bulb.net"),
                                },
                                State: shared.StepStateEnumStartFromAppEngineVersion.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("quis"),
                                    Location: sdk.String("inventore"),
                                    URI: sdk.String("http://slushy-bamboo.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("velit"),
                                    IPAddress: sdk.String("aspernatur"),
                                    NetworkURI: sdk.String("eum"),
                                    Region: sdk.String("eius"),
                                    URI: sdk.String("https://trivial-scanner.biz"),
                                    VpnTunnelURI: sdk.String("sapiente"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("eum"),
                                    NetworkURI: sdk.String("dicta"),
                                    Region: sdk.String("minima"),
                                    RemoteGateway: sdk.String("beatae"),
                                    RemoteGatewayIP: sdk.String("cupiditate"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("earum"),
                                    SourceGatewayIP: sdk.String("soluta"),
                                    URI: sdk.String("https://these-attraction.org"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "debitis",
                                        "aliquid",
                                        "porro",
                                        "suscipit",
                                    },
                                    ResourceURI: sdk.String("dolorem"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("fugit"),
                                    Environment: sdk.String("cumque"),
                                    Runtime: sdk.String("fuga"),
                                    URI: sdk.String("http://proper-testimonial.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("consequatur"),
                                    Location: sdk.String("quasi"),
                                    URI: sdk.String("http://lonely-outlaw.name"),
                                    VersionID: sdk.String("suscipit"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("adipisci"),
                                    Location: sdk.String("quasi"),
                                    ServiceURI: sdk.String("magni"),
                                    URI: sdk.String("https://timely-terminal.com"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("tempora"),
                                    ExternalIP: sdk.String("nihil"),
                                    InternalIP: sdk.String("molestiae"),
                                    NetworkURI: sdk.String("dicta"),
                                    Region: sdk.String("iusto"),
                                    URI: sdk.String("http://luminous-whisper.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("vel"),
                                    Target: shared.DeliverInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                Description: sdk.String("fugiat"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumUnknownExternalAddress.ToPointer(),
                                    ResourceURI: sdk.String("dicta"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("odio"),
                                    DestinationNetworkURI: sdk.String("tempora"),
                                    DestinationPort: sdk.Int(458259),
                                    Protocol: sdk.String("ex"),
                                    SourceIP: sdk.String("consectetur"),
                                    SourceNetworkURI: sdk.String("aliquid"),
                                    SourcePort: sdk.Int(58870),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("laborum"),
                                    Direction: sdk.String("sunt"),
                                    DisplayName: sdk.String("nostrum"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("expedita"),
                                    Policy: sdk.String("aliquid"),
                                    Priority: sdk.Int(639187),
                                    TargetServiceAccounts: []string{
                                        "aliquid",
                                        "perferendis",
                                    },
                                    TargetTags: []string{
                                        "voluptas",
                                        "iste",
                                    },
                                    URI: sdk.String("https://big-hearted-paddle.net"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("voluptates"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("laborum"),
                                    MatchedPortRange: sdk.String("libero"),
                                    MatchedProtocol: sdk.String("ad"),
                                    NetworkURI: sdk.String("deleniti"),
                                    Target: sdk.String("enim"),
                                    URI: sdk.String("http://tall-guilt.net"),
                                    Vip: sdk.String("ex"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("ut"),
                                    ClusterURI: sdk.String("ad"),
                                    ExternalIP: sdk.String("expedita"),
                                    InternalIP: sdk.String("voluptatem"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("molestias"),
                                    ExternalIP: sdk.String("cum"),
                                    Interface: sdk.String("aliquid"),
                                    InternalIP: sdk.String("beatae"),
                                    NetworkTags: []string{
                                        "omnis",
                                        "veritatis",
                                        "rerum",
                                    },
                                    NetworkURI: sdk.String("est"),
                                    ServiceAccount: sdk.String("culpa"),
                                    URI: sdk.String("http://well-off-tax.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("pariatur"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("voluptatem"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "ex",
                                                "sapiente",
                                                "rem",
                                                "minus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://determined-flute.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("illum"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "impedit",
                                                "quibusdam",
                                                "nam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "culpa",
                                                "dolor",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://miserly-bite.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("dolor"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "architecto",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "modi",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://majestic-barbecue.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("fugiat"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "consequuntur",
                                                "ipsa",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "eveniet",
                                                "impedit",
                                                "officiis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://crisp-fairness.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("expedita"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumNetworkTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("vel"),
                                    MatchedIPRange: sdk.String("voluptatum"),
                                    URI: sdk.String("http://great-bath.net"),
                                },
                                ProjectID: sdk.String("autem"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("nobis"),
                                    DestPortRanges: []string{
                                        "recusandae",
                                        "consequuntur",
                                    },
                                    DisplayName: sdk.String("voluptatem"),
                                    InstanceTags: []string{
                                        "necessitatibus",
                                        "quasi",
                                    },
                                    NetworkURI: sdk.String("nisi"),
                                    NextHop: sdk.String("at"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIlb.ToPointer(),
                                    Priority: sdk.Int(667593),
                                    Protocols: []string{
                                        "sequi",
                                        "doloribus",
                                        "repudiandae",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("occaecati"),
                                    SrcPortRanges: []string{
                                        "voluptate",
                                        "blanditiis",
                                    },
                                    URI: sdk.String("https://haunting-destroyer.info"),
                                },
                                State: shared.StepStateEnumArriveAtInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("eius"),
                                    Location: sdk.String("aspernatur"),
                                    URI: sdk.String("http://disgusting-post.name"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("incidunt"),
                                    IPAddress: sdk.String("quasi"),
                                    NetworkURI: sdk.String("rem"),
                                    Region: sdk.String("fugiat"),
                                    URI: sdk.String("http://humiliating-chronicle.biz"),
                                    VpnTunnelURI: sdk.String("aperiam"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("cupiditate"),
                                    NetworkURI: sdk.String("reiciendis"),
                                    Region: sdk.String("soluta"),
                                    RemoteGateway: sdk.String("alias"),
                                    RemoteGatewayIP: sdk.String("omnis"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("occaecati"),
                                    SourceGatewayIP: sdk.String("iste"),
                                    URI: sdk.String("http://bogus-prefix.org"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("voluptatibus"),
                            DestinationNetworkURI: sdk.String("distinctio"),
                            DestinationPort: sdk.Int(608593),
                            Protocol: sdk.String("delectus"),
                            SourceIP: sdk.String("minima"),
                            SourceNetworkURI: sdk.String("praesentium"),
                            SourcePort: sdk.Int(802692),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnsupported.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "commodi",
                                        "itaque",
                                        "commodi",
                                    },
                                    ResourceURI: sdk.String("totam"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("earum"),
                                    Environment: sdk.String("modi"),
                                    Runtime: sdk.String("nam"),
                                    URI: sdk.String("https://ancient-funding.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("alias"),
                                    Location: sdk.String("quasi"),
                                    URI: sdk.String("http://wonderful-evaluator.name"),
                                    VersionID: sdk.String("nulla"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("deserunt"),
                                    Location: sdk.String("esse"),
                                    ServiceURI: sdk.String("nemo"),
                                    URI: sdk.String("http://quarterly-father-in-law.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("accusamus"),
                                    ExternalIP: sdk.String("impedit"),
                                    InternalIP: sdk.String("hic"),
                                    NetworkURI: sdk.String("necessitatibus"),
                                    Region: sdk.String("asperiores"),
                                    URI: sdk.String("http://healthy-tenor.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("quae"),
                                    Target: shared.DeliverInfoTargetEnumPscGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("fuga"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumCloudSQLInstanceNoIPAddress.ToPointer(),
                                    ResourceURI: sdk.String("consectetur"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("velit"),
                                    DestinationNetworkURI: sdk.String("atque"),
                                    DestinationPort: sdk.Int(216457),
                                    Protocol: sdk.String("impedit"),
                                    SourceIP: sdk.String("magni"),
                                    SourceNetworkURI: sdk.String("soluta"),
                                    SourcePort: sdk.Int(922757),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("nam"),
                                    Direction: sdk.String("dolore"),
                                    DisplayName: sdk.String("iusto"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("sequi"),
                                    Policy: sdk.String("dignissimos"),
                                    Priority: sdk.Int(205566),
                                    TargetServiceAccounts: []string{
                                        "deleniti",
                                        "quibusdam",
                                        "iure",
                                        "odit",
                                    },
                                    TargetTags: []string{
                                        "vel",
                                        "magnam",
                                        "quibusdam",
                                        "inventore",
                                    },
                                    URI: sdk.String("https://scrawny-brain.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("quia"),
                                    Target: shared.ForwardInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("aliquam"),
                                    MatchedPortRange: sdk.String("velit"),
                                    MatchedProtocol: sdk.String("illo"),
                                    NetworkURI: sdk.String("accusantium"),
                                    Target: sdk.String("vel"),
                                    URI: sdk.String("http://careful-sweatsuit.name"),
                                    Vip: sdk.String("eum"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("velit"),
                                    ClusterURI: sdk.String("ut"),
                                    ExternalIP: sdk.String("perspiciatis"),
                                    InternalIP: sdk.String("earum"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("dicta"),
                                    ExternalIP: sdk.String("impedit"),
                                    Interface: sdk.String("voluptatibus"),
                                    InternalIP: sdk.String("iste"),
                                    NetworkTags: []string{
                                        "alias",
                                        "nisi",
                                        "itaque",
                                        "velit",
                                    },
                                    NetworkURI: sdk.String("laborum"),
                                    ServiceAccount: sdk.String("non"),
                                    URI: sdk.String("http://left-amber.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("officia"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ea"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "voluptas",
                                                "facilis",
                                                "placeat",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "expedita",
                                                "deleniti",
                                                "a",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://outlying-terrapin.name"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("impedit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "corporis",
                                                "est",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "esse",
                                                "labore",
                                                "veritatis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://charming-bidding.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ad"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "iste",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "nemo",
                                                "soluta",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://rapid-keyboard.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("alias"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "vel",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quae",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://gray-tsunami.com"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("ipsum"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumHTTPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("nulla"),
                                    MatchedIPRange: sdk.String("distinctio"),
                                    URI: sdk.String("https://crushing-chorus.info"),
                                },
                                ProjectID: sdk.String("omnis"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("libero"),
                                    DestPortRanges: []string{
                                        "id",
                                    },
                                    DisplayName: sdk.String("libero"),
                                    InstanceTags: []string{
                                        "officia",
                                        "quos",
                                        "placeat",
                                        "sit",
                                    },
                                    NetworkURI: sdk.String("iusto"),
                                    NextHop: sdk.String("ipsa"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIlb.ToPointer(),
                                    Priority: sdk.Int(80061),
                                    Protocols: []string{
                                        "totam",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("eligendi"),
                                    SrcPortRanges: []string{
                                        "voluptatem",
                                        "autem",
                                        "esse",
                                    },
                                    URI: sdk.String("http://superior-brink.net"),
                                },
                                State: shared.StepStateEnumDeliver.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("corrupti"),
                                    Location: sdk.String("molestiae"),
                                    URI: sdk.String("https://uncommon-term.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("sint"),
                                    IPAddress: sdk.String("ea"),
                                    NetworkURI: sdk.String("autem"),
                                    Region: sdk.String("ipsam"),
                                    URI: sdk.String("https://mammoth-following.org"),
                                    VpnTunnelURI: sdk.String("voluptatibus"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("cum"),
                                    NetworkURI: sdk.String("at"),
                                    Region: sdk.String("alias"),
                                    RemoteGateway: sdk.String("quia"),
                                    RemoteGatewayIP: sdk.String("quidem"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("repudiandae"),
                                    SourceGatewayIP: sdk.String("accusantium"),
                                    URI: sdk.String("https://uneven-codpiece.org"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnintendedDestination.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "odit",
                                        "explicabo",
                                        "corporis",
                                    },
                                    ResourceURI: sdk.String("error"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("earum"),
                                    Environment: sdk.String("adipisci"),
                                    Runtime: sdk.String("recusandae"),
                                    URI: sdk.String("https://finished-prize.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("beatae"),
                                    Location: sdk.String("unde"),
                                    URI: sdk.String("http://whimsical-mystery.com"),
                                    VersionID: sdk.String("numquam"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("numquam"),
                                    Location: sdk.String("nesciunt"),
                                    ServiceURI: sdk.String("at"),
                                    URI: sdk.String("https://lined-ruin.org"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("corporis"),
                                    ExternalIP: sdk.String("qui"),
                                    InternalIP: sdk.String("expedita"),
                                    NetworkURI: sdk.String("voluptatum"),
                                    Region: sdk.String("cupiditate"),
                                    URI: sdk.String("http://striking-estimate.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("in"),
                                    Target: shared.DeliverInfoTargetEnumPscGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("eum"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumUnknownInternalAddress.ToPointer(),
                                    ResourceURI: sdk.String("corporis"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("magnam"),
                                    DestinationNetworkURI: sdk.String("voluptates"),
                                    DestinationPort: sdk.Int(978173),
                                    Protocol: sdk.String("tempore"),
                                    SourceIP: sdk.String("aperiam"),
                                    SourceNetworkURI: sdk.String("libero"),
                                    SourcePort: sdk.Int(189753),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("labore"),
                                    Direction: sdk.String("totam"),
                                    DisplayName: sdk.String("occaecati"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("quo"),
                                    Policy: sdk.String("velit"),
                                    Priority: sdk.Int(795591),
                                    TargetServiceAccounts: []string{
                                        "nostrum",
                                        "est",
                                        "impedit",
                                    },
                                    TargetTags: []string{
                                        "tempore",
                                        "vero",
                                        "odit",
                                        "repellat",
                                    },
                                    URI: sdk.String("https://guilty-hundred.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("odio"),
                                    Target: shared.ForwardInfoTargetEnumVpnGateway.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("in"),
                                    MatchedPortRange: sdk.String("ducimus"),
                                    MatchedProtocol: sdk.String("excepturi"),
                                    NetworkURI: sdk.String("dolores"),
                                    Target: sdk.String("error"),
                                    URI: sdk.String("http://long-impression.org"),
                                    Vip: sdk.String("itaque"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("similique"),
                                    ClusterURI: sdk.String("optio"),
                                    ExternalIP: sdk.String("ex"),
                                    InternalIP: sdk.String("quaerat"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("commodi"),
                                    ExternalIP: sdk.String("officiis"),
                                    Interface: sdk.String("placeat"),
                                    InternalIP: sdk.String("quidem"),
                                    NetworkTags: []string{
                                        "quam",
                                        "dolorem",
                                    },
                                    NetworkURI: sdk.String("modi"),
                                    ServiceAccount: sdk.String("ipsa"),
                                    URI: sdk.String("https://truthful-configuration.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("dicta"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("veniam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolores",
                                                "nam",
                                                "dicta",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://lone-wholesale.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("quasi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "pariatur",
                                                "libero",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "occaecati",
                                                "nemo",
                                                "aliquam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://single-monocle.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("hic"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quas",
                                                "totam",
                                                "molestias",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "eaque",
                                                "saepe",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://peaceful-sophomore.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("libero"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "doloremque",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "impedit",
                                                "cum",
                                                "ipsum",
                                                "adipisci",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://arctic-fellow.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("libero"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("cupiditate"),
                                    MatchedIPRange: sdk.String("molestiae"),
                                    URI: sdk.String("https://sudden-deputy.biz"),
                                },
                                ProjectID: sdk.String("itaque"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("sed"),
                                    DestPortRanges: []string{
                                        "veniam",
                                        "consequuntur",
                                        "facere",
                                        "laudantium",
                                    },
                                    DisplayName: sdk.String("odit"),
                                    InstanceTags: []string{
                                        "amet",
                                        "exercitationem",
                                        "ab",
                                        "velit",
                                    },
                                    NetworkURI: sdk.String("facilis"),
                                    NextHop: sdk.String("tempore"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(977518),
                                    Protocols: []string{
                                        "blanditiis",
                                        "distinctio",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("quis"),
                                    SrcPortRanges: []string{
                                        "libero",
                                        "minus",
                                    },
                                    URI: sdk.String("https://round-craftsman.biz"),
                                },
                                State: shared.StepStateEnumViewerPermissionMissing.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("voluptatibus"),
                                    Location: sdk.String("consequuntur"),
                                    URI: sdk.String("https://flawless-prose.biz"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    IPAddress: sdk.String("nostrum"),
                                    NetworkURI: sdk.String("neque"),
                                    Region: sdk.String("iusto"),
                                    URI: sdk.String("https://measly-rivulet.org"),
                                    VpnTunnelURI: sdk.String("unde"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("officiis"),
                                    NetworkURI: sdk.String("ducimus"),
                                    Region: sdk.String("dolor"),
                                    RemoteGateway: sdk.String("dicta"),
                                    RemoteGatewayIP: sdk.String("error"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumDynamic.ToPointer(),
                                    SourceGateway: sdk.String("vitae"),
                                    SourceGatewayIP: sdk.String("dignissimos"),
                                    URI: sdk.String("http://those-exclamation.com"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("enim"),
                            DestinationNetworkURI: sdk.String("delectus"),
                            DestinationPort: sdk.Int(482584),
                            Protocol: sdk.String("dignissimos"),
                            SourceIP: sdk.String("libero"),
                            SourceNetworkURI: sdk.String("illo"),
                            SourcePort: sdk.Int(69182),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnsupported.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "tempore",
                                        "veniam",
                                        "eos",
                                        "reiciendis",
                                    },
                                    ResourceURI: sdk.String("earum"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    Environment: sdk.String("praesentium"),
                                    Runtime: sdk.String("nemo"),
                                    URI: sdk.String("https://spiteful-consensus.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("deleniti"),
                                    Location: sdk.String("illo"),
                                    URI: sdk.String("http://svelte-emergency.net"),
                                    VersionID: sdk.String("provident"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("laudantium"),
                                    Location: sdk.String("repudiandae"),
                                    ServiceURI: sdk.String("consequatur"),
                                    URI: sdk.String("https://concerned-razor.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("quas"),
                                    ExternalIP: sdk.String("provident"),
                                    InternalIP: sdk.String("repudiandae"),
                                    NetworkURI: sdk.String("rerum"),
                                    Region: sdk.String("dignissimos"),
                                    URI: sdk.String("http://trustworthy-pantologist.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("iure"),
                                    Target: shared.DeliverInfoTargetEnumInstance.ToPointer(),
                                },
                                Description: sdk.String("commodi"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumCloudSQLInstanceNotConfiguredForExternalTraffic.ToPointer(),
                                    ResourceURI: sdk.String("commodi"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("aut"),
                                    DestinationNetworkURI: sdk.String("voluptatem"),
                                    DestinationPort: sdk.Int(322829),
                                    Protocol: sdk.String("quae"),
                                    SourceIP: sdk.String("amet"),
                                    SourceNetworkURI: sdk.String("illum"),
                                    SourcePort: sdk.Int(506863),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("quidem"),
                                    Direction: sdk.String("cum"),
                                    DisplayName: sdk.String("amet"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumFirewallRuleTypeUnspecified.ToPointer(),
                                    NetworkURI: sdk.String("dicta"),
                                    Policy: sdk.String("laudantium"),
                                    Priority: sdk.Int(40710),
                                    TargetServiceAccounts: []string{
                                        "iusto",
                                        "amet",
                                        "provident",
                                        "dolorum",
                                    },
                                    TargetTags: []string{
                                        "provident",
                                        "repudiandae",
                                        "consequatur",
                                        "nemo",
                                    },
                                    URI: sdk.String("http://vigilant-puppet.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("aperiam"),
                                    Target: shared.ForwardInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("accusamus"),
                                    MatchedPortRange: sdk.String("eos"),
                                    MatchedProtocol: sdk.String("totam"),
                                    NetworkURI: sdk.String("dicta"),
                                    Target: sdk.String("voluptatem"),
                                    URI: sdk.String("http://elaborate-camp.org"),
                                    Vip: sdk.String("dolor"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("occaecati"),
                                    ClusterURI: sdk.String("atque"),
                                    ExternalIP: sdk.String("beatae"),
                                    InternalIP: sdk.String("at"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("labore"),
                                    ExternalIP: sdk.String("minus"),
                                    Interface: sdk.String("esse"),
                                    InternalIP: sdk.String("voluptatem"),
                                    NetworkTags: []string{
                                        "rerum",
                                    },
                                    NetworkURI: sdk.String("ea"),
                                    ServiceAccount: sdk.String("aperiam"),
                                    URI: sdk.String("http://zealous-decision-making.net"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("consectetur"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("dignissimos"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "soluta",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "temporibus",
                                                "officia",
                                                "amet",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://sophisticated-trove.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("laborum"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "vero",
                                                "qui",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repellat",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://green-interviewer.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ab"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "hic",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "delectus",
                                                "non",
                                                "distinctio",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://flashy-detail.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("modi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "explicabo",
                                                "accusamus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aperiam",
                                                "odit",
                                                "deleniti",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://plaintive-explanation.net"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("magnam"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("modi"),
                                    MatchedIPRange: sdk.String("eum"),
                                    URI: sdk.String("http://private-knife.org"),
                                },
                                ProjectID: sdk.String("nostrum"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("molestiae"),
                                    DestPortRanges: []string{
                                        "reiciendis",
                                        "ab",
                                    },
                                    DisplayName: sdk.String("modi"),
                                    InstanceTags: []string{
                                        "aut",
                                    },
                                    NetworkURI: sdk.String("eveniet"),
                                    NextHop: sdk.String("odio"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(256114),
                                    Protocols: []string{
                                        "possimus",
                                        "voluptate",
                                        "consectetur",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("quaerat"),
                                    SrcPortRanges: []string{
                                        "minus",
                                        "sunt",
                                        "distinctio",
                                        "iusto",
                                    },
                                    URI: sdk.String("https://brilliant-ptarmigan.biz"),
                                },
                                State: shared.StepStateEnumApplyRoute.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("fuga"),
                                    Location: sdk.String("alias"),
                                    URI: sdk.String("https://adept-measure.name"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("repellendus"),
                                    IPAddress: sdk.String("veritatis"),
                                    NetworkURI: sdk.String("quae"),
                                    Region: sdk.String("eaque"),
                                    URI: sdk.String("https://white-perpendicular.org"),
                                    VpnTunnelURI: sdk.String("officia"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("sed"),
                                    NetworkURI: sdk.String("voluptatem"),
                                    Region: sdk.String("alias"),
                                    RemoteGateway: sdk.String("eveniet"),
                                    RemoteGatewayIP: sdk.String("hic"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("incidunt"),
                                    SourceGatewayIP: sdk.String("qui"),
                                    URI: sdk.String("http://unlined-primate.com"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnknownNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "modi",
                                        "optio",
                                    },
                                    ResourceURI: sdk.String("voluptatibus"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("molestias"),
                                    Environment: sdk.String("officia"),
                                    Runtime: sdk.String("libero"),
                                    URI: sdk.String("https://difficult-graphic.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("impedit"),
                                    Location: sdk.String("ducimus"),
                                    URI: sdk.String("http://euphoric-walrus.org"),
                                    VersionID: sdk.String("nulla"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("laborum"),
                                    Location: sdk.String("natus"),
                                    ServiceURI: sdk.String("accusamus"),
                                    URI: sdk.String("http://hot-prose.org"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("voluptates"),
                                    ExternalIP: sdk.String("non"),
                                    InternalIP: sdk.String("rem"),
                                    NetworkURI: sdk.String("quia"),
                                    Region: sdk.String("ullam"),
                                    URI: sdk.String("https://clear-cut-waterwheel.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("quae"),
                                    Target: shared.DeliverInfoTargetEnumPscGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("architecto"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumFirewallRule.ToPointer(),
                                    ResourceURI: sdk.String("enim"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("optio"),
                                    DestinationNetworkURI: sdk.String("rem"),
                                    DestinationPort: sdk.Int(17060),
                                    Protocol: sdk.String("facilis"),
                                    SourceIP: sdk.String("reiciendis"),
                                    SourceNetworkURI: sdk.String("a"),
                                    SourcePort: sdk.Int(615058),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("dicta"),
                                    Direction: sdk.String("quos"),
                                    DisplayName: sdk.String("ullam"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("modi"),
                                    Policy: sdk.String("itaque"),
                                    Priority: sdk.Int(807419),
                                    TargetServiceAccounts: []string{
                                        "consequuntur",
                                        "assumenda",
                                    },
                                    TargetTags: []string{
                                        "doloribus",
                                        "impedit",
                                        "porro",
                                        "accusamus",
                                    },
                                    URI: sdk.String("https://wide-eyed-bargain.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("nihil"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("iure"),
                                    MatchedPortRange: sdk.String("odio"),
                                    MatchedProtocol: sdk.String("nesciunt"),
                                    NetworkURI: sdk.String("debitis"),
                                    Target: sdk.String("vel"),
                                    URI: sdk.String("http://growing-gamebird.com"),
                                    Vip: sdk.String("officia"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("reprehenderit"),
                                    ClusterURI: sdk.String("distinctio"),
                                    ExternalIP: sdk.String("eius"),
                                    InternalIP: sdk.String("ipsa"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("rem"),
                                    ExternalIP: sdk.String("maiores"),
                                    Interface: sdk.String("accusantium"),
                                    InternalIP: sdk.String("veniam"),
                                    NetworkTags: []string{
                                        "neque",
                                        "facere",
                                        "aliquam",
                                        "quos",
                                    },
                                    NetworkURI: sdk.String("doloribus"),
                                    ServiceAccount: sdk.String("fugiat"),
                                    URI: sdk.String("https://which-dedication.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("similique"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("repellat"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "doloribus",
                                                "possimus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "incidunt",
                                                "explicabo",
                                                "ipsam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://absolute-product.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("commodi"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumSslProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("consequuntur"),
                                    MatchedIPRange: sdk.String("veniam"),
                                    URI: sdk.String("https://popular-mood.biz"),
                                },
                                ProjectID: sdk.String("numquam"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("tenetur"),
                                    DestPortRanges: []string{
                                        "libero",
                                    },
                                    DisplayName: sdk.String("in"),
                                    InstanceTags: []string{
                                        "ex",
                                        "minus",
                                    },
                                    NetworkURI: sdk.String("ab"),
                                    NextHop: sdk.String("beatae"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopRouterAppliance.ToPointer(),
                                    Priority: sdk.Int(392319),
                                    Protocols: []string{
                                        "dolor",
                                        "ducimus",
                                        "fuga",
                                        "minima",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumRouteTypeUnspecified.ToPointer(),
                                    SrcIPRange: sdk.String("qui"),
                                    SrcPortRanges: []string{
                                        "magni",
                                        "incidunt",
                                    },
                                    URI: sdk.String("http://loyal-creator.info"),
                                },
                                State: shared.StepStateEnumArriveAtVpcConnector.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("facilis"),
                                    Location: sdk.String("impedit"),
                                    URI: sdk.String("http://gullible-parking.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("amet"),
                                    IPAddress: sdk.String("deserunt"),
                                    NetworkURI: sdk.String("modi"),
                                    Region: sdk.String("veniam"),
                                    URI: sdk.String("https://villainous-vibe.net"),
                                    VpnTunnelURI: sdk.String("enim"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("doloribus"),
                                    NetworkURI: sdk.String("assumenda"),
                                    Region: sdk.String("officiis"),
                                    RemoteGateway: sdk.String("architecto"),
                                    RemoteGatewayIP: sdk.String("alias"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("ipsa"),
                                    SourceGatewayIP: sdk.String("nobis"),
                                    URI: sdk.String("https://crowded-buy.info"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("perspiciatis"),
                            DestinationNetworkURI: sdk.String("debitis"),
                            DestinationPort: sdk.Int(354821),
                            Protocol: sdk.String("architecto"),
                            SourceIP: sdk.String("accusantium"),
                            SourceNetworkURI: sdk.String("perferendis"),
                            SourcePort: sdk.Int(82876),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumDestinationEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "quibusdam",
                                        "quod",
                                    },
                                    ResourceURI: sdk.String("nemo"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("recusandae"),
                                    Environment: sdk.String("velit"),
                                    Runtime: sdk.String("magnam"),
                                    URI: sdk.String("http://honest-cheek.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("natus"),
                                    Location: sdk.String("provident"),
                                    URI: sdk.String("https://worrisome-pseudocode.net"),
                                    VersionID: sdk.String("itaque"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("laboriosam"),
                                    Location: sdk.String("unde"),
                                    ServiceURI: sdk.String("modi"),
                                    URI: sdk.String("https://wasteful-reminder.com"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("libero"),
                                    ExternalIP: sdk.String("nam"),
                                    InternalIP: sdk.String("incidunt"),
                                    NetworkURI: sdk.String("recusandae"),
                                    Region: sdk.String("quod"),
                                    URI: sdk.String("https://untimely-heirloom.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("nesciunt"),
                                    Target: shared.DeliverInfoTargetEnumPscGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("nemo"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumCloudFunctionNotActive.ToPointer(),
                                    ResourceURI: sdk.String("facilis"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("non"),
                                    DestinationNetworkURI: sdk.String("mollitia"),
                                    DestinationPort: sdk.Int(827051),
                                    Protocol: sdk.String("recusandae"),
                                    SourceIP: sdk.String("distinctio"),
                                    SourceNetworkURI: sdk.String("pariatur"),
                                    SourcePort: sdk.Int(323365),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("facere"),
                                    Direction: sdk.String("laborum"),
                                    DisplayName: sdk.String("eveniet"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("incidunt"),
                                    Policy: sdk.String("maxime"),
                                    Priority: sdk.Int(369523),
                                    TargetServiceAccounts: []string{
                                        "suscipit",
                                    },
                                    TargetTags: []string{
                                        "molestias",
                                        "laborum",
                                        "est",
                                    },
                                    URI: sdk.String("https://fixed-scow.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("fugit"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("magnam"),
                                    MatchedPortRange: sdk.String("quaerat"),
                                    MatchedProtocol: sdk.String("eligendi"),
                                    NetworkURI: sdk.String("hic"),
                                    Target: sdk.String("nostrum"),
                                    URI: sdk.String("https://oval-string.name"),
                                    Vip: sdk.String("mollitia"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("magnam"),
                                    ClusterURI: sdk.String("nostrum"),
                                    ExternalIP: sdk.String("esse"),
                                    InternalIP: sdk.String("corrupti"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("fuga"),
                                    ExternalIP: sdk.String("facere"),
                                    Interface: sdk.String("impedit"),
                                    InternalIP: sdk.String("quasi"),
                                    NetworkTags: []string{
                                        "quod",
                                        "laboriosam",
                                        "doloremque",
                                    },
                                    NetworkURI: sdk.String("voluptatem"),
                                    ServiceAccount: sdk.String("facere"),
                                    URI: sdk.String("https://steel-adjective.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("similique"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("blanditiis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "magni",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "sed",
                                                "necessitatibus",
                                                "impedit",
                                                "ipsa",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://worried-limestone.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("alias"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "rem",
                                                "dicta",
                                                "suscipit",
                                                "earum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "velit",
                                                "eius",
                                                "esse",
                                                "in",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://downright-swamp.name"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("accusantium"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "impedit",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "incidunt",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://grounded-prospect.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("error"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "accusantium",
                                                "id",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "ex",
                                                "quas",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://barren-paragraph.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("quam"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("deserunt"),
                                    MatchedIPRange: sdk.String("delectus"),
                                    URI: sdk.String("https://creative-container.net"),
                                },
                                ProjectID: sdk.String("quis"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("cupiditate"),
                                    DestPortRanges: []string{
                                        "excepturi",
                                        "maiores",
                                    },
                                    DisplayName: sdk.String("laudantium"),
                                    InstanceTags: []string{
                                        "reiciendis",
                                    },
                                    NetworkURI: sdk.String("amet"),
                                    NextHop: sdk.String("nemo"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopTypeUnspecified.ToPointer(),
                                    Priority: sdk.Int(787916),
                                    Protocols: []string{
                                        "quas",
                                        "molestiae",
                                        "aliquid",
                                        "asperiores",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPolicyBased.ToPointer(),
                                    SrcIPRange: sdk.String("nobis"),
                                    SrcPortRanges: []string{
                                        "accusantium",
                                        "dicta",
                                        "minus",
                                    },
                                    URI: sdk.String("http://unwelcome-seaside.net"),
                                },
                                State: shared.StepStateEnumArriveAtVpnTunnel.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("modi"),
                                    Location: sdk.String("voluptates"),
                                    URI: sdk.String("http://fabulous-conductor.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    IPAddress: sdk.String("esse"),
                                    NetworkURI: sdk.String("blanditiis"),
                                    Region: sdk.String("sint"),
                                    URI: sdk.String("https://welcome-piece.org"),
                                    VpnTunnelURI: sdk.String("itaque"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("nulla"),
                                    NetworkURI: sdk.String("deserunt"),
                                    Region: sdk.String("corporis"),
                                    RemoteGateway: sdk.String("velit"),
                                    RemoteGatewayIP: sdk.String("officiis"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("officia"),
                                    SourceGatewayIP: sdk.String("saepe"),
                                    URI: sdk.String("http://valid-appearance.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumDestinationEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "blanditiis",
                                    },
                                    ResourceURI: sdk.String("eius"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("quisquam"),
                                    Environment: sdk.String("eos"),
                                    Runtime: sdk.String("nobis"),
                                    URI: sdk.String("https://square-chick.biz"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    Location: sdk.String("quod"),
                                    URI: sdk.String("https://muddy-crush.info"),
                                    VersionID: sdk.String("amet"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("laborum"),
                                    Location: sdk.String("modi"),
                                    ServiceURI: sdk.String("perferendis"),
                                    URI: sdk.String("https://buzzing-mining.biz"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("sunt"),
                                    ExternalIP: sdk.String("maiores"),
                                    InternalIP: sdk.String("neque"),
                                    NetworkURI: sdk.String("odit"),
                                    Region: sdk.String("earum"),
                                    URI: sdk.String("http://harmonious-attacker.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("veniam"),
                                    Target: shared.DeliverInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                Description: sdk.String("ad"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumFirewallBlockingLoadBalancerBackendHealthCheck.ToPointer(),
                                    ResourceURI: sdk.String("tenetur"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("quis"),
                                    DestinationNetworkURI: sdk.String("quibusdam"),
                                    DestinationPort: sdk.Int(366480),
                                    Protocol: sdk.String("suscipit"),
                                    SourceIP: sdk.String("pariatur"),
                                    SourceNetworkURI: sdk.String("sit"),
                                    SourcePort: sdk.Int(694728),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("repellendus"),
                                    Direction: sdk.String("perferendis"),
                                    DisplayName: sdk.String("id"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("sed"),
                                    Policy: sdk.String("possimus"),
                                    Priority: sdk.Int(996072),
                                    TargetServiceAccounts: []string{
                                        "architecto",
                                        "adipisci",
                                        "pariatur",
                                        "harum",
                                    },
                                    TargetTags: []string{
                                        "voluptatibus",
                                        "iure",
                                    },
                                    URI: sdk.String("http://stable-retrospective.net"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("velit"),
                                    Target: shared.ForwardInfoTargetEnumAnotherProject.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("praesentium"),
                                    MatchedPortRange: sdk.String("error"),
                                    MatchedProtocol: sdk.String("non"),
                                    NetworkURI: sdk.String("quasi"),
                                    Target: sdk.String("mollitia"),
                                    URI: sdk.String("https://regal-sari.com"),
                                    Vip: sdk.String("expedita"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("corrupti"),
                                    ClusterURI: sdk.String("eaque"),
                                    ExternalIP: sdk.String("deserunt"),
                                    InternalIP: sdk.String("aliquid"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("excepturi"),
                                    ExternalIP: sdk.String("magni"),
                                    Interface: sdk.String("tempora"),
                                    InternalIP: sdk.String("possimus"),
                                    NetworkTags: []string{
                                        "rerum",
                                    },
                                    NetworkURI: sdk.String("sed"),
                                    ServiceAccount: sdk.String("accusamus"),
                                    URI: sdk.String("https://whopping-shakedown.net"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("asperiores"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("iste"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "accusantium",
                                                "illo",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "doloribus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://superb-coonskin.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("vel"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "mollitia",
                                                "quae",
                                                "quos",
                                                "aperiam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "voluptates",
                                                "ad",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://naughty-circuit.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("inventore"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "laudantium",
                                                "est",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aliquid",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://meek-lunge.info"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("adipisci"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumSslProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("tempora"),
                                    MatchedIPRange: sdk.String("blanditiis"),
                                    URI: sdk.String("http://dimpled-maid.com"),
                                },
                                ProjectID: sdk.String("rerum"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("veritatis"),
                                    DestPortRanges: []string{
                                        "autem",
                                        "quidem",
                                        "totam",
                                        "porro",
                                    },
                                    DisplayName: sdk.String("deserunt"),
                                    InstanceTags: []string{
                                        "nihil",
                                    },
                                    NetworkURI: sdk.String("voluptas"),
                                    NextHop: sdk.String("animi"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(716),
                                    Protocols: []string{
                                        "aut",
                                        "dolore",
                                        "maxime",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("iste"),
                                    SrcPortRanges: []string{
                                        "eligendi",
                                        "placeat",
                                    },
                                    URI: sdk.String("http://numb-nudge.com"),
                                },
                                State: shared.StepStateEnumApplyForwardingRule.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("inventore"),
                                    Location: sdk.String("libero"),
                                    URI: sdk.String("http://bumpy-saloon.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("harum"),
                                    IPAddress: sdk.String("facere"),
                                    NetworkURI: sdk.String("facilis"),
                                    Region: sdk.String("beatae"),
                                    URI: sdk.String("https://whispered-dud.net"),
                                    VpnTunnelURI: sdk.String("corrupti"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("rem"),
                                    NetworkURI: sdk.String("atque"),
                                    Region: sdk.String("officiis"),
                                    RemoteGateway: sdk.String("cum"),
                                    RemoteGatewayIP: sdk.String("pariatur"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumDynamic.ToPointer(),
                                    SourceGateway: sdk.String("quo"),
                                    SourceGatewayIP: sdk.String("incidunt"),
                                    URI: sdk.String("https://square-seaside.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "libero",
                                        "quo",
                                        "esse",
                                    },
                                    ResourceURI: sdk.String("hic"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("maxime"),
                                    Environment: sdk.String("accusantium"),
                                    Runtime: sdk.String("soluta"),
                                    URI: sdk.String("http://tremendous-roller.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("veritatis"),
                                    Location: sdk.String("aut"),
                                    URI: sdk.String("https://lazy-creationism.org"),
                                    VersionID: sdk.String("tempora"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("magni"),
                                    Location: sdk.String("rerum"),
                                    ServiceURI: sdk.String("doloremque"),
                                    URI: sdk.String("http://incredible-supreme.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    ExternalIP: sdk.String("voluptatum"),
                                    InternalIP: sdk.String("blanditiis"),
                                    NetworkURI: sdk.String("nihil"),
                                    Region: sdk.String("atque"),
                                    URI: sdk.String("https://present-margarine.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("atque"),
                                    Target: shared.DeliverInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                Description: sdk.String("est"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumForwardingRuleRegionMismatch.ToPointer(),
                                    ResourceURI: sdk.String("rem"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("magni"),
                                    DestinationNetworkURI: sdk.String("quae"),
                                    DestinationPort: sdk.Int(556133),
                                    Protocol: sdk.String("placeat"),
                                    SourceIP: sdk.String("enim"),
                                    SourceNetworkURI: sdk.String("labore"),
                                    SourcePort: sdk.Int(958068),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("saepe"),
                                    Direction: sdk.String("delectus"),
                                    DisplayName: sdk.String("officia"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("cumque"),
                                    Policy: sdk.String("natus"),
                                    Priority: sdk.Int(312511),
                                    TargetServiceAccounts: []string{
                                        "quia",
                                        "officiis",
                                        "mollitia",
                                        "cumque",
                                    },
                                    TargetTags: []string{
                                        "enim",
                                        "eum",
                                    },
                                    URI: sdk.String("http://thin-contention.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("odio"),
                                    Target: shared.ForwardInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    MatchedPortRange: sdk.String("recusandae"),
                                    MatchedProtocol: sdk.String("voluptates"),
                                    NetworkURI: sdk.String("praesentium"),
                                    Target: sdk.String("dicta"),
                                    URI: sdk.String("http://alert-grandma.org"),
                                    Vip: sdk.String("sed"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("deleniti"),
                                    ClusterURI: sdk.String("sunt"),
                                    ExternalIP: sdk.String("nesciunt"),
                                    InternalIP: sdk.String("delectus"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("laborum"),
                                    ExternalIP: sdk.String("aliquam"),
                                    Interface: sdk.String("deserunt"),
                                    InternalIP: sdk.String("modi"),
                                    NetworkTags: []string{
                                        "impedit",
                                    },
                                    NetworkURI: sdk.String("eius"),
                                    ServiceAccount: sdk.String("voluptatum"),
                                    URI: sdk.String("http://true-correspondent.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("inventore"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("fugit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "hic",
                                                "eaque",
                                                "dolorem",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aperiam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://frosty-bear.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("delectus"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("optio"),
                                    MatchedIPRange: sdk.String("nobis"),
                                    URI: sdk.String("http://zealous-banyan.name"),
                                },
                                ProjectID: sdk.String("expedita"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("hic"),
                                    DestPortRanges: []string{
                                        "aliquid",
                                        "sed",
                                        "beatae",
                                    },
                                    DisplayName: sdk.String("similique"),
                                    InstanceTags: []string{
                                        "animi",
                                        "dolore",
                                    },
                                    NetworkURI: sdk.String("tenetur"),
                                    NextHop: sdk.String("dignissimos"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(657044),
                                    Protocols: []string{
                                        "esse",
                                        "eveniet",
                                        "earum",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("officiis"),
                                    SrcPortRanges: []string{
                                        "rerum",
                                        "itaque",
                                    },
                                    URI: sdk.String("http://harsh-caribou.net"),
                                },
                                State: shared.StepStateEnumApplyEgressFirewallRule.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("quis"),
                                    Location: sdk.String("facilis"),
                                    URI: sdk.String("http://firsthand-engine.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("praesentium"),
                                    IPAddress: sdk.String("eveniet"),
                                    NetworkURI: sdk.String("dolor"),
                                    Region: sdk.String("expedita"),
                                    URI: sdk.String("https://peppery-bed.net"),
                                    VpnTunnelURI: sdk.String("quos"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("temporibus"),
                                    NetworkURI: sdk.String("sint"),
                                    Region: sdk.String("iusto"),
                                    RemoteGateway: sdk.String("enim"),
                                    RemoteGatewayIP: sdk.String("accusamus"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("voluptates"),
                                    SourceGatewayIP: sdk.String("laudantium"),
                                    URI: sdk.String("http://beautiful-octopus.org"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("rem"),
            },
            RelatedProjects: []string{
                "deleniti",
                "modi",
                "earum",
                "architecto",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("http://fixed-window.biz"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://acidic-infiltration.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://spirited-sardine.biz"),
                },
                CloudSQLInstance: sdk.String("dolorum"),
                GkeMasterCluster: sdk.String("deserunt"),
                Instance: sdk.String("ad"),
                IPAddress: sdk.String("reiciendis"),
                Network: sdk.String("sequi"),
                NetworkType: shared.EndpointNetworkTypeEnumNonGcpNetwork.ToPointer(),
                Port: sdk.Int(671528),
                ProjectID: sdk.String("nobis"),
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("cupiditate"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        TestID: sdk.String("necessitatibus"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("ad"),
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

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("sed"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("iusto"),
        OptionsRequestedPolicyVersion: sdk.Int64(712893),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        Resource: "repellendus",
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsList

Lists all Connectivity Tests owned by a project.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsList(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("distinctio"),
        Filter: sdk.String("sapiente"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("est"),
        OrderBy: sdk.String("aliquam"),
        PageSize: sdk.Int64(964201),
        PageToken: sdk.String("culpa"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectivityTestsResponse != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConnectivityTestInput: &shared.ConnectivityTestInput{
            Description: sdk.String("non"),
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("http://quixotic-gateway.org"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://velvety-forage.biz"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://satisfied-windage.info"),
                },
                CloudSQLInstance: sdk.String("voluptatem"),
                GkeMasterCluster: sdk.String("optio"),
                Instance: sdk.String("sequi"),
                IPAddress: sdk.String("sunt"),
                Network: sdk.String("vitae"),
                NetworkType: shared.EndpointNetworkTypeEnumNonGcpNetwork.ToPointer(),
                Port: sdk.Int(42364),
                ProjectID: sdk.String("sed"),
            },
            Labels: map[string]string{
                "rerum": "in",
            },
            Name: sdk.String("Paulette Dibbert"),
            Protocol: sdk.String("dignissimos"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(971360),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "est": "accusantium",
                        },
                        map[string]interface{}{
                            "minus": "quos",
                            "possimus": "maiores",
                            "odio": "provident",
                            "sapiente": "aperiam",
                        },
                        map[string]interface{}{
                            "nesciunt": "provident",
                            "ex": "repellendus",
                            "unde": "alias",
                        },
                        map[string]interface{}{
                            "sequi": "commodi",
                            "labore": "expedita",
                            "in": "quisquam",
                            "sunt": "enim",
                        },
                    },
                    Message: sdk.String("nulla"),
                },
                Result: shared.ReachabilityDetailsResultEnumUndetermined.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("mollitia"),
                            DestinationNetworkURI: sdk.String("impedit"),
                            DestinationPort: sdk.Int(880998),
                            Protocol: sdk.String("et"),
                            SourceIP: sdk.String("quas"),
                            SourceNetworkURI: sdk.String("blanditiis"),
                            SourcePort: sdk.Int(741603),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumDestinationEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "eveniet",
                                        "repudiandae",
                                    },
                                    ResourceURI: sdk.String("sed"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("impedit"),
                                    Environment: sdk.String("quas"),
                                    Runtime: sdk.String("impedit"),
                                    URI: sdk.String("http://silly-transcript.info"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("beatae"),
                                    Location: sdk.String("veritatis"),
                                    URI: sdk.String("https://vigilant-survivor.net"),
                                    VersionID: sdk.String("illo"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quo"),
                                    Location: sdk.String("dignissimos"),
                                    ServiceURI: sdk.String("minus"),
                                    URI: sdk.String("https://superb-repair.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("saepe"),
                                    ExternalIP: sdk.String("earum"),
                                    InternalIP: sdk.String("quod"),
                                    NetworkURI: sdk.String("nihil"),
                                    Region: sdk.String("quaerat"),
                                    URI: sdk.String("http://long-limit.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("deserunt"),
                                    Target: shared.DeliverInfoTargetEnumInstance.ToPointer(),
                                },
                                Description: sdk.String("ad"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumPrivateTrafficToInternet.ToPointer(),
                                    ResourceURI: sdk.String("beatae"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("iusto"),
                                    DestinationNetworkURI: sdk.String("esse"),
                                    DestinationPort: sdk.Int(298246),
                                    Protocol: sdk.String("odio"),
                                    SourceIP: sdk.String("nulla"),
                                    SourceNetworkURI: sdk.String("impedit"),
                                    SourcePort: sdk.Int(586277),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("illo"),
                                    Direction: sdk.String("exercitationem"),
                                    DisplayName: sdk.String("laborum"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumNetworkFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("fugit"),
                                    Policy: sdk.String("maxime"),
                                    Priority: sdk.Int(681115),
                                    TargetServiceAccounts: []string{
                                        "nostrum",
                                        "illum",
                                        "quibusdam",
                                        "commodi",
                                    },
                                    TargetTags: []string{
                                        "explicabo",
                                        "consectetur",
                                    },
                                    URI: sdk.String("https://slimy-baggie.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("exercitationem"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("repudiandae"),
                                    MatchedPortRange: sdk.String("aspernatur"),
                                    MatchedProtocol: sdk.String("sapiente"),
                                    NetworkURI: sdk.String("neque"),
                                    Target: sdk.String("officia"),
                                    URI: sdk.String("http://reliable-lag.com"),
                                    Vip: sdk.String("perferendis"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("laudantium"),
                                    ClusterURI: sdk.String("iusto"),
                                    ExternalIP: sdk.String("corrupti"),
                                    InternalIP: sdk.String("molestiae"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("quis"),
                                    ExternalIP: sdk.String("iure"),
                                    Interface: sdk.String("ab"),
                                    InternalIP: sdk.String("quaerat"),
                                    NetworkTags: []string{
                                        "sapiente",
                                    },
                                    NetworkURI: sdk.String("corporis"),
                                    ServiceAccount: sdk.String("est"),
                                    URI: sdk.String("http://spicy-nest.name"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("nemo"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ipsam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "tempora",
                                                "perferendis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "doloremque",
                                                "fugiat",
                                                "numquam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://sick-panel.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("impedit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cumque",
                                                "soluta",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "laboriosam",
                                                "nam",
                                                "enim",
                                                "maiores",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://stimulating-narrative.com"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("provident"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("accusantium"),
                                    MatchedIPRange: sdk.String("magnam"),
                                    URI: sdk.String("https://palatable-caribou.info"),
                                },
                                ProjectID: sdk.String("cum"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("id"),
                                    DestPortRanges: []string{
                                        "fugit",
                                        "ipsam",
                                        "nostrum",
                                        "sequi",
                                    },
                                    DisplayName: sdk.String("voluptatum"),
                                    InstanceTags: []string{
                                        "error",
                                    },
                                    NetworkURI: sdk.String("nobis"),
                                    NextHop: sdk.String("tempora"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(261170),
                                    Protocols: []string{
                                        "aperiam",
                                        "voluptates",
                                        "possimus",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("voluptatem"),
                                    SrcPortRanges: []string{
                                        "corporis",
                                        "ea",
                                        "eos",
                                        "aliquam",
                                    },
                                    URI: sdk.String("https://warped-wholesaler.org"),
                                },
                                State: shared.StepStateEnumApplyRoute.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("nesciunt"),
                                    Location: sdk.String("cupiditate"),
                                    URI: sdk.String("https://optimal-brief.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("mollitia"),
                                    IPAddress: sdk.String("nam"),
                                    NetworkURI: sdk.String("assumenda"),
                                    Region: sdk.String("quo"),
                                    URI: sdk.String("https://separate-haunt.com"),
                                    VpnTunnelURI: sdk.String("suscipit"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("voluptate"),
                                    NetworkURI: sdk.String("nisi"),
                                    Region: sdk.String("aliquid"),
                                    RemoteGateway: sdk.String("provident"),
                                    RemoteGatewayIP: sdk.String("laboriosam"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumDynamic.ToPointer(),
                                    SourceGateway: sdk.String("ab"),
                                    SourceGatewayIP: sdk.String("itaque"),
                                    URI: sdk.String("https://automatic-accountability.biz"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("consequuntur"),
                            DestinationNetworkURI: sdk.String("vitae"),
                            DestinationPort: sdk.Int(696828),
                            Protocol: sdk.String("sequi"),
                            SourceIP: sdk.String("amet"),
                            SourceNetworkURI: sdk.String("exercitationem"),
                            SourcePort: sdk.Int(847018),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "eligendi",
                                        "tempore",
                                        "amet",
                                    },
                                    ResourceURI: sdk.String("debitis"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("nobis"),
                                    Environment: sdk.String("asperiores"),
                                    Runtime: sdk.String("temporibus"),
                                    URI: sdk.String("https://moist-stallion.com"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("quo"),
                                    Location: sdk.String("veniam"),
                                    URI: sdk.String("http://optimal-suspect.org"),
                                    VersionID: sdk.String("doloremque"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ipsum"),
                                    Location: sdk.String("alias"),
                                    ServiceURI: sdk.String("doloremque"),
                                    URI: sdk.String("http://ornery-injury.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("officia"),
                                    ExternalIP: sdk.String("ex"),
                                    InternalIP: sdk.String("architecto"),
                                    NetworkURI: sdk.String("a"),
                                    Region: sdk.String("laborum"),
                                    URI: sdk.String("http://steep-veldt.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("accusantium"),
                                    Target: shared.DeliverInfoTargetEnumGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("atque"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumGkeMasterUnauthorizedAccess.ToPointer(),
                                    ResourceURI: sdk.String("tenetur"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("voluptate"),
                                    DestinationNetworkURI: sdk.String("quam"),
                                    DestinationPort: sdk.Int(799830),
                                    Protocol: sdk.String("vitae"),
                                    SourceIP: sdk.String("sapiente"),
                                    SourceNetworkURI: sdk.String("reiciendis"),
                                    SourcePort: sdk.Int(798953),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("voluptate"),
                                    Direction: sdk.String("inventore"),
                                    DisplayName: sdk.String("facere"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("fuga"),
                                    Policy: sdk.String("ab"),
                                    Priority: sdk.Int(405789),
                                    TargetServiceAccounts: []string{
                                        "maiores",
                                    },
                                    TargetTags: []string{
                                        "animi",
                                    },
                                    URI: sdk.String("http://single-lychee.com"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("laborum"),
                                    Target: shared.ForwardInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("nihil"),
                                    MatchedPortRange: sdk.String("tenetur"),
                                    MatchedProtocol: sdk.String("sapiente"),
                                    NetworkURI: sdk.String("velit"),
                                    Target: sdk.String("adipisci"),
                                    URI: sdk.String("http://slimy-steeple.org"),
                                    Vip: sdk.String("tenetur"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("molestias"),
                                    ClusterURI: sdk.String("ipsam"),
                                    ExternalIP: sdk.String("esse"),
                                    InternalIP: sdk.String("laborum"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("perspiciatis"),
                                    ExternalIP: sdk.String("voluptates"),
                                    Interface: sdk.String("eum"),
                                    InternalIP: sdk.String("quasi"),
                                    NetworkTags: []string{
                                        "odio",
                                        "commodi",
                                        "porro",
                                    },
                                    NetworkURI: sdk.String("aliquid"),
                                    ServiceAccount: sdk.String("mollitia"),
                                    URI: sdk.String("https://coarse-bombing.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("natus"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("a"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "unde",
                                                "ut",
                                                "facere",
                                                "voluptas",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "recusandae",
                                                "quisquam",
                                                "facere",
                                                "dignissimos",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://easy-going-money.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("eaque"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "laboriosam",
                                                "laborum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "assumenda",
                                                "explicabo",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://anchored-account.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ullam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "velit",
                                                "ratione",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "maxime",
                                                "recusandae",
                                                "cumque",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://inferior-win.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("fugit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "necessitatibus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "dicta",
                                                "ipsam",
                                                "consequuntur",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://evil-brother.com"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("molestias"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("autem"),
                                    MatchedIPRange: sdk.String("ducimus"),
                                    URI: sdk.String("https://needy-theology.biz"),
                                },
                                ProjectID: sdk.String("impedit"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("quos"),
                                    DestPortRanges: []string{
                                        "distinctio",
                                        "voluptatem",
                                        "non",
                                        "quaerat",
                                    },
                                    DisplayName: sdk.String("consequatur"),
                                    InstanceTags: []string{
                                        "repellendus",
                                        "commodi",
                                        "quibusdam",
                                    },
                                    NetworkURI: sdk.String("consectetur"),
                                    NextHop: sdk.String("voluptas"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopNetwork.ToPointer(),
                                    Priority: sdk.Int(938244),
                                    Protocols: []string{
                                        "assumenda",
                                        "dolore",
                                        "enim",
                                        "ullam",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("alias"),
                                    SrcPortRanges: []string{
                                        "quibusdam",
                                        "dicta",
                                    },
                                    URI: sdk.String("http://immaculate-conversation.org"),
                                },
                                State: shared.StepStateEnumStartFromCloudFunction.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("rem"),
                                    Location: sdk.String("officiis"),
                                    URI: sdk.String("https://dishonest-force.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("dolores"),
                                    IPAddress: sdk.String("placeat"),
                                    NetworkURI: sdk.String("excepturi"),
                                    Region: sdk.String("recusandae"),
                                    URI: sdk.String("https://chief-vibrissae.biz"),
                                    VpnTunnelURI: sdk.String("consequatur"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("soluta"),
                                    NetworkURI: sdk.String("necessitatibus"),
                                    Region: sdk.String("sequi"),
                                    RemoteGateway: sdk.String("recusandae"),
                                    RemoteGatewayIP: sdk.String("labore"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("magni"),
                                    SourceGatewayIP: sdk.String("aperiam"),
                                    URI: sdk.String("http://thick-jot.biz"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnknownNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "ad",
                                        "voluptate",
                                    },
                                    ResourceURI: sdk.String("vel"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("minima"),
                                    Environment: sdk.String("sit"),
                                    Runtime: sdk.String("vel"),
                                    URI: sdk.String("http://frightened-bonsai.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("dignissimos"),
                                    Location: sdk.String("doloremque"),
                                    URI: sdk.String("https://optimal-snap.com"),
                                    VersionID: sdk.String("inventore"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("voluptatibus"),
                                    Location: sdk.String("unde"),
                                    ServiceURI: sdk.String("deserunt"),
                                    URI: sdk.String("https://aching-dame.com"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("optio"),
                                    ExternalIP: sdk.String("tempora"),
                                    InternalIP: sdk.String("debitis"),
                                    NetworkURI: sdk.String("cumque"),
                                    Region: sdk.String("maxime"),
                                    URI: sdk.String("http://carefree-pineapple.com"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("quos"),
                                    Target: shared.DeliverInfoTargetEnumInstance.ToPointer(),
                                },
                                Description: sdk.String("iure"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumUnknownInternalAddress.ToPointer(),
                                    ResourceURI: sdk.String("eos"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("natus"),
                                    DestinationNetworkURI: sdk.String("voluptatem"),
                                    DestinationPort: sdk.Int(384273),
                                    Protocol: sdk.String("laudantium"),
                                    SourceIP: sdk.String("facilis"),
                                    SourceNetworkURI: sdk.String("laudantium"),
                                    SourcePort: sdk.Int(353075),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("aut"),
                                    Direction: sdk.String("quia"),
                                    DisplayName: sdk.String("officia"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("corporis"),
                                    Policy: sdk.String("accusamus"),
                                    Priority: sdk.Int(481307),
                                    TargetServiceAccounts: []string{
                                        "esse",
                                        "neque",
                                        "quidem",
                                        "quisquam",
                                    },
                                    TargetTags: []string{
                                        "tempora",
                                        "ipsam",
                                        "officiis",
                                    },
                                    URI: sdk.String("http://dangerous-animal.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("amet"),
                                    Target: shared.ForwardInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("error"),
                                    MatchedPortRange: sdk.String("voluptatibus"),
                                    MatchedProtocol: sdk.String("numquam"),
                                    NetworkURI: sdk.String("rerum"),
                                    Target: sdk.String("dolorum"),
                                    URI: sdk.String("https://vivacious-misfit.biz"),
                                    Vip: sdk.String("molestiae"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("impedit"),
                                    ClusterURI: sdk.String("error"),
                                    ExternalIP: sdk.String("animi"),
                                    InternalIP: sdk.String("voluptatum"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("aliquid"),
                                    ExternalIP: sdk.String("nihil"),
                                    Interface: sdk.String("facilis"),
                                    InternalIP: sdk.String("optio"),
                                    NetworkTags: []string{
                                        "eos",
                                        "magnam",
                                    },
                                    NetworkURI: sdk.String("dolores"),
                                    ServiceAccount: sdk.String("aliquid"),
                                    URI: sdk.String("http://impressive-exam.name"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("suscipit"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("fugiat"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "culpa",
                                                "atque",
                                                "voluptates",
                                                "maiores",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "illo",
                                                "doloribus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://fancy-sand.info"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("occaecati"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "accusamus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quasi",
                                                "fugit",
                                                "quo",
                                                "temporibus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://tempting-badger.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("placeat"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "similique",
                                                "delectus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "facere",
                                                "nobis",
                                                "at",
                                                "molestias",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://wavy-doorbell.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("corrupti"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolore",
                                                "esse",
                                                "reiciendis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "amet",
                                                "occaecati",
                                                "aut",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://murky-lawsuit.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("voluptatem"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumHTTPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("quas"),
                                    MatchedIPRange: sdk.String("ipsum"),
                                    URI: sdk.String("https://real-psychology.org"),
                                },
                                ProjectID: sdk.String("error"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("recusandae"),
                                    DestPortRanges: []string{
                                        "consectetur",
                                        "sapiente",
                                        "voluptatibus",
                                        "assumenda",
                                    },
                                    DisplayName: sdk.String("repellendus"),
                                    InstanceTags: []string{
                                        "delectus",
                                        "odio",
                                        "voluptatibus",
                                    },
                                    NetworkURI: sdk.String("aut"),
                                    NextHop: sdk.String("quam"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopVpnGateway.ToPointer(),
                                    Priority: sdk.Int(626676),
                                    Protocols: []string{
                                        "modi",
                                        "facere",
                                        "neque",
                                        "quis",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("sed"),
                                    SrcPortRanges: []string{
                                        "porro",
                                        "fugiat",
                                    },
                                    URI: sdk.String("https://babyish-wallet.biz"),
                                },
                                State: shared.StepStateEnumDrop.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("eos"),
                                    Location: sdk.String("quas"),
                                    URI: sdk.String("http://busy-lever.info"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("fugiat"),
                                    IPAddress: sdk.String("enim"),
                                    NetworkURI: sdk.String("iure"),
                                    Region: sdk.String("laudantium"),
                                    URI: sdk.String("http://formal-tabby.org"),
                                    VpnTunnelURI: sdk.String("repudiandae"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("quibusdam"),
                                    NetworkURI: sdk.String("praesentium"),
                                    Region: sdk.String("enim"),
                                    RemoteGateway: sdk.String("animi"),
                                    RemoteGatewayIP: sdk.String("unde"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("eum"),
                                    SourceGatewayIP: sdk.String("nostrum"),
                                    URI: sdk.String("https://honorable-company.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumMismatchedSourceNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "reiciendis",
                                        "placeat",
                                        "dolores",
                                        "consequatur",
                                    },
                                    ResourceURI: sdk.String("nesciunt"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("quia"),
                                    Environment: sdk.String("quidem"),
                                    Runtime: sdk.String("voluptas"),
                                    URI: sdk.String("https://made-up-kingdom.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("omnis"),
                                    Location: sdk.String("fugit"),
                                    URI: sdk.String("http://revolving-jacket.org"),
                                    VersionID: sdk.String("vitae"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("dolor"),
                                    Location: sdk.String("ad"),
                                    ServiceURI: sdk.String("atque"),
                                    URI: sdk.String("http://writhing-hydrolyse.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("itaque"),
                                    ExternalIP: sdk.String("et"),
                                    InternalIP: sdk.String("eos"),
                                    NetworkURI: sdk.String("impedit"),
                                    Region: sdk.String("ex"),
                                    URI: sdk.String("https://perfect-buddy.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("laudantium"),
                                    Target: shared.DeliverInfoTargetEnumInstance.ToPointer(),
                                },
                                Description: sdk.String("eligendi"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumVpcConnectorNotRunning.ToPointer(),
                                    ResourceURI: sdk.String("dicta"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("inventore"),
                                    DestinationNetworkURI: sdk.String("ullam"),
                                    DestinationPort: sdk.Int(480741),
                                    Protocol: sdk.String("inventore"),
                                    SourceIP: sdk.String("voluptate"),
                                    SourceNetworkURI: sdk.String("sed"),
                                    SourcePort: sdk.Int(209602),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("eaque"),
                                    Direction: sdk.String("exercitationem"),
                                    DisplayName: sdk.String("amet"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("voluptate"),
                                    Policy: sdk.String("pariatur"),
                                    Priority: sdk.Int(791421),
                                    TargetServiceAccounts: []string{
                                        "fuga",
                                        "totam",
                                        "cupiditate",
                                        "at",
                                    },
                                    TargetTags: []string{
                                        "omnis",
                                        "quam",
                                        "exercitationem",
                                        "voluptates",
                                    },
                                    URI: sdk.String("http://glittering-harbour.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("rem"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("aperiam"),
                                    MatchedPortRange: sdk.String("perspiciatis"),
                                    MatchedProtocol: sdk.String("fugit"),
                                    NetworkURI: sdk.String("itaque"),
                                    Target: sdk.String("unde"),
                                    URI: sdk.String("https://elastic-spectrograph.org"),
                                    Vip: sdk.String("minus"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("minima"),
                                    ClusterURI: sdk.String("a"),
                                    ExternalIP: sdk.String("beatae"),
                                    InternalIP: sdk.String("vitae"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("veritatis"),
                                    ExternalIP: sdk.String("facere"),
                                    Interface: sdk.String("earum"),
                                    InternalIP: sdk.String("laborum"),
                                    NetworkTags: []string{
                                        "voluptatem",
                                    },
                                    NetworkURI: sdk.String("odit"),
                                    ServiceAccount: sdk.String("aliquid"),
                                    URI: sdk.String("https://fruitful-detail.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("quaerat"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("vitae"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "alias",
                                                "sapiente",
                                                "officiis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quia",
                                                "vitae",
                                                "odio",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://sarcastic-sky.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("eligendi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "possimus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "distinctio",
                                                "assumenda",
                                                "illum",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://magnificent-diver.info"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("doloremque"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "reiciendis",
                                                "facilis",
                                                "aliquam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "amet",
                                                "natus",
                                                "ab",
                                                "officiis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://strict-baseball.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("blanditiis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "labore",
                                                "impedit",
                                                "ut",
                                                "earum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "numquam",
                                                "enim",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://vicious-poultry.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("modi"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("explicabo"),
                                    MatchedIPRange: sdk.String("suscipit"),
                                    URI: sdk.String("http://unwitting-moonscape.net"),
                                },
                                ProjectID: sdk.String("qui"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("accusantium"),
                                    DestPortRanges: []string{
                                        "impedit",
                                    },
                                    DisplayName: sdk.String("recusandae"),
                                    InstanceTags: []string{
                                        "deleniti",
                                        "est",
                                    },
                                    NetworkURI: sdk.String("et"),
                                    NextHop: sdk.String("expedita"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIlb.ToPointer(),
                                    Priority: sdk.Int(552984),
                                    Protocols: []string{
                                        "quidem",
                                        "in",
                                        "culpa",
                                        "doloremque",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("dicta"),
                                    SrcPortRanges: []string{
                                        "suscipit",
                                    },
                                    URI: sdk.String("https://uneven-kiss.com"),
                                },
                                State: shared.StepStateEnumStartFromCloudSQLInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("possimus"),
                                    Location: sdk.String("quaerat"),
                                    URI: sdk.String("http://pesky-industrialisation.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("deserunt"),
                                    IPAddress: sdk.String("ratione"),
                                    NetworkURI: sdk.String("ipsa"),
                                    Region: sdk.String("debitis"),
                                    URI: sdk.String("https://pretty-urn.info"),
                                    VpnTunnelURI: sdk.String("consequuntur"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("ipsam"),
                                    NetworkURI: sdk.String("libero"),
                                    Region: sdk.String("quia"),
                                    RemoteGateway: sdk.String("omnis"),
                                    RemoteGatewayIP: sdk.String("dicta"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("explicabo"),
                                    SourceGatewayIP: sdk.String("consequatur"),
                                    URI: sdk.String("http://acrobatic-stepping-stone.name"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("velit"),
                            DestinationNetworkURI: sdk.String("hic"),
                            DestinationPort: sdk.Int(356485),
                            Protocol: sdk.String("deserunt"),
                            SourceIP: sdk.String("itaque"),
                            SourceNetworkURI: sdk.String("distinctio"),
                            SourcePort: sdk.Int(480295),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "assumenda",
                                        "sunt",
                                        "odit",
                                    },
                                    ResourceURI: sdk.String("vero"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("deleniti"),
                                    Environment: sdk.String("optio"),
                                    Runtime: sdk.String("quasi"),
                                    URI: sdk.String("https://monstrous-effective.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("amet"),
                                    Location: sdk.String("corrupti"),
                                    URI: sdk.String("http://gummy-vulture.org"),
                                    VersionID: sdk.String("porro"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quaerat"),
                                    Location: sdk.String("magni"),
                                    ServiceURI: sdk.String("cumque"),
                                    URI: sdk.String("https://irresponsible-hardening.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("sed"),
                                    ExternalIP: sdk.String("minus"),
                                    InternalIP: sdk.String("consequuntur"),
                                    NetworkURI: sdk.String("possimus"),
                                    Region: sdk.String("delectus"),
                                    URI: sdk.String("https://frail-rostrum.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("quo"),
                                    Target: shared.DeliverInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                Description: sdk.String("nobis"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumCloudSQLInstanceNotRunning.ToPointer(),
                                    ResourceURI: sdk.String("nisi"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("explicabo"),
                                    DestinationNetworkURI: sdk.String("sequi"),
                                    DestinationPort: sdk.Int(4787),
                                    Protocol: sdk.String("reiciendis"),
                                    SourceIP: sdk.String("quos"),
                                    SourceNetworkURI: sdk.String("numquam"),
                                    SourcePort: sdk.Int(113894),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("maiores"),
                                    Direction: sdk.String("nam"),
                                    DisplayName: sdk.String("architecto"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("assumenda"),
                                    Policy: sdk.String("eos"),
                                    Priority: sdk.Int(211518),
                                    TargetServiceAccounts: []string{
                                        "repellendus",
                                        "nam",
                                        "ab",
                                        "magnam",
                                    },
                                    TargetTags: []string{
                                        "expedita",
                                        "autem",
                                        "tempore",
                                        "recusandae",
                                    },
                                    URI: sdk.String("http://powerful-gamma-ray.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("corporis"),
                                    Target: shared.ForwardInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("natus"),
                                    MatchedPortRange: sdk.String("deleniti"),
                                    MatchedProtocol: sdk.String("necessitatibus"),
                                    NetworkURI: sdk.String("aspernatur"),
                                    Target: sdk.String("dolores"),
                                    URI: sdk.String("https://trusty-cold.com"),
                                    Vip: sdk.String("temporibus"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("id"),
                                    ClusterURI: sdk.String("quae"),
                                    ExternalIP: sdk.String("commodi"),
                                    InternalIP: sdk.String("a"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("minus"),
                                    ExternalIP: sdk.String("sed"),
                                    Interface: sdk.String("nam"),
                                    InternalIP: sdk.String("quia"),
                                    NetworkTags: []string{
                                        "ab",
                                        "deserunt",
                                    },
                                    NetworkURI: sdk.String("sed"),
                                    ServiceAccount: sdk.String("blanditiis"),
                                    URI: sdk.String("https://strong-folklore.info"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("rem"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("non"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "omnis",
                                                "ipsa",
                                                "aliquam",
                                                "dolor",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quibusdam",
                                                "magni",
                                                "consequuntur",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://impartial-full.info"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("cupiditate"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "nisi",
                                                "explicabo",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "doloremque",
                                                "odio",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://fat-vol.info"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("dolorum"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("ratione"),
                                    MatchedIPRange: sdk.String("molestiae"),
                                    URI: sdk.String("https://untidy-widget.com"),
                                },
                                ProjectID: sdk.String("sed"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("eos"),
                                    DestPortRanges: []string{
                                        "quis",
                                    },
                                    DisplayName: sdk.String("vitae"),
                                    InstanceTags: []string{
                                        "labore",
                                        "fugiat",
                                        "quidem",
                                    },
                                    NetworkURI: sdk.String("exercitationem"),
                                    NextHop: sdk.String("veniam"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopNetwork.ToPointer(),
                                    Priority: sdk.Int(95456),
                                    Protocols: []string{
                                        "similique",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("quo"),
                                    SrcPortRanges: []string{
                                        "ex",
                                        "sint",
                                    },
                                    URI: sdk.String("https://worried-neglect.com"),
                                },
                                State: shared.StepStateEnumArriveAtVpnGateway.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("fugit"),
                                    Location: sdk.String("autem"),
                                    URI: sdk.String("https://last-signature.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("impedit"),
                                    IPAddress: sdk.String("cupiditate"),
                                    NetworkURI: sdk.String("deleniti"),
                                    Region: sdk.String("quasi"),
                                    URI: sdk.String("https://ambitious-grandma.name"),
                                    VpnTunnelURI: sdk.String("unde"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("corrupti"),
                                    NetworkURI: sdk.String("quae"),
                                    Region: sdk.String("facere"),
                                    RemoteGateway: sdk.String("ea"),
                                    RemoteGatewayIP: sdk.String("libero"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("amet"),
                                    SourceGatewayIP: sdk.String("adipisci"),
                                    URI: sdk.String("https://wary-panther.net"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumPermissionDenied.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "laudantium",
                                        "cumque",
                                    },
                                    ResourceURI: sdk.String("adipisci"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("veritatis"),
                                    Environment: sdk.String("nam"),
                                    Runtime: sdk.String("voluptatibus"),
                                    URI: sdk.String("http://attached-lake.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("necessitatibus"),
                                    Location: sdk.String("numquam"),
                                    URI: sdk.String("https://single-vinegar.com"),
                                    VersionID: sdk.String("impedit"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("numquam"),
                                    Location: sdk.String("aspernatur"),
                                    ServiceURI: sdk.String("nobis"),
                                    URI: sdk.String("http://mild-wardrobe.com"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("ullam"),
                                    ExternalIP: sdk.String("nisi"),
                                    InternalIP: sdk.String("consequuntur"),
                                    NetworkURI: sdk.String("voluptas"),
                                    Region: sdk.String("ratione"),
                                    URI: sdk.String("https://muffled-plasterboard.com"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("quibusdam"),
                                    Target: shared.DeliverInfoTargetEnumPscPublishedService.ToPointer(),
                                },
                                Description: sdk.String("ducimus"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumFirewallBlockingLoadBalancerBackendHealthCheck.ToPointer(),
                                    ResourceURI: sdk.String("nisi"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("dolor"),
                                    DestinationNetworkURI: sdk.String("fugit"),
                                    DestinationPort: sdk.Int(291596),
                                    Protocol: sdk.String("maxime"),
                                    SourceIP: sdk.String("maxime"),
                                    SourceNetworkURI: sdk.String("expedita"),
                                    SourcePort: sdk.Int(37181),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("ea"),
                                    Direction: sdk.String("impedit"),
                                    DisplayName: sdk.String("totam"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("est"),
                                    Policy: sdk.String("inventore"),
                                    Priority: sdk.Int(164805),
                                    TargetServiceAccounts: []string{
                                        "sit",
                                        "dolores",
                                        "enim",
                                        "aspernatur",
                                    },
                                    TargetTags: []string{
                                        "magni",
                                        "odio",
                                        "alias",
                                    },
                                    URI: sdk.String("https://mindless-snowboarding.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("odio"),
                                    Target: shared.ForwardInfoTargetEnumPeeringVpc.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("aspernatur"),
                                    MatchedPortRange: sdk.String("at"),
                                    MatchedProtocol: sdk.String("illum"),
                                    NetworkURI: sdk.String("praesentium"),
                                    Target: sdk.String("sint"),
                                    URI: sdk.String("http://shady-mailbox.net"),
                                    Vip: sdk.String("placeat"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("reiciendis"),
                                    ClusterURI: sdk.String("dolores"),
                                    ExternalIP: sdk.String("dolore"),
                                    InternalIP: sdk.String("pariatur"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("facilis"),
                                    ExternalIP: sdk.String("cupiditate"),
                                    Interface: sdk.String("nemo"),
                                    InternalIP: sdk.String("natus"),
                                    NetworkTags: []string{
                                        "provident",
                                        "amet",
                                    },
                                    NetworkURI: sdk.String("dolor"),
                                    ServiceAccount: sdk.String("nostrum"),
                                    URI: sdk.String("http://wealthy-jailhouse.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("velit"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("cupiditate"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "numquam",
                                                "fugiat",
                                                "molestiae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repellendus",
                                                "saepe",
                                                "amet",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://unruly-omission.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("corrupti"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumHTTPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("voluptatibus"),
                                    MatchedIPRange: sdk.String("ullam"),
                                    URI: sdk.String("https://shimmering-representation.info"),
                                },
                                ProjectID: sdk.String("delectus"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("commodi"),
                                    DestPortRanges: []string{
                                        "fugit",
                                        "ullam",
                                    },
                                    DisplayName: sdk.String("ullam"),
                                    InstanceTags: []string{
                                        "est",
                                    },
                                    NetworkURI: sdk.String("qui"),
                                    NextHop: sdk.String("praesentium"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInstance.ToPointer(),
                                    Priority: sdk.Int(519132),
                                    Protocols: []string{
                                        "deserunt",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("incidunt"),
                                    SrcPortRanges: []string{
                                        "dolor",
                                        "est",
                                        "reiciendis",
                                    },
                                    URI: sdk.String("https://confused-cupola.com"),
                                },
                                State: shared.StepStateEnumStartFromCloudRunRevision.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("facilis"),
                                    Location: sdk.String("facilis"),
                                    URI: sdk.String("https://hospitable-fulfillment.com"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("illo"),
                                    IPAddress: sdk.String("iure"),
                                    NetworkURI: sdk.String("incidunt"),
                                    Region: sdk.String("eveniet"),
                                    URI: sdk.String("http://ill-informed-workbench.biz"),
                                    VpnTunnelURI: sdk.String("quidem"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    NetworkURI: sdk.String("eum"),
                                    Region: sdk.String("deserunt"),
                                    RemoteGateway: sdk.String("repudiandae"),
                                    RemoteGatewayIP: sdk.String("nemo"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("architecto"),
                                    SourceGatewayIP: sdk.String("expedita"),
                                    URI: sdk.String("https://lucky-punishment.net"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("repudiandae"),
            },
            RelatedProjects: []string{
                "ipsum",
                "commodi",
                "vitae",
                "fugit",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://idealistic-controller.net"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("http://abandoned-evil.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://pushy-manservant.biz"),
                },
                CloudSQLInstance: sdk.String("aperiam"),
                GkeMasterCluster: sdk.String("dignissimos"),
                Instance: sdk.String("quam"),
                IPAddress: sdk.String("modi"),
                Network: sdk.String("fuga"),
                NetworkType: shared.EndpointNetworkTypeEnumGcpNetwork.ToPointer(),
                Port: sdk.Int(538368),
                ProjectID: sdk.String("officia"),
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("ad"),
        Key: sdk.String("illum"),
        Name: "Leona Hodkiewicz",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UpdateMask: sdk.String("vel"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity{
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

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sed": "accusantium",
        },
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("numquam"),
        Name: "Celia Gottlieb",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity{
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

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cum",
                                    "quibusdam",
                                    "est",
                                    "commodi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dicta",
                                    "recusandae",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odit",
                                    "inventore",
                                    "iste",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("explicabo"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "doloribus",
                                    "pariatur",
                                    "aut",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eveniet",
                                    "nam",
                                    "animi",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptate"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nulla",
                                    "dolorem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "perferendis",
                                    "quaerat",
                                    "excepturi",
                                    "aliquid",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "illum",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dicta",
                                    "atque",
                                    "ratione",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("quisquam"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "culpa",
                                    "temporibus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cupiditate",
                                    "suscipit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "ab",
                                    "mollitia",
                                    "possimus",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("neque"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("animi"),
                            Expression: sdk.String("debitis"),
                            Location: sdk.String("voluptatum"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "vitae",
                            "cumque",
                            "architecto",
                            "sint",
                        },
                        Role: sdk.String("eligendi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("occaecati"),
                            Expression: sdk.String("quis"),
                            Location: sdk.String("tempore"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "unde",
                            "quas",
                            "laboriosam",
                        },
                        Role: sdk.String("ducimus"),
                    },
                },
                Etag: sdk.String("voluptatum"),
                Version: sdk.Int(957510),
            },
            UpdateMask: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("sint"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        Resource: "ab",
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("a"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions(ctx, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "molestias",
                "quod",
                "repudiandae",
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        Resource: "quos",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalOperationsCancel(ctx, operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "reprehenderit": "animi",
            "consequatur": "voluptates",
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("exercitationem"),
        Key: sdk.String("ipsum"),
        Name: "Michelle Cremin",
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalOperationsDelete(ctx, operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("sed"),
        Name: "Rufus Kulas",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsGlobalOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalOperationsGet(ctx, operations.NetworkmanagementProjectsLocationsGlobalOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("voluptates"),
        Name: "Ms. Ernesto King DVM",
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("est"),
    }, operations.NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity{
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

## NetworkmanagementProjectsLocationsGlobalOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalOperationsList(ctx, operations.NetworkmanagementProjectsLocationsGlobalOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("laboriosam"),
        Filter: sdk.String("quam"),
        Key: sdk.String("fuga"),
        Name: "Emanuel McKenzie",
        OauthToken: sdk.String("culpa"),
        PageSize: sdk.Int64(855647),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.NetworkmanagementProjectsLocationsGlobalOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## NetworkmanagementProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.NetworkmanagementProjectsLocationsList(ctx, operations.NetworkmanagementProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("suscipit"),
        Key: sdk.String("quidem"),
        Name: "Maurice Runolfsdottir",
        OauthToken: sdk.String("atque"),
        PageSize: sdk.Int64(979706),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("quod"),
    }, operations.NetworkmanagementProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
