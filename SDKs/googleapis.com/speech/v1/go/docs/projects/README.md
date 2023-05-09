# Projects

### Available Operations

* [SpeechProjectsLocationsCustomClassesCreate](#speechprojectslocationscustomclassescreate) - Create a custom class.
* [SpeechProjectsLocationsCustomClassesList](#speechprojectslocationscustomclasseslist) - List custom classes.
* [SpeechProjectsLocationsPhraseSetsCreate](#speechprojectslocationsphrasesetscreate) - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
* [SpeechProjectsLocationsPhraseSetsDelete](#speechprojectslocationsphrasesetsdelete) - Delete a phrase set.
* [SpeechProjectsLocationsPhraseSetsGet](#speechprojectslocationsphrasesetsget) - Get a phrase set.
* [SpeechProjectsLocationsPhraseSetsList](#speechprojectslocationsphrasesetslist) - List phrase sets.
* [SpeechProjectsLocationsPhraseSetsPatch](#speechprojectslocationsphrasesetspatch) - Update a phrase set.

## SpeechProjectsLocationsCustomClassesCreate

Create a custom class.

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
    res, err := s.Projects.SpeechProjectsLocationsCustomClassesCreate(ctx, operations.SpeechProjectsLocationsCustomClassesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateCustomClassRequestInput: &shared.CreateCustomClassRequestInput{
            CustomClass: &shared.CustomClassInput{
                CustomClassID: sdk.String("nam"),
                Items: []shared.ClassItem{
                    shared.ClassItem{
                        Value: sdk.String("occaecati"),
                    },
                    shared.ClassItem{
                        Value: sdk.String("fugit"),
                    },
                    shared.ClassItem{
                        Value: sdk.String("deleniti"),
                    },
                },
                Name: sdk.String("Ms. Earnest Lebsack"),
            },
            CustomClassID: sdk.String("modi"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    }, operations.SpeechProjectsLocationsCustomClassesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomClass != nil {
        // handle response
    }
}
```

## SpeechProjectsLocationsCustomClassesList

List custom classes.

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
    res, err := s.Projects.SpeechProjectsLocationsCustomClassesList(ctx, operations.SpeechProjectsLocationsCustomClassesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.SpeechProjectsLocationsCustomClassesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomClassesResponse != nil {
        // handle response
    }
}
```

## SpeechProjectsLocationsPhraseSetsCreate

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

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
    res, err := s.Projects.SpeechProjectsLocationsPhraseSetsCreate(ctx, operations.SpeechProjectsLocationsPhraseSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreatePhraseSetRequestInput: &shared.CreatePhraseSetRequestInput{
            PhraseSet: &shared.PhraseSetInput{
                Boost: sdk.Float32(992.8),
                Name: sdk.String("Lela Orn"),
                Phrases: []shared.Phrase{
                    shared.Phrase{
                        Boost: sdk.Float32(2103.82),
                        Value: sdk.String("corporis"),
                    },
                },
            },
            PhraseSetID: sdk.String("explicabo"),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("excepturi"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.SpeechProjectsLocationsPhraseSetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhraseSet != nil {
        // handle response
    }
}
```

## SpeechProjectsLocationsPhraseSetsDelete

Delete a phrase set.

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
    res, err := s.Projects.SpeechProjectsLocationsPhraseSetsDelete(ctx, operations.SpeechProjectsLocationsPhraseSetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        Name: "Shaun McCullough",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
    }, operations.SpeechProjectsLocationsPhraseSetsDeleteSecurity{
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

## SpeechProjectsLocationsPhraseSetsGet

Get a phrase set.

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
    res, err := s.Projects.SpeechProjectsLocationsPhraseSetsGet(ctx, operations.SpeechProjectsLocationsPhraseSetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("animi"),
        Key: sdk.String("enim"),
        Name: "Angelica Dietrich",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.SpeechProjectsLocationsPhraseSetsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhraseSet != nil {
        // handle response
    }
}
```

## SpeechProjectsLocationsPhraseSetsList

List phrase sets.

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
    res, err := s.Projects.SpeechProjectsLocationsPhraseSetsList(ctx, operations.SpeechProjectsLocationsPhraseSetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("vero"),
        PageSize: sdk.Int64(468651),
        PageToken: sdk.String("praesentium"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.SpeechProjectsLocationsPhraseSetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPhraseSetResponse != nil {
        // handle response
    }
}
```

## SpeechProjectsLocationsPhraseSetsPatch

Update a phrase set.

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
    res, err := s.Projects.SpeechProjectsLocationsPhraseSetsPatch(ctx, operations.SpeechProjectsLocationsPhraseSetsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PhraseSetInput: &shared.PhraseSetInput{
            Boost: sdk.Float32(199.87),
            Name: sdk.String("Bessie Grady II"),
            Phrases: []shared.Phrase{
                shared.Phrase{
                    Boost: sdk.Float32(4808.94),
                    Value: sdk.String("dicta"),
                },
                shared.Phrase{
                    Boost: sdk.Float32(6886.61),
                    Value: sdk.String("enim"),
                },
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        Name: "Virgil Mante",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UpdateMask: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.SpeechProjectsLocationsPhraseSetsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhraseSet != nil {
        // handle response
    }
}
```
