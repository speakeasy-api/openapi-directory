<!-- Start SDK Example Usage -->
```typescript
import {
  GkehubProjectsLocationsFeaturesCreateRequest,
  GkehubProjectsLocationsFeaturesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  FeatureStateCodeEnum,
  StatusCodeEnum,
  FeatureResourceStateStateEnum,
  ServiceMeshMembershipSpecControlPlaneEnum,
  ServiceMeshMembershipSpecManagementEnum,
  ConfigManagementPolicyControllerMonitoringBackendsEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GkehubProjectsLocationsFeaturesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  featureInput: {
    fleetDefaultMemberConfig: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    labels: {
      "error": "deserunt",
      "suscipit": "iure",
    },
    membershipSpecs: {
      "debitis": {
        configmanagement: {
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "ipsa",
              httpsProxy: "delectus",
              policyDir: "tempora",
              secretType: "suscipit",
              syncBranch: "molestiae",
              syncRepo: "minus",
              syncRev: "placeat",
              syncWaitSecs: "voluptatum",
            },
            oci: {
              gcpServiceAccountEmail: "iusto",
              policyDir: "excepturi",
              secretType: "nisi",
              syncRepo: "recusandae",
              syncWaitSecs: "temporibus",
            },
            preventDrift: false,
            sourceFormat: "ab",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "quis",
            enabled: false,
            exemptableNamespaces: [
              "deserunt",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                ConfigManagementPolicyControllerMonitoringBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "repellendus",
        },
        fleetInherited: false,
        fleetobservability: {
          "quo": "odit",
          "at": "at",
          "maiores": "molestiae",
          "quod": "quod",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "totam",
                clientSecret: "porro",
                kubectlRedirectUri: "dolorum",
                tenant: "dicta",
              },
              googleConfig: {
                disable: false,
              },
              name: "nam",
              oidcConfig: {
                certificateAuthorityData: "officia",
                clientId: "occaecati",
                clientSecret: "fugit",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "deleniti",
                groupPrefix: "hic",
                groupsClaim: "optio",
                issuerUri: "totam",
                kubectlRedirectUri: "beatae",
                scopes: "commodi",
                userClaim: "molestiae",
                userPrefix: "modi",
              },
              proxy: "qui",
            },
            {
              azureadConfig: {
                clientId: "impedit",
                clientSecret: "cum",
                kubectlRedirectUri: "esse",
                tenant: "ipsum",
              },
              googleConfig: {
                disable: false,
              },
              name: "excepturi",
              oidcConfig: {
                certificateAuthorityData: "aspernatur",
                clientId: "perferendis",
                clientSecret: "ad",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "natus",
                groupPrefix: "sed",
                groupsClaim: "iste",
                issuerUri: "dolor",
                kubectlRedirectUri: "natus",
                scopes: "laboriosam",
                userClaim: "hic",
                userPrefix: "saepe",
              },
              proxy: "fuga",
            },
          ],
        },
        mesh: {
          controlPlane: ServiceMeshMembershipSpecControlPlaneEnum.Automatic,
          management: ServiceMeshMembershipSpecManagementEnum.ManagementAutomatic,
        },
      },
      "iste": {
        configmanagement: {
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "iure",
              httpsProxy: "saepe",
              policyDir: "quidem",
              secretType: "architecto",
              syncBranch: "ipsa",
              syncRepo: "reiciendis",
              syncRev: "est",
              syncWaitSecs: "mollitia",
            },
            oci: {
              gcpServiceAccountEmail: "laborum",
              policyDir: "dolores",
              secretType: "dolorem",
              syncRepo: "corporis",
              syncWaitSecs: "explicabo",
            },
            preventDrift: false,
            sourceFormat: "nobis",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "enim",
            enabled: false,
            exemptableNamespaces: [
              "nemo",
              "minima",
              "excepturi",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                ConfigManagementPolicyControllerMonitoringBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "culpa",
        },
        fleetInherited: false,
        fleetobservability: {
          "sapiente": "architecto",
          "mollitia": "dolorem",
          "culpa": "consequuntur",
          "repellat": "mollitia",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "numquam",
                clientSecret: "commodi",
                kubectlRedirectUri: "quam",
                tenant: "molestiae",
              },
              googleConfig: {
                disable: false,
              },
              name: "velit",
              oidcConfig: {
                certificateAuthorityData: "error",
                clientId: "quia",
                clientSecret: "quis",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "vitae",
                groupPrefix: "laborum",
                groupsClaim: "animi",
                issuerUri: "enim",
                kubectlRedirectUri: "odit",
                scopes: "quo",
                userClaim: "sequi",
                userPrefix: "tenetur",
              },
              proxy: "ipsam",
            },
            {
              azureadConfig: {
                clientId: "id",
                clientSecret: "possimus",
                kubectlRedirectUri: "aut",
                tenant: "quasi",
              },
              googleConfig: {
                disable: false,
              },
              name: "error",
              oidcConfig: {
                certificateAuthorityData: "temporibus",
                clientId: "laborum",
                clientSecret: "quasi",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "reiciendis",
                groupPrefix: "voluptatibus",
                groupsClaim: "vero",
                issuerUri: "nihil",
                kubectlRedirectUri: "praesentium",
                scopes: "voluptatibus",
                userClaim: "ipsa",
                userPrefix: "omnis",
              },
              proxy: "voluptate",
            },
            {
              azureadConfig: {
                clientId: "cum",
                clientSecret: "perferendis",
                kubectlRedirectUri: "doloremque",
                tenant: "reprehenderit",
              },
              googleConfig: {
                disable: false,
              },
              name: "ut",
              oidcConfig: {
                certificateAuthorityData: "maiores",
                clientId: "dicta",
                clientSecret: "corporis",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "dolore",
                groupPrefix: "iusto",
                groupsClaim: "dicta",
                issuerUri: "harum",
                kubectlRedirectUri: "enim",
                scopes: "accusamus",
                userClaim: "commodi",
                userPrefix: "repudiandae",
              },
              proxy: "quae",
            },
          ],
        },
        mesh: {
          controlPlane: ServiceMeshMembershipSpecControlPlaneEnum.ControlPlaneManagementUnspecified,
          management: ServiceMeshMembershipSpecManagementEnum.ManagementManual,
        },
      },
    },
    resourceState: {
      state: FeatureResourceStateStateEnum.Disabling,
    },
    scopeSpecs: {
      "pariatur": {
        "praesentium": "rem",
        "voluptates": "quasi",
      },
      "repudiandae": {
        "veritatis": "itaque",
        "incidunt": "enim",
        "consequatur": "est",
      },
      "quibusdam": {
        "deserunt": "distinctio",
      },
    },
    spec: {
      appdevexperience: {
        "labore": "modi",
        "qui": "aliquid",
        "cupiditate": "quos",
        "perferendis": "magni",
      },
      fleetobservability: {
        "ipsam": "alias",
        "fugit": "dolorum",
        "excepturi": "tempora",
        "facilis": "tempore",
      },
      multiclusteringress: {
        configMembership: "labore",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: StatusCodeEnum.Unknown,
          description: "eum",
        },
      },
      fleetobservability: {
        "eligendi": "sint",
      },
      state: {
        code: FeatureStateCodeEnum.Ok,
        description: "provident",
        updateTime: "necessitatibus",
      },
    },
  },
  accessToken: "sint",
  alt: AltEnum.Media,
  callback: "dolor",
  featureId: "debitis",
  fields: "a",
  key: "dolorum",
  oauthToken: "in",
  parent: "in",
  prettyPrint: false,
  quotaUser: "illum",
  requestId: "maiores",
  uploadType: "rerum",
  uploadProtocol: "dicta",
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->