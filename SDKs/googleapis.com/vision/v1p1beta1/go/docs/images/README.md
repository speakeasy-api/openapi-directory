# Images

### Available Operations

* [VisionImagesAnnotate](#visionimagesannotate) - Run image detection and annotation for a batch of images.
* [VisionImagesAsyncBatchAnnotate](#visionimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## VisionImagesAnnotate

Run image detection and annotation for a batch of images.

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
    res, err := s.Images.VisionImagesAnnotate(ctx, operations.VisionImagesAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest{
            Parent: sdk.String("excepturi"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(960835),
                            Model: sdk.String("quisquam"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumProductSearch.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(411372),
                            Model: sdk.String("impedit"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLabelDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("veniam"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("aliquid"),
                            ImageURI: sdk.String("inventore"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                4072.41,
                                7752.2,
                            },
                        },
                        LanguageHints: []string{
                            "recusandae",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(1324.87),
                                Longitude: sdk.Float64(3253.1),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(534.27),
                                Longitude: sdk.Float64(9528.71),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(139.48),
                                        Y: sdk.Float32(114.27),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(5334.66),
                                        Y: sdk.Float32(7705.81),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3045.82),
                                        Y: sdk.Float32(1469.46),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(79522),
                                        Y: sdk.Int(250622),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(89603),
                                        Y: sdk.Int(677412),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(672048),
                                        Y: sdk.Int(810424),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(245367),
                                        Y: sdk.Int(432148),
                                    },
                                },
                            },
                            Filter: sdk.String("autem"),
                            ProductCategories: []string{
                                "quas",
                                "assumenda",
                                "nulla",
                                "voluptas",
                            },
                            ProductSet: sdk.String("libero"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "tempora",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(131482),
                            Model: sdk.String("provident"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTypeUnspecified.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(476477),
                            Model: sdk.String("magnam"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumDocumentTextDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("eius"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("esse"),
                            ImageURI: sdk.String("esse"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                6832.82,
                                4420.15,
                                6956.26,
                            },
                        },
                        LanguageHints: []string{
                            "ut",
                            "eum",
                            "suscipit",
                            "assumenda",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(1811.51),
                                Longitude: sdk.Float64(5093.42),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(7885.46),
                                Longitude: sdk.Float64(863.77),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6600.4),
                                        Y: sdk.Float32(6969.97),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(778696),
                                        Y: sdk.Int(847276),
                                    },
                                },
                            },
                            Filter: sdk.String("quo"),
                            ProductCategories: []string{
                                "eius",
                                "eos",
                                "voluptas",
                            },
                            ProductSet: sdk.String("ab"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "consequatur",
                                "tempora",
                                "debitis",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(133465),
                            Model: sdk.String("sequi"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumWebDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(459856),
                            Model: sdk.String("recusandae"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTypeUnspecified.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("distinctio"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("quod"),
                            ImageURI: sdk.String("dignissimos"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                4694.98,
                            },
                        },
                        LanguageHints: []string{
                            "accusamus",
                            "aliquam",
                            "odio",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(5775.43),
                                Longitude: sdk.Float64(4145.67),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9594.34),
                                Longitude: sdk.Float64(1741.12),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(4752.89),
                                        Y: sdk.Float32(353.62),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(7836.48),
                                        Y: sdk.Float32(4304.02),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(5564.29),
                                        Y: sdk.Float32(5100.17),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(536178),
                                        Y: sdk.Int(143829),
                                    },
                                },
                            },
                            Filter: sdk.String("fuga"),
                            ProductCategories: []string{
                                "incidunt",
                                "atque",
                                "explicabo",
                            },
                            ProductSet: sdk.String("minima"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "fugit",
                                "sapiente",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(187131),
                            Model: sdk.String("explicabo"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumProductSearch.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("occaecati"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("atque"),
                            ImageURI: sdk.String("et"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                9105.45,
                                8820.42,
                            },
                        },
                        LanguageHints: []string{
                            "esse",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(8003.79),
                                Longitude: sdk.Float64(7241.68),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(8771.31),
                                Longitude: sdk.Float64(3990.25),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9040.45),
                                        Y: sdk.Float32(4263.06),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(473221),
                                        Y: sdk.Int(699622),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(580197),
                                        Y: sdk.Int(327720),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(716244),
                                        Y: sdk.Int(756779),
                                    },
                                },
                            },
                            Filter: sdk.String("sit"),
                            ProductCategories: []string{
                                "tempore",
                                "adipisci",
                                "cumque",
                            },
                            ProductSet: sdk.String("consequuntur"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "minus",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("esse"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("quas"),
    }, operations.VisionImagesAnnotateSecurity{
        Option1: &operations.VisionImagesAnnotateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse != nil {
        // handle response
    }
}
```

## VisionImagesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

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
    res, err := s.Images.VisionImagesAsyncBatchAnnotate(ctx, operations.VisionImagesAsyncBatchAnnotateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest: &shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest{
            OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                BatchSize: sdk.Int(97468),
                GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                    URI: sdk.String("https://petty-moonscape.org"),
                },
            },
            Parent: sdk.String("possimus"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(992430),
                            Model: sdk.String("facere"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumFaceDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(159414),
                            Model: sdk.String("quasi"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(633608),
                            Model: sdk.String("aliquid"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumObjectLocalization.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(62713),
                            Model: sdk.String("earum"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTextDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("in"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("eius"),
                            ImageURI: sdk.String("libero"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                7422.38,
                                333.04,
                                3069.86,
                                9589.83,
                            },
                        },
                        LanguageHints: []string{
                            "ullam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(4438.79),
                                Longitude: sdk.Float64(3567.07),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3917.74),
                                Longitude: sdk.Float64(163.28),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(1852.32),
                                        Y: sdk.Float32(8453.58),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(4012.59),
                                        Y: sdk.Float32(5362.75),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9292.92),
                                        Y: sdk.Float32(6802.7),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(609178),
                                        Y: sdk.Int(945302),
                                    },
                                },
                            },
                            Filter: sdk.String("quasi"),
                            ProductCategories: []string{
                                "et",
                                "voluptate",
                                "ipsa",
                                "minima",
                            },
                            ProductSet: sdk.String("veritatis"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "adipisci",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("ab"),
    }, operations.VisionImagesAsyncBatchAnnotateSecurity{
        Option1: &operations.VisionImagesAsyncBatchAnnotateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
