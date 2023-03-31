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
        DollarXgafv: "2",
        GoogleCloudDialogflowV2beta1CompileSuggestionRequest: &shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest{
            ContextSize: 592845,
            LatestMessage: "distinctio",
        },
        AccessToken: "quibusdam",
        Alt: "media",
        Callback: "nulla",
        Fields: "corrupti",
        Key: "illum",
        OauthToken: "vel",
        Parent: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsCompile(ctx, req, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity{
        Option1: &operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1CompileSuggestionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->