# Notes

### Available Operations

* [KeepNotesCreate](#keepnotescreate) - Creates a new note.
* [KeepNotesDelete](#keepnotesdelete) - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* [KeepNotesGet](#keepnotesget) - Gets a note.
* [KeepNotesList](#keepnoteslist) - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* [KeepNotesPermissionsBatchCreate](#keepnotespermissionsbatchcreate) - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* [KeepNotesPermissionsBatchDelete](#keepnotespermissionsbatchdelete) - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

## KeepNotesCreate

Creates a new note.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
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
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("voluptatum"),
                            },
                        },
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("excepturi"),
                            },
                        },
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("recusandae"),
                            },
                        },
                        shared.ListItem{
                            Checked: sdk.Bool(false),
                            ChildListItems: []shared.ListItem{
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                                shared.ListItem{},
                            },
                            Text: &shared.TextContent{
                                Text: sdk.String("ab"),
                            },
                        },
                    },
                },
                Text: &shared.TextContent{
                    Text: sdk.String("quis"),
                },
            },
            Title: sdk.String("Mr."),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
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

## KeepNotesDelete

Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.

### Example Usage

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
    res, err := s.Notes.KeepNotesDelete(ctx, operations.KeepNotesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        Name: "Omar Carroll",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
    }, operations.KeepNotesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## KeepNotesGet

Gets a note.

### Example Usage

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
    res, err := s.Notes.KeepNotesGet(ctx, operations.KeepNotesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        MimeType: sdk.String("qui"),
        Name: "Jonathon Klocko",
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.KeepNotesGetSecurity{
        Option1: &operations.KeepNotesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Note != nil {
        // handle response
    }
}
```

## KeepNotesList

Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.

### Example Usage

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
    res, err := s.Notes.KeepNotesList(ctx, operations.KeepNotesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Filter: sdk.String("hic"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("fuga"),
        PageSize: sdk.Int64(449950),
        PageToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.KeepNotesListSecurity{
        Option1: &operations.KeepNotesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotesResponse != nil {
        // handle response
    }
}
```

## KeepNotesPermissionsBatchCreate

Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.

### Example Usage

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
    res, err := s.Notes.KeepNotesPermissionsBatchCreate(ctx, operations.KeepNotesPermissionsBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchCreatePermissionsRequestInput: &shared.BatchCreatePermissionsRequestInput{
            Requests: []shared.CreatePermissionRequestInput{
                shared.CreatePermissionRequestInput{
                    Parent: sdk.String("ipsa"),
                    Permission: &shared.PermissionInput{
                        Email: sdk.String("Manuela.OHara21@hotmail.com"),
                        Family: map[string]interface{}{
                            "explicabo": "nobis",
                            "enim": "omnis",
                        },
                        Group: &shared.Group{
                            Email: sdk.String("Era43@yahoo.com"),
                        },
                        Role: shared.PermissionRoleEnumOwner.ToPointer(),
                        User: &shared.User{
                            Email: sdk.String("Veronica.Brakus@hotmail.com"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("velit"),
    }, operations.KeepNotesPermissionsBatchCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePermissionsResponse != nil {
        // handle response
    }
}
```

## KeepNotesPermissionsBatchDelete

Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

### Example Usage

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
    res, err := s.Notes.KeepNotesPermissionsBatchDelete(ctx, operations.KeepNotesPermissionsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeletePermissionsRequest: &shared.BatchDeletePermissionsRequest{
            Names: []string{
                "quis",
            },
        },
        AccessToken: sdk.String("vitae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quo"),
        Parent: "sequi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("id"),
    }, operations.KeepNotesPermissionsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
