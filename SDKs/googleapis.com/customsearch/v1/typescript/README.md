# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/customsearch/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/customsearch/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SearchCseListRequest,
  SearchCseListResponse,
  SearchCseListImgColorTypeEnum,
  SearchCseListImgDominantColorEnum,
  SearchCseListImgSizeEnum,
  SearchCseListImgTypeEnum,
  SearchCseListSafeEnum,
  SearchCseListSearchTypeEnum,
  SearchCseListSiteSearchFilterEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SearchCseListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  c2coff: "quibusdam",
  callback: "unde",
  cr: "nulla",
  cx: "corrupti",
  dateRestrict: "illum",
  exactTerms: "vel",
  excludeTerms: "error",
  fields: "deserunt",
  fileType: "suscipit",
  filter: "iure",
  gl: "magnam",
  googlehost: "debitis",
  highRange: "ipsa",
  hl: "delectus",
  hq: "tempora",
  imgColorType: SearchCseListImgColorTypeEnum.Mono,
  imgDominantColor: SearchCseListImgDominantColorEnum.Orange,
  imgSize: SearchCseListImgSizeEnum.Xlarge,
  imgType: SearchCseListImgTypeEnum.Photo,
  key: "voluptatum",
  linkSite: "iusto",
  lowRange: "excepturi",
  lr: "nisi",
  num: 925597,
  oauthToken: "temporibus",
  orTerms: "ab",
  prettyPrint: false,
  q: "quis",
  quotaUser: "veritatis",
  relatedSite: "deserunt",
  rights: "perferendis",
  safe: SearchCseListSafeEnum.Active,
  searchType: SearchCseListSearchTypeEnum.Image,
  siteSearch: "sapiente",
  siteSearchFilter: SearchCseListSiteSearchFilterEnum.I,
  sort: "odit",
  start: 870013,
  uploadType: "at",
  uploadProtocol: "maiores",
};

sdk.cse.searchCseList(req).then((res: SearchCseListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cse

* `searchCseList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* `searchCseSiterestrictList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

