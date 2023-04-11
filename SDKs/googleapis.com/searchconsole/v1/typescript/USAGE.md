<!-- Start SDK Example Usage -->
```typescript
import {
  WebmastersSearchanalyticsQueryRequest,
  WebmastersSearchanalyticsQueryResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  SearchAnalyticsQueryRequestAggregationTypeEnum,
  SearchAnalyticsQueryRequestDataStateEnum,
  SearchAnalyticsQueryRequestDimensionsEnum,
  SearchAnalyticsQueryRequestSearchTypeEnum,
  SearchAnalyticsQueryRequestTypeEnum,
  ApiDimensionFilterGroupGroupTypeEnum,
  ApiDimensionFilterDimensionEnum,
  ApiDimensionFilterOperatorEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: WebmastersSearchanalyticsQueryRequest = {
  dollarXgafv: XgafvEnum.Two,
  searchAnalyticsQueryRequest: {
    aggregationType: SearchAnalyticsQueryRequestAggregationTypeEnum.ByProperty,
    dataState: SearchAnalyticsQueryRequestDataStateEnum.All,
    dimensionFilterGroups: [
      {
        filters: [
          {
            dimension: ApiDimensionFilterDimensionEnum.SearchAppearance,
            expression: "corrupti",
            operator: ApiDimensionFilterOperatorEnum.ExcludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Country,
            expression: "error",
            operator: ApiDimensionFilterOperatorEnum.NotContains,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Page,
            expression: "iure",
            operator: ApiDimensionFilterOperatorEnum.NotEquals,
          },
        ],
        groupType: ApiDimensionFilterGroupGroupTypeEnum.And,
      },
      {
        filters: [
          {
            dimension: ApiDimensionFilterDimensionEnum.Query,
            expression: "delectus",
            operator: ApiDimensionFilterOperatorEnum.NotEquals,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Page,
            expression: "molestiae",
            operator: ApiDimensionFilterOperatorEnum.IncludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.SearchAppearance,
            expression: "voluptatum",
            operator: ApiDimensionFilterOperatorEnum.Contains,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Country,
            expression: "nisi",
            operator: ApiDimensionFilterOperatorEnum.ExcludingRegex,
          },
        ],
        groupType: ApiDimensionFilterGroupGroupTypeEnum.And,
      },
      {
        filters: [
          {
            dimension: ApiDimensionFilterDimensionEnum.Query,
            expression: "quis",
            operator: ApiDimensionFilterOperatorEnum.Equals,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Device,
            expression: "perferendis",
            operator: ApiDimensionFilterOperatorEnum.Contains,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.SearchAppearance,
            expression: "sapiente",
            operator: ApiDimensionFilterOperatorEnum.IncludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Query,
            expression: "at",
            operator: ApiDimensionFilterOperatorEnum.ExcludingRegex,
          },
        ],
        groupType: ApiDimensionFilterGroupGroupTypeEnum.And,
      },
      {
        filters: [
          {
            dimension: ApiDimensionFilterDimensionEnum.Country,
            expression: "quod",
            operator: ApiDimensionFilterOperatorEnum.IncludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Country,
            expression: "totam",
            operator: ApiDimensionFilterOperatorEnum.IncludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Device,
            expression: "dicta",
            operator: ApiDimensionFilterOperatorEnum.IncludingRegex,
          },
          {
            dimension: ApiDimensionFilterDimensionEnum.Device,
            expression: "occaecati",
            operator: ApiDimensionFilterOperatorEnum.Equals,
          },
        ],
        groupType: ApiDimensionFilterGroupGroupTypeEnum.And,
      },
    ],
    dimensions: [
      SearchAnalyticsQueryRequestDimensionsEnum.SearchAppearance,
      SearchAnalyticsQueryRequestDimensionsEnum.Device,
      SearchAnalyticsQueryRequestDimensionsEnum.Country,
    ],
    endDate: "beatae",
    rowLimit: 414662,
    searchType: SearchAnalyticsQueryRequestSearchTypeEnum.Video,
    startDate: "modi",
    startRow: 186332,
    type: SearchAnalyticsQueryRequestTypeEnum.Discover,
  },
  accessToken: "cum",
  alt: AltEnum.Media,
  callback: "ipsum",
  fields: "excepturi",
  key: "aspernatur",
  oauthToken: "perferendis",
  prettyPrint: false,
  quotaUser: "ad",
  siteUrl: "natus",
  uploadType: "sed",
  uploadProtocol: "iste",
};

sdk.searchanalytics.webmastersSearchanalyticsQuery(req).then((res: WebmastersSearchanalyticsQueryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->