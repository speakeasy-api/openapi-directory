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
        DollarXgafv: "2",
        BatchGetDocumentsRequest: &shared.BatchGetDocumentsRequest{
            Documents: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Mask: &shared.DocumentMask{
                FieldPaths: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
            },
            NewTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: "deserunt",
                },
                ReadWrite: &shared.ReadWrite{
                    RetryTransaction: "suscipit",
                },
            },
            ReadTime: "iure",
            Transaction: "magnam",
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Database: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.FirestoreProjectsDatabasesDocumentsBatchGet(ctx, req, operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurity{
        Option1: &operations.FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDocumentsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->