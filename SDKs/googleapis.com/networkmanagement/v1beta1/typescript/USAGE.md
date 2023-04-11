<!-- Start SDK Example Usage -->
```typescript
import {
  NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest,
  NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EndpointNetworkTypeEnum,
  ReachabilityDetailsResultEnum,
  StepStateEnum,
  VpnTunnelInfoRoutingTypeEnum,
  RouteInfoNextHopTypeEnum,
  RouteInfoRouteTypeEnum,
  LoadBalancerInfoBackendTypeEnum,
  LoadBalancerInfoLoadBalancerTypeEnum,
  LoadBalancerBackendHealthCheckFirewallStateEnum,
  ForwardInfoTargetEnum,
  FirewallInfoFirewallRuleTypeEnum,
  DropInfoCauseEnum,
  DeliverInfoTargetEnum,
  AbortInfoCauseEnum,
  ProbingDetailsAbortCauseEnum,
  ProbingDetailsResultEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectivityTestInput: {
    description: "provident",
    destination: {
      appEngineVersion: {
        uri: "https://terrible-nutrient.org",
      },
      cloudFunction: {
        uri: "https://that-hellcat.name",
      },
      cloudRunRevision: {
        uri: "https://high-hound.biz",
      },
      cloudSqlInstance: "debitis",
      forwardingRule: "ipsa",
      gkeMasterCluster: "delectus",
      instance: "tempora",
      ipAddress: "suscipit",
      network: "molestiae",
      networkType: EndpointNetworkTypeEnum.NonGcpNetwork,
      port: 812169,
      projectId: "voluptatum",
    },
    labels: {
      "excepturi": "nisi",
      "recusandae": "temporibus",
    },
    name: "ab",
    probingDetails: {
      abortCause: ProbingDetailsAbortCauseEnum.PermissionDenied,
      destinationEgressLocation: {
        metropolitanArea: "veritatis",
      },
      endpointInfo: {
        destinationIp: "deserunt",
        destinationNetworkUri: "perferendis",
        destinationPort: 368241,
        protocol: "repellendus",
        sourceAgentUri: "sapiente",
        sourceIp: "quo",
        sourceNetworkUri: "odit",
        sourcePort: 870013,
      },
      error: {
        code: 870088,
        details: [
          {
            "quod": "quod",
            "esse": "totam",
          },
          {
            "dolorum": "dicta",
            "nam": "officia",
            "occaecati": "fugit",
            "deleniti": "hic",
          },
          {
            "totam": "beatae",
            "commodi": "molestiae",
            "modi": "qui",
            "impedit": "cum",
          },
          {
            "ipsum": "excepturi",
            "aspernatur": "perferendis",
          },
        ],
        message: "ad",
      },
      probingLatency: {
        latencyPercentiles: [
          {
            latencyMicros: "sed",
            percent: 612096,
          },
          {
            latencyMicros: "dolor",
            percent: 616934,
          },
          {
            latencyMicros: "laboriosam",
            percent: 943749,
          },
        ],
      },
      result: ProbingDetailsResultEnum.Undetermined,
      sentProbeCount: 681820,
      successfulProbeCount: 449950,
      verifyTime: "corporis",
    },
    protocol: "iste",
    reachabilityDetails: {
      error: {
        code: 437032,
        details: [
          {
            "architecto": "ipsa",
            "reiciendis": "est",
            "mollitia": "laborum",
          },
          {
            "dolorem": "corporis",
          },
          {
            "nobis": "enim",
          },
          {
            "nemo": "minima",
            "excepturi": "accusantium",
            "iure": "culpa",
          },
        ],
        message: "doloribus",
      },
      result: ReachabilityDetailsResultEnum.Undetermined,
      traces: [
        {
          endpointInfo: {
            destinationIp: "mollitia",
            destinationNetworkUri: "dolorem",
            destinationPort: 635059,
            protocol: "consequuntur",
            sourceAgentUri: "repellat",
            sourceIp: "mollitia",
            sourceNetworkUri: "occaecati",
            sourcePort: 253291,
          },
          steps: [
            {
              abort: {
                cause: AbortInfoCauseEnum.UnintendedDestination,
                projectsMissingPermission: [
                  "velit",
                  "error",
                ],
                resourceUri: "quia",
              },
              appEngineVersion: {
                displayName: "quis",
                environment: "vitae",
                runtime: "laborum",
                uri: "https://frozen-catch.net",
              },
              causesDrop: false,
              cloudFunction: {
                displayName: "sequi",
                location: "tenetur",
                uri: "http://pushy-snuggle.com",
                versionId: "quasi",
              },
              cloudRunRevision: {
                displayName: "error",
                location: "temporibus",
                serviceName: "laborum",
                serviceUri: "quasi",
                uri: "https://witty-swim.info",
              },
              cloudSqlInstance: {
                displayName: "praesentium",
                externalIp: "voluptatibus",
                internalIp: "ipsa",
                networkUri: "omnis",
                region: "voluptate",
                uri: "https://agile-arch-rival.info",
              },
              deliver: {
                resourceUri: "ut",
                target: DeliverInfoTargetEnum.ServerlessNeg,
              },
              description: "dicta",
              drop: {
                cause: DropInfoCauseEnum.ForwardingRuleNoInstances,
                resourceUri: "dolore",
              },
              endpoint: {
                destinationIp: "iusto",
                destinationNetworkUri: "dicta",
                destinationPort: 688661,
                protocol: "enim",
                sourceAgentUri: "accusamus",
                sourceIp: "commodi",
                sourceNetworkUri: "repudiandae",
                sourcePort: 64147,
              },
              firewall: {
                action: "ipsum",
                direction: "quidem",
                displayName: "molestias",
                firewallRuleType: FirewallInfoFirewallRuleTypeEnum.ImpliedVpcFirewallRule,
                networkUri: "pariatur",
                policy: "modi",
                priority: 508969,
                targetServiceAccounts: [
                  "voluptates",
                  "quasi",
                  "repudiandae",
                ],
                targetTags: [
                  "veritatis",
                  "itaque",
                  "incidunt",
                ],
                uri: "http://acrobatic-plantation.org",
              },
              forward: {
                resourceUri: "explicabo",
                target: ForwardInfoTargetEnum.ImportedCustomRouteNextHop,
              },
              forwardingRule: {
                displayName: "distinctio",
                matchedPortRange: "quibusdam",
                matchedProtocol: "labore",
                networkUri: "modi",
                target: "qui",
                uri: "http://offensive-melody.com",
                vip: "magni",
              },
              gkeMaster: {
                clusterNetworkUri: "assumenda",
                clusterUri: "ipsam",
                externalIp: "alias",
                internalIp: "fugit",
              },
              instance: {
                displayName: "dolorum",
                externalIp: "excepturi",
                interface: "tempora",
                internalIp: "facilis",
                networkTags: [
                  "labore",
                  "delectus",
                  "eum",
                ],
                networkUri: "non",
                serviceAccount: "eligendi",
                uri: "https://humming-networking.org",
              },
              loadBalancer: {
                backendType: LoadBalancerInfoBackendTypeEnum.TargetPool,
                backendUri: "officia",
                backends: [
                  {
                    displayName: "debitis",
                    healthCheckAllowingFirewallRules: [
                      "dolorum",
                      "in",
                      "in",
                      "illum",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "rerum",
                      "dicta",
                      "magnam",
                      "cumque",
                    ],
                    healthCheckFirewallState: LoadBalancerBackendHealthCheckFirewallStateEnum.Misconfigured,
                    uri: "http://humming-police.org",
                  },
                ],
                healthCheckUri: "non",
                loadBalancerType: LoadBalancerInfoLoadBalancerTypeEnum.HttpProxy,
              },
              network: {
                displayName: "enim",
                matchedIpRange: "accusamus",
                uri: "https://repentant-nectar.net",
              },
              projectId: "id",
              route: {
                destIpRange: "blanditiis",
                destPortRanges: [
                  "sapiente",
                  "amet",
                  "deserunt",
                ],
                displayName: "nisi",
                instanceTags: [
                  "natus",
                  "omnis",
                ],
                networkUri: "molestiae",
                nextHop: "perferendis",
                nextHopType: RouteInfoNextHopTypeEnum.NextHopInterconnect,
                priority: 301575,
                protocols: [
                  "id",
                  "labore",
                  "labore",
                ],
                routeType: RouteInfoRouteTypeEnum.Dynamic,
                srcIpRange: "natus",
                srcPortRanges: [
                  "eum",
                  "vero",
                  "aspernatur",
                ],
                uri: "http://foolhardy-bolero.name",
              },
              state: StepStateEnum.ApplyIngressFirewallRule,
              vpcConnector: {
                displayName: "provident",
                location: "quos",
                uri: "https://angelic-pharmacist.org",
              },
              vpnGateway: {
                displayName: "mollitia",
                ipAddress: "ad",
                networkUri: "eum",
                region: "dolor",
                uri: "https://conventional-frequency.com",
                vpnTunnelUri: "iure",
              },
              vpnTunnel: {
                displayName: "doloribus",
                networkUri: "debitis",
                region: "eius",
                remoteGateway: "maxime",
                remoteGatewayIp: "deleniti",
                routingType: VpnTunnelInfoRoutingTypeEnum.PolicyBased,
                sourceGateway: "in",
                sourceGatewayIp: "architecto",
                uri: "http://vacant-flexibility.net",
              },
            },
            {
              abort: {
                cause: AbortInfoCauseEnum.UnintendedDestination,
                projectsMissingPermission: [
                  "quibusdam",
                  "sed",
                  "saepe",
                  "pariatur",
                ],
                resourceUri: "accusantium",
              },
              appEngineVersion: {
                displayName: "consequuntur",
                environment: "praesentium",
                runtime: "natus",
                uri: "http://cloudy-screwdriver.org",
              },
              causesDrop: false,
              cloudFunction: {
                displayName: "pariatur",
                location: "maxime",
                uri: "http://nimble-caution.info",
                versionId: "accusantium",
              },
              cloudRunRevision: {
                displayName: "ab",
                location: "maiores",
                serviceName: "quidem",
                serviceUri: "ipsam",
                uri: "http://impolite-rat.com",
              },
              cloudSqlInstance: {
                displayName: "pariatur",
                externalIp: "nemo",
                internalIp: "voluptatibus",
                networkUri: "perferendis",
                region: "fugiat",
                uri: "http://adept-sailing.info",
              },
              deliver: {
                resourceUri: "hic",
                target: DeliverInfoTargetEnum.PscGoogleApi,
              },
              description: "nobis",
              drop: {
                cause: DropInfoCauseEnum.RouteWrongNetwork,
                resourceUri: "quis",
              },
              endpoint: {
                destinationIp: "totam",
                destinationNetworkUri: "dignissimos",
                destinationPort: 54338,
                protocol: "quis",
                sourceAgentUri: "nesciunt",
                sourceIp: "eos",
                sourceNetworkUri: "perferendis",
                sourcePort: 170986,
              },
              firewall: {
                action: "minus",
                direction: "quam",
                displayName: "dolor",
                firewallRuleType: FirewallInfoFirewallRuleTypeEnum.NetworkFirewallPolicyRule,
                networkUri: "nostrum",
                policy: "hic",
                priority: 928082,
                targetServiceAccounts: [
                  "facilis",
                  "perspiciatis",
                  "voluptatem",
                ],
                targetTags: [
                  "consequuntur",
                  "blanditiis",
                  "error",
                  "eaque",
                ],
                uri: "https://right-damage.org",
              },
              forward: {
                resourceUri: "earum",
                target: ForwardInfoTargetEnum.VpnGateway,
              },
              forwardingRule: {
                displayName: "iste",
                matchedPortRange: "dolorum",
                matchedProtocol: "deleniti",
                networkUri: "pariatur",
                target: "provident",
                uri: "https://secret-wafer.biz",
                vip: "quos",
              },
              gkeMaster: {
                clusterNetworkUri: "aliquid",
                clusterUri: "dolorem",
                externalIp: "dolorem",
                internalIp: "dolor",
              },
              instance: {
                displayName: "qui",
                externalIp: "ipsum",
                interface: "hic",
                internalIp: "excepturi",
                networkTags: [
                  "voluptate",
                  "dignissimos",
                  "reiciendis",
                ],
                networkUri: "amet",
                serviceAccount: "dolorum",
                uri: "http://both-background.com",
              },
              loadBalancer: {
                backendType: LoadBalancerInfoBackendTypeEnum.BackendService,
                backendUri: "odio",
                backends: [
                  {
                    displayName: "accusamus",
                    healthCheckAllowingFirewallRules: [
                      "voluptatibus",
                      "voluptas",
                      "natus",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "atque",
                    ],
                    healthCheckFirewallState: LoadBalancerBackendHealthCheckFirewallStateEnum.HealthCheckFirewallStateUnspecified,
                    uri: "https://best-respite.net",
                  },
                  {
                    displayName: "iusto",
                    healthCheckAllowingFirewallRules: [
                      "dolorum",
                      "deleniti",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "necessitatibus",
                      "distinctio",
                      "asperiores",
                    ],
                    healthCheckFirewallState: LoadBalancerBackendHealthCheckFirewallStateEnum.Configured,
                    uri: "http://jolly-pint.org",
                  },
                ],
                healthCheckUri: "eius",
                loadBalancerType: LoadBalancerInfoLoadBalancerTypeEnum.LoadBalancerTypeUnspecified,
              },
              network: {
                displayName: "perferendis",
                matchedIpRange: "amet",
                uri: "https://uncomfortable-evocation.org",
              },
              projectId: "suscipit",
              route: {
                destIpRange: "deserunt",
                destPortRanges: [
                  "minima",
                  "repellendus",
                  "totam",
                ],
                displayName: "similique",
                instanceTags: [
                  "at",
                ],
                networkUri: "quaerat",
                nextHop: "tempora",
                nextHopType: RouteInfoNextHopTypeEnum.NextHopInterconnect,
                priority: 798047,
                protocols: [
                  "qui",
                  "dolorum",
                  "a",
                  "esse",
                ],
                routeType: RouteInfoRouteTypeEnum.PeeringStatic,
                srcIpRange: "iusto",
                srcPortRanges: [
                  "quisquam",
                ],
                uri: "https://elliptical-rediscovery.org",
              },
              state: StepStateEnum.StartFromCloudFunction,
              vpcConnector: {
                displayName: "enim",
                location: "dolorem",
                uri: "https://masculine-introduction.com",
              },
              vpnGateway: {
                displayName: "expedita",
                ipAddress: "neque",
                networkUri: "sed",
                region: "vel",
                uri: "https://hasty-pen.info",
                vpnTunnelUri: "ipsum",
              },
              vpnTunnel: {
                displayName: "incidunt",
                networkUri: "qui",
                region: "cupiditate",
                remoteGateway: "maxime",
                remoteGatewayIp: "pariatur",
                routingType: VpnTunnelInfoRoutingTypeEnum.PolicyBased,
                sourceGateway: "dicta",
                sourceGatewayIp: "laborum",
                uri: "https://feisty-carnival.biz",
              },
            },
          ],
        },
      ],
      verifyTime: "distinctio",
    },
    relatedProjects: [
      "aliquid",
      "quam",
      "molestias",
    ],
    source: {
      appEngineVersion: {
        uri: "https://delightful-cook.com",
      },
      cloudFunction: {
        uri: "http://likely-camper.info",
      },
      cloudRunRevision: {
        uri: "https://warlike-ankle.net",
      },
      cloudSqlInstance: "soluta",
      forwardingRule: "nobis",
      gkeMasterCluster: "et",
      instance: "saepe",
      ipAddress: "ipsum",
      network: "veritatis",
      networkType: EndpointNetworkTypeEnum.NonGcpNetwork,
      port: 552193,
      projectId: "tempore",
    },
  },
  accessToken: "cupiditate",
  alt: AltEnum.Json,
  callback: "delectus",
  fields: "dolorem",
  key: "dolore",
  oauthToken: "labore",
  parent: "adipisci",
  prettyPrint: false,
  quotaUser: "dolorum",
  testId: "architecto",
  uploadType: "quae",
  uploadProtocol: "aut",
};

sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req).then((res: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->