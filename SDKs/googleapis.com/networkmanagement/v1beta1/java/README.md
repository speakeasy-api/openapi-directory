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

import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConnectivityTestInput;
import org.openapis.openapi.models.shared.EndpointNetworkTypeEnum;
import org.openapis.openapi.models.shared.EndpointInput;
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
import org.openapis.openapi.models.shared.ProbingDetailsAbortCauseEnum;
import org.openapis.openapi.models.shared.ProbingDetailsResultEnum;
import org.openapis.openapi.models.shared.ProbingDetails;
import org.openapis.openapi.models.shared.LatencyDistribution;
import org.openapis.openapi.models.shared.LatencyPercentile;
import org.openapis.openapi.models.shared.EdgeLocation;
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
                    destination = new EndpointInput() {{
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
                        forwardingRule = "ipsa";
                        gkeMasterCluster = "delectus";
                        instance = "tempora";
                        ipAddress = "suscipit";
                        network = "molestiae";
                        networkType = "NON_GCP_NETWORK";
                        port = 812169;
                        projectId = "voluptatum";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "nisi");
                        put("recusandae", "temporibus");
                    }};
                    name = "ab";
                    probingDetails = new ProbingDetails() {{
                        abortCause = "PERMISSION_DENIED";
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "veritatis";
                        }};
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "deserunt";
                            destinationNetworkUri = "perferendis";
                            destinationPort = 368241;
                            protocol = "repellendus";
                            sourceAgentUri = "sapiente";
                            sourceIp = "quo";
                            sourceNetworkUri = "odit";
                            sourcePort = 870013;
                        }};
                        error = new Status() {{
                            code = 870088;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quod", "quod");
                                    put("esse", "totam");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }}),
                            }};
                            message = "ad";
                        }};
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new org.openapis.openapi.models.shared.LatencyPercentile[]{{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "sed";
                                    percent = 612096;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "dolor";
                                    percent = 616934;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "laboriosam";
                                    percent = 943749;
                                }}),
                            }};
                        }};
                        result = "UNDETERMINED";
                        sentProbeCount = 681820;
                        successfulProbeCount = 449950;
                        verifyTime = "corporis";
                    }};
                    protocol = "iste";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 437032;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("architecto", "ipsa");
                                    put("reiciendis", "est");
                                    put("mollitia", "laborum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("dolorem", "corporis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("nobis", "enim");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }}),
                            }};
                            message = "doloribus";
                        }};
                        result = "UNDETERMINED";
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "mollitia";
                                    destinationNetworkUri = "dolorem";
                                    destinationPort = 635059;
                                    protocol = "consequuntur";
                                    sourceAgentUri = "repellat";
                                    sourceIp = "mollitia";
                                    sourceNetworkUri = "occaecati";
                                    sourcePort = 253291;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]{{
                                                add("velit"),
                                                add("error"),
                                            }};
                                            resourceUri = "quia";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "quis";
                                            environment = "vitae";
                                            runtime = "laborum";
                                            uri = "https://frozen-catch.net";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "sequi";
                                            location = "tenetur";
                                            uri = "http://pushy-snuggle.com";
                                            versionId = "quasi";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "error";
                                            location = "temporibus";
                                            serviceName = "laborum";
                                            serviceUri = "quasi";
                                            uri = "https://witty-swim.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "praesentium";
                                            externalIp = "voluptatibus";
                                            internalIp = "ipsa";
                                            networkUri = "omnis";
                                            region = "voluptate";
                                            uri = "https://agile-arch-rival.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "ut";
                                            target = "SERVERLESS_NEG";
                                        }};
                                        description = "dicta";
                                        drop = new DropInfo() {{
                                            cause = "FORWARDING_RULE_NO_INSTANCES";
                                            resourceUri = "dolore";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "iusto";
                                            destinationNetworkUri = "dicta";
                                            destinationPort = 688661;
                                            protocol = "enim";
                                            sourceAgentUri = "accusamus";
                                            sourceIp = "commodi";
                                            sourceNetworkUri = "repudiandae";
                                            sourcePort = 64147;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "ipsum";
                                            direction = "quidem";
                                            displayName = "molestias";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "pariatur";
                                            policy = "modi";
                                            priority = 508969;
                                            targetServiceAccounts = new String[]{{
                                                add("voluptates"),
                                                add("quasi"),
                                                add("repudiandae"),
                                            }};
                                            targetTags = new String[]{{
                                                add("veritatis"),
                                                add("itaque"),
                                                add("incidunt"),
                                            }};
                                            uri = "http://acrobatic-plantation.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "explicabo";
                                            target = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "distinctio";
                                            matchedPortRange = "quibusdam";
                                            matchedProtocol = "labore";
                                            networkUri = "modi";
                                            target = "qui";
                                            uri = "http://offensive-melody.com";
                                            vip = "magni";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "assumenda";
                                            clusterUri = "ipsam";
                                            externalIp = "alias";
                                            internalIp = "fugit";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "dolorum";
                                            externalIp = "excepturi";
                                            interface_ = "tempora";
                                            internalIp = "facilis";
                                            networkTags = new String[]{{
                                                add("labore"),
                                                add("delectus"),
                                                add("eum"),
                                            }};
                                            networkUri = "non";
                                            serviceAccount = "eligendi";
                                            uri = "https://humming-networking.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_POOL";
                                            backendUri = "officia";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "debitis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("dolorum"),
                                                        add("in"),
                                                        add("in"),
                                                        add("illum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("rerum"),
                                                        add("dicta"),
                                                        add("magnam"),
                                                        add("cumque"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://humming-police.org";
                                                }}),
                                            }};
                                            healthCheckUri = "non";
                                            loadBalancerType = "HTTP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "enim";
                                            matchedIpRange = "accusamus";
                                            uri = "https://repentant-nectar.net";
                                        }};
                                        projectId = "id";
                                        route = new RouteInfo() {{
                                            destIpRange = "blanditiis";
                                            destPortRanges = new String[]{{
                                                add("sapiente"),
                                                add("amet"),
                                                add("deserunt"),
                                            }};
                                            displayName = "nisi";
                                            instanceTags = new String[]{{
                                                add("natus"),
                                                add("omnis"),
                                            }};
                                            networkUri = "molestiae";
                                            nextHop = "perferendis";
                                            nextHopType = "NEXT_HOP_INTERCONNECT";
                                            priority = 301575;
                                            protocols = new String[]{{
                                                add("id"),
                                                add("labore"),
                                                add("labore"),
                                            }};
                                            routeType = "DYNAMIC";
                                            srcIpRange = "natus";
                                            srcPortRanges = new String[]{{
                                                add("eum"),
                                                add("vero"),
                                                add("aspernatur"),
                                            }};
                                            uri = "http://foolhardy-bolero.name";
                                        }};
                                        state = "APPLY_INGRESS_FIREWALL_RULE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "provident";
                                            location = "quos";
                                            uri = "https://angelic-pharmacist.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "mollitia";
                                            ipAddress = "ad";
                                            networkUri = "eum";
                                            region = "dolor";
                                            uri = "https://conventional-frequency.com";
                                            vpnTunnelUri = "iure";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "doloribus";
                                            networkUri = "debitis";
                                            region = "eius";
                                            remoteGateway = "maxime";
                                            remoteGatewayIp = "deleniti";
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "in";
                                            sourceGatewayIp = "architecto";
                                            uri = "http://vacant-flexibility.net";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNINTENDED_DESTINATION";
                                            projectsMissingPermission = new String[]{{
                                                add("quibusdam"),
                                                add("sed"),
                                                add("saepe"),
                                                add("pariatur"),
                                            }};
                                            resourceUri = "accusantium";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "consequuntur";
                                            environment = "praesentium";
                                            runtime = "natus";
                                            uri = "http://cloudy-screwdriver.org";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "pariatur";
                                            location = "maxime";
                                            uri = "http://nimble-caution.info";
                                            versionId = "accusantium";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ab";
                                            location = "maiores";
                                            serviceName = "quidem";
                                            serviceUri = "ipsam";
                                            uri = "http://impolite-rat.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "pariatur";
                                            externalIp = "nemo";
                                            internalIp = "voluptatibus";
                                            networkUri = "perferendis";
                                            region = "fugiat";
                                            uri = "http://adept-sailing.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "hic";
                                            target = "PSC_GOOGLE_API";
                                        }};
                                        description = "nobis";
                                        drop = new DropInfo() {{
                                            cause = "ROUTE_WRONG_NETWORK";
                                            resourceUri = "quis";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "totam";
                                            destinationNetworkUri = "dignissimos";
                                            destinationPort = 54338;
                                            protocol = "quis";
                                            sourceAgentUri = "nesciunt";
                                            sourceIp = "eos";
                                            sourceNetworkUri = "perferendis";
                                            sourcePort = 170986;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "minus";
                                            direction = "quam";
                                            displayName = "dolor";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "nostrum";
                                            policy = "hic";
                                            priority = 928082;
                                            targetServiceAccounts = new String[]{{
                                                add("facilis"),
                                                add("perspiciatis"),
                                                add("voluptatem"),
                                            }};
                                            targetTags = new String[]{{
                                                add("consequuntur"),
                                                add("blanditiis"),
                                                add("error"),
                                                add("eaque"),
                                            }};
                                            uri = "https://right-damage.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "earum";
                                            target = "VPN_GATEWAY";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "iste";
                                            matchedPortRange = "dolorum";
                                            matchedProtocol = "deleniti";
                                            networkUri = "pariatur";
                                            target = "provident";
                                            uri = "https://secret-wafer.biz";
                                            vip = "quos";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "aliquid";
                                            clusterUri = "dolorem";
                                            externalIp = "dolorem";
                                            internalIp = "dolor";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "qui";
                                            externalIp = "ipsum";
                                            interface_ = "hic";
                                            internalIp = "excepturi";
                                            networkTags = new String[]{{
                                                add("voluptate"),
                                                add("dignissimos"),
                                                add("reiciendis"),
                                            }};
                                            networkUri = "amet";
                                            serviceAccount = "dolorum";
                                            uri = "http://both-background.com";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "odio";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "accusamus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                        add("natus"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("atque"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
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
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://jolly-pint.org";
                                                }}),
                                            }};
                                            healthCheckUri = "eius";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
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
                                            nextHopType = "NEXT_HOP_INTERCONNECT";
                                            priority = 798047;
                                            protocols = new String[]{{
                                                add("qui"),
                                                add("dolorum"),
                                                add("a"),
                                                add("esse"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "iusto";
                                            srcPortRanges = new String[]{{
                                                add("quisquam"),
                                            }};
                                            uri = "https://elliptical-rediscovery.org";
                                        }};
                                        state = "START_FROM_CLOUD_FUNCTION";
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
                                            routingType = "POLICY_BASED";
                                            sourceGateway = "dicta";
                                            sourceGatewayIp = "laborum";
                                            uri = "https://feisty-carnival.biz";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "distinctio";
                    }};
                    relatedProjects = new String[]{{
                        add("aliquid"),
                        add("quam"),
                        add("molestias"),
                    }};
                    source = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://delightful-cook.com";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://likely-camper.info";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://warlike-ankle.net";
                        }};
                        cloudSqlInstance = "soluta";
                        forwardingRule = "nobis";
                        gkeMasterCluster = "et";
                        instance = "saepe";
                        ipAddress = "ipsum";
                        network = "veritatis";
                        networkType = "NON_GCP_NETWORK";
                        port = 552193;
                        projectId = "tempore";
                    }};
                }};
                accessToken = "cupiditate";
                alt = "json";
                callback = "delectus";
                fields = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                parent = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorum";
                testId = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
* `networkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
