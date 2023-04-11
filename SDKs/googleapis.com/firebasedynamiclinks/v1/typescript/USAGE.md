<!-- Start SDK Example Usage -->
```typescript
import {
  FirebasedynamiclinksManagedShortLinksCreateRequest,
  FirebasedynamiclinksManagedShortLinksCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  SuffixOptionEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FirebasedynamiclinksManagedShortLinksCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  createManagedShortLinkRequest: {
    dynamicLinkInfo: {
      analyticsInfo: {
        googlePlayAnalytics: {
          gclid: "provident",
          utmCampaign: "distinctio",
          utmContent: "quibusdam",
          utmMedium: "unde",
          utmSource: "nulla",
          utmTerm: "corrupti",
        },
        itunesConnectAnalytics: {
          at: "illum",
          ct: "vel",
          mt: "error",
          pt: "deserunt",
        },
      },
      androidInfo: {
        androidFallbackLink: "suscipit",
        androidLink: "iure",
        androidMinPackageVersionCode: "magnam",
        androidPackageName: "debitis",
      },
      desktopInfo: {
        desktopFallbackLink: "ipsa",
      },
      domainUriPrefix: "delectus",
      dynamicLinkDomain: "tempora",
      iosInfo: {
        iosAppStoreId: "suscipit",
        iosBundleId: "molestiae",
        iosCustomScheme: "minus",
        iosFallbackLink: "placeat",
        iosIpadBundleId: "voluptatum",
        iosIpadFallbackLink: "iusto",
        iosMinimumVersion: "excepturi",
      },
      link: "nisi",
      navigationInfo: {
        enableForcedRedirect: false,
      },
      socialMetaTagInfo: {
        socialDescription: "recusandae",
        socialImageLink: "temporibus",
        socialTitle: "ab",
      },
    },
    longDynamicLink: "quis",
    name: "veritatis",
    sdkVersion: "deserunt",
    suffix: {
      customSuffix: "perferendis",
      option: SuffixOptionEnum.Unguessable,
    },
  },
  accessToken: "repellendus",
  alt: AltEnum.Proto,
  callback: "quo",
  fields: "odit",
  key: "at",
  oauthToken: "at",
  prettyPrint: false,
  quotaUser: "maiores",
  uploadType: "molestiae",
  uploadProtocol: "quod",
};

sdk.managedShortLinks.firebasedynamiclinksManagedShortLinksCreate(req).then((res: FirebasedynamiclinksManagedShortLinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->