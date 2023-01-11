# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest, NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    testId: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    description: "debitis",
    destination: {
      appEngineVersion: {
        uri: "voluptatum",
      },
      cloudFunction: {
        uri: "et",
      },
      cloudRunRevision: {
        uri: "ut",
      },
      cloudSqlInstance: "dolorem",
      gkeMasterCluster: "et",
      instance: "voluptate",
      ipAddress: "iste",
      network: "vitae",
      networkType: "NON_GCP_NETWORK",
      port: 2217592893536642650,
      projectId: "illum",
    },
    labels: {
      "vel": "odio",
    },
    name: "dolore",
    protocol: "id",
    reachabilityDetails: {
      error: {
        code: 959367522974354090,
        details: [
          {
            "commodi": "quis",
            "est": "aut",
            "odit": "non",
          },
          {
            "omnis": "aut",
          },
          {
            "sed": "officiis",
          },
        ],
        message: "autem",
      },
      result: "AMBIGUOUS",
      traces: [
        {
          endpointInfo: {
            destinationIp: "odio",
            destinationNetworkUri: "qui",
            destinationPort: 388440063886460141,
            protocol: "at",
            sourceIp: "ipsum",
            sourceNetworkUri: "eveniet",
            sourcePort: 303089054982227392,
          },
          steps: [
            {
              abort: {
                cause: "UNKNOWN_PROJECT",
                projectsMissingPermission: [
                  "exercitationem",
                  "aut",
                  "reprehenderit",
                ],
                resourceUri: "tempore",
              },
              appEngineVersion: {
                displayName: "maiores",
                environment: "incidunt",
                runtime: "dolor",
                uri: "beatae",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "in",
                location: "et",
                uri: "omnis",
                versionId: "ipsum",
              },
              cloudRunRevision: {
                displayName: "ex",
                location: "dolores",
                serviceUri: "placeat",
                uri: "vel",
              },
              cloudSqlInstance: {
                displayName: "rerum",
                externalIp: "mollitia",
                internalIp: "voluptas",
                networkUri: "quam",
                region: "reprehenderit",
                uri: "qui",
              },
              deliver: {
                resourceUri: "qui",
                target: "INTERNET",
              },
              description: "in",
              drop: {
                cause: "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC",
                resourceUri: "qui",
              },
              endpoint: {
                destinationIp: "ut",
                destinationNetworkUri: "itaque",
                destinationPort: 2006924026344156168,
                protocol: "neque",
                sourceIp: "ullam",
                sourceNetworkUri: "et",
                sourcePort: 4304520335772049496,
              },
              firewall: {
                action: "esse",
                direction: "architecto",
                displayName: "quam",
                firewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                networkUri: "cumque",
                policy: "soluta",
                priority: 759605945513541974,
                targetServiceAccounts: [
                  "magni",
                  "et",
                ],
                targetTags: [
                  "qui",
                  "earum",
                  "illo",
                ],
                uri: "omnis",
              },
              forward: {
                resourceUri: "ut",
                target: "CLOUD_SQL_INSTANCE",
              },
              forwardingRule: {
                displayName: "dolor",
                matchedPortRange: "commodi",
                matchedProtocol: "error",
                networkUri: "reprehenderit",
                target: "consectetur",
                uri: "nostrum",
                vip: "ut",
              },
              gkeMaster: {
                clusterNetworkUri: "laboriosam",
                clusterUri: "sed",
                externalIp: "a",
                internalIp: "soluta",
              },
              instance: {
                displayName: "aut",
                externalIp: "quas",
                interface: "consequuntur",
                internalIp: "laudantium",
                networkTags: [
                  "ipsa",
                ],
                networkUri: "expedita",
                serviceAccount: "doloremque",
                uri: "perferendis",
              },
              loadBalancer: {
                backendType: "TARGET_POOL",
                backendUri: "ratione",
                backends: [
                  {
                    displayName: "explicabo",
                    healthCheckAllowingFirewallRules: [
                      "maxime",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "perferendis",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "rerum",
                  },
                  {
                    displayName: "reiciendis",
                    healthCheckAllowingFirewallRules: [
                      "cumque",
                      "minima",
                      "necessitatibus",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "quis",
                      "eum",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "et",
                  },
                  {
                    displayName: "impedit",
                    healthCheckAllowingFirewallRules: [
                      "expedita",
                      "vel",
                      "qui",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "nihil",
                      "tempora",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "eaque",
                  },
                ],
                healthCheckUri: "sunt",
                loadBalancerType: "TCP_PROXY",
              },
              network: {
                displayName: "autem",
                matchedIpRange: "quis",
                uri: "vel",
              },
              projectId: "vel",
              route: {
                destIpRange: "placeat",
                destPortRanges: [
                  "nisi",
                ],
                displayName: "quis",
                instanceTags: [
                  "porro",
                  "rerum",
                ],
                networkUri: "et",
                nextHop: "accusamus",
                nextHopType: "NEXT_HOP_ILB",
                priority: 2223751782546645906,
                protocols: [
                  "ut",
                  "laborum",
                  "fugit",
                ],
                routeType: "DYNAMIC",
                srcIpRange: "minus",
                srcPortRanges: [
                  "aperiam",
                ],
                uri: "consequuntur",
              },
              state: "APPLY_FORWARDING_RULE",
              vpcConnector: {
                displayName: "mollitia",
                location: "inventore",
                uri: "delectus",
              },
              vpnGateway: {
                displayName: "ipsa",
                ipAddress: "animi",
                networkUri: "animi",
                region: "ut",
                uri: "aliquam",
                vpnTunnelUri: "fuga",
              },
              vpnTunnel: {
                displayName: "sed",
                networkUri: "sed",
                region: "et",
                remoteGateway: "consequuntur",
                remoteGatewayIp: "non",
                routingType: "POLICY_BASED",
                sourceGateway: "provident",
                sourceGatewayIp: "molestiae",
                uri: "pariatur",
              },
            },
          ],
        },
      ],
      verifyTime: "quasi",
    },
    relatedProjects: [
      "enim",
      "qui",
      "sit",
    ],
    source: {
      appEngineVersion: {
        uri: "possimus",
      },
      cloudFunction: {
        uri: "modi",
      },
      cloudRunRevision: {
        uri: "neque",
      },
      cloudSqlInstance: "consequuntur",
      gkeMasterCluster: "quia",
      instance: "et",
      ipAddress: "est",
      network: "occaecati",
      networkType: "NETWORK_TYPE_UNSPECIFIED",
      port: 4932993544835283753,
      projectId: "quia",
    },
  },
};

sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req).then((res: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse | AxiosError) => {
   // handle response
});
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
