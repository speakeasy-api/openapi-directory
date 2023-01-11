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