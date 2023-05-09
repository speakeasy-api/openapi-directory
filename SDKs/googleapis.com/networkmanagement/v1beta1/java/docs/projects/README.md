# projects

### Available Operations

* [networkmanagementProjectsLocationsGlobalConnectivityTestsCreate](#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsList](#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsPatch](#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsRerun](#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkmanagementProjectsLocationsGlobalOperationsCancel](#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkmanagementProjectsLocationsGlobalOperationsDelete](#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsGlobalOperationsGet](#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [networkmanagementProjectsLocationsGlobalOperationsList](#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsList](#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.

## networkmanagementProjectsLocationsGlobalConnectivityTestsCreate

Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
import org.openapis.openapi.models.shared.AbortInfo;
import org.openapis.openapi.models.shared.AbortInfoCauseEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineVersionEndpoint;
import org.openapis.openapi.models.shared.AppEngineVersionInfo;
import org.openapis.openapi.models.shared.CloudFunctionEndpoint;
import org.openapis.openapi.models.shared.CloudFunctionInfo;
import org.openapis.openapi.models.shared.CloudRunRevisionEndpoint;
import org.openapis.openapi.models.shared.CloudRunRevisionInfo;
import org.openapis.openapi.models.shared.CloudSQLInstanceInfo;
import org.openapis.openapi.models.shared.ConnectivityTestInput;
import org.openapis.openapi.models.shared.DeliverInfo;
import org.openapis.openapi.models.shared.DeliverInfoTargetEnum;
import org.openapis.openapi.models.shared.DropInfo;
import org.openapis.openapi.models.shared.DropInfoCauseEnum;
import org.openapis.openapi.models.shared.EdgeLocation;
import org.openapis.openapi.models.shared.EndpointInfo;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.FirewallInfo;
import org.openapis.openapi.models.shared.FirewallInfoFirewallRuleTypeEnum;
import org.openapis.openapi.models.shared.ForwardInfo;
import org.openapis.openapi.models.shared.ForwardInfoTargetEnum;
import org.openapis.openapi.models.shared.ForwardingRuleInfo;
import org.openapis.openapi.models.shared.GKEMasterInfo;
import org.openapis.openapi.models.shared.InstanceInfo;
import org.openapis.openapi.models.shared.LatencyDistribution;
import org.openapis.openapi.models.shared.LatencyPercentile;
import org.openapis.openapi.models.shared.LoadBalancerBackend;
import org.openapis.openapi.models.shared.LoadBalancerBackendHealthCheckFirewallStateEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.LoadBalancerInfoBackendTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfoLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.NetworkInfo;
import org.openapis.openapi.models.shared.ProbingDetails;
import org.openapis.openapi.models.shared.ProbingDetailsAbortCauseEnum;
import org.openapis.openapi.models.shared.ProbingDetailsResultEnum;
import org.openapis.openapi.models.shared.ReachabilityDetails;
import org.openapis.openapi.models.shared.ReachabilityDetailsResultEnum;
import org.openapis.openapi.models.shared.RouteInfo;
import org.openapis.openapi.models.shared.RouteInfoNextHopTypeEnum;
import org.openapis.openapi.models.shared.RouteInfoRouteTypeEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.StepStateEnum;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.VpcConnectorInfo;
import org.openapis.openapi.models.shared.VpnGatewayInfo;
import org.openapis.openapi.models.shared.VpnTunnelInfo;
import org.openapis.openapi.models.shared.VpnTunnelInfoRoutingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "in";
                    destination = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://revolving-career.info";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://burly-geometry.org";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://bitter-want.com";
                        }};;
                        cloudSqlInstance = "corrupti";
                        forwardingRule = "maiores";
                        gkeMasterCluster = "incidunt";
                        instance = "sed";
                        ipAddress = "provident";
                        network = "eius";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 215529;
                        projectId = "ea";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quos", "voluptatibus");
                        put("tempora", "tempora");
                        put("voluptate", "reiciendis");
                    }};
                    name = "Karen Franey";
                    probingDetails = new ProbingDetails() {{
                        abortCause = ProbingDetailsAbortCauseEnum.NO_SOURCE_LOCATION;
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "quaerat";
                        }};;
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "incidunt";
                            destinationNetworkUri = "ipsam";
                            destinationPort = 894864;
                            protocol = "rem";
                            sourceAgentUri = "sit";
                            sourceIp = "nobis";
                            sourceNetworkUri = "error";
                            sourcePort = 333507;
                        }};;
                        error = new Status() {{
                            code = 329543;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("nulla", "magni");
                                    put("aperiam", "saepe");
                                    put("numquam", "veniam");
                                    put("in", "officiis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("laudantium", "exercitationem");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("cum", "laboriosam");
                                    put("dolorum", "voluptatum");
                                    put("error", "hic");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("debitis", "neque");
                                    put("dolorum", "nostrum");
                                    put("officia", "dolorum");
                                }}),
                            }};
                            message = "corrupti";
                        }};;
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new org.openapis.openapi.models.shared.LatencyPercentile[]{{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "tempora";
                                    percent = 543678;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "fugit";
                                    percent = 282699;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "fugiat";
                                    percent = 30235;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "culpa";
                                    percent = 710337;
                                }}),
                            }};
                        }};;
                        result = ProbingDetailsResultEnum.REACHABLE;
                        sentProbeCount = 7884;
                        successfulProbeCount = 460220;
                        verifyTime = "ipsam";
                    }};;
                    protocol = "sit";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 530537;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("corporis", "et");
                                    put("blanditiis", "ex");
                                    put("sed", "sit");
                                    put("vel", "nostrum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("error", "consequatur");
                                    put("incidunt", "reiciendis");
                                    put("dolorem", "harum");
                                    put("dicta", "architecto");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("labore", "quidem");
                                    put("atque", "laborum");
                                    put("nam", "tenetur");
                                }}),
                            }};
                            message = "laboriosam";
                        }};;
                        result = ReachabilityDetailsResultEnum.RESULT_UNSPECIFIED;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "deserunt";
                                    destinationNetworkUri = "voluptate";
                                    destinationPort = 600392;
                                    protocol = "reiciendis";
                                    sourceAgentUri = "provident";
                                    sourceIp = "repellendus";
                                    sourceNetworkUri = "delectus";
                                    sourcePort = 914791;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.MISMATCHED_SOURCE_NETWORK;
                                            projectsMissingPermission = new String[]{{
                                                add("reprehenderit"),
                                                add("facere"),
                                                add("fuga"),
                                            }};
                                            resourceUri = "praesentium";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "mollitia";
                                            environment = "veniam";
                                            runtime = "voluptatem";
                                            uri = "https://vacant-borrowing.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "reprehenderit";
                                            location = "asperiores";
                                            uri = "https://hidden-probability.net";
                                            versionId = "et";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "esse";
                                            location = "amet";
                                            serviceName = "assumenda";
                                            serviceUri = "ea";
                                            uri = "https://physical-tap.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "accusamus";
                                            externalIp = "natus";
                                            internalIp = "minima";
                                            networkUri = "aspernatur";
                                            region = "ex";
                                            uri = "https://moral-supermarket.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "blanditiis";
                                            target = DeliverInfoTargetEnum.GOOGLE_API;
                                        }};
                                        description = "repudiandae";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS;
                                            resourceUri = "atque";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "sunt";
                                            destinationNetworkUri = "recusandae";
                                            destinationPort = 680697;
                                            protocol = "repellendus";
                                            sourceAgentUri = "labore";
                                            sourceIp = "reiciendis";
                                            sourceNetworkUri = "doloremque";
                                            sourcePort = 919783;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "dicta";
                                            direction = "accusantium";
                                            displayName = "beatae";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.HIERARCHICAL_FIREWALL_POLICY_RULE;
                                            networkUri = "enim";
                                            policy = "laboriosam";
                                            priority = 246535;
                                            targetServiceAccounts = new String[]{{
                                                add("molestias"),
                                                add("magnam"),
                                                add("saepe"),
                                                add("consequuntur"),
                                            }};
                                            targetTags = new String[]{{
                                                add("officiis"),
                                                add("perspiciatis"),
                                                add("in"),
                                            }};
                                            uri = "http://unusual-mouth.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "fugit";
                                            target = ForwardInfoTargetEnum.IMPORTED_CUSTOM_ROUTE_NEXT_HOP;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "quis";
                                            matchedPortRange = "reprehenderit";
                                            matchedProtocol = "error";
                                            networkUri = "illo";
                                            target = "corporis";
                                            uri = "https://unwitting-degree.org";
                                            vip = "doloremque";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "iure";
                                            clusterUri = "ipsa";
                                            externalIp = "totam";
                                            internalIp = "quae";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "molestiae";
                                            externalIp = "eveniet";
                                            interface_ = "qui";
                                            internalIp = "cum";
                                            networkTags = new String[]{{
                                                add("necessitatibus"),
                                                add("ratione"),
                                            }};
                                            networkUri = "laborum";
                                            serviceAccount = "distinctio";
                                            uri = "https://meaty-emery.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "alias";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perspiciatis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("mollitia"),
                                                        add("voluptas"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://putrid-extinction.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dolorum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quae"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("omnis"),
                                                        add("quaerat"),
                                                        add("molestiae"),
                                                        add("ex"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://entire-teapot.name";
                                                }}),
                                            }};
                                            healthCheckUri = "eum";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "recusandae";
                                            matchedIpRange = "esse";
                                            uri = "https://gloomy-homework.org";
                                        }};
                                        projectId = "provident";
                                        route = new RouteInfo() {{
                                            destIpRange = "aspernatur";
                                            destPortRanges = new String[]{{
                                                add("quasi"),
                                                add("animi"),
                                            }};
                                            displayName = "nostrum";
                                            instanceTags = new String[]{{
                                                add("provident"),
                                                add("possimus"),
                                                add("animi"),
                                            }};
                                            networkUri = "ex";
                                            nextHop = "aliquid";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_TYPE_UNSPECIFIED;
                                            priority = 999278;
                                            protocols = new String[]{{
                                                add("ullam"),
                                                add("in"),
                                                add("nam"),
                                                add("earum"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_STATIC;
                                            srcIpRange = "laborum";
                                            srcPortRanges = new String[]{{
                                                add("modi"),
                                                add("voluptatibus"),
                                                add("molestias"),
                                                add("officiis"),
                                            }};
                                            uri = "https://slow-bulb.net";
                                        }};
                                        state = StepStateEnum.START_FROM_APP_ENGINE_VERSION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quis";
                                            location = "inventore";
                                            uri = "http://slushy-bamboo.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "velit";
                                            ipAddress = "aspernatur";
                                            networkUri = "eum";
                                            region = "eius";
                                            uri = "https://trivial-scanner.biz";
                                            vpnTunnelUri = "sapiente";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "eum";
                                            networkUri = "dicta";
                                            region = "minima";
                                            remoteGateway = "beatae";
                                            remoteGatewayIp = "cupiditate";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "earum";
                                            sourceGatewayIp = "soluta";
                                            uri = "https://these-attraction.org";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "perspiciatis";
                    }};;
                    relatedProjects = new String[]{{
                        add("debitis"),
                        add("aliquid"),
                        add("porro"),
                        add("suscipit"),
                    }};
                    source = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://courageous-sailing.net";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://proper-testimonial.org";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://bumpy-blowgun.info";
                        }};;
                        cloudSqlInstance = "natus";
                        forwardingRule = "occaecati";
                        gkeMasterCluster = "suscipit";
                        instance = "adipisci";
                        ipAddress = "quasi";
                        network = "magni";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 859581;
                        projectId = "necessitatibus";
                    }};;
                }};;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "molestiae";
                key = "dicta";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "esse";
                testId = "praesentium";
                uploadType = "maiores";
                uploadProtocol = "reiciendis";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity("vel", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "esse";
                key = "ex";
                oauthToken = "consectetur";
                optionsRequestedPolicyVersion = 399812L;
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "laborum";
                uploadProtocol = "sunt";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity("nostrum", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsList

Lists all Connectivity Tests owned by a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "perferendis";
                filter = "eum";
                key = "voluptas";
                oauthToken = "iste";
                orderBy = "id";
                pageSize = 70042L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "voluptates";
                uploadProtocol = "mollitia";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsList(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity("laborum", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConnectivityTestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsPatch

Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity;
import org.openapis.openapi.models.shared.AbortInfo;
import org.openapis.openapi.models.shared.AbortInfoCauseEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineVersionEndpoint;
import org.openapis.openapi.models.shared.AppEngineVersionInfo;
import org.openapis.openapi.models.shared.CloudFunctionEndpoint;
import org.openapis.openapi.models.shared.CloudFunctionInfo;
import org.openapis.openapi.models.shared.CloudRunRevisionEndpoint;
import org.openapis.openapi.models.shared.CloudRunRevisionInfo;
import org.openapis.openapi.models.shared.CloudSQLInstanceInfo;
import org.openapis.openapi.models.shared.ConnectivityTestInput;
import org.openapis.openapi.models.shared.DeliverInfo;
import org.openapis.openapi.models.shared.DeliverInfoTargetEnum;
import org.openapis.openapi.models.shared.DropInfo;
import org.openapis.openapi.models.shared.DropInfoCauseEnum;
import org.openapis.openapi.models.shared.EdgeLocation;
import org.openapis.openapi.models.shared.EndpointInfo;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.FirewallInfo;
import org.openapis.openapi.models.shared.FirewallInfoFirewallRuleTypeEnum;
import org.openapis.openapi.models.shared.ForwardInfo;
import org.openapis.openapi.models.shared.ForwardInfoTargetEnum;
import org.openapis.openapi.models.shared.ForwardingRuleInfo;
import org.openapis.openapi.models.shared.GKEMasterInfo;
import org.openapis.openapi.models.shared.InstanceInfo;
import org.openapis.openapi.models.shared.LatencyDistribution;
import org.openapis.openapi.models.shared.LatencyPercentile;
import org.openapis.openapi.models.shared.LoadBalancerBackend;
import org.openapis.openapi.models.shared.LoadBalancerBackendHealthCheckFirewallStateEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.LoadBalancerInfoBackendTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfoLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.NetworkInfo;
import org.openapis.openapi.models.shared.ProbingDetails;
import org.openapis.openapi.models.shared.ProbingDetailsAbortCauseEnum;
import org.openapis.openapi.models.shared.ProbingDetailsResultEnum;
import org.openapis.openapi.models.shared.ReachabilityDetails;
import org.openapis.openapi.models.shared.ReachabilityDetailsResultEnum;
import org.openapis.openapi.models.shared.RouteInfo;
import org.openapis.openapi.models.shared.RouteInfoNextHopTypeEnum;
import org.openapis.openapi.models.shared.RouteInfoRouteTypeEnum;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.StepStateEnum;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.VpcConnectorInfo;
import org.openapis.openapi.models.shared.VpnGatewayInfo;
import org.openapis.openapi.models.shared.VpnTunnelInfo;
import org.openapis.openapi.models.shared.VpnTunnelInfoRoutingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "enim";
                    destination = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://tall-guilt.net";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://filthy-examiner.net";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://necessary-remote.info";
                        }};;
                        cloudSqlInstance = "beatae";
                        forwardingRule = "voluptatum";
                        gkeMasterCluster = "omnis";
                        instance = "veritatis";
                        ipAddress = "rerum";
                        network = "est";
                        networkType = EndpointNetworkTypeEnum.GCP_NETWORK;
                        port = 29634;
                        projectId = "sapiente";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("architecto", "fuga");
                        put("pariatur", "debitis");
                        put("voluptatem", "alias");
                        put("deleniti", "earum");
                    }};
                    name = "Miranda Ledner";
                    probingDetails = new ProbingDetails() {{
                        abortCause = ProbingDetailsAbortCauseEnum.NO_SOURCE_LOCATION;
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "ratione";
                        }};;
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "ullam";
                            destinationNetworkUri = "perferendis";
                            destinationPort = 848341;
                            protocol = "totam";
                            sourceAgentUri = "impedit";
                            sourceIp = "quibusdam";
                            sourceNetworkUri = "nam";
                            sourcePort = 373216;
                        }};;
                        error = new Status() {{
                            code = 633415;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("inventore", "deleniti");
                                    put("veritatis", "tempora");
                                }}),
                            }};
                            message = "dolor";
                        }};;
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new org.openapis.openapi.models.shared.LatencyPercentile[]{{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "architecto";
                                    percent = 24944;
                                }}),
                            }};
                        }};;
                        result = ProbingDetailsResultEnum.REACHABLE;
                        sentProbeCount = 144286;
                        successfulProbeCount = 66149;
                        verifyTime = "laudantium";
                    }};;
                    protocol = "quae";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 222658;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("consequuntur", "ipsa");
                                    put("quas", "eveniet");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("officiis", "esse");
                                    put("necessitatibus", "sed");
                                    put("veniam", "nesciunt");
                                    put("expedita", "eum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("voluptatum", "magnam");
                                    put("exercitationem", "ab");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("autem", "nobis");
                                    put("laboriosam", "recusandae");
                                    put("consequuntur", "voluptatem");
                                    put("exercitationem", "necessitatibus");
                                }}),
                            }};
                            message = "quasi";
                        }};;
                        result = ReachabilityDetailsResultEnum.REACHABLE;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "vero";
                                    destinationNetworkUri = "est";
                                    destinationPort = 690785;
                                    protocol = "sequi";
                                    sourceAgentUri = "doloribus";
                                    sourceIp = "repudiandae";
                                    sourceNetworkUri = "optio";
                                    sourcePort = 579681;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNINTENDED_DESTINATION;
                                            projectsMissingPermission = new String[]{{
                                                add("officia"),
                                                add("voluptas"),
                                                add("numquam"),
                                            }};
                                            resourceUri = "nemo";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quos";
                                            environment = "eius";
                                            runtime = "aspernatur";
                                            uri = "http://disgusting-post.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "incidunt";
                                            location = "quasi";
                                            uri = "https://this-bush.info";
                                            versionId = "consequuntur";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "consectetur";
                                            location = "aperiam";
                                            serviceName = "cupiditate";
                                            serviceUri = "reiciendis";
                                            uri = "https://academic-officer.biz";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "occaecati";
                                            externalIp = "iste";
                                            internalIp = "magni";
                                            networkUri = "inventore";
                                            region = "fuga";
                                            uri = "https://witty-raisin.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "delectus";
                                            target = DeliverInfoTargetEnum.GOOGLE_API;
                                        }};
                                        description = "praesentium";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION;
                                            resourceUri = "magnam";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "temporibus";
                                            destinationNetworkUri = "quos";
                                            destinationPort = 415280;
                                            protocol = "itaque";
                                            sourceAgentUri = "commodi";
                                            sourceIp = "totam";
                                            sourceNetworkUri = "earum";
                                            sourcePort = 267207;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "nam";
                                            direction = "vero";
                                            displayName = "voluptatem";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.VPC_FIREWALL_RULE;
                                            networkUri = "vel";
                                            policy = "alias";
                                            priority = 93894;
                                            targetServiceAccounts = new String[]{{
                                                add("maiores"),
                                            }};
                                            targetTags = new String[]{{
                                                add("sint"),
                                                add("nulla"),
                                            }};
                                            uri = "https://joyous-fourths.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "est";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "sint";
                                            matchedPortRange = "accusamus";
                                            matchedProtocol = "impedit";
                                            networkUri = "hic";
                                            target = "necessitatibus";
                                            uri = "https://idiotic-garlic.org";
                                            vip = "delectus";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "quae";
                                            clusterUri = "minus";
                                            externalIp = "fuga";
                                            internalIp = "laborum";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "consectetur";
                                            externalIp = "velit";
                                            interface_ = "atque";
                                            internalIp = "ipsum";
                                            networkTags = new String[]{{
                                                add("magni"),
                                                add("soluta"),
                                                add("repudiandae"),
                                                add("nam"),
                                            }};
                                            networkUri = "dolore";
                                            serviceAccount = "iusto";
                                            uri = "http://digital-koala.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "deleniti";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "iure";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("voluptatibus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("magnam"),
                                                        add("quibusdam"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://scrawny-brain.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quia";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("aliquam"),
                                                        add("velit"),
                                                        add("illo"),
                                                        add("accusantium"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ea"),
                                                        add("beatae"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://indolent-defender.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perspiciatis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dicta"),
                                                        add("impedit"),
                                                        add("voluptatibus"),
                                                        add("iste"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("alias"),
                                                        add("nisi"),
                                                        add("itaque"),
                                                        add("velit"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://elaborate-jumbo.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "doloremque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("officia"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ea"),
                                                        add("quidem"),
                                                        add("voluptas"),
                                                        add("facilis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://rundown-mandarin.org";
                                                }}),
                                            }};
                                            healthCheckUri = "voluptate";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "unde";
                                            matchedIpRange = "necessitatibus";
                                            uri = "https://snappy-futon.info";
                                        }};
                                        projectId = "est";
                                        route = new RouteInfo() {{
                                            destIpRange = "error";
                                            destPortRanges = new String[]{{
                                                add("labore"),
                                                add("veritatis"),
                                            }};
                                            displayName = "vero";
                                            instanceTags = new String[]{{
                                                add("vitae"),
                                            }};
                                            networkUri = "inventore";
                                            nextHop = "dolorem";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_NETWORK;
                                            priority = 183033;
                                            protocols = new String[]{{
                                                add("ex"),
                                                add("nemo"),
                                                add("soluta"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_STATIC;
                                            srcIpRange = "rem";
                                            srcPortRanges = new String[]{{
                                                add("odio"),
                                                add("fugit"),
                                                add("alias"),
                                            }};
                                            uri = "http://impure-banker.com";
                                        }};
                                        state = StepStateEnum.START_FROM_APP_ENGINE_VERSION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "neque";
                                            location = "exercitationem";
                                            uri = "https://brave-courtroom.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "nulla";
                                            ipAddress = "distinctio";
                                            networkUri = "maxime";
                                            region = "quia";
                                            uri = "http://gorgeous-obsession.net";
                                            vpnTunnelUri = "dicta";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "id";
                                            networkUri = "libero";
                                            region = "fugiat";
                                            remoteGateway = "officia";
                                            remoteGatewayIp = "quos";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "sit";
                                            sourceGatewayIp = "iusto";
                                            uri = "http://usable-bestseller.com";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.TRACE_TOO_LONG;
                                            projectsMissingPermission = new String[]{{
                                                add("eligendi"),
                                                add("distinctio"),
                                            }};
                                            resourceUri = "voluptatem";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "autem";
                                            environment = "esse";
                                            runtime = "dolores";
                                            uri = "https://carefree-platform.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "corrupti";
                                            location = "molestiae";
                                            uri = "https://uncommon-term.net";
                                            versionId = "sint";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ea";
                                            location = "autem";
                                            serviceName = "ipsam";
                                            serviceUri = "rerum";
                                            uri = "https://grounded-tavern.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "cum";
                                            externalIp = "at";
                                            internalIp = "alias";
                                            networkUri = "quia";
                                            region = "quidem";
                                            uri = "https://vacant-anyone.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "officiis";
                                            target = DeliverInfoTargetEnum.INSTANCE;
                                        }};
                                        description = "quibusdam";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.TRAFFIC_TYPE_BLOCKED;
                                            resourceUri = "praesentium";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "odit";
                                            destinationNetworkUri = "explicabo";
                                            destinationPort = 358995;
                                            protocol = "error";
                                            sourceAgentUri = "earum";
                                            sourceIp = "adipisci";
                                            sourceNetworkUri = "recusandae";
                                            sourcePort = 630871;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ut";
                                            direction = "quidem";
                                            displayName = "quis";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "unde";
                                            policy = "molestiae";
                                            priority = 963198;
                                            targetServiceAccounts = new String[]{{
                                                add("fugit"),
                                                add("numquam"),
                                                add("numquam"),
                                            }};
                                            targetTags = new String[]{{
                                                add("at"),
                                            }};
                                            uri = "https://lined-ruin.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "corporis";
                                            target = ForwardInfoTargetEnum.PEERING_VPC;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "expedita";
                                            matchedPortRange = "voluptatum";
                                            matchedProtocol = "cupiditate";
                                            networkUri = "minima";
                                            target = "placeat";
                                            uri = "http://dreary-icecream.net";
                                            vip = "eum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "modi";
                                            clusterUri = "corporis";
                                            externalIp = "magnam";
                                            internalIp = "voluptates";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "maiores";
                                            externalIp = "tempore";
                                            interface_ = "aperiam";
                                            internalIp = "libero";
                                            networkTags = new String[]{{
                                                add("labore"),
                                            }};
                                            networkUri = "totam";
                                            serviceAccount = "occaecati";
                                            uri = "http://sore-death.net";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "nostrum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "impedit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("tempore"),
                                                        add("vero"),
                                                        add("odit"),
                                                        add("repellat"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nemo"),
                                                        add("reprehenderit"),
                                                        add("aperiam"),
                                                        add("odio"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://lone-mission.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "error";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ducimus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("pariatur"),
                                                        add("itaque"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://ideal-envy.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "officiis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quidem"),
                                                        add("exercitationem"),
                                                        add("quam"),
                                                        add("dolorem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ipsa"),
                                                        add("sint"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://utilized-rescue.com";
                                                }}),
                                            }};
                                            healthCheckUri = "earum";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "animi";
                                            matchedIpRange = "dolores";
                                            uri = "https://chilly-civilization.org";
                                        }};
                                        projectId = "nobis";
                                        route = new RouteInfo() {{
                                            destIpRange = "ipsa";
                                            destPortRanges = new String[]{{
                                                add("maiores"),
                                                add("veritatis"),
                                            }};
                                            displayName = "quasi";
                                            instanceTags = new String[]{{
                                                add("pariatur"),
                                                add("libero"),
                                            }};
                                            networkUri = "excepturi";
                                            nextHop = "occaecati";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_PEERING;
                                            priority = 306382;
                                            protocols = new String[]{{
                                                add("doloribus"),
                                                add("eligendi"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_SUBNET;
                                            srcIpRange = "enim";
                                            srcPortRanges = new String[]{{
                                                add("animi"),
                                                add("quas"),
                                                add("totam"),
                                                add("molestias"),
                                            }};
                                            uri = "http://austere-thermals.com";
                                        }};
                                        state = StepStateEnum.ARRIVE_AT_INSTANCE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "iste";
                                            location = "assumenda";
                                            uri = "https://scornful-declaration.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "delectus";
                                            ipAddress = "impedit";
                                            networkUri = "cum";
                                            region = "ipsum";
                                            uri = "http://unsung-pear.com";
                                            vpnTunnelUri = "quis";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "veniam";
                                            networkUri = "libero";
                                            region = "architecto";
                                            remoteGateway = "cupiditate";
                                            remoteGatewayIp = "molestiae";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "possimus";
                                            sourceGatewayIp = "non";
                                            uri = "http://villainous-chatter.org";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "veniam";
                                    destinationNetworkUri = "consequuntur";
                                    destinationPort = 813880;
                                    protocol = "laudantium";
                                    sourceAgentUri = "odit";
                                    sourceIp = "pariatur";
                                    sourceNetworkUri = "amet";
                                    sourcePort = 347698;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.PERMISSION_DENIED;
                                            projectsMissingPermission = new String[]{{
                                                add("tempore"),
                                                add("nisi"),
                                                add("voluptatibus"),
                                            }};
                                            resourceUri = "quaerat";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "blanditiis";
                                            environment = "distinctio";
                                            runtime = "nisi";
                                            uri = "http://horrible-recession.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "facere";
                                            location = "facilis";
                                            uri = "http://full-wealth.org";
                                            versionId = "consequuntur";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "debitis";
                                            location = "labore";
                                            serviceName = "rerum";
                                            serviceUri = "eos";
                                            uri = "http://grandiose-coral.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "est";
                                            externalIp = "rem";
                                            internalIp = "eligendi";
                                            networkUri = "fugiat";
                                            region = "unde";
                                            uri = "https://livid-creationist.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "error";
                                            target = DeliverInfoTargetEnum.PSC_GOOGLE_API;
                                        }};
                                        description = "vitae";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.TRAFFIC_TYPE_BLOCKED;
                                            resourceUri = "esse";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "fugiat";
                                            destinationNetworkUri = "ad";
                                            destinationPort = 134818;
                                            protocol = "enim";
                                            sourceAgentUri = "delectus";
                                            sourceIp = "iusto";
                                            sourceNetworkUri = "dignissimos";
                                            sourcePort = 729828;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "illo";
                                            direction = "ab";
                                            displayName = "incidunt";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "saepe";
                                            policy = "tempore";
                                            priority = 334018;
                                            targetServiceAccounts = new String[]{{
                                                add("reiciendis"),
                                            }};
                                            targetTags = new String[]{{
                                                add("reprehenderit"),
                                                add("praesentium"),
                                                add("nemo"),
                                                add("repellat"),
                                            }};
                                            uri = "https://direct-insurance.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "illo";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "assumenda";
                                            matchedPortRange = "aliquam";
                                            matchedProtocol = "quisquam";
                                            networkUri = "provident";
                                            target = "laudantium";
                                            uri = "https://acrobatic-signet.com";
                                            vip = "nam";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "expedita";
                                            clusterUri = "quas";
                                            externalIp = "provident";
                                            internalIp = "repudiandae";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "rerum";
                                            externalIp = "dignissimos";
                                            interface_ = "corporis";
                                            internalIp = "vero";
                                            networkTags = new String[]{{
                                                add("repellendus"),
                                                add("iure"),
                                                add("dolorem"),
                                            }};
                                            networkUri = "commodi";
                                            serviceAccount = "impedit";
                                            uri = "http://admirable-antelope.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_TYPE_UNSPECIFIED;
                                            backendUri = "amet";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "praesentium";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("cum"),
                                                        add("amet"),
                                                        add("quasi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("laudantium"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://lawful-cub.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dolorum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("provident"),
                                                        add("repudiandae"),
                                                        add("consequatur"),
                                                        add("nemo"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("itaque"),
                                                        add("facilis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://notable-sword.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "totam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("voluptatem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://edible-mukluk.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "beatae";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("labore"),
                                                        add("minus"),
                                                        add("esse"),
                                                        add("voluptatem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("rerum"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://limp-zen.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "porro";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.HTTP_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "consectetur";
                                            matchedIpRange = "eligendi";
                                            uri = "http://energetic-response.name";
                                        }};
                                        projectId = "temporibus";
                                        route = new RouteInfo() {{
                                            destIpRange = "officia";
                                            destPortRanges = new String[]{{
                                                add("tenetur"),
                                            }};
                                            displayName = "aspernatur";
                                            instanceTags = new String[]{{
                                                add("itaque"),
                                                add("illum"),
                                                add("laborum"),
                                                add("dignissimos"),
                                            }};
                                            networkUri = "vero";
                                            nextHop = "qui";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INSTANCE;
                                            priority = 995816;
                                            protocols = new String[]{{
                                                add("explicabo"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.STATIC_;
                                            srcIpRange = "nihil";
                                            srcPortRanges = new String[]{{
                                                add("ab"),
                                                add("illo"),
                                            }};
                                            uri = "https://practical-wagon.biz";
                                        }};
                                        state = StepStateEnum.ARRIVE_AT_VPC_CONNECTOR;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "in";
                                            location = "exercitationem";
                                            uri = "http://expensive-trafficker.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "in";
                                            ipAddress = "explicabo";
                                            networkUri = "accusamus";
                                            region = "rem";
                                            uri = "http://conventional-mallet.biz";
                                            vpnTunnelUri = "voluptate";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "similique";
                                            networkUri = "minima";
                                            region = "libero";
                                            remoteGateway = "magnam";
                                            remoteGatewayIp = "sit";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTE_BASED;
                                            sourceGateway = "eum";
                                            sourceGatewayIp = "nesciunt";
                                            uri = "https://liquid-steward.info";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "molestiae";
                                    destinationNetworkUri = "veniam";
                                    destinationPort = 969206;
                                    protocol = "ab";
                                    sourceAgentUri = "modi";
                                    sourceIp = "aut";
                                    sourceNetworkUri = "aut";
                                    sourcePort = 911657;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.NO_EXTERNAL_IP;
                                            projectsMissingPermission = new String[]{{
                                                add("dolorum"),
                                                add("possimus"),
                                            }};
                                            resourceUri = "voluptate";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "consectetur";
                                            environment = "nesciunt";
                                            runtime = "quaerat";
                                            uri = "https://spotless-calendar.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "iusto";
                                            location = "quas";
                                            uri = "http://rotten-cuff-link.info";
                                            versionId = "fuga";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "alias";
                                            location = "rem";
                                            serviceName = "aut";
                                            serviceUri = "quos";
                                            uri = "https://sympathetic-biopsy.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "eaque";
                                            externalIp = "saepe";
                                            internalIp = "delectus";
                                            networkUri = "mollitia";
                                            region = "nulla";
                                            uri = "https://creepy-anise.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "eveniet";
                                            target = DeliverInfoTargetEnum.SERVERLESS_NEG;
                                        }};
                                        description = "voluptatem";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.UNKNOWN_INTERNAL_ADDRESS;
                                            resourceUri = "qui";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "qui";
                                            destinationNetworkUri = "necessitatibus";
                                            destinationPort = 691508;
                                            protocol = "explicabo";
                                            sourceAgentUri = "beatae";
                                            sourceIp = "aliquid";
                                            sourceNetworkUri = "modi";
                                            sourcePort = 760049;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "voluptatibus";
                                            direction = "molestias";
                                            displayName = "officia";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE;
                                            networkUri = "totam";
                                            policy = "sequi";
                                            priority = 397919;
                                            targetServiceAccounts = new String[]{{
                                                add("impedit"),
                                                add("ducimus"),
                                            }};
                                            targetTags = new String[]{{
                                                add("velit"),
                                            }};
                                            uri = "https://zealous-strudel.net";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "natus";
                                            target = ForwardInfoTargetEnum.ANOTHER_PROJECT;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "doloremque";
                                            matchedPortRange = "nisi";
                                            matchedProtocol = "rerum";
                                            networkUri = "recusandae";
                                            target = "voluptates";
                                            uri = "http://mediocre-choir.info";
                                            vip = "quisquam";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "dicta";
                                            clusterUri = "voluptatibus";
                                            externalIp = "eligendi";
                                            internalIp = "quae";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "officiis";
                                            externalIp = "architecto";
                                            interface_ = "architecto";
                                            internalIp = "enim";
                                            networkTags = new String[]{{
                                                add("rem"),
                                                add("perferendis"),
                                                add("facilis"),
                                                add("reiciendis"),
                                            }};
                                            networkUri = "a";
                                            serviceAccount = "iste";
                                            uri = "http://mushy-fog.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_SERVICE;
                                            backendUri = "itaque";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "modi";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("assumenda"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("doloribus"),
                                                        add("impedit"),
                                                        add("porro"),
                                                        add("accusamus"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://beneficial-monitor.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "esse";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("odio"),
                                                        add("nesciunt"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("vel"),
                                                        add("neque"),
                                                        add("corporis"),
                                                        add("voluptas"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://instructive-racist.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ipsa";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("maiores"),
                                                        add("accusantium"),
                                                        add("veniam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("neque"),
                                                        add("facere"),
                                                        add("aliquam"),
                                                        add("quos"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://queasy-vol.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "vitae";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("similique"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://superficial-oak.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "explicabo";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "cupiditate";
                                            matchedIpRange = "optio";
                                            uri = "http://repulsive-conspiracy.info";
                                        }};
                                        projectId = "sapiente";
                                        route = new RouteInfo() {{
                                            destIpRange = "consequuntur";
                                            destPortRanges = new String[]{{
                                                add("debitis"),
                                                add("officia"),
                                            }};
                                            displayName = "sint";
                                            instanceTags = new String[]{{
                                                add("numquam"),
                                                add("tenetur"),
                                            }};
                                            networkUri = "adipisci";
                                            nextHop = "libero";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INTERCONNECT;
                                            priority = 329651;
                                            protocols = new String[]{{
                                                add("minus"),
                                                add("ab"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.ROUTE_TYPE_UNSPECIFIED;
                                            srcIpRange = "hic";
                                            srcPortRanges = new String[]{{
                                                add("quisquam"),
                                                add("dolor"),
                                            }};
                                            uri = "http://real-expose.com";
                                        }};
                                        state = StepStateEnum.START_FROM_GKE_MASTER;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "aliquid";
                                            location = "magni";
                                            uri = "http://equatorial-legging.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "exercitationem";
                                            ipAddress = "expedita";
                                            networkUri = "facilis";
                                            region = "impedit";
                                            uri = "http://gullible-parking.com";
                                            vpnTunnelUri = "amet";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "deserunt";
                                            networkUri = "modi";
                                            region = "veniam";
                                            remoteGateway = "quod";
                                            remoteGatewayIp = "itaque";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "quisquam";
                                            sourceGatewayIp = "enim";
                                            uri = "https://surprised-tape.com";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.CAUSE_UNSPECIFIED;
                                            projectsMissingPermission = new String[]{{
                                                add("ipsa"),
                                                add("nobis"),
                                                add("necessitatibus"),
                                            }};
                                            resourceUri = "quia";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "dicta";
                                            environment = "vel";
                                            runtime = "perspiciatis";
                                            uri = "https://gross-brassiere.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "perferendis";
                                            location = "veritatis";
                                            uri = "https://small-horseradish.org";
                                            versionId = "quod";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nemo";
                                            location = "recusandae";
                                            serviceName = "velit";
                                            serviceUri = "magnam";
                                            uri = "http://honest-cheek.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "natus";
                                            externalIp = "provident";
                                            internalIp = "cum";
                                            networkUri = "doloribus";
                                            region = "facilis";
                                            uri = "https://villainous-gobbler.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "modi";
                                            target = DeliverInfoTargetEnum.CLOUD_SQL_INSTANCE;
                                        }};
                                        description = "hic";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.GKE_CONTROL_PLANE_NO_ROUTE;
                                            resourceUri = "aspernatur";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "libero";
                                            destinationNetworkUri = "nam";
                                            destinationPort = 279172;
                                            protocol = "recusandae";
                                            sourceAgentUri = "quod";
                                            sourceIp = "id";
                                            sourceNetworkUri = "saepe";
                                            sourcePort = 423054;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quo";
                                            direction = "nesciunt";
                                            displayName = "illum";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.VPC_FIREWALL_RULE;
                                            networkUri = "illum";
                                            policy = "facilis";
                                            priority = 247618;
                                            targetServiceAccounts = new String[]{{
                                                add("assumenda"),
                                                add("recusandae"),
                                                add("distinctio"),
                                            }};
                                            targetTags = new String[]{{
                                                add("ad"),
                                                add("facere"),
                                                add("laborum"),
                                                add("eveniet"),
                                            }};
                                            uri = "https://feisty-shrimp.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "alias";
                                            target = ForwardInfoTargetEnum.INTERCONNECT;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "deserunt";
                                            matchedPortRange = "molestias";
                                            matchedProtocol = "laborum";
                                            networkUri = "est";
                                            target = "occaecati";
                                            uri = "http://some-alder.com";
                                            vip = "aliquid";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "magnam";
                                            clusterUri = "quaerat";
                                            externalIp = "eligendi";
                                            internalIp = "hic";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "nostrum";
                                            externalIp = "officiis";
                                            interface_ = "unde";
                                            internalIp = "nulla";
                                            networkTags = new String[]{{
                                                add("mollitia"),
                                                add("magnam"),
                                                add("nostrum"),
                                            }};
                                            networkUri = "esse";
                                            serviceAccount = "corrupti";
                                            uri = "https://sturdy-scenario.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "quod";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "doloremque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("facere"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("maxime"),
                                                        add("consequatur"),
                                                        add("eaque"),
                                                        add("architecto"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://loud-bakery.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "officiis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("necessitatibus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ipsa"),
                                                        add("excepturi"),
                                                        add("a"),
                                                        add("maiores"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://abandoned-wriggler.name";
                                                }}),
                                            }};
                                            healthCheckUri = "dicta";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "earum";
                                            matchedIpRange = "doloribus";
                                            uri = "http://failing-infant.info";
                                        }};
                                        projectId = "eligendi";
                                        route = new RouteInfo() {{
                                            destIpRange = "quasi";
                                            destPortRanges = new String[]{{
                                                add("vero"),
                                            }};
                                            displayName = "excepturi";
                                            instanceTags = new String[]{{
                                                add("qui"),
                                            }};
                                            networkUri = "impedit";
                                            nextHop = "beatae";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_NETWORK;
                                            priority = 116558;
                                            protocols = new String[]{{
                                                add("corporis"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_STATIC;
                                            srcIpRange = "alias";
                                            srcPortRanges = new String[]{{
                                                add("vel"),
                                                add("accusantium"),
                                                add("id"),
                                            }};
                                            uri = "http://ideal-merit.com";
                                        }};
                                        state = StepStateEnum.APPLY_INGRESS_FIREWALL_RULE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quae";
                                            location = "similique";
                                            uri = "http://jumpy-client.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "delectus";
                                            ipAddress = "omnis";
                                            networkUri = "sed";
                                            region = "nesciunt";
                                            uri = "https://glorious-name.biz";
                                            vpnTunnelUri = "excepturi";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "maiores";
                                            networkUri = "laudantium";
                                            region = "velit";
                                            remoteGateway = "reiciendis";
                                            remoteGatewayIp = "amet";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTE_BASED;
                                            sourceGateway = "ipsa";
                                            sourceGatewayIp = "quisquam";
                                            uri = "https://naive-item.info";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "asperiores";
                                    destinationNetworkUri = "a";
                                    destinationPort = 749702;
                                    protocol = "perspiciatis";
                                    sourceAgentUri = "accusantium";
                                    sourceIp = "dicta";
                                    sourceNetworkUri = "minus";
                                    sourcePort = 417539;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.MISMATCHED_DESTINATION_NETWORK;
                                            projectsMissingPermission = new String[]{{
                                                add("quidem"),
                                                add("modi"),
                                                add("voluptates"),
                                            }};
                                            resourceUri = "fugit";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "eius";
                                            environment = "sequi";
                                            runtime = "eligendi";
                                            uri = "https://judicious-laryngitis.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "repellat";
                                            location = "a";
                                            uri = "https://wooden-trophy.org";
                                            versionId = "deserunt";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "corporis";
                                            location = "velit";
                                            serviceName = "officiis";
                                            serviceUri = "enim";
                                            uri = "https://unsung-hobby.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "accusantium";
                                            externalIp = "officia";
                                            internalIp = "impedit";
                                            networkUri = "quasi";
                                            region = "blanditiis";
                                            uri = "http://spectacular-coil.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "natus";
                                            target = DeliverInfoTargetEnum.PSC_GOOGLE_API;
                                        }};
                                        description = "quia";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.FORWARDING_RULE_MISMATCH;
                                            resourceUri = "reprehenderit";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "quod";
                                            destinationNetworkUri = "quos";
                                            destinationPort = 548846;
                                            protocol = "amet";
                                            sourceAgentUri = "molestiae";
                                            sourceIp = "amet";
                                            sourceNetworkUri = "laborum";
                                            sourcePort = 266946;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "perferendis";
                                            direction = "necessitatibus";
                                            displayName = "architecto";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.IMPLIED_VPC_FIREWALL_RULE;
                                            networkUri = "dolore";
                                            policy = "sunt";
                                            priority = 982991;
                                            targetServiceAccounts = new String[]{{
                                                add("odit"),
                                            }};
                                            targetTags = new String[]{{
                                                add("veniam"),
                                                add("ipsam"),
                                                add("eaque"),
                                                add("exercitationem"),
                                            }};
                                            uri = "http://knotty-ex-husband.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "tenetur";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "quibusdam";
                                            matchedPortRange = "nemo";
                                            matchedProtocol = "suscipit";
                                            networkUri = "pariatur";
                                            target = "sit";
                                            uri = "https://sweltering-airmail.name";
                                            vip = "sapiente";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "sed";
                                            clusterUri = "possimus";
                                            externalIp = "repellat";
                                            internalIp = "repudiandae";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "architecto";
                                            externalIp = "adipisci";
                                            interface_ = "pariatur";
                                            internalIp = "harum";
                                            networkTags = new String[]{{
                                                add("voluptatibus"),
                                                add("iure"),
                                            }};
                                            networkUri = "explicabo";
                                            serviceAccount = "minus";
                                            uri = "https://rapid-debris.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "error";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quasi";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("accusamus"),
                                                        add("harum"),
                                                        add("cumque"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("expedita"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://powerless-grandma.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "magni";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("possimus"),
                                                        add("dolor"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("sed"),
                                                        add("accusamus"),
                                                        add("optio"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://soggy-meat.org";
                                                }}),
                                            }};
                                            healthCheckUri = "voluptatum";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.HTTP_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "corporis";
                                            matchedIpRange = "accusantium";
                                            uri = "http://adored-winery.info";
                                        }};
                                        projectId = "at";
                                        route = new RouteInfo() {{
                                            destIpRange = "possimus";
                                            destPortRanges = new String[]{{
                                                add("pariatur"),
                                            }};
                                            displayName = "vel";
                                            instanceTags = new String[]{{
                                                add("mollitia"),
                                                add("quae"),
                                                add("quos"),
                                                add("aperiam"),
                                            }};
                                            networkUri = "non";
                                            nextHop = "voluptates";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_NETWORK;
                                            priority = 305047;
                                            protocols = new String[]{{
                                                add("quas"),
                                                add("consequuntur"),
                                                add("maiores"),
                                                add("inventore"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.DYNAMIC;
                                            srcIpRange = "laudantium";
                                            srcPortRanges = new String[]{{
                                                add("dolor"),
                                                add("aliquid"),
                                                add("consectetur"),
                                            }};
                                            uri = "https://meek-lunge.info";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_FUNCTION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "recusandae";
                                            location = "tempora";
                                            uri = "https://extra-large-congressperson.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "sit";
                                            ipAddress = "rerum";
                                            networkUri = "veritatis";
                                            region = "tenetur";
                                            uri = "http://respectful-liquid.net";
                                            vpnTunnelUri = "deserunt";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "magni";
                                            networkUri = "nihil";
                                            region = "voluptas";
                                            remoteGateway = "animi";
                                            remoteGatewayIp = "commodi";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTING_TYPE_UNSPECIFIED;
                                            sourceGateway = "fuga";
                                            sourceGatewayIp = "aut";
                                            uri = "http://sticky-embassy.name";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.INVALID_ARGUMENT;
                                            projectsMissingPermission = new String[]{{
                                                add("placeat"),
                                                add("voluptas"),
                                                add("occaecati"),
                                                add("unde"),
                                            }};
                                            resourceUri = "illo";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "nihil";
                                            environment = "inventore";
                                            runtime = "libero";
                                            uri = "http://bumpy-saloon.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "harum";
                                            location = "facere";
                                            uri = "https://canine-samovar.org";
                                            versionId = "labore";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "expedita";
                                            location = "corrupti";
                                            serviceName = "rem";
                                            serviceUri = "atque";
                                            uri = "https://shady-stylus.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "quo";
                                            externalIp = "incidunt";
                                            internalIp = "quod";
                                            networkUri = "minus";
                                            region = "porro";
                                            uri = "https://nimble-mouse.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "quo";
                                            target = DeliverInfoTargetEnum.GKE_MASTER;
                                        }};
                                        description = "hic";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION;
                                            resourceUri = "accusantium";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "soluta";
                                            destinationNetworkUri = "fugit";
                                            destinationPort = 866292;
                                            protocol = "eligendi";
                                            sourceAgentUri = "recusandae";
                                            sourceIp = "veritatis";
                                            sourceNetworkUri = "aut";
                                            sourcePort = 516124;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "iusto";
                                            direction = "dolor";
                                            displayName = "voluptates";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.HIERARCHICAL_FIREWALL_POLICY_RULE;
                                            networkUri = "magni";
                                            policy = "rerum";
                                            priority = 39222;
                                            targetServiceAccounts = new String[]{{
                                                add("eum"),
                                            }};
                                            targetTags = new String[]{{
                                                add("eum"),
                                                add("reprehenderit"),
                                                add("voluptatum"),
                                                add("blanditiis"),
                                            }};
                                            uri = "http://modern-prohibition.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "atque";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "atque";
                                            matchedPortRange = "architecto";
                                            matchedProtocol = "est";
                                            networkUri = "enim";
                                            target = "rem";
                                            uri = "http://barren-message.net";
                                            vip = "enim";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "labore";
                                            clusterUri = "sapiente";
                                            externalIp = "saepe";
                                            internalIp = "delectus";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "officia";
                                            externalIp = "natus";
                                            interface_ = "cumque";
                                            internalIp = "natus";
                                            networkTags = new String[]{{
                                                add("doloribus"),
                                                add("quia"),
                                            }};
                                            networkUri = "officiis";
                                            serviceAccount = "mollitia";
                                            uri = "https://gloomy-equation.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_SERVICE;
                                            backendUri = "illum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "sit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("minus"),
                                                        add("asperiores"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("voluptates"),
                                                        add("praesentium"),
                                                        add("dicta"),
                                                        add("fugit"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://unrealistic-charge.name";
                                                }}),
                                            }};
                                            healthCheckUri = "sunt";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.INTERNAL_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "delectus";
                                            matchedIpRange = "laborum";
                                            uri = "http://practical-disclaimer.com";
                                        }};
                                        projectId = "impedit";
                                        route = new RouteInfo() {{
                                            destIpRange = "eius";
                                            destPortRanges = new String[]{{
                                                add("ipsa"),
                                                add("at"),
                                                add("dolorem"),
                                            }};
                                            displayName = "repellat";
                                            instanceTags = new String[]{{
                                                add("inventore"),
                                            }};
                                            networkUri = "sequi";
                                            nextHop = "fugit";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INTERNET_GATEWAY;
                                            priority = 943103;
                                            protocols = new String[]{{
                                                add("dolorem"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.ROUTE_TYPE_UNSPECIFIED;
                                            srcIpRange = "aperiam";
                                            srcPortRanges = new String[]{{
                                                add("nulla"),
                                            }};
                                            uri = "http://black-and-white-egghead.org";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_FUNCTION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "optio";
                                            location = "nobis";
                                            uri = "http://zealous-banyan.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "expedita";
                                            ipAddress = "hic";
                                            networkUri = "excepturi";
                                            region = "aliquid";
                                            uri = "http://capital-palate.info";
                                            vpnTunnelUri = "animi";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "dolore";
                                            networkUri = "tenetur";
                                            region = "dignissimos";
                                            remoteGateway = "esse";
                                            remoteGatewayIp = "animi";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "esse";
                                            sourceGatewayIp = "eveniet";
                                            uri = "https://everlasting-take-out.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.MISMATCHED_SOURCE_NETWORK;
                                            projectsMissingPermission = new String[]{{
                                                add("dignissimos"),
                                                add("ipsam"),
                                                add("explicabo"),
                                                add("impedit"),
                                            }};
                                            resourceUri = "aliquid";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quis";
                                            environment = "facilis";
                                            runtime = "ipsum";
                                            uri = "http://fresh-breadcrumb.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "eveniet";
                                            location = "dolor";
                                            uri = "https://secret-ordination.com";
                                            versionId = "minus";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "quos";
                                            location = "temporibus";
                                            serviceName = "sint";
                                            serviceUri = "iusto";
                                            uri = "http://unaware-artificer.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "laudantium";
                                            externalIp = "tempora";
                                            internalIp = "quae";
                                            networkUri = "omnis";
                                            region = "illum";
                                            uri = "https://weary-mango.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "earum";
                                            target = DeliverInfoTargetEnum.INSTANCE;
                                        }};
                                        description = "aliquam";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.UNKNOWN_INTERNAL_ADDRESS;
                                            resourceUri = "maiores";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "sequi";
                                            destinationNetworkUri = "saepe";
                                            destinationPort = 8904;
                                            protocol = "esse";
                                            sourceAgentUri = "debitis";
                                            sourceIp = "facere";
                                            sourceNetworkUri = "quisquam";
                                            sourcePort = 769047;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "aliquam";
                                            direction = "dolorum";
                                            displayName = "deserunt";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.HIERARCHICAL_FIREWALL_POLICY_RULE;
                                            networkUri = "reiciendis";
                                            policy = "sequi";
                                            priority = 785555;
                                            targetServiceAccounts = new String[]{{
                                                add("nobis"),
                                                add("quibusdam"),
                                                add("omnis"),
                                            }};
                                            targetTags = new String[]{{
                                                add("ipsam"),
                                            }};
                                            uri = "https://odd-husband.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "necessitatibus";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "ad";
                                            matchedPortRange = "nisi";
                                            matchedProtocol = "molestiae";
                                            networkUri = "quia";
                                            target = "laudantium";
                                            uri = "http://content-jeweller.net";
                                            vip = "eos";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "repellendus";
                                            clusterUri = "nesciunt";
                                            externalIp = "ipsa";
                                            internalIp = "sint";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "dolore";
                                            externalIp = "esse";
                                            interface_ = "accusantium";
                                            internalIp = "distinctio";
                                            networkTags = new String[]{{
                                                add("quam"),
                                                add("est"),
                                                add("aliquam"),
                                                add("delectus"),
                                            }};
                                            networkUri = "culpa";
                                            serviceAccount = "voluptatum";
                                            uri = "http://steep-western.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_TYPE_UNSPECIFIED;
                                            backendUri = "ullam";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptas";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("animi"),
                                                        add("recusandae"),
                                                        add("corporis"),
                                                        add("non"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("distinctio"),
                                                        add("maiores"),
                                                        add("laboriosam"),
                                                        add("voluptatem"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://cluttered-budget.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "doloremque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("amet"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("in"),
                                                        add("nostrum"),
                                                        add("temporibus"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://hopeful-koala.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "itaque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("est"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quod"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://suburban-wholesale.info";
                                                }}),
                                            }};
                                            healthCheckUri = "provident";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.SSL_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "aperiam";
                                            matchedIpRange = "similique";
                                            uri = "http://optimal-guideline.net";
                                        }};
                                        projectId = "unde";
                                        route = new RouteInfo() {{
                                            destIpRange = "alias";
                                            destPortRanges = new String[]{{
                                                add("sequi"),
                                                add("commodi"),
                                                add("labore"),
                                                add("expedita"),
                                            }};
                                            displayName = "in";
                                            instanceTags = new String[]{{
                                                add("sunt"),
                                                add("enim"),
                                                add("nulla"),
                                                add("maiores"),
                                            }};
                                            networkUri = "distinctio";
                                            nextHop = "mollitia";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_BLACKHOLE;
                                            priority = 880998;
                                            protocols = new String[]{{
                                                add("quas"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_SUBNET;
                                            srcIpRange = "cum";
                                            srcPortRanges = new String[]{{
                                                add("impedit"),
                                            }};
                                            uri = "http://unwelcome-trading.com";
                                        }};
                                        state = StepStateEnum.NAT;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quas";
                                            location = "impedit";
                                            uri = "http://silly-transcript.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "beatae";
                                            ipAddress = "veritatis";
                                            networkUri = "maiores";
                                            region = "itaque";
                                            uri = "https://respectful-beard.net";
                                            vpnTunnelUri = "dignissimos";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "minus";
                                            networkUri = "distinctio";
                                            region = "possimus";
                                            remoteGateway = "cum";
                                            remoteGatewayIp = "suscipit";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "earum";
                                            sourceGatewayIp = "quod";
                                            uri = "http://frightened-coverage.info";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.TRACE_TOO_LONG;
                                            projectsMissingPermission = new String[]{{
                                                add("deserunt"),
                                                add("odit"),
                                                add("ad"),
                                            }};
                                            resourceUri = "sequi";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "beatae";
                                            environment = "iusto";
                                            runtime = "esse";
                                            uri = "http://likely-stump.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "cupiditate";
                                            location = "illo";
                                            uri = "http://questionable-statue.com";
                                            versionId = "maxime";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "dolorum";
                                            location = "repellat";
                                            serviceName = "nostrum";
                                            serviceUri = "illum";
                                            uri = "https://immediate-independence.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "consectetur";
                                            externalIp = "temporibus";
                                            internalIp = "optio";
                                            networkUri = "ipsa";
                                            region = "maiores";
                                            uri = "http://polite-tracking.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "sapiente";
                                            target = DeliverInfoTargetEnum.INTERNET;
                                        }};
                                        description = "officia";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK;
                                            resourceUri = "harum";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "ducimus";
                                            destinationNetworkUri = "doloremque";
                                            destinationPort = 20141;
                                            protocol = "laudantium";
                                            sourceAgentUri = "iusto";
                                            sourceIp = "corrupti";
                                            sourceNetworkUri = "molestiae";
                                            sourcePort = 340101;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "iure";
                                            direction = "ab";
                                            displayName = "quaerat";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.HIERARCHICAL_FIREWALL_POLICY_RULE;
                                            networkUri = "sapiente";
                                            policy = "corporis";
                                            priority = 666005;
                                            targetServiceAccounts = new String[]{{
                                                add("quisquam"),
                                                add("provident"),
                                            }};
                                            targetTags = new String[]{{
                                                add("nam"),
                                                add("nemo"),
                                                add("enim"),
                                            }};
                                            uri = "http://giddy-divine.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "corrupti";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "fugiat";
                                            matchedPortRange = "numquam";
                                            matchedProtocol = "doloremque";
                                            networkUri = "cum";
                                            target = "nobis";
                                            uri = "https://sparkling-satin.info";
                                            vip = "cumque";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "soluta";
                                            clusterUri = "fugiat";
                                            externalIp = "laboriosam";
                                            internalIp = "nam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "enim";
                                            externalIp = "maiores";
                                            interface_ = "consectetur";
                                            internalIp = "necessitatibus";
                                            networkTags = new String[]{{
                                                add("cupiditate"),
                                                add("voluptatem"),
                                                add("provident"),
                                                add("adipisci"),
                                            }};
                                            networkUri = "accusantium";
                                            serviceAccount = "magnam";
                                            uri = "https://palatable-caribou.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "id";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "fugit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nostrum"),
                                                        add("sequi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quasi"),
                                                        add("error"),
                                                        add("nobis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://faint-quill.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptates";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("fugit"),
                                                        add("voluptatem"),
                                                        add("repudiandae"),
                                                        add("corporis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("eos"),
                                                        add("aliquam"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://wordy-worry.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nesciunt";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("animi"),
                                                        add("provident"),
                                                        add("beatae"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("mollitia"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://somber-practice.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "commodi";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("suscipit"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nisi"),
                                                        add("aliquid"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://uncomfortable-baseball.org";
                                                }}),
                                            }};
                                            healthCheckUri = "quisquam";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_UNSPECIFIED;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "alias";
                                            matchedIpRange = "qui";
                                            uri = "http://charming-profile.biz";
                                        }};
                                        projectId = "amet";
                                        route = new RouteInfo() {{
                                            destIpRange = "exercitationem";
                                            destPortRanges = new String[]{{
                                                add("praesentium"),
                                                add("unde"),
                                                add("similique"),
                                                add("eligendi"),
                                            }};
                                            displayName = "tempore";
                                            instanceTags = new String[]{{
                                                add("debitis"),
                                            }};
                                            networkUri = "nobis";
                                            nextHop = "asperiores";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_ILB;
                                            priority = 662857;
                                            protocols = new String[]{{
                                                add("quibusdam"),
                                                add("sit"),
                                                add("quo"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.STATIC_;
                                            srcIpRange = "aliquam";
                                            srcPortRanges = new String[]{{
                                                add("vero"),
                                                add("earum"),
                                                add("doloremque"),
                                            }};
                                            uri = "http://abandoned-artery.biz";
                                        }};
                                        state = StepStateEnum.ARRIVE_AT_EXTERNAL_LOAD_BALANCER;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quam";
                                            location = "atque";
                                            uri = "https://ill-boysenberry.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "laborum";
                                            ipAddress = "veritatis";
                                            networkUri = "quod";
                                            region = "a";
                                            uri = "http://angry-harp.name";
                                            vpnTunnelUri = "totam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "tenetur";
                                            networkUri = "voluptate";
                                            region = "quam";
                                            remoteGateway = "quod";
                                            remoteGatewayIp = "vitae";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "reiciendis";
                                            sourceGatewayIp = "quod";
                                            uri = "http://blissful-slippers.net";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "fuga";
                    }};;
                    relatedProjects = new String[]{{
                        add("ex"),
                    }};
                    source = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://worn-chem.name";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://single-lychee.com";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://paltry-interloper.org";
                        }};;
                        cloudSqlInstance = "sapiente";
                        forwardingRule = "velit";
                        gkeMasterCluster = "adipisci";
                        instance = "non";
                        ipAddress = "optio";
                        network = "illum";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 945320;
                        projectId = "molestias";
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "perspiciatis";
                key = "voluptates";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "quasi";
                updateMask = "quas";
                uploadType = "odio";
                uploadProtocol = "commodi";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsPatch(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity("porro", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsRerun

Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("et", "nulla");
                }};
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "a";
                key = "impedit";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "facere";
                uploadProtocol = "voluptas";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsRerun(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity("doloribus", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                            add("sint"),
                                            add("aperiam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("laboriosam"),
                                            add("laborum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("explicabo"),
                                            add("fugiat"),
                                            add("doloremque"),
                                            add("voluptatem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "velit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("velit"),
                                            add("ratione"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                            add("cumque"),
                                            add("doloremque"),
                                            add("totam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "maiores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "fugit";
                                    expression = "veritatis";
                                    location = "necessitatibus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                }};
                                role = "consequuntur";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cumque";
                                    expression = "quidem";
                                    location = "non";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("molestias"),
                                }};
                                role = "beatae";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "autem";
                                    expression = "ducimus";
                                    location = "libero";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("ipsum"),
                                    add("impedit"),
                                    add("quos"),
                                    add("illum"),
                                }};
                                role = "distinctio";
                            }}),
                        }};
                        etag = "voluptatem";
                        version = 249803;
                    }};;
                    updateMask = "quaerat";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "commodi";
                key = "quibusdam";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "quaerat";
                uploadProtocol = "earum";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity("tenetur", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("perspiciatis"),
                        add("alias"),
                    }};
                }};;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "quia";
                key = "commodi";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "numquam";
                uploadProtocol = "rem";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity("officiis", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolores", "placeat");
                    put("excepturi", "recusandae");
                    put("quos", "dicta");
                    put("sapiente", "ipsum");
                }};
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "sequi";
                key = "recusandae";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "magni";
                uploadProtocol = "aperiam";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsCancel(req, new NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity("dolores", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "voluptate";
                key = "vel";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "vel";
                uploadProtocol = "laboriosam";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsDeleteResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsDelete(req, new NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity("quaerat", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsGetRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsGetResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalOperationsGetRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsGetRequest("rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "facere";
                key = "sed";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "unde";
                uploadProtocol = "deserunt";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsGetResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsGet(req, new NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity("repellendus", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsGlobalOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsListRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsListResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalOperationsListRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "cumque";
                filter = "maxime";
                key = "et";
                oauthToken = "beatae";
                pageSize = 662068L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "ratione";
                uploadProtocol = "iure";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsListResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsList(req, new NetworkmanagementProjectsLocationsGlobalOperationsListSecurity("tempora", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networkmanagementProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsListRequest req = new NetworkmanagementProjectsLocationsListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "laudantium";
                filter = "ullam";
                key = "aut";
                oauthToken = "quia";
                pageSize = 642576L;
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "accusamus";
                uploadProtocol = "iusto";
            }};            

            NetworkmanagementProjectsLocationsListResponse res = sdk.projects.networkmanagementProjectsLocationsList(req, new NetworkmanagementProjectsLocationsListSecurity("sapiente", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
