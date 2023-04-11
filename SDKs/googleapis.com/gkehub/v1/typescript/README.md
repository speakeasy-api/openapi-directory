# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/gkehub/v1/typescript
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `gkehubProjectsLocationsFeaturesCreate` - Adds a new Feature.
* `gkehubProjectsLocationsFeaturesList` - Lists Features in a given project and location.
* `gkehubProjectsLocationsList` - Lists information about the supported locations for this service.
* `gkehubProjectsLocationsMembershipsBindingsCreate` - Creates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsBindingsList` - Lists MembershipBindings.
* `gkehubProjectsLocationsMembershipsBindingsPatch` - Updates a MembershipBinding.
* `gkehubProjectsLocationsMembershipsCreate` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehubProjectsLocationsMembershipsGenerateConnectManifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehubProjectsLocationsMembershipsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehubProjectsLocationsMembershipsList` - Lists Memberships in a given project and location.
* `gkehubProjectsLocationsMembershipsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehubProjectsLocationsMembershipsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehubProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehubProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehubProjectsLocationsScopesCreate` - Creates a Scope.
* `gkehubProjectsLocationsScopesDelete` - Deletes a Scope.
* `gkehubProjectsLocationsScopesGet` - Returns the details of a Scope.
* `gkehubProjectsLocationsScopesList` - Lists Scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

