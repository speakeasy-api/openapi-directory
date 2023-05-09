# Projects

### Available Operations

* [DocumentaiProjectsLocationsDocumentsBatchProcess](#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [DocumentaiProjectsLocationsDocumentsProcess](#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [DocumentaiProjectsOperationsGet](#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## DocumentaiProjectsLocationsDocumentsBatchProcess

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

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
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("labore"),
                    },
                    DocumentType: sdk.String("delectus"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("eum"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("eligendi"),
                                ValueTypes: []string{
                                    "aliquid",
                                    "provident",
                                    "necessitatibus",
                                },
                            },
                        },
                        ModelVersion: sdk.String("sint"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("officia"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("http://unimportant-venture.net"),
                        },
                        MimeType: sdk.String("in"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "illum",
                            "maiores",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("https://chilly-effacement.net"),
                        },
                        PagesPerShard: sdk.Int(813798),
                    },
                    Parent: sdk.String("ea"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "laborum",
                            "accusamus",
                        },
                        ModelVersion: sdk.String("non"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(8817.36),
                                            Y: sdk.Float32(9654.17),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6925.32),
                                            Y: sdk.Float32(5884.65),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(659669),
                                            Y: sdk.Int(501324),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(533206),
                                            Y: sdk.Int(956084),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(230533),
                                            Y: sdk.Int(643990),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(394869),
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6188.09),
                                            Y: sdk.Float32(6063.93),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(4748.67),
                                            Y: sdk.Float32(191.93),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(301575),
                                            Y: sdk.Int(716075),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(660174),
                                            Y: sdk.Int(287991),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(290077),
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6180.16),
                                            Y: sdk.Float32(7491.7),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(4287.69),
                                            Y: sdk.Float32(8784.53),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(102863),
                                            Y: sdk.Int(298282),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(92373),
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("excepturi"),
                    },
                    DocumentType: sdk.String("ullam"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("provident"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("sint"),
                                ValueTypes: []string{
                                    "mollitia",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("reiciendis"),
                                ValueTypes: []string{
                                    "ad",
                                    "eum",
                                    "dolor",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("necessitatibus"),
                                ValueTypes: []string{
                                    "nemo",
                                },
                            },
                        },
                        ModelVersion: sdk.String("quasi"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("iure"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("https://unique-diesel.net"),
                        },
                        MimeType: sdk.String("deleniti"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "in",
                            "architecto",
                            "architecto",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("https://grim-quinoa.info"),
                        },
                        PagesPerShard: sdk.Int(998848),
                    },
                    Parent: sdk.String("quibusdam"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "saepe",
                        },
                        ModelVersion: sdk.String("pariatur"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(5083.15),
                                            Y: sdk.Float32(6155.6),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(123820),
                                            Y: sdk.Int(779051),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(848009),
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("pariatur"),
                    },
                    DocumentType: sdk.String("maxime"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("ea"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("odit"),
                                ValueTypes: []string{
                                    "accusantium",
                                    "ab",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("maiores"),
                                ValueTypes: []string{
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("nam"),
                                ValueTypes: []string{
                                    "pariatur",
                                },
                            },
                        },
                        ModelVersion: sdk.String("nemo"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("voluptatibus"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("http://threadbare-cupola.com"),
                        },
                        MimeType: sdk.String("cumque"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "hic",
                            "libero",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("https://deafening-feel.name"),
                        },
                        PagesPerShard: sdk.Int(489549),
                    },
                    Parent: sdk.String("eaque"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "nesciunt",
                            "eos",
                        },
                        ModelVersion: sdk.String("perferendis"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(4634.51),
                                            Y: sdk.Float32(2239.24),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(8745.73),
                                            Y: sdk.Float32(3453.52),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(9441.2),
                                            Y: sdk.Float32(9280.82),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6082.53),
                                            Y: sdk.Float32(7044.15),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(31838),
                                            Y: sdk.Int(783645),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(164694),
                                            Y: sdk.Int(500026),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(621479),
                                            Y: sdk.Int(50370),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(577229),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("earum"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("iste"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DocumentaiProjectsLocationsDocumentsProcess

Processes a single document.

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
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsProcess(ctx, operations.DocumentaiProjectsLocationsDocumentsProcessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDocumentaiV1beta2ProcessDocumentRequest: &shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
            AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                Model: sdk.String("libero"),
            },
            DocumentType: sdk.String("delectus"),
            EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                Enabled: sdk.Bool(false),
                ModelVersion: sdk.String("quaerat"),
            },
            FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                Enabled: sdk.Bool(false),
                KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                    shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                        Key: sdk.String("aliquid"),
                        ValueTypes: []string{
                            "dolorem",
                        },
                    },
                    shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                        Key: sdk.String("dolor"),
                        ValueTypes: []string{
                            "ipsum",
                        },
                    },
                    shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                        Key: sdk.String("hic"),
                        ValueTypes: []string{
                            "cum",
                            "voluptate",
                            "dignissimos",
                        },
                    },
                },
                ModelVersion: sdk.String("reiciendis"),
            },
            InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                Contents: sdk.String("amet"),
                GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                    URI: sdk.String("https://expensive-bite.com"),
                },
                MimeType: sdk.String("ipsa"),
            },
            OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                LanguageHints: []string{
                    "odio",
                    "quaerat",
                },
            },
            OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                    URI: sdk.String("https://revolving-weekender.info"),
                },
                PagesPerShard: sdk.Int(617658),
            },
            Parent: sdk.String("eos"),
            TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                Enabled: sdk.Bool(false),
                HeaderHints: []string{
                    "sit",
                    "fugiat",
                    "ab",
                },
                ModelVersion: sdk.String("soluta"),
                TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                    shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                        BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                            NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                    X: sdk.Float32(4536.97),
                                    Y: sdk.Float32(6770.82),
                                },
                                shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                    X: sdk.Float32(5365.79),
                                    Y: sdk.Float32(6070.45),
                                },
                            },
                            Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(714697),
                                    Y: sdk.Int(990339),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(469497),
                                    Y: sdk.Int(216897),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(456015),
                                    Y: sdk.Int(663078),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(906418),
                                    Y: sdk.Int(263322),
                                },
                            },
                        },
                        PageNumber: sdk.Int(137220),
                    },
                    shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                        BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                            NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                    X: sdk.Float32(2292.19),
                                    Y: sdk.Float32(7583.79),
                                },
                            },
                            Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(320017),
                                    Y: sdk.Int(904425),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(383464),
                                    Y: sdk.Int(645785),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(588317),
                                    Y: sdk.Int(324683),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(831049),
                                    Y: sdk.Int(519711),
                                },
                            },
                        },
                        PageNumber: sdk.Int(628982),
                    },
                    shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                        BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                            NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                    X: sdk.Float32(8726.51),
                                    Y: sdk.Float32(3118.6),
                                },
                            },
                            Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(425451),
                                    Y: sdk.Int(798047),
                                },
                                shared.GoogleCloudDocumentaiV1beta2Vertex{
                                    X: sdk.Int(885338),
                                    Y: sdk.Int(185636),
                                },
                            },
                        },
                        PageNumber: sdk.Int(679880),
                    },
                },
            },
        },
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("quisquam"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DocumentaiProjectsLocationsDocumentsProcessSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDocumentaiV1beta2Document != nil {
        // handle response
    }
}
```

## DocumentaiProjectsOperationsGet

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
    res, err := s.Projects.DocumentaiProjectsOperationsGet(ctx, operations.DocumentaiProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("totam"),
        Key: sdk.String("nihil"),
        Name: "Mamie Durgan",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("quam"),
    }, operations.DocumentaiProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
