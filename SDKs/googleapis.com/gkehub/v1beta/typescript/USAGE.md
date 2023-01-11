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
          management: "MANAGEMENT_AUTOMATIC",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "consequatur",
            exemptableNamespaces: [
              "commodi",
              "error",
            ],
            installSpec: "INSTALL_SPEC_SUSPENDED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "soluta",
        },
      },
      "aut": {
        anthosobservability: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "laudantium",
        },
        cloudbuild: {
          securityPolicy: "SECURITY_POLICY_UNSPECIFIED",
          version: "ipsa",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "atque",
              httpsProxy: "ratione",
              policyDir: "quisquam",
              secretType: "explicabo",
              syncBranch: "ea",
              syncRepo: "maxime",
              syncRev: "eum",
              syncWaitSecs: "perferendis",
            },
            oci: {
              gcpServiceAccountEmail: "et",
              policyDir: "rerum",
              secretType: "reiciendis",
              syncRepo: "quis",
              syncWaitSecs: "cumque",
            },
            preventDrift: true,
            sourceFormat: "necessitatibus",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: true,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "labore",
            enabled: false,
            exemptableNamespaces: [
              "ad",
              "expedita",
            ],
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: true,
            templateLibraryInstalled: false,
          },
          version: "sunt",
        },
        fleetInherited: false,
        fleetobservability: {
          "quis": "vel",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "placeat",
                clientSecret: "qui",
                kubectlRedirectUri: "nisi",
                tenant: "quis",
              },
              googleConfig: {
                disable: false,
              },
              name: "porro",
              oidcConfig: {
                certificateAuthorityData: "rerum",
                clientId: "et",
                clientSecret: "accusamus",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "rerum",
                groupPrefix: "ut",
                groupsClaim: "laborum",
                issuerUri: "fugit",
                kubectlRedirectUri: "quis",
                scopes: "minus",
                userClaim: "soluta",
                userPrefix: "aperiam",
              },
              proxy: "consequuntur",
            },
            {
              azureadConfig: {
                clientId: "excepturi",
                clientSecret: "mollitia",
                kubectlRedirectUri: "inventore",
                tenant: "delectus",
              },
              googleConfig: {
                disable: false,
              },
              name: "animi",
              oidcConfig: {
                certificateAuthorityData: "animi",
                clientId: "ut",
                clientSecret: "aliquam",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "sed",
                groupPrefix: "et",
                groupsClaim: "consequuntur",
                issuerUri: "non",
                kubectlRedirectUri: "cupiditate",
                scopes: "provident",
                userClaim: "molestiae",
                userPrefix: "pariatur",
              },
              proxy: "quasi",
            },
          ],
        },
        mesh: {
          controlPlane: "MANUAL",
          management: "MANAGEMENT_AUTOMATIC",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "qui",
            exemptableNamespaces: [
              "possimus",
              "modi",
            ],
            installSpec: "INSTALL_SPEC_ENABLED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "voluptatem",
        },
      },
      "quia": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "quae",
        },
        cloudbuild: {
          securityPolicy: "NON_PRIVILEGED",
          version: "ut",
        },
        configmanagement: {
          binauthz: {
            enabled: true,
          },
          configSync: {
            allowVerticalScale: true,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "voluptatem",
              httpsProxy: "dolorum",
              policyDir: "doloribus",
              secretType: "saepe",
              syncBranch: "sunt",
              syncRepo: "earum",
              syncRev: "et",
              syncWaitSecs: "ut",
            },
            oci: {
              gcpServiceAccountEmail: "asperiores",
              policyDir: "et",
              secretType: "est",
              syncRepo: "ipsum",
              syncWaitSecs: "quam",
            },
            preventDrift: false,
            sourceFormat: "nihil",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: false,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "non",
            enabled: false,
            exemptableNamespaces: [
              "possimus",
              "illo",
              "qui",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "PROMETHEUS",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: true,
            templateLibraryInstalled: true,
          },
          version: "dolore",
        },
        fleetInherited: true,
        fleetobservability: {
          "officia": "modi",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "voluptas",
                clientSecret: "amet",
                kubectlRedirectUri: "et",
                tenant: "a",
              },
              googleConfig: {
                disable: false,
              },
              name: "excepturi",
              oidcConfig: {
                certificateAuthorityData: "autem",
                clientId: "corporis",
                clientSecret: "dicta",
                deployCloudConsoleProxy: true,
                enableAccessToken: true,
                extraParams: "quae",
                groupPrefix: "nisi",
                groupsClaim: "recusandae",
                issuerUri: "qui",
                kubectlRedirectUri: "minus",
                scopes: "et",
                userClaim: "rerum",
                userPrefix: "ut",
              },
              proxy: "rem",
            },
            {
              azureadConfig: {
                clientId: "eos",
                clientSecret: "et",
                kubectlRedirectUri: "reiciendis",
                tenant: "aspernatur",
              },
              googleConfig: {
                disable: true,
              },
              name: "porro",
              oidcConfig: {
                certificateAuthorityData: "nihil",
                clientId: "adipisci",
                clientSecret: "consequatur",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "atque",
                groupPrefix: "amet",
                groupsClaim: "nisi",
                issuerUri: "quidem",
                kubectlRedirectUri: "est",
                scopes: "quo",
                userClaim: "vero",
                userPrefix: "alias",
              },
              proxy: "totam",
            },
          ],
        },
        mesh: {
          controlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
          management: "MANAGEMENT_AUTOMATIC",
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "repellat",
            exemptableNamespaces: [
              "omnis",
              "totam",
              "aut",
            ],
            installSpec: "INSTALL_SPEC_UNSPECIFIED",
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "PROMETHEUS",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryConfig: {
              included: false,
            },
          },
          version: "veniam",
        },
      },
    },
    resourceState: {
      state: "ENABLING",
    },
    scopeSpecs: {
      "rerum": {
        "et": "saepe",
        "commodi": "in",
        "quibusdam": "asperiores",
      },
      "quo": {
        "soluta": "tempora",
      },
      "commodi": {
        "facere": "in",
        "et": "odit",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: true,
          enableStackdriverOnApplications: true,
          version: "ipsum",
        },
      },
      appdevexperience: {
        "perspiciatis": "et",
      },
      fleetobservability: {
        "voluptatem": "ex",
        "magni": "vero",
      },
      multiclusteringress: {
        billing: "BILLING_UNSPECIFIED",
        configMembership: "cumque",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "UNKNOWN",
          description: "non",
        },
      },
      fleetobservability: {
        "nam": "beatae",
        "quae": "qui",
        "magni": "minus",
      },
      state: {
        code: "CODE_UNSPECIFIED",
        description: "aut",
        updateTime: "neque",
      },
    },
  },
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->