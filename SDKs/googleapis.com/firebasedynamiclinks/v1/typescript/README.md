# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasedynamiclinks/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasedynamiclinks/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### managedShortLinks

* `firebasedynamiclinksManagedShortLinksCreate` - Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### shortLinks

* `firebasedynamiclinksShortLinksCreate` - Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

### v1

* `firebasedynamiclinksGetLinkStats` - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* `firebasedynamiclinksInstallAttribution` - Get iOS strong/weak-match info for post-install attribution.
* `firebasedynamiclinksReopenAttribution` - Get iOS reopen attribution for app universal link open deeplinking.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

