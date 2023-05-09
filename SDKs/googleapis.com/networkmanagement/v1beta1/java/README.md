# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "distinctio";
                    destination = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://outstanding-strait.name";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://impressive-ox.name";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://innocent-effect.org";
                        }};;
                        cloudSqlInstance = "ipsa";
                        forwardingRule = "delectus";
                        gkeMasterCluster = "tempora";
                        instance = "suscipit";
                        ipAddress = "molestiae";
                        network = "minus";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 528895;
                        projectId = "iusto";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                    }};
                    name = "Christopher Hills";
                    probingDetails = new ProbingDetails() {{
                        abortCause = ProbingDetailsAbortCauseEnum.NO_SOURCE_LOCATION;
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "odit";
                        }};;
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "at";
                            destinationNetworkUri = "at";
                            destinationPort = 978619;
                            protocol = "molestiae";
                            sourceAgentUri = "quod";
                            sourceIp = "quod";
                            sourceNetworkUri = "esse";
                            sourcePort = 520478;
                        }};;
                        error = new Status() {{
                            code = 780529;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("nam", "officia");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }}),
                            }};
                            message = "cum";
                        }};;
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new org.openapis.openapi.models.shared.LatencyPercentile[]{{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "ipsum";
                                    percent = 568434;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "aspernatur";
                                    percent = 18789;
                                }}),
                            }};
                        }};;
                        result = ProbingDetailsResultEnum.REACHABLE;
                        sentProbeCount = 617636;
                        successfulProbeCount = 149675;
                        verifyTime = "iste";
                    }};;
                    protocol = "dolor";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 616934;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                    put("iste", "iure");
                                    put("saepe", "quidem");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsa", "reiciendis");
                                }}),
                            }};
                            message = "est";
                        }};;
                        result = ReachabilityDetailsResultEnum.AMBIGUOUS;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "dolores";
                                    destinationNetworkUri = "dolorem";
                                    destinationPort = 358152;
                                    protocol = "explicabo";
                                    sourceAgentUri = "nobis";
                                    sourceIp = "enim";
                                    sourceNetworkUri = "omnis";
                                    sourcePort = 363711;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.INTERNAL_ERROR;
                                            projectsMissingPermission = new String[]{{
                                                add("iure"),
                                            }};
                                            resourceUri = "culpa";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "doloribus";
                                            environment = "sapiente";
                                            runtime = "architecto";
                                            uri = "https://dizzy-part.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "repellat";
                                            location = "mollitia";
                                            uri = "https://exotic-harm.info";
                                            versionId = "molestiae";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "velit";
                                            location = "error";
                                            serviceName = "quia";
                                            serviceUri = "quis";
                                            uri = "http://quixotic-physics.biz";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "odit";
                                            externalIp = "quo";
                                            internalIp = "sequi";
                                            networkUri = "tenetur";
                                            region = "ipsam";
                                            uri = "https://sugary-afoul.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "error";
                                            target = DeliverInfoTargetEnum.PSC_VPC_SC;
                                        }};
                                        description = "laborum";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.FIREWALL_RULE;
                                            resourceUri = "reiciendis";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "voluptatibus";
                                            destinationNetworkUri = "vero";
                                            destinationPort = 468651;
                                            protocol = "praesentium";
                                            sourceAgentUri = "voluptatibus";
                                            sourceIp = "ipsa";
                                            sourceNetworkUri = "omnis";
                                            sourcePort = 451159;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "cum";
                                            direction = "perferendis";
                                            displayName = "doloremque";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.VPC_FIREWALL_RULE;
                                            networkUri = "ut";
                                            policy = "maiores";
                                            priority = 120196;
                                            targetServiceAccounts = new String[]{{
                                                add("dolore"),
                                                add("iusto"),
                                            }};
                                            targetTags = new String[]{{
                                                add("harum"),
                                            }};
                                            uri = "http://unacceptable-hare.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "quae";
                                            target = ForwardInfoTargetEnum.PEERING_VPC;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "quidem";
                                            matchedPortRange = "molestias";
                                            matchedProtocol = "excepturi";
                                            networkUri = "pariatur";
                                            target = "modi";
                                            uri = "https://meaty-tortoise.com";
                                            vip = "repudiandae";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "sint";
                                            clusterUri = "veritatis";
                                            externalIp = "itaque";
                                            internalIp = "incidunt";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "enim";
                                            externalIp = "consequatur";
                                            interface_ = "est";
                                            internalIp = "quibusdam";
                                            networkTags = new String[]{{
                                                add("deserunt"),
                                            }};
                                            networkUri = "distinctio";
                                            serviceAccount = "quibusdam";
                                            uri = "http://familiar-combination.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "quos";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "magni";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ipsam"),
                                                        add("alias"),
                                                        add("fugit"),
                                                        add("dolorum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("tempora"),
                                                        add("facilis"),
                                                        add("tempore"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://infantile-demur.net";
                                                }}),
                                            }};
                                            healthCheckUri = "sint";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "provident";
                                            matchedIpRange = "necessitatibus";
                                            uri = "https://portly-cribbage.org";
                                        }};
                                        projectId = "a";
                                        route = new RouteInfo() {{
                                            destIpRange = "dolorum";
                                            destPortRanges = new String[]{{
                                                add("in"),
                                                add("illum"),
                                            }};
                                            displayName = "maiores";
                                            instanceTags = new String[]{{
                                                add("dicta"),
                                                add("magnam"),
                                                add("cumque"),
                                            }};
                                            networkUri = "facere";
                                            nextHop = "ea";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_PEERING;
                                            priority = 675439;
                                            protocols = new String[]{{
                                                add("non"),
                                                add("occaecati"),
                                                add("enim"),
                                                add("accusamus"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.POLICY_BASED;
                                            srcIpRange = "quidem";
                                            srcPortRanges = new String[]{{
                                                add("nam"),
                                                add("id"),
                                                add("blanditiis"),
                                            }};
                                            uri = "https://well-groomed-cupboard.name";
                                        }};
                                        state = StepStateEnum.APPLY_EGRESS_FIREWALL_RULE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "vel";
                                            location = "natus";
                                            uri = "https://lame-alcohol.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "magnam";
                                            ipAddress = "distinctio";
                                            networkUri = "id";
                                            region = "labore";
                                            uri = "http://hideous-ottoman.net";
                                            vpnTunnelUri = "eum";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "vero";
                                            networkUri = "aspernatur";
                                            region = "architecto";
                                            remoteGateway = "magnam";
                                            remoteGatewayIp = "et";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "ullam";
                                            sourceGatewayIp = "provident";
                                            uri = "https://noted-antling.name";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.GKE_KONNECTIVITY_PROXY_UNSUPPORTED;
                                            projectsMissingPermission = new String[]{{
                                                add("ad"),
                                                add("eum"),
                                                add("dolor"),
                                            }};
                                            resourceUri = "necessitatibus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "odit";
                                            environment = "nemo";
                                            runtime = "quasi";
                                            uri = "http://worrisome-teenager.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "maxime";
                                            location = "deleniti";
                                            uri = "https://ironclad-bowler.com";
                                            versionId = "repudiandae";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ullam";
                                            location = "expedita";
                                            serviceName = "nihil";
                                            serviceUri = "repellat";
                                            uri = "https://crazy-thrush.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "accusantium";
                                            externalIp = "consequuntur";
                                            internalIp = "praesentium";
                                            networkUri = "natus";
                                            region = "magni";
                                            uri = "http://sore-statin.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "maxime";
                                            target = DeliverInfoTargetEnum.GKE_MASTER;
                                        }};
                                        description = "excepturi";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.ROUTE_BLACKHOLE;
                                            resourceUri = "ea";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "accusantium";
                                            destinationNetworkUri = "ab";
                                            destinationPort = 982575;
                                            protocol = "quidem";
                                            sourceAgentUri = "ipsam";
                                            sourceIp = "voluptate";
                                            sourceNetworkUri = "autem";
                                            sourcePort = 722056;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "eaque";
                                            direction = "pariatur";
                                            displayName = "nemo";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "perferendis";
                                            policy = "fugiat";
                                            priority = 230742;
                                            targetServiceAccounts = new String[]{{
                                                add("cumque"),
                                            }};
                                            targetTags = new String[]{{
                                                add("hic"),
                                                add("libero"),
                                            }};
                                            uri = "https://deafening-feel.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "dignissimos";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "quis";
                                            matchedPortRange = "nesciunt";
                                            matchedProtocol = "eos";
                                            networkUri = "perferendis";
                                            target = "dolores";
                                            uri = "https://juvenile-crinoline.org";
                                            vip = "nostrum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "hic";
                                            clusterUri = "recusandae";
                                            externalIp = "omnis";
                                            internalIp = "facilis";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "perspiciatis";
                                            externalIp = "voluptatem";
                                            interface_ = "porro";
                                            internalIp = "consequuntur";
                                            networkTags = new String[]{{
                                                add("error"),
                                                add("eaque"),
                                                add("occaecati"),
                                            }};
                                            networkUri = "rerum";
                                            serviceAccount = "adipisci";
                                            uri = "https://violent-discount.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "deleniti";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "provident";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("libero"),
                                                        add("delectus"),
                                                        add("quaerat"),
                                                        add("quos"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolorem"),
                                                        add("dolorem"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://eager-urgency.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "cum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dignissimos"),
                                                        add("reiciendis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolorum"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://awkward-azimuth.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "odio";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("accusamus"),
                                                        add("quidem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("voluptas"),
                                                        add("natus"),
                                                        add("eos"),
                                                        add("atque"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://best-respite.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "iusto";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dolorum"),
                                                        add("deleniti"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("necessitatibus"),
                                                        add("distinctio"),
                                                        add("asperiores"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://jolly-pint.org";
                                                }}),
                                            }};
                                            healthCheckUri = "eius";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.LOAD_BALANCER_TYPE_UNSPECIFIED;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "perferendis";
                                            matchedIpRange = "amet";
                                            uri = "https://uncomfortable-evocation.org";
                                        }};
                                        projectId = "suscipit";
                                        route = new RouteInfo() {{
                                            destIpRange = "deserunt";
                                            destPortRanges = new String[]{{
                                                add("minima"),
                                                add("repellendus"),
                                                add("totam"),
                                            }};
                                            displayName = "similique";
                                            instanceTags = new String[]{{
                                                add("at"),
                                            }};
                                            networkUri = "quaerat";
                                            nextHop = "tempora";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INTERCONNECT;
                                            priority = 798047;
                                            protocols = new String[]{{
                                                add("qui"),
                                                add("dolorum"),
                                                add("a"),
                                                add("esse"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.PEERING_STATIC;
                                            srcIpRange = "iusto";
                                            srcPortRanges = new String[]{{
                                                add("quisquam"),
                                            }};
                                            uri = "https://elliptical-rediscovery.org";
                                        }};
                                        state = StepStateEnum.START_FROM_CLOUD_FUNCTION;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "enim";
                                            location = "dolorem";
                                            uri = "https://masculine-introduction.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "expedita";
                                            ipAddress = "neque";
                                            networkUri = "sed";
                                            region = "vel";
                                            uri = "https://hasty-pen.info";
                                            vpnTunnelUri = "ipsum";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "incidunt";
                                            networkUri = "qui";
                                            region = "cupiditate";
                                            remoteGateway = "maxime";
                                            remoteGatewayIp = "pariatur";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "dicta";
                                            sourceGatewayIp = "laborum";
                                            uri = "https://feisty-carnival.biz";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "distinctio";
                                    destinationNetworkUri = "facilis";
                                    destinationPort = 396060;
                                    protocol = "quam";
                                    sourceAgentUri = "molestias";
                                    sourceIp = "temporibus";
                                    sourceNetworkUri = "qui";
                                    sourcePort = 204865;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNKNOWN_IP;
                                            projectsMissingPermission = new String[]{{
                                                add("sunt"),
                                                add("ullam"),
                                            }};
                                            resourceUri = "nam";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "hic";
                                            environment = "voluptatem";
                                            runtime = "cumque";
                                            uri = "https://showy-bomb.org";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "ipsum";
                                            location = "veritatis";
                                            uri = "https://mushy-reflection.name";
                                            versionId = "aperiam";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "delectus";
                                            location = "dolorem";
                                            serviceName = "dolore";
                                            serviceUri = "labore";
                                            uri = "http://ragged-bowler.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "aut";
                                            externalIp = "quas";
                                            internalIp = "itaque";
                                            networkUri = "consequatur";
                                            region = "est";
                                            uri = "https://specific-wingman.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "facilis";
                                            target = DeliverInfoTargetEnum.CLOUD_SQL_INSTANCE;
                                        }};
                                        description = "qui";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.FOREIGN_IP_DISALLOWED;
                                            resourceUri = "laudantium";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "odio";
                                            destinationNetworkUri = "occaecati";
                                            destinationPort = 977496;
                                            protocol = "quisquam";
                                            sourceAgentUri = "vero";
                                            sourceIp = "omnis";
                                            sourceNetworkUri = "quis";
                                            sourcePort = 218403;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "delectus";
                                            direction = "voluptate";
                                            displayName = "consectetur";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.NETWORK_FIREWALL_POLICY_RULE;
                                            networkUri = "tenetur";
                                            policy = "dignissimos";
                                            priority = 941378;
                                            targetServiceAccounts = new String[]{{
                                                add("quod"),
                                                add("odio"),
                                                add("similique"),
                                            }};
                                            targetTags = new String[]{{
                                                add("vero"),
                                                add("ducimus"),
                                                add("dolore"),
                                            }};
                                            uri = "https://thick-confectionery.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "impedit";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "voluptatibus";
                                            matchedPortRange = "exercitationem";
                                            matchedProtocol = "nulla";
                                            networkUri = "fugit";
                                            target = "porro";
                                            uri = "https://worse-jealousy.net";
                                            vip = "ducimus";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "alias";
                                            clusterUri = "officia";
                                            externalIp = "tempora";
                                            internalIp = "ipsam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "ea";
                                            externalIp = "aspernatur";
                                            interface_ = "vel";
                                            internalIp = "possimus";
                                            networkTags = new String[]{{
                                                add("ratione"),
                                                add("ex"),
                                            }};
                                            networkUri = "laudantium";
                                            serviceAccount = "dicta";
                                            uri = "http://wordy-bother.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_INSTANCE;
                                            backendUri = "excepturi";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nostrum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quisquam"),
                                                        add("saepe"),
                                                        add("ea"),
                                                        add("impedit"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("veniam"),
                                                        add("aliquid"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://illegal-scholarship.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "recusandae";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("minima"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("a"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://adept-mainland.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aliquam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("accusamus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("non"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "https://quick-witted-skeleton.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "eum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nobis"),
                                                        add("quas"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nulla"),
                                                        add("voluptas"),
                                                        add("libero"),
                                                        add("quasi"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://compassionate-network.com";
                                                }}),
                                            }};
                                            healthCheckUri = "molestiae";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.INTERNAL_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "odio";
                                            matchedIpRange = "eius";
                                            uri = "http://jolly-lord.net";
                                        }};
                                        projectId = "reprehenderit";
                                        route = new RouteInfo() {{
                                            destIpRange = "quidem";
                                            destPortRanges = new String[]{{
                                                add("ut"),
                                                add("eum"),
                                                add("suscipit"),
                                                add("assumenda"),
                                            }};
                                            displayName = "eos";
                                            instanceTags = new String[]{{
                                                add("quisquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                            networkUri = "id";
                                            nextHop = "quidem";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_INSTANCE;
                                            priority = 778696;
                                            protocols = new String[]{{
                                                add("quo"),
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.STATIC_;
                                            srcIpRange = "ab";
                                            srcPortRanges = new String[]{{
                                                add("consequatur"),
                                                add("tempora"),
                                                add("debitis"),
                                            }};
                                            uri = "http://complete-consciousness.net";
                                        }};
                                        state = StepStateEnum.APPLY_FORWARDING_RULE;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "recusandae";
                                            location = "aperiam";
                                            uri = "https://starchy-kiosk.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "nihil";
                                            ipAddress = "totam";
                                            networkUri = "accusamus";
                                            region = "aliquam";
                                            uri = "http://numb-harmonica.org";
                                            vpnTunnelUri = "dolores";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "deserunt";
                                            networkUri = "molestiae";
                                            region = "accusantium";
                                            remoteGateway = "porro";
                                            remoteGatewayIp = "eum";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.POLICY_BASED;
                                            sourceGateway = "praesentium";
                                            sourceGatewayIp = "consequuntur";
                                            uri = "https://cooperative-possession.name";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "incidunt";
                                    destinationNetworkUri = "atque";
                                    destinationPort = 128860;
                                    protocol = "minima";
                                    sourceAgentUri = "nisi";
                                    sourceIp = "fugit";
                                    sourceNetworkUri = "sapiente";
                                    sourcePort = 159870;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.UNKNOWN_IP;
                                            projectsMissingPermission = new String[]{{
                                                add("occaecati"),
                                                add("atque"),
                                                add("et"),
                                                add("esse"),
                                            }};
                                            resourceUri = "eveniet";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "accusamus";
                                            environment = "veritatis";
                                            runtime = "esse";
                                            uri = "https://scholarly-swath.info";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "quasi";
                                            location = "saepe";
                                            uri = "http://relieved-investigator.net";
                                            versionId = "occaecati";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "minima";
                                            location = "distinctio";
                                            serviceName = "eligendi";
                                            serviceUri = "sit";
                                            uri = "https://self-reliant-data.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "consequuntur";
                                            externalIp = "consequatur";
                                            internalIp = "minus";
                                            networkUri = "quaerat";
                                            region = "sapiente";
                                            uri = "http://joyous-leader.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "a";
                                            target = DeliverInfoTargetEnum.PSC_VPC_SC;
                                        }};
                                        description = "quas";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.CLOUD_SQL_INSTANCE_NOT_RUNNING;
                                            resourceUri = "quasi";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "a";
                                            destinationNetworkUri = "error";
                                            destinationPort = 575751;
                                            protocol = "pariatur";
                                            sourceAgentUri = "possimus";
                                            sourceIp = "quia";
                                            sourceNetworkUri = "eveniet";
                                            sourcePort = 992430;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "facere";
                                            direction = "veritatis";
                                            displayName = "consequuntur";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.FIREWALL_RULE_TYPE_UNSPECIFIED;
                                            networkUri = "similique";
                                            policy = "culpa";
                                            priority = 398434;
                                            targetServiceAccounts = new String[]{{
                                                add("quae"),
                                                add("earum"),
                                                add("vel"),
                                                add("in"),
                                            }};
                                            targetTags = new String[]{{
                                                add("libero"),
                                                add("illum"),
                                            }};
                                            uri = "https://ancient-encouragement.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "dicta";
                                            target = ForwardInfoTargetEnum.VPN_GATEWAY;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "reprehenderit";
                                            matchedPortRange = "ullam";
                                            matchedProtocol = "nisi";
                                            networkUri = "aut";
                                            target = "voluptatum";
                                            uri = "http://terrific-grief.name";
                                            vip = "itaque";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "dolorum";
                                            clusterUri = "architecto";
                                            externalIp = "omnis";
                                            internalIp = "tenetur";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "quasi";
                                            externalIp = "at";
                                            interface_ = "et";
                                            internalIp = "voluptate";
                                            networkTags = new String[]{{
                                                add("minima"),
                                            }};
                                            networkUri = "veritatis";
                                            serviceAccount = "consectetur";
                                            uri = "http://peaceful-spot.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "aut";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "eum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ab"),
                                                        add("corrupti"),
                                                        add("non"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.CONFIGURED;
                                                    uri = "http://sneaky-cardigan.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aut";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dicta"),
                                                        add("maiores"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("velit"),
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://ill-informed-enthusiasm.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "repellendus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("maxime"),
                                                        add("dignissimos"),
                                                        add("officia"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nemo"),
                                                        add("quae"),
                                                        add("quaerat"),
                                                        add("porro"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://biodegradable-deadline.net";
                                                }}),
                                            }};
                                            healthCheckUri = "id";
                                            loadBalancerType = LoadBalancerInfoLoadBalancerTypeEnum.NETWORK_TCP_UDP;
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "velit";
                                            matchedIpRange = "culpa";
                                            uri = "https://vengeful-liquidity.org";
                                        }};
                                        projectId = "vel";
                                        route = new RouteInfo() {{
                                            destIpRange = "ducimus";
                                            destPortRanges = new String[]{{
                                                add("vel"),
                                                add("labore"),
                                                add("possimus"),
                                            }};
                                            displayName = "facilis";
                                            instanceTags = new String[]{{
                                                add("commodi"),
                                                add("in"),
                                                add("corporis"),
                                            }};
                                            networkUri = "reiciendis";
                                            nextHop = "assumenda";
                                            nextHopType = RouteInfoNextHopTypeEnum.NEXT_HOP_PEERING;
                                            priority = 924967;
                                            protocols = new String[]{{
                                                add("aperiam"),
                                                add("cum"),
                                            }};
                                            routeType = RouteInfoRouteTypeEnum.SUBNET;
                                            srcIpRange = "in";
                                            srcPortRanges = new String[]{{
                                                add("earum"),
                                                add("facere"),
                                            }};
                                            uri = "http://worst-genie.org";
                                        }};
                                        state = StepStateEnum.ARRIVE_AT_VPN_TUNNEL;
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "saepe";
                                            location = "necessitatibus";
                                            uri = "http://clever-wreck.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "non";
                                            ipAddress = "amet";
                                            networkUri = "beatae";
                                            region = "dignissimos";
                                            uri = "https://unimportant-custard.info";
                                            vpnTunnelUri = "harum";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "laboriosam";
                                            networkUri = "ipsa";
                                            region = "voluptates";
                                            remoteGateway = "libero";
                                            remoteGatewayIp = "vitae";
                                            routingType = VpnTunnelInfoRoutingTypeEnum.DYNAMIC;
                                            sourceGateway = "similique";
                                            sourceGatewayIp = "tempora";
                                            uri = "http://heavenly-gall-bladder.info";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "minima";
                    }};;
                    relatedProjects = new String[]{{
                        add("dolorum"),
                        add("adipisci"),
                        add("minus"),
                    }};
                    source = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://lovely-illegal.biz";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://unfinished-sport.info";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://shabby-lawn.name";
                        }};;
                        cloudSqlInstance = "hic";
                        forwardingRule = "nesciunt";
                        gkeMasterCluster = "culpa";
                        instance = "corrupti";
                        ipAddress = "pariatur";
                        network = "totam";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 348783;
                        projectId = "nobis";
                    }};;
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "reiciendis";
                key = "explicabo";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "facilis";
                testId = "voluptate";
                uploadType = "expedita";
                uploadProtocol = "ab";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity("iste", "dolore") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [networkmanagementProjectsLocationsGlobalConnectivityTestsCreate](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestscreate) - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsList](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestslist) - Lists all Connectivity Tests owned by a project.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsPatch](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestspatch) - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsRerun](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestsrerun) - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivitytestssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions](docs/projects/README.md#networkmanagementprojectslocationsglobalconnectivityteststestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networkmanagementProjectsLocationsGlobalOperationsCancel](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networkmanagementProjectsLocationsGlobalOperationsDelete](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsGlobalOperationsGet](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [networkmanagementProjectsLocationsGlobalOperationsList](docs/projects/README.md#networkmanagementprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networkmanagementProjectsLocationsList](docs/projects/README.md#networkmanagementprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
