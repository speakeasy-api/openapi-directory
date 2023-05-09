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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsCreate(ctx, operations.BinaryauthorizationProjectsAttestorsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AttestorInput: &shared.AttestorInput{
            Description: sdk.String("provident"),
            Etag: sdk.String("distinctio"),
            Name: sdk.String("Stuart Stiedemann"),
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: sdk.String("vel"),
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("deserunt"),
                        Comment: sdk.String("suscipit"),
                        ID: sdk.String("74e0f467-cc87-496e-9151-a05dfc2ddf7c"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("quod"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("totam"),
                        Comment: sdk.String("porro"),
                        ID: sdk.String("a1ba928f-c816-4742-8b73-9205929396fe"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("fuga"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss4096Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("corporis"),
                        Comment: sdk.String("iste"),
                        ID: sdk.String("6eb10faa-a235-42c5-9559-07aff1a3a2fa"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("occaecati"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPss3072Sha256.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttestorID: sdk.String("molestiae"),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("quis"),
        Parent: "vitae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    }, operations.BinaryauthorizationProjectsAttestorsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [BinaryauthorizationProjectsAttestorsCreate](docs/projects/README.md#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [BinaryauthorizationProjectsAttestorsDelete](docs/projects/README.md#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [BinaryauthorizationProjectsAttestorsList](docs/projects/README.md#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [BinaryauthorizationProjectsAttestorsUpdate](docs/projects/README.md#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence](docs/projects/README.md#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [BinaryauthorizationProjectsPolicyGetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BinaryauthorizationProjectsPolicySetIamPolicy](docs/projects/README.md#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BinaryauthorizationProjectsPolicyTestIamPermissions](docs/projects/README.md#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### [Systempolicy](docs/systempolicy/README.md)

* [BinaryauthorizationSystempolicyGetPolicy](docs/systempolicy/README.md#binaryauthorizationsystempolicygetpolicy) - Gets the current system policy in the specified location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
