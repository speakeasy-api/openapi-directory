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
    
    req := operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest{
        Security: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
            Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams{
            Parent: "sit",
        },
        QueryParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams{
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
        Request: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "debitis",
                "voluptatum",
                "et",
            },
        },
    }
    
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->