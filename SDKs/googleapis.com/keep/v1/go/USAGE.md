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

    req := operations.KeepNotesCreateRequest{
        Security: operations.KeepNotesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.KeepNotesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.NoteInput{
            Body: &shared.Section{
                List: &shared.ListContent{
                    ListItems: []shared.ListItem{
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "iure",
                            },
                        },
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "debitis",
                            },
                        },
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "delectus",
                            },
                        },
                    },
                },
                Text: &shared.TextContent{
                    Text: "tempora",
                },
            },
            Title: "Mrs.",
        },
    }

    ctx := context.Background()
    res, err := s.Notes.KeepNotesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Note != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->