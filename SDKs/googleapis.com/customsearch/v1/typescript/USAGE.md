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