# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/documentai/v1beta2/go
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
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("distinctio"),
                    },
                    DocumentType: sdk.String("quibusdam"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("unde"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("corrupti"),
                                ValueTypes: []string{
                                    "vel",
                                    "error",
                                    "deserunt",
                                    "suscipit",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("iure"),
                                ValueTypes: []string{
                                    "debitis",
                                    "ipsa",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("delectus"),
                                ValueTypes: []string{
                                    "suscipit",
                                    "molestiae",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("minus"),
                                ValueTypes: []string{
                                    "voluptatum",
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                            },
                        },
                        ModelVersion: sdk.String("recusandae"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("temporibus"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("http://gloomy-blanket.name"),
                        },
                        MimeType: sdk.String("perferendis"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "repellendus",
                            "sapiente",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("https://constant-sundae.org"),
                        },
                        PagesPerShard: sdk.Int(978619),
                    },
                    Parent: sdk.String("molestiae"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "quod",
                            "esse",
                            "totam",
                            "porro",
                        },
                        ModelVersion: sdk.String("dolorum"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6399.21),
                                            Y: sdk.Float32(5820.2),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(1433.53),
                                            Y: sdk.Float32(5373.73),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(9446.69),
                                            Y: sdk.Float32(7586.16),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(105907),
                                            Y: sdk.Int(414662),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(473600),
                                            Y: sdk.Int(264555),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(186332),
                                            Y: sdk.Int(774234),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(736918),
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("esse"),
                    },
                    DocumentType: sdk.String("ipsum"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("excepturi"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("perferendis"),
                                ValueTypes: []string{
                                    "natus",
                                    "sed",
                                },
                            },
                        },
                        ModelVersion: sdk.String("iste"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("dolor"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("https://hoarse-upper.org"),
                        },
                        MimeType: sdk.String("fuga"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "corporis",
                            "iste",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("http://unsteady-progress.com"),
                        },
                        PagesPerShard: sdk.Int(60225),
                    },
                    Parent: sdk.String("reiciendis"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        ModelVersion: sdk.String("dolorem"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(7506.86),
                                            Y: sdk.Float32(3154.28),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(363711),
                                            Y: sdk.Int(325047),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(570197),
                                            Y: sdk.Int(38425),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(438601),
                                            Y: sdk.Int(634274),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(988374),
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(1020.44),
                                            Y: sdk.Float32(6527.9),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(2088.76),
                                            Y: sdk.Float32(6350.59),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(1613.09),
                                            Y: sdk.Float32(9953),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6531.08),
                                            Y: sdk.Float32(5818.5),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(414369),
                                            Y: sdk.Int(466311),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(474697),
                                            Y: sdk.Int(244425),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(623510),
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: sdk.String("quia"),
                    },
                    DocumentType: sdk.String("quis"),
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: sdk.Bool(false),
                        ModelVersion: sdk.String("vitae"),
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: sdk.Bool(false),
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("animi"),
                                ValueTypes: []string{
                                    "odit",
                                    "quo",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("sequi"),
                                ValueTypes: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: sdk.String("quasi"),
                                ValueTypes: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                            },
                        },
                        ModelVersion: sdk.String("reiciendis"),
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: sdk.String("voluptatibus"),
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: sdk.String("https://klutzy-level.org"),
                        },
                        MimeType: sdk.String("ipsa"),
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "voluptate",
                            "cum",
                            "perferendis",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: sdk.String("http://insubstantial-dramaturge.org"),
                        },
                        PagesPerShard: sdk.Int(120196),
                    },
                    Parent: sdk.String("corporis"),
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: sdk.Bool(false),
                        HeaderHints: []string{
                            "iusto",
                            "dicta",
                        },
                        ModelVersion: sdk.String("harum"),
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(4142.63),
                                            Y: sdk.Float32(9182.36),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(641.47),
                                            Y: sdk.Float32(2168.22),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(6924.72),
                                            Y: sdk.Float32(5651.89),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(5666.02),
                                            Y: sdk.Float32(8651.03),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(508969),
                                            Y: sdk.Int(523248),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(916723),
                                            Y: sdk.Int(93940),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(921158),
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(831.12),
                                            Y: sdk.Float32(9292.97),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(2777.18),
                                            Y: sdk.Float32(3185.69),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: sdk.Float32(93.56),
                                            Y: sdk.Float32(6674.11),
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(131797),
                                            Y: sdk.Int(647174),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(716327),
                                            Y: sdk.Int(841386),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(289406),
                                            Y: sdk.Int(264730),
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: sdk.Int(183191),
                                            Y: sdk.Int(397821),
                                        },
                                    },
                                },
                                PageNumber: sdk.Int(586513),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("tempora"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Projects](docs/projects/README.md)

* [DocumentaiProjectsLocationsDocumentsBatchProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [DocumentaiProjectsLocationsDocumentsProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [DocumentaiProjectsOperationsGet](docs/projects/README.md#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
