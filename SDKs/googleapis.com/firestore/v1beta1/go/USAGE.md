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
            Database: "corrupti",
        },
        QueryParams: operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BatchGetDocumentsRequest{
            Documents: []string{
                "iure",
                "magnam",
            },
            Mask: &shared.DocumentMask{
                FieldPaths: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
            },
            NewTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: "molestiae",
                },
                ReadWrite: &shared.ReadWrite{
                    RetryTransaction: "minus",
                },
            },
            ReadTime: "placeat",
            Transaction: "voluptatum",
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