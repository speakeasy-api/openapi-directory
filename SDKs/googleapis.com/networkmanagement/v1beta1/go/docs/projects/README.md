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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectivityTestInput: &shared.ConnectivityTestInput{
            Description: sdk.String("itaque"),
            Destination: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("http://questionable-specialist.net"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://fine-proximal.name"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("http://beautiful-lifetime.info"),
                },
                CloudSQLInstance: sdk.String("occaecati"),
                ForwardingRule: sdk.String("voluptatibus"),
                GkeMasterCluster: sdk.String("quisquam"),
                Instance: sdk.String("vero"),
                IPAddress: sdk.String("omnis"),
                Network: sdk.String("quis"),
                NetworkType: shared.EndpointNetworkTypeEnumNetworkTypeUnspecified.ToPointer(),
                Port: sdk.Int(961571),
                ProjectID: sdk.String("voluptate"),
            },
            Labels: map[string]string{
                "vero": "tenetur",
            },
            Name: sdk.String("Darla Rau"),
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: shared.ProbingDetailsAbortCauseEnumPermissionDenied.ToPointer(),
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: sdk.String("facilis"),
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: sdk.String("vero"),
                    DestinationNetworkURI: sdk.String("ducimus"),
                    DestinationPort: sdk.Int(293020),
                    Protocol: sdk.String("quibusdam"),
                    SourceAgentURI: sdk.String("illum"),
                    SourceIP: sdk.String("sequi"),
                    SourceNetworkURI: sdk.String("natus"),
                    SourcePort: sdk.Int(773326),
                },
                Error: &shared.Status{
                    Code: sdk.Int(13236),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "nulla": "fugit",
                            "porro": "maiores",
                        },
                        map[string]interface{}{
                            "iusto": "eligendi",
                            "ducimus": "alias",
                            "officia": "tempora",
                            "ipsam": "ea",
                        },
                        map[string]interface{}{
                            "vel": "possimus",
                        },
                        map[string]interface{}{
                            "ratione": "ex",
                            "laudantium": "dicta",
                        },
                    },
                    Message: sdk.String("dolor"),
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("quasi"),
                            Percent: sdk.Int(406120),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("nulla"),
                            Percent: sdk.Int(569211),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("voluptatibus"),
                            Percent: sdk.Int(343605),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("sapiente"),
                            Percent: sdk.Int(788873),
                        },
                    },
                },
                Result: shared.ProbingDetailsResultEnumUndetermined.ToPointer(),
                SentProbeCount: sdk.Int(411372),
                SuccessfulProbeCount: sdk.Int(774048),
                VerifyTime: sdk.String("corporis"),
            },
            Protocol: sdk.String("veniam"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(399499),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "ea": "quo",
                            "consectetur": "recusandae",
                        },
                    },
                    Message: sdk.String("aspernatur"),
                },
                Result: shared.ReachabilityDetailsResultEnumReachable.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("a"),
                            DestinationNetworkURI: sdk.String("libero"),
                            DestinationPort: sdk.Int(13948),
                            Protocol: sdk.String("aut"),
                            SourceAgentURI: sdk.String("deleniti"),
                            SourceIP: sdk.String("impedit"),
                            SourceNetworkURI: sdk.String("aliquam"),
                            SourcePort: sdk.Int(146946),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnknownNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "et",
                                        "dolorum",
                                    },
                                    ResourceURI: sdk.String("laborum"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("placeat"),
                                    Environment: sdk.String("velit"),
                                    Runtime: sdk.String("eum"),
                                    URI: sdk.String("http://silky-meteorology.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("nulla"),
                                    Location: sdk.String("voluptas"),
                                    URI: sdk.String("https://bulky-disposer.biz"),
                                    VersionID: sdk.String("explicabo"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("provident"),
                                    Location: sdk.String("ipsa"),
                                    ServiceName: sdk.String("molestiae"),
                                    ServiceURI: sdk.String("magnam"),
                                    URI: sdk.String("http://fair-infection.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("rem"),
                                    ExternalIP: sdk.String("fuga"),
                                    InternalIP: sdk.String("reprehenderit"),
                                    NetworkURI: sdk.String("quidem"),
                                    Region: sdk.String("fugiat"),
                                    URI: sdk.String("http://infantile-geek.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("eos"),
                                    Target: shared.DeliverInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                Description: sdk.String("quisquam"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumFirewallRule.ToPointer(),
                                    ResourceURI: sdk.String("ipsa"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("id"),
                                    DestinationNetworkURI: sdk.String("quidem"),
                                    DestinationPort: sdk.Int(206594),
                                    Protocol: sdk.String("quo"),
                                    SourceAgentURI: sdk.String("illum"),
                                    SourceIP: sdk.String("quo"),
                                    SourceNetworkURI: sdk.String("fuga"),
                                    SourcePort: sdk.Int(259422),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("eos"),
                                    Direction: sdk.String("voluptas"),
                                    DisplayName: sdk.String("ab"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("consequatur"),
                                    Policy: sdk.String("tempora"),
                                    Priority: sdk.Int(892050),
                                    TargetServiceAccounts: []string{
                                        "aspernatur",
                                        "sequi",
                                    },
                                    TargetTags: []string{
                                        "esse",
                                        "recusandae",
                                        "aperiam",
                                        "distinctio",
                                    },
                                    URI: sdk.String("https://linear-behalf.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("totam"),
                                    Target: shared.ForwardInfoTargetEnumAnotherProject.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("aliquam"),
                                    MatchedPortRange: sdk.String("odio"),
                                    MatchedProtocol: sdk.String("occaecati"),
                                    NetworkURI: sdk.String("commodi"),
                                    Target: sdk.String("sapiente"),
                                    URI: sdk.String("http://present-island.com"),
                                    Vip: sdk.String("porro"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("eum"),
                                    ClusterURI: sdk.String("quas"),
                                    ExternalIP: sdk.String("praesentium"),
                                    InternalIP: sdk.String("consequuntur"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("deleniti"),
                                    ExternalIP: sdk.String("fugit"),
                                    Interface: sdk.String("fuga"),
                                    InternalIP: sdk.String("mollitia"),
                                    NetworkTags: []string{
                                        "atque",
                                        "explicabo",
                                    },
                                    NetworkURI: sdk.String("minima"),
                                    ServiceAccount: sdk.String("nisi"),
                                    URI: sdk.String("http://well-groomed-chronicle.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("saepe"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("atque"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "esse",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "accusamus",
                                                "veritatis",
                                                "esse",
                                                "quod",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://husky-bone.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("vel"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "molestiae",
                                                "rerum",
                                                "occaecati",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "distinctio",
                                                "eligendi",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://self-reliant-data.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("consequuntur"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "sapiente",
                                                "consectetur",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://optimal-vernacular.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("quas"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumNetworkTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("quasi"),
                                    MatchedIPRange: sdk.String("a"),
                                    URI: sdk.String("https://noteworthy-style.net"),
                                },
                                ProjectID: sdk.String("quia"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("eveniet"),
                                    DestPortRanges: []string{
                                        "facere",
                                        "veritatis",
                                        "consequuntur",
                                        "quasi",
                                    },
                                    DisplayName: sdk.String("similique"),
                                    InstanceTags: []string{
                                        "aliquid",
                                        "tenetur",
                                        "quae",
                                    },
                                    NetworkURI: sdk.String("earum"),
                                    NextHop: sdk.String("vel"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(258684),
                                    Protocols: []string{
                                        "illum",
                                        "soluta",
                                        "accusantium",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("sapiente"),
                                    SrcPortRanges: []string{
                                        "ullam",
                                    },
                                    URI: sdk.String("http://grouchy-goodbye.com"),
                                },
                                State: shared.StepStateEnumArriveAtInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("qui"),
                                    Location: sdk.String("quibusdam"),
                                    URI: sdk.String("http://miserable-trip.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("architecto"),
                                    IPAddress: sdk.String("omnis"),
                                    NetworkURI: sdk.String("tenetur"),
                                    Region: sdk.String("quasi"),
                                    URI: sdk.String("https://brisk-inbox.com"),
                                    VpnTunnelURI: sdk.String("minima"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("veritatis"),
                                    NetworkURI: sdk.String("consectetur"),
                                    Region: sdk.String("adipisci"),
                                    RemoteGateway: sdk.String("iste"),
                                    RemoteGatewayIP: sdk.String("temporibus"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("rem"),
                                    SourceGatewayIP: sdk.String("aut"),
                                    URI: sdk.String("https://inconsequential-performance.com"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumTraceTooLong.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "voluptatem",
                                        "dolor",
                                    },
                                    ResourceURI: sdk.String("occaecati"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("numquam"),
                                    Environment: sdk.String("impedit"),
                                    Runtime: sdk.String("explicabo"),
                                    URI: sdk.String("http://admirable-kit.com"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("maiores"),
                                    Location: sdk.String("natus"),
                                    URI: sdk.String("http://winged-gall-bladder.org"),
                                    VersionID: sdk.String("aperiam"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ea"),
                                    Location: sdk.String("quaerat"),
                                    ServiceName: sdk.String("consequuntur"),
                                    ServiceURI: sdk.String("repellendus"),
                                    URI: sdk.String("https://strange-king.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    ExternalIP: sdk.String("nemo"),
                                    InternalIP: sdk.String("quae"),
                                    NetworkURI: sdk.String("quaerat"),
                                    Region: sdk.String("porro"),
                                    URI: sdk.String("https://flashy-bath.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("fuga"),
                                    Target: shared.DeliverInfoTargetEnumPscPublishedService.ToPointer(),
                                },
                                Description: sdk.String("suscipit"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumNoExternalAddress.ToPointer(),
                                    ResourceURI: sdk.String("culpa"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("est"),
                                    DestinationNetworkURI: sdk.String("recusandae"),
                                    DestinationPort: sdk.Int(517309),
                                    Protocol: sdk.String("fugiat"),
                                    SourceAgentURI: sdk.String("vel"),
                                    SourceIP: sdk.String("ducimus"),
                                    SourceNetworkURI: sdk.String("quos"),
                                    SourcePort: sdk.Int(427834),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("labore"),
                                    Direction: sdk.String("possimus"),
                                    DisplayName: sdk.String("facilis"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("commodi"),
                                    Policy: sdk.String("in"),
                                    Priority: sdk.Int(360545),
                                    TargetServiceAccounts: []string{
                                        "assumenda",
                                        "nemo",
                                        "recusandae",
                                        "aliquid",
                                    },
                                    TargetTags: []string{
                                        "cum",
                                    },
                                    URI: sdk.String("http://irritating-fishbone.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("facere"),
                                    Target: shared.ForwardInfoTargetEnumVpnGateway.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("doloribus"),
                                    MatchedPortRange: sdk.String("suscipit"),
                                    MatchedProtocol: sdk.String("reiciendis"),
                                    NetworkURI: sdk.String("quidem"),
                                    Target: sdk.String("saepe"),
                                    URI: sdk.String("https://focused-caddy.org"),
                                    Vip: sdk.String("adipisci"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("non"),
                                    ClusterURI: sdk.String("amet"),
                                    ExternalIP: sdk.String("beatae"),
                                    InternalIP: sdk.String("dignissimos"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("a"),
                                    ExternalIP: sdk.String("debitis"),
                                    Interface: sdk.String("consectetur"),
                                    InternalIP: sdk.String("corporis"),
                                    NetworkTags: []string{
                                        "laboriosam",
                                        "ipsa",
                                        "voluptates",
                                    },
                                    NetworkURI: sdk.String("libero"),
                                    ServiceAccount: sdk.String("vitae"),
                                    URI: sdk.String("https://plump-divan.com"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("voluptas"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("minima"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolorum",
                                                "adipisci",
                                                "minus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "blanditiis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://fragrant-tambour.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ullam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cum",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quas",
                                                "hic",
                                                "nesciunt",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://trained-load.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("exercitationem"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("sit"),
                                    MatchedIPRange: sdk.String("rerum"),
                                    URI: sdk.String("http://wide-carnation.org"),
                                },
                                ProjectID: sdk.String("facilis"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("voluptate"),
                                    DestPortRanges: []string{
                                        "ab",
                                        "iste",
                                        "dolore",
                                    },
                                    DisplayName: sdk.String("laborum"),
                                    InstanceTags: []string{
                                        "in",
                                    },
                                    NetworkURI: sdk.String("commodi"),
                                    NextHop: sdk.String("quidem"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIP.ToPointer(),
                                    Priority: sdk.Int(378326),
                                    Protocols: []string{
                                        "architecto",
                                        "suscipit",
                                        "sapiente",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPolicyBased.ToPointer(),
                                    SrcIPRange: sdk.String("illo"),
                                    SrcPortRanges: []string{
                                        "perferendis",
                                        "corrupti",
                                        "maiores",
                                        "incidunt",
                                    },
                                    URI: sdk.String("http://optimistic-diaphragm.org"),
                                },
                                State: shared.StepStateEnumStartFromCloudSQLInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("ea"),
                                    Location: sdk.String("occaecati"),
                                    URI: sdk.String("https://wise-distortion.biz"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("voluptate"),
                                    IPAddress: sdk.String("reiciendis"),
                                    NetworkURI: sdk.String("ex"),
                                    Region: sdk.String("sit"),
                                    URI: sdk.String("http://unfortunate-leg.net"),
                                    VpnTunnelURI: sdk.String("quaerat"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("incidunt"),
                                    NetworkURI: sdk.String("ipsam"),
                                    Region: sdk.String("debitis"),
                                    RemoteGateway: sdk.String("rem"),
                                    RemoteGatewayIP: sdk.String("sit"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumDynamic.ToPointer(),
                                    SourceGateway: sdk.String("error"),
                                    SourceGatewayIP: sdk.String("veniam"),
                                    URI: sdk.String("http://variable-wallet.org"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnknownProject.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "saepe",
                                    },
                                    ResourceURI: sdk.String("numquam"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("veniam"),
                                    Environment: sdk.String("in"),
                                    Runtime: sdk.String("officiis"),
                                    URI: sdk.String("http://magnificent-fishbone.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("cum"),
                                    Location: sdk.String("laboriosam"),
                                    URI: sdk.String("https://merry-overnighter.org"),
                                    VersionID: sdk.String("expedita"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("debitis"),
                                    Location: sdk.String("neque"),
                                    ServiceName: sdk.String("dolorum"),
                                    ServiceURI: sdk.String("nostrum"),
                                    URI: sdk.String("https://radiant-maximum.org"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("tempora"),
                                    ExternalIP: sdk.String("atque"),
                                    InternalIP: sdk.String("fugit"),
                                    NetworkURI: sdk.String("ut"),
                                    Region: sdk.String("fugiat"),
                                    URI: sdk.String("http://pointed-pusher.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("consequatur"),
                                    Target: shared.DeliverInfoTargetEnumGkeMaster.ToPointer(),
                                },
                                Description: sdk.String("ipsam"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumCauseUnspecified.ToPointer(),
                                    ResourceURI: sdk.String("voluptatum"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("quas"),
                                    DestinationNetworkURI: sdk.String("repudiandae"),
                                    DestinationPort: sdk.Int(361151),
                                    Protocol: sdk.String("et"),
                                    SourceAgentURI: sdk.String("blanditiis"),
                                    SourceIP: sdk.String("ex"),
                                    SourceNetworkURI: sdk.String("sed"),
                                    SourcePort: sdk.Int(24313),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("vel"),
                                    Direction: sdk.String("nostrum"),
                                    DisplayName: sdk.String("saepe"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("consequatur"),
                                    Policy: sdk.String("incidunt"),
                                    Priority: sdk.Int(968865),
                                    TargetServiceAccounts: []string{
                                        "harum",
                                    },
                                    TargetTags: []string{
                                        "architecto",
                                    },
                                    URI: sdk.String("https://flawed-proctor.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("laborum"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("tenetur"),
                                    MatchedPortRange: sdk.String("laboriosam"),
                                    MatchedProtocol: sdk.String("alias"),
                                    NetworkURI: sdk.String("amet"),
                                    Target: sdk.String("deserunt"),
                                    URI: sdk.String("http://outlying-watercress.name"),
                                    Vip: sdk.String("repellendus"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("delectus"),
                                    ClusterURI: sdk.String("voluptates"),
                                    ExternalIP: sdk.String("perferendis"),
                                    InternalIP: sdk.String("est"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("quidem"),
                                    ExternalIP: sdk.String("reprehenderit"),
                                    Interface: sdk.String("facere"),
                                    InternalIP: sdk.String("fuga"),
                                    NetworkTags: []string{
                                        "mollitia",
                                        "veniam",
                                        "voluptatem",
                                    },
                                    NetworkURI: sdk.String("quisquam"),
                                    ServiceAccount: sdk.String("repudiandae"),
                                    URI: sdk.String("http://monstrous-hurdle.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("suscipit"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("maxime"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "esse",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "assumenda",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://physical-tap.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("accusamus"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "minima",
                                                "aspernatur",
                                                "ex",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "corrupti",
                                                "at",
                                                "error",
                                                "blanditiis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://moist-marble.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("recusandae"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "repellendus",
                                                "labore",
                                                "reiciendis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repudiandae",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://capital-coat.biz"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("laboriosam"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("a"),
                                    MatchedIPRange: sdk.String("molestias"),
                                    URI: sdk.String("http://untrue-chub.name"),
                                },
                                ProjectID: sdk.String("officiis"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("perspiciatis"),
                                    DestPortRanges: []string{
                                        "adipisci",
                                        "eveniet",
                                    },
                                    DisplayName: sdk.String("occaecati"),
                                    InstanceTags: []string{
                                        "fugit",
                                    },
                                    NetworkURI: sdk.String("id"),
                                    NextHop: sdk.String("quis"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(625528),
                                    Protocols: []string{
                                        "corporis",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("eveniet"),
                                    SrcPortRanges: []string{
                                        "vero",
                                    },
                                    URI: sdk.String("http://infatuated-baggy.name"),
                                },
                                State: shared.StepStateEnumStartFromInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("molestiae"),
                                    Location: sdk.String("eveniet"),
                                    URI: sdk.String("http://shady-hormone.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("ratione"),
                                    IPAddress: sdk.String("laborum"),
                                    NetworkURI: sdk.String("distinctio"),
                                    Region: sdk.String("voluptatum"),
                                    URI: sdk.String("https://fragrant-exaggeration.org"),
                                    VpnTunnelURI: sdk.String("alias"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("corporis"),
                                    NetworkURI: sdk.String("perspiciatis"),
                                    Region: sdk.String("nihil"),
                                    RemoteGateway: sdk.String("mollitia"),
                                    RemoteGatewayIP: sdk.String("voluptas"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("maiores"),
                                    SourceGatewayIP: sdk.String("reiciendis"),
                                    URI: sdk.String("http://putrid-extinction.biz"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumMismatchedSourceNetwork.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "quae",
                                    },
                                    ResourceURI: sdk.String("recusandae"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("omnis"),
                                    Environment: sdk.String("quaerat"),
                                    Runtime: sdk.String("molestiae"),
                                    URI: sdk.String("http://first-pardon.biz"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("debitis"),
                                    Location: sdk.String("laudantium"),
                                    URI: sdk.String("http://handy-tributary.info"),
                                    VersionID: sdk.String("provident"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quis"),
                                    Location: sdk.String("eum"),
                                    ServiceName: sdk.String("reiciendis"),
                                    ServiceURI: sdk.String("provident"),
                                    URI: sdk.String("http://grizzled-border.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("nostrum"),
                                    ExternalIP: sdk.String("mollitia"),
                                    InternalIP: sdk.String("provident"),
                                    NetworkURI: sdk.String("possimus"),
                                    Region: sdk.String("animi"),
                                    URI: sdk.String("http://humongous-apprehension.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("doloribus"),
                                    Target: shared.DeliverInfoTargetEnumGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("in"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumPublicGkeControlPlaneToPrivateDestination.ToPointer(),
                                    ResourceURI: sdk.String("earum"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("officia"),
                                    DestinationNetworkURI: sdk.String("laborum"),
                                    DestinationPort: sdk.Int(813054),
                                    Protocol: sdk.String("modi"),
                                    SourceAgentURI: sdk.String("voluptatibus"),
                                    SourceIP: sdk.String("molestias"),
                                    SourceNetworkURI: sdk.String("officiis"),
                                    SourcePort: sdk.Int(956933),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("cumque"),
                                    Direction: sdk.String("vitae"),
                                    DisplayName: sdk.String("rerum"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("quis"),
                                    Policy: sdk.String("inventore"),
                                    Priority: sdk.Int(147685),
                                    TargetServiceAccounts: []string{
                                        "quae",
                                        "perferendis",
                                        "velit",
                                        "aspernatur",
                                    },
                                    TargetTags: []string{
                                        "eius",
                                        "rem",
                                    },
                                    URI: sdk.String("https://sociable-collapse.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("eum"),
                                    Target: shared.ForwardInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("minima"),
                                    MatchedPortRange: sdk.String("beatae"),
                                    MatchedProtocol: sdk.String("cupiditate"),
                                    NetworkURI: sdk.String("provident"),
                                    Target: sdk.String("earum"),
                                    URI: sdk.String("https://warlike-station.com"),
                                    Vip: sdk.String("earum"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("perspiciatis"),
                                    ClusterURI: sdk.String("maiores"),
                                    ExternalIP: sdk.String("debitis"),
                                    InternalIP: sdk.String("aliquid"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("porro"),
                                    ExternalIP: sdk.String("suscipit"),
                                    Interface: sdk.String("dolorem"),
                                    InternalIP: sdk.String("fugit"),
                                    NetworkTags: []string{
                                        "fuga",
                                        "ratione",
                                        "animi",
                                        "necessitatibus",
                                    },
                                    NetworkURI: sdk.String("nulla"),
                                    ServiceAccount: sdk.String("consequatur"),
                                    URI: sdk.String("http://brief-landform.name"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("suscipit"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("quasi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "doloribus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                                "ipsa",
                                                "tempora",
                                                "nihil",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://lawful-indigence.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("maiores"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumSslProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("vel"),
                                    MatchedIPRange: sdk.String("architecto"),
                                    URI: sdk.String("https://any-bush.info"),
                                },
                                ProjectID: sdk.String("tempora"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("esse"),
                                    DestPortRanges: []string{
                                        "consectetur",
                                        "aliquid",
                                    },
                                    DisplayName: sdk.String("ipsa"),
                                    InstanceTags: []string{
                                        "sunt",
                                        "nostrum",
                                        "fugiat",
                                    },
                                    NetworkURI: sdk.String("expedita"),
                                    NextHop: sdk.String("aliquid"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopVpnGateway.ToPointer(),
                                    Priority: sdk.Int(381397),
                                    Protocols: []string{
                                        "perferendis",
                                        "eum",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("iste"),
                                    SrcPortRanges: []string{
                                        "ab",
                                        "error",
                                        "possimus",
                                    },
                                    URI: sdk.String("https://prize-plug.net"),
                                },
                                State: shared.StepStateEnumStartFromCloudRunRevision.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("deleniti"),
                                    Location: sdk.String("enim"),
                                    URI: sdk.String("http://tall-guilt.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("ex"),
                                    IPAddress: sdk.String("ut"),
                                    NetworkURI: sdk.String("ad"),
                                    Region: sdk.String("expedita"),
                                    URI: sdk.String("http://necessary-remote.info"),
                                    VpnTunnelURI: sdk.String("beatae"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("voluptatum"),
                                    NetworkURI: sdk.String("omnis"),
                                    Region: sdk.String("veritatis"),
                                    RemoteGateway: sdk.String("rerum"),
                                    RemoteGatewayIP: sdk.String("est"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumPolicyBased.ToPointer(),
                                    SourceGateway: sdk.String("voluptatem"),
                                    SourceGatewayIP: sdk.String("sapiente"),
                                    URI: sdk.String("https://calculating-postbox.org"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("debitis"),
            },
            RelatedProjects: []string{
                "alias",
            },
            Source: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://vital-guestbook.org"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://staid-fragrance.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("http://gross-album.org"),
                },
                CloudSQLInstance: sdk.String("totam"),
                ForwardingRule: sdk.String("impedit"),
                GkeMasterCluster: sdk.String("quibusdam"),
                Instance: sdk.String("nam"),
                IPAddress: sdk.String("ipsam"),
                Network: sdk.String("culpa"),
                NetworkType: shared.EndpointNetworkTypeEnumNetworkTypeUnspecified.ToPointer(),
                Port: sdk.Int(307376),
                ProjectID: sdk.String("inventore"),
            },
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("architecto"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        TestID: sdk.String("fugit"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("laudantium"),
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
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("quas"),
        OptionsRequestedPolicyVersion: sdk.Int64(911198),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        Resource: "officiis",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("necessitatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("eum"),
        Filter: sdk.String("vel"),
        Key: sdk.String("voluptatum"),
        OauthToken: sdk.String("magnam"),
        OrderBy: sdk.String("exercitationem"),
        PageSize: sdk.Int64(70410),
        PageToken: sdk.String("porro"),
        Parent: "autem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("recusandae"),
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
            Description: sdk.String("voluptatem"),
            Destination: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("http://unlined-boom.info"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://ugly-planter.net"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("http://worthy-tournament.net"),
                },
                CloudSQLInstance: sdk.String("occaecati"),
                ForwardingRule: sdk.String("nemo"),
                GkeMasterCluster: sdk.String("voluptate"),
                Instance: sdk.String("blanditiis"),
                IPAddress: sdk.String("officia"),
                Network: sdk.String("voluptas"),
                NetworkType: shared.EndpointNetworkTypeEnumNetworkTypeUnspecified.ToPointer(),
                Port: sdk.Int(364912),
                ProjectID: sdk.String("quos"),
            },
            Labels: map[string]string{
                "aspernatur": "ducimus",
                "nesciunt": "fuga",
            },
            Name: sdk.String("Randall Boyle"),
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: shared.ProbingDetailsAbortCauseEnumProbingAbortCauseUnspecified.ToPointer(),
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: sdk.String("nisi"),
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: sdk.String("consequuntur"),
                    DestinationNetworkURI: sdk.String("consectetur"),
                    DestinationPort: sdk.Int(46806),
                    Protocol: sdk.String("cupiditate"),
                    SourceAgentURI: sdk.String("reiciendis"),
                    SourceIP: sdk.String("soluta"),
                    SourceNetworkURI: sdk.String("alias"),
                    SourcePort: sdk.Int(608989),
                },
                Error: &shared.Status{
                    Code: sdk.Int(178580),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "magni": "inventore",
                            "fuga": "accusamus",
                            "voluptatibus": "distinctio",
                        },
                        map[string]interface{}{
                            "delectus": "minima",
                            "praesentium": "maxime",
                            "magnam": "temporibus",
                        },
                        map[string]interface{}{
                            "commodi": "itaque",
                            "commodi": "totam",
                            "earum": "modi",
                        },
                    },
                    Message: sdk.String("nam"),
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("voluptatem"),
                            Percent: sdk.Int(371919),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("vel"),
                            Percent: sdk.Int(1383),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("quasi"),
                            Percent: sdk.Int(247685),
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: sdk.String("maiores"),
                            Percent: sdk.Int(318233),
                        },
                    },
                },
                Result: shared.ProbingDetailsResultEnumUnreachable.ToPointer(),
                SentProbeCount: sdk.Int(858778),
                SuccessfulProbeCount: sdk.Int(643678),
                VerifyTime: sdk.String("esse"),
            },
            Protocol: sdk.String("nemo"),
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: sdk.Int(444587),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "sint": "accusamus",
                            "impedit": "hic",
                        },
                        map[string]interface{}{
                            "asperiores": "ex",
                            "voluptas": "debitis",
                            "delectus": "quae",
                            "minus": "fuga",
                        },
                        map[string]interface{}{
                            "consectetur": "velit",
                            "atque": "ipsum",
                            "impedit": "magni",
                        },
                    },
                    Message: sdk.String("soluta"),
                },
                Result: shared.ReachabilityDetailsResultEnumUndetermined.ToPointer(),
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("dolore"),
                            DestinationNetworkURI: sdk.String("iusto"),
                            DestinationPort: sdk.Int(453094),
                            Protocol: sdk.String("sequi"),
                            SourceAgentURI: sdk.String("dignissimos"),
                            SourceIP: sdk.String("neque"),
                            SourceNetworkURI: sdk.String("quo"),
                            SourcePort: sdk.Int(535468),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumNoExternalIP.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "voluptatibus",
                                    },
                                    ResourceURI: sdk.String("vel"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("magnam"),
                                    Environment: sdk.String("quibusdam"),
                                    Runtime: sdk.String("inventore"),
                                    URI: sdk.String("https://scrawny-brain.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("quia"),
                                    Location: sdk.String("porro"),
                                    URI: sdk.String("http://every-bee.com"),
                                    VersionID: sdk.String("vel"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("ea"),
                                    Location: sdk.String("beatae"),
                                    ServiceName: sdk.String("vero"),
                                    ServiceURI: sdk.String("excepturi"),
                                    URI: sdk.String("http://every-dress.name"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("earum"),
                                    ExternalIP: sdk.String("dicta"),
                                    InternalIP: sdk.String("impedit"),
                                    NetworkURI: sdk.String("voluptatibus"),
                                    Region: sdk.String("iste"),
                                    URI: sdk.String("https://adorable-goodbye.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("velit"),
                                    Target: shared.DeliverInfoTargetEnumPscPublishedService.ToPointer(),
                                },
                                Description: sdk.String("non"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumPrivateGoogleAccessDisallowed.ToPointer(),
                                    ResourceURI: sdk.String("iusto"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("sit"),
                                    DestinationNetworkURI: sdk.String("doloremque"),
                                    DestinationPort: sdk.Int(7468),
                                    Protocol: sdk.String("officia"),
                                    SourceAgentURI: sdk.String("recusandae"),
                                    SourceIP: sdk.String("ea"),
                                    SourceNetworkURI: sdk.String("quidem"),
                                    SourcePort: sdk.Int(377406),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("facilis"),
                                    Direction: sdk.String("placeat"),
                                    DisplayName: sdk.String("perspiciatis"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("deleniti"),
                                    Policy: sdk.String("a"),
                                    Priority: sdk.Int(455579),
                                    TargetServiceAccounts: []string{
                                        "unde",
                                        "necessitatibus",
                                    },
                                    TargetTags: []string{
                                        "impedit",
                                        "ipsam",
                                        "corporis",
                                    },
                                    URI: sdk.String("https://petty-indication.biz"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("veritatis"),
                                    Target: shared.ForwardInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("consectetur"),
                                    MatchedPortRange: sdk.String("vitae"),
                                    MatchedProtocol: sdk.String("inventore"),
                                    NetworkURI: sdk.String("dolorem"),
                                    Target: sdk.String("ad"),
                                    URI: sdk.String("http://partial-growth.info"),
                                    Vip: sdk.String("soluta"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("libero"),
                                    ClusterURI: sdk.String("rem"),
                                    ExternalIP: sdk.String("dolorum"),
                                    InternalIP: sdk.String("odio"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("fugit"),
                                    ExternalIP: sdk.String("alias"),
                                    Interface: sdk.String("magni"),
                                    InternalIP: sdk.String("vel"),
                                    NetworkTags: []string{
                                        "quae",
                                    },
                                    NetworkURI: sdk.String("modi"),
                                    ServiceAccount: sdk.String("neque"),
                                    URI: sdk.String("http://villainous-blinker.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("nulla"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("maxime"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quia",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "omnis",
                                                "libero",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://second-stinger.name"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("quos"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sit",
                                                "iusto",
                                                "ipsa",
                                                "voluptates",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aperiam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://simple-rabbi.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("autem"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolores",
                                                "assumenda",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "est",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://kooky-need.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("necessitatibus"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("sint"),
                                    MatchedIPRange: sdk.String("ea"),
                                    URI: sdk.String("http://harsh-province.name"),
                                },
                                ProjectID: sdk.String("corporis"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("officiis"),
                                    DestPortRanges: []string{
                                        "cum",
                                        "at",
                                        "alias",
                                        "quia",
                                    },
                                    DisplayName: sdk.String("quidem"),
                                    InstanceTags: []string{
                                        "repudiandae",
                                        "accusantium",
                                        "expedita",
                                    },
                                    NetworkURI: sdk.String("officiis"),
                                    NextHop: sdk.String("eos"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopIlb.ToPointer(),
                                    Priority: sdk.Int(483518),
                                    Protocols: []string{
                                        "odit",
                                        "explicabo",
                                        "corporis",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("earum"),
                                    SrcPortRanges: []string{
                                        "recusandae",
                                    },
                                    URI: sdk.String("https://finished-prize.info"),
                                },
                                State: shared.StepStateEnumStartFromInternet.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("unde"),
                                    Location: sdk.String("molestiae"),
                                    URI: sdk.String("https://offbeat-chap.biz"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("numquam"),
                                    IPAddress: sdk.String("nesciunt"),
                                    NetworkURI: sdk.String("at"),
                                    Region: sdk.String("officia"),
                                    URI: sdk.String("http://sleepy-testing.info"),
                                    VpnTunnelURI: sdk.String("qui"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("expedita"),
                                    NetworkURI: sdk.String("voluptatum"),
                                    Region: sdk.String("cupiditate"),
                                    RemoteGateway: sdk.String("minima"),
                                    RemoteGatewayIP: sdk.String("placeat"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("neque"),
                                    SourceGatewayIP: sdk.String("in"),
                                    URI: sdk.String("https://infamous-discharge.info"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumNoSourceLocation.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "maiores",
                                        "tempore",
                                        "aperiam",
                                        "libero",
                                    },
                                    ResourceURI: sdk.String("ratione"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("labore"),
                                    Environment: sdk.String("totam"),
                                    Runtime: sdk.String("occaecati"),
                                    URI: sdk.String("http://sore-death.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("fuga"),
                                    Location: sdk.String("nostrum"),
                                    URI: sdk.String("https://sneaky-voter.net"),
                                    VersionID: sdk.String("vero"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("odit"),
                                    Location: sdk.String("repellat"),
                                    ServiceName: sdk.String("pariatur"),
                                    ServiceURI: sdk.String("nemo"),
                                    URI: sdk.String("http://artistic-keep.biz"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("in"),
                                    ExternalIP: sdk.String("ducimus"),
                                    InternalIP: sdk.String("excepturi"),
                                    NetworkURI: sdk.String("dolores"),
                                    Region: sdk.String("error"),
                                    URI: sdk.String("http://long-impression.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("itaque"),
                                    Target: shared.DeliverInfoTargetEnumPscPublishedService.ToPointer(),
                                },
                                Description: sdk.String("optio"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumInstanceNotRunning.ToPointer(),
                                    ResourceURI: sdk.String("quaerat"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("commodi"),
                                    DestinationNetworkURI: sdk.String("officiis"),
                                    DestinationPort: sdk.Int(810839),
                                    Protocol: sdk.String("quidem"),
                                    SourceAgentURI: sdk.String("exercitationem"),
                                    SourceIP: sdk.String("quam"),
                                    SourceNetworkURI: sdk.String("dolorem"),
                                    SourcePort: sdk.Int(264619),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("ipsa"),
                                    Direction: sdk.String("sint"),
                                    DisplayName: sdk.String("vero"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("repudiandae"),
                                    Policy: sdk.String("cum"),
                                    Priority: sdk.Int(120120),
                                    TargetServiceAccounts: []string{
                                        "veniam",
                                        "animi",
                                        "dolores",
                                        "nam",
                                    },
                                    TargetTags: []string{
                                        "consequuntur",
                                    },
                                    URI: sdk.String("https://short-term-babushka.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("maiores"),
                                    Target: shared.ForwardInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("quasi"),
                                    MatchedPortRange: sdk.String("laboriosam"),
                                    MatchedProtocol: sdk.String("pariatur"),
                                    NetworkURI: sdk.String("libero"),
                                    Target: sdk.String("excepturi"),
                                    URI: sdk.String("https://handy-encirclement.info"),
                                    Vip: sdk.String("doloribus"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("eligendi"),
                                    ClusterURI: sdk.String("sint"),
                                    ExternalIP: sdk.String("enim"),
                                    InternalIP: sdk.String("hic"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("animi"),
                                    ExternalIP: sdk.String("quas"),
                                    Interface: sdk.String("totam"),
                                    InternalIP: sdk.String("molestias"),
                                    NetworkTags: []string{
                                        "eaque",
                                        "saepe",
                                    },
                                    NetworkURI: sdk.String("architecto"),
                                    ServiceAccount: sdk.String("quos"),
                                    URI: sdk.String("https://surprised-reflection.net"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("doloremque"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("impedit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ipsum",
                                                "adipisci",
                                                "saepe",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "doloremque",
                                                "quis",
                                                "veniam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://odd-isolation.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("possimus"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "magnam",
                                                "itaque",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "asperiores",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://stupendous-light.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("pariatur"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "exercitationem",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "velit",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://humiliating-western.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("blanditiis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "nisi",
                                                "quis",
                                                "nisi",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "minus",
                                                "facere",
                                                "facilis",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://windy-web.com"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("debitis"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("rerum"),
                                    MatchedIPRange: sdk.String("eos"),
                                    URI: sdk.String("http://grandiose-coral.info"),
                                },
                                ProjectID: sdk.String("est"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("rem"),
                                    DestPortRanges: []string{
                                        "fugiat",
                                        "unde",
                                        "officiis",
                                        "ducimus",
                                    },
                                    DisplayName: sdk.String("dolor"),
                                    InstanceTags: []string{
                                        "error",
                                    },
                                    NetworkURI: sdk.String("porro"),
                                    NextHop: sdk.String("vitae"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(458970),
                                    Protocols: []string{
                                        "ad",
                                        "aspernatur",
                                        "enim",
                                        "delectus",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("dignissimos"),
                                    SrcPortRanges: []string{
                                        "illo",
                                        "ab",
                                        "incidunt",
                                    },
                                    URI: sdk.String("https://unsteady-reinscription.info"),
                                },
                                State: shared.StepStateEnumStartFromGkeMaster.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("reiciendis"),
                                    Location: sdk.String("earum"),
                                    URI: sdk.String("http://loyal-freighter.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("quisquam"),
                                    IPAddress: sdk.String("sequi"),
                                    NetworkURI: sdk.String("nihil"),
                                    Region: sdk.String("deleniti"),
                                    URI: sdk.String("http://flawed-sourwood.biz"),
                                    VpnTunnelURI: sdk.String("quisquam"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("provident"),
                                    NetworkURI: sdk.String("laudantium"),
                                    Region: sdk.String("repudiandae"),
                                    RemoteGateway: sdk.String("consequatur"),
                                    RemoteGatewayIP: sdk.String("maxime"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("nam"),
                                    SourceGatewayIP: sdk.String("expedita"),
                                    URI: sdk.String("https://optimal-training.net"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumUnintendedDestination.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "vero",
                                        "similique",
                                    },
                                    ResourceURI: sdk.String("repellendus"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("iure"),
                                    Environment: sdk.String("dolorem"),
                                    Runtime: sdk.String("commodi"),
                                    URI: sdk.String("https://immense-advertising.com"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("ad"),
                                    Location: sdk.String("quae"),
                                    URI: sdk.String("http://thin-legislature.net"),
                                    VersionID: sdk.String("cum"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("amet"),
                                    Location: sdk.String("quasi"),
                                    ServiceName: sdk.String("dicta"),
                                    ServiceURI: sdk.String("laudantium"),
                                    URI: sdk.String("http://vivid-jeweller.biz"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("provident"),
                                    ExternalIP: sdk.String("dolorum"),
                                    InternalIP: sdk.String("necessitatibus"),
                                    NetworkURI: sdk.String("provident"),
                                    Region: sdk.String("repudiandae"),
                                    URI: sdk.String("http://handmade-issue.org"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("facilis"),
                                    Target: shared.DeliverInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                Description: sdk.String("aperiam"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumDroppedInsideGkeService.ToPointer(),
                                    ResourceURI: sdk.String("accusamus"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("eos"),
                                    DestinationNetworkURI: sdk.String("totam"),
                                    DestinationPort: sdk.Int(115861),
                                    Protocol: sdk.String("voluptatem"),
                                    SourceAgentURI: sdk.String("velit"),
                                    SourceIP: sdk.String("dolor"),
                                    SourceNetworkURI: sdk.String("sunt"),
                                    SourcePort: sdk.Int(953676),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("dolor"),
                                    Direction: sdk.String("occaecati"),
                                    DisplayName: sdk.String("atque"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumFirewallRuleTypeUnspecified.ToPointer(),
                                    NetworkURI: sdk.String("at"),
                                    Policy: sdk.String("labore"),
                                    Priority: sdk.Int(794988),
                                    TargetServiceAccounts: []string{
                                        "voluptatem",
                                        "perferendis",
                                    },
                                    TargetTags: []string{
                                        "ea",
                                        "aperiam",
                                        "dignissimos",
                                    },
                                    URI: sdk.String("https://euphoric-seeker.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("consectetur"),
                                    Target: shared.ForwardInfoTargetEnumCloudSQLInstance.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("dignissimos"),
                                    MatchedPortRange: sdk.String("consectetur"),
                                    MatchedProtocol: sdk.String("soluta"),
                                    NetworkURI: sdk.String("natus"),
                                    Target: sdk.String("temporibus"),
                                    URI: sdk.String("https://elementary-variable.com"),
                                    Vip: sdk.String("quo"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("itaque"),
                                    ClusterURI: sdk.String("illum"),
                                    ExternalIP: sdk.String("laborum"),
                                    InternalIP: sdk.String("dignissimos"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("vero"),
                                    ExternalIP: sdk.String("qui"),
                                    Interface: sdk.String("consectetur"),
                                    InternalIP: sdk.String("repellat"),
                                    NetworkTags: []string{
                                        "explicabo",
                                    },
                                    NetworkURI: sdk.String("exercitationem"),
                                    ServiceAccount: sdk.String("nihil"),
                                    URI: sdk.String("http://bewitched-beak.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetPool.ToPointer(),
                                    BackendURI: sdk.String("delectus"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("distinctio"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "exercitationem",
                                                "labore",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repudiandae",
                                                "modi",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://unacceptable-love.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("odit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "enim",
                                                "voluptate",
                                                "similique",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "libero",
                                                "magnam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://incredible-constraint.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("dignissimos"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumSslProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("nostrum"),
                                    MatchedIPRange: sdk.String("molestiae"),
                                    URI: sdk.String("http://wide-eyed-bargain.biz"),
                                },
                                ProjectID: sdk.String("aut"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("aut"),
                                    DestPortRanges: []string{
                                        "odio",
                                        "commodi",
                                        "numquam",
                                        "dolorum",
                                    },
                                    DisplayName: sdk.String("possimus"),
                                    InstanceTags: []string{
                                        "consectetur",
                                        "nesciunt",
                                    },
                                    NetworkURI: sdk.String("quaerat"),
                                    NextHop: sdk.String("itaque"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopBlackhole.ToPointer(),
                                    Priority: sdk.Int(122662),
                                    Protocols: []string{
                                        "iusto",
                                        "quas",
                                        "et",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("amet"),
                                    SrcPortRanges: []string{
                                        "fuga",
                                        "alias",
                                    },
                                    URI: sdk.String("https://adept-measure.name"),
                                },
                                State: shared.StepStateEnumDeliver.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("veritatis"),
                                    Location: sdk.String("quae"),
                                    URI: sdk.String("http://untimely-waiter.name"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("nulla"),
                                    IPAddress: sdk.String("officia"),
                                    NetworkURI: sdk.String("sed"),
                                    Region: sdk.String("voluptatem"),
                                    URI: sdk.String("http://unwilling-underwriting.com"),
                                    VpnTunnelURI: sdk.String("incidunt"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("qui"),
                                    NetworkURI: sdk.String("qui"),
                                    Region: sdk.String("necessitatibus"),
                                    RemoteGateway: sdk.String("harum"),
                                    RemoteGatewayIP: sdk.String("explicabo"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("aliquid"),
                                    SourceGatewayIP: sdk.String("modi"),
                                    URI: sdk.String("https://wiry-mimosa.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumDestinationEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "sequi",
                                        "aliquid",
                                        "ea",
                                    },
                                    ResourceURI: sdk.String("impedit"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("ducimus"),
                                    Environment: sdk.String("odit"),
                                    Runtime: sdk.String("velit"),
                                    URI: sdk.String("https://zealous-strudel.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("natus"),
                                    Location: sdk.String("accusamus"),
                                    URI: sdk.String("http://hot-prose.org"),
                                    VersionID: sdk.String("voluptates"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("non"),
                                    Location: sdk.String("rem"),
                                    ServiceName: sdk.String("quia"),
                                    ServiceURI: sdk.String("ullam"),
                                    URI: sdk.String("https://clear-cut-waterwheel.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("quae"),
                                    ExternalIP: sdk.String("officiis"),
                                    InternalIP: sdk.String("architecto"),
                                    NetworkURI: sdk.String("architecto"),
                                    Region: sdk.String("enim"),
                                    URI: sdk.String("https://meek-aircraft.net"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("reiciendis"),
                                    Target: shared.DeliverInfoTargetEnumServerlessNeg.ToPointer(),
                                },
                                Description: sdk.String("iste"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumNoRoute.ToPointer(),
                                    ResourceURI: sdk.String("quos"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("ullam"),
                                    DestinationNetworkURI: sdk.String("dolore"),
                                    DestinationPort: sdk.Int(266284),
                                    Protocol: sdk.String("itaque"),
                                    SourceAgentURI: sdk.String("maxime"),
                                    SourceIP: sdk.String("modi"),
                                    SourceNetworkURI: sdk.String("consequuntur"),
                                    SourcePort: sdk.Int(828147),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("vero"),
                                    Direction: sdk.String("doloribus"),
                                    DisplayName: sdk.String("impedit"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("accusamus"),
                                    Policy: sdk.String("totam"),
                                    Priority: sdk.Int(969168),
                                    TargetServiceAccounts: []string{
                                        "sint",
                                    },
                                    TargetTags: []string{
                                        "esse",
                                        "iure",
                                    },
                                    URI: sdk.String("http://distant-tension.info"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("neque"),
                                    Target: shared.ForwardInfoTargetEnumVpnGateway.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("voluptas"),
                                    MatchedPortRange: sdk.String("consequuntur"),
                                    MatchedProtocol: sdk.String("officia"),
                                    NetworkURI: sdk.String("reprehenderit"),
                                    Target: sdk.String("distinctio"),
                                    URI: sdk.String("http://awesome-lode.org"),
                                    Vip: sdk.String("accusantium"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("veniam"),
                                    ClusterURI: sdk.String("saepe"),
                                    ExternalIP: sdk.String("neque"),
                                    InternalIP: sdk.String("facere"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("aliquam"),
                                    ExternalIP: sdk.String("quos"),
                                    Interface: sdk.String("doloribus"),
                                    InternalIP: sdk.String("fugiat"),
                                    NetworkTags: []string{
                                        "delectus",
                                        "velit",
                                        "vitae",
                                    },
                                    NetworkURI: sdk.String("nesciunt"),
                                    ServiceAccount: sdk.String("similique"),
                                    URI: sdk.String("http://zealous-fortnight.org"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("unde"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("explicabo"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cupiditate",
                                                "optio",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quidem",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("http://well-groomed-civilisation.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("debitis"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sint",
                                                "ut",
                                                "numquam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "adipisci",
                                                "libero",
                                                "in",
                                                "minima",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://big-broiler.org"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("nisi"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("dolor"),
                                    MatchedIPRange: sdk.String("ducimus"),
                                    URI: sdk.String("https://gentle-brain.biz"),
                                },
                                ProjectID: sdk.String("aliquid"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("magni"),
                                    DestPortRanges: []string{
                                        "adipisci",
                                        "praesentium",
                                    },
                                    DisplayName: sdk.String("dolor"),
                                    InstanceTags: []string{
                                        "expedita",
                                        "facilis",
                                    },
                                    NetworkURI: sdk.String("impedit"),
                                    NextHop: sdk.String("sit"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopPeering.ToPointer(),
                                    Priority: sdk.Int(633987),
                                    Protocols: []string{
                                        "amet",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringStatic.ToPointer(),
                                    SrcIPRange: sdk.String("modi"),
                                    SrcPortRanges: []string{
                                        "quod",
                                        "itaque",
                                    },
                                    URI: sdk.String("https://spirited-estimate.org"),
                                },
                                State: shared.StepStateEnumDeliver.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("officiis"),
                                    Location: sdk.String("architecto"),
                                    URI: sdk.String("http://polite-bait.net"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("necessitatibus"),
                                    IPAddress: sdk.String("quia"),
                                    NetworkURI: sdk.String("dicta"),
                                    Region: sdk.String("vel"),
                                    URI: sdk.String("https://united-fluke.com"),
                                    VpnTunnelURI: sdk.String("accusantium"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("perferendis"),
                                    NetworkURI: sdk.String("veritatis"),
                                    Region: sdk.String("provident"),
                                    RemoteGateway: sdk.String("cumque"),
                                    RemoteGatewayIP: sdk.String("iure"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumDynamic.ToPointer(),
                                    SourceGateway: sdk.String("quod"),
                                    SourceGatewayIP: sdk.String("nemo"),
                                    URI: sdk.String("https://every-ego.info"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("laboriosam"),
                            DestinationNetworkURI: sdk.String("sed"),
                            DestinationPort: sdk.Int(486272),
                            Protocol: sdk.String("natus"),
                            SourceAgentURI: sdk.String("provident"),
                            SourceIP: sdk.String("cum"),
                            SourceNetworkURI: sdk.String("doloribus"),
                            SourcePort: sdk.Int(703966),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumMismatchedIPVersion.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "unde",
                                        "modi",
                                    },
                                    ResourceURI: sdk.String("perspiciatis"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("hic"),
                                    Environment: sdk.String("cum"),
                                    Runtime: sdk.String("aspernatur"),
                                    URI: sdk.String("https://scaly-doubling.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("quod"),
                                    Location: sdk.String("id"),
                                    URI: sdk.String("https://impressionable-scrip.biz"),
                                    VersionID: sdk.String("illum"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("nemo"),
                                    Location: sdk.String("illum"),
                                    ServiceName: sdk.String("facilis"),
                                    ServiceURI: sdk.String("non"),
                                    URI: sdk.String("https://surprised-triangle.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("pariatur"),
                                    ExternalIP: sdk.String("ad"),
                                    InternalIP: sdk.String("facere"),
                                    NetworkURI: sdk.String("laborum"),
                                    Region: sdk.String("eveniet"),
                                    URI: sdk.String("https://feisty-shrimp.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("alias"),
                                    Target: shared.DeliverInfoTargetEnumGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("deserunt"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumDroppedInsideGkeService.ToPointer(),
                                    ResourceURI: sdk.String("laborum"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("est"),
                                    DestinationNetworkURI: sdk.String("occaecati"),
                                    DestinationPort: sdk.Int(286716),
                                    Protocol: sdk.String("quo"),
                                    SourceAgentURI: sdk.String("perferendis"),
                                    SourceIP: sdk.String("fugit"),
                                    SourceNetworkURI: sdk.String("aliquid"),
                                    SourcePort: sdk.Int(301309),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("quaerat"),
                                    Direction: sdk.String("eligendi"),
                                    DisplayName: sdk.String("hic"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("officiis"),
                                    Policy: sdk.String("unde"),
                                    Priority: sdk.Int(860311),
                                    TargetServiceAccounts: []string{
                                        "mollitia",
                                        "magnam",
                                        "nostrum",
                                    },
                                    TargetTags: []string{
                                        "corrupti",
                                        "fuga",
                                    },
                                    URI: sdk.String("https://sociable-bough.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("quod"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("doloremque"),
                                    MatchedPortRange: sdk.String("voluptatem"),
                                    MatchedProtocol: sdk.String("facere"),
                                    NetworkURI: sdk.String("necessitatibus"),
                                    Target: sdk.String("maxime"),
                                    URI: sdk.String("http://austere-bracket.name"),
                                    Vip: sdk.String("porro"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("blanditiis"),
                                    ClusterURI: sdk.String("quae"),
                                    ExternalIP: sdk.String("magni"),
                                    InternalIP: sdk.String("officiis"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("sed"),
                                    ExternalIP: sdk.String("necessitatibus"),
                                    Interface: sdk.String("impedit"),
                                    InternalIP: sdk.String("ipsa"),
                                    NetworkTags: []string{
                                        "a",
                                        "maiores",
                                        "laudantium",
                                    },
                                    NetworkURI: sdk.String("maiores"),
                                    ServiceAccount: sdk.String("alias"),
                                    URI: sdk.String("https://meaty-butterfly.info"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("doloribus"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("eius"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "in",
                                                "eligendi",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "neque",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://another-committee.net"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("beatae"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumInternalTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("dicta"),
                                    MatchedIPRange: sdk.String("odit"),
                                    URI: sdk.String("http://roasted-accordion.name"),
                                },
                                ProjectID: sdk.String("vel"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("accusantium"),
                                    DestPortRanges: []string{
                                        "laboriosam",
                                        "ex",
                                        "quas",
                                    },
                                    DisplayName: sdk.String("veritatis"),
                                    InstanceTags: []string{
                                        "quae",
                                        "similique",
                                    },
                                    NetworkURI: sdk.String("incidunt"),
                                    NextHop: sdk.String("quam"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInstance.ToPointer(),
                                    Priority: sdk.Int(646329),
                                    Protocols: []string{
                                        "omnis",
                                        "sed",
                                        "nesciunt",
                                        "maxime",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("cupiditate"),
                                    SrcPortRanges: []string{
                                        "excepturi",
                                        "maiores",
                                    },
                                    URI: sdk.String("https://euphoric-water.biz"),
                                },
                                State: shared.StepStateEnumApplyIngressFirewallRule.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("ipsa"),
                                    Location: sdk.String("quisquam"),
                                    URI: sdk.String("https://naive-item.info"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("asperiores"),
                                    IPAddress: sdk.String("a"),
                                    NetworkURI: sdk.String("nobis"),
                                    Region: sdk.String("perspiciatis"),
                                    URI: sdk.String("http://clean-shelf.info"),
                                    VpnTunnelURI: sdk.String("eveniet"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("porro"),
                                    NetworkURI: sdk.String("tempore"),
                                    Region: sdk.String("quidem"),
                                    RemoteGateway: sdk.String("modi"),
                                    RemoteGatewayIP: sdk.String("voluptates"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("eius"),
                                    SourceGatewayIP: sdk.String("sequi"),
                                    URI: sdk.String("https://yearly-information.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "a",
                                        "animi",
                                        "maiores",
                                        "itaque",
                                    },
                                    ResourceURI: sdk.String("nulla"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("deserunt"),
                                    Environment: sdk.String("corporis"),
                                    Runtime: sdk.String("velit"),
                                    URI: sdk.String("https://frivolous-pasture.org"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("eum"),
                                    Location: sdk.String("repudiandae"),
                                    URI: sdk.String("http://popular-satisfaction.com"),
                                    VersionID: sdk.String("blanditiis"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("eius"),
                                    Location: sdk.String("quisquam"),
                                    ServiceName: sdk.String("eos"),
                                    ServiceURI: sdk.String("nobis"),
                                    URI: sdk.String("https://square-chick.biz"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    ExternalIP: sdk.String("quod"),
                                    InternalIP: sdk.String("quos"),
                                    NetworkURI: sdk.String("corrupti"),
                                    Region: sdk.String("amet"),
                                    URI: sdk.String("http://electric-pole.biz"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("perferendis"),
                                    Target: shared.DeliverInfoTargetEnumPscVpcSc.ToPointer(),
                                },
                                Description: sdk.String("architecto"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumDroppedInsideGkeService.ToPointer(),
                                    ResourceURI: sdk.String("dolore"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("sunt"),
                                    DestinationNetworkURI: sdk.String("maiores"),
                                    DestinationPort: sdk.Int(205011),
                                    Protocol: sdk.String("odit"),
                                    SourceAgentURI: sdk.String("earum"),
                                    SourceIP: sdk.String("veniam"),
                                    SourceNetworkURI: sdk.String("ipsam"),
                                    SourcePort: sdk.Int(51053),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("exercitationem"),
                                    Direction: sdk.String("veniam"),
                                    DisplayName: sdk.String("nihil"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumHierarchicalFirewallPolicyRule.ToPointer(),
                                    NetworkURI: sdk.String("nisi"),
                                    Policy: sdk.String("tenetur"),
                                    Priority: sdk.Int(338281),
                                    TargetServiceAccounts: []string{
                                        "nemo",
                                        "suscipit",
                                        "pariatur",
                                        "sit",
                                    },
                                    TargetTags: []string{
                                        "repellendus",
                                        "perferendis",
                                        "id",
                                    },
                                    URI: sdk.String("https://criminal-sole.org"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("repudiandae"),
                                    Target: shared.ForwardInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("adipisci"),
                                    MatchedPortRange: sdk.String("pariatur"),
                                    MatchedProtocol: sdk.String("harum"),
                                    NetworkURI: sdk.String("dolore"),
                                    Target: sdk.String("voluptatibus"),
                                    URI: sdk.String("http://cold-sheet.net"),
                                    Vip: sdk.String("dolorum"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("velit"),
                                    ClusterURI: sdk.String("earum"),
                                    ExternalIP: sdk.String("praesentium"),
                                    InternalIP: sdk.String("error"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("non"),
                                    ExternalIP: sdk.String("quasi"),
                                    Interface: sdk.String("mollitia"),
                                    InternalIP: sdk.String("accusamus"),
                                    NetworkTags: []string{
                                        "cumque",
                                        "doloremque",
                                        "expedita",
                                    },
                                    NetworkURI: sdk.String("corrupti"),
                                    ServiceAccount: sdk.String("eaque"),
                                    URI: sdk.String("https://humming-moccasins.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("possimus"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("rerum"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "accusamus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "delectus",
                                                "minus",
                                                "quo",
                                                "quos",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("https://peppery-forestry.com"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("illo"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("doloribus"),
                                    MatchedIPRange: sdk.String("nostrum"),
                                    URI: sdk.String("https://superb-coonskin.org"),
                                },
                                ProjectID: sdk.String("vel"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("sapiente"),
                                    DestPortRanges: []string{
                                        "quae",
                                        "quos",
                                        "aperiam",
                                    },
                                    DisplayName: sdk.String("non"),
                                    InstanceTags: []string{
                                        "ad",
                                        "aliquam",
                                        "quisquam",
                                        "quas",
                                    },
                                    NetworkURI: sdk.String("consequuntur"),
                                    NextHop: sdk.String("maiores"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopTypeUnspecified.ToPointer(),
                                    Priority: sdk.Int(400448),
                                    Protocols: []string{
                                        "est",
                                        "dolor",
                                        "aliquid",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("cumque"),
                                    SrcPortRanges: []string{
                                        "voluptatum",
                                        "ducimus",
                                        "adipisci",
                                    },
                                    URI: sdk.String("https://fat-leader.biz"),
                                },
                                State: shared.StepStateEnumStartFromCloudSQLInstance.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("voluptatum"),
                                    Location: sdk.String("sit"),
                                    URI: sdk.String("https://boring-vase.info"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("quidem"),
                                    IPAddress: sdk.String("totam"),
                                    NetworkURI: sdk.String("porro"),
                                    Region: sdk.String("deserunt"),
                                    URI: sdk.String("http://knowledgeable-gale.name"),
                                    VpnTunnelURI: sdk.String("commodi"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("alias"),
                                    NetworkURI: sdk.String("fuga"),
                                    Region: sdk.String("aut"),
                                    RemoteGateway: sdk.String("dolore"),
                                    RemoteGatewayIP: sdk.String("maxime"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("iste"),
                                    SourceGatewayIP: sdk.String("ullam"),
                                    URI: sdk.String("https://striking-gather.name"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumInternalError.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "nihil",
                                    },
                                    ResourceURI: sdk.String("inventore"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("libero"),
                                    Environment: sdk.String("ipsam"),
                                    Runtime: sdk.String("quasi"),
                                    URI: sdk.String("https://circular-presidency.net"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("facilis"),
                                    Location: sdk.String("beatae"),
                                    URI: sdk.String("https://whispered-dud.net"),
                                    VersionID: sdk.String("corrupti"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("rem"),
                                    Location: sdk.String("atque"),
                                    ServiceName: sdk.String("officiis"),
                                    ServiceURI: sdk.String("cum"),
                                    URI: sdk.String("https://well-informed-school.biz"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("quod"),
                                    ExternalIP: sdk.String("minus"),
                                    InternalIP: sdk.String("porro"),
                                    NetworkURI: sdk.String("id"),
                                    Region: sdk.String("excepturi"),
                                    URI: sdk.String("https://scrawny-schnitzel.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("hic"),
                                    Target: shared.DeliverInfoTargetEnumPscVpcSc.ToPointer(),
                                },
                                Description: sdk.String("accusantium"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumGkeControlPlaneNoRoute.ToPointer(),
                                    ResourceURI: sdk.String("fugit"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("pariatur"),
                                    DestinationNetworkURI: sdk.String("eligendi"),
                                    DestinationPort: sdk.Int(927490),
                                    Protocol: sdk.String("veritatis"),
                                    SourceAgentURI: sdk.String("aut"),
                                    SourceIP: sdk.String("laudantium"),
                                    SourceNetworkURI: sdk.String("iusto"),
                                    SourcePort: sdk.Int(219860),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("voluptates"),
                                    Direction: sdk.String("tempora"),
                                    DisplayName: sdk.String("magni"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumServerlessVpcAccessManagedFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("doloremque"),
                                    Policy: sdk.String("voluptatem"),
                                    Priority: sdk.Int(430146),
                                    TargetServiceAccounts: []string{
                                        "eum",
                                        "reprehenderit",
                                        "voluptatum",
                                        "blanditiis",
                                    },
                                    TargetTags: []string{
                                        "atque",
                                        "rerum",
                                    },
                                    URI: sdk.String("https://moist-fill.name"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("architecto"),
                                    Target: shared.ForwardInfoTargetEnumImportedCustomRouteNextHop.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("enim"),
                                    MatchedPortRange: sdk.String("rem"),
                                    MatchedProtocol: sdk.String("magni"),
                                    NetworkURI: sdk.String("quae"),
                                    Target: sdk.String("quas"),
                                    URI: sdk.String("https://frugal-drummer.org"),
                                    Vip: sdk.String("saepe"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("delectus"),
                                    ClusterURI: sdk.String("officia"),
                                    ExternalIP: sdk.String("natus"),
                                    InternalIP: sdk.String("cumque"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("natus"),
                                    ExternalIP: sdk.String("quaerat"),
                                    Interface: sdk.String("doloribus"),
                                    InternalIP: sdk.String("quia"),
                                    NetworkTags: []string{
                                        "mollitia",
                                        "cumque",
                                        "quis",
                                        "enim",
                                    },
                                    NetworkURI: sdk.String("eum"),
                                    ServiceAccount: sdk.String("nemo"),
                                    URI: sdk.String("https://disloyal-almighty.info"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumTargetInstance.ToPointer(),
                                    BackendURI: sdk.String("asperiores"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("voluptates"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dicta",
                                                "fugit",
                                                "sit",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "necessitatibus",
                                                "sed",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("http://disgusting-voting.net"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("aliquam"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "modi",
                                                "sunt",
                                                "impedit",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "voluptatum",
                                                "ipsa",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://zigzag-carotene.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("sequi"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "fuga",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "eaque",
                                                "dolorem",
                                                "architecto",
                                                "aperiam",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://frosty-bear.biz"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("delectus"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "optio",
                                                "nobis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repellat",
                                                "quae",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://wasteful-mob.info"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("sed"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumLoadBalancerTypeUnspecified.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("similique"),
                                    MatchedIPRange: sdk.String("ea"),
                                    URI: sdk.String("https://flustered-utilisation.info"),
                                },
                                ProjectID: sdk.String("esse"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("animi"),
                                    DestPortRanges: []string{
                                        "esse",
                                        "eveniet",
                                        "earum",
                                    },
                                    DisplayName: sdk.String("velit"),
                                    InstanceTags: []string{
                                        "eius",
                                        "rerum",
                                        "itaque",
                                        "dignissimos",
                                    },
                                    NetworkURI: sdk.String("ipsam"),
                                    NextHop: sdk.String("explicabo"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopBlackhole.ToPointer(),
                                    Priority: sdk.Int(397014),
                                    Protocols: []string{
                                        "facilis",
                                        "ipsum",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumStatic.ToPointer(),
                                    SrcIPRange: sdk.String("quaerat"),
                                    SrcPortRanges: []string{
                                        "praesentium",
                                    },
                                    URI: sdk.String("https://easy-going-purchase.net"),
                                },
                                State: shared.StepStateEnumArriveAtExternalLoadBalancer.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("illo"),
                                    Location: sdk.String("minus"),
                                    URI: sdk.String("https://tan-morbidity.info"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("enim"),
                                    IPAddress: sdk.String("accusamus"),
                                    NetworkURI: sdk.String("aperiam"),
                                    Region: sdk.String("voluptates"),
                                    URI: sdk.String("https://fat-bangle.name"),
                                    VpnTunnelURI: sdk.String("illum"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("rem"),
                                    NetworkURI: sdk.String("tenetur"),
                                    Region: sdk.String("deleniti"),
                                    RemoteGateway: sdk.String("modi"),
                                    RemoteGatewayIP: sdk.String("earum"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("aliquam"),
                                    SourceGatewayIP: sdk.String("labore"),
                                    URI: sdk.String("https://dimwitted-thigh.com"),
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: sdk.String("esse"),
                            DestinationNetworkURI: sdk.String("debitis"),
                            DestinationPort: sdk.Int(817454),
                            Protocol: sdk.String("quisquam"),
                            SourceAgentURI: sdk.String("cumque"),
                            SourceIP: sdk.String("aliquam"),
                            SourceNetworkURI: sdk.String("dolorum"),
                            SourcePort: sdk.Int(644827),
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumGkeKonnectivityProxyUnsupported.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "porro",
                                    },
                                    ResourceURI: sdk.String("laborum"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("nobis"),
                                    Environment: sdk.String("quibusdam"),
                                    Runtime: sdk.String("omnis"),
                                    URI: sdk.String("http://hard-pay.name"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("reprehenderit"),
                                    Location: sdk.String("quia"),
                                    URI: sdk.String("https://another-excellence.info"),
                                    VersionID: sdk.String("molestiae"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("quia"),
                                    Location: sdk.String("laudantium"),
                                    ServiceName: sdk.String("sed"),
                                    ServiceURI: sdk.String("odit"),
                                    URI: sdk.String("http://rusty-codpiece.net"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("nesciunt"),
                                    ExternalIP: sdk.String("ipsa"),
                                    InternalIP: sdk.String("sint"),
                                    NetworkURI: sdk.String("dolore"),
                                    Region: sdk.String("esse"),
                                    URI: sdk.String("http://sarcastic-victim.info"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("est"),
                                    Target: shared.DeliverInfoTargetEnumGoogleAPI.ToPointer(),
                                },
                                Description: sdk.String("delectus"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumGkePscEndpointMissing.ToPointer(),
                                    ResourceURI: sdk.String("voluptatum"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("iusto"),
                                    DestinationNetworkURI: sdk.String("quod"),
                                    DestinationPort: sdk.Int(977583),
                                    Protocol: sdk.String("voluptas"),
                                    SourceAgentURI: sdk.String("non"),
                                    SourceIP: sdk.String("ullam"),
                                    SourceNetworkURI: sdk.String("laborum"),
                                    SourcePort: sdk.Int(378268),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("doloribus"),
                                    Direction: sdk.String("animi"),
                                    DisplayName: sdk.String("recusandae"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("non"),
                                    Policy: sdk.String("necessitatibus"),
                                    Priority: sdk.Int(719469),
                                    TargetServiceAccounts: []string{
                                        "laboriosam",
                                        "voluptatem",
                                        "optio",
                                        "sequi",
                                    },
                                    TargetTags: []string{
                                        "vitae",
                                    },
                                    URI: sdk.String("https://apt-charlatan.biz"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("rerum"),
                                    Target: shared.ForwardInfoTargetEnumInterconnect.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("nostrum"),
                                    MatchedPortRange: sdk.String("temporibus"),
                                    MatchedProtocol: sdk.String("ratione"),
                                    NetworkURI: sdk.String("dolor"),
                                    Target: sdk.String("nisi"),
                                    URI: sdk.String("http://willing-tritone.com"),
                                    Vip: sdk.String("est"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("accusantium"),
                                    ClusterURI: sdk.String("quod"),
                                    ExternalIP: sdk.String("minus"),
                                    InternalIP: sdk.String("quos"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("possimus"),
                                    ExternalIP: sdk.String("maiores"),
                                    Interface: sdk.String("odio"),
                                    InternalIP: sdk.String("provident"),
                                    NetworkTags: []string{
                                        "aperiam",
                                        "similique",
                                        "nesciunt",
                                        "provident",
                                    },
                                    NetworkURI: sdk.String("ex"),
                                    ServiceAccount: sdk.String("repellendus"),
                                    URI: sdk.String("https://able-saxophone.biz"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendService.ToPointer(),
                                    BackendURI: sdk.String("labore"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("in"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sunt",
                                                "enim",
                                                "nulla",
                                                "maiores",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "mollitia",
                                                "impedit",
                                                "accusamus",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumHealthCheckFirewallStateUnspecified.ToPointer(),
                                            URI: sdk.String("https://lost-researcher.com"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("impedit"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "eveniet",
                                                "repudiandae",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "impedit",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://incomplete-riser.org"),
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("ex"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "veritatis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "itaque",
                                                "vero",
                                                "quidem",
                                                "illo",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumMisconfigured.ToPointer(),
                                            URI: sdk.String("http://spotless-rage.net"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("cum"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumNetworkTCPUDP.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("saepe"),
                                    MatchedIPRange: sdk.String("earum"),
                                    URI: sdk.String("https://knobby-entry.biz"),
                                },
                                ProjectID: sdk.String("ducimus"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("laudantium"),
                                    DestPortRanges: []string{
                                        "deserunt",
                                        "odit",
                                        "ad",
                                    },
                                    DisplayName: sdk.String("sequi"),
                                    InstanceTags: []string{
                                        "iusto",
                                    },
                                    NetworkURI: sdk.String("esse"),
                                    NextHop: sdk.String("magnam"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInterconnect.ToPointer(),
                                    Priority: sdk.Int(862560),
                                    Protocols: []string{
                                        "cupiditate",
                                        "illo",
                                        "exercitationem",
                                        "laborum",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringDynamic.ToPointer(),
                                    SrcIPRange: sdk.String("fugit"),
                                    SrcPortRanges: []string{
                                        "dolorum",
                                        "repellat",
                                        "nostrum",
                                        "illum",
                                    },
                                    URI: sdk.String("https://immediate-independence.com"),
                                },
                                State: shared.StepStateEnumStartFromCloudFunction.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("temporibus"),
                                    Location: sdk.String("optio"),
                                    URI: sdk.String("http://wonderful-flair.name"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("repudiandae"),
                                    IPAddress: sdk.String("aspernatur"),
                                    NetworkURI: sdk.String("sapiente"),
                                    Region: sdk.String("neque"),
                                    URI: sdk.String("https://heavy-presidency.info"),
                                    VpnTunnelURI: sdk.String("doloremque"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("perferendis"),
                                    NetworkURI: sdk.String("laudantium"),
                                    Region: sdk.String("iusto"),
                                    RemoteGateway: sdk.String("corrupti"),
                                    RemoteGatewayIP: sdk.String("molestiae"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRouteBased.ToPointer(),
                                    SourceGateway: sdk.String("iure"),
                                    SourceGatewayIP: sdk.String("ab"),
                                    URI: sdk.String("http://elementary-view.info"),
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: shared.AbortInfoCauseEnumSourceEndpointNotFound.ToPointer(),
                                    ProjectsMissingPermission: []string{
                                        "quisquam",
                                        "provident",
                                    },
                                    ResourceURI: sdk.String("laudantium"),
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: sdk.String("nam"),
                                    Environment: sdk.String("nemo"),
                                    Runtime: sdk.String("enim"),
                                    URI: sdk.String("http://giddy-divine.com"),
                                },
                                CausesDrop: sdk.Bool(false),
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: sdk.String("corrupti"),
                                    Location: sdk.String("doloremque"),
                                    URI: sdk.String("https://extra-large-arch-rival.net"),
                                    VersionID: sdk.String("nobis"),
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: sdk.String("similique"),
                                    Location: sdk.String("porro"),
                                    ServiceName: sdk.String("impedit"),
                                    ServiceURI: sdk.String("nisi"),
                                    URI: sdk.String("https://shimmering-storage.info"),
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: sdk.String("nam"),
                                    ExternalIP: sdk.String("enim"),
                                    InternalIP: sdk.String("maiores"),
                                    NetworkURI: sdk.String("consectetur"),
                                    Region: sdk.String("necessitatibus"),
                                    URI: sdk.String("https://offensive-angina.name"),
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: sdk.String("adipisci"),
                                    Target: shared.DeliverInfoTargetEnumTargetUnspecified.ToPointer(),
                                },
                                Description: sdk.String("magnam"),
                                Drop: &shared.DropInfo{
                                    Cause: shared.DropInfoCauseEnumDroppedInsidePscServiceProducer.ToPointer(),
                                    ResourceURI: sdk.String("omnis"),
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: sdk.String("explicabo"),
                                    DestinationNetworkURI: sdk.String("vel"),
                                    DestinationPort: sdk.Int(740347),
                                    Protocol: sdk.String("id"),
                                    SourceAgentURI: sdk.String("possimus"),
                                    SourceIP: sdk.String("fugit"),
                                    SourceNetworkURI: sdk.String("ipsam"),
                                    SourcePort: sdk.Int(343454),
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: sdk.String("sequi"),
                                    Direction: sdk.String("voluptatum"),
                                    DisplayName: sdk.String("quasi"),
                                    FirewallRuleType: shared.FirewallInfoFirewallRuleTypeEnumImpliedVpcFirewallRule.ToPointer(),
                                    NetworkURI: sdk.String("nobis"),
                                    Policy: sdk.String("tempora"),
                                    Priority: sdk.Int(452653),
                                    TargetServiceAccounts: []string{
                                        "expedita",
                                        "aperiam",
                                    },
                                    TargetTags: []string{
                                        "possimus",
                                        "fugit",
                                        "voluptatem",
                                        "repudiandae",
                                    },
                                    URI: sdk.String("http://imaginative-collateral.biz"),
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: sdk.String("blanditiis"),
                                    Target: shared.ForwardInfoTargetEnumAnotherProject.ToPointer(),
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: sdk.String("maiores"),
                                    MatchedPortRange: sdk.String("asperiores"),
                                    MatchedProtocol: sdk.String("autem"),
                                    NetworkURI: sdk.String("nesciunt"),
                                    Target: sdk.String("cupiditate"),
                                    URI: sdk.String("https://optimal-brief.com"),
                                    Vip: sdk.String("mollitia"),
                                },
                                GkeMaster: &shared.GKEMasterInfo{
                                    ClusterNetworkURI: sdk.String("nam"),
                                    ClusterURI: sdk.String("assumenda"),
                                    ExternalIP: sdk.String("quo"),
                                    InternalIP: sdk.String("fuga"),
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: sdk.String("tempore"),
                                    ExternalIP: sdk.String("commodi"),
                                    Interface: sdk.String("fugit"),
                                    InternalIP: sdk.String("suscipit"),
                                    NetworkTags: []string{
                                        "nisi",
                                        "aliquid",
                                    },
                                    NetworkURI: sdk.String("provident"),
                                    ServiceAccount: sdk.String("laboriosam"),
                                    URI: sdk.String("https://bewitched-trim.net"),
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: shared.LoadBalancerInfoBackendTypeEnumBackendTypeUnspecified.ToPointer(),
                                    BackendURI: sdk.String("alias"),
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: sdk.String("consequuntur"),
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quidem",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "amet",
                                            },
                                            HealthCheckFirewallState: shared.LoadBalancerBackendHealthCheckFirewallStateEnumConfigured.ToPointer(),
                                            URI: sdk.String("https://lucky-numismatist.name"),
                                        },
                                    },
                                    HealthCheckURI: sdk.String("eligendi"),
                                    LoadBalancerType: shared.LoadBalancerInfoLoadBalancerTypeEnumTCPProxy.ToPointer(),
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: sdk.String("amet"),
                                    MatchedIPRange: sdk.String("debitis"),
                                    URI: sdk.String("https://wretched-spiderling.name"),
                                },
                                ProjectID: sdk.String("atque"),
                                Route: &shared.RouteInfo{
                                    DestIPRange: sdk.String("quibusdam"),
                                    DestPortRanges: []string{
                                        "quo",
                                    },
                                    DisplayName: sdk.String("veniam"),
                                    InstanceTags: []string{
                                        "provident",
                                        "vero",
                                    },
                                    NetworkURI: sdk.String("earum"),
                                    NextHop: sdk.String("doloremque"),
                                    NextHopType: shared.RouteInfoNextHopTypeEnumNextHopInstance.ToPointer(),
                                    Priority: sdk.Int(367),
                                    Protocols: []string{
                                        "tempora",
                                    },
                                    RouteType: shared.RouteInfoRouteTypeEnumPeeringSubnet.ToPointer(),
                                    SrcIPRange: sdk.String("quam"),
                                    SrcPortRanges: []string{
                                        "officia",
                                        "ex",
                                        "architecto",
                                    },
                                    URI: sdk.String("https://quintessential-birdbath.net"),
                                },
                                State: shared.StepStateEnumAbort.ToPointer(),
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: sdk.String("qui"),
                                    Location: sdk.String("accusantium"),
                                    URI: sdk.String("http://misty-loaf.org"),
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: sdk.String("voluptate"),
                                    IPAddress: sdk.String("quam"),
                                    NetworkURI: sdk.String("quod"),
                                    Region: sdk.String("vitae"),
                                    URI: sdk.String("https://wide-eyed-shoemaker.info"),
                                    VpnTunnelURI: sdk.String("inventore"),
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: sdk.String("facere"),
                                    NetworkURI: sdk.String("maxime"),
                                    Region: sdk.String("fuga"),
                                    RemoteGateway: sdk.String("ab"),
                                    RemoteGatewayIP: sdk.String("ex"),
                                    RoutingType: shared.VpnTunnelInfoRoutingTypeEnumRoutingTypeUnspecified.ToPointer(),
                                    SourceGateway: sdk.String("maiores"),
                                    SourceGatewayIP: sdk.String("sed"),
                                    URI: sdk.String("https://direct-rope.name"),
                                },
                            },
                        },
                    },
                },
                VerifyTime: sdk.String("perferendis"),
            },
            RelatedProjects: []string{
                "omnis",
                "nihil",
                "tenetur",
            },
            Source: &shared.EndpointInput{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: sdk.String("https://esteemed-date.biz"),
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: sdk.String("https://third-sunday.org"),
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: sdk.String("https://harmful-incubation.net"),
                },
                CloudSQLInstance: sdk.String("perspiciatis"),
                ForwardingRule: sdk.String("voluptates"),
                GkeMasterCluster: sdk.String("eum"),
                Instance: sdk.String("quasi"),
                IPAddress: sdk.String("quas"),
                Network: sdk.String("odio"),
                NetworkType: shared.EndpointNetworkTypeEnumGcpNetwork.ToPointer(),
                Port: sdk.Int(780789),
                ProjectID: sdk.String("aliquid"),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("et"),
        Key: sdk.String("nulla"),
        Name: "Ada Stark",
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UpdateMask: sdk.String("facere"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("doloribus"),
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
            "facere": "dignissimos",
            "iste": "provident",
            "dolor": "sint",
            "aperiam": "eaque",
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("autem"),
        Key: sdk.String("assumenda"),
        Name: "Mr. Hope Bauch",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "doloremque",
                                    "totam",
                                    "iure",
                                    "maiores",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "veritatis",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dicta",
                                    "ipsam",
                                    "consequuntur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "non",
                                    "beatae",
                                    "sunt",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("beatae"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "libero",
                                    "molestias",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "impedit",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("illum"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "non",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "laudantium",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quibusdam",
                                    "consectetur",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("quaerat"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "assumenda",
                                    "dolore",
                                    "enim",
                                    "ullam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ex",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quia",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "quibusdam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("rem"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("omnis"),
                            Expression: sdk.String("neque"),
                            Location: sdk.String("corporis"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "placeat",
                        },
                        Role: sdk.String("excepturi"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("recusandae"),
                            Expression: sdk.String("quos"),
                            Location: sdk.String("dicta"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "consequatur",
                        },
                        Role: sdk.String("soluta"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("necessitatibus"),
                            Expression: sdk.String("sequi"),
                            Location: sdk.String("recusandae"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "magni",
                        },
                        Role: sdk.String("aperiam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("dolores"),
                            Expression: sdk.String("illum"),
                            Location: sdk.String("iusto"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "aliquid",
                        },
                        Role: sdk.String("ad"),
                    },
                },
                Etag: sdk.String("voluptate"),
                Version: sdk.Int(426594),
            },
            UpdateMask: sdk.String("minima"),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        Resource: "doloremque",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("provident"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "inventore",
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        Resource: "optio",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("debitis"),
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
            "et": "beatae",
            "id": "consequatur",
            "quos": "ratione",
            "iure": "tempora",
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("laudantium"),
        Name: "Mr. Armando Hermann",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("iusto"),
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
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("praesentium"),
        Name: "Holly Torphy",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("veritatis"),
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
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("quibusdam"),
        Name: "Andy Gerhold",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("eos"),
        Filter: sdk.String("magnam"),
        Key: sdk.String("dolores"),
        Name: "Natalie Kassulke",
        OauthToken: sdk.String("illo"),
        PageSize: sdk.Int64(383381),
        PageToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("culpa"),
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
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("illo"),
        Filter: sdk.String("doloribus"),
        Key: sdk.String("cumque"),
        Name: "Edwin Runte",
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(879193),
        PageToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("quo"),
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
