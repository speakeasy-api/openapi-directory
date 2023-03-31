# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/binaryauthorization/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BinaryauthorizationProjectsAttestorsCreateRequest{
        DollarXgafv: "2",
        AttestorInput: &shared.AttestorInput{
            Description: "provident",
            Etag: "distinctio",
            Name: "quibusdam",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "unde",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "corrupti",
                        Comment: "illum",
                        ID: "vel",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "error",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "suscipit",
                        Comment: "iure",
                        ID: "magnam",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "debitis",
                            SignatureAlgorithm: "RSA_PSS_2048_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "delectus",
                        Comment: "tempora",
                        ID: "suscipit",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "molestiae",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "placeat",
                        Comment: "voluptatum",
                        ID: "iusto",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "excepturi",
                            SignatureAlgorithm: "RSA_PSS_4096_SHA512",
                        },
                    },
                },
            },
        },
        AccessToken: "recusandae",
        Alt: "proto",
        AttestorID: "ab",
        Callback: "quis",
        Fields: "veritatis",
        Key: "deserunt",
        OauthToken: "perferendis",
        Parent: "ipsam",
        PrettyPrint: false,
        QuotaUser: "repellendus",
        UploadType: "sapiente",
        UploadProtocol: "quo",
    }

    ctx := context.Background()
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req, operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attestor != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BinaryauthorizationProjectsAttestorsCreate` - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* `BinaryauthorizationProjectsAttestorsDelete` - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* `BinaryauthorizationProjectsAttestorsList` - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* `BinaryauthorizationProjectsAttestorsUpdate` - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* `BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence` - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* `BinaryauthorizationProjectsPolicyGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BinaryauthorizationProjectsPolicySetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BinaryauthorizationProjectsPolicyTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Systempolicy

* `BinaryauthorizationSystempolicyGetPolicy` - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
