# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/webmasters/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/webmasters/v3/typescript
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### searchanalytics

* `webmastersSearchanalyticsQuery` - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### sitemaps

* `webmastersSitemapsDelete` - Deletes a sitemap from this site.
* `webmastersSitemapsGet` - Retrieves information about a specific sitemap.
* `webmastersSitemapsList` - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* `webmastersSitemapsSubmit` - Submits a sitemap for a site.

### sites

* `webmastersSitesAdd` - Adds a site to the set of the user's sites in Search Console.
* `webmastersSitesDelete` - Removes a site from the set of the user's Search Console sites.
* `webmastersSitesGet` - Retrieves information about specific site.
* `webmastersSitesList` - Lists the user's Search Console sites.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

