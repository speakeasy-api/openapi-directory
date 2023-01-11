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
