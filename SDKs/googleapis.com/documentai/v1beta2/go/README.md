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
        Security: operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessPathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "iure",
                    },
                    DocumentType: "magnam",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "debitis",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "delectus",
                                ValueTypes: []string{
                                    "suscipit",
                                    "molestiae",
                                },
                            },
                        },
                        ModelVersion: "minus",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "placeat",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "https://lawful-missionary.info",
                        },
                        MimeType: "recusandae",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "ab",
                            "quis",
                            "veritatis",
                            "deserunt",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "http://happy-spear.org",
                        },
                        PagesPerShard: 778157,
                    },
                    Parent: "odit",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "at",
                            "maiores",
                            "molestiae",
                            "quod",
                        },
                        ModelVersion: "quod",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 7805.29,
                                            Y: 6788.8,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1182.74,
                                            Y: 7206.33,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6399.21,
                                            Y: 5820.2,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 537373,
                                            Y: 944669,
                                        },
                                    },
                                },
                                PageNumber: 758616,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1059.07,
                                            Y: 4146.62,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 4736,
                                            Y: 2645.55,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1863.32,
                                            Y: 7742.34,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 456150,
                                            Y: 216550,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 568434,
                                            Y: 135218,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 18789,
                                            Y: 324141,
                                        },
                                    },
                                },
                                PageNumber: 617636,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "sed",
                    },
                    DocumentType: "iste",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "dolor",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "laboriosam",
                                ValueTypes: []string{
                                    "saepe",
                                    "fuga",
                                    "in",
                                    "corporis",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "iste",
                                ValueTypes: []string{
                                    "saepe",
                                    "quidem",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "architecto",
                                ValueTypes: []string{
                                    "reiciendis",
                                },
                            },
                        },
                        ModelVersion: "est",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "mollitia",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "https://deadly-corsage.info",
                        },
                        MimeType: "explicabo",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "enim",
                            "omnis",
                            "nemo",
                            "minima",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "https://antique-housework.name",
                        },
                        PagesPerShard: 988374,
                    },
                    Parent: "sapiente",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "mollitia",
                        },
                        ModelVersion: "dolorem",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9953,
                                            Y: 6531.08,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 253291,
                                            Y: 414369,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 466311,
                                            Y: 474697,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 244425,
                                            Y: 623510,
                                        },
                                    },
                                },
                                PageNumber: 158969,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1103.75,
                                            Y: 6747.52,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6563.3,
                                            Y: 3172.02,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 778346,
                                            Y: 196582,
                                        },
                                    },
                                },
                                PageNumber: 949572,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6625.27,
                                            Y: 8209.94,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 135.71,
                                            Y: 971.01,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 837945,
                                            Y: 673660,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 96098,
                                            Y: 971945,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 976460,
                                            Y: 878194,
                                        },
                                    },
                                },
                                PageNumber: 468651,
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, req)
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
## SDK Available Operations


### Projects

* `DocumentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `DocumentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
