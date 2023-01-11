<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GkehubProjectsLocationsFeaturesCreateRequest, GkehubProjectsLocationsFeaturesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GkehubProjectsLocationsFeaturesCreateRequest = {
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
    featureId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    requestId: "rerum",
    uploadType: "dicta",
    uploadProtocol: "debitis",
  },
  request: {
    labels: {
      "et": "ut",
    },
    membershipSpecs: {
      "et": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: true,
          version: "vitae",
        },
        cloudbuild: {
          securityPolicy: "PRIVILEGED",
          version: "dolores",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: true,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "odio",
              httpsProxy: "dolore",
              policyDir: "id",
              secretType: "aspernatur",
              syncBranch: "accusantium",
              syncRepo: "totam",
              syncRev: "commodi",
              syncWaitSecs: "quis",
            },
            oci: {
              gcpServiceAccountEmail: "est",
              policyDir: "aut",
              secretType: "odit",
              syncRepo: "non",
              syncWaitSecs: "voluptas",
            },
            preventDrift: true,
            sourceFormat: "aut",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "autem",
            enabled: true,
            exemptableNamespaces: [
              "odio",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "MONITORING_BACKEND_UNSPECIFIED",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryInstalled: true,
          },
          version: "ut",
        },
        fleetInherited: false,
        fleetobservability: {
          "reprehenderit": "tempore",
          "maiores": "incidunt",
          "dolor": "beatae",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "in",
                clientSecret: "et",
                kubectlRedirectUri: "omnis",
                tenant: "ipsum",
              },
              googleConfig: {
                disable: true,
              },
              name: "dolores",
              oidcConfig: {
                certificateAuthorityData: "placeat",
                clientId: "vel",
                clientSecret: "rerum",
                deployCloudConsoleProxy: true,
                enableAccessToken: true,
                extraParams: "quam",
                groupPrefix: "reprehenderit",
                groupsClaim: "qui",
                issuerUri: "qui",
                kubectlRedirectUri: "unde",
                scopes: "in",
                userClaim: "autem",
                userPrefix: "qui",
              },
              proxy: "ut",
            },
            {
              azureadConfig: {
                clientId: "itaque",
                clientSecret: "ab",
                kubectlRedirectUri: "neque",
                tenant: "ullam",
              },
              googleConfig: {
                disable: true,
              },
              name: "accusantium",
              oidcConfig: {
                certificateAuthorityData: "esse",
                clientId: "architecto",
                clientSecret: "quam",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "soluta",
                groupPrefix: "sunt",
                groupsClaim: "voluptates",
                issuerUri: "magni",
                kubectlRedirectUri: "et",
                scopes: "optio",
                userClaim: "qui",
                userPrefix: "earum",
              },
              proxy: "illo",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          defaultChannel: "REGULAR",
          management: "MANAGEMENT_MANUAL",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "dolor",
            exemptableNamespaces: [
              "error",
              "reprehenderit",
            ],
            installSpec: "INSTALL_SPEC_SUSPENDED",
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "CLOUD_MONITORING",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: true,
            },
          },
          version: "aut",
        },
        workloadcertificate: {
          certificateManagement: "ENABLED",
        },
      },
      "consequuntur": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: true,
          version: "ipsa",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "doloremque",
        },
        configmanagement: {
          binauthz: {
            enabled: true,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "quisquam",
              httpsProxy: "explicabo",
              policyDir: "ea",
              secretType: "maxime",
              syncBranch: "eum",
              syncRepo: "perferendis",
              syncRev: "et",
              syncWaitSecs: "rerum",
            },
            oci: {
              gcpServiceAccountEmail: "reiciendis",
              policyDir: "quis",
              secretType: "cumque",
              syncRepo: "minima",
              syncWaitSecs: "necessitatibus",
            },
            preventDrift: true,
            sourceFormat: "quis",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "impedit",
            enabled: true,
            exemptableNamespaces: [
              "vel",
              "qui",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "CLOUD_MONITORING",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "sit",
        },
        fleetInherited: false,
        fleetobservability: {
          "vel": "vel",
          "placeat": "qui",
          "nisi": "quis",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "porro",
                clientSecret: "rerum",
                kubectlRedirectUri: "et",
                tenant: "accusamus",
              },
              googleConfig: {
                disable: true,
              },
              name: "laborum",
              oidcConfig: {
                certificateAuthorityData: "rerum",
                clientId: "ut",
                clientSecret: "laborum",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "minus",
                groupPrefix: "soluta",
                groupsClaim: "aperiam",
                issuerUri: "consequuntur",
                kubectlRedirectUri: "excepturi",
                scopes: "mollitia",
                userClaim: "inventore",
                userPrefix: "delectus",
              },
              proxy: "ipsa",
            },
            {
              azureadConfig: {
                clientId: "animi",
                clientSecret: "animi",
                kubectlRedirectUri: "ut",
                tenant: "aliquam",
              },
              googleConfig: {
                disable: false,
              },
              name: "sed",
              oidcConfig: {
                certificateAuthorityData: "sed",
                clientId: "et",
                clientSecret: "consequuntur",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "provident",
                groupPrefix: "molestiae",
                groupsClaim: "pariatur",
                issuerUri: "quasi",
                kubectlRedirectUri: "corrupti",
                scopes: "enim",
                userClaim: "qui",
                userPrefix: "sit",
              },
              proxy: "possimus",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          defaultChannel: "REGULAR",
          management: "MANAGEMENT_MANUAL",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "quia",
            exemptableNamespaces: [
              "est",
              "occaecati",
            ],
            installSpec: "INSTALL_SPEC_NOT_INSTALLED",
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "CLOUD_MONITORING",
                "MONITORING_BACKEND_UNSPECIFIED",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryConfig: {
              included: true,
            },
          },
          version: "in",
        },
        workloadcertificate: {
          certificateManagement: "ENABLED",
        },
      },
      "voluptatem": {
        anthosobservability: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "saepe",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "earum",
        },
        configmanagement: {
          binauthz: {
            enabled: true,
          },
          configSync: {
            allowVerticalScale: true,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "et",
              httpsProxy: "est",
              policyDir: "ipsum",
              secretType: "quam",
              syncBranch: "voluptas",
              syncRepo: "nihil",
              syncRev: "dolores",
              syncWaitSecs: "suscipit",
            },
            oci: {
              gcpServiceAccountEmail: "impedit",
              policyDir: "non",
              secretType: "magnam",
              syncRepo: "ut",
              syncWaitSecs: "possimus",
            },
            preventDrift: true,
            sourceFormat: "qui",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "enim",
            enabled: true,
            exemptableNamespaces: [
              "delectus",
            ],
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryInstalled: false,
          },
          version: "voluptas",
        },
        fleetInherited: false,
        fleetobservability: {
          "a": "qui",
          "excepturi": "autem",
          "corporis": "dicta",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "doloremque",
                clientSecret: "quae",
                kubectlRedirectUri: "nisi",
                tenant: "recusandae",
              },
              googleConfig: {
                disable: false,
              },
              name: "minus",
              oidcConfig: {
                certificateAuthorityData: "et",
                clientId: "rerum",
                clientSecret: "ut",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "et",
                groupPrefix: "reiciendis",
                groupsClaim: "aspernatur",
                issuerUri: "praesentium",
                kubectlRedirectUri: "porro",
                scopes: "nihil",
                userClaim: "adipisci",
                userPrefix: "consequatur",
              },
              proxy: "illum",
            },
            {
              azureadConfig: {
                clientId: "accusantium",
                clientSecret: "atque",
                kubectlRedirectUri: "amet",
                tenant: "nisi",
              },
              googleConfig: {
                disable: true,
              },
              name: "est",
              oidcConfig: {
                certificateAuthorityData: "quo",
                clientId: "vero",
                clientSecret: "alias",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "eius",
                groupPrefix: "repellat",
                groupsClaim: "beatae",
                issuerUri: "omnis",
                kubectlRedirectUri: "totam",
                scopes: "aut",
                userClaim: "et",
                userPrefix: "magni",
              },
              proxy: "necessitatibus",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          defaultChannel: "REGULAR",
          management: "MANAGEMENT_UNSPECIFIED",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "voluptas",
            exemptableNamespaces: [
              "veniam",
              "architecto",
            ],
            installSpec: "INSTALL_SPEC_SUSPENDED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
                "CLOUD_MONITORING",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: true,
            templateLibraryConfig: {
              included: true,
            },
          },
          version: "quo",
        },
        workloadcertificate: {
          certificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
        },
      },
    },
    resourceState: {
      state: "STATE_UNSPECIFIED",
    },
    scopeSpecs: {
      "commodi": {
        "facere": "in",
        "et": "odit",
      },
      "est": {
        "ipsum": "aut",
        "perspiciatis": "et",
        "vero": "voluptatem",
      },
      "ex": {
        "vero": "distinctio",
        "cumque": "ea",
        "non": "non",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "quae",
        },
      },
      appdevexperience: {
        "magni": "minus",
      },
      cloudauditlogging: {
        allowlistedServiceAccounts: [
          "aut",
        ],
      },
      fleetobservability: {
        "iusto": "quia",
      },
      multiclusteringress: {
        billing: "PAY_AS_YOU_GO",
        configMembership: "debitis",
      },
      workloadcertificate: {
        defaultConfig: {
          certificateManagement: "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
        },
        provisionGoogleCa: "DISABLED",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "OK",
          description: "ut",
        },
      },
      fleetobservability: {
        "nihil": "laborum",
        "recusandae": "nihil",
        "exercitationem": "iste",
      },
      state: {
        code: "ERROR",
        description: "id",
        updateTime: "autem",
      },
    },
  },
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->