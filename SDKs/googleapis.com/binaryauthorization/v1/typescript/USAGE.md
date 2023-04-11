<!-- Start SDK Example Usage -->
```typescript
import {
  BinaryauthorizationProjectsAttestorsCreateRequest,
  BinaryauthorizationProjectsAttestorsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  PkixPublicKeySignatureAlgorithmEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BinaryauthorizationProjectsAttestorsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  attestorInput: {
    description: "provident",
    etag: "distinctio",
    name: "quibusdam",
    userOwnedGrafeasNote: {
      noteReference: "unde",
      publicKeys: [
        {
          asciiArmoredPgpPublicKey: "corrupti",
          comment: "illum",
          id: "vel",
          pkixPublicKey: {
            publicKeyPem: "error",
            signatureAlgorithm: PkixPublicKeySignatureAlgorithmEnum.RsaSignPkcs14096Sha512,
          },
        },
        {
          asciiArmoredPgpPublicKey: "suscipit",
          comment: "iure",
          id: "magnam",
          pkixPublicKey: {
            publicKeyPem: "debitis",
            signatureAlgorithm: PkixPublicKeySignatureAlgorithmEnum.RsaPss2048Sha256,
          },
        },
        {
          asciiArmoredPgpPublicKey: "delectus",
          comment: "tempora",
          id: "suscipit",
          pkixPublicKey: {
            publicKeyPem: "molestiae",
            signatureAlgorithm: PkixPublicKeySignatureAlgorithmEnum.EcdsaP384Sha384,
          },
        },
        {
          asciiArmoredPgpPublicKey: "placeat",
          comment: "voluptatum",
          id: "iusto",
          pkixPublicKey: {
            publicKeyPem: "excepturi",
            signatureAlgorithm: PkixPublicKeySignatureAlgorithmEnum.RsaPss4096Sha512,
          },
        },
      ],
    },
  },
  accessToken: "recusandae",
  alt: AltEnum.Proto,
  attestorId: "ab",
  callback: "quis",
  fields: "veritatis",
  key: "deserunt",
  oauthToken: "perferendis",
  parent: "ipsam",
  prettyPrint: false,
  quotaUser: "repellendus",
  uploadType: "sapiente",
  uploadProtocol: "quo",
};

sdk.projects.binaryauthorizationProjectsAttestorsCreate(req).then((res: BinaryauthorizationProjectsAttestorsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->