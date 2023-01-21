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
            Parent: "sit",
        },
        QueryParams: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams{
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
        Request: &shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest{
            ContextSize: 7837839688282259259,
            LatestMessage: "debitis",
        },
    }
    
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsCompile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1CompileSuggestionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->