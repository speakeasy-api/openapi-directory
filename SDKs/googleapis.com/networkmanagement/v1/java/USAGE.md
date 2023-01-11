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
                    protocol = "id";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 959367522974354090;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("commodi", "quis");
                                    put("est", "aut");
                                    put("odit", "non");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("omnis", "aut");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("sed", "officiis");
                                }}),
                            }};
                            message = "autem";
                        }};
                        result = "AMBIGUOUS";
                        traces = new openapisdk.models.shared.Trace[]() {{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "odio";
                                    destinationNetworkUri = "qui";
                                    destinationPort = 388440063886460141;
                                    protocol = "at";
                                    sourceIp = "ipsum";
                                    sourceNetworkUri = "eveniet";
                                    sourcePort = 303089054982227392;
                                }};
                                steps = new openapisdk.models.shared.Step[]() {{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_PROJECT";
                                            projectsMissingPermission = new String[]() {{
                                                add("exercitationem"),
                                                add("aut"),
                                                add("reprehenderit"),
                                            }};
                                            resourceUri = "tempore";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "maiores";
                                            environment = "incidunt";
                                            runtime = "dolor";
                                            uri = "beatae";
                                        }};
                                        causesDrop = true;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "in";
                                            location = "et";
                                            uri = "omnis";
                                            versionId = "ipsum";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ex";
                                            location = "dolores";
                                            serviceUri = "placeat";
                                            uri = "vel";
                                        }};
                                        cloudSqlInstance = new CloudSqlInstanceInfo() {{
                                            displayName = "rerum";
                                            externalIp = "mollitia";
                                            internalIp = "voluptas";
                                            networkUri = "quam";
                                            region = "reprehenderit";
                                            uri = "qui";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "qui";
                                            target = "INTERNET";
                                        }};
                                        description = "in";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC";
                                            resourceUri = "qui";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "ut";
                                            destinationNetworkUri = "itaque";
                                            destinationPort = 2006924026344156168;
                                            protocol = "neque";
                                            sourceIp = "ullam";
                                            sourceNetworkUri = "et";
                                            sourcePort = 4304520335772049496;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "esse";
                                            direction = "architecto";
                                            displayName = "quam";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "cumque";
                                            policy = "soluta";
                                            priority = 759605945513541974;
                                            targetServiceAccounts = new String[]() {{
                                                add("magni"),
                                                add("et"),
                                            }};
                                            targetTags = new String[]() {{
                                                add("qui"),
                                                add("earum"),
                                                add("illo"),
                                            }};
                                            uri = "omnis";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ut";
                                            target = "CLOUD_SQL_INSTANCE";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "dolor";
                                            matchedPortRange = "commodi";
                                            matchedProtocol = "error";
                                            networkUri = "reprehenderit";
                                            target = "consectetur";
                                            uri = "nostrum";
                                            vip = "ut";
                                        }};
                                        gkeMaster = new GkeMasterInfo() {{
                                            clusterNetworkUri = "laboriosam";
                                            clusterUri = "sed";
                                            externalIp = "a";
                                            internalIp = "soluta";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "aut";
                                            externalIp = "quas";
                                            interface_ = "consequuntur";
                                            internalIp = "laudantium";
                                            networkTags = new String[]() {{
                                                add("ipsa"),
                                            }};
                                            networkUri = "expedita";
                                            serviceAccount = "doloremque";
                                            uri = "perferendis";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "ratione";
                                            backends = new openapisdk.models.shared.LoadBalancerBackend[]() {{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "explicabo";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("maxime"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("perferendis"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "rerum";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "reiciendis";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("cumque"),
                                                        add("minima"),
                                                        add("necessitatibus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("quis"),
                                                        add("eum"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "et";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "impedit";
                                                    healthCheckAllowingFirewallRules = new String[]() {{
                                                        add("expedita"),
                                                        add("vel"),
                                                        add("qui"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]() {{
                                                        add("nihil"),
                                                        add("tempora"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "eaque";
                                                }}),
                                            }};
                                            healthCheckUri = "sunt";
                                            loadBalancerType = "TCP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "autem";
                                            matchedIpRange = "quis";
                                            uri = "vel";
                                        }};
                                        projectId = "vel";
                                        route = new RouteInfo() {{
                                            destIpRange = "placeat";
                                            destPortRanges = new String[]() {{
                                                add("nisi"),
                                            }};
                                            displayName = "quis";
                                            instanceTags = new String[]() {{
                                                add("porro"),
                                                add("rerum"),
                                            }};
                                            networkUri = "et";
                                            nextHop = "accusamus";
                                            nextHopType = "NEXT_HOP_ILB";
                                            priority = 2223751782546645906;
                                            protocols = new String[]() {{
                                                add("ut"),
                                                add("laborum"),
                                                add("fugit"),
                                            }};
                                            routeType = "DYNAMIC";
                                            srcIpRange = "minus";
                                            srcPortRanges = new String[]() {{
                                                add("aperiam"),
                                            }};
                                            uri = "consequuntur";
                                        }};
                                        state = "APPLY_FORWARDING_RULE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "mollitia";
                                            location = "inventore";
                                            uri = "delectus";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "ipsa";
                                            ipAddress = "animi";
                                            networkUri = "animi";
                                            region = "ut";
                                            uri = "aliquam";
                                            vpnTunnelUri = "fuga";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "sed";
                                            networkUri = "sed";
                                            region = "et";
                                            remoteGateway = "consequuntur";
                                            remoteGatewayIp = "non";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "provident";
                                            sourceGatewayIp = "molestiae";
                                            uri = "pariatur";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "quasi";
                    }};
                    relatedProjects = new String[]() {{
                        add("enim"),
                        add("qui"),
                        add("sit"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "possimus";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "modi";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "neque";
                        }};
                        cloudSqlInstance = "consequuntur";
                        gkeMasterCluster = "quia";
                        instance = "et";
                        ipAddress = "est";
                        network = "occaecati";
                        networkType = "NETWORK_TYPE_UNSPECIFIED";
                        port = 4932993544835283753;
                        projectId = "quia";
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