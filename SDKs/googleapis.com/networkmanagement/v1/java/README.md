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

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest req = new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectivityTestInput = new ConnectivityTestInput() {{
                    description = "distinctio";
                    destination = new Endpoint() {{
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
                        gkeMasterCluster = "delectus";
                        instance = "tempora";
                        ipAddress = "suscipit";
                        network = "molestiae";
                        networkType = EndpointNetworkTypeEnum.NON_GCP_NETWORK;
                        port = 812169;
                        projectId = "voluptatum";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "nisi");
                        put("recusandae", "temporibus");
                    }};
                    name = "Erica Bogisich III";
                    protocol = "repellendus";
                    reachabilityDetails = new ReachabilityDetails() {{
                        error = new Status() {{
                            code = 957156;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("at", "at");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }}),
                            }};
                            message = "cum";
                        }};;
                        result = ReachabilityDetailsResultEnum.UNREACHABLE;
                        traces = new org.openapis.openapi.models.shared.Trace[]{{
                            add(new Trace() {{
                                endpointInfo = new EndpointInfo() {{
                                    destinationIp = "excepturi";
                                    destinationNetworkUri = "aspernatur";
                                    destinationPort = 18789;
                                    protocol = "ad";
                                    sourceIp = "natus";
                                    sourceNetworkUri = "sed";
                                    sourcePort = 612096;
                                }};
                                steps = new org.openapis.openapi.models.shared.Step[]{{
                                    add(new Step() {{
                                        abort = new AbortInfo() {{
                                            cause = AbortInfoCauseEnum.SOURCE_ENDPOINT_NOT_FOUND;
                                            projectsMissingPermission = new String[]{{
                                                add("hic"),
                                                add("saepe"),
                                            }};
                                            resourceUri = "fuga";
                                        }};
                                        appEngineVersion = new AppEngineVersionInfo() {{
                                            displayName = "in";
                                            environment = "corporis";
                                            runtime = "iste";
                                            uri = "http://unsteady-progress.com";
                                        }};
                                        causesDrop = false;
                                        cloudFunction = new CloudFunctionInfo() {{
                                            displayName = "ipsa";
                                            location = "reiciendis";
                                            uri = "https://prize-plier.biz";
                                            versionId = "dolorem";
                                        }};
                                        cloudRunRevision = new CloudRunRevisionInfo() {{
                                            displayName = "corporis";
                                            location = "explicabo";
                                            serviceUri = "nobis";
                                            uri = "http://palatable-forum.biz";
                                        }};
                                        cloudSqlInstance = new CloudSQLInstanceInfo() {{
                                            displayName = "excepturi";
                                            externalIp = "accusantium";
                                            internalIp = "iure";
                                            networkUri = "culpa";
                                            region = "doloribus";
                                            uri = "https://buttery-petitioner.biz";
                                        }};
                                        deliver = new DeliverInfo() {{
                                            resourceUri = "culpa";
                                            target = DeliverInfoTargetEnum.INSTANCE;
                                        }};
                                        description = "repellat";
                                        drop = new DropInfo() {{
                                            cause = DropInfoCauseEnum.GKE_PSC_ENDPOINT_MISSING;
                                            resourceUri = "occaecati";
                                        }};
                                        endpoint = new EndpointInfo() {{
                                            destinationIp = "numquam";
                                            destinationNetworkUri = "commodi";
                                            destinationPort = 466311;
                                            protocol = "molestiae";
                                            sourceIp = "velit";
                                            sourceNetworkUri = "error";
                                            sourcePort = 158969;
                                        }};
                                        firewall = new FirewallInfo() {{
                                            action = "quis";
                                            direction = "vitae";
                                            displayName = "laborum";
                                            firewallRuleType = FirewallInfoFirewallRuleTypeEnum.IMPLIED_VPC_FIREWALL_RULE;
                                            networkUri = "enim";
                                            policy = "odit";
                                            priority = 778346;
                                            targetServiceAccounts = new String[]{{
                                                add("tenetur"),
                                            }};
                                            targetTags = new String[]{{
                                                add("id"),
                                                add("possimus"),
                                            }};
                                            uri = "http://bumpy-overview.org";
                                        }};
                                        forward = new ForwardInfo() {{
                                            resourceUri = "laborum";
                                            target = ForwardInfoTargetEnum.TARGET_UNSPECIFIED;
                                        }};
                                        forwardingRule = new ForwardingRuleInfo() {{
                                            displayName = "reiciendis";
                                            matchedPortRange = "voluptatibus";
                                            matchedProtocol = "vero";
                                            networkUri = "nihil";
                                            target = "praesentium";
                                            uri = "https://aware-objection.info";
                                            vip = "cum";
                                        }};
                                        gkeMaster = new GKEMasterInfo() {{
                                            clusterNetworkUri = "perferendis";
                                            clusterUri = "doloremque";
                                            externalIp = "reprehenderit";
                                            internalIp = "ut";
                                        }};
                                        instance = new InstanceInfo() {{
                                            displayName = "maiores";
                                            externalIp = "dicta";
                                            interface_ = "corporis";
                                            internalIp = "dolore";
                                            networkTags = new String[]{{
                                                add("dicta"),
                                                add("harum"),
                                            }};
                                            networkUri = "enim";
                                            serviceAccount = "accusamus";
                                            uri = "http://utilized-bank.biz";
                                        }};
                                        loadBalancer = new LoadBalancerInfo() {{
                                            backendType = LoadBalancerInfoBackendTypeEnum.TARGET_POOL;
                                            backendUri = "molestias";
                                            backends = new org.openapis.openapi.models.shared.LoadBalancerBackend[]{{
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "pariatur";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("praesentium"),
                                                        add("rem"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quasi"),
                                                        add("repudiandae"),
                                                        add("sint"),
                                                        add("veritatis"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.MISCONFIGURED;
                                                    uri = "http://fruitful-adjective.net";
                                                }}),
                                                add(new LoadBalancerBackend() {{
                                                    displayName = "quibusdam";
                                                    healthCheckAllowingFirewallRules = new String[]{{
                                                        add("deserunt"),
                                                    }};
                                                    healthCheckBlockingFirewallRules = new String[]{{
                                                        add("quibusdam"),
                                                        add("labore"),
                                                        add("modi"),
                                                    }};
                                                    healthCheckFirewallState = LoadBalancerBackendHealthCheckFirewallStateEnum.HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED;
                                                    uri = "http://offensive-melody.com";
                                                }}),
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
                                }};
                            }}),
                        }};
                        verifyTime = "reiciendis";
                    }};;
                    relatedProjects = new String[]{{
                        add("ad"),
                        add("eum"),
                        add("dolor"),
                    }};
                    source = new Endpoint() {{
                        appEngineVersion = new AppEngineVersionEndpoint() {{
                            uri = "https://conventional-frequency.com";
                        }};;
                        cloudFunction = new CloudFunctionEndpoint() {{
                            uri = "http://worrisome-teenager.biz";
                        }};;
                        cloudRunRevision = new CloudRunRevisionEndpoint() {{
                            uri = "https://miserly-pruner.info";
                        }};;
                        cloudSqlInstance = "architecto";
                        gkeMasterCluster = "architecto";
                        instance = "repudiandae";
                        ipAddress = "ullam";
                        network = "expedita";
                        networkType = EndpointNetworkTypeEnum.GCP_NETWORK;
                        port = 998848;
                        projectId = "quibusdam";
                    }};;
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                testId = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
            }};            

            NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse res = sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req, new NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity("illum", "pariatur") {{
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
