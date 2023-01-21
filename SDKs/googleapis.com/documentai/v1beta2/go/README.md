# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "sit",
        },
        QueryParams: operations.DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest{
            Requests: []shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "debitis",
                    },
                    DocumentType: "voluptatum",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "ut",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: true,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "voluptate",
                                ValueTypes: []string{
                                    "vitae",
                                    "totam",
                                    "dolores",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "illum",
                                ValueTypes: []string{
                                    "vel",
                                },
                            },
                        },
                        ModelVersion: "odio",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "dolore",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "id",
                        },
                        MimeType: "aspernatur",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "totam",
                            "commodi",
                            "quis",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "est",
                        },
                        PagesPerShard: 5974317550424871033,
                    },
                    Parent: "odit",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: true,
                        HeaderHints: []string{
                            "omnis",
                        },
                        ModelVersion: "aut",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 19.200001,
                                            Y: 68.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 22.200001,
                                            Y: 50.099998,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 74.099998,
                                            Y: 19.100000,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 7847956203786849690,
                                            Y: 406703151708498928,
                                        },
                                    },
                                },
                                PageNumber: 4756106358532488297,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "reprehenderit",
                    },
                    DocumentType: "tempore",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: false,
                        ModelVersion: "incidunt",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "veritatis",
                                ValueTypes: []string{
                                    "et",
                                    "omnis",
                                    "ipsum",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "ex",
                                ValueTypes: []string{
                                    "placeat",
                                    "vel",
                                    "rerum",
                                },
                            },
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "mollitia",
                                ValueTypes: []string{
                                    "quam",
                                    "reprehenderit",
                                },
                            },
                        },
                        ModelVersion: "qui",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "qui",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "unde",
                        },
                        MimeType: "in",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "qui",
                            "ut",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "itaque",
                        },
                        PagesPerShard: 2006924026344156168,
                    },
                    Parent: "neque",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: true,
                        HeaderHints: []string{
                            "accusantium",
                            "esse",
                            "architecto",
                        },
                        ModelVersion: "quam",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 90.199997,
                                            Y: 31.200001,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 9.200000,
                                            Y: 10.200000,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 6215632031706852400,
                                            Y: 241482278320610612,
                                        },
                                    },
                                },
                                PageNumber: 7442289190031176026,
                            },
                        },
                    },
                },
                shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest{
                    AutomlParams: &shared.GoogleCloudDocumentaiV1beta2AutoMlParams{
                        Model: "dolor",
                    },
                    DocumentType: "commodi",
                    EntityExtractionParams: &shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams{
                        Enabled: true,
                        ModelVersion: "reprehenderit",
                    },
                    FormExtractionParams: &shared.GoogleCloudDocumentaiV1beta2FormExtractionParams{
                        Enabled: false,
                        KeyValuePairHints: []shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                            shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint{
                                Key: "ut",
                                ValueTypes: []string{
                                    "sed",
                                    "a",
                                    "soluta",
                                },
                            },
                        },
                        ModelVersion: "aut",
                    },
                    InputConfig: &shared.GoogleCloudDocumentaiV1beta2InputConfig{
                        Contents: "quas",
                        GcsSource: &shared.GoogleCloudDocumentaiV1beta2GcsSource{
                            URI: "consequuntur",
                        },
                        MimeType: "laudantium",
                    },
                    OcrParams: &shared.GoogleCloudDocumentaiV1beta2OcrParams{
                        LanguageHints: []string{
                            "ipsa",
                        },
                    },
                    OutputConfig: &shared.GoogleCloudDocumentaiV1beta2OutputConfig{
                        GcsDestination: &shared.GoogleCloudDocumentaiV1beta2GcsDestination{
                            URI: "expedita",
                        },
                        PagesPerShard: 8204648627352676445,
                    },
                    Parent: "perferendis",
                    TableExtractionParams: &shared.GoogleCloudDocumentaiV1beta2TableExtractionParams{
                        Enabled: false,
                        HeaderHints: []string{
                            "quisquam",
                        },
                        ModelVersion: "explicabo",
                        TableBoundHints: []shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                            shared.GoogleCloudDocumentaiV1beta2TableBoundHint{
                                BoundingBox: &shared.GoogleCloudDocumentaiV1beta2BoundingPoly{
                                    NormalizedVertices: []shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                        shared.GoogleCloudDocumentaiV1beta2NormalizedVertex{
                                            X: 15.200000,
                                            Y: 66.099998,
                                        },
                                    },
                                    Vertices: []shared.GoogleCloudDocumentaiV1beta2Vertex{
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 9096429817347931519,
                                            Y: 5026609382502824278,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 2718877847597668777,
                                            Y: 2333048574390956331,
                                        },
                                        shared.GoogleCloudDocumentaiV1beta2Vertex{
                                            X: 9205243623417456715,
                                            Y: 190417550815006435,
                                        },
                                    },
                                },
                                PageNumber: 7478610059307147871,
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.DocumentaiProjectsLocationsDocumentsBatchProcess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DocumentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `DocumentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `DocumentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
