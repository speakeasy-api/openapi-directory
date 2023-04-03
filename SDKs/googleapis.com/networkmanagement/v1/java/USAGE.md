<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectivityTestInput;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.Endpoint;
import org.openapis.openapi.models.shared.CloudRunRevisionEndpoint;
import org.openapis.openapi.models.shared.CloudFunctionEndpoint;
import org.openapis.openapi.models.shared.AppEngineVersionEndpoint;
import org.openapis.openapi.models.shared.ReachabilityDetailsResultEnum;
import org.openapis.openapi.models.shared.ReachabilityDetails;
import org.openapis.openapi.models.shared.Trace;
import org.openapis.openapi.models.shared.StepStateEnum;
import org.openapis.openapi.models.shared.Step;
import org.openapis.openapi.models.shared.VpnTunnelInfoRoutingTypeEnum;
import org.openapis.openapi.models.shared.VpnTunnelInfo;
import org.openapis.openapi.models.shared.VpnGatewayInfo;
import org.openapis.openapi.models.shared.VpcConnectorInfo;
import org.openapis.openapi.models.shared.RouteInfoNextHopTypeEnum;
import org.openapis.openapi.models.shared.RouteInfoRouteTypeEnum;
import org.openapis.openapi.models.shared.RouteInfo;
import org.openapis.openapi.models.shared.NetworkInfo;
import org.openapis.openapi.models.shared.LoadBalancerInfoBackendTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfoLoadBalancerTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerInfo;
import org.openapis.openapi.models.shared.LoadBalancerBackendHealthCheckFirewallStateEnum;
import org.openapis.openapi.models.shared.LoadBalancerBackend;
import org.openapis.openapi.models.shared.InstanceInfo;
import org.openapis.openapi.models.shared.GKEMasterInfo;
import org.openapis.openapi.models.shared.ForwardingRuleInfo;
import org.openapis.openapi.models.shared.ForwardInfoTargetEnum;
import org.openapis.openapi.models.shared.ForwardInfo;
import org.openapis.openapi.models.shared.FirewallInfoFirewallRuleTypeEnum;
import org.openapis.openapi.models.shared.FirewallInfo;
import org.openapis.openapi.models.shared.EndpointInfo;
import org.openapis.openapi.models.shared.DropInfoCauseEnum;
import org.openapis.openapi.models.shared.DropInfo;
import org.openapis.openapi.models.shared.DeliverInfoTargetEnum;
import org.openapis.openapi.models.shared.DeliverInfo;
import org.openapis.openapi.models.shared.CloudSQLInstanceInfo;
import org.openapis.openapi.models.shared.CloudRunRevisionInfo;
import org.openapis.openapi.models.shared.CloudFunctionInfo;
import org.openapis.openapi.models.shared.AppEngineVersionInfo;
import org.openapis.openapi.models.shared.AbortInfoCauseEnum;
import org.openapis.openapi.models.shared.AbortInfo;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest() {{
                dollarXgafv = "2";
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "provident";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://terrible-nutrient.org";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://that-hellcat.name";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://high-hound.biz";
                        }};
                        cloudSqlInstance = "debitis";
                        gkeMasterCluster = "ipsa";
                        instance = "delectus";
                        ipAddress = "tempora";
                        network = "suscipit";
                        networkType = "GCP_NETWORK";
                        port = 791725;
                        projectId = "placeat";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    name = "quis";
                    protocol = "veritatis";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 648172;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("repellendus", "sapiente");
                                    put("quo", "odit");
                                }}),
                            }};
                            message = "at";
                        }};
                        result = "UNDETERMINED";
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "molestiae";
                                    destinationNetworkUri = "quod";
                                    destinationPort = 800911;
                                    protocol = "esse";
                                    sourceIp = "totam";
                                    sourceNetworkUri = "porro";
                                    sourcePort = 678880;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "MISMATCHED_SOURCE_NETWORK";
                                            projectsMissingPermission = new String[]{{
                                                add("occaecati"),
                                                add("fugit"),
                                                add("deleniti"),
                                            }};
                                            resourceUri = "hic";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "optio";
                                            environment = "totam";
                                            runtime = "beatae";
                                            uri = "http://kosher-dipstick.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "impedit";
                                            location = "cum";
                                            uri = "http://dull-mister.com";
                                            versionId = "perferendis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ad";
                                            location = "natus";
                                            serviceUri = "sed";
                                            uri = "https://ecstatic-original.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "hic";
                                            externalIp = "saepe";
                                            internalIp = "fuga";
                                            networkUri = "in";
                                            region = "corporis";
                                            uri = "https://innocent-thinking.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "architecto";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        description = "reiciendis";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS";
                                            resourceUri = "mollitia";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "laborum";
                                            destinationNetworkUri = "dolores";
                                            destinationPort = 210382;
                                            protocol = "corporis";
                                            sourceIp = "explicabo";
                                            sourceNetworkUri = "nobis";
                                            sourcePort = 315428;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "omnis";
                                            direction = "nemo";
                                            displayName = "minima";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "accusantium";
                                            policy = "iure";
                                            priority = 634274;
                                            targetServiceAccounts = new String[]{{
                                                add("sapiente"),
                                                add("architecto"),
                                                add("mollitia"),
                                                add("dolorem"),
                                            }};
                                            targetTags = new String[]{{
                                                add("consequuntur"),
                                                add("repellat"),
                                                add("mollitia"),
                                            }};
                                            uri = "https://exotic-harm.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "molestiae";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "error";
                                            matchedPortRange = "quia";
                                            matchedProtocol = "quis";
                                            networkUri = "vitae";
                                            target = "laborum";
                                            uri = "https://frozen-catch.net";
                                            vip = "sequi";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "tenetur";
                                            clusterUri = "ipsam";
                                            externalIp = "id";
                                            internalIp = "possimus";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "aut";
                                            externalIp = "quasi";
                                            interface_ = "error";
                                            internalIp = "temporibus";
                                            networkTags = new String[]{{
                                                add("quasi"),
                                                add("reiciendis"),
                                                add("voluptatibus"),
                                            }};
                                            networkUri = "vero";
                                            serviceAccount = "nihil";
                                            uri = "https://witty-avocado.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "cum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "doloremque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ut"),
                                                        add("maiores"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("corporis"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://classic-presidency.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "accusamus";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "repudiandae";
                                            matchedIpRange = "quae";
                                            uri = "http://repentant-minnow.name";
                                        }};
                                        projectId = "pariatur";
                                        route = new RouteInfo() {{
                                            destIpRange = "modi";
                                            destPortRanges = new String[]{{
                                                add("rem"),
                                                add("voluptates"),
                                                add("quasi"),
                                            }};
                                            displayName = "repudiandae";
                                            instanceTags = new String[]{{
                                                add("veritatis"),
                                                add("itaque"),
                                                add("incidunt"),
                                            }};
                                            networkUri = "enim";
                                            nextHop = "consequatur";
                                            nextHopType = "NEXT_HOP_INTERNET_GATEWAY";
                                            priority = 842342;
                                            protocols = new String[]{{
                                                add("deserunt"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "quibusdam";
                                            srcPortRanges = new String[]{{
                                                add("modi"),
                                                add("qui"),
                                            }};
                                            uri = "http://offensive-melody.com";
                                        }};
                                        state = "START_FROM_GKE_MASTER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "assumenda";
                                            location = "ipsam";
                                            uri = "http://costly-poncho.name";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "tempora";
                                            ipAddress = "facilis";
                                            networkUri = "tempore";
                                            region = "labore";
                                            uri = "https://infantile-demur.net";
                                            vpnTunnelUri = "sint";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "aliquid";
                                            networkUri = "provident";
                                            region = "necessitatibus";
                                            remoteGateway = "sint";
                                            remoteGatewayIp = "officia";
                                            routingType = "ROUTING_TYPE_UNSPECIFIED";
                                            sourceGateway = "debitis";
                                            sourceGatewayIp = "a";
                                            uri = "https://intrepid-ikebana.org";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "maiores";
                                    destinationNetworkUri = "rerum";
                                    destinationPort = 116202;
                                    protocol = "magnam";
                                    sourceIp = "cumque";
                                    sourceNetworkUri = "facere";
                                    sourcePort = 411820;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "MISMATCHED_SOURCE_NETWORK";
                                            projectsMissingPermission = new String[]{{
                                                add("non"),
                                                add("occaecati"),
                                                add("enim"),
                                                add("accusamus"),
                                            }};
                                            resourceUri = "delectus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quidem";
                                            environment = "provident";
                                            runtime = "nam";
                                            uri = "https://lost-mailman.org";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "amet";
                                            location = "deserunt";
                                            uri = "http://impressive-outfit.name";
                                            versionId = "molestiae";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "perferendis";
                                            location = "nihil";
                                            serviceUri = "magnam";
                                            uri = "https://pungent-dugout.biz";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "suscipit";
                                            externalIp = "natus";
                                            internalIp = "nobis";
                                            networkUri = "eum";
                                            region = "vero";
                                            uri = "http://buzzing-efficiency.com";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "excepturi";
                                            target = "GOOGLE_API";
                                        }};
                                        description = "provident";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS";
                                            resourceUri = "sint";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "accusantium";
                                            destinationNetworkUri = "mollitia";
                                            destinationPort = 968962;
                                            protocol = "mollitia";
                                            sourceIp = "ad";
                                            sourceNetworkUri = "eum";
                                            sourcePort = 221262;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "necessitatibus";
                                            direction = "odit";
                                            displayName = "nemo";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "iure";
                                            policy = "doloribus";
                                            priority = 891924;
                                            targetServiceAccounts = new String[]{{
                                                add("maxime"),
                                                add("deleniti"),
                                            }};
                                            targetTags = new String[]{{
                                                add("in"),
                                                add("architecto"),
                                                add("architecto"),
                                            }};
                                            uri = "https://grim-quinoa.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "repellat";
                                            target = "CLOUD_SQL_INSTANCE";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "sed";
                                            matchedPortRange = "saepe";
                                            matchedProtocol = "pariatur";
                                            networkUri = "accusantium";
                                            target = "consequuntur";
                                            uri = "https://perfect-clause.com";
                                            vip = "quo";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "illum";
                                            clusterUri = "pariatur";
                                            externalIp = "maxime";
                                            internalIp = "ea";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "excepturi";
                                            externalIp = "odit";
                                            interface_ = "ea";
                                            internalIp = "accusantium";
                                            networkTags = new String[]{{
                                                add("maiores"),
                                            }};
                                            networkUri = "quidem";
                                            serviceAccount = "ipsam";
                                            uri = "http://impolite-rat.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "nemo";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perferendis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("amet"),
                                                        add("aut"),
                                                        add("cumque"),
                                                        add("corporis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("libero"),
                                                        add("nobis"),
                                                        add("dolores"),
                                                        add("quis"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://avaricious-feed.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "eos";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dolores"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quam"),
                                                        add("dolor"),
                                                        add("vero"),
                                                        add("nostrum"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://pale-psychoanalyst.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptatem";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("consequuntur"),
                                                        add("blanditiis"),
                                                        add("error"),
                                                        add("eaque"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("rerum"),
                                                        add("adipisci"),
                                                        add("asperiores"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://peaceful-popularity.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "pariatur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nobis"),
                                                        add("libero"),
                                                        add("delectus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quos"),
                                                        add("aliquid"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://ecstatic-commonsense.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "hic";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "cum";
                                            matchedIpRange = "voluptate";
                                            uri = "http://wild-crumb.net";
                                        }};
                                        projectId = "numquam";
                                        route = new RouteInfo() {{
                                            destIpRange = "veritatis";
                                            destPortRanges = new String[]{{
                                                add("ipsa"),
                                            }};
                                            displayName = "iure";
                                            instanceTags = new String[]{{
                                                add("quaerat"),
                                                add("accusamus"),
                                            }};
                                            networkUri = "quidem";
                                            nextHop = "voluptatibus";
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 617658;
                                            protocols = new String[]{{
                                                add("atque"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "fugiat";
                                            srcPortRanges = new String[]{{
                                                add("soluta"),
                                            }};
                                            uri = "https://late-in-laws.net";
                                        }};
                                        state = "ARRIVE_AT_INSTANCE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "omnis";
                                            location = "necessitatibus";
                                            uri = "https://wrong-intercourse.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "voluptate";
                                            ipAddress = "id";
                                            networkUri = "saepe";
                                            region = "eius";
                                            uri = "http://agitated-cue.net";
                                            vpnTunnelUri = "accusamus";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "ad";
                                            networkUri = "saepe";
                                            region = "suscipit";
                                            remoteGateway = "deserunt";
                                            remoteGatewayIp = "provident";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "repellendus";
                                            sourceGatewayIp = "totam";
                                            uri = "https://abandoned-supplier.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "PERMISSION_DENIED";
                                            projectsMissingPermission = new String[]{{
                                                add("quod"),
                                                add("officiis"),
                                            }};
                                            resourceUri = "qui";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "dolorum";
                                            environment = "a";
                                            runtime = "esse";
                                            uri = "https://left-cousin.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "tenetur";
                                            location = "amet";
                                            uri = "https://unacceptable-destiny.biz";
                                            versionId = "dolorem";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "sapiente";
                                            location = "totam";
                                            serviceUri = "nihil";
                                            uri = "http://runny-cord.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "vel";
                                            externalIp = "libero";
                                            internalIp = "voluptas";
                                            networkUri = "deserunt";
                                            region = "quam";
                                            uri = "http://feline-communicant.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "maxime";
                                            target = "PSC_GOOGLE_API";
                                        }};
                                        description = "soluta";
                                        drop = new DropInfo() {{
                                            cause = "NO_ROUTE";
                                            resourceUri = "laborum";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "totam";
                                            destinationNetworkUri = "incidunt";
                                            destinationPort = 132068;
                                            protocol = "dolores";
                                            sourceIp = "distinctio";
                                            sourceNetworkUri = "facilis";
                                            sourcePort = 396060;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quam";
                                            direction = "molestias";
                                            displayName = "temporibus";
                                            firewallRuleType = "HIERARCHICAL_FIREWALL_POLICY_RULE";
                                            networkUri = "neque";
                                            policy = "fugit";
                                            priority = 164959;
                                            targetServiceAccounts = new String[]{{
                                                add("sunt"),
                                                add("ullam"),
                                            }};
                                            targetTags = new String[]{{
                                                add("hic"),
                                                add("voluptatem"),
                                                add("cumque"),
                                            }};
                                            uri = "https://showy-bomb.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ipsum";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "nobis";
                                            matchedPortRange = "quos";
                                            matchedProtocol = "tempore";
                                            networkUri = "cupiditate";
                                            target = "aperiam";
                                            uri = "https://dopey-eardrum.biz";
                                            vip = "adipisci";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "dolorum";
                                            clusterUri = "architecto";
                                            externalIp = "quae";
                                            internalIp = "aut";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "quas";
                                            externalIp = "itaque";
                                            interface_ = "consequatur";
                                            internalIp = "est";
                                            networkTags = new String[]{{
                                                add("porro"),
                                                add("doloribus"),
                                                add("ut"),
                                                add("facilis"),
                                            }};
                                            networkUri = "cupiditate";
                                            serviceAccount = "qui";
                                            uri = "http://magnificent-kangaroo.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "quisquam";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "omnis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ipsum"),
                                                        add("delectus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("consectetur"),
                                                        add("vero"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://warm-race.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "odio";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("facilis"),
                                                        add("vero"),
                                                        add("ducimus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quibusdam"),
                                                        add("illum"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://sociable-affidavit.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "exercitationem";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("fugit"),
                                                        add("porro"),
                                                        add("maiores"),
                                                        add("doloribus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("eligendi"),
                                                        add("ducimus"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://far-flung-frigate.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aspernatur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("possimus"),
                                                        add("magnam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ex"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://elaborate-wholesaler.com";
                                                }}),
                                            }};
                                            healthCheckUri = "ex";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "excepturi";
                                            matchedIpRange = "voluptatibus";
                                            uri = "http://well-worn-sequence.org";
                                        }};
                                        projectId = "ea";
                                        route = new RouteInfo() {{
                                            destIpRange = "impedit";
                                            destPortRanges = new String[]{{
                                                add("veniam"),
                                                add("aliquid"),
                                            }};
                                            displayName = "inventore";
                                            instanceTags = new String[]{{
                                                add("ea"),
                                                add("quo"),
                                            }};
                                            networkUri = "consectetur";
                                            nextHop = "recusandae";
                                            nextHopType = "NEXT_HOP_IP";
                                            priority = 325310;
                                            protocols = new String[]{{
                                                add("a"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "aut";
                                            srcPortRanges = new String[]{{
                                                add("deleniti"),
                                            }};
                                            uri = "https://fragrant-championship.org";
                                        }};
                                        state = "START_FROM_INTERNET";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "non";
                                            location = "et";
                                            uri = "https://quick-witted-skeleton.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "eum";
                                            ipAddress = "autem";
                                            networkUri = "nobis";
                                            region = "quas";
                                            uri = "https://tiny-gauntlet.net";
                                            vpnTunnelUri = "quasi";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "tempora";
                                            networkUri = "numquam";
                                            region = "explicabo";
                                            remoteGateway = "provident";
                                            remoteGatewayIp = "ipsa";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "magnam";
                                            sourceGatewayIp = "odio";
                                            uri = "http://joyous-increase.name";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "fuga";
                                    destinationNetworkUri = "reprehenderit";
                                    destinationPort = 695626;
                                    protocol = "fugiat";
                                    sourceIp = "ut";
                                    sourceNetworkUri = "eum";
                                    sourcePort = 379927;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_PROJECT";
                                            projectsMissingPermission = new String[]{{
                                                add("quisquam"),
                                                add("veritatis"),
                                                add("ipsa"),
                                            }};
                                            resourceUri = "id";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quidem";
                                            environment = "neque";
                                            runtime = "quo";
                                            uri = "https://some-possession.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "eos";
                                            location = "voluptas";
                                            uri = "http://official-admin.biz";
                                            versionId = "debitis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ipsam";
                                            location = "aspernatur";
                                            serviceUri = "sequi";
                                            uri = "https://judicious-trapezium.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "distinctio";
                                            externalIp = "quod";
                                            internalIp = "dignissimos";
                                            networkUri = "inventore";
                                            region = "nihil";
                                            uri = "https://uncommon-encounter.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "occaecati";
                                            target = "GOOGLE_API";
                                        }};
                                        description = "sapiente";
                                        drop = new DropInfo() {{
                                            cause = "ROUTE_WRONG_NETWORK";
                                            resourceUri = "deserunt";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "molestiae";
                                            destinationNetworkUri = "accusantium";
                                            destinationPort = 783648;
                                            protocol = "eum";
                                            sourceIp = "quas";
                                            sourceNetworkUri = "praesentium";
                                            sourcePort = 159867;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "deleniti";
                                            direction = "fugit";
                                            displayName = "fuga";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "incidunt";
                                            policy = "atque";
                                            priority = 128860;
                                            targetServiceAccounts = new String[]{{
                                                add("nisi"),
                                                add("fugit"),
                                            }};
                                            targetTags = new String[]{{
                                                add("consequuntur"),
                                                add("ratione"),
                                                add("explicabo"),
                                                add("saepe"),
                                            }};
                                            uri = "https://monumental-bolero.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "eveniet";
                                            target = "ANOTHER_PROJECT";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "veritatis";
                                            matchedPortRange = "esse";
                                            matchedProtocol = "quod";
                                            networkUri = "nam";
                                            target = "vero";
                                            uri = "http://bronze-thrift.info";
                                            vip = "harum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "molestiae";
                                            clusterUri = "rerum";
                                            externalIp = "occaecati";
                                            internalIp = "minima";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "distinctio";
                                            externalIp = "eligendi";
                                            interface_ = "sit";
                                            internalIp = "culpa";
                                            networkTags = new String[]{{
                                                add("adipisci"),
                                                add("cumque"),
                                                add("consequuntur"),
                                            }};
                                            networkUri = "consequatur";
                                            serviceAccount = "minus";
                                            uri = "http://well-off-curtailment.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "provident";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nulla";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("esse"),
                                                        add("quasi"),
                                                        add("a"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("sint"),
                                                        add("pariatur"),
                                                        add("possimus"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://yawning-slippers.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "consequuntur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("similique"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("aliquid"),
                                                        add("tenetur"),
                                                        add("quae"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://ironclad-diaphragm.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "illum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("accusantium"),
                                                        add("aliquam"),
                                                        add("sapiente"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://horrible-aide.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "qui";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ex"),
                                                        add("deleniti"),
                                                        add("itaque"),
                                                        add("dolorum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("omnis"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://trifling-body.info";
                                                }}),
                                            }};
                                            healthCheckUri = "ipsa";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "veritatis";
                                            matchedIpRange = "consectetur";
                                            uri = "http://peaceful-spot.com";
                                        }};
                                        projectId = "rem";
                                        route = new RouteInfo() {{
                                            destIpRange = "aut";
                                            destPortRanges = new String[]{{
                                                add("eum"),
                                                add("mollitia"),
                                                add("ab"),
                                            }};
                                            displayName = "corrupti";
                                            instanceTags = new String[]{{
                                                add("voluptatem"),
                                                add("dolor"),
                                            }};
                                            networkUri = "occaecati";
                                            nextHop = "numquam";
                                            nextHopType = "NEXT_HOP_BLACKHOLE";
                                            priority = 131055;
                                            protocols = new String[]{{
                                                add("aut"),
                                                add("dignissimos"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "maiores";
                                            srcPortRanges = new String[]{{
                                                add("velit"),
                                                add("voluptatibus"),
                                                add("voluptas"),
                                            }};
                                            uri = "https://ashamed-half-sister.biz";
                                        }};
                                        state = "START_FROM_GKE_MASTER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "repellendus";
                                            location = "officia";
                                            uri = "https://limping-patience.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "nemo";
                                            ipAddress = "quae";
                                            networkUri = "quaerat";
                                            region = "porro";
                                            uri = "https://flashy-bath.biz";
                                            vpnTunnelUri = "fuga";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "id";
                                            networkUri = "suscipit";
                                            region = "velit";
                                            remoteGateway = "culpa";
                                            remoteGatewayIp = "est";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "totam";
                                            sourceGatewayIp = "fugiat";
                                            uri = "http://lonely-mentor.info";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "NO_SOURCE_LOCATION";
                                            projectsMissingPermission = new String[]{{
                                                add("facilis"),
                                                add("cum"),
                                                add("commodi"),
                                                add("in"),
                                            }};
                                            resourceUri = "corporis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "reiciendis";
                                            environment = "assumenda";
                                            runtime = "nemo";
                                            uri = "https://hungry-aspect.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "consectetur";
                                            location = "in";
                                            uri = "http://vivacious-slider.biz";
                                            versionId = "doloribus";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "suscipit";
                                            location = "reiciendis";
                                            serviceUri = "quidem";
                                            uri = "https://unnatural-editing.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "asperiores";
                                            externalIp = "adipisci";
                                            internalIp = "non";
                                            networkUri = "amet";
                                            region = "beatae";
                                            uri = "http://wee-technology.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "corporis";
                                            target = "PSC_PUBLISHED_SERVICE";
                                        }};
                                        description = "laboriosam";
                                        drop = new DropInfo() {{
                                            cause = "FOREIGN_IP_DISALLOWED";
                                            resourceUri = "voluptates";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "libero";
                                            destinationNetworkUri = "vitae";
                                            destinationPort = 881721;
                                            protocol = "similique";
                                            sourceIp = "tempora";
                                            sourceNetworkUri = "aspernatur";
                                            sourcePort = 379057;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "voluptas";
                                            direction = "voluptas";
                                            displayName = "minima";
                                            firewallRuleType = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
                                            networkUri = "dolorum";
                                            policy = "adipisci";
                                            priority = 795535;
                                            targetServiceAccounts = new String[]{{
                                                add("blanditiis"),
                                            }};
                                            targetTags = new String[]{{
                                                add("dolore"),
                                                add("aliquam"),
                                            }};
                                            uri = "https://taut-fledgling.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "cum";
                                            target = "GKE_MASTER";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "quas";
                                            matchedPortRange = "hic";
                                            matchedProtocol = "nesciunt";
                                            networkUri = "culpa";
                                            target = "corrupti";
                                            uri = "https://mature-underneath.info";
                                            vip = "nobis";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "sit";
                                            clusterUri = "rerum";
                                            externalIp = "sed";
                                            internalIp = "reiciendis";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "explicabo";
                                            externalIp = "asperiores";
                                            interface_ = "facilis";
                                            internalIp = "voluptate";
                                            networkTags = new String[]{{
                                                add("ab"),
                                                add("iste"),
                                                add("dolore"),
                                            }};
                                            networkUri = "laborum";
                                            serviceAccount = "sed";
                                            uri = "http://imperfect-production.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "unde";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "suscipit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("debitis"),
                                                        add("illo"),
                                                        add("reiciendis"),
                                                        add("perferendis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("maiores"),
                                                        add("incidunt"),
                                                        add("sed"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://unlucky-cousin.info";
                                                }}),
                                            }};
                                            healthCheckUri = "occaecati";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "voluptatibus";
                                            matchedIpRange = "tempora";
                                            uri = "http://joint-wash.info";
                                        }};
                                        projectId = "sit";
                                        route = new RouteInfo() {{
                                            destIpRange = "non";
                                            destPortRanges = new String[]{{
                                                add("praesentium"),
                                                add("facilis"),
                                                add("quaerat"),
                                                add("incidunt"),
                                            }};
                                            displayName = "ipsam";
                                            instanceTags = new String[]{{
                                                add("rem"),
                                                add("sit"),
                                                add("nobis"),
                                                add("error"),
                                            }};
                                            networkUri = "veniam";
                                            nextHop = "minima";
                                            nextHopType = "NEXT_HOP_ROUTER_APPLIANCE";
                                            priority = 967122;
                                            protocols = new String[]{{
                                                add("magni"),
                                                add("aperiam"),
                                                add("saepe"),
                                                add("numquam"),
                                            }};
                                            routeType = "STATIC";
                                            srcIpRange = "in";
                                            srcPortRanges = new String[]{{
                                                add("beatae"),
                                                add("laudantium"),
                                                add("exercitationem"),
                                                add("praesentium"),
                                            }};
                                            uri = "https://hoarse-porter.name";
                                        }};
                                        state = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "hic";
                                            location = "expedita";
                                            uri = "https://dirty-polyester.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "officia";
                                            ipAddress = "dolorum";
                                            networkUri = "corrupti";
                                            region = "accusamus";
                                            uri = "http://monthly-chapter.biz";
                                            vpnTunnelUri = "fugiat";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "voluptatem";
                                            networkUri = "culpa";
                                            region = "expedita";
                                            remoteGateway = "magnam";
                                            remoteGatewayIp = "consequatur";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "ipsam";
                                            sourceGatewayIp = "sit";
                                            uri = "https://naughty-trainer.info";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_NETWORK";
                                            projectsMissingPermission = new String[]{{
                                                add("ex"),
                                                add("sed"),
                                                add("sit"),
                                            }};
                                            resourceUri = "vel";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "nostrum";
                                            environment = "saepe";
                                            runtime = "error";
                                            uri = "http://feminine-warm-up.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "harum";
                                            location = "dicta";
                                            uri = "http://noxious-duster.net";
                                            versionId = "atque";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "laborum";
                                            location = "nam";
                                            serviceUri = "tenetur";
                                            uri = "http://adorable-cruelty.name";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "voluptate";
                                            externalIp = "unde";
                                            internalIp = "reiciendis";
                                            networkUri = "provident";
                                            region = "repellendus";
                                            uri = "https://urban-airbus.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "quidem";
                                            target = "GOOGLE_API";
                                        }};
                                        description = "facere";
                                        drop = new DropInfo() {{
                                            cause = "GKE_CONTROL_PLANE_REGION_MISMATCH";
                                            resourceUri = "praesentium";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "mollitia";
                                            destinationNetworkUri = "veniam";
                                            destinationPort = 29100;
                                            protocol = "quisquam";
                                            sourceIp = "repudiandae";
                                            sourceNetworkUri = "quasi";
                                            sourcePort = 542457;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "reprehenderit";
                                            direction = "asperiores";
                                            displayName = "totam";
                                            firewallRuleType = "VPC_FIREWALL_RULE";
                                            networkUri = "quidem";
                                            policy = "maxime";
                                            priority = 90885;
                                            targetServiceAccounts = new String[]{{
                                                add("amet"),
                                                add("assumenda"),
                                            }};
                                            targetTags = new String[]{{
                                                add("atque"),
                                                add("error"),
                                            }};
                                            uri = "https://unfit-symbol.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "minima";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "ex";
                                            matchedPortRange = "maiores";
                                            matchedProtocol = "corrupti";
                                            networkUri = "at";
                                            target = "error";
                                            uri = "https://heavenly-trait.name";
                                            vip = "atque";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "sunt";
                                            clusterUri = "recusandae";
                                            externalIp = "dolorum";
                                            internalIp = "repellendus";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "labore";
                                            externalIp = "reiciendis";
                                            interface_ = "doloremque";
                                            internalIp = "repudiandae";
                                            networkTags = new String[]{{
                                                add("accusantium"),
                                            }};
                                            networkUri = "beatae";
                                            serviceAccount = "dolores";
                                            uri = "http://honorable-defender.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "magnam";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "consequuntur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("officiis"),
                                                        add("perspiciatis"),
                                                        add("in"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("eveniet"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://corrupt-pilot.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "reprehenderit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("illo"),
                                                        add("corporis"),
                                                        add("quidem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("non"),
                                                        add("vero"),
                                                        add("doloremque"),
                                                        add("iure"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://baggy-iron.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "qui";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("iure"),
                                                        add("necessitatibus"),
                                                        add("ratione"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("distinctio"),
                                                        add("voluptatum"),
                                                        add("rem"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://zealous-accent.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perspiciatis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("mollitia"),
                                                        add("voluptas"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://putrid-extinction.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "dolorum";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "quae";
                                            matchedIpRange = "recusandae";
                                            uri = "https://frequent-jam.info";
                                        }};
                                        projectId = "ut";
                                        route = new RouteInfo() {{
                                            destIpRange = "culpa";
                                            destPortRanges = new String[]{{
                                                add("debitis"),
                                            }};
                                            displayName = "laudantium";
                                            instanceTags = new String[]{{
                                                add("nemo"),
                                                add("recusandae"),
                                            }};
                                            networkUri = "esse";
                                            nextHop = "provident";
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 431785;
                                            protocols = new String[]{{
                                                add("provident"),
                                                add("aspernatur"),
                                                add("ullam"),
                                                add("quasi"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "nostrum";
                                            srcPortRanges = new String[]{{
                                                add("provident"),
                                                add("possimus"),
                                                add("animi"),
                                            }};
                                            uri = "http://humongous-apprehension.org";
                                        }};
                                        state = "VIEWER_PERMISSION_MISSING";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ullam";
                                            location = "in";
                                            uri = "https://vivacious-past.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "placeat";
                                            ipAddress = "modi";
                                            networkUri = "voluptatibus";
                                            region = "molestias";
                                            uri = "https://well-informed-sage.com";
                                            vpnTunnelUri = "rerum";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "tempora";
                                            networkUri = "quis";
                                            region = "inventore";
                                            remoteGateway = "fugit";
                                            remoteGatewayIp = "cumque";
                                            routingType = "ROUTING_TYPE_UNSPECIFIED";
                                            sourceGateway = "perferendis";
                                            sourceGatewayIp = "velit";
                                            uri = "http://indolent-difference.name";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNSUPPORTED";
                                            projectsMissingPermission = new String[]{{
                                                add("eos"),
                                                add("sapiente"),
                                                add("eum"),
                                                add("dicta"),
                                            }};
                                            resourceUri = "minima";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "beatae";
                                            environment = "cupiditate";
                                            runtime = "provident";
                                            uri = "https://shocking-understanding.org";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "eaque";
                                            location = "earum";
                                            uri = "https://worried-teen.info";
                                            versionId = "porro";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "suscipit";
                                            location = "dolorem";
                                            serviceUri = "fugit";
                                            uri = "https://reasonable-completion.name";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "necessitatibus";
                                            externalIp = "nulla";
                                            internalIp = "consequatur";
                                            networkUri = "quasi";
                                            region = "et";
                                            uri = "http://pertinent-movement.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "adipisci";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        description = "magni";
                                        drop = new DropInfo() {{
                                            cause = "DROPPED_INSIDE_PSC_SERVICE_PRODUCER";
                                            resourceUri = "nulla";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "necessitatibus";
                                            destinationNetworkUri = "ipsa";
                                            destinationPort = 271113;
                                            protocol = "nihil";
                                            sourceIp = "molestiae";
                                            sourceNetworkUri = "dicta";
                                            sourcePort = 479754;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "esse";
                                            direction = "praesentium";
                                            displayName = "maiores";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "vel";
                                            policy = "architecto";
                                            priority = 857125;
                                            targetServiceAccounts = new String[]{{
                                                add("dicta"),
                                            }};
                                            targetTags = new String[]{{
                                                add("tempora"),
                                                add("esse"),
                                            }};
                                            uri = "http://energetic-great-grandmother.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "laborum";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "nostrum";
                                            matchedPortRange = "fugiat";
                                            matchedProtocol = "expedita";
                                            networkUri = "aliquid";
                                            target = "officia";
                                            uri = "http://husky-alluvium.info";
                                            vip = "voluptas";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "iste";
                                            clusterUri = "id";
                                            externalIp = "ab";
                                            internalIp = "error";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "possimus";
                                            externalIp = "voluptates";
                                            interface_ = "mollitia";
                                            internalIp = "laborum";
                                            networkTags = new String[]{{
                                                add("ad"),
                                                add("deleniti"),
                                                add("enim"),
                                            }};
                                            networkUri = "vitae";
                                            serviceAccount = "repellendus";
                                            uri = "http://solid-guinea.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "expedita";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "molestias";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("aliquid"),
                                                        add("beatae"),
                                                        add("voluptatum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("veritatis"),
                                                        add("rerum"),
                                                        add("est"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://well-off-tax.com";
                                                }}),
                                            }};
                                            healthCheckUri = "fuga";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "debitis";
                                            matchedIpRange = "voluptatem";
                                            uri = "http://minor-twig.info";
                                        }};
                                        projectId = "sapiente";
                                        route = new RouteInfo() {{
                                            destIpRange = "rem";
                                            destPortRanges = new String[]{{
                                                add("nemo"),
                                                add("asperiores"),
                                                add("ratione"),
                                                add("ullam"),
                                            }};
                                            displayName = "perferendis";
                                            instanceTags = new String[]{{
                                                add("totam"),
                                                add("impedit"),
                                                add("quibusdam"),
                                                add("nam"),
                                            }};
                                            networkUri = "ipsam";
                                            nextHop = "culpa";
                                            nextHopType = "NEXT_HOP_INSTANCE";
                                            priority = 307376;
                                            protocols = new String[]{{
                                                add("deleniti"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "tempora";
                                            srcPortRanges = new String[]{{
                                                add("consequatur"),
                                            }};
                                            uri = "http://alert-directory.com";
                                        }};
                                        state = "START_FROM_INSTANCE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "laudantium";
                                            location = "quae";
                                            uri = "http://thrifty-frontier.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "ipsa";
                                            ipAddress = "quas";
                                            networkUri = "eveniet";
                                            region = "impedit";
                                            uri = "https://jovial-terrace.com";
                                            vpnTunnelUri = "veniam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "nesciunt";
                                            networkUri = "expedita";
                                            region = "eum";
                                            remoteGateway = "vel";
                                            remoteGatewayIp = "voluptatum";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "exercitationem";
                                            sourceGatewayIp = "ab";
                                            uri = "https://impossible-riddle.info";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "recusandae";
                                    destinationNetworkUri = "consequuntur";
                                    destinationPort = 28952;
                                    protocol = "exercitationem";
                                    sourceIp = "necessitatibus";
                                    sourceNetworkUri = "quasi";
                                    sourcePort = 392569;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNSUPPORTED";
                                            projectsMissingPermission = new String[]{{
                                                add("harum"),
                                                add("sequi"),
                                                add("doloribus"),
                                            }};
                                            resourceUri = "repudiandae";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "optio";
                                            environment = "occaecati";
                                            runtime = "nemo";
                                            uri = "http://lopsided-pavilion.info";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "numquam";
                                            location = "nemo";
                                            uri = "https://faint-carnation.info";
                                            versionId = "nesciunt";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "fuga";
                                            location = "laudantium";
                                            serviceUri = "incidunt";
                                            uri = "http://mediocre-step-sister.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "nisi";
                                            externalIp = "consequuntur";
                                            internalIp = "consectetur";
                                            networkUri = "aperiam";
                                            region = "cupiditate";
                                            uri = "https://short-accommodation.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "eos";
                                            target = "CLOUD_SQL_INSTANCE";
                                        }};
                                        description = "iste";
                                        drop = new DropInfo() {{
                                            cause = "ROUTE_WRONG_NETWORK";
                                            resourceUri = "inventore";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "fuga";
                                            destinationNetworkUri = "accusamus";
                                            destinationPort = 976802;
                                            protocol = "distinctio";
                                            sourceIp = "omnis";
                                            sourceNetworkUri = "delectus";
                                            sourcePort = 328379;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "praesentium";
                                            direction = "maxime";
                                            displayName = "magnam";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "quos";
                                            policy = "commodi";
                                            priority = 930819;
                                            targetServiceAccounts = new String[]{{
                                                add("totam"),
                                                add("earum"),
                                            }};
                                            targetTags = new String[]{{
                                                add("nam"),
                                                add("vero"),
                                            }};
                                            uri = "http://harmful-heron.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "quasi";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "maiores";
                                            matchedPortRange = "enim";
                                            matchedProtocol = "sint";
                                            networkUri = "nulla";
                                            target = "deserunt";
                                            uri = "http://hairy-hydrolyse.net";
                                            vip = "quis";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "sint";
                                            clusterUri = "accusamus";
                                            externalIp = "impedit";
                                            internalIp = "hic";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "necessitatibus";
                                            externalIp = "asperiores";
                                            interface_ = "ex";
                                            internalIp = "voluptas";
                                            networkTags = new String[]{{
                                                add("delectus"),
                                                add("quae"),
                                                add("minus"),
                                                add("fuga"),
                                            }};
                                            networkUri = "laborum";
                                            serviceAccount = "consectetur";
                                            uri = "http://misty-cowboy.net";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "soluta";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("iusto"),
                                                        add("voluptate"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dignissimos"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://minor-stag.info";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "odit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("vel"),
                                                        add("magnam"),
                                                        add("quibusdam"),
                                                        add("inventore"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("libero"),
                                                        add("architecto"),
                                                        add("voluptatibus"),
                                                        add("quia"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://every-bee.com";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "vel";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("beatae"),
                                                        add("vero"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("eum"),
                                                        add("velit"),
                                                        add("ut"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://circular-scale.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "iste";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("alias"),
                                                        add("nisi"),
                                                        add("itaque"),
                                                        add("velit"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("non"),
                                                        add("dolor"),
                                                        add("iusto"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://aching-pathology.org";
                                                }}),
                                            }};
                                            healthCheckUri = "ea";
                                            loadBalancerType = "TCP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "voluptas";
                                            matchedIpRange = "facilis";
                                            uri = "https://ornery-purchase.name";
                                        }};
                                        projectId = "a";
                                        route = new RouteInfo() {{
                                            destIpRange = "voluptate";
                                            destPortRanges = new String[]{{
                                                add("unde"),
                                                add("necessitatibus"),
                                            }};
                                            displayName = "animi";
                                            instanceTags = new String[]{{
                                                add("ipsam"),
                                                add("corporis"),
                                                add("est"),
                                                add("error"),
                                            }};
                                            networkUri = "esse";
                                            nextHop = "labore";
                                            nextHopType = "NEXT_HOP_IP";
                                            priority = 874400;
                                            protocols = new String[]{{
                                                add("vitae"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "dolorem";
                                            srcPortRanges = new String[]{{
                                                add("qui"),
                                                add("iste"),
                                            }};
                                            uri = "http://handy-result.net";
                                        }};
                                        state = "ARRIVE_AT_INSTANCE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "dolorum";
                                            location = "odio";
                                            uri = "http://abandoned-cleat.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "quae";
                                            ipAddress = "quae";
                                            networkUri = "modi";
                                            region = "neque";
                                            uri = "http://villainous-blinker.biz";
                                            vpnTunnelUri = "unde";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "nulla";
                                            networkUri = "distinctio";
                                            region = "maxime";
                                            remoteGateway = "quia";
                                            remoteGatewayIp = "quia";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "omnis";
                                            sourceGatewayIp = "libero";
                                            uri = "http://putrid-recipe.org";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "SOURCE_ENDPOINT_NOT_FOUND";
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
                                            target = "PSC_GOOGLE_API";
                                        }};
                                        description = "alias";
                                        drop = new DropInfo() {{
                                            cause = "ROUTE_BLACKHOLE";
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
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
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
                                            target = "PEERING_VPC";
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
                                            backendType = "BACKEND_SERVICE";
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
                                                    healthCheckFirewallState = "MISCONFIGURED";
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
                                                    healthCheckFirewallState = "CONFIGURED";
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
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://gray-innovation.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "modi";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
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
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 863471;
                                            protocols = new String[]{{
                                                add("excepturi"),
                                                add("occaecati"),
                                                add("nemo"),
                                            }};
                                            routeType = "STATIC";
                                            srcIpRange = "nostrum";
                                            srcPortRanges = new String[]{{
                                                add("eligendi"),
                                                add("sint"),
                                                add("enim"),
                                                add("hic"),
                                            }};
                                            uri = "https://near-liquidity.name";
                                        }};
                                        state = "SPOOFING_APPROVED";
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
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "architecto";
                                            sourceGatewayIp = "cupiditate";
                                            uri = "http://sinful-snowman.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "NO_SOURCE_LOCATION";
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
                                            target = "GOOGLE_API";
                                        }};
                                        description = "neque";
                                        drop = new DropInfo() {{
                                            cause = "TRAFFIC_TYPE_BLOCKED";
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
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
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
                                            target = "VPN_GATEWAY";
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
                                            backendType = "BACKEND_SERVICE";
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
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
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
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
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
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://notable-sword.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "totam";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
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
                                            nextHopType = "NEXT_HOP_INTERCONNECT";
                                            priority = 998026;
                                            protocols = new String[]{{
                                                add("porro"),
                                            }};
                                            routeType = "PEERING_SUBNET";
                                            srcIpRange = "consectetur";
                                            srcPortRanges = new String[]{{
                                                add("dignissimos"),
                                                add("consectetur"),
                                                add("soluta"),
                                                add("natus"),
                                            }};
                                            uri = "https://posh-cuckoo.org";
                                        }};
                                        state = "START_FROM_PRIVATE_NETWORK";
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
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "in";
                                            sourceGatewayIp = "exercitationem";
                                            uri = "http://expensive-trafficker.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
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
                                            target = "INTERNET";
                                        }};
                                        description = "nesciunt";
                                        drop = new DropInfo() {{
                                            cause = "FORWARDING_RULE_MISMATCH";
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
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
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
                                            target = "TARGET_UNSPECIFIED";
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
                                            backendType = "TARGET_INSTANCE";
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
                                                    healthCheckFirewallState = "CONFIGURED";
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
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
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
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://sociable-sector.org";
                                                }}),
                                            }};
                                            healthCheckUri = "totam";
                                            loadBalancerType = "SSL_PROXY";
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
                                            nextHopType = "NEXT_HOP_NETWORK";
                                            priority = 56372;
                                            protocols = new String[]{{
                                                add("maiores"),
                                                add("accusantium"),
                                                add("veniam"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "neque";
                                            srcPortRanges = new String[]{{
                                                add("aliquam"),
                                                add("quos"),
                                                add("doloribus"),
                                                add("fugiat"),
                                            }};
                                            uri = "https://which-dedication.com";
                                        }};
                                        state = "START_FROM_CLOUD_SQL_INSTANCE";
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
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "sint";
                                            sourceGatewayIp = "ut";
                                            uri = "http://wealthy-dagger.net";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "in";
                    }};
                    relatedProjects = new String[]{{
                        add("ex"),
                        add("minus"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://careful-university.info";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://easy-going-lag.net";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://buzzing-colonialism.info";
                        }};
                        cloudSqlInstance = "magni";
                        gkeMasterCluster = "incidunt";
                        instance = "adipisci";
                        ipAddress = "praesentium";
                        network = "dolor";
                        networkType = "GCP_NETWORK";
                        port = 709701;
                        projectId = "facilis";
                    }};
                }};
                accessToken = "impedit";
                alt = "json";
                callback = "nemo";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "amet";
                parent = "deserunt";
                prettyPrint = false;
                quotaUser = "modi";
                testId = "veniam";
                uploadType = "quod";
                uploadProtocol = "itaque";
            }}            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->