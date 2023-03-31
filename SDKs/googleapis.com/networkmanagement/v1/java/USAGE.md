<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest() {{
                security = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    testId = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new ConnectivityTestInput() {{
                    description = "iure";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://unique-baboon.org";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://hideous-jam.net";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://menacing-jewellery.name";
                        }};
                        cloudSqlInstance = "nisi";
                        gkeMasterCluster = "recusandae";
                        instance = "temporibus";
                        ipAddress = "ab";
                        network = "quis";
                        networkType = "NETWORK_TYPE_UNSPECIFIED";
                        port = 648172;
                        projectId = "perferendis";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("repellendus", "sapiente");
                        put("quo", "odit");
                    }};
                    name = "at";
                    protocol = "at";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 978619;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quod", "esse");
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                    put("totam", "beatae");
                                }}),
                            }};
                            message = "commodi";
                        }};
                        result = "UNREACHABLE";
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "qui";
                                    destinationNetworkUri = "impedit";
                                    destinationPort = 736918;
                                    protocol = "esse";
                                    sourceIp = "ipsum";
                                    sourceNetworkUri = "excepturi";
                                    sourcePort = 135218;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "NO_SOURCE_LOCATION";
                                            projectsMissingPermission = new String[]{{
                                                add("sed"),
                                                add("iste"),
                                                add("dolor"),
                                            }};
                                            resourceUri = "natus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "laboriosam";
                                            environment = "hic";
                                            runtime = "saepe";
                                            uri = "https://itchy-forager.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "iure";
                                            location = "saepe";
                                            uri = "https://burdensome-bail.org";
                                            versionId = "est";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "mollitia";
                                            location = "laborum";
                                            serviceUri = "dolores";
                                            uri = "http://growing-cappelletti.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "enim";
                                            externalIp = "omnis";
                                            internalIp = "nemo";
                                            networkUri = "minima";
                                            region = "excepturi";
                                            uri = "http://insidious-parole.org";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "sapiente";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        description = "mollitia";
                                        drop = new DropInfo() {{
                                            cause = "PRIVATE_TRAFFIC_TO_INTERNET";
                                            resourceUri = "culpa";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "consequuntur";
                                            destinationNetworkUri = "repellat";
                                            destinationPort = 653108;
                                            protocol = "occaecati";
                                            sourceIp = "numquam";
                                            sourceNetworkUri = "commodi";
                                            sourcePort = 466311;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "molestiae";
                                            direction = "velit";
                                            displayName = "error";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "quis";
                                            policy = "vitae";
                                            priority = 674752;
                                            targetServiceAccounts = new String[]{{
                                                add("enim"),
                                                add("odit"),
                                                add("quo"),
                                            }};
                                            targetTags = new String[]{{
                                                add("tenetur"),
                                            }};
                                            uri = "http://pushy-snuggle.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "quasi";
                                            target = "GKE_MASTER";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "temporibus";
                                            matchedPortRange = "laborum";
                                            matchedProtocol = "quasi";
                                            networkUri = "reiciendis";
                                            target = "voluptatibus";
                                            uri = "https://klutzy-level.org";
                                            vip = "ipsa";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "omnis";
                                            clusterUri = "voluptate";
                                            externalIp = "cum";
                                            internalIp = "perferendis";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "doloremque";
                                            externalIp = "reprehenderit";
                                            interface_ = "ut";
                                            internalIp = "maiores";
                                            networkTags = new String[]{{
                                                add("corporis"),
                                            }};
                                            networkUri = "dolore";
                                            serviceAccount = "iusto";
                                            uri = "http://reliable-evaluation.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "repudiandae";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ipsum";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("molestias"),
                                                        add("excepturi"),
                                                        add("pariatur"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("praesentium"),
                                                        add("rem"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://vain-moose.com";
                                                }}),
                                            }};
                                            healthCheckUri = "itaque";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "enim";
                                            matchedIpRange = "consequatur";
                                            uri = "https://tender-carload.name";
                                        }};
                                        projectId = "distinctio";
                                        route = new RouteInfo() {{
                                            destIpRange = "quibusdam";
                                            destPortRanges = new String[]{{
                                                add("modi"),
                                                add("qui"),
                                            }};
                                            displayName = "aliquid";
                                            instanceTags = new String[]{{
                                                add("quos"),
                                                add("perferendis"),
                                                add("magni"),
                                            }};
                                            networkUri = "assumenda";
                                            nextHop = "ipsam";
                                            nextHopType = "NEXT_HOP_TYPE_UNSPECIFIED";
                                            priority = 146441;
                                            protocols = new String[]{{
                                                add("excepturi"),
                                                add("tempora"),
                                                add("facilis"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "labore";
                                            srcPortRanges = new String[]{{
                                                add("eum"),
                                                add("non"),
                                                add("eligendi"),
                                                add("sint"),
                                            }};
                                            uri = "http://optimistic-tenth.name";
                                        }};
                                        state = "ARRIVE_AT_VPN_GATEWAY";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "dolor";
                                            location = "debitis";
                                            uri = "https://raw-icing.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "illum";
                                            ipAddress = "maiores";
                                            networkUri = "rerum";
                                            region = "dicta";
                                            uri = "http://smoggy-sledge.info";
                                            vpnTunnelUri = "aliquid";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "laborum";
                                            networkUri = "accusamus";
                                            region = "non";
                                            remoteGateway = "occaecati";
                                            remoteGatewayIp = "enim";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "delectus";
                                            sourceGatewayIp = "quidem";
                                            uri = "https://scornful-pike.name";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "deleniti";
                                    destinationNetworkUri = "sapiente";
                                    destinationPort = 230533;
                                    protocol = "deserunt";
                                    sourceIp = "nisi";
                                    sourceNetworkUri = "vel";
                                    sourcePort = 618809;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]{{
                                                add("nihil"),
                                            }};
                                            resourceUri = "magnam";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "distinctio";
                                            environment = "id";
                                            runtime = "labore";
                                            uri = "http://hideous-ottoman.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "eum";
                                            location = "vero";
                                            uri = "http://buzzing-efficiency.com";
                                            versionId = "excepturi";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ullam";
                                            location = "provident";
                                            serviceUri = "quos";
                                            uri = "https://angelic-pharmacist.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "mollitia";
                                            externalIp = "ad";
                                            internalIp = "eum";
                                            networkUri = "dolor";
                                            region = "necessitatibus";
                                            uri = "http://handy-borrowing.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "doloribus";
                                            target = "PSC_VPC_SC";
                                        }};
                                        description = "eius";
                                        drop = new DropInfo() {{
                                            cause = "PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION";
                                            resourceUri = "deleniti";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "facilis";
                                            destinationNetworkUri = "in";
                                            destinationPort = 100226;
                                            protocol = "architecto";
                                            sourceIp = "repudiandae";
                                            sourceNetworkUri = "ullam";
                                            sourcePort = 714242;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "nihil";
                                            direction = "repellat";
                                            displayName = "quibusdam";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "saepe";
                                            policy = "pariatur";
                                            priority = 37559;
                                            targetServiceAccounts = new String[]{{
                                                add("praesentium"),
                                            }};
                                            targetTags = new String[]{{
                                                add("magni"),
                                                add("sunt"),
                                                add("quo"),
                                            }};
                                            uri = "https://treasured-simple.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "excepturi";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "ea";
                                            matchedPortRange = "accusantium";
                                            matchedProtocol = "ab";
                                            networkUri = "maiores";
                                            target = "quidem";
                                            uri = "http://jealous-hearing.net";
                                            vip = "eaque";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "pariatur";
                                            clusterUri = "nemo";
                                            externalIp = "voluptatibus";
                                            internalIp = "perferendis";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "fugiat";
                                            externalIp = "amet";
                                            interface_ = "aut";
                                            internalIp = "cumque";
                                            networkTags = new String[]{{
                                                add("hic"),
                                                add("libero"),
                                            }};
                                            networkUri = "nobis";
                                            serviceAccount = "dolores";
                                            uri = "http://mealy-kilometer.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "nesciunt";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "perferendis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("minus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolor"),
                                                        add("vero"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://verifiable-offence.net";
                                                }}),
                                            }};
                                            healthCheckUri = "perspiciatis";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "porro";
                                            matchedIpRange = "consequuntur";
                                            uri = "https://petty-atom.name";
                                        }};
                                        projectId = "rerum";
                                        route = new RouteInfo() {{
                                            destIpRange = "adipisci";
                                            destPortRanges = new String[]{{
                                                add("earum"),
                                                add("modi"),
                                                add("iste"),
                                                add("dolorum"),
                                            }};
                                            displayName = "deleniti";
                                            instanceTags = new String[]{{
                                                add("provident"),
                                                add("nobis"),
                                                add("libero"),
                                                add("delectus"),
                                            }};
                                            networkUri = "quaerat";
                                            nextHop = "quos";
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 212390;
                                            protocols = new String[]{{
                                                add("dolor"),
                                            }};
                                            routeType = "SUBNET";
                                            srcIpRange = "ipsum";
                                            srcPortRanges = new String[]{{
                                                add("excepturi"),
                                                add("cum"),
                                                add("voluptate"),
                                                add("dignissimos"),
                                            }};
                                            uri = "https://electric-porter.biz";
                                        }};
                                        state = "START_FROM_INTERNET";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ipsa";
                                            location = "ipsa";
                                            uri = "http://likely-epauliere.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "quidem";
                                            ipAddress = "voluptatibus";
                                            networkUri = "voluptas";
                                            region = "natus";
                                            uri = "http://monstrous-ambassador.org";
                                            vpnTunnelUri = "ab";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "soluta";
                                            networkUri = "dolorum";
                                            region = "iusto";
                                            remoteGateway = "voluptate";
                                            remoteGatewayIp = "dolorum";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "omnis";
                                            sourceGatewayIp = "necessitatibus";
                                            uri = "https://wrong-intercourse.biz";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]{{
                                                add("saepe"),
                                                add("eius"),
                                                add("aspernatur"),
                                            }};
                                            resourceUri = "perferendis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "amet";
                                            environment = "optio";
                                            runtime = "accusamus";
                                            uri = "http://untimely-gherkin.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "provident";
                                            location = "minima";
                                            uri = "https://mature-pansy.com";
                                            versionId = "at";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "quaerat";
                                            location = "tempora";
                                            serviceUri = "vel";
                                            uri = "https://uneven-commitment.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "a";
                                            externalIp = "esse";
                                            internalIp = "harum";
                                            networkUri = "iusto";
                                            region = "ipsum";
                                            uri = "https://wavy-cuisine.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "accusamus";
                                            target = "INTERNET";
                                        }};
                                        description = "enim";
                                        drop = new DropInfo() {{
                                            cause = "PRIVATE_GOOGLE_ACCESS_DISALLOWED";
                                            resourceUri = "sapiente";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "totam";
                                            destinationNetworkUri = "nihil";
                                            destinationPort = 25662;
                                            protocol = "expedita";
                                            sourceIp = "neque";
                                            sourceNetworkUri = "sed";
                                            sourcePort = 424685;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "libero";
                                            direction = "voluptas";
                                            displayName = "deserunt";
                                            firewallRuleType = "VPC_FIREWALL_RULE";
                                            networkUri = "ipsum";
                                            policy = "incidunt";
                                            priority = 186458;
                                            targetServiceAccounts = new String[]{{
                                                add("maxime"),
                                                add("pariatur"),
                                                add("soluta"),
                                            }};
                                            targetTags = new String[]{{
                                                add("laborum"),
                                            }};
                                            uri = "https://feisty-carnival.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "distinctio";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "aliquid";
                                            matchedPortRange = "quam";
                                            matchedProtocol = "molestias";
                                            networkUri = "temporibus";
                                            target = "qui";
                                            uri = "http://coordinated-clan.info";
                                            vip = "sunt";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "ullam";
                                            clusterUri = "nam";
                                            externalIp = "hic";
                                            internalIp = "voluptatem";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "cumque";
                                            externalIp = "soluta";
                                            interface_ = "nobis";
                                            internalIp = "et";
                                            networkTags = new String[]{{
                                                add("ipsum"),
                                                add("veritatis"),
                                                add("nobis"),
                                                add("quos"),
                                            }};
                                            networkUri = "tempore";
                                            serviceAccount = "cupiditate";
                                            uri = "http://which-corporation.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "adipisci";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "architecto";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("aut"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("itaque"),
                                                        add("consequatur"),
                                                        add("est"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://worse-dragonfly.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "cupiditate";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("quae"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("odio"),
                                                        add("occaecati"),
                                                        add("voluptatibus"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://overlooked-feature.biz";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "delectus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("consectetur"),
                                                        add("vero"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dignissimos"),
                                                        add("hic"),
                                                        add("distinctio"),
                                                        add("quod"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://rubbery-surname.info";
                                                }}),
                                            }};
                                            healthCheckUri = "dolore";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "illum";
                                            matchedIpRange = "sequi";
                                            uri = "https://sociable-affidavit.org";
                                        }};
                                        projectId = "exercitationem";
                                        route = new RouteInfo() {{
                                            destIpRange = "nulla";
                                            destPortRanges = new String[]{{
                                                add("porro"),
                                            }};
                                            displayName = "maiores";
                                            instanceTags = new String[]{{
                                                add("iusto"),
                                                add("eligendi"),
                                                add("ducimus"),
                                                add("alias"),
                                            }};
                                            networkUri = "officia";
                                            nextHop = "tempora";
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 410492;
                                            protocols = new String[]{{
                                                add("vel"),
                                            }};
                                            routeType = "PEERING_DYNAMIC";
                                            srcIpRange = "magnam";
                                            srcPortRanges = new String[]{{
                                                add("ex"),
                                            }};
                                            uri = "https://clear-cut-criteria.org";
                                        }};
                                        state = "START_FROM_INTERNET";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ex";
                                            location = "nulla";
                                            uri = "https://winding-fifth.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "quisquam";
                                            ipAddress = "saepe";
                                            networkUri = "ea";
                                            region = "impedit";
                                            uri = "http://glass-gray.com";
                                            vpnTunnelUri = "magnam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "ea";
                                            networkUri = "quo";
                                            region = "consectetur";
                                            remoteGateway = "recusandae";
                                            remoteGatewayIp = "aspernatur";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "eaque";
                                            sourceGatewayIp = "a";
                                            uri = "https://adolescent-advancement.name";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "DESTINATION_ENDPOINT_NOT_FOUND";
                                            projectsMissingPermission = new String[]{{
                                                add("fugit"),
                                                add("accusamus"),
                                            }};
                                            resourceUri = "inventore";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "non";
                                            environment = "et";
                                            runtime = "dolorum";
                                            uri = "https://striped-deduce.info";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "autem";
                                            location = "nobis";
                                            uri = "https://sweaty-stripe.info";
                                            versionId = "libero";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "quasi";
                                            location = "tempora";
                                            serviceUri = "numquam";
                                            uri = "http://optimistic-avenue.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "magnam";
                                            externalIp = "odio";
                                            internalIp = "eius";
                                            networkUri = "esse";
                                            region = "esse";
                                            uri = "https://ready-hunting.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "fugiat";
                                            target = "INTERNET";
                                        }};
                                        description = "eum";
                                        drop = new DropInfo() {{
                                            cause = "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK";
                                            resourceUri = "assumenda";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "eos";
                                            destinationNetworkUri = "praesentium";
                                            destinationPort = 788546;
                                            protocol = "veritatis";
                                            sourceIp = "ipsa";
                                            sourceNetworkUri = "id";
                                            sourcePort = 696997;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "neque";
                                            direction = "quo";
                                            displayName = "illum";
                                            firewallRuleType = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
                                            networkUri = "fuga";
                                            policy = "eius";
                                            priority = 178367;
                                            targetServiceAccounts = new String[]{{
                                                add("ab"),
                                                add("cupiditate"),
                                            }};
                                            targetTags = new String[]{{
                                                add("tempora"),
                                            }};
                                            uri = "https://hard-to-find-carrot.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "quo";
                                            target = "INTERCONNECT";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "recusandae";
                                            matchedPortRange = "aperiam";
                                            matchedProtocol = "distinctio";
                                            networkUri = "quod";
                                            target = "dignissimos";
                                            uri = "http://knobby-liver.org";
                                            vip = "aliquam";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "odio";
                                            clusterUri = "occaecati";
                                            externalIp = "commodi";
                                            internalIp = "sapiente";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "dolores";
                                            externalIp = "deserunt";
                                            interface_ = "molestiae";
                                            internalIp = "accusantium";
                                            networkTags = new String[]{{
                                                add("eum"),
                                                add("quas"),
                                                add("praesentium"),
                                                add("consequuntur"),
                                            }};
                                            networkUri = "deleniti";
                                            serviceAccount = "fugit";
                                            uri = "https://prickly-donor.name";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "minima";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "fugit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("consequuntur"),
                                                        add("ratione"),
                                                        add("explicabo"),
                                                        add("saepe"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("atque"),
                                                        add("et"),
                                                        add("esse"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://bony-infection.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("aliquid"),
                                                        add("quasi"),
                                                        add("saepe"),
                                                        add("vel"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("molestiae"),
                                                        add("rerum"),
                                                        add("occaecati"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "https://sinful-analogy.name";
                                                }}),
                                            }};
                                            healthCheckUri = "tempore";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "cumque";
                                            matchedIpRange = "consequuntur";
                                            uri = "http://staid-energy.org";
                                        }};
                                        projectId = "consectetur";
                                        route = new RouteInfo() {{
                                            destIpRange = "esse";
                                            destPortRanges = new String[]{{
                                                add("provident"),
                                                add("a"),
                                                add("nulla"),
                                            }};
                                            displayName = "quas";
                                            instanceTags = new String[]{{
                                                add("quasi"),
                                                add("a"),
                                            }};
                                            networkUri = "error";
                                            nextHop = "sint";
                                            nextHopType = "NEXT_HOP_ILB";
                                            priority = 820767;
                                            protocols = new String[]{{
                                                add("eveniet"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "facere";
                                            srcPortRanges = new String[]{{
                                                add("consequuntur"),
                                            }};
                                            uri = "http://pleasant-parenting.info";
                                        }};
                                        state = "ABORT";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quae";
                                            location = "earum";
                                            uri = "http://ironclad-diaphragm.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "illum";
                                            ipAddress = "soluta";
                                            networkUri = "accusantium";
                                            region = "aliquam";
                                            uri = "https://clear-fly.info";
                                            vpnTunnelUri = "ullam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "nisi";
                                            networkUri = "aut";
                                            region = "voluptatum";
                                            remoteGateway = "qui";
                                            remoteGatewayIp = "quibusdam";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "deleniti";
                                            sourceGatewayIp = "itaque";
                                            uri = "https://burly-official.org";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "quasi";
                    }};
                    relatedProjects = new String[]{{
                        add("et"),
                        add("voluptate"),
                        add("ipsa"),
                        add("minima"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "http://emotional-daikon.name";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://ancient-loggia.com";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://inconsequential-performance.com";
                        }};
                        cloudSqlInstance = "corrupti";
                        gkeMasterCluster = "non";
                        instance = "voluptatem";
                        ipAddress = "dolor";
                        network = "occaecati";
                        networkType = "NETWORK_TYPE_UNSPECIFIED";
                        port = 771089;
                        projectId = "explicabo";
                    }};
                }};
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->