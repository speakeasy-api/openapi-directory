<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BinaryauthorizationProjectsAttestorsCreateRequest, BinaryauthorizationProjectsAttestorsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BinaryauthorizationProjectsAttestorsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    attestorId: "consequuntur",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    description: "debitis",
    etag: "voluptatum",
    name: "et",
    userOwnedGrafeasNote: {
      noteReference: "ut",
      publicKeys: [
        {
          asciiArmoredPgpPublicKey: "et",
          comment: "voluptate",
          id: "iste",
          pkixPublicKey: {
            publicKeyPem: "vitae",
            signatureAlgorithm: "ECDSA_P521_SHA512",
          },
        },
        {
          asciiArmoredPgpPublicKey: "dolores",
          comment: "illum",
          id: "debitis",
          pkixPublicKey: {
            publicKeyPem: "vel",
            signatureAlgorithm: "EC_SIGN_P256_SHA256",
          },
        },
        {
          asciiArmoredPgpPublicKey: "dolore",
          comment: "id",
          id: "aspernatur",
          pkixPublicKey: {
            publicKeyPem: "accusantium",
            signatureAlgorithm: "ECDSA_P256_SHA256",
          },
        },
      ],
    },
  },
};

sdk.projects.binaryauthorizationProjectsAttestorsCreate(req).then((res: BinaryauthorizationProjectsAttestorsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->