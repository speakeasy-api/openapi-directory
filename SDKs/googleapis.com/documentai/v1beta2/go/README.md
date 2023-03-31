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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest{
        DollarXgafv: "2",
        GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "distinctio",
                    },
                    DocumentType: "quibusdam",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "unde",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "corrupti",
                                ValueTypes: []string{
                                    "vel",
                                    "error",
                                    "deserunt",
                                    "suscipit",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "iure",
                                ValueTypes: []string{
                                    "debitis",
                                    "ipsa",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "delectus",
                                ValueTypes: []string{
                                    "suscipit",
                                    "molestiae",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "minus",
                                ValueTypes: []string{
                                    "voluptatum",
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                            },
                        },
                        ModelVersion: "recusandae",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "temporibus",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "http://gloomy-blanket.name",
                        },
                        MimeType: "perferendis",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "repellendus",
                            "sapiente",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "https://constant-sundae.org",
                        },
                        PagesPerShard: 978619,
                    },
                    Parent: "molestiae",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "quod",
                            "esse",
                            "totam",
                            "porro",
                        },
                        ModelVersion: "dolorum",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6399.21,
                                            Y: 5820.2,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1433.53,
                                            Y: 5373.73,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9446.69,
                                            Y: 7586.16,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 105907,
                                            Y: 414662,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 473600,
                                            Y: 264555,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 186332,
                                            Y: 774234,
                                        },
                                    },
                                },
                                PageNumber: 736918,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "esse",
                    },
                    DocumentType: "ipsum",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "excepturi",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "perferendis",
                                ValueTypes: []string{
                                    "natus",
                                    "sed",
                                },
                            },
                        },
                        ModelVersion: "iste",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "dolor",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "https://hoarse-upper.org",
                        },
                        MimeType: "fuga",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "corporis",
                            "iste",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "http://unsteady-progress.com",
                        },
                        PagesPerShard: 60225,
                    },
                    Parent: "reiciendis",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        ModelVersion: "dolorem",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 7506.86,
                                            Y: 3154.28,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 363711,
                                            Y: 325047,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 570197,
                                            Y: 38425,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 438601,
                                            Y: 634274,
                                        },
                                    },
                                },
                                PageNumber: 988374,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1020.44,
                                            Y: 6527.9,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 2088.76,
                                            Y: 6350.59,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1613.09,
                                            Y: 9953,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6531.08,
                                            Y: 5818.5,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 414369,
                                            Y: 466311,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 474697,
                                            Y: 244425,
                                        },
                                    },
                                },
                                PageNumber: 623510,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "quia",
                    },
                    DocumentType: "quis",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "vitae",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "animi",
                                ValueTypes: []string{
                                    "odit",
                                    "quo",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "sequi",
                                ValueTypes: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "quasi",
                                ValueTypes: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                            },
                        },
                        ModelVersion: "reiciendis",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "voluptatibus",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "https://klutzy-level.org",
                        },
                        MimeType: "ipsa",
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
                            URI: "http://insubstantial-dramaturge.org",
                        },
                        PagesPerShard: 120196,
                    },
                    Parent: "corporis",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "iusto",
                            "dicta",
                        },
                        ModelVersion: "harum",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 4142.63,
                                            Y: 9182.36,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 641.47,
                                            Y: 2168.22,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6924.72,
                                            Y: 5651.89,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 5666.02,
                                            Y: 8651.03,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 508969,
                                            Y: 523248,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 916723,
                                            Y: 93940,
                                        },
                                    },
                                },
                                PageNumber: 921158,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 831.12,
                                            Y: 9292.97,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 2777.18,
                                            Y: 3185.69,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 93.56,
                                            Y: 6674.11,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 131797,
                                            Y: 647174,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 716327,
                                            Y: 841386,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 289406,
                                            Y: 264730,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 183191,
                                            Y: 397821,
                                        },
                                    },
                                },
                                PageNumber: 586513,
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "quos",
        Alt: "json",
        Callback: "magni",
        Fields: "assumenda",
        Key: "ipsam",
        OauthToken: "alias",
        Parent: "fugit",
        PrettyPrint: false,
        QuotaUser: "dolorum",
        UploadType: "excepturi",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, req, operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity{
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


### Projects

* `DocumentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `DocumentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
