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
import org.openapis.openapi.models.shared.Endpoint;
import org.openapis.openapi.models.shared.EndpointInfo;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.FirewallInfo;
import org.openapis.openapi.models.shared.FirewallInfoFirewallRuleTypeEnum;
import org.openapis.openapi.models.shared.ForwardInfo;
import org.openapis.openapi.models.shared.ForwardInfoTargetEnum;
import org.openapis.openapi.models.shared.ForwardingRuleInfo;
import org.openapis.openapi.models.shared.GKEMasterInfo;
import org.openapis.openapi.models.shared.InstanceInfo;
import org.openapis.openapi.models.shared.LoadBalancerBackend;
import org.openapis.openapi.models.shared.LoadBalancerBackendHealthCheckFirewallStateEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.LoadBalancerInfoBackendTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfoLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.NetworkInfo;
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "excepturi";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://illegal-antique.com";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://rewarding-future.info";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://scared-atrium.org";
                        }};;
                        cloudSqlInstance = "nemo";
                        gkeMasterCluster = "voluptatibus";
                        instance = "perferendis";
                        ipAddress = "fugiat";
                        network = "amet";
                        networkType = EndpointNetworkTypeEnum.NETWORK_TYPE_UNSPECIFIED;
                        port = 764912;
                        projectId = "corporis";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("libero", "nobis");
                        put("dolores", "quis");
                        put("totam", "dignissimos");
                        put("eaque", "quis");
                    }};
                    name = "Ruby Auer";
                    protocol = "quam";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 223924;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("hic", "recusandae");
                                    put("omnis", "facilis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("voluptatem", "porro");
                                    put("consequuntur", "blanditiis");
                                    put("error", "eaque");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("rerum", "adipisci");
                                    put("asperiores", "earum");
                                    put("modi", "iste");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("deleniti", "pariatur");
                                    put("provident", "nobis");
                                    put("libero", "delectus");
                                }}),
                            }};
                            message = "quaerat";
                        }};;
                        result = ReachabilityDetailsResultEnum.UNREACHABLE;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "dolorem";
                                    destinationNetworkUri = "dolorem";
                                    destinationPort = 222443;
                                    protocol = "qui";
                                    sourceIp = "ipsum";
                                    sourceNetworkUri = "hic";
                                    sourcePort = 569574;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNINTENDED_DESTINATION;
                                            projectsMissingPermission = new String[]{{
                                                add("reiciendis"),
                                                add("amet"),
                                            }};
                                            resourceUri = "dolorum";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "numquam";
                                            environment = "veritatis";
                                            runtime = "ipsa";
                                            uri = "http://infatuated-keyboarding.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "accusamus";
                                            location = "quidem";
                                            uri = "https://heartfelt-ostrich.biz";
                                            versionId = "atque";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "sit";
                                            location = "fugiat";
                                            serviceUri = "ab";
                                            uri = "https://rash-jeans.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "dolorum";
                                            externalIp = "deleniti";
                                            internalIp = "omnis";
                                            networkUri = "necessitatibus";
                                            region = "distinctio";
                                            uri = "https://knobby-crack.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "id";
                                            target = DeliverInfoTargetEnum.PSC_VPC_SC;
                                        }};
                                        description = "eius";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.ROUTE_BLACKHOLE;
                                            resourceUri = "perferendis";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "amet";
                                            destinationNetworkUri = "optio";
                                            destinationPort = 881586;
                                            protocol = "ad";
                                            sourceIp = "saepe";
                                            sourceNetworkUri = "suscipit";
                                            sourcePort = 645785;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "provident";
                                            direction = "minima";
                                            displayName = "repellendus";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.IMPLIED_VPC_FIREWALL_RULE;
                                            networkUri = "similique";
                                            policy = "alias";
                                            priority = 872651;
                                            targetServiceAccounts = new String[]{{
                                                add("tempora"),
                                                add("vel"),
                                            }};
                                            targetTags = new String[]{{
                                                add("officiis"),
                                                add("qui"),
                                                add("dolorum"),
                                                add("a"),
                                            }};
                                            uri = "http://regal-jumbo.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "quisquam";
                                            target = ForwardInfoTargetEnum.ANOTHER_PROJECT;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "amet";
                                            matchedPortRange = "tempore";
                                            matchedProtocol = "accusamus";
                                            networkUri = "numquam";
                                            target = "enim";
                                            uri = "http://well-lit-literature.info";
                                            vip = "sit";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "expedita";
                                            clusterUri = "neque";
                                            externalIp = "sed";
                                            internalIp = "vel";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "libero";
                                            externalIp = "voluptas";
                                            interface_ = "deserunt";
                                            internalIp = "quam";
                                            networkTags = new String[]{{
                                                add("incidunt"),
                                            }};
                                            networkUri = "qui";
                                            serviceAccount = "cupiditate";
                                            uri = "https://tough-reunion.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "totam";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aspernatur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("distinctio"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("aliquid"),
                                                        add("quam"),
                                                        add("molestias"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://dirty-chain.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "odio";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("hic"),
                                                        add("voluptatem"),
                                                        add("cumque"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://brisk-threat.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "veritatis";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.TCP_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "quos";
                                            matchedIpRange = "tempore";
                                            uri = "https://ashamed-vogue.biz";
                                        }};
                                        projectId = "dolore";
                                        route = new RouteInfo() {{
                                            destIpRange = "labore";
                                            destPortRanges = new String[]{{
                                                add("dolorum"),
                                            }};
                                            displayName = "architecto";
                                            instanceTags = new String[]{{
                                                add("aut"),
                                            }};
                                            networkUri = "quas";
                                            nextHop = "itaque";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_TYPE_UNSPECIFIED;
                                            priority = 669917;
                                            protocols = new String[]{{
                                                add("porro"),
                                                add("doloribus"),
                                                add("ut"),
                                                add("facilis"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_SUBNET;
                                            srcIpRange = "qui";
                                            srcPortRanges = new String[]{{
                                                add("laudantium"),
                                            }};
                                            uri = "http://obese-western.net";
                                        }};
                                        state = StepStateEnum.DROP;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "omnis";
                                            location = "quis";
                                            uri = "http://wet-incident.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "vero";
                                            ipAddress = "tenetur";
                                            networkUri = "dignissimos";
                                            region = "hic";
                                            uri = "https://starchy-kazoo.name";
                                            vpnTunnelUri = "facilis";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "vero";
                                            networkUri = "ducimus";
                                            region = "dolore";
                                            remoteGateway = "quibusdam";
                                            remoteGatewayIp = "illum";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTING_TYPE_UNSPECIFIED;
                                            sourceGateway = "natus";
                                            sourceGatewayIp = "impedit";
                                            uri = "http://winged-finisher.org";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNKNOWN_IP;
                                            projectsMissingPermission = new String[]{{
                                                add("maiores"),
                                                add("doloribus"),
                                                add("iusto"),
                                                add("eligendi"),
                                            }};
                                            resourceUri = "ducimus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "alias";
                                            environment = "officia";
                                            runtime = "tempora";
                                            uri = "http://illustrious-castle.info";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "possimus";
                                            location = "magnam";
                                            uri = "http://ideal-licensing.com";
                                            versionId = "dolor";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "maiores";
                                            location = "quasi";
                                            serviceUri = "ex";
                                            uri = "https://nimble-waterspout.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "sapiente";
                                            externalIp = "quisquam";
                                            internalIp = "saepe";
                                            networkUri = "ea";
                                            region = "impedit";
                                            uri = "http://glass-gray.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "magnam";
                                            target = DeliverInfoTargetEnum.GOOGLE_API;
                                        }};
                                        description = "quo";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.PRIVATE_GOOGLE_ACCESS_DISALLOWED;
                                            resourceUri = "recusandae";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "aspernatur";
                                            destinationNetworkUri = "minima";
                                            destinationPort = 53427;
                                            protocol = "a";
                                            sourceIp = "libero";
                                            sourceNetworkUri = "aut";
                                            sourcePort = 11427;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "deleniti";
                                            direction = "impedit";
                                            displayName = "aliquam";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "accusamus";
                                            policy = "inventore";
                                            priority = 250622;
                                            targetServiceAccounts = new String[]{{
                                                add("dolorum"),
                                            }};
                                            targetTags = new String[]{{
                                                add("placeat"),
                                                add("velit"),
                                                add("eum"),
                                            }};
                                            uri = "http://silky-meteorology.net";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "nulla";
                                            target = ForwardInfoTargetEnum.INTERCONNECT;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "libero";
                                            matchedPortRange = "quasi";
                                            matchedProtocol = "tempora";
                                            networkUri = "numquam";
                                            target = "explicabo";
                                            uri = "https://aware-jackal.biz";
                                            vip = "odio";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "eius";
                                            clusterUri = "esse";
                                            externalIp = "esse";
                                            internalIp = "rem";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "fuga";
                                            externalIp = "reprehenderit";
                                            interface_ = "quidem";
                                            internalIp = "fugiat";
                                            networkTags = new String[]{{
                                                add("eum"),
                                                add("suscipit"),
                                            }};
                                            networkUri = "assumenda";
                                            serviceAccount = "eos";
                                            uri = "https://spiffy-blackness.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "quidem";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quo";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quo"),
                                                        add("fuga"),
                                                        add("eius"),
                                                        add("eos"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ab"),
                                                        add("cupiditate"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://unique-fugato.com";
                                                }}),
                                            }};
                                            healthCheckUri = "sequi";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.TCP_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "esse";
                                            matchedIpRange = "recusandae";
                                            uri = "http://salty-shop.info";
                                        }};
                                        projectId = "inventore";
                                        route = new RouteInfo() {{
                                            destIpRange = "nihil";
                                            destPortRanges = new String[]{{
                                                add("accusamus"),
                                                add("aliquam"),
                                                add("odio"),
                                            }};
                                            displayName = "occaecati";
                                            instanceTags = new String[]{{
                                                add("sapiente"),
                                                add("dolores"),
                                            }};
                                            networkUri = "deserunt";
                                            nextHop = "molestiae";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_TYPE_UNSPECIFIED;
                                            priority = 783648;
                                            protocols = new String[]{{
                                                add("quas"),
                                                add("praesentium"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.SUBNET;
                                            srcIpRange = "deleniti";
                                            srcPortRanges = new String[]{{
                                                add("fuga"),
                                            }};
                                            uri = "https://feline-manor.com";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_RUN_REVISION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "nisi";
                                            location = "fugit";
                                            uri = "https://cumbersome-community.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "saepe";
                                            ipAddress = "occaecati";
                                            networkUri = "atque";
                                            region = "et";
                                            uri = "http://unwitting-tab.com";
                                            vpnTunnelUri = "esse";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "quod";
                                            networkUri = "nam";
                                            region = "vero";
                                            remoteGateway = "aliquid";
                                            remoteGatewayIp = "quasi";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "vel";
                                            sourceGatewayIp = "harum";
                                            uri = "http://right-mouse.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.MISMATCHED_SOURCE_NETWORK;
                                            projectsMissingPermission = new String[]{{
                                                add("sit"),
                                                add("culpa"),
                                                add("tempore"),
                                                add("adipisci"),
                                            }};
                                            resourceUri = "cumque";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "consequuntur";
                                            environment = "consequatur";
                                            runtime = "minus";
                                            uri = "http://well-off-curtailment.info";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "blanditiis";
                                            location = "provident";
                                            uri = "https://tidy-method.info";
                                            versionId = "quasi";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "a";
                                            location = "error";
                                            serviceUri = "sint";
                                            uri = "https://sugary-choice.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "asperiores";
                                            externalIp = "facere";
                                            internalIp = "veritatis";
                                            networkUri = "consequuntur";
                                            region = "quasi";
                                            uri = "https://polite-grasshopper.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "quae";
                                            target = DeliverInfoTargetEnum.PSC_VPC_SC;
                                        }};
                                        description = "vel";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.CLOUD_SQL_INSTANCE_NOT_RUNNING;
                                            resourceUri = "eius";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "libero";
                                            destinationNetworkUri = "illum";
                                            destinationPort = 742238;
                                            protocol = "accusantium";
                                            sourceIp = "aliquam";
                                            sourceNetworkUri = "sapiente";
                                            sourcePort = 119771;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ullam";
                                            direction = "reprehenderit";
                                            displayName = "ullam";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.VPC_FIREWALL_RULE;
                                            networkUri = "aut";
                                            policy = "voluptatum";
                                            priority = 185232;
                                            targetServiceAccounts = new String[]{{
                                                add("ex"),
                                                add("deleniti"),
                                                add("itaque"),
                                                add("dolorum"),
                                            }};
                                            targetTags = new String[]{{
                                                add("omnis"),
                                            }};
                                            uri = "https://buoyant-sun.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "voluptate";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "minima";
                                            matchedPortRange = "veritatis";
                                            matchedProtocol = "consectetur";
                                            networkUri = "adipisci";
                                            target = "iste";
                                            uri = "https://ancient-loggia.com";
                                            vip = "laudantium";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "eum";
                                            clusterUri = "mollitia";
                                            externalIp = "ab";
                                            internalIp = "corrupti";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "non";
                                            externalIp = "voluptatem";
                                            interface_ = "dolor";
                                            internalIp = "occaecati";
                                            networkTags = new String[]{{
                                                add("impedit"),
                                                add("explicabo"),
                                            }};
                                            networkUri = "voluptas";
                                            serviceAccount = "aut";
                                            uri = "http://chief-wifi.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_TYPE_UNSPECIFIED;
                                            backendUri = "voluptatibus";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "asperiores";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ea"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("consequuntur"),
                                                        add("repellendus"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://limping-patience.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nemo";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quaerat"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quod"),
                                                        add("labore"),
                                                        add("ab"),
                                                        add("adipisci"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://hefty-default.name";
                                                }}),
                                            }};
                                            healthCheckUri = "est";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.SSL_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "totam";
                                            matchedIpRange = "fugiat";
                                            uri = "http://lonely-mentor.info";
                                        }};
                                        projectId = "labore";
                                        route = new RouteInfo() {{
                                            destIpRange = "possimus";
                                            destPortRanges = new String[]{{
                                                add("cum"),
                                                add("commodi"),
                                                add("in"),
                                            }};
                                            displayName = "corporis";
                                            instanceTags = new String[]{{
                                                add("assumenda"),
                                                add("nemo"),
                                                add("recusandae"),
                                                add("aliquid"),
                                            }};
                                            networkUri = "aperiam";
                                            nextHop = "cum";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INSTANCE;
                                            priority = 449083;
                                            protocols = new String[]{{
                                                add("earum"),
                                                add("facere"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.STATIC_;
                                            srcIpRange = "doloribus";
                                            srcPortRanges = new String[]{{
                                                add("reiciendis"),
                                                add("quidem"),
                                            }};
                                            uri = "https://unnatural-editing.com";
                                        }};
                                        state = StepStateEnum.VIEWER_PERMISSION_MISSING;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "adipisci";
                                            location = "non";
                                            uri = "http://canine-kilometer.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "debitis";
                                            ipAddress = "consectetur";
                                            networkUri = "corporis";
                                            region = "harum";
                                            uri = "http://babyish-tortoise.net";
                                            vpnTunnelUri = "vitae";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "accusamus";
                                            networkUri = "similique";
                                            region = "tempora";
                                            remoteGateway = "aspernatur";
                                            remoteGatewayIp = "voluptas";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTE_BASED;
                                            sourceGateway = "voluptas";
                                            sourceGatewayIp = "minima";
                                            uri = "https://raw-damage.net";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "dolores";
                                    destinationNetworkUri = "blanditiis";
                                    destinationPort = 449292;
                                    protocol = "dolore";
                                    sourceIp = "aliquam";
                                    sourceNetworkUri = "officiis";
                                    sourcePort = 839189;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.PERMISSION_DENIED;
                                            projectsMissingPermission = new String[]{{
                                                add("blanditiis"),
                                                add("quas"),
                                                add("hic"),
                                            }};
                                            resourceUri = "nesciunt";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "culpa";
                                            environment = "corrupti";
                                            runtime = "pariatur";
                                            uri = "https://wan-fishery.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "sit";
                                            location = "rerum";
                                            uri = "http://wide-carnation.org";
                                            versionId = "facilis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "voluptate";
                                            location = "expedita";
                                            serviceUri = "ab";
                                            uri = "https://flippant-plugin.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "in";
                                            externalIp = "commodi";
                                            internalIp = "quidem";
                                            networkUri = "explicabo";
                                            region = "voluptas";
                                            uri = "https://burly-geometry.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "debitis";
                                            target = DeliverInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        description = "reiciendis";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.CAUSE_UNSPECIFIED;
                                            resourceUri = "corrupti";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "maiores";
                                            destinationNetworkUri = "incidunt";
                                            destinationPort = 148478;
                                            protocol = "provident";
                                            sourceIp = "eius";
                                            sourceNetworkUri = "necessitatibus";
                                            sourcePort = 215529;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ea";
                                            direction = "occaecati";
                                            displayName = "quos";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "tempora";
                                            policy = "tempora";
                                            priority = 455444;
                                            targetServiceAccounts = new String[]{{
                                                add("ex"),
                                                add("sit"),
                                                add("non"),
                                                add("officiis"),
                                            }};
                                            targetTags = new String[]{{
                                                add("facilis"),
                                                add("quaerat"),
                                                add("incidunt"),
                                            }};
                                            uri = "http://unlawful-lot.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "nobis";
                                            target = ForwardInfoTargetEnum.IMPORTED_CUSTOM_ROUTE_NEXT_HOP;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "veniam";
                                            matchedPortRange = "minima";
                                            matchedProtocol = "recusandae";
                                            networkUri = "reiciendis";
                                            target = "nulla";
                                            uri = "http://attached-thermostat.biz";
                                            vip = "veniam";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "in";
                                            clusterUri = "officiis";
                                            externalIp = "beatae";
                                            internalIp = "laudantium";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "exercitationem";
                                            externalIp = "praesentium";
                                            interface_ = "cum";
                                            internalIp = "laboriosam";
                                            networkTags = new String[]{{
                                                add("voluptatum"),
                                                add("error"),
                                                add("hic"),
                                            }};
                                            networkUri = "expedita";
                                            serviceAccount = "debitis";
                                            uri = "http://ragged-fetus.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "corrupti";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "tempora";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("fugit"),
                                                        add("ut"),
                                                        add("fugiat"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("culpa"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://aching-infusion.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "sit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quas"),
                                                        add("repudiandae"),
                                                        add("corporis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("blanditiis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://alarming-hermit.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "saepe";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("consequatur"),
                                                        add("incidunt"),
                                                        add("reiciendis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("harum"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://noxious-duster.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "atque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nam"),
                                                        add("tenetur"),
                                                        add("laboriosam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("amet"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://outlying-watercress.name";
                                                }}),
                                            }};
                                            healthCheckUri = "repellendus";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.SSL_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "voluptates";
                                            matchedIpRange = "perferendis";
                                            uri = "https://revolving-humidity.net";
                                        }};
                                        projectId = "fuga";
                                        route = new RouteInfo() {{
                                            destIpRange = "praesentium";
                                            destPortRanges = new String[]{{
                                                add("veniam"),
                                                add("voluptatem"),
                                                add("quisquam"),
                                            }};
                                            displayName = "repudiandae";
                                            instanceTags = new String[]{{
                                                add("atque"),
                                            }};
                                            networkUri = "reprehenderit";
                                            nextHop = "asperiores";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_VPN_TUNNEL;
                                            priority = 383103;
                                            protocols = new String[]{{
                                                add("maxime"),
                                                add("et"),
                                                add("esse"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.SUBNET;
                                            srcIpRange = "assumenda";
                                            srcPortRanges = new String[]{{
                                                add("atque"),
                                                add("error"),
                                            }};
                                            uri = "https://unfit-symbol.name";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_RUN_REVISION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "aspernatur";
                                            location = "ex";
                                            uri = "https://moral-supermarket.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "blanditiis";
                                            ipAddress = "suscipit";
                                            networkUri = "repudiandae";
                                            region = "atque";
                                            uri = "https://clear-cut-transfer.net";
                                            vpnTunnelUri = "repellendus";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "labore";
                                            networkUri = "reiciendis";
                                            region = "doloremque";
                                            remoteGateway = "repudiandae";
                                            remoteGatewayIp = "dicta";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTING_TYPE_UNSPECIFIED;
                                            sourceGateway = "beatae";
                                            sourceGatewayIp = "dolores";
                                            uri = "http://honorable-defender.org";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.INTERNAL_ERROR;
                                            projectsMissingPermission = new String[]{{
                                                add("saepe"),
                                                add("consequuntur"),
                                            }};
                                            resourceUri = "occaecati";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "officiis";
                                            environment = "perspiciatis";
                                            runtime = "in";
                                            uri = "http://unusual-mouth.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "fugit";
                                            location = "id";
                                            uri = "http://insistent-pagan.com";
                                            versionId = "corporis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "quidem";
                                            location = "eveniet";
                                            serviceUri = "non";
                                            uri = "https://any-hope.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "totam";
                                            externalIp = "quae";
                                            internalIp = "molestiae";
                                            networkUri = "eveniet";
                                            region = "qui";
                                            uri = "https://inferior-terrorism.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "laborum";
                                            target = DeliverInfoTargetEnum.PSC_PUBLISHED_SERVICE;
                                        }};
                                        description = "voluptatum";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.GKE_MASTER_UNAUTHORIZED_ACCESS;
                                            resourceUri = "aliquam";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "ad";
                                            destinationNetworkUri = "repellat";
                                            destinationPort = 3099;
                                            protocol = "corporis";
                                            sourceIp = "perspiciatis";
                                            sourceNetworkUri = "nihil";
                                            sourcePort = 649078;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "voluptas";
                                            direction = "alias";
                                            displayName = "maiores";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "dolores";
                                            policy = "id";
                                            priority = 327988;
                                            targetServiceAccounts = new String[]{{
                                                add("dolorum"),
                                                add("nesciunt"),
                                            }};
                                            targetTags = new String[]{{
                                                add("recusandae"),
                                            }};
                                            uri = "https://frequent-jam.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ut";
                                            target = ForwardInfoTargetEnum.IMPORTED_CUSTOM_ROUTE_NEXT_HOP;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "adipisci";
                                            matchedPortRange = "debitis";
                                            matchedProtocol = "laudantium";
                                            networkUri = "eum";
                                            target = "nemo";
                                            uri = "https://jovial-networking.info";
                                            vip = "eum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "reiciendis";
                                            clusterUri = "provident";
                                            externalIp = "aspernatur";
                                            internalIp = "ullam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "quasi";
                                            externalIp = "animi";
                                            interface_ = "nostrum";
                                            internalIp = "mollitia";
                                            networkTags = new String[]{{
                                                add("possimus"),
                                                add("animi"),
                                                add("ex"),
                                            }};
                                            networkUri = "aliquid";
                                            serviceAccount = "accusantium";
                                            uri = "https://worse-fledgling.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "earum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "laborum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("modi"),
                                                        add("voluptatibus"),
                                                        add("molestias"),
                                                        add("officiis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("cumque"),
                                                        add("vitae"),
                                                        add("rerum"),
                                                        add("tempora"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://courageous-saint.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perferendis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("aspernatur"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("eius"),
                                                        add("rem"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://definite-violation.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dicta";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("beatae"),
                                                        add("cupiditate"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("earum"),
                                                        add("soluta"),
                                                        add("hic"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://visible-nobody.org";
                                                }}),
                                            }};
                                            healthCheckUri = "debitis";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "porro";
                                            matchedIpRange = "suscipit";
                                            uri = "http://courageous-sailing.net";
                                        }};
                                        projectId = "ratione";
                                        route = new RouteInfo() {{
                                            destIpRange = "animi";
                                            destPortRanges = new String[]{{
                                                add("nulla"),
                                                add("consequatur"),
                                                add("quasi"),
                                                add("et"),
                                            }};
                                            displayName = "ducimus";
                                            instanceTags = new String[]{{
                                                add("occaecati"),
                                                add("suscipit"),
                                                add("adipisci"),
                                            }};
                                            networkUri = "quasi";
                                            nextHop = "magni";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_ROUTER_APPLIANCE;
                                            priority = 859581;
                                            protocols = new String[]{{
                                                add("ipsa"),
                                                add("tempora"),
                                                add("nihil"),
                                                add("molestiae"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.ROUTE_TYPE_UNSPECIFIED;
                                            srcIpRange = "iusto";
                                            srcPortRanges = new String[]{{
                                                add("praesentium"),
                                                add("maiores"),
                                            }};
                                            uri = "https://impressive-bower.org";
                                        }};
                                        state = StepStateEnum.START_FROM_INSTANCE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "dicta";
                                            location = "odio";
                                            uri = "http://joyous-guerrilla.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "aliquid";
                                            ipAddress = "ipsa";
                                            networkUri = "laborum";
                                            region = "sunt";
                                            uri = "http://thunderous-quill.info";
                                            vpnTunnelUri = "officia";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "suscipit";
                                            networkUri = "aliquid";
                                            region = "perferendis";
                                            remoteGateway = "eum";
                                            remoteGatewayIp = "voluptas";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "id";
                                            sourceGatewayIp = "ab";
                                            uri = "https://super-tonic.name";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "laborum";
                    }};;
                    relatedProjects = new String[]{{
                        add("ad"),
                        add("deleniti"),
                        add("enim"),
                    }};
                    source = new Endpoint() {{
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
                        gkeMasterCluster = "voluptatum";
                        instance = "omnis";
                        ipAddress = "veritatis";
                        network = "rerum";
                        networkType = EndpointNetworkTypeEnum.GCP_NETWORK;
                        port = 634786;
                        projectId = "voluptatem";
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "fuga";
                key = "pariatur";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                testId = "alias";
                uploadType = "deleniti";
                uploadProtocol = "earum";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity("ex", "sapiente") {{
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "ullam";
                key = "perferendis";
                oauthToken = "illum";
                optionsRequestedPolicyVersion = 518150L;
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "quibusdam";
                uploadProtocol = "nam";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicyResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicySecurity("ipsam", "culpa") {{
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "tempora";
                filter = "dolor";
                key = "consequatur";
                oauthToken = "architecto";
                orderBy = "sit";
                pageSize = 265039L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "laudantium";
                uploadProtocol = "quae";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsList(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsListSecurity("dolor", "fugiat") {{
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
import org.openapis.openapi.models.shared.Endpoint;
import org.openapis.openapi.models.shared.EndpointInfo;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.FirewallInfo;
import org.openapis.openapi.models.shared.FirewallInfoFirewallRuleTypeEnum;
import org.openapis.openapi.models.shared.ForwardInfo;
import org.openapis.openapi.models.shared.ForwardInfoTargetEnum;
import org.openapis.openapi.models.shared.ForwardingRuleInfo;
import org.openapis.openapi.models.shared.GKEMasterInfo;
import org.openapis.openapi.models.shared.InstanceInfo;
import org.openapis.openapi.models.shared.LoadBalancerBackend;
import org.openapis.openapi.models.shared.LoadBalancerBackendHealthCheckFirewallStateEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.LoadBalancerInfoBackendTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfoLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.NetworkInfo;
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "ipsa";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://unwritten-scarification.org";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://unnatural-chemistry.biz";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://rusty-honeybee.info";
                        }};;
                        cloudSqlInstance = "voluptatum";
                        gkeMasterCluster = "magnam";
                        instance = "exercitationem";
                        ipAddress = "ab";
                        network = "porro";
                        networkType = EndpointNetworkTypeEnum.GCP_NETWORK;
                        port = 751022;
                        projectId = "laboriosam";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("consequuntur", "voluptatem");
                        put("exercitationem", "necessitatibus");
                        put("quasi", "nisi");
                        put("at", "vero");
                    }};
                    name = "Kerry Dickinson";
                    protocol = "optio";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 579681;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("blanditiis", "officia");
                                    put("voluptas", "numquam");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quos", "eius");
                                    put("aspernatur", "ducimus");
                                }}),
                            }};
                            message = "nesciunt";
                        }};;
                        result = ReachabilityDetailsResultEnum.AMBIGUOUS;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "incidunt";
                                    destinationNetworkUri = "quasi";
                                    destinationPort = 524380;
                                    protocol = "fugiat";
                                    sourceIp = "dicta";
                                    sourceNetworkUri = "nisi";
                                    sourcePort = 159845;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.CAUSE_UNSPECIFIED;
                                            projectsMissingPermission = new String[]{{
                                                add("reiciendis"),
                                                add("soluta"),
                                                add("alias"),
                                            }};
                                            resourceUri = "omnis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "eos";
                                            environment = "occaecati";
                                            runtime = "iste";
                                            uri = "http://bogus-prefix.org";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "voluptatibus";
                                            location = "distinctio";
                                            uri = "https://whole-extremist.name";
                                            versionId = "maxime";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "magnam";
                                            location = "temporibus";
                                            serviceUri = "quos";
                                            uri = "http://vigilant-harvest.name";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "earum";
                                            externalIp = "modi";
                                            internalIp = "nam";
                                            networkUri = "vero";
                                            region = "voluptatem";
                                            uri = "http://inborn-ability.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "non";
                                            target = DeliverInfoTargetEnum.PSC_VPC_SC;
                                        }};
                                        description = "enim";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.DROPPED_INSIDE_GKE_SERVICE;
                                            resourceUri = "nulla";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "deserunt";
                                            destinationNetworkUri = "esse";
                                            destinationPort = 364463;
                                            protocol = "reprehenderit";
                                            sourceIp = "est";
                                            sourceNetworkUri = "quis";
                                            sourcePort = 571844;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "accusamus";
                                            direction = "impedit";
                                            displayName = "hic";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "asperiores";
                                            policy = "ex";
                                            priority = 376741;
                                            targetServiceAccounts = new String[]{{
                                                add("delectus"),
                                                add("quae"),
                                                add("minus"),
                                                add("fuga"),
                                            }};
                                            targetTags = new String[]{{
                                                add("consectetur"),
                                                add("velit"),
                                                add("atque"),
                                            }};
                                            uri = "http://sociable-class.net";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "repudiandae";
                                            target = ForwardInfoTargetEnum.IMPORTED_CUSTOM_ROUTE_NEXT_HOP;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "dolore";
                                            matchedPortRange = "iusto";
                                            matchedProtocol = "voluptate";
                                            networkUri = "sequi";
                                            target = "dignissimos";
                                            uri = "http://spherical-mall.org";
                                            vip = "iure";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "odit";
                                            clusterUri = "voluptatibus";
                                            externalIp = "vel";
                                            internalIp = "magnam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "quibusdam";
                                            externalIp = "inventore";
                                            interface_ = "facere";
                                            internalIp = "libero";
                                            networkTags = new String[]{{
                                                add("voluptatibus"),
                                            }};
                                            networkUri = "quia";
                                            serviceAccount = "porro";
                                            uri = "http://every-bee.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_SERVICE;
                                            backendUri = "ea";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "vero";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("eum"),
                                                        add("velit"),
                                                        add("ut"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("earum"),
                                                        add("dicta"),
                                                        add("impedit"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://villainous-academy.info";
                                                }}),
                                            }};
                                            healthCheckUri = "itaque";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.INTERNAL_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "laborum";
                                            matchedIpRange = "non";
                                            uri = "http://left-amber.com";
                                        }};
                                        projectId = "consequatur";
                                        route = new RouteInfo() {{
                                            destIpRange = "officia";
                                            destPortRanges = new String[]{{
                                                add("ea"),
                                                add("quidem"),
                                                add("voluptas"),
                                                add("facilis"),
                                            }};
                                            displayName = "placeat";
                                            instanceTags = new String[]{{
                                                add("expedita"),
                                                add("deleniti"),
                                                add("a"),
                                            }};
                                            networkUri = "voluptate";
                                            nextHop = "ullam";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_VPN_GATEWAY;
                                            priority = 897543;
                                            protocols = new String[]{{
                                                add("impedit"),
                                                add("ipsam"),
                                                add("corporis"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_STATIC;
                                            srcIpRange = "error";
                                            srcPortRanges = new String[]{{
                                                add("labore"),
                                                add("veritatis"),
                                            }};
                                            uri = "https://empty-buffer.com";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_SQL_INSTANCE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ad";
                                            location = "qui";
                                            uri = "https://identical-fresco.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "libero";
                                            ipAddress = "rem";
                                            networkUri = "dolorum";
                                            region = "odio";
                                            uri = "http://abandoned-cleat.info";
                                            vpnTunnelUri = "quae";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "quae";
                                            networkUri = "modi";
                                            region = "neque";
                                            remoteGateway = "exercitationem";
                                            remoteGatewayIp = "itaque";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTING_TYPE_UNSPECIFIED;
                                            sourceGateway = "ipsum";
                                            sourceGatewayIp = "unde";
                                            uri = "https://safe-sick.com";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "quia";
                                    destinationNetworkUri = "nostrum";
                                    destinationPort = 605712;
                                    protocol = "libero";
                                    sourceIp = "dicta";
                                    sourceNetworkUri = "id";
                                    sourcePort = 727888;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.SOURCE_ENDPOINT_NOT_FOUND;
                                            projectsMissingPermission = new String[]{{
                                                add("placeat"),
                                                add("sit"),
                                                add("iusto"),
                                            }};
                                            resourceUri = "ipsa";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "voluptates";
                                            environment = "inventore";
                                            runtime = "aperiam";
                                            uri = "https://flippant-robotics.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "voluptatem";
                                            location = "autem";
                                            uri = "http://dearest-sombrero.com";
                                            versionId = "est";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "facere";
                                            location = "corrupti";
                                            serviceUri = "molestiae";
                                            uri = "https://uncommon-term.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "sint";
                                            externalIp = "ea";
                                            internalIp = "autem";
                                            networkUri = "ipsam";
                                            region = "rerum";
                                            uri = "https://grounded-tavern.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "cum";
                                            target = DeliverInfoTargetEnum.PSC_GOOGLE_API;
                                        }};
                                        description = "alias";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.ROUTE_BLACKHOLE;
                                            resourceUri = "quidem";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "fuga";
                                            destinationNetworkUri = "repudiandae";
                                            destinationPort = 34070;
                                            protocol = "expedita";
                                            sourceIp = "officiis";
                                            sourceNetworkUri = "eos";
                                            sourcePort = 844854;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "odio";
                                            direction = "praesentium";
                                            displayName = "odit";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "corporis";
                                            policy = "error";
                                            priority = 937117;
                                            targetServiceAccounts = new String[]{{
                                                add("recusandae"),
                                            }};
                                            targetTags = new String[]{{
                                                add("ut"),
                                                add("quidem"),
                                                add("quis"),
                                            }};
                                            uri = "http://outlying-jade.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "cupiditate";
                                            target = ForwardInfoTargetEnum.PEERING_VPC;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "numquam";
                                            matchedPortRange = "numquam";
                                            matchedProtocol = "nesciunt";
                                            networkUri = "at";
                                            target = "officia";
                                            uri = "http://sleepy-testing.info";
                                            vip = "qui";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "expedita";
                                            clusterUri = "voluptatum";
                                            externalIp = "cupiditate";
                                            internalIp = "minima";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "placeat";
                                            externalIp = "enim";
                                            interface_ = "neque";
                                            internalIp = "in";
                                            networkTags = new String[]{{
                                                add("eum"),
                                                add("modi"),
                                                add("corporis"),
                                                add("magnam"),
                                            }};
                                            networkUri = "voluptates";
                                            serviceAccount = "maiores";
                                            uri = "https://ashamed-recess.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_SERVICE;
                                            backendUri = "totam";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptas";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("velit"),
                                                        add("minus"),
                                                        add("fuga"),
                                                        add("nostrum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("impedit"),
                                                        add("delectus"),
                                                        add("tempore"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://zany-subsidy.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "reprehenderit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("odio"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("in"),
                                                        add("ducimus"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://pessimistic-bit.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptate";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("itaque"),
                                                        add("similique"),
                                                        add("optio"),
                                                        add("ex"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("commodi"),
                                                        add("officiis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://gray-innovation.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "modi";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_UNSPECIFIED;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "sint";
                                            matchedIpRange = "vero";
                                            uri = "http://utilized-rescue.com";
                                        }};
                                        projectId = "earum";
                                        route = new RouteInfo() {{
                                            destIpRange = "veniam";
                                            destPortRanges = new String[]{{
                                                add("dolores"),
                                                add("nam"),
                                                add("dicta"),
                                            }};
                                            displayName = "consequuntur";
                                            instanceTags = new String[]{{
                                                add("nobis"),
                                                add("ipsa"),
                                                add("ducimus"),
                                                add("maiores"),
                                            }};
                                            networkUri = "veritatis";
                                            nextHop = "quasi";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_PEERING;
                                            priority = 863471;
                                            protocols = new String[]{{
                                                add("excepturi"),
                                                add("occaecati"),
                                                add("nemo"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.STATIC_;
                                            srcIpRange = "nostrum";
                                            srcPortRanges = new String[]{{
                                                add("eligendi"),
                                                add("sint"),
                                                add("enim"),
                                                add("hic"),
                                            }};
                                            uri = "https://near-liquidity.name";
                                        }};
                                        state = StepStateEnum.SPOOFING_APPROVED;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "eaque";
                                            location = "saepe";
                                            uri = "http://mysterious-orator.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "tempore";
                                            ipAddress = "libero";
                                            networkUri = "velit";
                                            region = "doloremque";
                                            uri = "https://sociable-rescue.biz";
                                            vpnTunnelUri = "adipisci";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "saepe";
                                            networkUri = "deserunt";
                                            region = "doloremque";
                                            remoteGateway = "quis";
                                            remoteGatewayIp = "veniam";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "architecto";
                                            sourceGatewayIp = "cupiditate";
                                            uri = "http://sinful-snowman.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.NO_SOURCE_LOCATION;
                                            projectsMissingPermission = new String[]{{
                                                add("sed"),
                                                add("asperiores"),
                                                add("veniam"),
                                                add("consequuntur"),
                                            }};
                                            resourceUri = "facere";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "laudantium";
                                            environment = "odit";
                                            runtime = "pariatur";
                                            uri = "http://grave-basement.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "facilis";
                                            location = "tempore";
                                            uri = "http://wobbly-entrepreneur.name";
                                            versionId = "distinctio";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nisi";
                                            location = "quis";
                                            serviceUri = "nisi";
                                            uri = "https://squeaky-slip.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "ipsum";
                                            externalIp = "ad";
                                            internalIp = "voluptatibus";
                                            networkUri = "voluptatibus";
                                            region = "consequuntur";
                                            uri = "https://flawless-prose.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "reprehenderit";
                                            target = DeliverInfoTargetEnum.GOOGLE_API;
                                        }};
                                        description = "neque";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.TRAFFIC_TYPE_BLOCKED;
                                            resourceUri = "est";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "rem";
                                            destinationNetworkUri = "eligendi";
                                            destinationPort = 853606;
                                            protocol = "unde";
                                            sourceIp = "officiis";
                                            sourceNetworkUri = "ducimus";
                                            sourcePort = 220104;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "dicta";
                                            direction = "error";
                                            displayName = "porro";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "dignissimos";
                                            policy = "esse";
                                            priority = 854115;
                                            targetServiceAccounts = new String[]{{
                                                add("aspernatur"),
                                                add("enim"),
                                            }};
                                            targetTags = new String[]{{
                                                add("iusto"),
                                                add("dignissimos"),
                                                add("libero"),
                                                add("illo"),
                                            }};
                                            uri = "http://fickle-switchboard.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "tempore";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "eos";
                                            matchedPortRange = "reiciendis";
                                            matchedProtocol = "earum";
                                            networkUri = "reprehenderit";
                                            target = "praesentium";
                                            uri = "http://zigzag-servant.biz";
                                            vip = "nihil";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "deleniti";
                                            clusterUri = "illo";
                                            externalIp = "labore";
                                            internalIp = "assumenda";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "aliquam";
                                            externalIp = "quisquam";
                                            interface_ = "provident";
                                            internalIp = "laudantium";
                                            networkTags = new String[]{{
                                                add("consequatur"),
                                                add("maxime"),
                                                add("aspernatur"),
                                                add("nam"),
                                            }};
                                            networkUri = "expedita";
                                            serviceAccount = "quas";
                                            uri = "https://valid-prophet.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.BACKEND_SERVICE;
                                            backendUri = "vero";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "repellendus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dolorem"),
                                                        add("commodi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("commodi"),
                                                        add("aut"),
                                                        add("voluptatem"),
                                                        add("ad"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://thin-legislature.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "cum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
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
                                            }};
                                            healthCheckUri = "totam";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_UNSPECIFIED;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "voluptatem";
                                            matchedIpRange = "velit";
                                            uri = "http://clueless-vernacular.biz";
                                        }};
                                        projectId = "occaecati";
                                        route = new RouteInfo() {{
                                            destIpRange = "atque";
                                            destPortRanges = new String[]{{
                                                add("at"),
                                            }};
                                            displayName = "labore";
                                            instanceTags = new String[]{{
                                                add("esse"),
                                                add("voluptatem"),
                                                add("perferendis"),
                                                add("rerum"),
                                            }};
                                            networkUri = "ea";
                                            nextHop = "aperiam";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INTERCONNECT;
                                            priority = 998026;
                                            protocols = new String[]{{
                                                add("porro"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_SUBNET;
                                            srcIpRange = "consectetur";
                                            srcPortRanges = new String[]{{
                                                add("dignissimos"),
                                                add("consectetur"),
                                                add("soluta"),
                                                add("natus"),
                                            }};
                                            uri = "https://posh-cuckoo.org";
                                        }};
                                        state = StepStateEnum.START_FROM_PRIVATE_NETWORK;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quo";
                                            location = "itaque";
                                            uri = "https://quick-king.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "qui";
                                            ipAddress = "consectetur";
                                            networkUri = "repellat";
                                            region = "explicabo";
                                            uri = "http://green-interviewer.biz";
                                            vpnTunnelUri = "ab";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "illo";
                                            networkUri = "hic";
                                            region = "deserunt";
                                            remoteGateway = "delectus";
                                            remoteGatewayIp = "non";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "in";
                                            sourceGatewayIp = "exercitationem";
                                            uri = "http://expensive-trafficker.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNINTENDED_DESTINATION;
                                            projectsMissingPermission = new String[]{{
                                                add("accusamus"),
                                            }};
                                            resourceUri = "rem";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "aperiam";
                                            environment = "odit";
                                            runtime = "deleniti";
                                            uri = "http://jaunty-paintwork.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "libero";
                                            location = "magnam";
                                            uri = "http://fantastic-hockey.biz";
                                            versionId = "mollitia";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "dignissimos";
                                            location = "fugiat";
                                            serviceUri = "nostrum";
                                            uri = "http://gifted-warmth.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "modi";
                                            externalIp = "aut";
                                            internalIp = "aut";
                                            networkUri = "eveniet";
                                            region = "odio";
                                            uri = "http://expert-polyester.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "voluptate";
                                            target = DeliverInfoTargetEnum.INTERNET;
                                        }};
                                        description = "nesciunt";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.FORWARDING_RULE_MISMATCH;
                                            resourceUri = "itaque";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "minus";
                                            destinationNetworkUri = "sunt";
                                            destinationPort = 715143;
                                            protocol = "iusto";
                                            sourceIp = "quas";
                                            sourceNetworkUri = "et";
                                            sourcePort = 704948;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "amet";
                                            direction = "autem";
                                            displayName = "fuga";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "rem";
                                            policy = "aut";
                                            priority = 550055;
                                            targetServiceAccounts = new String[]{{
                                                add("repellendus"),
                                                add("veritatis"),
                                                add("quae"),
                                            }};
                                            targetTags = new String[]{{
                                                add("saepe"),
                                            }};
                                            uri = "https://prime-strawman.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "sed";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "alias";
                                            matchedPortRange = "eveniet";
                                            matchedProtocol = "hic";
                                            networkUri = "voluptatem";
                                            target = "incidunt";
                                            uri = "http://dense-tentacle.net";
                                            vip = "explicabo";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "beatae";
                                            clusterUri = "aliquid";
                                            externalIp = "modi";
                                            internalIp = "optio";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "voluptatibus";
                                            externalIp = "molestias";
                                            interface_ = "officia";
                                            internalIp = "libero";
                                            networkTags = new String[]{{
                                                add("sequi"),
                                                add("aliquid"),
                                                add("ea"),
                                            }};
                                            networkUri = "impedit";
                                            serviceAccount = "ducimus";
                                            uri = "http://euphoric-walrus.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "laborum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "accusamus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nisi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("recusandae"),
                                                        add("voluptates"),
                                                        add("non"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://grizzled-sender.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptatibus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quae"),
                                                        add("officiis"),
                                                        add("architecto"),
                                                        add("architecto"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("optio"),
                                                        add("rem"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://whopping-viability.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dicta";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ullam"),
                                                        add("dolore"),
                                                        add("modi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("maxime"),
                                                        add("modi"),
                                                        add("consequuntur"),
                                                        add("assumenda"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://sociable-sector.org";
                                                }}),
                                            }};
                                            healthCheckUri = "totam";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.SSL_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "ab";
                                            matchedIpRange = "sint";
                                            uri = "http://joyous-household.info";
                                        }};
                                        projectId = "nesciunt";
                                        route = new RouteInfo() {{
                                            destIpRange = "debitis";
                                            destPortRanges = new String[]{{
                                                add("neque"),
                                                add("corporis"),
                                            }};
                                            displayName = "voluptas";
                                            instanceTags = new String[]{{
                                                add("officia"),
                                            }};
                                            networkUri = "reprehenderit";
                                            nextHop = "distinctio";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_NETWORK;
                                            priority = 56372;
                                            protocols = new String[]{{
                                                add("maiores"),
                                                add("accusantium"),
                                                add("veniam"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.POLICY_BASED;
                                            srcIpRange = "neque";
                                            srcPortRanges = new String[]{{
                                                add("aliquam"),
                                                add("quos"),
                                                add("doloribus"),
                                                add("fugiat"),
                                            }};
                                            uri = "https://which-dedication.com";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_SQL_INSTANCE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "similique";
                                            location = "illo";
                                            uri = "https://gullible-woodchuck.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "unde";
                                            ipAddress = "incidunt";
                                            networkUri = "explicabo";
                                            region = "ipsam";
                                            uri = "https://slight-absence.net";
                                            vpnTunnelUri = "nesciunt";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "commodi";
                                            networkUri = "sapiente";
                                            region = "consequuntur";
                                            remoteGateway = "veniam";
                                            remoteGatewayIp = "debitis";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "sint";
                                            sourceGatewayIp = "ut";
                                            uri = "http://wealthy-dagger.net";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNINTENDED_DESTINATION;
                                            projectsMissingPermission = new String[]{{
                                                add("ex"),
                                                add("minus"),
                                            }};
                                            resourceUri = "ab";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "beatae";
                                            environment = "hic";
                                            runtime = "nisi";
                                            uri = "https://easy-going-lag.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "minima";
                                            location = "architecto";
                                            uri = "http://humongous-classification.biz";
                                            versionId = "adipisci";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "praesentium";
                                            location = "dolor";
                                            serviceUri = "exercitationem";
                                            uri = "https://round-satellite.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "nemo";
                                            externalIp = "culpa";
                                            internalIp = "consequuntur";
                                            networkUri = "amet";
                                            region = "deserunt";
                                            uri = "http://glaring-shore.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "a";
                                            target = DeliverInfoTargetEnum.PSC_GOOGLE_API;
                                        }};
                                        description = "enim";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.DROPPED_INSIDE_PSC_SERVICE_PRODUCER;
                                            resourceUri = "assumenda";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "officiis";
                                            destinationNetworkUri = "architecto";
                                            destinationPort = 5315;
                                            protocol = "culpa";
                                            sourceIp = "ipsa";
                                            sourceNetworkUri = "nobis";
                                            sourcePort = 898193;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quia";
                                            direction = "dicta";
                                            displayName = "vel";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.IMPLIED_VPC_FIREWALL_RULE;
                                            networkUri = "debitis";
                                            policy = "ullam";
                                            priority = 103578;
                                            targetServiceAccounts = new String[]{{
                                                add("perferendis"),
                                            }};
                                            targetTags = new String[]{{
                                                add("provident"),
                                            }};
                                            uri = "https://infinite-square.net";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "nemo";
                                            target = ForwardInfoTargetEnum.ANOTHER_PROJECT;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "velit";
                                            matchedPortRange = "magnam";
                                            matchedProtocol = "dignissimos";
                                            networkUri = "laboriosam";
                                            target = "sed";
                                            uri = "http://periodic-necklace.net";
                                            vip = "doloribus";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "facilis";
                                            clusterUri = "quidem";
                                            externalIp = "itaque";
                                            internalIp = "laboriosam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "unde";
                                            externalIp = "modi";
                                            interface_ = "perspiciatis";
                                            internalIp = "hic";
                                            networkTags = new String[]{{
                                                add("aspernatur"),
                                                add("libero"),
                                                add("nam"),
                                            }};
                                            networkUri = "incidunt";
                                            serviceAccount = "recusandae";
                                            uri = "https://puzzled-throne.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "nesciunt";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nemo";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("facilis"),
                                                        add("non"),
                                                        add("mollitia"),
                                                        add("assumenda"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("distinctio"),
                                                        add("pariatur"),
                                                        add("ad"),
                                                        add("facere"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "https://quintessential-dollop.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ipsam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("suscipit"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("molestias"),
                                                        add("laborum"),
                                                        add("est"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://some-alder.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aliquid";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quaerat"),
                                                        add("eligendi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nostrum"),
                                                        add("officiis"),
                                                        add("unde"),
                                                        add("nulla"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "https://foolhardy-figure.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "corrupti";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("facere"),
                                                        add("impedit"),
                                                        add("quasi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quod"),
                                                        add("laboriosam"),
                                                        add("doloremque"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://unselfish-simplification.com";
                                                }}),
                                            }};
                                            healthCheckUri = "eaque";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_UNSPECIFIED;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "similique";
                                            matchedIpRange = "porro";
                                            uri = "https://baggy-clinic.org";
                                        }};
                                        projectId = "sed";
                                        route = new RouteInfo() {{
                                            destIpRange = "necessitatibus";
                                            destPortRanges = new String[]{{
                                                add("ipsa"),
                                                add("excepturi"),
                                                add("a"),
                                                add("maiores"),
                                            }};
                                            displayName = "laudantium";
                                            instanceTags = new String[]{{
                                                add("alias"),
                                                add("asperiores"),
                                                add("rem"),
                                                add("dicta"),
                                            }};
                                            networkUri = "suscipit";
                                            nextHop = "earum";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_ROUTER_APPLIANCE;
                                            priority = 244569;
                                            protocols = new String[]{{
                                                add("esse"),
                                                add("in"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_DYNAMIC;
                                            srcIpRange = "quasi";
                                            srcPortRanges = new String[]{{
                                                add("vero"),
                                            }};
                                            uri = "https://another-committee.net";
                                        }};
                                        state = StepStateEnum.START_FROM_INTERNET;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "incidunt";
                                            location = "dicta";
                                            uri = "http://grounded-prospect.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "error";
                                            ipAddress = "vel";
                                            networkUri = "accusantium";
                                            region = "id";
                                            uri = "http://ideal-merit.com";
                                            vpnTunnelUri = "ullam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "quae";
                                            networkUri = "similique";
                                            region = "incidunt";
                                            remoteGateway = "quam";
                                            remoteGatewayIp = "magni";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "delectus";
                                            sourceGatewayIp = "omnis";
                                            uri = "http://disloyal-significance.info";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "cupiditate";
                                    destinationNetworkUri = "aliquam";
                                    destinationPort = 569287;
                                    protocol = "maiores";
                                    sourceIp = "laudantium";
                                    sourceNetworkUri = "velit";
                                    sourcePort = 971764;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.INVALID_ARGUMENT;
                                            projectsMissingPermission = new String[]{{
                                                add("quisquam"),
                                            }};
                                            resourceUri = "tenetur";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quas";
                                            environment = "molestiae";
                                            runtime = "aliquid";
                                            uri = "https://well-documented-rhetoric.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "accusantium";
                                            location = "dicta";
                                            uri = "https://imperfect-timing.net";
                                            versionId = "tempore";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "quidem";
                                            location = "modi";
                                            serviceUri = "voluptates";
                                            uri = "http://fabulous-conductor.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "asperiores";
                                            externalIp = "esse";
                                            internalIp = "blanditiis";
                                            networkUri = "sint";
                                            region = "repellat";
                                            uri = "https://prudent-whirlpool.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "nulla";
                                            target = DeliverInfoTargetEnum.CLOUD_SQL_INSTANCE;
                                        }};
                                        description = "corporis";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.NO_EXTERNAL_ADDRESS;
                                            resourceUri = "officiis";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "enim";
                                            destinationNetworkUri = "officia";
                                            destinationPort = 902979;
                                            protocol = "eum";
                                            sourceIp = "repudiandae";
                                            sourceNetworkUri = "accusantium";
                                            sourcePort = 637840;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "impedit";
                                            direction = "quasi";
                                            displayName = "blanditiis";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.HIERARCHICAL_FIREWALL_POLICY_RULE;
                                            networkUri = "quisquam";
                                            policy = "eos";
                                            priority = 748023;
                                            targetServiceAccounts = new String[]{{
                                                add("minus"),
                                                add("quia"),
                                                add("magnam"),
                                            }};
                                            targetTags = new String[]{{
                                                add("quod"),
                                                add("quos"),
                                            }};
                                            uri = "https://elegant-investigator.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "laborum";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "perferendis";
                                            matchedPortRange = "necessitatibus";
                                            matchedProtocol = "architecto";
                                            networkUri = "molestias";
                                            target = "dolore";
                                            uri = "http://worried-cookbook.com";
                                            vip = "earum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "veniam";
                                            clusterUri = "ipsam";
                                            externalIp = "eaque";
                                            internalIp = "exercitationem";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "veniam";
                                            externalIp = "nihil";
                                            interface_ = "ad";
                                            internalIp = "nisi";
                                            networkTags = new String[]{{
                                                add("quis"),
                                                add("quibusdam"),
                                                add("nemo"),
                                                add("suscipit"),
                                            }};
                                            networkUri = "pariatur";
                                            serviceAccount = "sit";
                                            uri = "https://sweltering-airmail.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "sed";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "repellat";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("architecto"),
                                                        add("adipisci"),
                                                        add("pariatur"),
                                                        add("harum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("voluptatibus"),
                                                        add("iure"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://shoddy-pomelo.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "earum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("error"),
                                                        add("non"),
                                                        add("quasi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("accusamus"),
                                                        add("harum"),
                                                        add("cumque"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://muffled-author.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aliquid";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("magni"),
                                                        add("tempora"),
                                                        add("possimus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("rerum"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://skinny-walking.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quo";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("asperiores"),
                                                        add("voluptatum"),
                                                        add("iste"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("accusantium"),
                                                        add("illo"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://gorgeous-sunbonnet.net";
                                                }}),
                                            }};
                                            healthCheckUri = "neque";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.SSL_PROXY;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "vel";
                                            matchedIpRange = "sapiente";
                                            uri = "https://beloved-melatonin.com";
                                        }};
                                        projectId = "non";
                                        route = new RouteInfo() {{
                                            destIpRange = "voluptates";
                                            destPortRanges = new String[]{{
                                                add("aliquam"),
                                                add("quisquam"),
                                            }};
                                            displayName = "quas";
                                            instanceTags = new String[]{{
                                                add("maiores"),
                                            }};
                                            networkUri = "inventore";
                                            nextHop = "aliquid";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_VPN_TUNNEL;
                                            priority = 665872;
                                            protocols = new String[]{{
                                                add("aliquid"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.SUBNET;
                                            srcIpRange = "cumque";
                                            srcPortRanges = new String[]{{
                                                add("voluptatum"),
                                                add("ducimus"),
                                                add("adipisci"),
                                            }};
                                            uri = "https://fat-leader.biz";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_SQL_INSTANCE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "voluptatum";
                                            location = "sit";
                                            uri = "https://boring-vase.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "quidem";
                                            ipAddress = "totam";
                                            networkUri = "porro";
                                            region = "deserunt";
                                            uri = "http://knowledgeable-gale.name";
                                            vpnTunnelUri = "commodi";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "alias";
                                            networkUri = "fuga";
                                            region = "aut";
                                            remoteGateway = "dolore";
                                            remoteGatewayIp = "maxime";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.ROUTE_BASED;
                                            sourceGateway = "iste";
                                            sourceGatewayIp = "ullam";
                                            uri = "https://striking-gather.name";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "unde";
                    }};;
                    relatedProjects = new String[]{{
                        add("nihil"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://scornful-fun.com";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://circular-presidency.net";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://canine-samovar.org";
                        }};;
                        cloudSqlInstance = "labore";
                        gkeMasterCluster = "expedita";
                        instance = "corrupti";
                        ipAddress = "rem";
                        network = "atque";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 739633;
                        projectId = "pariatur";
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "quod";
                key = "minus";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "id";
                updateMask = "excepturi";
                uploadType = "occaecati";
                uploadProtocol = "libero";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsPatch(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatchSecurity("quo", "esse") {{
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("soluta", "fugit");
                }};
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "veritatis";
                key = "aut";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dolor";
                uploadProtocol = "voluptates";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsRerun(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity("tempora", "magni") {{
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eum"),
                                            add("reprehenderit"),
                                            add("voluptatum"),
                                            add("blanditiis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rerum"),
                                            add("deserunt"),
                                            add("atque"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "atque";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "est";
                                    expression = "enim";
                                    location = "rem";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("quas"),
                                }};
                                role = "placeat";
                            }}),
                        }};
                        etag = "enim";
                        version = 286453;
                    }};;
                    updateMask = "sapiente";
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "natus";
                key = "cumque";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "doloribus";
                uploadProtocol = "quia";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicyResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicySecurity("officiis", "mollitia") {{
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eum"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "odio";
                key = "minus";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "voluptates";
                uploadProtocol = "praesentium";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissionsSecurity("dicta", "fugit") {{
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

            NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsCancelRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sed", "deleniti");
                    put("sunt", "nesciunt");
                    put("delectus", "laborum");
                    put("aliquam", "deserunt");
                }};
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "eius";
                key = "voluptatum";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "dolorem";
                uploadProtocol = "repellat";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsCancelResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsCancel(req, new NetworkmanagementProjectsLocationsGlobalOperationsCancelSecurity("aspernatur", "inventore") {{
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

            NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsDeleteRequest("sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "dolorem";
                key = "architecto";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "nulla";
                uploadProtocol = "enim";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsDeleteResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsDelete(req, new NetworkmanagementProjectsLocationsGlobalOperationsDeleteSecurity("illo", "magnam") {{
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

            NetworkmanagementProjectsLocationsGlobalOperationsGetRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsGetRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "ex";
                fields = "repellat";
                key = "quae";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsGetResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsGet(req, new NetworkmanagementProjectsLocationsGlobalOperationsGetSecurity("aliquid", "sed") {{
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

            NetworkmanagementProjectsLocationsGlobalOperationsListRequest req = new NetworkmanagementProjectsLocationsGlobalOperationsListRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "tenetur";
                filter = "dignissimos";
                key = "esse";
                oauthToken = "animi";
                pageSize = 512488L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "earum";
                uploadProtocol = "velit";
            }};            

            NetworkmanagementProjectsLocationsGlobalOperationsListResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalOperationsList(req, new NetworkmanagementProjectsLocationsGlobalOperationsListSecurity("officiis", "eius") {{
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

            NetworkmanagementProjectsLocationsListRequest req = new NetworkmanagementProjectsLocationsListRequest("rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "impedit";
                filter = "aliquid";
                key = "quis";
                oauthToken = "facilis";
                pageSize = 218128L;
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "architecto";
                uploadProtocol = "praesentium";
            }};            

            NetworkmanagementProjectsLocationsListResponse res = sdk.projects.networkmanagementProjectsLocationsList(req, new NetworkmanagementProjectsLocationsListSecurity("eveniet", "dolor") {{
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
