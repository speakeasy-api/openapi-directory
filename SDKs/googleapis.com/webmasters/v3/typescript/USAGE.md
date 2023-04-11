<!-- Start SDK Example Usage -->
```typescript
import {
  WebmastersSearchanalyticsQueryRequest,
  WebmastersSearchanalyticsQueryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebmastersSearchanalyticsQueryRequest = {
  searchAnalyticsQueryRequest: {
    aggregationType: "corrupti",
    dataState: "provident",
    dimensionFilterGroups: [
      {
        filters: [
          {
            dimension: "unde",
            expression: "nulla",
            operator: "corrupti",
          },
          {
            dimension: "illum",
            expression: "vel",
            operator: "error",
          },
          {
            dimension: "deserunt",
            expression: "suscipit",
            operator: "iure",
          },
          {
            dimension: "magnam",
            expression: "debitis",
            operator: "ipsa",
          },
        ],
        groupType: "delectus",
      },
      {
        filters: [
          {
            dimension: "suscipit",
            expression: "molestiae",
            operator: "minus",
          },
          {
            dimension: "placeat",
            expression: "voluptatum",
            operator: "iusto",
          },
        ],
        groupType: "excepturi",
      },
      {
        filters: [
          {
            dimension: "recusandae",
            expression: "temporibus",
            operator: "ab",
          },
          {
            dimension: "quis",
            expression: "veritatis",
            operator: "deserunt",
          },
        ],
        groupType: "perferendis",
      },
    ],
    dimensions: [
      "repellendus",
      "sapiente",
    ],
    endDate: "quo",
    rowLimit: 140350,
    searchType: "at",
    startDate: "at",
    startRow: 978619,
  },
  alt: AltEnum.Json,
  fields: "molestiae",
  key: "quod",
  oauthToken: "quod",
  prettyPrint: false,
  quotaUser: "esse",
  siteUrl: "totam",
  userIp: "porro",
};

sdk.searchanalytics.webmastersSearchanalyticsQuery(req).then((res: WebmastersSearchanalyticsQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->