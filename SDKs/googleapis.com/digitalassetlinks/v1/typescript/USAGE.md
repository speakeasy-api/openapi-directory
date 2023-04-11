<!-- Start SDK Example Usage -->
```typescript
import {
  DigitalassetlinksAssetlinksBulkCheckRequest,
  DigitalassetlinksAssetlinksBulkCheckResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DigitalassetlinksAssetlinksBulkCheckRequest = {
  dollarXgafv: XgafvEnum.Two,
  bulkCheckRequest: {
    allowGoogleInternalDataSources: false,
    defaultRelation: "provident",
    defaultSource: {
      androidApp: {
        certificate: {
          sha256Fingerprint: "distinctio",
        },
        packageName: "quibusdam",
      },
      web: {
        site: "unde",
      },
    },
    defaultTarget: {
      androidApp: {
        certificate: {
          sha256Fingerprint: "nulla",
        },
        packageName: "corrupti",
      },
      web: {
        site: "illum",
      },
    },
    skipCacheLookup: false,
    statements: [
      {
        relation: "error",
        source: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "deserunt",
            },
            packageName: "suscipit",
          },
          web: {
            site: "iure",
          },
        },
        target: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "magnam",
            },
            packageName: "debitis",
          },
          web: {
            site: "ipsa",
          },
        },
      },
      {
        relation: "delectus",
        source: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "tempora",
            },
            packageName: "suscipit",
          },
          web: {
            site: "molestiae",
          },
        },
        target: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "minus",
            },
            packageName: "placeat",
          },
          web: {
            site: "voluptatum",
          },
        },
      },
    ],
  },
  accessToken: "iusto",
  alt: AltEnum.Media,
  callback: "nisi",
  fields: "recusandae",
  key: "temporibus",
  oauthToken: "ab",
  prettyPrint: false,
  quotaUser: "quis",
  uploadType: "veritatis",
  uploadProtocol: "deserunt",
};

sdk.assetlinks.digitalassetlinksAssetlinksBulkCheck(req).then((res: DigitalassetlinksAssetlinksBulkCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->