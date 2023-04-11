# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/binaryauthorization/v1beta1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/binaryauthorization/v1beta1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    userOwnedDrydockNote: {
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `binaryauthorizationProjectsAttestorsCreate` - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* `binaryauthorizationProjectsAttestorsDelete` - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* `binaryauthorizationProjectsAttestorsList` - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* `binaryauthorizationProjectsAttestorsUpdate` - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* `binaryauthorizationProjectsAttestorsValidateAttestationOccurrence` - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* `binaryauthorizationProjectsPolicyGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `binaryauthorizationProjectsPolicySetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `binaryauthorizationProjectsPolicyTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### systempolicy

* `binaryauthorizationSystempolicyGetPolicy` - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

