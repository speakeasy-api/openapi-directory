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
        configmanagement: {
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "vitae",
              httpsProxy: "totam",
              policyDir: "dolores",
              secretType: "illum",
              syncBranch: "debitis",
              syncRepo: "vel",
              syncRev: "odio",
              syncWaitSecs: "dolore",
            },
            oci: {
              gcpServiceAccountEmail: "id",
              policyDir: "aspernatur",
              secretType: "accusantium",
              syncRepo: "totam",
              syncWaitSecs: "commodi",
            },
            preventDrift: true,
            sourceFormat: "est",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: true,
            enablePodTreeLabels: true,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "voluptas",
            enabled: true,
            exemptableNamespaces: [
              "illo",
            ],
            logDeniesEnabled: false,
            monitoring: {
              backends: [
                "PROMETHEUS",
                "MONITORING_BACKEND_UNSPECIFIED",
              ],
            },
            mutationEnabled: false,
            referentialRulesEnabled: false,
            templateLibraryInstalled: false,
          },
          version: "recusandae",
        },
        fleetInherited: true,
        fleetobservability: {
          "eveniet": "modi",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "inventore",
                clientSecret: "ut",
                kubectlRedirectUri: "exercitationem",
                tenant: "aut",
              },
              googleConfig: {
                disable: false,
              },
              name: "tempore",
              oidcConfig: {
                certificateAuthorityData: "maiores",
                clientId: "incidunt",
                clientSecret: "dolor",
                deployCloudConsoleProxy: false,
                enableAccessToken: true,
                extraParams: "in",
                groupPrefix: "et",
                groupsClaim: "omnis",
                issuerUri: "ipsum",
                kubectlRedirectUri: "ex",
                scopes: "dolores",
                userClaim: "placeat",
                userPrefix: "vel",
              },
              proxy: "rerum",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          management: "MANAGEMENT_AUTOMATIC",
        },
      },
      "quam": {
        configmanagement: {
          configSync: {
            allowVerticalScale: false,
            enabled: true,
            git: {
              gcpServiceAccountEmail: "qui",
              httpsProxy: "unde",
              policyDir: "in",
              secretType: "autem",
              syncBranch: "qui",
              syncRepo: "ut",
              syncRev: "itaque",
              syncWaitSecs: "ab",
            },
            oci: {
              gcpServiceAccountEmail: "neque",
              policyDir: "ullam",
              secretType: "et",
              syncRepo: "accusantium",
              syncWaitSecs: "esse",
            },
            preventDrift: true,
            sourceFormat: "quam",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: false,
            enabled: true,
          },
          policyController: {
            auditIntervalSeconds: "sunt",
            enabled: false,
            exemptableNamespaces: [
              "et",
              "optio",
              "qui",
            ],
            logDeniesEnabled: true,
            monitoring: {
              backends: [
                "PROMETHEUS",
              ],
            },
            mutationEnabled: true,
            referentialRulesEnabled: false,
            templateLibraryInstalled: true,
          },
          version: "commodi",
        },
        fleetInherited: true,
        fleetobservability: {
          "consectetur": "nostrum",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "laboriosam",
                clientSecret: "sed",
                kubectlRedirectUri: "a",
                tenant: "soluta",
              },
              googleConfig: {
                disable: true,
              },
              name: "quas",
              oidcConfig: {
                certificateAuthorityData: "consequuntur",
                clientId: "laudantium",
                clientSecret: "autem",
                deployCloudConsoleProxy: true,
                enableAccessToken: false,
                extraParams: "doloremque",
                groupPrefix: "perferendis",
                groupsClaim: "atque",
                issuerUri: "ratione",
                kubectlRedirectUri: "quisquam",
                scopes: "explicabo",
                userClaim: "ea",
                userPrefix: "maxime",
              },
              proxy: "eum",
            },
          ],
        },
        mesh: {
          controlPlane: "AUTOMATIC",
          management: "MANAGEMENT_UNSPECIFIED",
        },
      },
      "rerum": {
        configmanagement: {
          configSync: {
            allowVerticalScale: true,
            enabled: false,
            git: {
              gcpServiceAccountEmail: "cumque",
              httpsProxy: "minima",
              policyDir: "necessitatibus",
              secretType: "est",
              syncBranch: "quis",
              syncRepo: "eum",
              syncRev: "labore",
              syncWaitSecs: "et",
            },
            oci: {
              gcpServiceAccountEmail: "impedit",
              policyDir: "ad",
              secretType: "expedita",
              syncRepo: "vel",
              syncWaitSecs: "qui",
            },
            preventDrift: false,
            sourceFormat: "nihil",
          },
          hierarchyController: {
            enableHierarchicalResourceQuota: false,
            enablePodTreeLabels: true,
            enabled: false,
          },
          policyController: {
            auditIntervalSeconds: "sunt",
            enabled: false,
            exemptableNamespaces: [
              "quis",
            ],
            logDeniesEnabled: false,
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
          version: "porro",
        },
        fleetInherited: true,
        fleetobservability: {
          "accusamus": "numquam",
        },
        identityservice: {
          authMethods: [
            {
              azureadConfig: {
                clientId: "rerum",
                clientSecret: "ut",
                kubectlRedirectUri: "laborum",
                tenant: "fugit",
              },
              googleConfig: {
                disable: false,
              },
              name: "minus",
              oidcConfig: {
                certificateAuthorityData: "soluta",
                clientId: "aperiam",
                clientSecret: "consequuntur",
                deployCloudConsoleProxy: true,
                enableAccessToken: true,
                extraParams: "inventore",
                groupPrefix: "delectus",
                groupsClaim: "ipsa",
                issuerUri: "animi",
                kubectlRedirectUri: "animi",
                scopes: "ut",
                userClaim: "aliquam",
                userPrefix: "fuga",
              },
              proxy: "sed",
            },
            {
              azureadConfig: {
                clientId: "sed",
                clientSecret: "et",
                kubectlRedirectUri: "consequuntur",
                tenant: "non",
              },
              googleConfig: {
                disable: true,
              },
              name: "provident",
              oidcConfig: {
                certificateAuthorityData: "molestiae",
                clientId: "pariatur",
                clientSecret: "quasi",
                deployCloudConsoleProxy: false,
                enableAccessToken: false,
                extraParams: "qui",
                groupPrefix: "sit",
                groupsClaim: "possimus",
                issuerUri: "modi",
                kubectlRedirectUri: "neque",
                scopes: "consequuntur",
                userClaim: "quia",
                userPrefix: "et",
              },
              proxy: "est",
            },
            {
              azureadConfig: {
                clientId: "occaecati",
                clientSecret: "ex",
                kubectlRedirectUri: "voluptatem",
                tenant: "quia",
              },
              googleConfig: {
                disable: false,
              },
              name: "velit",
              oidcConfig: {
                certificateAuthorityData: "quae",
                clientId: "est",
                clientSecret: "ut",
                deployCloudConsoleProxy: true,
                enableAccessToken: true,
                extraParams: "possimus",
                groupPrefix: "voluptatem",
                groupsClaim: "dolorum",
                issuerUri: "doloribus",
                kubectlRedirectUri: "saepe",
                scopes: "sunt",
                userClaim: "earum",
                userPrefix: "et",
              },
              proxy: "ut",
            },
          ],
        },
        mesh: {
          controlPlane: "CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
          management: "MANAGEMENT_UNSPECIFIED",
        },
      },
    },
    resourceState: {
      state: "DISABLING",
    },
    scopeSpecs: {
      "quam": {
        "nihil": "dolores",
      },
    },
    spec: {
      appdevexperience: {
        "impedit": "non",
        "magnam": "ut",
      },
      fleetobservability: {
        "illo": "qui",
        "quia": "ipsam",
        "ducimus": "enim",
      },
      multiclusteringress: {
        configMembership: "blanditiis",
      },
    },
    state: {
      appdevexperience: {
        networkingInstallSucceeded: {
          code: "CODE_UNSPECIFIED",
          description: "delectus",
        },
      },
      fleetobservability: {
        "dolore": "repellat",
        "velit": "officia",
      },
      state: {
        code: "OK",
        description: "sunt",
        updateTime: "voluptas",
      },
    },
  },
};

sdk.projects.gkehubProjectsLocationsFeaturesCreate(req).then((res: GkehubProjectsLocationsFeaturesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsPatch` - Updates an existing Membership.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehubProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
