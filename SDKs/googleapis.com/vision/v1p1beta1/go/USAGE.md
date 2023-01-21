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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: "rerum",
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 5617773211005988520,
                            Model: "et",
                            Type: "TYPE_UNSPECIFIED",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                50.099998,
                                15.100000,
                                66.099998,
                            },
                        },
                        LanguageHints: []string{
                            "debitis",
                            "vel",
                            "odio",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 91.099998,
                                Longitude: 57.099998,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 45.099998,
                                Longitude: 78.199997,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 10.200000,
                                        Y: 14.200000,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 44.099998,
                                        Y: 78.199997,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 87.099998,
                                        Y: 0.100000,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 388440063886460141,
                                        Y: 7561811714888168464,
                                    },
                                },
                            },
                            Filter: "ipsum",
                            ProductCategories: []string{
                                "modi",
                                "sint",
                            },
                            ProductSet: "inventore",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "exercitationem",
                                "aut",
                                "reprehenderit",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "incidunt",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "dolor",
                        },
                        MimeType: "beatae",
                    },
                    Pages: []int32{
                        2671030200101705776,
                        3508963237347473586,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 4564823113789767141,
                            Model: "ex",
                            Type: "SAFE_SEARCH_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 3983722386484812742,
                            Model: "vel",
                            Type: "PRODUCT_SEARCH",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                84.199997,
                                23.100000,
                            },
                        },
                        LanguageHints: []string{
                            "unde",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 31.100000,
                                Longitude: 13.100000,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 26.100000,
                                Longitude: 90.099998,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 40.099998,
                                        Y: 28.100000,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 29.100000,
                                        Y: 90.199997,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 31.200001,
                                        Y: 9.200000,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 7862762095958642309,
                                        Y: 4391202566038595699,
                                    },
                                },
                            },
                            Filter: "omnis",
                            ProductCategories: []string{
                                "consequatur",
                                "dolor",
                            },
                            ProductSet: "commodi",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "reprehenderit",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "ut",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "laboriosam",
                        },
                        MimeType: "sed",
                    },
                    Pages: []int32{
                        1836598054518427835,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 7638413271565042464,
                            Model: "consequuntur",
                            Type: "LANDMARK_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                35.200001,
                            },
                        },
                        LanguageHints: []string{
                            "perferendis",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 26.200001,
                                Longitude: 87.099998,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 42.099998,
                                Longitude: 15.200000,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 50.099998,
                                        Y: 9.200000,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 2333048574390956331,
                                        Y: 9205243623417456715,
                                    },
                                },
                            },
                            Filter: "quis",
                            ProductCategories: []string{
                                "labore",
                            },
                            ProductSet: "et",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "ad",
                                "expedita",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "modi",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "nihil",
                        },
                        MimeType: "tempora",
                    },
                    Pages: []int32{
                        4745905187492708501,
                    },
                },
            },
        },
    }
    
    res, err := s.Files.VisionFilesAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->