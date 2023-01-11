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
import { ConnectorsProjectsLocationsConnectionsCreateRequest, ConnectorsProjectsLocationsConnectionsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ConnectorsProjectsLocationsConnectionsCreateRequest = {
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
    connectionId: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    authConfig: {
      additionalVariables: [
        {
          boolValue: true,
          intValue: "et",
          key: "ut",
          secretValue: {
            secretVersion: "dolorem",
          },
          stringValue: "et",
        },
      ],
      authType: "AUTH_TYPE_UNSPECIFIED",
      oauth2ClientCredentials: {
        clientId: "iste",
        clientSecret: {
          secretVersion: "vitae",
        },
      },
      oauth2JwtBearer: {
        clientKey: {
          secretVersion: "totam",
        },
        jwtClaims: {
          audience: "dolores",
          issuer: "illum",
          subject: "debitis",
        },
      },
      sshPublicKey: {
        certType: "vel",
        sshClientCert: {
          secretVersion: "odio",
        },
        sshClientCertPass: {
          secretVersion: "dolore",
        },
        username: "id",
      },
      userPassword: {
        password: {
          secretVersion: "aspernatur",
        },
        username: "accusantium",
      },
    },
    configVariables: [
      {
        boolValue: false,
        intValue: "quis",
        key: "est",
        secretValue: {
          secretVersion: "aut",
        },
        stringValue: "odit",
      },
      {
        boolValue: true,
        intValue: "voluptas",
        key: "omnis",
        secretValue: {
          secretVersion: "aut",
        },
        stringValue: "illo",
      },
      {
        boolValue: false,
        intValue: "officiis",
        key: "autem",
        secretValue: {
          secretVersion: "consectetur",
        },
        stringValue: "nobis",
      },
    ],
    connectorVersion: "odio",
    description: "qui",
    destinationConfigs: [
      {
        destinations: [
          {
            host: "ipsum",
            port: 8902041070398994519,
            serviceAttachment: "modi",
          },
          {
            host: "sint",
            port: 5392504858645185670,
            serviceAttachment: "ut",
          },
        ],
        key: "exercitationem",
      },
      {
        destinations: [
          {
            host: "reprehenderit",
            port: 4736217237333769909,
            serviceAttachment: "maiores",
          },
          {
            host: "incidunt",
            port: 7242748068272024738,
            serviceAttachment: "beatae",
          },
          {
            host: "veritatis",
            port: 2671030200101705776,
            serviceAttachment: "et",
          },
        ],
        key: "omnis",
      },
      {
        destinations: [
          {
            host: "ex",
            port: 7014402135919778893,
            serviceAttachment: "placeat",
          },
        ],
        key: "vel",
      },
    ],
    labels: {
      "mollitia": "voluptas",
      "quam": "reprehenderit",
      "qui": "qui",
    },
    lockConfig: {
      locked: false,
      reason: "in",
    },
    nodeConfig: {
      maxNodeCount: 7132033595893905170,
      minNodeCount: 8086159467323165929,
    },
    serviceAccount: "ut",
    status: {
      description: "itaque",
      state: "DELETING",
      status: "neque",
    },
    suspended: true,
  },
};

sdk.projects.connectorsProjectsLocationsConnectionsCreate(req).then((res: ConnectorsProjectsLocationsConnectionsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `connectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `connectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `connectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `connectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `connectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `connectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `connectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `connectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `connectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `connectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `connectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
