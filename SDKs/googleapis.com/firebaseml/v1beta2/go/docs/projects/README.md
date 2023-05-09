# Projects

### Available Operations

* [FirebasemlProjectsModelsCreate](#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [FirebasemlProjectsModelsDelete](#firebasemlprojectsmodelsdelete) - Deletes a model
* [FirebasemlProjectsModelsDownload](#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [FirebasemlProjectsModelsList](#firebasemlprojectsmodelslist) - Lists the models
* [FirebasemlProjectsModelsPatch](#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [FirebasemlProjectsOperationsGet](#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## FirebasemlProjectsModelsCreate

Creates a model in Firebase ML. The longrunning operation will eventually return a Model

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
    res, err := s.Projects.FirebasemlProjectsModelsCreate(ctx, operations.FirebasemlProjectsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModelInput: &shared.ModelInput{
            DisplayName: sdk.String("esse"),
            Name: sdk.String("Miss Lowell Parisian"),
            State: &shared.ModelState{
                Published: sdk.Bool(false),
                ValidationError: &shared.Status{
                    Code: sdk.Int(582020),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "hic": "optio",
                            "totam": "beatae",
                            "commodi": "molestiae",
                        },
                    },
                    Message: sdk.String("modi"),
                },
            },
            Tags: []string{
                "impedit",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: sdk.String("cum"),
                GcsTfliteURI: sdk.String("esse"),
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.FirebasemlProjectsModelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebasemlProjectsModelsDelete

Deletes a model

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
    res, err := s.Projects.FirebasemlProjectsModelsDelete(ctx, operations.FirebasemlProjectsModelsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        Name: "Brad Turcotte Jr.",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.FirebasemlProjectsModelsDeleteSecurity{
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

## FirebasemlProjectsModelsDownload

Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.

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
    res, err := s.Projects.FirebasemlProjectsModelsDownload(ctx, operations.FirebasemlProjectsModelsDownloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        Name: "Corey Hane III",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadModelResponse != nil {
        // handle response
    }
}
```

## FirebasemlProjectsModelsList

Lists the models

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
    res, err := s.Projects.FirebasemlProjectsModelsList(ctx, operations.FirebasemlProjectsModelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellat"),
        Filter: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("numquam"),
        PageSize: sdk.Int64(414369),
        PageToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.FirebasemlProjectsModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsResponse != nil {
        // handle response
    }
}
```

## FirebasemlProjectsModelsPatch

Updates a model. The longrunning operation will eventually return a Model.

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
    res, err := s.Projects.FirebasemlProjectsModelsPatch(ctx, operations.FirebasemlProjectsModelsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModelInput: &shared.ModelInput{
            DisplayName: sdk.String("vitae"),
            Name: sdk.String("Matt Hamill"),
            State: &shared.ModelState{
                Published: sdk.Bool(false),
                ValidationError: &shared.Status{
                    Code: sdk.Int(196582),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "id": "possimus",
                            "aut": "quasi",
                        },
                        map[string]interface{}{
                            "temporibus": "laborum",
                            "quasi": "reiciendis",
                            "voluptatibus": "vero",
                        },
                        map[string]interface{}{
                            "praesentium": "voluptatibus",
                            "ipsa": "omnis",
                        },
                        map[string]interface{}{
                            "cum": "perferendis",
                            "doloremque": "reprehenderit",
                        },
                    },
                    Message: sdk.String("ut"),
                },
            },
            Tags: []string{
                "dicta",
                "corporis",
                "dolore",
                "iusto",
            },
            TfliteModel: &shared.TfLiteModelInput{
                AutomlModel: sdk.String("dicta"),
                GcsTfliteURI: sdk.String("harum"),
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        Name: "Alison Mann",
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UpdateMask: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.FirebasemlProjectsModelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebasemlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.FirebasemlProjectsOperationsGet(ctx, operations.FirebasemlProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        Name: "Monique Spinka",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.FirebasemlProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
