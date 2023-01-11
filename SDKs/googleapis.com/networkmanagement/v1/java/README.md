# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sunt";
                }};
                queryParams = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rem";
                    alt = "json";
                    callback = "est";
                    fields = "nam";
                    key = "et";
                    oauthToken = "nisi";
                    prettyPrint = true;
                    quotaUser = "laudantium";
                    testId = "et";
                    uploadType = "aspernatur";
                    uploadProtocol = "perspiciatis";
                }};
                request = new ConnectivityTestInput() {{
                    description = "ut";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "molestiae";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "qui";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "neque";
                        }};
                        cloudSqlInstance = "possimus";
                        gkeMasterCluster = "exercitationem";
                        instance = "voluptatem";
                        ipAddress = "amet";
                        network = "sit";
                        networkType = "NON_GCP_NETWORK";
                        port = 2681282071796968853;
                        projectId = "mollitia";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "harum");
                        put("consequatur", "adipisci");
                        put("itaque", "ut");
                    }};
                    name = "odit";
                    protocol = "omnis";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 4705781718076250635;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ducimus", "sed");
                                    put("est", "minus");
                                    put("occaecati", "error");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("voluptas", "vero");
                                }}),
                            }};
                            message = "quidem";
                        }};
                        result = "AMBIGUOUS";
                        traces = new openapisdk.models.shared.Trace[]() {{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "corrupti";
                                    destinationNetworkUri = "quo";
                                    destinationPort = 1189282035378733369;
                                    protocol = "quis";
                                    sourceIp = "blanditiis";
                                    sourceNetworkUri = "et";
                                    sourcePort = 793299112839947257;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "MISMATCHED_IP_VERSION";
                                            projectsMissingPermission = new String[]() {{
                                                add("et"),
                                                add("facilis"),
                                                add("architecto"),
                                            }};
                                            resourceUri = "hic";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "qui";
                                            environment = "id";
                                            runtime = "soluta";
                                            uri = "voluptas";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "quaerat";
                                            location = "eligendi";
                                            uri = "aperiam";
                                            versionId = "perspiciatis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nemo";
                                            location = "tempore";
                                            serviceUri = "molestiae";
                                            uri = "voluptates";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "magnam";
                                            externalIp = "a";
                                            internalIp = "velit";
                                            networkUri = "nostrum";
                                            region = "sed";
                                            uri = "vero";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "ut";
                                            target = "INSTANCE";
                                        }};
                                        description = "minus";
                                        drop = new DropInfo() {{
                                            cause = "VPC_CONNECTOR_NOT_RUNNING";
                                            resourceUri = "qui";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "eos";
                                            destinationNetworkUri = "dolorem";
                                            destinationPort = 461824455713768432;
                                            protocol = "asperiores";
                                            sourceIp = "aut";
                                            sourceNetworkUri = "sit";
                                            sourcePort = 8763540473735749948;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "aut";
                                            direction = "eaque";
                                            displayName = "est";
                                            firewallRuleType = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
                                            networkUri = "qui";
                                            policy = "eius";
                                            priority = 8815631855925544391;
                                            targetServiceAccounts = new String[]() {{
                                                add("recusandae"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("itaque"),
                                                add("velit"),
                                            }};
                                            uri = "fugiat";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "mollitia";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "consectetur";
                                            matchedPortRange = "error";
                                            matchedProtocol = "harum";
                                            networkUri = "accusantium";
                                            target = "et";
                                            uri = "blanditiis";
                                            vip = "quia";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "hic";
                                            clusterUri = "nulla";
                                            externalIp = "quis";
                                            internalIp = "laboriosam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "soluta";
                                            externalIp = "molestiae";
                                            interface_ = "accusamus";
                                            internalIp = "omnis";
                                            networkTags = new String[]() {{
                                                add("ut"),
                                            }};
                                            networkUri = "sint";
                                            serviceAccount = "velit";
                                            uri = "quos";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "quasi";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptas";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("optio"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("iusto"),
                                                        add("et"),
                                                        add("qui"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "vero";
                                                }}),
                                            }};
                                            healthCheckUri = "sunt";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "quae";
                                            matchedIpRange = "architecto";
                                            uri = "labore";
                                        }};
                                        projectId = "quo";
                                        route = new RouteInfo() {{
                                            destIpRange = "harum";
                                            destPortRanges = new String[]() {{
                                                add("et"),
                                                add("occaecati"),
                                            }};
                                            displayName = "dignissimos";
                                            instanceTags = new String[]() {{
                                                add("dignissimos"),
                                                add("omnis"),
                                                add("quae"),
                                            }};
                                            networkUri = "nisi";
                                            nextHop = "sapiente";
                                            nextHopType = "NEXT_HOP_VPN_GATEWAY";
                                            priority = 2153273403478740996;
                                            protocols = new String[]() {{
                                                add("sed"),
                                                add("non"),
                                                add("sint"),
                                            }};
                                            routeType = "PEERING_SUBNET";
                                            srcIpRange = "in";
                                            srcPortRanges = new String[]() {{
                                                add("reiciendis"),
                                                add("reiciendis"),
                                            }};
                                            uri = "sit";
                                        }};
                                        state = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "omnis";
                                            location = "fuga";
                                            uri = "sequi";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "facilis";
                                            ipAddress = "voluptates";
                                            networkUri = "cupiditate";
                                            region = "esse";
                                            uri = "magni";
                                            vpnTunnelUri = "sit";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "non";
                                            networkUri = "repudiandae";
                                            region = "similique";
                                            remoteGateway = "esse";
                                            remoteGatewayIp = "enim";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "rem";
                                            sourceGatewayIp = "eius";
                                            uri = "iure";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "MISMATCHED_SOURCE_NETWORK";
                                            projectsMissingPermission = new String[]() {{
                                                add("voluptatum"),
                                                add("natus"),
                                                add("voluptates"),
                                            }};
                                            resourceUri = "dolore";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "recusandae";
                                            environment = "modi";
                                            runtime = "quasi";
                                            uri = "esse";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "soluta";
                                            location = "et";
                                            uri = "amet";
                                            versionId = "et";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "voluptatem";
                                            location = "cupiditate";
                                            serviceUri = "eaque";
                                            uri = "maiores";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "perferendis";
                                            externalIp = "aut";
                                            internalIp = "labore";
                                            networkUri = "qui";
                                            region = "quidem";
                                            uri = "ut";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "ut";
                                            target = "PSC_VPC_SC";
                                        }};
                                        description = "consectetur";
                                        drop = new DropInfo() {{
                                            cause = "DROPPED_INSIDE_GKE_SERVICE";
                                            resourceUri = "doloribus";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "pariatur";
                                            destinationNetworkUri = "officia";
                                            destinationPort = 1511361276630462828;
                                            protocol = "minima";
                                            sourceIp = "iste";
                                            sourceNetworkUri = "sit";
                                            sourcePort = 5976177736294965638;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "molestiae";
                                            direction = "rerum";
                                            displayName = "et";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "quo";
                                            policy = "voluptas";
                                            priority = 6226146167005938878;
                                            targetServiceAccounts = new String[]() {{
                                                add("quod"),
                                                add("sequi"),
                                                add("hic"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("dolorum"),
                                            }};
                                            uri = "et";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "et";
                                            target = "GKE_MASTER";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "itaque";
                                            matchedPortRange = "quidem";
                                            matchedProtocol = "rem";
                                            networkUri = "et";
                                            target = "nulla";
                                            uri = "repellat";
                                            vip = "eum";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "neque";
                                            clusterUri = "sunt";
                                            externalIp = "laboriosam";
                                            internalIp = "iure";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "magnam";
                                            externalIp = "reiciendis";
                                            interface_ = "in";
                                            internalIp = "voluptatum";
                                            networkTags = new String[]() {{
                                                add("soluta"),
                                                add("quo"),
                                                add("autem"),
                                            }};
                                            networkUri = "eos";
                                            serviceAccount = "voluptas";
                                            uri = "magnam";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "ut";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "cupiditate";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("dolor"),
                                                        add("sint"),
                                                        add("pariatur"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("debitis"),
                                                        add("ex"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "ex";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nulla";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("repellendus"),
                                                        add("qui"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("assumenda"),
                                                        add("totam"),
                                                        add("eius"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "aliquid";
                                                }}),
                                            }};
                                            healthCheckUri = "fugiat";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "dignissimos";
                                            matchedIpRange = "cumque";
                                            uri = "sit";
                                        }};
                                        projectId = "iure";
                                        route = new RouteInfo() {{
                                            destIpRange = "possimus";
                                            destPortRanges = new String[]() {{
                                                add("velit"),
                                                add("veritatis"),
                                                add("dolorum"),
                                            }};
                                            displayName = "sed";
                                            instanceTags = new String[]() {{
                                                add("non"),
                                            }};
                                            networkUri = "ex";
                                            nextHop = "commodi";
                                            nextHopType = "NEXT_HOP_NETWORK";
                                            priority = 9109964907204842498;
                                            protocols = new String[]() {{
                                                add("veniam"),
                                                add("debitis"),
                                                add("est"),
                                            }};
                                            routeType = "SUBNET";
                                            srcIpRange = "voluptatem";
                                            srcPortRanges = new String[]() {{
                                                add("provident"),
                                                add("commodi"),
                                                add("similique"),
                                            }};
                                            uri = "sed";
                                        }};
                                        state = "ABORT";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "et";
                                            location = "molestiae";
                                            uri = "quos";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "eum";
                                            ipAddress = "id";
                                            networkUri = "recusandae";
                                            region = "distinctio";
                                            uri = "harum";
                                            vpnTunnelUri = "quia";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "saepe";
                                            networkUri = "quis";
                                            region = "atque";
                                            remoteGateway = "iste";
                                            remoteGatewayIp = "iste";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "blanditiis";
                                            sourceGatewayIp = "ex";
                                            uri = "ea";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "PERMISSION_DENIED";
                                            projectsMissingPermission = new String[]() {{
                                                add("ut"),
                                                add("illum"),
                                            }};
                                            resourceUri = "labore";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "saepe";
                                            environment = "culpa";
                                            runtime = "sunt";
                                            uri = "dolor";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "nihil";
                                            location = "quam";
                                            uri = "exercitationem";
                                            versionId = "deserunt";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nesciunt";
                                            location = "eos";
                                            serviceUri = "aspernatur";
                                            uri = "sed";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "ut";
                                            externalIp = "adipisci";
                                            internalIp = "iste";
                                            networkUri = "quod";
                                            region = "aliquid";
                                            uri = "officiis";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "deleniti";
                                            target = "PSC_GOOGLE_API";
                                        }};
                                        description = "autem";
                                        drop = new DropInfo() {{
                                            cause = "PSC_CONNECTION_NOT_ACCEPTED";
                                            resourceUri = "aspernatur";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "dolorem";
                                            destinationNetworkUri = "sapiente";
                                            destinationPort = 8329469225013273458;
                                            protocol = "et";
                                            sourceIp = "dolor";
                                            sourceNetworkUri = "provident";
                                            sourcePort = 4318552592500431206;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "non";
                                            direction = "voluptatibus";
                                            displayName = "quis";
                                            firewallRuleType = "HIERARCHICAL_FIREWALL_POLICY_RULE";
                                            networkUri = "voluptatum";
                                            policy = "ea";
                                            priority = 2043776034580446800;
                                            targetServiceAccounts = new String[]() {{
                                                add("aut"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("voluptatem"),
                                                add("aliquid"),
                                            }};
                                            uri = "maxime";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "aut";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "voluptatum";
                                            matchedPortRange = "sapiente";
                                            matchedProtocol = "aut";
                                            networkUri = "totam";
                                            target = "iusto";
                                            uri = "in";
                                            vip = "est";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "cum";
                                            clusterUri = "sed";
                                            externalIp = "nostrum";
                                            internalIp = "voluptatem";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "perspiciatis";
                                            externalIp = "natus";
                                            interface_ = "ut";
                                            internalIp = "veniam";
                                            networkTags = new String[]() {{
                                                add("officia"),
                                            }};
                                            networkUri = "dolorem";
                                            serviceAccount = "ipsum";
                                            uri = "adipisci";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "molestiae";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ut";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("facere"),
                                                        add("architecto"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("odio"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "provident";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "commodi";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("et"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("voluptatibus"),
                                                        add("nam"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "repudiandae";
                                                }}),
                                            }};
                                            healthCheckUri = "voluptatem";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "expedita";
                                            matchedIpRange = "eos";
                                            uri = "qui";
                                        }};
                                        projectId = "odit";
                                        route = new RouteInfo() {{
                                            destIpRange = "qui";
                                            destPortRanges = new String[]() {{
                                                add("laboriosam"),
                                            }};
                                            displayName = "similique";
                                            instanceTags = new String[]() {{
                                                add("et"),
                                                add("exercitationem"),
                                                add("qui"),
                                            }};
                                            networkUri = "laudantium";
                                            nextHop = "accusantium";
                                            nextHopType = "NEXT_HOP_TYPE_UNSPECIFIED";
                                            priority = 6746325070837957533;
                                            protocols = new String[]() {{
                                                add("quisquam"),
                                                add("ut"),
                                                add("culpa"),
                                            }};
                                            routeType = "PEERING_DYNAMIC";
                                            srcIpRange = "est";
                                            srcPortRanges = new String[]() {{
                                                add("et"),
                                            }};
                                            uri = "autem";
                                        }};
                                        state = "ARRIVE_AT_VPC_CONNECTOR";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ut";
                                            location = "sint";
                                            uri = "minus";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "mollitia";
                                            ipAddress = "minima";
                                            networkUri = "consequatur";
                                            region = "repellendus";
                                            uri = "voluptate";
                                            vpnTunnelUri = "deserunt";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "laudantium";
                                            networkUri = "sequi";
                                            region = "quia";
                                            remoteGateway = "libero";
                                            remoteGatewayIp = "ut";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "ea";
                                            sourceGatewayIp = "quae";
                                            uri = "sint";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "culpa";
                                    destinationNetworkUri = "magni";
                                    destinationPort = 1683247188599540571;
                                    protocol = "eveniet";
                                    sourceIp = "et";
                                    sourceNetworkUri = "qui";
                                    sourcePort = 3268053641283323977;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_NETWORK";
                                            projectsMissingPermission = new String[]() {{
                                                add("quia"),
                                            }};
                                            resourceUri = "quia";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "accusantium";
                                            environment = "libero";
                                            runtime = "dolorum";
                                            uri = "in";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "voluptatem";
                                            location = "aliquam";
                                            uri = "explicabo";
                                            versionId = "quia";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "consequatur";
                                            location = "totam";
                                            serviceUri = "blanditiis";
                                            uri = "ducimus";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "nemo";
                                            externalIp = "ad";
                                            internalIp = "quia";
                                            networkUri = "quaerat";
                                            region = "velit";
                                            uri = "voluptas";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "eum";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        description = "atque";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_RUN_REVISION_NOT_READY";
                                            resourceUri = "ea";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "saepe";
                                            destinationNetworkUri = "voluptates";
                                            destinationPort = 4417691779377864872;
                                            protocol = "voluptas";
                                            sourceIp = "consectetur";
                                            sourceNetworkUri = "quo";
                                            sourcePort = 7006756584375729031;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "vel";
                                            direction = "molestiae";
                                            displayName = "dolores";
                                            firewallRuleType = "HIERARCHICAL_FIREWALL_POLICY_RULE";
                                            networkUri = "repudiandae";
                                            policy = "recusandae";
                                            priority = 641968006549997495;
                                            targetServiceAccounts = new String[]() {{
                                                add("quidem"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("dignissimos"),
                                            }};
                                            uri = "consequuntur";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ea";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "voluptas";
                                            matchedPortRange = "architecto";
                                            matchedProtocol = "temporibus";
                                            networkUri = "recusandae";
                                            target = "eius";
                                            uri = "aliquam";
                                            vip = "illo";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "debitis";
                                            clusterUri = "et";
                                            externalIp = "ut";
                                            internalIp = "a";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "mollitia";
                                            externalIp = "voluptas";
                                            interface_ = "ipsum";
                                            internalIp = "libero";
                                            networkTags = new String[]() {{
                                                add("optio"),
                                            }};
                                            networkUri = "et";
                                            serviceAccount = "dicta";
                                            uri = "et";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "aut";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "officiis";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("non"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("debitis"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "est";
                                                }}),
                                            }};
                                            healthCheckUri = "facilis";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "dolor";
                                            matchedIpRange = "libero";
                                            uri = "ut";
                                        }};
                                        projectId = "quisquam";
                                        route = new RouteInfo() {{
                                            destIpRange = "incidunt";
                                            destPortRanges = new String[]() {{
                                                add("autem"),
                                                add("neque"),
                                                add("quae"),
                                            }};
                                            displayName = "distinctio";
                                            instanceTags = new String[]() {{
                                                add("omnis"),
                                                add("dolores"),
                                                add("architecto"),
                                            }};
                                            networkUri = "labore";
                                            nextHop = "sit";
                                            nextHopType = "NEXT_HOP_BLACKHOLE";
                                            priority = 6478067667246391189;
                                            protocols = new String[]() {{
                                                add("et"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "sint";
                                            srcPortRanges = new String[]() {{
                                                add("nihil"),
                                            }};
                                            uri = "recusandae";
                                        }};
                                        state = "START_FROM_CLOUD_RUN_REVISION";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "cumque";
                                            location = "sit";
                                            uri = "esse";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "ipsa";
                                            ipAddress = "quaerat";
                                            networkUri = "voluptates";
                                            region = "labore";
                                            uri = "quis";
                                            vpnTunnelUri = "qui";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "dignissimos";
                                            networkUri = "nesciunt";
                                            region = "repudiandae";
                                            remoteGateway = "deserunt";
                                            remoteGatewayIp = "dolores";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "consequatur";
                                            sourceGatewayIp = "libero";
                                            uri = "nihil";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "corporis";
                                    destinationNetworkUri = "ipsum";
                                    destinationPort = 5373881045787867909;
                                    protocol = "quia";
                                    sourceIp = "provident";
                                    sourceNetworkUri = "doloribus";
                                    sourcePort = 6237433171693485854;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]() {{
                                                add("velit"),
                                            }};
                                            resourceUri = "repellat";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "sunt";
                                            environment = "nesciunt";
                                            runtime = "ab";
                                            uri = "eius";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "quaerat";
                                            location = "libero";
                                            uri = "quae";
                                            versionId = "dolorum";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "qui";
                                            location = "dolorem";
                                            serviceUri = "ea";
                                            uri = "vitae";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "aut";
                                            externalIp = "dicta";
                                            internalIp = "odio";
                                            networkUri = "dignissimos";
                                            region = "et";
                                            uri = "perferendis";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "ducimus";
                                            target = "PSC_PUBLISHED_SERVICE";
                                        }};
                                        description = "voluptates";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS";
                                            resourceUri = "at";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "omnis";
                                            destinationNetworkUri = "quaerat";
                                            destinationPort = 2409820006162844317;
                                            protocol = "id";
                                            sourceIp = "voluptatem";
                                            sourceNetworkUri = "qui";
                                            sourcePort = 9172809745020869325;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ipsa";
                                            direction = "placeat";
                                            displayName = "cumque";
                                            firewallRuleType = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
                                            networkUri = "veniam";
                                            policy = "minima";
                                            priority = 8902492481930894534;
                                            targetServiceAccounts = new String[]() {{
                                                add("omnis"),
                                                add("quae"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("similique"),
                                                add("molestiae"),
                                            }};
                                            uri = "quia";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "at";
                                            target = "GKE_MASTER";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "repellendus";
                                            matchedPortRange = "sequi";
                                            matchedProtocol = "inventore";
                                            networkUri = "sit";
                                            target = "corporis";
                                            uri = "omnis";
                                            vip = "qui";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "vel";
                                            clusterUri = "nostrum";
                                            externalIp = "quis";
                                            internalIp = "ut";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "molestiae";
                                            externalIp = "odio";
                                            interface_ = "quae";
                                            internalIp = "et";
                                            networkTags = new String[]() {{
                                                add("ducimus"),
                                            }};
                                            networkUri = "error";
                                            serviceAccount = "adipisci";
                                            uri = "veniam";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "facere";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "sed";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("corporis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("consequatur"),
                                                        add("officiis"),
                                                        add("tempora"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "sed";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dolor";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("assumenda"),
                                                        add("est"),
                                                        add("consequatur"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("ut"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "dicta";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "eos";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("sit"),
                                                        add("qui"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("blanditiis"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "eligendi";
                                                }}),
                                            }};
                                            healthCheckUri = "quia";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "enim";
                                            matchedIpRange = "laudantium";
                                            uri = "occaecati";
                                        }};
                                        projectId = "aut";
                                        route = new RouteInfo() {{
                                            destIpRange = "sit";
                                            destPortRanges = new String[]() {{
                                                add("sunt"),
                                                add("qui"),
                                                add("ullam"),
                                            }};
                                            displayName = "consequuntur";
                                            instanceTags = new String[]() {{
                                                add("accusamus"),
                                                add("repellendus"),
                                            }};
                                            networkUri = "natus";
                                            nextHop = "consectetur";
                                            nextHopType = "NEXT_HOP_ROUTER_APPLIANCE";
                                            priority = 7370336909189769375;
                                            protocols = new String[]() {{
                                                add("ut"),
                                                add("qui"),
                                                add("aspernatur"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "quas";
                                            srcPortRanges = new String[]() {{
                                                add("saepe"),
                                            }};
                                            uri = "dolor";
                                        }};
                                        state = "NAT";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "vitae";
                                            location = "nobis";
                                            uri = "nesciunt";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "rem";
                                            ipAddress = "libero";
                                            networkUri = "ratione";
                                            region = "placeat";
                                            uri = "quam";
                                            vpnTunnelUri = "odit";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "voluptate";
                                            networkUri = "ipsum";
                                            region = "sint";
                                            remoteGateway = "pariatur";
                                            remoteGatewayIp = "dicta";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "tenetur";
                                            sourceGatewayIp = "et";
                                            uri = "veniam";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "NO_SOURCE_LOCATION";
                                            projectsMissingPermission = new String[]() {{
                                                add("consequuntur"),
                                                add("ducimus"),
                                            }};
                                            resourceUri = "molestiae";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "voluptas";
                                            environment = "facilis";
                                            runtime = "nemo";
                                            uri = "modi";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "quasi";
                                            location = "necessitatibus";
                                            uri = "sunt";
                                            versionId = "officia";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nam";
                                            location = "numquam";
                                            serviceUri = "aut";
                                            uri = "nobis";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "numquam";
                                            externalIp = "autem";
                                            internalIp = "quod";
                                            networkUri = "aperiam";
                                            region = "quo";
                                            uri = "accusantium";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "aperiam";
                                            target = "GKE_MASTER";
                                        }};
                                        description = "quam";
                                        drop = new DropInfo() {{
                                            cause = "PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION";
                                            resourceUri = "eius";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "provident";
                                            destinationNetworkUri = "qui";
                                            destinationPort = 4213595429664328712;
                                            protocol = "odio";
                                            sourceIp = "dolores";
                                            sourceNetworkUri = "fugiat";
                                            sourcePort = 3746670920149452094;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "aliquam";
                                            direction = "in";
                                            displayName = "iusto";
                                            firewallRuleType = "VPC_FIREWALL_RULE";
                                            networkUri = "enim";
                                            policy = "laudantium";
                                            priority = 8708980992267454246;
                                            targetServiceAccounts = new String[]() {{
                                                add("qui"),
                                                add("et"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("unde"),
                                                add("molestiae"),
                                            }};
                                            uri = "repellat";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "nihil";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "labore";
                                            matchedPortRange = "illum";
                                            matchedProtocol = "enim";
                                            networkUri = "impedit";
                                            target = "non";
                                            uri = "velit";
                                            vip = "eligendi";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "odio";
                                            clusterUri = "voluptas";
                                            externalIp = "eos";
                                            internalIp = "modi";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "et";
                                            externalIp = "rem";
                                            interface_ = "ex";
                                            internalIp = "molestias";
                                            networkTags = new String[]() {{
                                                add("occaecati"),
                                                add("iusto"),
                                                add("quis"),
                                            }};
                                            networkUri = "eos";
                                            serviceAccount = "rerum";
                                            uri = "excepturi";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "et";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "commodi";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("aut"),
                                                        add("necessitatibus"),
                                                        add("nesciunt"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("non"),
                                                        add("distinctio"),
                                                        add("minima"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "aperiam";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "nisi";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("sunt"),
                                                        add("animi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("excepturi"),
                                                        add("est"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "ex";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ad";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("eaque"),
                                                        add("consequatur"),
                                                        add("officiis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("velit"),
                                                        add("est"),
                                                        add("in"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "sunt";
                                                }}),
                                            }};
                                            healthCheckUri = "modi";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "sit";
                                            matchedIpRange = "cumque";
                                            uri = "natus";
                                        }};
                                        projectId = "ipsum";
                                        route = new RouteInfo() {{
                                            destIpRange = "beatae";
                                            destPortRanges = new String[]() {{
                                                add("amet"),
                                                add("dolorem"),
                                                add("pariatur"),
                                            }};
                                            displayName = "similique";
                                            instanceTags = new String[]() {{
                                                add("ducimus"),
                                            }};
                                            networkUri = "cupiditate";
                                            nextHop = "consequatur";
                                            nextHopType = "NEXT_HOP_ROUTER_APPLIANCE";
                                            priority = 8515770072316590901;
                                            protocols = new String[]() {{
                                                add("culpa"),
                                                add("libero"),
                                                add("iste"),
                                            }};
                                            routeType = "PEERING_SUBNET";
                                            srcIpRange = "asperiores";
                                            srcPortRanges = new String[]() {{
                                                add("dolores"),
                                                add("illum"),
                                            }};
                                            uri = "distinctio";
                                        }};
                                        state = "APPLY_INGRESS_FIREWALL_RULE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quos";
                                            location = "sit";
                                            uri = "nemo";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "et";
                                            ipAddress = "animi";
                                            networkUri = "asperiores";
                                            region = "ratione";
                                            uri = "ipsa";
                                            vpnTunnelUri = "blanditiis";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "voluptas";
                                            networkUri = "impedit";
                                            region = "molestiae";
                                            remoteGateway = "provident";
                                            remoteGatewayIp = "dolores";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "necessitatibus";
                                            sourceGatewayIp = "minima";
                                            uri = "assumenda";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "INVALID_ARGUMENT";
                                            projectsMissingPermission = new String[]() {{
                                                add("porro"),
                                            }};
                                            resourceUri = "omnis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "sequi";
                                            environment = "voluptatem";
                                            runtime = "ut";
                                            uri = "animi";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "blanditiis";
                                            location = "vero";
                                            uri = "aut";
                                            versionId = "et";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ea";
                                            location = "porro";
                                            serviceUri = "aut";
                                            uri = "dolorum";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "quia";
                                            externalIp = "molestiae";
                                            internalIp = "doloribus";
                                            networkUri = "et";
                                            region = "nihil";
                                            uri = "quis";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "aspernatur";
                                            target = "GOOGLE_API";
                                        }};
                                        description = "inventore";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_FUNCTION_NOT_ACTIVE";
                                            resourceUri = "minima";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "quia";
                                            destinationNetworkUri = "officiis";
                                            destinationPort = 4511653344876099972;
                                            protocol = "dolores";
                                            sourceIp = "aliquam";
                                            sourceNetworkUri = "sunt";
                                            sourcePort = 4758326650679669062;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quia";
                                            direction = "totam";
                                            displayName = "esse";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "omnis";
                                            policy = "adipisci";
                                            priority = 325528270729024528;
                                            targetServiceAccounts = new String[]() {{
                                                add("ipsum"),
                                                add("odio"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("est"),
                                                add("ipsam"),
                                            }};
                                            uri = "molestiae";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ut";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "vel";
                                            matchedPortRange = "nihil";
                                            matchedProtocol = "qui";
                                            networkUri = "dignissimos";
                                            target = "facere";
                                            uri = "velit";
                                            vip = "minus";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "nihil";
                                            clusterUri = "et";
                                            externalIp = "aut";
                                            internalIp = "totam";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "ad";
                                            externalIp = "sit";
                                            interface_ = "ea";
                                            internalIp = "temporibus";
                                            networkTags = new String[]() {{
                                                add("illum"),
                                                add("ullam"),
                                                add("dolorum"),
                                            }};
                                            networkUri = "repellat";
                                            serviceAccount = "qui";
                                            uri = "atque";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "alias";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "occaecati";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("est"),
                                                        add("voluptatem"),
                                                        add("voluptates"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("porro"),
                                                        add("ut"),
                                                        add("doloribus"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "debitis";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "et";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("officia"),
                                                        add("vero"),
                                                        add("aut"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("ullam"),
                                                        add("itaque"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "sit";
                                                }}),
                                            }};
                                            healthCheckUri = "harum";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "inventore";
                                            matchedIpRange = "et";
                                            uri = "quae";
                                        }};
                                        projectId = "culpa";
                                        route = new RouteInfo() {{
                                            destIpRange = "illo";
                                            destPortRanges = new String[]() {{
                                                add("dolorem"),
                                                add("sed"),
                                            }};
                                            displayName = "quas";
                                            instanceTags = new String[]() {{
                                                add("nisi"),
                                            }};
                                            networkUri = "delectus";
                                            nextHop = "iste";
                                            nextHopType = "NEXT_HOP_INSTANCE";
                                            priority = 668752945956955856;
                                            protocols = new String[]() {{
                                                add("excepturi"),
                                                add("et"),
                                                add("aut"),
                                            }};
                                            routeType = "PEERING_SUBNET";
                                            srcIpRange = "adipisci";
                                            srcPortRanges = new String[]() {{
                                                add("voluptate"),
                                            }};
                                            uri = "ut";
                                        }};
                                        state = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "provident";
                                            location = "rerum";
                                            uri = "est";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "placeat";
                                            ipAddress = "recusandae";
                                            networkUri = "et";
                                            region = "repudiandae";
                                            uri = "autem";
                                            vpnTunnelUri = "id";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "sunt";
                                            networkUri = "numquam";
                                            region = "repudiandae";
                                            remoteGateway = "sed";
                                            remoteGatewayIp = "non";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "ea";
                                            sourceGatewayIp = "vel";
                                            uri = "non";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "corrupti";
                    }};
                    relatedProjects = new String[]() {{
                        add("error"),
                        add("enim"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "quis";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "mollitia";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "odio";
                        }};
                        cloudSqlInstance = "distinctio";
                        gkeMasterCluster = "omnis";
                        instance = "enim";
                        ipAddress = "hic";
                        network = "earum";
                        networkType = "GCP_NETWORK";
                        port = 4496769385526204176;
                        projectId = "necessitatibus";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networkmanagementProjectsLocationsGlobalConnectivityTestsCreate` - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsList` - Lists all Connectivity Tests owned by a project.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsPatch` - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsRerun` - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networkmanagementProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkmanagementProjectsLocationsGlobalOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `networkmanagementProjectsLocationsGlobalOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `networkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
