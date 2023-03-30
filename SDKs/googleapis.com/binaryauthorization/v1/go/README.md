# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/binaryauthorization/v1/go
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
        Security: operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BinaryauthorizationProjectsAttestorsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            AttestorID: "unde",
            Callback: "nulla",
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.AttestorInput{
            Description: "iure",
            Etag: "magnam",
            Name: "debitis",
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: "ipsa",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "tempora",
                        Comment: "suscipit",
                        ID: "molestiae",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "minus",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "voluptatum",
                        Comment: "iusto",
                        ID: "excepturi",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "nisi",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "temporibus",
                        Comment: "ab",
                        ID: "quis",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "veritatis",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "perferendis",
                        Comment: "ipsam",
                        ID: "repellendus",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "sapiente",
                            SignatureAlgorithm: "EC_SIGN_P256_SHA256",
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req)
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
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
