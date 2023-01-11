<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DigitalassetlinksAssetlinksBulkCheckRequest, DigitalassetlinksAssetlinksBulkCheckResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DigitalassetlinksAssetlinksBulkCheckRequest = {
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
    allowGoogleInternalDataSources: true,
    defaultRelation: "dicta",
    defaultSource: {
      androidApp: {
        certificate: {
          sha256Fingerprint: "debitis",
        },
        packageName: "voluptatum",
      },
      web: {
        site: "et",
      },
    },
    defaultTarget: {
      androidApp: {
        certificate: {
          sha256Fingerprint: "ut",
        },
        packageName: "dolorem",
      },
      web: {
        site: "et",
      },
    },
    skipCacheLookup: false,
    statements: [
      {
        relation: "vitae",
        source: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "totam",
            },
            packageName: "dolores",
          },
          web: {
            site: "illum",
          },
        },
        target: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "debitis",
            },
            packageName: "vel",
          },
          web: {
            site: "odio",
          },
        },
      },
      {
        relation: "dolore",
        source: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "id",
            },
            packageName: "aspernatur",
          },
          web: {
            site: "accusantium",
          },
        },
        target: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "totam",
            },
            packageName: "commodi",
          },
          web: {
            site: "quis",
          },
        },
      },
      {
        relation: "est",
        source: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "aut",
            },
            packageName: "odit",
          },
          web: {
            site: "non",
          },
        },
        target: {
          androidApp: {
            certificate: {
              sha256Fingerprint: "voluptas",
            },
            packageName: "omnis",
          },
          web: {
            site: "aut",
          },
        },
      },
    ],
  },
};

sdk.assetlinks.digitalassetlinksAssetlinksBulkCheck(req).then((res: DigitalassetlinksAssetlinksBulkCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->