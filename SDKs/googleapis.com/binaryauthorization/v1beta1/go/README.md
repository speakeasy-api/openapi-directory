# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            AttestorID: "consequuntur",
            Callback: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.AttestorInput{
            Description: "debitis",
            Etag: "voluptatum",
            Name: "et",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "ut",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "et",
                        Comment: "voluptate",
                        ID: "iste",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "vitae",
                            SignatureAlgorithm: "ECDSA_P521_SHA512",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "dolores",
                        Comment: "illum",
                        ID: "debitis",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "vel",
                            SignatureAlgorithm: "EC_SIGN_P256_SHA256",
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "dolore",
                        Comment: "id",
                        ID: "aspernatur",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "accusantium",
                            SignatureAlgorithm: "ECDSA_P256_SHA256",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Attestor != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `BinaryauthorizationProjectsAttestorsCreate` - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* `BinaryauthorizationProjectsAttestorsDelete` - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* `BinaryauthorizationProjectsAttestorsList` - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* `BinaryauthorizationProjectsAttestorsUpdate` - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* `BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence` - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* `BinaryauthorizationProjectsPolicyGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BinaryauthorizationProjectsPolicySetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BinaryauthorizationProjectsPolicyTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### systempolicy

* `BinaryauthorizationSystempolicyGetPolicy` - Gets the current system policy in the specified location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
