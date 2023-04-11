# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1beta/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1beta/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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
  MultiClusterIngressFeatureSpecBillingEnum,
  FeatureResourceStateStateEnum,
  PolicyControllerHubConfigInstallSpecEnum,
  PolicyControllerTemplateLibraryConfigInstallationEnum,
  PolicyControllerBundleInstallSpecManagementEnum,
  PolicyControllerMonitoringConfigBackendsEnum,
  ServiceMeshMembershipSpecControlPlaneEnum,
  ServiceMeshMembershipSpecManagementEnum,
  ConfigManagementPolicyControllerMonitoringBackendsEnum,
  MembershipSpecSecurityPolicyEnum,
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
          securityPolicy: MembershipSpecSecurityPolicyEnum.Privileged,
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
          management: ServiceMeshMembershipSpecManagementEnum.ManagementManual,
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "aut",
            constraintViolationLimit: "quasi",
            deploymentConfigs: {
              "temporibus": {
                containerResources: {
                  limits: {
                    cpu: "laborum",
                    memory: "quasi",
                  },
                  requests: {
                    cpu: "reiciendis",
                    memory: "voluptatibus",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "nihil",
                    key: "praesentium",
                    operator: "voluptatibus",
                    value: "ipsa",
                  },
                  {
                    effect: "omnis",
                    key: "voluptate",
                    operator: "cum",
                    value: "perferendis",
                  },
                  {
                    effect: "doloremque",
                    key: "reprehenderit",
                    operator: "ut",
                    value: "maiores",
                  },
                  {
                    effect: "dicta",
                    key: "corporis",
                    operator: "dolore",
                    value: "iusto",
                  },
                ],
                replicaCount: "dicta",
              },
              "harum": {
                containerResources: {
                  limits: {
                    cpu: "enim",
                    memory: "accusamus",
                  },
                  requests: {
                    cpu: "commodi",
                    memory: "repudiandae",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "ipsum",
                    key: "quidem",
                    operator: "molestias",
                    value: "excepturi",
                  },
                ],
                replicaCount: "pariatur",
              },
              "modi": {
                containerResources: {
                  limits: {
                    cpu: "praesentium",
                    memory: "rem",
                  },
                  requests: {
                    cpu: "voluptates",
                    memory: "quasi",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "sint",
                    key: "veritatis",
                    operator: "itaque",
                    value: "incidunt",
                  },
                  {
                    effect: "enim",
                    key: "consequatur",
                    operator: "est",
                    value: "quibusdam",
                  },
                  {
                    effect: "explicabo",
                    key: "deserunt",
                    operator: "distinctio",
                    value: "quibusdam",
                  },
                  {
                    effect: "labore",
                    key: "modi",
                    operator: "qui",
                    value: "aliquid",
                  },
                ],
                replicaCount: "cupiditate",
              },
            },
            exemptableNamespaces: [
              "perferendis",
              "magni",
              "assumenda",
            ],
            installSpec: PolicyControllerHubConfigInstallSpecEnum.InstallSpecNotInstalled,
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                PolicyControllerMonitoringConfigBackendsEnum.MonitoringBackendUnspecified,
              ],
            },
            mutationEnabled: false,
            policyContent: {
              bundles: {
                "excepturi": {
                  exemptedNamespaces: [
                    "facilis",
                    "tempore",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
                },
                "delectus": {
                  exemptedNamespaces: [
                    "non",
                    "eligendi",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.Installed,
                },
                "aliquid": {
                  exemptedNamespaces: [
                    "necessitatibus",
                    "sint",
                    "officia",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
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
              installation: PolicyControllerTemplateLibraryConfigInstallationEnum.All,
            },
          },
          version: "dolorum",
        },
      },
      "in": {
        anthosobservability: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "in",
        },
        cloudbuild: {
          securityPolicy: MembershipSpecSecurityPolicyEnum.Privileged,
          version: "maiores",
        },
        configmanagement: {
          binauthz: {
            enabled: false,
          },
          configSync: {
            allowVerticalScale: false,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "rerum",
              httpsProxy: "dicta",
              policyDir: "magnam",
              secretType: "cumque",
              syncBranch: "facere",
              syncRepo: "ea",
              syncRev: "aliquid",
              syncWaitSecs: "laborum",
            },
            oci: {
              gcpServiceAccountEmail: "accusamus",
              policyDir: "non",
              secretType: "occaecati",
              syncRepo: "enim",
              syncWaitSecs: "accusamus",
            },
            preventDrift: false,
            sourceFormat: "delectus",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "quidem",
            enabled: false,
            exemptableNamespaces: [
              "nam",
              "id",
              "blanditiis",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                ConfigManagementPolicyControllerMonitoringBackendsEnum.CloudMonitoring,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.MonitoringBackendUnspecified,
                ConfigManagementPolicyControllerMonitoringBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "nisi",
        },
        fleetInherited: false,
        fleetobservability: {
          "natus": "omnis",
          "molestiae": "perferendis",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "magnam",
                clientSecret: "distinctio",
                kubectlRedirectUri: "id",
                tenant: "labore",
              },
              googleConfig: {
                disable: false,
              },
              name: "labore",
              oidcConfig: {
                certificateAuthorityData: "suscipit",
                clientId: "natus",
                clientSecret: "nobis",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "eum",
                groupPrefix: "vero",
                groupsClaim: "aspernatur",
                issuerUri: "architecto",
                kubectlRedirectUri: "magnam",
                scopes: "et",
                userClaim: "excepturi",
                userPrefix: "ullam",
              },
              proxy: "provident",
            },
            {
              azureadConfig: {
                clientId: "quos",
                clientSecret: "sint",
                kubectlRedirectUri: "accusantium",
                tenant: "mollitia",
              },
              googleConfig: {
                disable: false,
              },
              name: "reiciendis",
              oidcConfig: {
                certificateAuthorityData: "mollitia",
                clientId: "ad",
                clientSecret: "eum",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "dolor",
                groupPrefix: "necessitatibus",
                groupsClaim: "odit",
                issuerUri: "nemo",
                kubectlRedirectUri: "quasi",
                scopes: "iure",
                userClaim: "doloribus",
                userPrefix: "debitis",
              },
              proxy: "eius",
            },
          ],
        },
        mesh: {
          controlPlane: ServiceMeshMembershipSpecControlPlaneEnum.Manual,
          management: ServiceMeshMembershipSpecManagementEnum.ManagementAutomatic,
        },
        policycontroller: {
          policyControllerHubConfig: {
            auditIntervalSeconds: "facilis",
            constraintViolationLimit: "in",
            deploymentConfigs: {
              "architecto": {
                containerResources: {
                  limits: {
                    cpu: "repudiandae",
                    memory: "ullam",
                  },
                  requests: {
                    cpu: "expedita",
                    memory: "nihil",
                  },
                },
                podAntiAffinity: false,
                podTolerations: [
                  {
                    effect: "quibusdam",
                    key: "sed",
                    operator: "saepe",
                    value: "pariatur",
                  },
                  {
                    effect: "accusantium",
                    key: "consequuntur",
                    operator: "praesentium",
                    value: "natus",
                  },
                  {
                    effect: "magni",
                    key: "sunt",
                    operator: "quo",
                    value: "illum",
                  },
                  {
                    effect: "pariatur",
                    key: "maxime",
                    operator: "ea",
                    value: "excepturi",
                  },
                ],
                replicaCount: "odit",
              },
            },
            exemptableNamespaces: [
              "accusantium",
              "ab",
            ],
            installSpec: PolicyControllerHubConfigInstallSpecEnum.InstallSpecSuspended,
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
                PolicyControllerMonitoringConfigBackendsEnum.Prometheus,
              ],
            },
            mutationEnabled: false,
            policyContent: {
              bundles: {
                "eaque": {
                  exemptedNamespaces: [
                    "nemo",
                    "voluptatibus",
                    "perferendis",
                    "fugiat",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
                },
                "aut": {
                  exemptedNamespaces: [
                    "corporis",
                    "hic",
                    "libero",
                    "nobis",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
                },
                "quis": {
                  exemptedNamespaces: [
                    "dignissimos",
                    "eaque",
                    "quis",
                  ],
                  management: PolicyControllerBundleInstallSpecManagementEnum.ManagementUnspecified,
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
              installation: PolicyControllerTemplateLibraryConfigInstallationEnum.InstallationUnspecified,
            },
          },
          version: "dolores",
        },
      },
    },
    resourceState: {
      state: FeatureResourceStateStateEnum.Updating,
    },
    scopeSpecs: {
      "dolor": {
        "nostrum": "hic",
        "recusandae": "omnis",
        "facilis": "perspiciatis",
        "voluptatem": "porro",
      },
      "consequuntur": {
        "error": "eaque",
        "occaecati": "rerum",
        "adipisci": "asperiores",
      },
    },
    spec: {
      anthosobservability: {
        defaultMembershipSpec: {
          doNotOptimizeMetrics: false,
          enableStackdriverOnApplications: false,
          version: "earum",
        },
      },
      appdevexperience: {
        "iste": "dolorum",
        "deleniti": "pariatur",
      },
      fleetobservability: {
        "nobis": "libero",
        "delectus": "quaerat",
        "quos": "aliquid",
      },
      multiclusteringress: {
        billing: MultiClusterIngressFeatureSpecBillingEnum.BillingUnspecified,
        configMembership: "dolorem",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: StatusCodeEnum.CodeUnspecified,
          description: "qui",
        },
      },
      fleetobservability: {
        "hic": "excepturi",
      },
      state: {
        code: FeatureStateCodeEnum.Warning,
        description: "voluptate",
        updateTime: "dignissimos",
      },
    },
  },
  accessToken: "reiciendis",
  alt: AltEnum.Json,
  callback: "dolorum",
  featureId: "numquam",
  fields: "veritatis",
  key: "ipsa",
  oauthToken: "ipsa",
  parent: "iure",
  prettyPrint: false,
  quotaUser: "odio",
  requestId: "quaerat",
  uploadType: "accusamus",
  uploadProtocol: "quidem",
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsNamespacesCreate` - Creates a fleet namespace.
* `gkehubProjectsLocationsNamespacesList` - Lists fleet namespaces.
* `gkehubProjectsLocationsNamespacesRbacrolebindingsCreate` - Creates a RBACRoleBinding.
* `gkehubProjectsLocationsNamespacesRbacrolebindingsList` - Lists RBACRoleBinding.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehubProjectsLocationsScopesCreate` - Creates a Scope.
* `gkehubProjectsLocationsScopesDelete` - Deletes a Scope.
* `gkehubProjectsLocationsScopesGet` - Returns the details of a Scope.
* `gkehubProjectsLocationsScopesList` - Lists Scopes.
* `gkehubProjectsLocationsScopesPatch` - Updates a scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

