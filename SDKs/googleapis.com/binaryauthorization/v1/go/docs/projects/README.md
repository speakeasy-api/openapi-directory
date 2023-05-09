# Projects

### Available Operations

* [BinaryauthorizationProjectsAttestorsCreate](#binaryauthorizationprojectsattestorscreate) - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
* [BinaryauthorizationProjectsAttestorsDelete](#binaryauthorizationprojectsattestorsdelete) - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
* [BinaryauthorizationProjectsAttestorsList](#binaryauthorizationprojectsattestorslist) - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
* [BinaryauthorizationProjectsAttestorsUpdate](#binaryauthorizationprojectsattestorsupdate) - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
* [BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence](#binaryauthorizationprojectsattestorsvalidateattestationoccurrence) - Returns whether the given Attestation for the given image URI was signed by the given Attestor
* [BinaryauthorizationProjectsPolicyGetIamPolicy](#binaryauthorizationprojectspolicygetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BinaryauthorizationProjectsPolicySetIamPolicy](#binaryauthorizationprojectspolicysetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BinaryauthorizationProjectsPolicyTestIamPermissions](#binaryauthorizationprojectspolicytestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## BinaryauthorizationProjectsAttestorsCreate

Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AttestorInput: &shared.AttestorInput{
            Description: sdk.String("quo"),
            Etag: sdk.String("sequi"),
            Name: sdk.String("Vernon Ondricka Sr."),
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: sdk.String("error"),
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("laborum"),
                        Comment: sdk.String("quasi"),
                        ID: sdk.String("ffe78f09-7b00-474f-9547-1b5e6e13b99d"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("modi"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs12048Sha256.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("rem"),
                        Comment: sdk.String("voluptates"),
                        ID: sdk.String("1e91e450-ad2a-4bd4-8269-802d502a94bb"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("labore"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumEcSignP521Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("eum"),
                        Comment: sdk.String("non"),
                        ID: sdk.String("c969e9a3-efa7-47df-b14c-d66ae395efb9"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("nam"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs14096Sha512.ToPointer(),
                        },
                    },
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("blanditiis"),
                        Comment: sdk.String("deleniti"),
                        ID: sdk.String("f3a66997-074b-4a44-a9b6-e2141959890a"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("reiciendis"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaSignPkcs14096Sha512.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttestorID: sdk.String("dolor"),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("odit"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quasi"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("eius"),
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

## BinaryauthorizationProjectsAttestorsDelete

Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsDelete(ctx, operations.BinaryauthorizationProjectsAttestorsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        Name: "Pedro Ratke",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.BinaryauthorizationProjectsAttestorsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BinaryauthorizationProjectsAttestorsList

Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsList(ctx, operations.BinaryauthorizationProjectsAttestorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("magni"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quo"),
        PageSize: sdk.Int64(848009),
        PageToken: sdk.String("pariatur"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.BinaryauthorizationProjectsAttestorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttestorsResponse != nil {
        // handle response
    }
}
```

## BinaryauthorizationProjectsAttestorsUpdate

Updates an attestor. Returns NOT_FOUND if the attestor does not exist.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsUpdate(ctx, operations.BinaryauthorizationProjectsAttestorsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AttestorInput: &shared.AttestorInput{
            Description: sdk.String("accusantium"),
            Etag: sdk.String("ab"),
            Name: sdk.String("Rickey Hintz"),
            UserOwnedGrafeasNote: &shared.UserOwnedGrafeasNoteInput{
                NoteReference: sdk.String("nam"),
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: sdk.String("pariatur"),
                        Comment: sdk.String("nemo"),
                        ID: sdk.String("f0d30c5f-bb25-4870-9320-2c73d5fe9b90"),
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: sdk.String("porro"),
                            SignatureAlgorithm: shared.PkixPublicKeySignatureAlgorithmEnumRsaPss3072Sha256.ToPointer(),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("rerum"),
        Name: "Ollie Watsica",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("provident"),
    }, operations.BinaryauthorizationProjectsAttestorsUpdateSecurity{
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

## BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence

Returns whether the given Attestation for the given image URI was signed by the given Attestor

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrence(ctx, operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ValidateAttestationOccurrenceRequest: &shared.ValidateAttestationOccurrenceRequest{
            Attestation: &shared.AttestationOccurrence{
                Jwts: []shared.Jwt{
                    shared.Jwt{
                        CompactJwt: sdk.String("delectus"),
                    },
                    shared.Jwt{
                        CompactJwt: sdk.String("quaerat"),
                    },
                    shared.Jwt{
                        CompactJwt: sdk.String("quos"),
                    },
                },
                SerializedPayload: sdk.String("aliquid"),
                Signatures: []shared.Signature{
                    shared.Signature{
                        PublicKeyID: sdk.String("dolorem"),
                        Signature: sdk.String("dolor"),
                    },
                },
            },
            OccurrenceNote: sdk.String("qui"),
            OccurrenceResourceURI: sdk.String("ipsum"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Attestor: "cum",
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateAttestationOccurrenceResponse != nil {
        // handle response
    }
}
```

## BinaryauthorizationProjectsPolicyGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsPolicyGetIamPolicy(ctx, operations.BinaryauthorizationProjectsPolicyGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("quidem"),
        OptionsRequestedPolicyVersion: sdk.Int64(976405),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        Resource: "natus",
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.BinaryauthorizationProjectsPolicyGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IamPolicy != nil {
        // handle response
    }
}
```

## BinaryauthorizationProjectsPolicySetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsPolicySetIamPolicy(ctx, operations.BinaryauthorizationProjectsPolicySetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.IamPolicy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ab"),
                            Expression: sdk.String("soluta"),
                            Location: sdk.String("dolorum"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "dolorum",
                            "deleniti",
                        },
                        Role: sdk.String("omnis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("necessitatibus"),
                            Expression: sdk.String("distinctio"),
                            Location: sdk.String("asperiores"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "voluptate",
                        },
                        Role: sdk.String("id"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("saepe"),
                            Expression: sdk.String("eius"),
                            Location: sdk.String("aspernatur"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "optio",
                        },
                        Role: sdk.String("accusamus"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("ad"),
                            Expression: sdk.String("saepe"),
                            Location: sdk.String("suscipit"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "minima",
                            "repellendus",
                            "totam",
                        },
                        Role: sdk.String("similique"),
                    },
                },
                Etag: sdk.String("alias"),
                Version: sdk.Int(872651),
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("quod"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "a",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("harum"),
    }, operations.BinaryauthorizationProjectsPolicySetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IamPolicy != nil {
        // handle response
    }
}
```

## BinaryauthorizationProjectsPolicyTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.BinaryauthorizationProjectsPolicyTestIamPermissions(ctx, operations.BinaryauthorizationProjectsPolicyTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quisquam",
            },
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        Resource: "sapiente",
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
