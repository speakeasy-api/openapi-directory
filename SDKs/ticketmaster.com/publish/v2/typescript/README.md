# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/publish/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/publish/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  PatchAttractionRequest,
  PatchAttractionResponse
} from "openapi/dist/sdk/models/operations";
import {
  AugmentationDataRelatedEntityTypeEnum,
  ChangeOpEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PatchAttractionRequest = {
  augmentationData: {
    changes: [
      {
        from: "provident",
        op: ChangeOpEnum.Copy,
        path: "quibusdam",
        value: {
          "nulla": "corrupti",
          "illum": "vel",
          "error": "deserunt",
        },
      },
      {
        from: "suscipit",
        op: ChangeOpEnum.Replace,
        path: "magnam",
        value: {
          "ipsa": "delectus",
          "tempora": "suscipit",
          "molestiae": "minus",
          "placeat": "voluptatum",
        },
      },
      {
        from: "iusto",
        op: ChangeOpEnum.Move,
        path: "nisi",
        value: {
          "temporibus": "ab",
          "quis": "veritatis",
          "deserunt": "perferendis",
          "ipsam": "repellendus",
        },
      },
    ],
    relatedEntityId: "sapiente",
    relatedEntityType: AugmentationDataRelatedEntityTypeEnum.Venue,
    score: 1403.5,
    source: "at",
    versionNumber: 870088,
  },
  tmpsCorrelationId: "maiores",
  id: "molestiae",
};

sdk.patchAttraction(req).then((res: PatchAttractionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `patchAttraction` - Publish a patch on an attraction
* `patchEvent` - Publish a patch on an event
* `patchVenue` - Publish a patch on a venue
* `publishAttraction` - Publish an attractions
* `publishAttractionVideos` - Publish a video on an attraction
* `publishEntitlements` - Publish entitlements on an entity
* `publishEvent` - Publish an event
* `publishEventVideos` - Publish a video on an event
* `publishExtension` - Publish extension on an entity
* `publishVenue` - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

