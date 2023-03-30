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

    req := operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest{
        Security: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity{
            Option1: &operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams{
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
        Request: &shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest{
            ContextSize: 384382,
            LatestMessage: "iure",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsCompile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1CompileSuggestionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->