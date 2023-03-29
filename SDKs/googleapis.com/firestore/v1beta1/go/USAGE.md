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

    req := operations.FirestoreProjectsDatabasesDocumentsBatchGetRequest{
        Security: operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity{
            Option1: &operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FirestoreProjectsDatabasesDocumentsBatchGetPathParams{
            Database: "unde",
        },
        QueryParams: operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.BatchGetDocumentsRequest{
            Documents: []string{
                "iusto",
                "ullam",
            },
            Mask: &shared.DocumentMask{
                FieldPaths: []string{
                    "inventore",
                    "sapiente",
                    "enim",
                    "eum",
                },
            },
            NewTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: "voluptatum",
                },
                ReadWrite: &shared.ReadWrite{
                    RetryTransaction: "autem",
                },
            },
            ReadTime: "vel",
            Transaction: "non",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesDocumentsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDocumentsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->