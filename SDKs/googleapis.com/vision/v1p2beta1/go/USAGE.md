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
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "json",
            Callback: "doloremque",
            Fields: "aut",
            Key: "in",
            OauthToken: "sunt",
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "ea",
            UploadProtocol: "eveniet",
        },
        Request: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: "qui",
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 1097148276936863326,
                            Model: "consequatur",
                            Type: "IMAGE_PROPERTIES",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 7793704364488399491,
                            Model: "doloremque",
                            Type: "OBJECT_LOCALIZATION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                23.200001,
                            },
                        },
                        LanguageHints: []string{
                            "officia",
                            "atque",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 44.099998,
                                Longitude: 39.200001,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 43.200001,
                                Longitude: 3.100000,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 71.099998,
                                        Y: 83.199997,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 17.200001,
                                        Y: 59.099998,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 1664478937018203628,
                                        Y: 8391256688233226568,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 8997849101297700852,
                                        Y: 3981809433914354677,
                                    },
                                },
                            },
                            Filter: "eos",
                            ProductCategories: []string{
                                "rerum",
                                "illum",
                            },
                            ProductSet: "sunt",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "reprehenderit",
                                "ut",
                                "suscipit",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "laboriosam",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "dolores",
                        },
                        MimeType: "totam",
                    },
                    Pages: []int32{
                        372452157611894385,
                        4547094199366570460,
                        6805473071622971373,
                    },
                },
            },
        },
    }
    
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->