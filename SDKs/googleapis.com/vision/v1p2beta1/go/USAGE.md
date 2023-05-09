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
    res, err := s.Files.VisionFilesAnnotate(ctx, operations.VisionFilesAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: sdk.String("provident"),
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(602763),
                            Model: sdk.String("nulla"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumSafeSearchDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(847252),
                            Model: sdk.String("vel"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(645894),
                            Model: sdk.String("suscipit"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumTextDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(297534),
                            Model: sdk.String("debitis"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumTypeUnspecified.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                2726.56,
                                3834.41,
                                4776.65,
                                7917.25,
                            },
                        },
                        LanguageHints: []string{
                            "voluptatum",
                            "iusto",
                            "excepturi",
                            "nisi",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9255.97),
                                Longitude: sdk.Float64(8360.79),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(710.36),
                                Longitude: sdk.Float64(3373.96),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(6481.72),
                                        Y: sdk.Float32(202.18),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(832620),
                                        Y: sdk.Int(957156),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(778157),
                                        Y: sdk.Int(140350),
                                    },
                                },
                            },
                            Filter: sdk.String("at"),
                            ProductCategories: []string{
                                "maiores",
                                "molestiae",
                                "quod",
                                "quod",
                            },
                            ProductSet: sdk.String("esse"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: sdk.String("nam"),
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: sdk.String("https://oily-cephalopod.name"),
                        },
                        MimeType: sdk.String("hic"),
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
                            MaxResults: sdk.Int(186332),
                            Model: sdk.String("impedit"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumCropHints.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(456150),
                            Model: sdk.String("ipsum"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumSafeSearchDetection.ToPointer(),
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
                                Latitude: sdk.Float64(6120.96),
                                Longitude: sdk.Float64(2223.21),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6169.34),
                                Longitude: sdk.Float64(3864.89),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(9025.99),
                                        Y: sdk.Float32(6818.2),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(4499.5),
                                        Y: sdk.Float32(3595.08),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(6130.64),
                                        Y: sdk.Float32(4370.32),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(9023.49),
                                        Y: sdk.Float32(6976.31),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(60225),
                                        Y: sdk.Int(969810),
                                    },
                                },
                            },
                            Filter: sdk.String("est"),
                            ProductCategories: []string{
                                "laborum",
                                "dolores",
                                "dolorem",
                            },
                            ProductSet: sdk.String("corporis"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "nobis",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: sdk.String("enim"),
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: sdk.String("https://gummy-expedition.name"),
                        },
                        MimeType: sdk.String("accusantium"),
                    },
                    Pages: []int{
                        634274,
                        988374,
                    },
                },
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(102044),
                            Model: sdk.String("mollitia"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumLandmarkDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(635059),
                            Model: sdk.String("consequuntur"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumObjectLocalization.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(653108),
                            Model: sdk.String("occaecati"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumLogoDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: sdk.Int(414369),
                            Model: sdk.String("quam"),
                            Type: shared.GoogleCloudVisionV1p2beta1FeatureTypeEnumDocumentTextDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                6235.1,
                            },
                        },
                        LanguageHints: []string{
                            "quis",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(1103.75),
                                Longitude: sdk.Float64(6747.52),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6563.3),
                                Longitude: sdk.Float64(3172.02),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: sdk.Float32(7783.46),
                                        Y: sdk.Float32(1965.82),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(368725),
                                        Y: sdk.Int(662527),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(820994),
                                        Y: sdk.Int(13571),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(97101),
                                        Y: sdk.Int(622846),
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: sdk.Int(837945),
                                        Y: sdk.Int(673660),
                                    },
                                },
                            },
                            Filter: sdk.String("quasi"),
                            ProductCategories: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                            ProductSet: sdk.String("voluptatibus"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "omnis",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: sdk.String("voluptate"),
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: sdk.String("https://agile-arch-rival.info"),
                        },
                        MimeType: sdk.String("ut"),
                    },
                    Pages: []int{
                        120196,
                        359444,
                        296140,
                        480894,
                    },
                },
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.VisionFilesAnnotateSecurity{
        Option1: &operations.VisionFilesAnnotateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->