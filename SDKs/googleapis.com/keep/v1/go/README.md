# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/keep/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    res, err := s.Notes.KeepNotesCreate(ctx, operations.KeepNotesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NoteInput: &shared.NoteInput{
            Body: &shared.Section{
                List: &shared.ListContent{
                    ListItems: []shared.ListItem{
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("quibusdam"),
                            },
                        },
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("nulla"),
                            },
                        },
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("illum"),
                            },
                        },
                    },
                },
                Text: &shared.TextContent{
                    Text: sdk.String("vel"),
                },
            },
            Title: sdk.String("Miss"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.KeepNotesCreateSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Notes](docs/notes/README.md)

* [KeepNotesCreate](docs/notes/README.md#keepnotescreate) - Creates a new note.
* [KeepNotesDelete](docs/notes/README.md#keepnotesdelete) - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* [KeepNotesGet](docs/notes/README.md#keepnotesget) - Gets a note.
* [KeepNotesList](docs/notes/README.md#keepnoteslist) - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* [KeepNotesPermissionsBatchCreate](docs/notes/README.md#keepnotespermissionsbatchcreate) - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* [KeepNotesPermissionsBatchDelete](docs/notes/README.md#keepnotespermissionsbatchdelete) - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
