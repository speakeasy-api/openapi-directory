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
            Protocol: "id",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 959367522974354090,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "commodi": "quis",
                            "est": "aut",
                            "odit": "non",
                        },
                        map[string]interface{}{
                            "omnis": "aut",
                        },
                        map[string]interface{}{
                            "sed": "officiis",
                        },
                    },
                    Message: "autem",
                },
                Result: "AMBIGUOUS",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "odio",
                            DestinationNetworkURI: "qui",
                            DestinationPort: 388440063886460141,
                            Protocol: "at",
                            SourceIP: "ipsum",
                            SourceNetworkURI: "eveniet",
                            SourcePort: 303089054982227392,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "UNKNOWN_PROJECT",
                                    ProjectsMissingPermission: []string{
                                        "exercitationem",
                                        "aut",
                                        "reprehenderit",
                                    },
                                    ResourceURI: "tempore",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "maiores",
                                    Environment: "incidunt",
                                    Runtime: "dolor",
                                    URI: "beatae",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "in",
                                    Location: "et",
                                    URI: "omnis",
                                    VersionID: "ipsum",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ex",
                                    Location: "dolores",
                                    ServiceURI: "placeat",
                                    URI: "vel",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "rerum",
                                    ExternalIP: "mollitia",
                                    InternalIP: "voluptas",
                                    NetworkURI: "quam",
                                    Region: "reprehenderit",
                                    URI: "qui",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "qui",
                                    Target: "INTERNET",
                                },
                                Description: "in",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC",
                                    ResourceURI: "qui",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "ut",
                                    DestinationNetworkURI: "itaque",
                                    DestinationPort: 2006924026344156168,
                                    Protocol: "neque",
                                    SourceIP: "ullam",
                                    SourceNetworkURI: "et",
                                    SourcePort: 4304520335772049496,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "esse",
                                    Direction: "architecto",
                                    DisplayName: "quam",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "cumque",
                                    Policy: "soluta",
                                    Priority: 759605945513541974,
                                    TargetServiceAccounts: []string{
                                        "magni",
                                        "et",
                                    },
                                    TargetTags: []string{
                                        "qui",
                                        "earum",
                                        "illo",
                                    },
                                    URI: "omnis",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "ut",
                                    Target: "CLOUD_SQL_INSTANCE",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "dolor",
                                    MatchedPortRange: "commodi",
                                    MatchedProtocol: "error",
                                    NetworkURI: "reprehenderit",
                                    Target: "consectetur",
                                    URI: "nostrum",
                                    Vip: "ut",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "laboriosam",
                                    ClusterURI: "sed",
                                    ExternalIP: "a",
                                    InternalIP: "soluta",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "aut",
                                    ExternalIP: "quas",
                                    Interface: "consequuntur",
                                    InternalIP: "laudantium",
                                    NetworkTags: []string{
                                        "ipsa",
                                    },
                                    NetworkURI: "expedita",
                                    ServiceAccount: "doloremque",
                                    URI: "perferendis",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "ratione",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "explicabo",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "maxime",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "perferendis",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "rerum",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "reiciendis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "cumque",
                                                "minima",
                                                "necessitatibus",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quis",
                                                "eum",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "et",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "impedit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "expedita",
                                                "vel",
                                                "qui",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "nihil",
                                                "tempora",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "eaque",
                                        },
                                    },
                                    HealthCheckURI: "sunt",
                                    LoadBalancerType: "TCP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "autem",
                                    MatchedIPRange: "quis",
                                    URI: "vel",
                                },
                                ProjectID: "vel",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "placeat",
                                    DestPortRanges: []string{
                                        "nisi",
                                    },
                                    DisplayName: "quis",
                                    InstanceTags: []string{
                                        "porro",
                                        "rerum",
                                    },
                                    NetworkURI: "et",
                                    NextHop: "accusamus",
                                    NextHopType: "NEXT_HOP_ILB",
                                    Priority: 2223751782546645906,
                                    Protocols: []string{
                                        "ut",
                                        "laborum",
                                        "fugit",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "minus",
                                    SrcPortRanges: []string{
                                        "aperiam",
                                    },
                                    URI: "consequuntur",
                                },
                                State: "APPLY_FORWARDING_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "mollitia",
                                    Location: "inventore",
                                    URI: "delectus",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "ipsa",
                                    IPAddress: "animi",
                                    NetworkURI: "animi",
                                    Region: "ut",
                                    URI: "aliquam",
                                    VpnTunnelURI: "fuga",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "sed",
                                    NetworkURI: "sed",
                                    Region: "et",
                                    RemoteGateway: "consequuntur",
                                    RemoteGatewayIP: "non",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "provident",
                                    SourceGatewayIP: "molestiae",
                                    URI: "pariatur",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "quasi",
            },
            RelatedProjects: []string{
                "enim",
                "qui",
                "sit",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "possimus",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "modi",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "neque",
                },
                CloudSQLInstance: "consequuntur",
                GkeMasterCluster: "quia",
                Instance: "et",
                IPAddress: "est",
                Network: "occaecati",
                NetworkType: "NETWORK_TYPE_UNSPECIFIED",
                Port: 4932993544835283753,
                ProjectID: "quia",
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
