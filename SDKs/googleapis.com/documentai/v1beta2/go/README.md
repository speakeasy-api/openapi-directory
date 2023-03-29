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
            Parent: "unde",
        },
        QueryParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "iusto",
                    },
                    DocumentType: "ullam",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "saepe",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "sapiente",
                                ValueTypes: []string{
                                    "eum",
                                    "voluptatum",
                                },
                            },
                        },
                        ModelVersion: "autem",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "vel",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "https://jayce.name",
                        },
                        MimeType: "reprehenderit",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "quo",
                            "quasi",
                            "laboriosam",
                            "dicta",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "https://aiyana.info",
                        },
                        PagesPerShard: 832620,
                    },
                    Parent: "a",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "eos",
                            "accusamus",
                            "accusamus",
                            "reiciendis",
                        },
                        ModelVersion: "rem",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 4614.79,
                                            Y: 5204.78,
                                        },
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
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6120.96,
                                            Y: 2223.21,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 386489,
                                            Y: 943749,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 902599,
                                            Y: 681820,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 449950,
                                            Y: 359508,
                                        },
                                    },
                                },
                                PageNumber: 613064,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9023.49,
                                            Y: 6976.31,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 992.8,
                                            Y: 602.25,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 666767,
                                            Y: 653140,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 670638,
                                            Y: 170909,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 210382,
                                            Y: 358152,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 128926,
                                            Y: 750686,
                                        },
                                    },
                                },
                                PageNumber: 315428,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "est",
                    },
                    DocumentType: "commodi",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "quia",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "eaque",
                                ValueTypes: []string{
                                    "harum",
                                    "doloribus",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "a",
                                ValueTypes: []string{
                                    "et",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "non",
                                ValueTypes: []string{
                                    "neque",
                                    "asperiores",
                                    "et",
                                },
                            },
                        },
                        ModelVersion: "culpa",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "aliquam",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "http://jamie.info",
                        },
                        MimeType: "et",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "nesciunt",
                            "laboriosam",
                            "aut",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "https://madisen.biz",
                        },
                        PagesPerShard: 138183,
                    },
                    Parent: "omnis",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "hic",
                        },
                        ModelVersion: "consequatur",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 135.71,
                                            Y: 971.01,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6228.46,
                                            Y: 8379.45,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 6736.6,
                                            Y: 960.98,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9719.45,
                                            Y: 9764.6,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 468651,
                                            Y: 509624,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 976762,
                                            Y: 55714,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 604846,
                                            Y: 451159,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 739264,
                                            Y: 19987,
                                        },
                                    },
                                },
                                PageNumber: 39187,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 2828.07,
                                            Y: 9795.87,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 1201.96,
                                            Y: 3594.44,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 480894,
                                            Y: 118727,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 688661,
                                            Y: 317983,
                                        },
                                    },
                                },
                                PageNumber: 880476,
                            },
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9182.36,
                                            Y: 641.47,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 2168.22,
                                            Y: 6924.72,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 566602,
                                            Y: 865103,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 265389,
                                            Y: 508969,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 523248,
                                            Y: 916723,
                                        },
                                    },
                                },
                                PageNumber: 93940,
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
