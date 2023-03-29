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
            Parent: "unde",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            AttestorID: "id",
            Callback: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.AttestorInput{
            Description: "iusto",
            Etag: "ullam",
            Name: "saepe",
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: "inventore",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "enim",
                        Comment: "eum",
                        ID: "voluptatum",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "autem",
                            SignatureAlgorithm: "ECDSA_P384_SHA384",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "non",
                        Comment: "deleniti",
                        ID: "similique",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "reprehenderit",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "quo",
                        Comment: "quasi",
                        ID: "laboriosam",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "dicta",
                            SignatureAlgorithm: "RSA_SIGN_PKCS1_4096_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "voluptatem",
                        Comment: "consequatur",
                        ID: "fugiat",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "a",
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
