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
            Parent: "sed",
        },
        QueryParams: operations.BinaryauthorizationProjectsAttestorsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "labore",
            Alt: "json",
            AttestorID: "delectus",
            Callback: "eos",
            Fields: "et",
            Key: "sunt",
            OauthToken: "corporis",
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "est",
            UploadProtocol: "et",
        },
        Request: &shared.AttestorInput{
            Description: "saepe",
            Etag: "voluptatem",
            Name: "corporis",
            UserOwnedDrydockNote: &shared.UserOwnedDrydockNoteInput{
                NoteReference: "et",
                PublicKeys: []shared.AttestorPublicKey{
                    shared.AttestorPublicKey{
                        ASCIIArmoredPgpPublicKey: "repellat",
                        Comment: "ullam",
                        ID: "rerum",
                        PkixPublicKey: &shared.PkixPublicKey{
                            PublicKeyPem: "sint",
                            SignatureAlgorithm: "EC_SIGN_P384_SHA384",
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