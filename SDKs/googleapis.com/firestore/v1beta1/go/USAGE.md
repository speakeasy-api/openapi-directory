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
            Database: "sit",
        },
        QueryParams: operations.FirestoreProjectsDatabasesDocumentsBatchGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchGetDocumentsRequest{
            Documents: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            Mask: &shared.DocumentMask{
                FieldPaths: []string{
                    "dolorem",
                    "et",
                    "voluptate",
                },
            },
            NewTransaction: &shared.TransactionOptions{
                ReadOnly: &shared.ReadOnly{
                    ReadTime: "iste",
                },
                ReadWrite: &shared.ReadWrite{
                    RetryTransaction: "vitae",
                },
            },
            ReadTime: "totam",
            Transaction: "dolores",
        },
    }
    
    res, err := s.Projects.FirestoreProjectsDatabasesDocumentsBatchGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetDocumentsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->