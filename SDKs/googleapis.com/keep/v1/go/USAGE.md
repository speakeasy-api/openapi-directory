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
        DollarXgafv: "2",
        NoteInput: &shared.NoteInput{
            Body: &shared.Section{
                List: &shared.ListContent{
                    ListItems: []shared.ListItem{
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "quibusdam",
                            },
                        },
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "nulla",
                            },
                        },
                        shared.ListItem{
                            Checked: false,
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: "illum",
                            },
                        },
                    },
                },
                Text: &shared.TextContent{
                    Text: "vel",
                },
            },
            Title: "Miss",
        },
        AccessToken: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Notes.KeepNotesCreate(ctx, req, operations.KeepNotesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Note != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->