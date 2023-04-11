# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/connectors/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectorsProjectsLocationsConnectionsActionsExecuteRequest,
  ConnectorsProjectsLocationsConnectionsActionsExecuteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectorsProjectsLocationsConnectionsActionsExecuteRequest = {
  dollarXgafv: XgafvEnum.Two,
  executeActionRequest: {
    parameters: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
  },
  accessToken: "vel",
  alt: AltEnum.Media,
  callback: "deserunt",
  fields: "suscipit",
  key: "iure",
  name: "magnam",
  oauthToken: "debitis",
  prettyPrint: false,
  quotaUser: "ipsa",
  uploadType: "delectus",
  uploadProtocol: "tempora",
};

sdk.projects.connectorsProjectsLocationsConnectionsActionsExecute(req).then((res: ConnectorsProjectsLocationsConnectionsActionsExecuteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `connectorsProjectsLocationsConnectionsActionsExecute` - Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
* `connectorsProjectsLocationsConnectionsActionsList` - Gets the schema of all the actions supported by the connector.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesCreate` - Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesDelete` - Deletes an existing entity row matching the entity type and entity id specified in the request.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditions` - Deletes entities based on conditions specified in the request and not on entity id.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesGet` - Gets a single entity row matching the entity type and entity id specified in the request.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesList` - Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesPatch` - Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
* `connectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditions` - Updates entities based on conditions specified in the request and not on entity id.
* `connectorsProjectsLocationsConnectionsEntityTypesList` - Lists metadata related to all entity types present in the external system.
* `connectorsProjectsLocationsConnectionsExecuteSqlQuery` - Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

