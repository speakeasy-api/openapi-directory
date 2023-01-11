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
                    parent = "dignissimos";
                }};
                queryParams = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "dolorem";
                    alt = "json";
                    callback = "error";
                    fields = "aut";
                    key = "quis";
                    oauthToken = "corrupti";
                    prettyPrint = true;
                    quotaUser = "ipsum";
                    testId = "ex";
                    uploadType = "est";
                    uploadProtocol = "voluptatem";
                }};
                request = new ConnectivityTestInput() {{
                    description = "et";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "eos";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "ut";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "natus";
                        }};
                        cloudSqlInstance = "hic";
                        gkeMasterCluster = "minus";
                        instance = "ratione";
                        ipAddress = "harum";
                        network = "autem";
                        networkType = "NON_GCP_NETWORK";
                        port = 3270543530960769436;
                        projectId = "dolorum";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("quaerat", "asperiores");
                        put("quasi", "praesentium");
                        put("in", "et");
                    }};
                    name = "qui";
                    probingDetails = new ProbingDetails() {{
                        abortCause = "NO_SOURCE_LOCATION";
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "excepturi";
                        }};
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "cumque";
                            destinationNetworkUri = "atque";
                            destinationPort = 7220501911264013137;
                            protocol = "consequatur";
                            sourceAgentUri = "odio";
                            sourceIp = "culpa";
                            sourceNetworkUri = "et";
                            sourcePort = 3859730821170547477;
                        }};
                        error = new Status() {{
                            code = 5068595119456469239;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("nisi", "perferendis");
                                    put("beatae", "quaerat");
                                }}),
                            }};
                            message = "quia";
                        }};
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new openapisdk.models.shared.LatencyPercentile[]() {{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "laudantium";
                                    percent = 804266676370794334;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "doloribus";
                                    percent = 3344842273633935161;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "autem";
                                    percent = 6288514864041258135;
                                }}),
                            }};
                        }};
                        result = "REACHABILITY_INCONSISTENT";
                        sentProbeCount = 1324946849682365606;
                        successfulProbeCount = 6120400998384955720;
                        verifyTime = "laborum";
                    }};
                    protocol = "vitae";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 794079877629032858;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("voluptatum", "nemo");
                                    put("sint", "consequatur");
                                    put("ea", "voluptatem");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("facere", "et");
                                    put("in", "ipsa");
                                    put("iusto", "sit");
                                }}),
                            }};
                            message = "aspernatur";
                        }};
                        result = "AMBIGUOUS";
                        traces = new openapisdk.models.shared.Trace[]() {{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "quo";
                                    destinationNetworkUri = "in";
                                    destinationPort = 7846539339723018612;
                                    protocol = "veritatis";
                                    sourceAgentUri = "dignissimos";
                                    sourceIp = "facere";
                                    sourceNetworkUri = "porro";
                                    sourcePort = 7343064235423966745;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "MISMATCHED_DESTINATION_NETWORK";
                                            projectsMissingPermission = new String[]() {{
                                                add("qui"),
                                                add("exercitationem"),
                                            }};
                                            resourceUri = "fugiat";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "odit";
                                            environment = "et";
                                            runtime = "culpa";
                                            uri = "quaerat";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "qui";
                                            location = "debitis";
                                            uri = "nihil";
                                            versionId = "possimus";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "sunt";
                                            location = "laborum";
                                            serviceName = "ut";
                                            serviceUri = "quod";
                                            uri = "autem";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "ea";
                                            externalIp = "dolore";
                                            internalIp = "velit";
                                            networkUri = "doloremque";
                                            region = "non";
                                            uri = "fugiat";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "laborum";
                                            target = "INSTANCE";
                                        }};
                                        description = "reprehenderit";
                                        drop = new DropInfo() {{
                                            cause = "GKE_PSC_ENDPOINT_MISSING";
                                            resourceUri = "ut";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "rerum";
                                            destinationNetworkUri = "quaerat";
                                            destinationPort = 4924034254874168518;
                                            protocol = "quibusdam";
                                            sourceAgentUri = "quas";
                                            sourceIp = "dolorum";
                                            sourceNetworkUri = "ut";
                                            sourcePort = 8031087490340525537;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "autem";
                                            direction = "unde";
                                            displayName = "sit";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "illo";
                                            policy = "sunt";
                                            priority = 5214086191323758055;
                                            targetServiceAccounts = new String[]() {{
                                                add("nihil"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("ab"),
                                            }};
                                            uri = "non";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "voluptatem";
                                            target = "VPN_GATEWAY";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "dolorem";
                                            matchedPortRange = "non";
                                            matchedProtocol = "itaque";
                                            networkUri = "voluptatum";
                                            target = "temporibus";
                                            uri = "et";
                                            vip = "saepe";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "atque";
                                            clusterUri = "et";
                                            externalIp = "minus";
                                            internalIp = "sapiente";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "voluptatem";
                                            externalIp = "voluptatem";
                                            interface_ = "nihil";
                                            internalIp = "tempora";
                                            networkTags = new String[]() {{
                                                add("suscipit"),
                                                add("doloremque"),
                                                add("alias"),
                                            }};
                                            networkUri = "quasi";
                                            serviceAccount = "aut";
                                            uri = "et";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "aperiam";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "et";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("quidem"),
                                                        add("quis"),
                                                        add("dolor"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("non"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "tenetur";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "ut";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("voluptatem"),
                                                        add("repellendus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("autem"),
                                                        add("corporis"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "aut";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "et";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("id"),
                                                        add("consectetur"),
                                                        add("dolore"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("reiciendis"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "minima";
                                                }}),
                                            }};
                                            healthCheckUri = "possimus";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "nihil";
                                            matchedIpRange = "iusto";
                                            uri = "quisquam";
                                        }};
                                        projectId = "ea";
                                        route = new RouteInfo() {{
                                            destIpRange = "maxime";
                                            destPortRanges = new String[]() {{
                                                add("veritatis"),
                                                add("est"),
                                            }};
                                            displayName = "velit";
                                            instanceTags = new String[]() {{
                                                add("soluta"),
                                            }};
                                            networkUri = "assumenda";
                                            nextHop = "aut";
                                            nextHopType = "NEXT_HOP_VPN_TUNNEL";
                                            priority = 1321819076215117808;
                                            protocols = new String[]() {{
                                                add("aut"),
                                                add("architecto"),
                                            }};
                                            routeType = "STATIC";
                                            srcIpRange = "aut";
                                            srcPortRanges = new String[]() {{
                                                add("ut"),
                                                add("dolorum"),
                                                add("ea"),
                                            }};
                                            uri = "aliquid";
                                        }};
                                        state = "ARRIVE_AT_INSTANCE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "alias";
                                            location = "autem";
                                            uri = "excepturi";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "impedit";
                                            ipAddress = "assumenda";
                                            networkUri = "non";
                                            region = "et";
                                            uri = "unde";
                                            vpnTunnelUri = "quia";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "voluptatum";
                                            networkUri = "incidunt";
                                            region = "dolor";
                                            remoteGateway = "ducimus";
                                            remoteGatewayIp = "corrupti";
                                            routingType = "ROUTING_TYPE_UNSPECIFIED";
                                            sourceGateway = "qui";
                                            sourceGatewayIp = "modi";
                                            uri = "dolores";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "INTERNAL_ERROR";
                                            projectsMissingPermission = new String[]() {{
                                                add("eaque"),
                                                add("quia"),
                                                add("tempore"),
                                            }};
                                            resourceUri = "soluta";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "non";
                                            environment = "amet";
                                            runtime = "error";
                                            uri = "facilis";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "ducimus";
                                            location = "est";
                                            uri = "iste";
                                            versionId = "similique";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "nulla";
                                            location = "sint";
                                            serviceName = "quas";
                                            serviceUri = "et";
                                            uri = "rem";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "sed";
                                            externalIp = "necessitatibus";
                                            internalIp = "eius";
                                            networkUri = "eum";
                                            region = "asperiores";
                                            uri = "sint";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "debitis";
                                            target = "PSC_PUBLISHED_SERVICE";
                                        }};
                                        description = "esse";
                                        drop = new DropInfo() {{
                                            cause = "UNKNOWN_EXTERNAL_ADDRESS";
                                            resourceUri = "ea";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "sint";
                                            destinationNetworkUri = "excepturi";
                                            destinationPort = 4389590552816940634;
                                            protocol = "et";
                                            sourceAgentUri = "ipsa";
                                            sourceIp = "pariatur";
                                            sourceNetworkUri = "minus";
                                            sourcePort = 5018936316137572588;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "voluptatibus";
                                            direction = "consequatur";
                                            displayName = "ut";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "optio";
                                            policy = "voluptates";
                                            priority = 4827168258453279497;
                                            targetServiceAccounts = new String[]() {{
                                                add("reprehenderit"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("eligendi"),
                                            }};
                                            uri = "minima";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "rerum";
                                            target = "VPN_GATEWAY";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "voluptas";
                                            matchedPortRange = "dolorem";
                                            matchedProtocol = "perspiciatis";
                                            networkUri = "dolorem";
                                            target = "laboriosam";
                                            uri = "ipsam";
                                            vip = "aliquam";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "sit";
                                            clusterUri = "quam";
                                            externalIp = "vero";
                                            internalIp = "dolorum";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "pariatur";
                                            externalIp = "sed";
                                            interface_ = "qui";
                                            internalIp = "temporibus";
                                            networkTags = new String[]() {{
                                                add("aut"),
                                                add("corporis"),
                                                add("corporis"),
                                            }};
                                            networkUri = "eligendi";
                                            serviceAccount = "quo";
                                            uri = "qui";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "consequatur";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "commodi";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("fugiat"),
                                                        add("minus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("dolores"),
                                                        add("ut"),
                                                        add("odit"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "id";
                                                }}),
                                            }};
                                            healthCheckUri = "incidunt";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "dolorem";
                                            matchedIpRange = "omnis";
                                            uri = "voluptatem";
                                        }};
                                        projectId = "ullam";
                                        route = new RouteInfo() {{
                                            destIpRange = "atque";
                                            destPortRanges = new String[]() {{
                                                add("doloremque"),
                                                add("dolore"),
                                                add("sapiente"),
                                            }};
                                            displayName = "nihil";
                                            instanceTags = new String[]() {{
                                                add("distinctio"),
                                                add("magnam"),
                                                add("fuga"),
                                            }};
                                            networkUri = "voluptas";
                                            nextHop = "eius";
                                            nextHopType = "NEXT_HOP_TYPE_UNSPECIFIED";
                                            priority = 1566858825528628458;
                                            protocols = new String[]() {{
                                                add("non"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "necessitatibus";
                                            srcPortRanges = new String[]() {{
                                                add("qui"),
                                                add("tenetur"),
                                            }};
                                            uri = "occaecati";
                                        }};
                                        state = "APPLY_EGRESS_FIREWALL_RULE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "itaque";
                                            location = "officiis";
                                            uri = "quis";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "enim";
                                            ipAddress = "repudiandae";
                                            networkUri = "et";
                                            region = "labore";
                                            uri = "commodi";
                                            vpnTunnelUri = "enim";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "rerum";
                                            networkUri = "cum";
                                            region = "quo";
                                            remoteGateway = "et";
                                            remoteGatewayIp = "sit";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "ipsam";
                                            sourceGatewayIp = "ut";
                                            uri = "dolores";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "CAUSE_UNSPECIFIED";
                                            projectsMissingPermission = new String[]() {{
                                                add("iusto"),
                                                add("sit"),
                                                add("magnam"),
                                            }};
                                            resourceUri = "ea";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "accusamus";
                                            environment = "minus";
                                            runtime = "corporis";
                                            uri = "culpa";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "dolores";
                                            location = "totam";
                                            uri = "repellat";
                                            versionId = "libero";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "voluptas";
                                            location = "magnam";
                                            serviceName = "itaque";
                                            serviceUri = "et";
                                            uri = "enim";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "molestiae";
                                            externalIp = "minus";
                                            internalIp = "iure";
                                            networkUri = "rerum";
                                            region = "adipisci";
                                            uri = "laudantium";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "omnis";
                                            target = "INSTANCE";
                                        }};
                                        description = "reprehenderit";
                                        drop = new DropInfo() {{
                                            cause = "ROUTE_WRONG_NETWORK";
                                            resourceUri = "dicta";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "recusandae";
                                            destinationNetworkUri = "soluta";
                                            destinationPort = 3617887939894369749;
                                            protocol = "reprehenderit";
                                            sourceAgentUri = "voluptatum";
                                            sourceIp = "aperiam";
                                            sourceNetworkUri = "temporibus";
                                            sourcePort = 4482450382558863678;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ab";
                                            direction = "a";
                                            displayName = "et";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "soluta";
                                            policy = "dolore";
                                            priority = 5186325155559506884;
                                            targetServiceAccounts = new String[]() {{
                                                add("in"),
                                                add("ex"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("odit"),
                                                add("repudiandae"),
                                            }};
                                            uri = "aut";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "molestiae";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "occaecati";
                                            matchedPortRange = "sapiente";
                                            matchedProtocol = "voluptate";
                                            networkUri = "harum";
                                            target = "cumque";
                                            uri = "voluptas";
                                            vip = "repellendus";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "numquam";
                                            clusterUri = "id";
                                            externalIp = "ut";
                                            internalIp = "occaecati";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "repellendus";
                                            externalIp = "alias";
                                            interface_ = "deserunt";
                                            internalIp = "ea";
                                            networkTags = new String[]() {{
                                                add("laudantium"),
                                            }};
                                            networkUri = "iure";
                                            serviceAccount = "sit";
                                            uri = "voluptas";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "at";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "enim";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("nulla"),
                                                        add("omnis"),
                                                        add("commodi"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("eligendi"),
                                                        add("laboriosam"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "dolores";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "impedit";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("accusamus"),
                                                        add("doloremque"),
                                                        add("quas"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("rerum"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "debitis";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "repudiandae";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("nihil"),
                                                        add("tenetur"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("suscipit"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "cumque";
                                                }}),
                                            }};
                                            healthCheckUri = "eos";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "nihil";
                                            matchedIpRange = "vel";
                                            uri = "minima";
                                        }};
                                        projectId = "dolor";
                                        route = new RouteInfo() {{
                                            destIpRange = "praesentium";
                                            destPortRanges = new String[]() {{
                                                add("doloribus"),
                                                add("veritatis"),
                                                add("dolor"),
                                            }};
                                            displayName = "autem";
                                            instanceTags = new String[]() {{
                                                add("minima"),
                                                add("consequatur"),
                                            }};
                                            networkUri = "quia";
                                            nextHop = "aliquid";
                                            nextHopType = "NEXT_HOP_ROUTER_APPLIANCE";
                                            priority = 2382237157700235635;
                                            protocols = new String[]() {{
                                                add("vero"),
                                                add("est"),
                                            }};
                                            routeType = "SUBNET";
                                            srcIpRange = "enim";
                                            srcPortRanges = new String[]() {{
                                                add("aut"),
                                                add("laboriosam"),
                                                add("est"),
                                            }};
                                            uri = "asperiores";
                                        }};
                                        state = "STATE_UNSPECIFIED";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "labore";
                                            location = "sunt";
                                            uri = "earum";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "ut";
                                            ipAddress = "in";
                                            networkUri = "architecto";
                                            region = "ipsum";
                                            uri = "excepturi";
                                            vpnTunnelUri = "sit";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "maiores";
                                            networkUri = "optio";
                                            region = "in";
                                            remoteGateway = "occaecati";
                                            remoteGatewayIp = "quis";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "quaerat";
                                            sourceGatewayIp = "culpa";
                                            uri = "minima";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "et";
                    }};
                    relatedProjects = new String[]() {{
                        add("pariatur"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "animi";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "perferendis";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "itaque";
                        }};
                        cloudSqlInstance = "et";
                        gkeMasterCluster = "ad";
                        instance = "sint";
                        ipAddress = "delectus";
                        network = "minima";
                        networkType = "GCP_NETWORK";
                        port = 6910585072079689916;
                        projectId = "aspernatur";
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