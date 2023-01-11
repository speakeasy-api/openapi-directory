<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FirebasedynamiclinksManagedShortLinksCreateRequest, FirebasedynamiclinksManagedShortLinksCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FirebasedynamiclinksManagedShortLinksCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    dynamicLinkInfo: {
      analyticsInfo: {
        googlePlayAnalytics: {
          gclid: "rerum",
          utmCampaign: "dicta",
          utmContent: "debitis",
          utmMedium: "voluptatum",
          utmSource: "et",
          utmTerm: "ut",
        },
        itunesConnectAnalytics: {
          at: "dolorem",
          ct: "et",
          mt: "voluptate",
          pt: "iste",
        },
      },
      androidInfo: {
        androidFallbackLink: "vitae",
        androidLink: "totam",
        androidMinPackageVersionCode: "dolores",
        androidPackageName: "illum",
      },
      desktopInfo: {
        desktopFallbackLink: "debitis",
      },
      domainUriPrefix: "vel",
      dynamicLinkDomain: "odio",
      iosInfo: {
        iosAppStoreId: "dolore",
        iosBundleId: "id",
        iosCustomScheme: "aspernatur",
        iosFallbackLink: "accusantium",
        iosIpadBundleId: "totam",
        iosIpadFallbackLink: "commodi",
        iosMinimumVersion: "quis",
      },
      link: "est",
      navigationInfo: {
        enableForcedRedirect: true,
      },
      socialMetaTagInfo: {
        socialDescription: "odit",
        socialImageLink: "non",
        socialTitle: "voluptas",
      },
    },
    longDynamicLink: "omnis",
    name: "aut",
    sdkVersion: "illo",
    suffix: {
      customSuffix: "sed",
      option: "CUSTOM",
    },
  },
};

sdk.managedShortLinks.firebasedynamiclinksManagedShortLinksCreate(req).then((res: FirebasedynamiclinksManagedShortLinksCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->