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
  FeatureSpecProvisionGoogleCaEnum,
  MembershipSpecCertificateManagementEnum,
  MultiClusterIngressFeatureSpecBillingEnum,
  FeatureResourceStateStateEnum,
  PolicyControllerHubConfigInstallSpecEnum,
  PolicyControllerTemplateLibraryConfigInstallationEnum,
  PolicyControllerBundleInstallSpecManagementEnum,
  PolicyControllerMonitoringConfigBackendsEnum,
  ServiceMeshMembershipSpecControlPlaneEnum,
  ServiceMeshMembershipSpecDefaultChannelEnum,
  ServiceMeshMembershipSpecManagementEnum,
  ConfigManagementPolicyControllerMonitoringBackendsEnum,
  CloudBuildMembershipSpecSecurityPolicyEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GkehubProjectsLocationsFeaturesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  featureInput: {
    fleetDefaultMemberConfig: {
      identityservice: {
        authMethods: [
          {
            azureadConfig: {
              clientId: "distinctio",
              clientSecret: "quibusdam",
              kubectlRedirectUri: "unde",
              tenant: "nulla",
            },
            googleConfig: {
              disable: false,
            },
            name: "corrupti",
            oidcConfig: {
              certificateAuthorityData: "illum",
              clientId: "vel",
              clientSecret: "error",
              deployCloudConsoleProxy: false,
              enableAccessToken: false,
              extraParams: "deserunt",
              groupPrefix: "suscipit",
              groupsClaim: "iure",
              issuerUri: "magnam",
              kubectlRedirectUri: "debitis",
              scopes: "ipsa",
              userClaim: "delectus",
              userPrefix: "tempora",
            },
            proxy: "suscipit",
          },
          {
            azureadConfig: {
              clientId: "molestiae",
              clientSecret: "minus",
              kubectlRedirectUri: "placeat",
              tenant: "voluptatum",
            },
            googleConfig: {
              disable: false,
            },
            name: "iusto",
            oidcConfig: {
              certificateAuthorityData: "excepturi",
              clientId: "nisi",
              clientSecret: "recusandae",
              deployCloudConsoleProxy: false,
              enableAccessToken: false,
              extraParams: "temporibus",
              groupPrefix: "ab",
              groupsClaim: "quis",
              issuerUri: "veritatis",
              kubectlRedirectUri: "deserunt",
              scopes: "perferendis",
              userClaim: "ipsam",
              userPrefix: "repellendus",
            },
            proxy: "sapiente",
          },
          {
            azureadConfig: {
              clientId: "quo",
              clientSecret: "odit",
              kubectlRedirectUri: "at",
              tenant: "at",
            },
            googleConfig: {
              disable: false,
            },
            name: "maiores",
            oidcConfig: {
              certificateAuthorityData: "molestiae",
              clientId: "quod",
              clientSecret: "quod",
              deployCloudConsoleProxy: false,
              enableAccessToken: false,
              extraParams: "esse",
              groupPrefix: "totam",
              groupsClaim: "porro",
              issuerUri: "dolorum",
              kubectlRedirectUri: "dicta",
              scopes: "nam",
              userClaim: "officia",
              userPrefix: "occaecati",
            },
            proxy: "fugit",
          },
        ],
      },
    },
    labels: {
      "hic": "optio",
      "totam": "beatae",
      "commodi": "molestiae",
    },
    membershipSpecs: {
      "qui": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "impedit",
        },
        cloudbuild: {
          securityPolicy: CloudBuildMembershipSpecSecurityPolicyEnum.Privileged,
          version: "esse",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "ipsum",
              httpsProxy: "excepturi",
              policyDir: "aspernatur",
              secretType: "perferendis",
              syncBranch: "ad",
              syncRepo: "natus",
              syncRev: "sed",
              syncWaitSecs: "iste",
            },
            oci: {
              gcpServiceAccountEmail: "dolor",
              policyDir: "natus",
              secretType: "laboriosam",
              syncRepo: "hic",
              syncWaitSecs: "saepe",
            },
            preventDrift: false,
            sourceFormat: "fuga",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "in",
            enabled: false,
            exemptableNamespaces: [
              "iste",
              "iure",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                ConfigManagementPolicyControllerMonitoringBackendsEnum.CloudMonitoring,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.MonitoringBackendUnspecified,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.MonitoringBackendUnspecified,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.CloudMonitoring,
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "est",
        },
        fleetInherited: false,
        fleetobservability: {
          "laborum": "dolores",
          "dolorem": "corporis",
          "explicabo": "nobis",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "omnis",
                clientSecret: "nemo",
                kubectlRedirectUri: "minima",
                tenant: "excepturi",
              },
              googleConfig: {
                disable: false,
              },
              name: "accusantium",
              oidcConfig: {
                certificateAuthorityData: "iure",
                clientId: "culpa",
                clientSecret: "doloribus",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "sapiente",
                groupPrefix: "architecto",
                groupsClaim: "mollitia",
                issuerUri: "dolorem",
                kubectlRedirectUri: "culpa",
                scopes: "consequuntur",
                userClaim: "repellat",
                userPrefix: "mollitia",
              },
              proxy: "occaecati",
            },
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
          ],
        },
        mesh: {
          controlPlane: ServiceMeshMembershipSpecControlPlaneEnum.Automatic,
          defaultChannel: ServiceMeshMembershipSpecDefaultChannelEnum.Stable,
          management: ServiceMeshMembershipSpecManagementEnum.ManagementUnspecified,
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "quasi",
            constraintViolationLimit: "error",
            deploymentConfigs: {
              "laborum": {
                containerResources: {
                  limits: {
                    cpu: "quasi",
                    memory: "reiciendis",
                  },
                  requests: {
                    cpu: "voluptatibus",
                    memory: "vero",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "praesentium",
                    key: "voluptatibus",
                    operator: "ipsa",
                    value: "omnis",
                  },
                  {
                    effect: "voluptate",
                    key: "cum",
                    operator: "perferendis",
                    value: "doloremque",
                  },
                ],
                replicaCount: "reprehenderit",
              },
              "ut": {
                containerResources: {
                  limits: {
                    cpu: "maiores",
                    memory: "dicta",
                  },
                  requests: {
                    cpu: "corporis",
                    memory: "dolore",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "dicta",
                    key: "harum",
                    operator: "enim",
                    value: "accusamus",
                  },
                  {
                    effect: "commodi",
                    key: "repudiandae",
                    operator: "quae",
                    value: "ipsum",
                  },
                ],
                replicaCount: "quidem",
              },
              "molestias": {
                containerResources: {
                  limits: {
                    cpu: "excepturi",
                    memory: "pariatur",
                  },
                  requests: {
                    cpu: "modi",
                    memory: "praesentium",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "voluptates",
                    key: "quasi",
                    operator: "repudiandae",
                    value: "sint",
                  },
                  {
                    effect: "veritatis",
                    key: "itaque",
                    operator: "incidunt",
                    value: "enim",
                  },
                  {
                    effect: "consequatur",
                    key: "est",
                    operator: "quibusdam",
                    value: "explicabo",
                  },
                ],
                replicaCount: "deserunt",
              },
              "distinctio": {
                containerResources: {
                  limits: {
                    cpu: "quibusdam",
                    memory: "labore",
                  },
                  requests: {
                    cpu: "modi",
                    memory: "qui",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "cupiditate",
                    key: "quos",
                    operator: "perferendis",
                    value: "magni",
                  },
                  {
                    effect: "assumenda",
                    key: "ipsam",
                    operator: "alias",
                    value: "fugit",
                  },
                ],
                replicaCount: "dolorum",
              },
            },
            exemptableNamespaces: [
              "tempora",
              "facilis",
              "tempore",
            ],
            installSpec: PolicyControllerHubConfigInstallSpecEnum.InstallSpecNotInstalled,
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
                PolicyControllerMonitoringConfigBackendsEnum.MonitoringBackendUnspecified,
                PolicyControllerMonitoringConfigBackendsEnum.CloudMonitoring,
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            policyContent: {
              bundles: {
                "provident": {
                  exemptedNamespaces: [
                    "sint",
                    "officia",
                    "dolor",
                    "debitis",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.Installed,
                },
                "dolorum": {
                  exemptedNamespaces: [
                    "in",
                    "illum",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.Installed,
                },
              },
              templateLibrary: {
                included: false,
                installation: PolicyControllerTemplateLibraryConfigInstallationEnum.All,
              },
            },
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: false,
              installation: PolicyControllerTemplateLibraryConfigInstallationEnum.InstallationUnspecified,
            },
          },
          version: "magnam",
        },
        workloadcertificate: {
          certificateManagement: MembershipSpecCertificateManagementEnum.Enabled,
        },
      },
      "facere": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "ea",
        },
        cloudbuild: {
          securityPolicy: CloudBuildMembershipSpecSecurityPolicyEnum.NonPrivileged,
          version: "laborum",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "accusamus",
              httpsProxy: "non",
              policyDir: "occaecati",
              secretType: "enim",
              syncBranch: "accusamus",
              syncRepo: "delectus",
              syncRev: "quidem",
              syncWaitSecs: "provident",
            },
            oci: {
              gcpServiceAccountEmail: "nam",
              policyDir: "id",
              secretType: "blanditiis",
              syncRepo: "deleniti",
              syncWaitSecs: "sapiente",
            },
            preventDrift: false,
            sourceFormat: "amet",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "deserunt",
            enabled: false,
            exemptableNamespaces: [
              "vel",
              "natus",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                ConfigManagementPolicyControllerMonitoringBackendsEnum.Prometheus,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.MonitoringBackendUnspecified,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "magnam",
        },
        fleetInherited: false,
        fleetobservability: {
          "id": "labore",
          "labore": "suscipit",
          "natus": "nobis",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "vero",
                clientSecret: "aspernatur",
                kubectlRedirectUri: "architecto",
                tenant: "magnam",
              },
              googleConfig: {
                disable: false,
              },
              name: "et",
              oidcConfig: {
                certificateAuthorityData: "excepturi",
                clientId: "ullam",
                clientSecret: "provident",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "quos",
                groupPrefix: "sint",
                groupsClaim: "accusantium",
                issuerUri: "mollitia",
                kubectlRedirectUri: "reiciendis",
                scopes: "mollitia",
                userClaim: "ad",
                userPrefix: "eum",
              },
              proxy: "dolor",
            },
            {
              azureadConfig: {
                clientId: "necessitatibus",
                clientSecret: "odit",
                kubectlRedirectUri: "nemo",
                tenant: "quasi",
              },
              googleConfig: {
                disable: false,
              },
              name: "iure",
              oidcConfig: {
                certificateAuthorityData: "doloribus",
                clientId: "debitis",
                clientSecret: "eius",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "maxime",
                groupPrefix: "deleniti",
                groupsClaim: "facilis",
                issuerUri: "in",
                kubectlRedirectUri: "architecto",
                scopes: "architecto",
                userClaim: "repudiandae",
                userPrefix: "ullam",
              },
              proxy: "expedita",
            },
          ],
        },
        mesh: {
          controlPlane: ServiceMeshMembershipSpecControlPlaneEnum.Automatic,
          defaultChannel: ServiceMeshMembershipSpecDefaultChannelEnum.Stable,
          management: ServiceMeshMembershipSpecManagementEnum.ManagementManual,
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "sed",
            constraintViolationLimit: "saepe",
            deploymentConfigs: {
              "accusantium": {
                containerResources: {
                  limits: {
                    cpu: "consequuntur",
                    memory: "praesentium",
                  },
                  requests: {
                    cpu: "natus",
                    memory: "magni",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "quo",
                    key: "illum",
                    operator: "pariatur",
                    value: "maxime",
                  },
                ],
                replicaCount: "ea",
              },
              "excepturi": {
                containerResources: {
                  limits: {
                    cpu: "odit",
                    memory: "ea",
                  },
                  requests: {
                    cpu: "accusantium",
                    memory: "ab",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "quidem",
                    key: "ipsam",
                    operator: "voluptate",
                    value: "autem",
                  },
                  {
                    effect: "nam",
                    key: "eaque",
                    operator: "pariatur",
                    value: "nemo",
                  },
                  {
                    effect: "voluptatibus",
                    key: "perferendis",
                    operator: "fugiat",
                    value: "amet",
                  },
                  {
                    effect: "aut",
                    key: "cumque",
                    operator: "corporis",
                    value: "hic",
                  },
                ],
                replicaCount: "libero",
              },
              "nobis": {
                containerResources: {
                  limits: {
                    cpu: "dolores",
                    memory: "quis",
                  },
                  requests: {
                    cpu: "totam",
                    memory: "dignissimos",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "quis",
                    key: "nesciunt",
                    operator: "eos",
                    value: "perferendis",
                  },
                ],
                replicaCount: "dolores",
              },
              "minus": {
                containerResources: {
                  limits: {
                    cpu: "quam",
                    memory: "dolor",
                  },
                  requests: {
                    cpu: "vero",
                    memory: "nostrum",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "recusandae",
                    key: "omnis",
                    operator: "facilis",
                    value: "perspiciatis",
                  },
                  {
                    effect: "voluptatem",
                    key: "porro",
                    operator: "consequuntur",
                    value: "blanditiis",
                  },
                  {
                    effect: "error",
                    key: "eaque",
                    operator: "occaecati",
                    value: "rerum",
                  },
                  {
                    effect: "adipisci",
                    key: "asperiores",
                    operator: "earum",
                    value: "modi",
                  },
                ],
                replicaCount: "iste",
              },
            },
            exemptableNamespaces: [
              "deleniti",
              "pariatur",
              "provident",
            ],
            installSpec: PolicyControllerHubConfigInstallSpecEnum.InstallSpecSuspended,
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                PolicyControllerMonitoringConfigBackendsEnum.CloudMonitoring,
                PolicyControllerMonitoringConfigBackendsEnum.MonitoringBackendUnspecified,
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            policyContent: {
              bundles: {
                "dolorem": {
                  exemptedNamespaces: [
                    "dolor",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
                },
                "ipsum": {
                  exemptedNamespaces: [
                    "excepturi",
                    "cum",
                    "voluptate",
                    "dignissimos",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.Installed,
                },
              },
              templateLibrary: {
                included: false,
                installation: PolicyControllerTemplateLibraryConfigInstallationEnum.InstallationUnspecified,
              },
            },
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: false,
              installation: PolicyControllerTemplateLibraryConfigInstallationEnum.All,
            },
          },
          version: "numquam",
        },
        workloadcertificate: {
          certificateManagement: MembershipSpecCertificateManagementEnum.CertificateManagementUnspecified,
        },
      },
    },
    resourceState: {
      state: FeatureResourceStateStateEnum.StateUnspecified,
    },
    scopeSpecs: {
      "iure": {
        "quaerat": "accusamus",
        "quidem": "voluptatibus",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "voluptas",
        },
      },
      appdevexperience: {
        "eos": "atque",
        "sit": "fugiat",
        "ab": "soluta",
      },
      cloudauditlogging: {
        allowlistedServiceAccounts: [
          "iusto",
          "voluptate",
          "dolorum",
        ],
      },
      fleetobservability: {
        "omnis": "necessitatibus",
        "distinctio": "asperiores",
        "nihil": "ipsum",
      },
      multiclusteringress: {
        billing: MultiClusterIngressFeatureSpecBillingEnum.PayAsYouGo,
        configMembership: "id",
      },
      workloadcertificate: {
        defaultConfig: {
          certificateManagement: MembershipSpecCertificateManagementEnum.Enabled,
        },
        provisionGoogleCa: FeatureSpecProvisionGoogleCaEnum.GoogleCaProvisioningUnspecified,
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: StatusCodeEnum.CodeUnspecified,
          description: "perferendis",
        },
      },
      fleetobservability: {
        "optio": "accusamus",
      },
      state: {
        code: FeatureStateCodeEnum.Ok,
        description: "saepe",
        updateTime: "suscipit",
      },
    },
  },
  accessToken: "deserunt",
  alt: AltEnum.Media,
  callback: "minima",
  featureId: "repellendus",
  fields: "totam",
  key: "similique",
  oauthToken: "alias",
  parent: "at",
  prettyPrint: false,
  quotaUser: "quaerat",
  requestId: "tempora",
  uploadType: "vel",
  uploadProtocol: "quod",
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->