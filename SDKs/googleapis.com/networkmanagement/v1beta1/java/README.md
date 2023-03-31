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
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
import org.openapis.openapi.models.operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
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
                    destination = new EndpointInput() {{
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
                        forwardingRule = "recusandae";
                        gkeMasterCluster = "temporibus";
                        instance = "ab";
                        ipAddress = "quis";
                        network = "veritatis";
                        networkType = "GCP_NETWORK";
                        port = 20218;
                        projectId = "ipsam";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "quo");
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                    }};
                    name = "quod";
                    probingDetails = new ProbingDetails() {{
                        abortCause = "PERMISSION_DENIED";
                        destinationEgressLocation = new EdgeLocation() {{
                            metropolitanArea = "totam";
                        }};
                        endpointInfo = new EndpointInfo() {{
                            destinationIp = "porro";
                            destinationNetworkUri = "dolorum";
                            destinationPort = 118274;
                            protocol = "nam";
                            sourceAgentUri = "officia";
                            sourceIp = "occaecati";
                            sourceNetworkUri = "fugit";
                            sourcePort = 537373;
                        }};
                        error = new Status() {{
                            code = 944669;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("esse", "ipsum");
                                    put("excepturi", "aspernatur");
                                    put("perferendis", "ad");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }}),
                            }};
                            message = "ipsa";
                        }};
                        probingLatency = new LatencyDistribution() {{
                            latencyPercentiles = new org.openapis.openapi.models.shared.LatencyPercentile[]{{
                                add(new LatencyPercentile() {{
                                    latencyMicros = "est";
                                    percent = 653140;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "laborum";
                                    percent = 170909;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "dolorem";
                                    percent = 358152;
                                }}),
                                add(new LatencyPercentile() {{
                                    latencyMicros = "explicabo";
                                    percent = 750686;
                                }}),
                            }};
                        }};
                        result = "REACHABLE";
                        sentProbeCount = 607831;
                        successfulProbeCount = 363711;
                        verifyTime = "minima";
                    }};
                    protocol = "excepturi";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 38425;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("doloribus", "sapiente");
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("repellat", "mollitia");
                                }}),
                            }};
                            message = "occaecati";
                        }};
                        result = "REACHABLE";
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "quam";
                                    destinationNetworkUri = "molestiae";
                                    destinationPort = 244425;
                                    protocol = "error";
                                    sourceAgentUri = "quia";
                                    sourceIp = "quis";
                                    sourceNetworkUri = "vitae";
                                    sourcePort = 674752;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "NO_SOURCE_LOCATION";
                                            projectsMissingPermission = new String[]{{
                                                add("quo"),
                                            }};
                                            resourceUri = "sequi";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "tenetur";
                                            environment = "ipsam";
                                            runtime = "id";
                                            uri = "https://adolescent-borrower.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "temporibus";
                                            location = "laborum";
                                            uri = "http://wilted-weight.org";
                                            versionId = "nihil";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "praesentium";
                                            location = "voluptatibus";
                                            serviceName = "ipsa";
                                            serviceUri = "omnis";
                                            uri = "http://shadowy-alfalfa.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "reprehenderit";
                                            externalIp = "ut";
                                            internalIp = "maiores";
                                            networkUri = "dicta";
                                            region = "corporis";
                                            uri = "http://lazy-butterfly.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "enim";
                                            target = "PSC_VPC_SC";
                                        }};
                                        description = "commodi";
                                        drop = new DropInfo() {{
                                            cause = "VPC_CONNECTOR_NOT_RUNNING";
                                            resourceUri = "quae";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "ipsum";
                                            destinationNetworkUri = "quidem";
                                            destinationPort = 565189;
                                            protocol = "excepturi";
                                            sourceAgentUri = "pariatur";
                                            sourceIp = "modi";
                                            sourceNetworkUri = "praesentium";
                                            sourcePort = 523248;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "voluptates";
                                            direction = "quasi";
                                            displayName = "repudiandae";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "veritatis";
                                            policy = "itaque";
                                            priority = 277718;
                                            targetServiceAccounts = new String[]{{
                                                add("consequatur"),
                                                add("est"),
                                            }};
                                            targetTags = new String[]{{
                                                add("explicabo"),
                                                add("deserunt"),
                                                add("distinctio"),
                                                add("quibusdam"),
                                            }};
                                            uri = "http://familiar-combination.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "cupiditate";
                                            target = "GKE_MASTER";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "perferendis";
                                            matchedPortRange = "magni";
                                            matchedProtocol = "assumenda";
                                            networkUri = "ipsam";
                                            target = "alias";
                                            uri = "http://rapid-moat.biz";
                                            vip = "facilis";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "tempore";
                                            clusterUri = "labore";
                                            externalIp = "delectus";
                                            internalIp = "eum";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "non";
                                            externalIp = "eligendi";
                                            interface_ = "sint";
                                            internalIp = "aliquid";
                                            networkTags = new String[]{{
                                                add("necessitatibus"),
                                                add("sint"),
                                                add("officia"),
                                            }};
                                            networkUri = "dolor";
                                            serviceAccount = "debitis";
                                            uri = "https://raw-icing.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "maiores";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "dicta";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("cumque"),
                                                        add("facere"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("aliquid"),
                                                        add("laborum"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://oblong-epoxy.org";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "delectus";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("provident"),
                                                        add("nam"),
                                                        add("id"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("deleniti"),
                                                        add("sapiente"),
                                                        add("amet"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://impressive-outfit.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "molestiae";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("nihil"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("distinctio"),
                                                        add("id"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://hideous-ottoman.net";
                                                }}),
                                            }};
                                            healthCheckUri = "eum";
                                            loadBalancerType = "SSL_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "aspernatur";
                                            matchedIpRange = "architecto";
                                            uri = "http://brisk-mobile.info";
                                        }};
                                        projectId = "provident";
                                        route = new RouteInfo() {{
                                            destIpRange = "quos";
                                            destPortRanges = new String[]{{
                                                add("accusantium"),
                                                add("mollitia"),
                                                add("reiciendis"),
                                            }};
                                            displayName = "mollitia";
                                            instanceTags = new String[]{{
                                                add("eum"),
                                                add("dolor"),
                                            }};
                                            networkUri = "necessitatibus";
                                            nextHop = "odit";
                                            nextHopType = "NEXT_HOP_PEERING";
                                            priority = 97260;
                                            protocols = new String[]{{
                                                add("doloribus"),
                                                add("debitis"),
                                            }};
                                            routeType = "STATIC";
                                            srcIpRange = "maxime";
                                            srcPortRanges = new String[]{{
                                                add("facilis"),
                                                add("in"),
                                                add("architecto"),
                                            }};
                                            uri = "http://vacant-flexibility.net";
                                        }};
                                        state = "APPLY_FORWARDING_RULE";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "repellat";
                                            location = "quibusdam";
                                            uri = "http://untimely-suicide.com";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "consequuntur";
                                            ipAddress = "praesentium";
                                            networkUri = "natus";
                                            region = "magni";
                                            uri = "http://sore-statin.org";
                                            vpnTunnelUri = "maxime";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "ea";
                                            networkUri = "excepturi";
                                            region = "odit";
                                            remoteGateway = "ea";
                                            remoteGatewayIp = "accusantium";
                                            routingType = "ROUTING_TYPE_UNSPECIFIED";
                                            sourceGateway = "maiores";
                                            sourceGatewayIp = "quidem";
                                            uri = "http://jealous-hearing.net";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "CAUSE_UNSPECIFIED";
                                            projectsMissingPermission = new String[]{{
                                                add("nemo"),
                                                add("voluptatibus"),
                                                add("perferendis"),
                                                add("fugiat"),
                                            }};
                                            resourceUri = "amet";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "aut";
                                            environment = "cumque";
                                            runtime = "corporis";
                                            uri = "https://secret-rhinoceros.biz";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "quis";
                                            location = "totam";
                                            uri = "http://avaricious-feed.biz";
                                            versionId = "eos";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "perferendis";
                                            location = "dolores";
                                            serviceName = "minus";
                                            serviceUri = "quam";
                                            uri = "http://trusty-filter.org";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "recusandae";
                                            externalIp = "omnis";
                                            internalIp = "facilis";
                                            networkUri = "perspiciatis";
                                            region = "voluptatem";
                                            uri = "https://damp-laryngitis.name";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "eaque";
                                            target = "CLOUD_SQL_INSTANCE";
                                        }};
                                        description = "rerum";
                                        drop = new DropInfo() {{
                                            cause = "NO_EXTERNAL_ADDRESS";
                                            resourceUri = "asperiores";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "earum";
                                            destinationNetworkUri = "modi";
                                            destinationPort = 613966;
                                            protocol = "dolorum";
                                            sourceAgentUri = "deleniti";
                                            sourceIp = "pariatur";
                                            sourceNetworkUri = "provident";
                                            sourcePort = 750844;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "libero";
                                            direction = "delectus";
                                            displayName = "quaerat";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "aliquid";
                                            policy = "dolorem";
                                            priority = 209843;
                                            targetServiceAccounts = new String[]{{
                                                add("qui"),
                                            }};
                                            targetTags = new String[]{{
                                                add("hic"),
                                            }};
                                            uri = "https://shady-import.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "reiciendis";
                                            target = "PEERING_VPC";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "dolorum";
                                            matchedPortRange = "numquam";
                                            matchedProtocol = "veritatis";
                                            networkUri = "ipsa";
                                            target = "ipsa";
                                            uri = "http://likely-epauliere.org";
                                            vip = "quidem";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "voluptatibus";
                                            clusterUri = "voluptas";
                                            externalIp = "natus";
                                            internalIp = "eos";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "atque";
                                            externalIp = "sit";
                                            interface_ = "fugiat";
                                            internalIp = "ab";
                                            networkTags = new String[]{{
                                                add("dolorum"),
                                                add("iusto"),
                                                add("voluptate"),
                                            }};
                                            networkUri = "dolorum";
                                            serviceAccount = "deleniti";
                                            uri = "https://unlucky-quotation.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "ipsum";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "id";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("eius"),
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                        add("amet"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("accusamus"),
                                                        add("ad"),
                                                        add("saepe"),
                                                        add("suscipit"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://gaseous-spank.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "similique";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("at"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("tempora"),
                                                        add("vel"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "https://dense-porcupine.org";
                                                }}),
                                            }};
                                            healthCheckUri = "esse";
                                            loadBalancerType = "TCP_PROXY";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "iusto";
                                            matchedIpRange = "ipsum";
                                            uri = "https://wavy-cuisine.net";
                                        }};
                                        projectId = "accusamus";
                                        route = new RouteInfo() {{
                                            destIpRange = "numquam";
                                            destPortRanges = new String[]{{
                                                add("dolorem"),
                                                add("sapiente"),
                                            }};
                                            displayName = "totam";
                                            instanceTags = new String[]{{
                                                add("sit"),
                                                add("expedita"),
                                            }};
                                            networkUri = "neque";
                                            nextHop = "sed";
                                            nextHopType = "NEXT_HOP_INTERCONNECT";
                                            priority = 730442;
                                            protocols = new String[]{{
                                                add("deserunt"),
                                                add("quam"),
                                            }};
                                            routeType = "SUBNET";
                                            srcIpRange = "incidunt";
                                            srcPortRanges = new String[]{{
                                                add("cupiditate"),
                                            }};
                                            uri = "https://tough-reunion.com";
                                        }};
                                        state = "ARRIVE_AT_VPN_TUNNEL";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "totam";
                                            location = "incidunt";
                                            uri = "http://decisive-radiosonde.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "aliquid";
                                            ipAddress = "quam";
                                            networkUri = "molestias";
                                            region = "temporibus";
                                            uri = "http://dirty-chain.com";
                                            vpnTunnelUri = "odio";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "sunt";
                                            networkUri = "ullam";
                                            region = "nam";
                                            remoteGateway = "hic";
                                            remoteGatewayIp = "voluptatem";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "soluta";
                                            sourceGatewayIp = "nobis";
                                            uri = "http://untidy-cradle.com";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "DESTINATION_ENDPOINT_NOT_FOUND";
                                            projectsMissingPermission = new String[]{{
                                                add("tempore"),
                                                add("cupiditate"),
                                                add("aperiam"),
                                            }};
                                            resourceUri = "delectus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "dolorem";
                                            environment = "dolore";
                                            runtime = "labore";
                                            uri = "http://ragged-bowler.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "aut";
                                            location = "quas";
                                            uri = "https://acrobatic-plea.net";
                                            versionId = "porro";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "doloribus";
                                            location = "ut";
                                            serviceName = "facilis";
                                            serviceUri = "cupiditate";
                                            uri = "http://beautiful-lifetime.info";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "occaecati";
                                            externalIp = "voluptatibus";
                                            internalIp = "quisquam";
                                            networkUri = "vero";
                                            region = "omnis";
                                            uri = "http://eager-vivo.info";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "consectetur";
                                            target = "PSC_VPC_SC";
                                        }};
                                        description = "tenetur";
                                        drop = new DropInfo() {{
                                            cause = "TRAFFIC_TYPE_BLOCKED";
                                            resourceUri = "hic";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "distinctio";
                                            destinationNetworkUri = "quod";
                                            destinationPort = 486160;
                                            protocol = "similique";
                                            sourceAgentUri = "facilis";
                                            sourceIp = "vero";
                                            sourceNetworkUri = "ducimus";
                                            sourcePort = 293020;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quibusdam";
                                            direction = "illum";
                                            displayName = "sequi";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "impedit";
                                            policy = "aut";
                                            priority = 974259;
                                            targetServiceAccounts = new String[]{{
                                                add("nulla"),
                                                add("fugit"),
                                            }};
                                            targetTags = new String[]{{
                                                add("maiores"),
                                                add("doloribus"),
                                                add("iusto"),
                                                add("eligendi"),
                                            }};
                                            uri = "http://academic-path.biz";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "ipsam";
                                            target = "INTERCONNECT";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "aspernatur";
                                            matchedPortRange = "vel";
                                            matchedProtocol = "possimus";
                                            networkUri = "magnam";
                                            target = "ratione";
                                            uri = "http://mad-caboose.biz";
                                            vip = "maiores";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "quasi";
                                            clusterUri = "ex";
                                            externalIp = "nulla";
                                            internalIp = "excepturi";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "voluptatibus";
                                            externalIp = "nostrum";
                                            interface_ = "sapiente";
                                            internalIp = "quisquam";
                                            networkTags = new String[]{{
                                                add("ea"),
                                                add("impedit"),
                                                add("corporis"),
                                                add("veniam"),
                                            }};
                                            networkUri = "aliquid";
                                            serviceAccount = "inventore";
                                            uri = "http://illegal-scholarship.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "aspernatur";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "eaque";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("libero"),
                                                        add("aut"),
                                                        add("aut"),
                                                        add("deleniti"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("aliquam"),
                                                        add("fugit"),
                                                        add("accusamus"),
                                                        add("inventore"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://rapid-plum.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "velit";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("autem"),
                                                        add("nobis"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("assumenda"),
                                                        add("nulla"),
                                                        add("voluptas"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://far-off-development.com";
                                                }}),
                                            }};
                                            healthCheckUri = "provident";
                                            loadBalancerType = "LOAD_BALANCER_TYPE_UNSPECIFIED";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "molestiae";
                                            matchedIpRange = "magnam";
                                            uri = "http://fair-infection.info";
                                        }};
                                        projectId = "rem";
                                        route = new RouteInfo() {{
                                            destIpRange = "fuga";
                                            destPortRanges = new String[]{{
                                                add("quidem"),
                                                add("fugiat"),
                                            }};
                                            displayName = "ut";
                                            instanceTags = new String[]{{
                                                add("suscipit"),
                                                add("assumenda"),
                                            }};
                                            networkUri = "eos";
                                            nextHop = "praesentium";
                                            nextHopType = "NEXT_HOP_BLACKHOLE";
                                            priority = 86377;
                                            protocols = new String[]{{
                                                add("id"),
                                            }};
                                            routeType = "PEERING_STATIC";
                                            srcIpRange = "neque";
                                            srcPortRanges = new String[]{{
                                                add("illum"),
                                                add("quo"),
                                                add("fuga"),
                                                add("eius"),
                                            }};
                                            uri = "http://harsh-bass.name";
                                        }};
                                        state = "STATE_UNSPECIFIED";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "tempora";
                                            location = "debitis";
                                            uri = "http://complete-consciousness.net";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "esse";
                                            ipAddress = "recusandae";
                                            networkUri = "aperiam";
                                            region = "distinctio";
                                            uri = "https://linear-behalf.info";
                                            vpnTunnelUri = "totam";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "accusamus";
                                            networkUri = "aliquam";
                                            region = "odio";
                                            remoteGateway = "occaecati";
                                            remoteGatewayIp = "commodi";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "dolores";
                                            sourceGatewayIp = "deserunt";
                                            uri = "http://anguished-sediment.info";
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "quas";
                                    destinationNetworkUri = "praesentium";
                                    destinationPort = 159867;
                                    protocol = "deleniti";
                                    sourceAgentUri = "fugit";
                                    sourceIp = "fuga";
                                    sourceNetworkUri = "mollitia";
                                    sourcePort = 277596;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "UNKNOWN_IP";
                                            projectsMissingPermission = new String[]{{
                                                add("nisi"),
                                                add("fugit"),
                                            }};
                                            resourceUri = "sapiente";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "consequuntur";
                                            environment = "ratione";
                                            runtime = "explicabo";
                                            uri = "https://nutty-markup.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "esse";
                                            location = "eveniet";
                                            uri = "https://bony-infection.net";
                                            versionId = "nam";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "vero";
                                            location = "aliquid";
                                            serviceName = "quasi";
                                            serviceUri = "saepe";
                                            uri = "http://relieved-investigator.net";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "occaecati";
                                            externalIp = "minima";
                                            internalIp = "distinctio";
                                            networkUri = "eligendi";
                                            region = "sit";
                                            uri = "https://self-reliant-data.net";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "consequuntur";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        description = "minus";
                                        drop = new DropInfo() {{
                                            cause = "FORWARDING_RULE_MISMATCH";
                                            resourceUri = "sapiente";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "consectetur";
                                            destinationNetworkUri = "esse";
                                            destinationPort = 503427;
                                            protocol = "provident";
                                            sourceAgentUri = "a";
                                            sourceIp = "nulla";
                                            sourceNetworkUri = "quas";
                                            sourcePort = 457223;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quasi";
                                            direction = "a";
                                            displayName = "error";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "pariatur";
                                            policy = "possimus";
                                            priority = 157632;
                                            targetServiceAccounts = new String[]{{
                                                add("asperiores"),
                                                add("facere"),
                                                add("veritatis"),
                                                add("consequuntur"),
                                            }};
                                            targetTags = new String[]{{
                                                add("similique"),
                                            }};
                                            uri = "https://hurtful-vase.com";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "earum";
                                            target = "INTERCONNECT";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "in";
                                            matchedPortRange = "eius";
                                            matchedProtocol = "libero";
                                            networkUri = "illum";
                                            target = "soluta";
                                            uri = "http://free-violet.com";
                                            vip = "ullam";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "reprehenderit";
                                            clusterUri = "ullam";
                                            externalIp = "nisi";
                                            internalIp = "aut";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "voluptatum";
                                            externalIp = "qui";
                                            interface_ = "quibusdam";
                                            internalIp = "ex";
                                            networkTags = new String[]{{
                                                add("itaque"),
                                                add("dolorum"),
                                                add("architecto"),
                                            }};
                                            networkUri = "omnis";
                                            serviceAccount = "tenetur";
                                            uri = "http://trifling-body.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_TYPE_UNSPECIFIED";
                                            backendUri = "minima";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "consectetur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("iste"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("accusantium"),
                                                        add("rem"),
                                                        add("aut"),
                                                        add("laudantium"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://bewitched-marten.biz";
                                                }}),
                                            }};
                                            healthCheckUri = "voluptatem";
                                            loadBalancerType = "INTERNAL_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "occaecati";
                                            matchedIpRange = "numquam";
                                            uri = "https://common-garage.com";
                                        }};
                                        projectId = "dignissimos";
                                        route = new RouteInfo() {{
                                            destIpRange = "dicta";
                                            destPortRanges = new String[]{{
                                                add("natus"),
                                                add("velit"),
                                                add("voluptatibus"),
                                                add("voluptas"),
                                            }};
                                            displayName = "asperiores";
                                            instanceTags = new String[]{{
                                                add("ea"),
                                            }};
                                            networkUri = "quaerat";
                                            nextHop = "consequuntur";
                                            nextHopType = "NEXT_HOP_BLACKHOLE";
                                            priority = 638762;
                                            protocols = new String[]{{
                                                add("dignissimos"),
                                                add("officia"),
                                                add("asperiores"),
                                                add("nemo"),
                                            }};
                                            routeType = "ROUTE_TYPE_UNSPECIFIED";
                                            srcIpRange = "quaerat";
                                            srcPortRanges = new String[]{{
                                                add("quod"),
                                                add("labore"),
                                                add("ab"),
                                                add("adipisci"),
                                            }};
                                            uri = "https://pushy-gender.biz";
                                        }};
                                        state = "ARRIVE_AT_VPN_GATEWAY";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "est";
                                            location = "recusandae";
                                            uri = "https://those-helo.info";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "quos";
                                            ipAddress = "vel";
                                            networkUri = "labore";
                                            region = "possimus";
                                            uri = "https://shabby-harmonize.info";
                                            vpnTunnelUri = "corporis";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "reiciendis";
                                            networkUri = "assumenda";
                                            region = "nemo";
                                            remoteGateway = "recusandae";
                                            remoteGatewayIp = "aliquid";
                                            routingType = "ROUTING_TYPE_UNSPECIFIED";
                                            sourceGateway = "cum";
                                            sourceGatewayIp = "consectetur";
                                            uri = "http://gray-twig.net";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "PERMISSION_DENIED";
                                            projectsMissingPermission = new String[]{{
                                                add("suscipit"),
                                                add("reiciendis"),
                                                add("quidem"),
                                                add("saepe"),
                                            }};
                                            resourceUri = "necessitatibus";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "dolore";
                                            environment = "sunt";
                                            runtime = "asperiores";
                                            uri = "http://excellent-crystal.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "dignissimos";
                                            location = "a";
                                            uri = "https://empty-foot.net";
                                            versionId = "laboriosam";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "ipsa";
                                            location = "voluptates";
                                            serviceName = "libero";
                                            serviceUri = "vitae";
                                            uri = "https://plump-divan.com";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "voluptas";
                                            externalIp = "voluptas";
                                            internalIp = "voluptas";
                                            networkUri = "minima";
                                            region = "nobis";
                                            uri = "https://enraged-shelf.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "blanditiis";
                                            target = "GKE_MASTER";
                                        }};
                                        description = "dolore";
                                        drop = new DropInfo() {{
                                            cause = "FORWARDING_RULE_MISMATCH";
                                            resourceUri = "officiis";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "temporibus";
                                            destinationNetworkUri = "ullam";
                                            destinationPort = 237742;
                                            protocol = "cum";
                                            sourceAgentUri = "blanditiis";
                                            sourceIp = "quas";
                                            sourceNetworkUri = "hic";
                                            sourcePort = 201517;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "culpa";
                                            direction = "corrupti";
                                            displayName = "pariatur";
                                            firewallRuleType = "IMPLIED_VPC_FIREWALL_RULE";
                                            networkUri = "hic";
                                            policy = "exercitationem";
                                            priority = 750765;
                                            targetServiceAccounts = new String[]{{
                                                add("rerum"),
                                            }};
                                            targetTags = new String[]{{
                                                add("reiciendis"),
                                            }};
                                            uri = "http://yellowish-punctuation.info";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "expedita";
                                            target = "TARGET_UNSPECIFIED";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "iste";
                                            matchedPortRange = "dolore";
                                            matchedProtocol = "laborum";
                                            networkUri = "sed";
                                            target = "in";
                                            uri = "http://revolving-career.info";
                                            vip = "unde";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "architecto";
                                            clusterUri = "suscipit";
                                            externalIp = "sapiente";
                                            internalIp = "debitis";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "illo";
                                            externalIp = "reiciendis";
                                            interface_ = "perferendis";
                                            internalIp = "corrupti";
                                            networkTags = new String[]{{
                                                add("incidunt"),
                                                add("sed"),
                                                add("provident"),
                                                add("eius"),
                                            }};
                                            networkUri = "necessitatibus";
                                            serviceAccount = "ipsum";
                                            uri = "http://obedient-medicine.org";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "BACKEND_SERVICE";
                                            backendUri = "tempora";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "reiciendis";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("sit"),
                                                        add("non"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("praesentium"),
                                                        add("facilis"),
                                                        add("quaerat"),
                                                        add("incidunt"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "https://mediocre-analgesia.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "error";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("minima"),
                                                        add("recusandae"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("nulla"),
                                                        add("magni"),
                                                        add("aperiam"),
                                                        add("saepe"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://international-tax.com";
                                                }}),
                                            }};
                                            healthCheckUri = "laudantium";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "praesentium";
                                            matchedIpRange = "cum";
                                            uri = "http://recent-macaroon.name";
                                        }};
                                        projectId = "hic";
                                        route = new RouteInfo() {{
                                            destIpRange = "expedita";
                                            destPortRanges = new String[]{{
                                                add("neque"),
                                                add("dolorum"),
                                                add("nostrum"),
                                                add("officia"),
                                            }};
                                            displayName = "dolorum";
                                            instanceTags = new String[]{{
                                                add("accusamus"),
                                                add("tempora"),
                                                add("atque"),
                                            }};
                                            networkUri = "fugit";
                                            nextHop = "ut";
                                            nextHopType = "NEXT_HOP_ILB";
                                            priority = 30235;
                                            protocols = new String[]{{
                                                add("expedita"),
                                                add("magnam"),
                                                add("consequatur"),
                                            }};
                                            routeType = "DYNAMIC";
                                            srcIpRange = "ipsam";
                                            srcPortRanges = new String[]{{
                                                add("voluptatum"),
                                            }};
                                            uri = "https://valid-forestry.com";
                                        }};
                                        state = "SPOOFING_APPROVED";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "ex";
                                            location = "sed";
                                            uri = "http://impure-fibrosis.org";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "error";
                                            ipAddress = "consequatur";
                                            networkUri = "incidunt";
                                            region = "reiciendis";
                                            uri = "http://remorseful-burglar.com";
                                            vpnTunnelUri = "occaecati";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "labore";
                                            networkUri = "quidem";
                                            region = "atque";
                                            remoteGateway = "laborum";
                                            remoteGatewayIp = "nam";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "laboriosam";
                                            sourceGatewayIp = "alias";
                                            uri = "http://pretty-inch.name";
                                        }};
                                    }}),
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = "GKE_KONNECTIVITY_PROXY_UNSUPPORTED";
                                            projectsMissingPermission = new String[]{{
                                                add("repellendus"),
                                                add("delectus"),
                                                add("voluptates"),
                                            }};
                                            resourceUri = "perferendis";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "est";
                                            environment = "quidem";
                                            runtime = "reprehenderit";
                                            uri = "https://reasonable-lever.name";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "veniam";
                                            location = "voluptatem";
                                            uri = "https://vacant-borrowing.name";
                                            versionId = "reprehenderit";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "asperiores";
                                            location = "totam";
                                            serviceName = "suscipit";
                                            serviceUri = "quidem";
                                            uri = "https://bright-inhibition.biz";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "assumenda";
                                            externalIp = "ea";
                                            internalIp = "atque";
                                            networkUri = "error";
                                            region = "officiis";
                                            uri = "https://unacceptable-outfit.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "aspernatur";
                                            target = "GKE_MASTER";
                                        }};
                                        description = "maiores";
                                        drop = new DropInfo() {{
                                            cause = "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS";
                                            resourceUri = "at";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "error";
                                            destinationNetworkUri = "blanditiis";
                                            destinationPort = 379356;
                                            protocol = "repudiandae";
                                            sourceAgentUri = "atque";
                                            sourceIp = "atque";
                                            sourceNetworkUri = "sunt";
                                            sourcePort = 923306;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "dolorum";
                                            direction = "repellendus";
                                            displayName = "labore";
                                            firewallRuleType = "NETWORK_FIREWALL_POLICY_RULE";
                                            networkUri = "doloremque";
                                            policy = "repudiandae";
                                            priority = 116098;
                                            targetServiceAccounts = new String[]{{
                                                add("beatae"),
                                            }};
                                            targetTags = new String[]{{
                                                add("enim"),
                                            }};
                                            uri = "http://every-vengeance.name";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "magnam";
                                            target = "ANOTHER_PROJECT";
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "consequuntur";
                                            matchedPortRange = "occaecati";
                                            matchedProtocol = "officiis";
                                            networkUri = "perspiciatis";
                                            target = "in";
                                            uri = "http://unusual-mouth.com";
                                            vip = "fugit";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "id";
                                            clusterUri = "quis";
                                            externalIp = "reprehenderit";
                                            internalIp = "error";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "illo";
                                            externalIp = "corporis";
                                            interface_ = "quidem";
                                            internalIp = "eveniet";
                                            networkTags = new String[]{{
                                                add("vero"),
                                            }};
                                            networkUri = "doloremque";
                                            serviceAccount = "iure";
                                            uri = "http://masculine-balaclava.info";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = "TARGET_INSTANCE";
                                            backendUri = "qui";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "iure";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ratione"),
                                                        add("laborum"),
                                                        add("distinctio"),
                                                        add("voluptatum"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("aliquam"),
                                                        add("ad"),
                                                        add("repellat"),
                                                    }};
                                                    healthCheckFirewallState = "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED";
                                                    uri = "http://ordinary-interpretation.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "voluptas";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("dolores"),
                                                        add("id"),
                                                        add("minima"),
                                                        add("dolore"),
                                                    }};
                                                    healthCheckFirewallState = "MISCONFIGURED";
                                                    uri = "http://basic-traveler.name";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quaerat";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("ex"),
                                                        add("ut"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("adipisci"),
                                                        add("debitis"),
                                                        add("laudantium"),
                                                    }};
                                                    healthCheckFirewallState = "CONFIGURED";
                                                    uri = "http://verifiable-independent.name";
                                                }}),
                                            }};
                                            healthCheckUri = "quis";
                                            loadBalancerType = "NETWORK_TCP_UDP";
                                        }};
                                        network = new NetworkInfo() {{
                                            displayName = "reiciendis";
                                            matchedIpRange = "provident";
                                            uri = "http://grizzled-border.name";
                                        }};
                                        projectId = "nostrum";
                                        route = new RouteInfo() {{
                                            destIpRange = "mollitia";
                                            destPortRanges = new String[]{{
                                                add("possimus"),
                                                add("animi"),
                                                add("ex"),
                                            }};
                                            displayName = "aliquid";
                                            instanceTags = new String[]{{
                                                add("repellat"),
                                            }};
                                            networkUri = "doloribus";
                                            nextHop = "ullam";
                                            nextHopType = "NEXT_HOP_INTERCONNECT";
                                            priority = 721407;
                                            protocols = new String[]{{
                                                add("officia"),
                                                add("laborum"),
                                                add("placeat"),
                                                add("modi"),
                                            }};
                                            routeType = "POLICY_BASED";
                                            srcIpRange = "molestias";
                                            srcPortRanges = new String[]{{
                                                add("sapiente"),
                                                add("cumque"),
                                                add("vitae"),
                                                add("rerum"),
                                            }};
                                            uri = "http://glistening-bike.com";
                                        }};
                                        state = "NAT";
                                        vpcConnector = new VpcConnectorInfo() {{
                                            displayName = "quae";
                                            location = "perferendis";
                                            uri = "http://concrete-homonym.biz";
                                        }};
                                        vpnGateway = new VpnGatewayInfo() {{
                                            displayName = "rem";
                                            ipAddress = "at";
                                            networkUri = "impedit";
                                            region = "eos";
                                            uri = "https://infantile-bush.biz";
                                            vpnTunnelUri = "beatae";
                                        }};
                                        vpnTunnel = new VpnTunnelInfo() {{
                                            displayName = "cupiditate";
                                            networkUri = "provident";
                                            region = "earum";
                                            remoteGateway = "soluta";
                                            remoteGatewayIp = "hic";
                                            routingType = "DYNAMIC";
                                            sourceGateway = "eaque";
                                            sourceGatewayIp = "earum";
                                            uri = "https://worried-teen.info";
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        verifyTime = "porro";
                    }};
                    relatedProjects = new String[]{{
                        add("dolorem"),
                        add("fugit"),
                    }};
                    source = new EndpointInput() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://reasonable-completion.name";
                        }};
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "https://torn-addiction.com";
                        }};
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "http://lonely-outlaw.name";
                        }};
                        cloudSqlInstance = "suscipit";
                        forwardingRule = "adipisci";
                        gkeMasterCluster = "quasi";
                        instance = "magni";
                        ipAddress = "doloribus";
                        network = "nulla";
                        networkType = "NON_GCP_NETWORK";
                        port = 58534;
                        projectId = "tempora";
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
