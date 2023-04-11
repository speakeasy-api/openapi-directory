# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastream/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastream/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DatastreamProjectsLocationsConnectionProfilesCreateRequest,
  DatastreamProjectsLocationsConnectionProfilesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DatastreamProjectsLocationsConnectionProfilesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  connectionProfileInput: {
    bigqueryProfile: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    displayName: "vel",
    forwardSshConnectivity: {
      hostname: "physical-pegboard.info",
      password: "iure",
      port: 297534,
      privateKey: "debitis",
      username: "Anahi38",
    },
    gcsProfile: {
      bucket: "molestiae",
      rootPath: "minus",
    },
    labels: {
      "voluptatum": "iusto",
      "excepturi": "nisi",
      "recusandae": "temporibus",
      "ab": "quis",
    },
    mysqlProfile: {
      hostname: "bountiful-pension.com",
      password: "ipsam",
      port: 832620,
      sslConfig: {
        caCertificate: "sapiente",
        clientCertificate: "quo",
        clientKey: "odit",
      },
      username: "Sarah.Strosin79",
    },
    oracleProfile: {
      connectionAttributes: {
        "esse": "totam",
        "porro": "dolorum",
        "dicta": "nam",
        "officia": "occaecati",
      },
      databaseService: "fugit",
      hostname: "miserly-usage.net",
      password: "totam",
      port: 105907,
      username: "Haskell18",
    },
    postgresqlProfile: {
      database: "impedit",
      hostname: "several-increase.biz",
      password: "excepturi",
      port: 135218,
      username: "Aiden.Hane",
    },
    privateConnectivity: {
      privateConnection: "iste",
    },
    staticServiceIpConnectivity: {
      "natus": "laboriosam",
    },
  },
  accessToken: "hic",
  alt: AltEnum.Proto,
  callback: "fuga",
  connectionProfileId: "in",
  fields: "corporis",
  force: false,
  key: "iste",
  oauthToken: "iure",
  parent: "saepe",
  prettyPrint: false,
  quotaUser: "quidem",
  requestId: "architecto",
  uploadType: "ipsa",
  uploadProtocol: "reiciendis",
  validateOnly: false,
};

sdk.projects.datastreamProjectsLocationsConnectionProfilesCreate(req).then((res: DatastreamProjectsLocationsConnectionProfilesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `datastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `datastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `datastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `datastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `datastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `datastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `datastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `datastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `datastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `datastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `datastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `datastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `datastreamProjectsLocationsStreamsObjectsLookup` - Use this method to look up a stream object by its source object identifier.
* `datastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Use this method to start a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Use this method to stop a backfill job for the specified stream object.
* `datastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

