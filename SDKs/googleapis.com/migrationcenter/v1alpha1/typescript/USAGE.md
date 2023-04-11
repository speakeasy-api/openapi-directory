<!-- Start SDK Example Usage -->
```typescript
import {
  MigrationcenterProjectsLocationsAssetsAggregateValuesRequest,
  MigrationcenterProjectsLocationsAssetsAggregateValuesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MigrationcenterProjectsLocationsAssetsAggregateValuesRequest = {
  dollarXgafv: XgafvEnum.Two,
  aggregateAssetsValuesRequest: {
    aggregations: [
      {
        count: {
          "quibusdam": "unde",
          "nulla": "corrupti",
          "illum": "vel",
        },
        field: "error",
        frequency: {
          "suscipit": "iure",
          "magnam": "debitis",
          "ipsa": "delectus",
        },
        histogram: {
          lowerBounds: [
            3834.41,
            4776.65,
          ],
        },
        sum: {
          "placeat": "voluptatum",
          "iusto": "excepturi",
          "nisi": "recusandae",
          "temporibus": "ab",
        },
      },
      {
        count: {
          "veritatis": "deserunt",
          "perferendis": "ipsam",
        },
        field: "repellendus",
        frequency: {
          "quo": "odit",
          "at": "at",
          "maiores": "molestiae",
          "quod": "quod",
        },
        histogram: {
          lowerBounds: [
            5204.78,
            7805.29,
          ],
        },
        sum: {
          "dicta": "nam",
          "officia": "occaecati",
          "fugit": "deleniti",
        },
      },
      {
        count: {
          "optio": "totam",
          "beatae": "commodi",
          "molestiae": "modi",
          "qui": "impedit",
        },
        field: "cum",
        frequency: {
          "ipsum": "excepturi",
          "aspernatur": "perferendis",
        },
        histogram: {
          lowerBounds: [
            6176.36,
            1496.75,
          ],
        },
        sum: {
          "dolor": "natus",
          "laboriosam": "hic",
          "saepe": "fuga",
        },
      },
    ],
    filter: "in",
  },
  accessToken: "corporis",
  alt: AltEnum.Media,
  callback: "iure",
  fields: "saepe",
  key: "quidem",
  oauthToken: "architecto",
  parent: "ipsa",
  prettyPrint: false,
  quotaUser: "reiciendis",
  uploadType: "est",
  uploadProtocol: "mollitia",
};

sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req).then((res: MigrationcenterProjectsLocationsAssetsAggregateValuesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->