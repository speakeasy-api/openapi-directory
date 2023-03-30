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

    req := operations.VisionFilesAnnotateRequest{
        Security: operations.VisionFilesAnnotateSecurity{
            Option1: &operations.VisionFilesAnnotateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.VisionFilesAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: "deserunt",
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 297534,
                            Model: "debitis",
                            Type: "TYPE_UNSPECIFIED",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 963663,
                            Model: "tempora",
                            Type: "LABEL_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                7917.25,
                                8121.69,
                            },
                        },
                        LanguageHints: []string{
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 9255.97,
                                Longitude: 8360.79,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 710.36,
                                Longitude: 3373.96,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 6481.72,
                                        Y: 202.18,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 832620,
                                        Y: 957156,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 778157,
                                        Y: 140350,
                                    },
                                },
                            },
                            Filter: "at",
                            ProductCategories: []string{
                                "maiores",
                                "molestiae",
                                "quod",
                                "quod",
                            },
                            ProductSet: "esse",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "nam",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "https://oily-cephalopod.name",
                        },
                        MimeType: "hic",
                    },
                    Pages: []int{
                        521848,
                        105907,
                        414662,
                        473600,
                    },
                },
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 186332,
                            Model: "impedit",
                            Type: "CROP_HINTS",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 456150,
                            Model: "ipsum",
                            Type: "SAFE_SEARCH_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                187.89,
                            },
                        },
                        LanguageHints: []string{
                            "natus",
                            "sed",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 6120.96,
                                Longitude: 2223.21,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 6169.34,
                                Longitude: 3864.89,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 9025.99,
                                        Y: 6818.2,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 4499.5,
                                        Y: 3595.08,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 6130.64,
                                        Y: 4370.32,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 9023.49,
                                        Y: 6976.31,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 60225,
                                        Y: 969810,
                                    },
                                },
                            },
                            Filter: "est",
                            ProductCategories: []string{
                                "laborum",
                                "dolores",
                                "dolorem",
                            },
                            ProductSet: "corporis",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "nobis",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "enim",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "https://gummy-expedition.name",
                        },
                        MimeType: "accusantium",
                    },
                    Pages: []int{
                        634274,
                        988374,
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->