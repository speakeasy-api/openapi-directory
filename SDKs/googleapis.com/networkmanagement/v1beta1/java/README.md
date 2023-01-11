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
                    parent = "sit";
                }};
                queryParams = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    testId = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new ConnectivityTestInput() {{
                    description = "debitis";
                    destination = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "voluptatum";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "et";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "ut";
                        }};
                        cloudSqlInstance = "dolorem";
                        gkeMasterCluster = "et";
                        instance = "voluptate";
                        ipAddress = "iste";
                        network = "vitae";
                        networkType = "NON_GCP_NETWORK";
                        port = 2217592893536642650;
                        projectId = "illum";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "odio");
                    }};
                    name = "dolore";
                    probingDetails = new ProbingDetails() {{
                        abortCause = "PERMISSION_DENIED";
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "aspernatur";
                        }};
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "accusantium";
                            destinationNetworkUri = "totam";
                            destinationPort = 6745438398739480977;
                            protocol = "quis";
                            sourceAgentUri = "est";
                            sourceIp = "aut";
                            sourceNetworkUri = "odit";
                            sourcePort = 5001958211167890979;
                        }};
                        error = new Status() {{
                            code = 167566062957544642;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("illo", "sed");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("autem", "consectetur");
                                    put("nobis", "odio");
                                }}),
                            }};
                            message = "qui";
                        }};
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new openapisdk.models.shared.LatencyPercentile[]() {{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "at";
                                    percent = 3959279844101328186;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "eveniet";
                                    percent = 303089054982227392;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "sint";
                                    percent = 5392504858645185670;
                                }}),
                            }};
                        }};
                        result = "UNDETERMINED";
                        sentProbeCount = 406703151708498928;
                        successfulProbeCount = 4756106358532488297;
                        verifyTime = "reprehenderit";
                    }};
                    protocol = "tempore";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 2264299874001785192;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("beatae", "veritatis");
                                    put("in", "et");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "ex");
                                    put("dolores", "placeat");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("rerum", "mollitia");
                                    put("voluptas", "quam");
                                }}),
                            }};
                            message = "reprehenderit";
                        }};
                        result = "UNDETERMINED";
                        traces = new openapisdk.models.shared.Trace[]() {{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "unde";
                                    destinationNetworkUri = "in";
                                    destinationPort = 7132033595893905170;
                                    protocol = "qui";
                                    sourceAgentUri = "ut";
                                    sourceIp = "itaque";
                                    sourceNetworkUri = "ab";
                                    sourcePort = 8218430188258725598;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]() {{
                                                add("esse"),
                                                add("architecto"),
                                                add("quam"),
                                            }};
                                            resourceUri = "velit";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "cumque";
                                            environment = "soluta";
                                            runtime = "sunt";
                                            uri = "voluptates";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "et";
                                            location = "optio";
                                            uri = "qui";
                                            versionId = "earum";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "illo";
                                            location = "omnis";
                                            serviceName = "ut";
                                            serviceUri = "consequatur";
                                            uri = "dolor";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "commodi";
                                            externalIp = "error";
                                            internalIp = "reprehenderit";
                                            networkUri = "consectetur";
                                            region = "nostrum";
                                            uri = "ut";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "laboriosam";
                                            target = "INTERNET";
                                        }};
                                        description = "a";
                                        drop = new DropInfo() {{
                                            cause = "TRAFFIC_TYPE_BLOCKED";
                                            resourceUri = "aut";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "quas";
                                            destinationNetworkUri = "consequuntur";
                                            destinationPort = 6521671820626549617;
                                            protocol = "autem";
                                            sourceAgentUri = "ipsa";
                                            sourceIp = "expedita";
                                            sourceNetworkUri = "doloremque";
                                            sourcePort = 4234137922270959652;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "atque";
                                            direction = "ratione";
                                            displayName = "quisquam";
                                            firewallRuleType = "VPC_FIREWALL_RULE";
                                            networkUri = "ea";
                                            policy = "maxime";
                                            priority = 8392001091488039958;
                                            targetServiceAccounts = new String[]() {{
                                                add("et"),
                                                add("rerum"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("quis"),
                                                add("cumque"),
                                                add("minima"),
                                            }};
                                            uri = "necessitatibus";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "est";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "eum";
                                            matchedPortRange = "labore";
                                            matchedProtocol = "et";
                                            networkUri = "impedit";
                                            target = "ad";
                                            uri = "expedita";
                                            vip = "vel";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "qui";
                                            clusterUri = "modi";
                                            externalIp = "nihil";
                                            internalIp = "tempora";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "deserunt";
                                            externalIp = "eaque";
                                            interface_ = "sunt";
                                            internalIp = "sit";
                                            networkTags = new String[]() {{
                                                add("quis"),
                                            }};
                                            networkUri = "vel";
                                            serviceAccount = "vel";
                                            uri = "placeat";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "nisi";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "adipisci";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("rerum"),
                                                        add("et"),
                                                        add("accusamus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("laborum"),
                                                        add("rerum"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "laborum";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "fugit";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("minus"),
                                                        add("soluta"),
                                                        add("aperiam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("excepturi"),
                                                        add("mollitia"),
                                                        add("inventore"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "ipsa";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "animi";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("ut"),
                                                        add("aliquam"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("sed"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "et";
                                                }}),
                                            }};
                                            healthCheckUri = "consequuntur";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "cupiditate";
                                            matchedIpRange = "provident";
                                            uri = "molestiae";
                                        }};
                                        projectId = "pariatur";
                                        route = new RouteInfo() {{
                                            destIpRange = "quasi";
                                            destPortRanges = new String[]() {{
                                                add("enim"),
                                                add("qui"),
                                                add("sit"),
                                            }};
                                            displayName = "possimus";
                                            instanceTags = new String[]() {{
                                                add("neque"),
                                                add("consequuntur"),
                                            }};
                                            networkUri = "quia";
                                            nextHop = "et";
                                            nextHopType = "NEXT_HOP_TYPE_UNSPECIFIED";
                                            priority = 6028661030721431741;
                                            protocols = new String[]() {{
                                                add("voluptatem"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "temporibus";
                                            srcPortRanges = new String[]() {{
                                                add("quae"),
                                            }};
                                            uri = "est";
                                        }};
                                        state = "VIEWER_PERMISSION_MISSING";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "necessitatibus";
                                            location = "in";
                                            uri = "possimus";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "voluptatem";
                                            ipAddress = "dolorum";
                                            networkUri = "doloribus";
                                            region = "saepe";
                                            uri = "sunt";
                                            vpnTunnelUri = "earum";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "et";
                                            networkUri = "ut";
                                            region = "asperiores";
                                            remoteGateway = "et";
                                            remoteGatewayIp = "est";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "quam";
                                            sourceGatewayIp = "voluptas";
                                            uri = "nihil";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "TRACE_TOO_LONG";
                                            projectsMissingPermission = new String[]() {{
                                                add("impedit"),
                                                add("non"),
                                            }};
                                            resourceUri = "magnam";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "ut";
                                            environment = "possimus";
                                            runtime = "illo";
                                            uri = "qui";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "ipsam";
                                            location = "ducimus";
                                            uri = "enim";
                                            versionId = "blanditiis";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "distinctio";
                                            location = "delectus";
                                            serviceName = "rerum";
                                            serviceUri = "dolore";
                                            uri = "repellat";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "velit";
                                            externalIp = "officia";
                                            internalIp = "modi";
                                            networkUri = "sunt";
                                            region = "voluptas";
                                            uri = "amet";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "et";
                                            target = "PSC_PUBLISHED_SERVICE";
                                        }};
                                        description = "qui";
                                        drop = new DropInfo() {{
                                            cause = "PSC_CONNECTION_NOT_ACCEPTED";
                                            resourceUri = "autem";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "corporis";
                                            destinationNetworkUri = "dicta";
                                            destinationPort = 2561456965494580126;
                                            protocol = "doloremque";
                                            sourceAgentUri = "quae";
                                            sourceIp = "nisi";
                                            sourceNetworkUri = "recusandae";
                                            sourcePort = 7110471015351200494;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "minus";
                                            direction = "et";
                                            displayName = "rerum";
                                            firewallRuleType = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
                                            networkUri = "rem";
                                            policy = "eos";
                                            priority = 4110169879782881404;
                                            targetServiceAccounts = new String[]() {{
                                                add("aspernatur"),
                                                add("praesentium"),
                                                add("porro"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("adipisci"),
                                            }};
                                            uri = "consequatur";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "illum";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "atque";
                                            matchedPortRange = "amet";
                                            matchedProtocol = "nisi";
                                            networkUri = "quidem";
                                            target = "est";
                                            uri = "quo";
                                            vip = "vero";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "alias";
                                            clusterUri = "totam";
                                            externalIp = "deserunt";
                                            internalIp = "eius";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "repellat";
                                            externalIp = "beatae";
                                            interface_ = "omnis";
                                            internalIp = "totam";
                                            networkTags = new String[]() {{
                                                add("et"),
                                                add("magni"),
                                            }};
                                            networkUri = "necessitatibus";
                                            serviceAccount = "et";
                                            uri = "culpa";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "voluptas";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "veniam";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("molestias"),
                                                        add("rerum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("et"),
                                                        add("saepe"),
                                                        add("commodi"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "quibusdam";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "asperiores";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("ea"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("tempora"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "blanditiis";
                                                }}),
                                            }};
                                            healthCheckUri = "facere";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "et";
                                            matchedIpRange = "odit";
                                            uri = "est";
                                        }};
                                        projectId = "id";
                                        route = new RouteInfo() {{
                                            destIpRange = "ipsum";
                                            destPortRanges = new String[]() {{
                                                add("perspiciatis"),
                                            }};
                                            displayName = "et";
                                            instanceTags = new String[]() {{
                                                add("voluptatem"),
                                                add("ex"),
                                            }};
                                            networkUri = "magni";
                                            nextHop = "vero";
                                            nextHopType = "NEXT_HOP_TYPE_UNSPECIFIED";
                                            priority = 8141978658923475747;
                                            protocols = new String[]() {{
                                                add("non"),
                                                add("non"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "beatae";
                                            srcPortRanges = new String[]() {{
                                                add("qui"),
                                            }};
                                            uri = "magni";
                                        }};
                                        state = "DELIVER";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "sit";
                                            location = "aut";
                                            uri = "neque";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "iusto";
                                            ipAddress = "quia";
                                            networkUri = "repudiandae";
                                            region = "debitis";
                                            uri = "autem";
                                            vpnTunnelUri = "odit";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "enim";
                                            networkUri = "ut";
                                            region = "non";
                                            remoteGateway = "nihil";
                                            remoteGatewayIp = "laborum";
                                            routingType = "ROUTE_BASED";
                                            sourceGateway = "nihil";
                                            sourceGatewayIp = "exercitationem";
                                            uri = "iste";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_NETWORK";
                                            projectsMissingPermission = new String[]() {{
                                                add("autem"),
                                                add("hic"),
                                                add("voluptatem"),
                                            }};
                                            resourceUri = "omnis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "libero";
                                            environment = "qui";
                                            runtime = "omnis";
                                            uri = "minus";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "non";
                                            location = "sit";
                                            uri = "repellat";
                                            versionId = "quo";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "dolorum";
                                            location = "laboriosam";
                                            serviceName = "velit";
                                            serviceUri = "ea";
                                            uri = "tempore";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "fugit";
                                            externalIp = "aut";
                                            internalIp = "tempora";
                                            networkUri = "aliquid";
                                            region = "mollitia";
                                            uri = "non";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "magni";
                                            target = "INTERNET";
                                        }};
                                        description = "illum";
                                        drop = new DropInfo() {{
                                            cause = "FORWARDING_RULE_MISMATCH";
                                            resourceUri = "dolores";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "hic";
                                            destinationNetworkUri = "nihil";
                                            destinationPort = 1595294774483826936;
                                            protocol = "ex";
                                            sourceAgentUri = "iure";
                                            sourceIp = "et";
                                            sourceNetworkUri = "quos";
                                            sourcePort = 6531361177861028646;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "explicabo";
                                            direction = "necessitatibus";
                                            displayName = "veniam";
                                            firewallRuleType = "FIREWALL_RULE_TYPE_UNSPECIFIED";
                                            networkUri = "in";
                                            policy = "odit";
                                            priority = 2552826169751964368;
                                            targetServiceAccounts = new String[]() {{
                                                add("tenetur"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("similique"),
                                                add("mollitia"),
                                            }};
                                            uri = "id";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "laboriosam";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "maiores";
                                            matchedPortRange = "totam";
                                            matchedProtocol = "iusto";
                                            networkUri = "aperiam";
                                            target = "repellendus";
                                            uri = "sunt";
                                            vip = "eum";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "earum";
                                            clusterUri = "et";
                                            externalIp = "officia";
                                            internalIp = "aut";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "dolor";
                                            externalIp = "quia";
                                            interface_ = "quaerat";
                                            internalIp = "ea";
                                            networkTags = new String[]() {{
                                                add("expedita"),
                                                add("recusandae"),
                                                add("qui"),
                                            }};
                                            networkUri = "qui";
                                            serviceAccount = "aut";
                                            uri = "explicabo";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "temporibus";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "sed";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("vel"),
                                                        add("fugiat"),
                                                        add("nesciunt"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("qui"),
                                                        add("quis"),
                                                        add("eligendi"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "fuga";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "aliquid";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("aut"),
                                                        add("et"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("sunt"),
                                                        add("quae"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "vitae";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "rerum";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("commodi"),
                                                        add("sed"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("enim"),
                                                        add("eos"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "cum";
                                                }}),
                                            }};
                                            healthCheckUri = "sint";
                                            loadBalancerType = "TCP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "eaque";
                                            matchedIpRange = "facilis";
                                            uri = "et";
                                        }};
                                        projectId = "ut";
                                        route = new RouteInfo() {{
                                            destIpRange = "et";
                                            destPortRanges = new String[]() {{
                                                add("sit"),
                                            }};
                                            displayName = "voluptate";
                                            instanceTags = new String[]() {{
                                                add("consequuntur"),
                                                add("et"),
                                                add("amet"),
                                            }};
                                            networkUri = "distinctio";
                                            nextHop = "in";
                                            nextHopType = "NEXT_HOP_NETWORK";
                                            priority = 3636785156313008209;
                                            protocols = new String[]() {{
                                                add("et"),
                                                add("consequatur"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "sunt";
                                            srcPortRanges = new String[]() {{
                                                add("quam"),
                                                add("repellendus"),
                                                add("dolores"),
                                            }};
                                            uri = "nihil";
                                        }};
                                        state = "NAT";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "architecto";
                                            location = "architecto";
                                            uri = "beatae";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "consequatur";
                                            ipAddress = "veniam";
                                            networkUri = "hic";
                                            region = "beatae";
                                            uri = "veritatis";
                                            vpnTunnelUri = "architecto";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "voluptas";
                                            networkUri = "voluptatibus";
                                            region = "maiores";
                                            remoteGateway = "consectetur";
                                            remoteGatewayIp = "modi";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "praesentium";
                                            sourceGatewayIp = "itaque";
                                            uri = "ipsum";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "natus";
                    }};
                    relatedProjects = new String[]() {{
                        add("nesciunt"),
                        add("nostrum"),
                        add("quod"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "repudiandae";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "eius";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "totam";
                        }};
                        cloudSqlInstance = "amet";
                        gkeMasterCluster = "blanditiis";
                        instance = "unde";
                        ipAddress = "nihil";
                        network = "asperiores";
                        networkType = "GCP_NETWORK";
                        port = 2015984567592718565;
                        projectId = "quo";
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
