# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/searchconsole/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/searchconsole/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### searchanalytics

* `webmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmastersSitemapsDelete` - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* `webmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `webmastersSitemapsList` -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* `webmastersSitemapsSubmit` - Submits a sitemap for a site.

### sites

* `webmastersSitesAdd` -  Adds a site to the set of the user's sites in Search Console.
* `webmastersSitesDelete` -  Removes a site from the set of the user's Search Console sites.
* `webmastersSitesGet` -  Retrieves information about specific site.
* `webmastersSitesList` -  Lists the user's Search Console sites.

### urlInspection

* `searchconsoleUrlInspectionIndexInspect` - Index inspection.

### urlTestingTools

* `searchconsoleUrlTestingToolsMobileFriendlyTestRun` - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

