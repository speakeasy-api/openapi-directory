# Mylibrary

### Available Operations

* [BooksMylibraryAnnotationsDelete](#booksmylibraryannotationsdelete) - Deletes an annotation.
* [BooksMylibraryAnnotationsInsert](#booksmylibraryannotationsinsert) - Inserts a new annotation.
* [BooksMylibraryAnnotationsList](#booksmylibraryannotationslist) - Retrieves a list of annotations, possibly filtered.
* [BooksMylibraryAnnotationsSummary](#booksmylibraryannotationssummary) - Gets the summary of specified layers.
* [BooksMylibraryAnnotationsUpdate](#booksmylibraryannotationsupdate) - Updates an existing annotation.
* [BooksMylibraryBookshelvesAddVolume](#booksmylibrarybookshelvesaddvolume) - Adds a volume to a bookshelf.
* [BooksMylibraryBookshelvesClearVolumes](#booksmylibrarybookshelvesclearvolumes) - Clears all volumes from a bookshelf.
* [BooksMylibraryBookshelvesGet](#booksmylibrarybookshelvesget) - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* [BooksMylibraryBookshelvesList](#booksmylibrarybookshelveslist) - Retrieves a list of bookshelves belonging to the authenticated user.
* [BooksMylibraryBookshelvesMoveVolume](#booksmylibrarybookshelvesmovevolume) - Moves a volume within a bookshelf.
* [BooksMylibraryBookshelvesRemoveVolume](#booksmylibrarybookshelvesremovevolume) - Removes a volume from a bookshelf.
* [BooksMylibraryBookshelvesVolumesList](#booksmylibrarybookshelvesvolumeslist) - Gets volume information for volumes on a bookshelf.
* [BooksMylibraryReadingpositionsGet](#booksmylibraryreadingpositionsget) - Retrieves my reading position information for a volume.
* [BooksMylibraryReadingpositionsSetPosition](#booksmylibraryreadingpositionssetposition) - Sets my reading position information for a volume.

## BooksMylibraryAnnotationsDelete

Deletes an annotation.

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
    res, err := s.Mylibrary.BooksMylibraryAnnotationsDelete(ctx, operations.BooksMylibraryAnnotationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AnnotationID: "nobis",
        Callback: sdk.String("dolores"),
        Fields: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        Source: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.BooksMylibraryAnnotationsDeleteSecurity{
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

## BooksMylibraryAnnotationsInsert

Inserts a new annotation.

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
    res, err := s.Mylibrary.BooksMylibraryAnnotationsInsert(ctx, operations.BooksMylibraryAnnotationsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Annotation: &shared.Annotation{
            AfterSelectedText: sdk.String("dolores"),
            BeforeSelectedText: sdk.String("minus"),
            ClientVersionRanges: &shared.AnnotationClientVersionRanges{
                CfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("quam"),
                    EndPosition: sdk.String("dolor"),
                    StartOffset: sdk.String("vero"),
                    StartPosition: sdk.String("nostrum"),
                },
                ContentVersion: sdk.String("hic"),
                GbImageRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("recusandae"),
                    EndPosition: sdk.String("omnis"),
                    StartOffset: sdk.String("facilis"),
                    StartPosition: sdk.String("perspiciatis"),
                },
                GbTextRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("voluptatem"),
                    EndPosition: sdk.String("porro"),
                    StartOffset: sdk.String("consequuntur"),
                    StartPosition: sdk.String("blanditiis"),
                },
                ImageCfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("error"),
                    EndPosition: sdk.String("eaque"),
                    StartOffset: sdk.String("occaecati"),
                    StartPosition: sdk.String("rerum"),
                },
            },
            Created: sdk.String("adipisci"),
            CurrentVersionRanges: &shared.AnnotationCurrentVersionRanges{
                CfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("asperiores"),
                    EndPosition: sdk.String("earum"),
                    StartOffset: sdk.String("modi"),
                    StartPosition: sdk.String("iste"),
                },
                ContentVersion: sdk.String("dolorum"),
                GbImageRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("deleniti"),
                    EndPosition: sdk.String("pariatur"),
                    StartOffset: sdk.String("provident"),
                    StartPosition: sdk.String("nobis"),
                },
                GbTextRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("libero"),
                    EndPosition: sdk.String("delectus"),
                    StartOffset: sdk.String("quaerat"),
                    StartPosition: sdk.String("quos"),
                },
                ImageCfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("aliquid"),
                    EndPosition: sdk.String("dolorem"),
                    StartOffset: sdk.String("dolorem"),
                    StartPosition: sdk.String("dolor"),
                },
            },
            Data: sdk.String("qui"),
            Deleted: sdk.Bool(false),
            HighlightStyle: sdk.String("ipsum"),
            ID: sdk.String("f9b77f3a-4100-4674-abf6-9280d1ba77a8"),
            Kind: sdk.String("omnis"),
            LayerID: sdk.String("necessitatibus"),
            LayerSummary: &shared.AnnotationLayerSummary{
                AllowedCharacterCount: sdk.Int(714697),
                LimitType: sdk.String("asperiores"),
                RemainingCharacterCount: sdk.Int(469497),
            },
            PageIds: []string{
                "voluptate",
            },
            SelectedText: sdk.String("id"),
            SelfLink: sdk.String("saepe"),
            Updated: sdk.String("eius"),
            VolumeID: sdk.String("aspernatur"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AnnotationID: sdk.String("optio"),
        Callback: sdk.String("accusamus"),
        Country: sdk.String("Germany"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        ShowOnlySummaryInResponse: sdk.Bool(false),
        Source: sdk.String("minima"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("totam"),
    }, operations.BooksMylibraryAnnotationsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Annotation != nil {
        // handle response
    }
}
```

## BooksMylibraryAnnotationsList

Retrieves a list of annotations, possibly filtered.

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
    res, err := s.Mylibrary.BooksMylibraryAnnotationsList(ctx, operations.BooksMylibraryAnnotationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        ContentVersion: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Key: sdk.String("quod"),
        LayerID: sdk.String("officiis"),
        LayerIds: []string{
            "dolorum",
        },
        MaxResults: sdk.Int64(952792),
        OauthToken: sdk.String("esse"),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        ShowDeleted: sdk.Bool(false),
        Source: sdk.String("ipsum"),
        UpdatedMax: sdk.String("quisquam"),
        UpdatedMin: sdk.String("tenetur"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("tempore"),
        VolumeID: sdk.String("accusamus"),
    }, operations.BooksMylibraryAnnotationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Annotations != nil {
        // handle response
    }
}
```

## BooksMylibraryAnnotationsSummary

Gets the summary of specified layers.

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
    res, err := s.Mylibrary.BooksMylibraryAnnotationsSummary(ctx, operations.BooksMylibraryAnnotationsSummaryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("totam"),
        Key: sdk.String("nihil"),
        LayerIds: []string{
            "expedita",
        },
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("libero"),
        VolumeID: "voluptas",
    }, operations.BooksMylibraryAnnotationsSummarySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnnotationsSummary != nil {
        // handle response
    }
}
```

## BooksMylibraryAnnotationsUpdate

Updates an existing annotation.

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
    res, err := s.Mylibrary.BooksMylibraryAnnotationsUpdate(ctx, operations.BooksMylibraryAnnotationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Annotation: &shared.Annotation{
            AfterSelectedText: sdk.String("quam"),
            BeforeSelectedText: sdk.String("ipsum"),
            ClientVersionRanges: &shared.AnnotationClientVersionRanges{
                CfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("incidunt"),
                    EndPosition: sdk.String("qui"),
                    StartOffset: sdk.String("cupiditate"),
                    StartPosition: sdk.String("maxime"),
                },
                ContentVersion: sdk.String("pariatur"),
                GbImageRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("soluta"),
                    EndPosition: sdk.String("dicta"),
                    StartOffset: sdk.String("laborum"),
                    StartPosition: sdk.String("totam"),
                },
                GbTextRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("incidunt"),
                    EndPosition: sdk.String("aspernatur"),
                    StartOffset: sdk.String("dolores"),
                    StartPosition: sdk.String("distinctio"),
                },
                ImageCfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("facilis"),
                    EndPosition: sdk.String("aliquid"),
                    StartOffset: sdk.String("quam"),
                    StartPosition: sdk.String("molestias"),
                },
            },
            Created: sdk.String("temporibus"),
            CurrentVersionRanges: &shared.AnnotationCurrentVersionRanges{
                CfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("qui"),
                    EndPosition: sdk.String("neque"),
                    StartOffset: sdk.String("fugit"),
                    StartPosition: sdk.String("magni"),
                },
                ContentVersion: sdk.String("odio"),
                GbImageRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("sunt"),
                    EndPosition: sdk.String("ullam"),
                    StartOffset: sdk.String("nam"),
                    StartPosition: sdk.String("hic"),
                },
                GbTextRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("voluptatem"),
                    EndPosition: sdk.String("cumque"),
                    StartOffset: sdk.String("soluta"),
                    StartPosition: sdk.String("nobis"),
                },
                ImageCfiRange: &shared.BooksAnnotationsRange{
                    EndOffset: sdk.String("et"),
                    EndPosition: sdk.String("saepe"),
                    StartOffset: sdk.String("ipsum"),
                    StartPosition: sdk.String("veritatis"),
                },
            },
            Data: sdk.String("nobis"),
            Deleted: sdk.Bool(false),
            HighlightStyle: sdk.String("quos"),
            ID: sdk.String("b90f3443-a110-48e0-adcf-4b921879fce9"),
            Kind: sdk.String("quis"),
            LayerID: sdk.String("ipsum"),
            LayerSummary: &shared.AnnotationLayerSummary{
                AllowedCharacterCount: sdk.Int(961571),
                LimitType: sdk.String("voluptate"),
                RemainingCharacterCount: sdk.Int(231701),
            },
            PageIds: []string{
                "tenetur",
                "dignissimos",
                "hic",
                "distinctio",
            },
            SelectedText: sdk.String("quod"),
            SelfLink: sdk.String("odio"),
            Updated: sdk.String("similique"),
            VolumeID: sdk.String("facilis"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AnnotationID: "dolore",
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        Source: sdk.String("aut"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.BooksMylibraryAnnotationsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Annotation != nil {
        // handle response
    }
}
```

## BooksMylibraryBookshelvesAddVolume

Adds a volume to a bookshelf.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesAddVolume(ctx, operations.BooksMylibraryBookshelvesAddVolumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        Reason: operations.BooksMylibraryBookshelvesAddVolumeReasonEnumReasonUndefined.ToPointer(),
        Shelf: "officia",
        Source: sdk.String("tempora"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("ea"),
        VolumeID: "aspernatur",
    }, operations.BooksMylibraryBookshelvesAddVolumeSecurity{
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

## BooksMylibraryBookshelvesClearVolumes

Clears all volumes from a bookshelf.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesClearVolumes(ctx, operations.BooksMylibraryBookshelvesClearVolumesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("ex"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        Shelf: "maiores",
        Source: sdk.String("quasi"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.BooksMylibraryBookshelvesClearVolumesSecurity{
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

## BooksMylibraryBookshelvesGet

Retrieves metadata for a specific bookshelf belonging to the authenticated user.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesGet(ctx, operations.BooksMylibraryBookshelvesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        Shelf: "corporis",
        Source: sdk.String("veniam"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.BooksMylibraryBookshelvesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
}
```

## BooksMylibraryBookshelvesList

Retrieves a list of bookshelves belonging to the authenticated user.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesList(ctx, operations.BooksMylibraryBookshelvesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        Source: sdk.String("a"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("aut"),
    }, operations.BooksMylibraryBookshelvesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelves != nil {
        // handle response
    }
}
```

## BooksMylibraryBookshelvesMoveVolume

Moves a volume within a bookshelf.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesMoveVolume(ctx, operations.BooksMylibraryBookshelvesMoveVolumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        Shelf: "et",
        Source: sdk.String("dolorum"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("placeat"),
        VolumeID: "velit",
        VolumePosition: 432148,
    }, operations.BooksMylibraryBookshelvesMoveVolumeSecurity{
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

## BooksMylibraryBookshelvesRemoveVolume

Removes a volume from a bookshelf.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesRemoveVolume(ctx, operations.BooksMylibraryBookshelvesRemoveVolumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        Reason: operations.BooksMylibraryBookshelvesRemoveVolumeReasonEnumReasonUndefined.ToPointer(),
        Shelf: "numquam",
        Source: sdk.String("explicabo"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("ipsa"),
        VolumeID: "molestiae",
    }, operations.BooksMylibraryBookshelvesRemoveVolumeSecurity{
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

## BooksMylibraryBookshelvesVolumesList

Gets volume information for volumes on a bookshelf.

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
    res, err := s.Mylibrary.BooksMylibraryBookshelvesVolumesList(ctx, operations.BooksMylibraryBookshelvesVolumesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Country: sdk.String("Kenya"),
        Fields: sdk.String("rem"),
        Key: sdk.String("fuga"),
        MaxResults: sdk.Int64(442015),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.BooksMylibraryBookshelvesVolumesListProjectionEnumLite.ToPointer(),
        Q: sdk.String("ut"),
        QuotaUser: sdk.String("eum"),
        Shelf: "suscipit",
        ShowPreorders: sdk.Bool(false),
        Source: sdk.String("assumenda"),
        StartIndex: sdk.Int64(181151),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.BooksMylibraryBookshelvesVolumesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volumes != nil {
        // handle response
    }
}
```

## BooksMylibraryReadingpositionsGet

Retrieves my reading position information for a volume.

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
    res, err := s.Mylibrary.BooksMylibraryReadingpositionsGet(ctx, operations.BooksMylibraryReadingpositionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        ContentVersion: sdk.String("neque"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        Source: sdk.String("eius"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("voluptas"),
        VolumeID: "ab",
    }, operations.BooksMylibraryReadingpositionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadingPosition != nil {
        // handle response
    }
}
```

## BooksMylibraryReadingpositionsSetPosition

Sets my reading position information for a volume.

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
    res, err := s.Mylibrary.BooksMylibraryReadingpositionsSetPosition(ctx, operations.BooksMylibraryReadingpositionsSetPositionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Action: operations.BooksMylibraryReadingpositionsSetPositionActionEnumBookmark.ToPointer(),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        ContentVersion: sdk.String("aspernatur"),
        DeviceCookie: sdk.String("sequi"),
        Fields: sdk.String("quo"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("recusandae"),
        Position: "aperiam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        Source: sdk.String("quod"),
        Timestamp: "dignissimos",
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("nihil"),
        VolumeID: "totam",
    }, operations.BooksMylibraryReadingpositionsSetPositionSecurity{
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
