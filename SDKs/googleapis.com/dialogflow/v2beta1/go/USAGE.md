<!-- Start SDK Example Usage -->
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
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsCompile(ctx, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1CompileSuggestionRequest: &shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest{
            ContextSize: sdk.Int(592845),
            LatestMessage: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity{
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