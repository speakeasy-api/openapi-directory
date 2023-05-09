# Files

### Available Operations

* [VisionFilesAnnotate](#visionfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [VisionFilesAsyncBatchAnnotate](#visionfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

## VisionFilesAnnotate

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

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
    res, err := s.Files.VisionFilesAnnotate(ctx, operations.VisionFilesAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: sdk.String("excepturi"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(508969),
                            Model: sdk.String("rem"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumProductSearch.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(93940),
                            Model: sdk.String("repudiandae"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumSafeSearchDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                9292.97,
                            },
                        },
                        LanguageHints: []string{
                            "enim",
                            "consequatur",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6674.11),
                                Longitude: sdk.Float64(8423.42),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(1317.97),
                                Longitude: sdk.Float64(6471.74),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(8413.86),
                                        Y: sdk.Float32(2894.06),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(2647.3),
                                        Y: sdk.Float32(1831.91),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3978.21),
                                        Y: sdk.Float32(5865.13),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(20107),
                                        Y: sdk.Int(164940),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(828940),
                                        Y: sdk.Int(369808),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(4695),
                                        Y: sdk.Int(146441),
                                    },
                                },
                            },
                            Filter: sdk.String("dolorum"),
                            ProductCategories: []string{
                                "tempora",
                                "facilis",
                                "tempore",
                            },
                            ProductSet: sdk.String("labore"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "eum",
                                "non",
                                "eligendi",
                                "sint",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("aliquid"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://unlined-mole.name"),
                        },
                        MimeType: sdk.String("dolor"),
                    },
                    Pages: []int{
                        952749,
                        680056,
                        447125,
                        449198,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(978571),
                            Model: sdk.String("rerum"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumFaceDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(297437),
                            Model: sdk.String("cumque"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumWebDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(411820),
                            Model: sdk.String("aliquid"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(881104),
                            Model: sdk.String("non"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumSafeSearchDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                8817.36,
                                9654.17,
                            },
                        },
                        LanguageHints: []string{
                            "provident",
                            "nam",
                            "id",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(5013.24),
                                Longitude: sdk.Float64(5332.06),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9560.84),
                                Longitude: sdk.Float64(2305.33),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3948.69),
                                        Y: sdk.Float32(4238.55),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6188.09),
                                        Y: sdk.Float32(6063.93),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(4748.67),
                                        Y: sdk.Float32(191.93),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(301575),
                                        Y: sdk.Int(716075),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(660174),
                                        Y: sdk.Int(287991),
                                    },
                                },
                            },
                            Filter: sdk.String("labore"),
                            ProductCategories: []string{
                                "natus",
                                "nobis",
                            },
                            ProductSet: sdk.String("eum"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "aspernatur",
                                "architecto",
                                "magnam",
                                "et",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("excepturi"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("http://optimal-medication.name"),
                        },
                        MimeType: sdk.String("accusantium"),
                    },
                    Pages: []int{
                        968962,
                        652103,
                        320997,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(221262),
                            Model: sdk.String("necessitatibus"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumFaceDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(367562),
                            Model: sdk.String("quasi"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTextDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                8919.24,
                                2603.41,
                                8061.94,
                                5370.23,
                            },
                        },
                        LanguageHints: []string{
                            "in",
                            "architecto",
                            "architecto",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9194.83),
                                Longitude: sdk.Float64(3523.12),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(7142.42),
                                Longitude: sdk.Float64(4692.49),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(8411.4),
                                        Y: sdk.Float32(1494.48),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9046.48),
                                        Y: sdk.Float32(8681.26),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(375.59),
                                        Y: sdk.Float32(1624.93),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(5083.15),
                                        Y: sdk.Float32(6155.6),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(123820),
                                        Y: sdk.Int(779051),
                                    },
                                },
                            },
                            Filter: sdk.String("illum"),
                            ProductCategories: []string{
                                "maxime",
                                "ea",
                                "excepturi",
                                "odit",
                            },
                            ProductSet: sdk.String("ea"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "ab",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("maiores"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://harmonious-in-joke.info"),
                        },
                        MimeType: sdk.String("nam"),
                    },
                    Pages: []int{
                        866383,
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(975522),
                            Model: sdk.String("perferendis"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumProductSearch.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(230742),
                            Model: sdk.String("aut"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumCropHints.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                9441.24,
                                7299.91,
                            },
                        },
                        LanguageHints: []string{
                            "dolores",
                            "quis",
                            "totam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(4895.49),
                                Longitude: sdk.Float64(543.38),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3389.85),
                                Longitude: sdk.Float64(1999.96),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(185.21),
                                        Y: sdk.Float32(1709.86),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(463451),
                                        Y: sdk.Int(223924),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(874573),
                                        Y: sdk.Int(345352),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(944120),
                                        Y: sdk.Int(928082),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(608253),
                                        Y: sdk.Int(704415),
                                    },
                                },
                            },
                            Filter: sdk.String("perspiciatis"),
                            ProductCategories: []string{
                                "porro",
                            },
                            ProductSet: sdk.String("consequuntur"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "error",
                                "eaque",
                                "occaecati",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("rerum"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("http://yawning-tune.biz"),
                        },
                        MimeType: sdk.String("iste"),
                    },
                    Pages: []int{
                        535633,
                        864282,
                        589910,
                    },
                },
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.VisionFilesAnnotateSecurity{
        Option1: &operations.VisionFilesAnnotateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse != nil {
        // handle response
    }
}
```

## VisionFilesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

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
    res, err := s.Files.VisionFilesAsyncBatchAnnotate(ctx, operations.VisionFilesAsyncBatchAnnotateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest{
            Parent: sdk.String("ipsum"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(739551),
                            Model: sdk.String("voluptate"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumDocumentTextDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(970237),
                            Model: sdk.String("amet"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(254356),
                            Model: sdk.String("veritatis"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTypeUnspecified.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                4344.17,
                            },
                        },
                        LanguageHints: []string{
                            "quaerat",
                            "accusamus",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6963.44),
                                Longitude: sdk.Float64(9764.05),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3777.52),
                                Longitude: sdk.Float64(6176.58),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(5424.99),
                                        Y: sdk.Float32(246.78),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(67249),
                                        Y: sdk.Int(743835),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(679393),
                                        Y: sdk.Int(478596),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(453697),
                                        Y: sdk.Int(677082),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(536579),
                                        Y: sdk.Int(607045),
                                    },
                                },
                            },
                            Filter: sdk.String("necessitatibus"),
                            ProductCategories: []string{
                                "asperiores",
                                "nihil",
                                "ipsum",
                            },
                            ProductSet: sdk.String("voluptate"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "saepe",
                                "eius",
                                "aspernatur",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("perferendis"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("http://sizzling-syrup.biz"),
                        },
                        MimeType: sdk.String("saepe"),
                    },
                    OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                        BatchSize: sdk.Int(383464),
                        GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                            URI: sdk.String("https://old-expansionism.net"),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(628982),
                            Model: sdk.String("alias"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumProductSearch.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(311860),
                            Model: sdk.String("tempora"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTextDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(798047),
                            Model: sdk.String("officiis"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLandmarkDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                9527.92,
                                4561.3,
                                6874.88,
                            },
                        },
                        LanguageHints: []string{
                            "ipsum",
                            "quisquam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9473.71),
                                Longitude: sdk.Float64(2294.42),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(7308.56),
                                Longitude: sdk.Float64(8802.98),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3136.92),
                                        Y: sdk.Float32(2133.12),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9574.51),
                                        Y: sdk.Float32(5182.01),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(25662),
                                        Y: sdk.Int(711584),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(207470),
                                        Y: sdk.Int(153694),
                                    },
                                },
                            },
                            Filter: sdk.String("vel"),
                            ProductCategories: []string{
                                "voluptas",
                                "deserunt",
                                "quam",
                            },
                            ProductSet: sdk.String("ipsum"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "qui",
                                "cupiditate",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("maxime"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://short-business.net"),
                        },
                        MimeType: sdk.String("totam"),
                    },
                    OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                        BatchSize: sdk.Int(276894),
                        GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                            URI: sdk.String("http://decisive-radiosonde.net"),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(463150),
                            Model: sdk.String("molestias"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumWebDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(183280),
                            Model: sdk.String("neque"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumFaceDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                4880.56,
                            },
                        },
                        LanguageHints: []string{
                            "ullam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(7220.81),
                                Longitude: sdk.Float64(9404.32),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(304.52),
                                Longitude: sdk.Float64(7653.26),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(7486.64),
                                        Y: sdk.Float32(925.96),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9037.2),
                                        Y: sdk.Float32(2174.5),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(834.22),
                                        Y: sdk.Float32(7492.55),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(731694),
                                        Y: sdk.Int(584476),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(45614),
                                        Y: sdk.Int(961937),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(209157),
                                        Y: sdk.Int(292147),
                                    },
                                },
                            },
                            Filter: sdk.String("labore"),
                            ProductCategories: []string{
                                "dolorum",
                            },
                            ProductSet: sdk.String("architecto"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "aut",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("quas"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://acrobatic-plea.net"),
                        },
                        MimeType: sdk.String("porro"),
                    },
                    OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                        BatchSize: sdk.Int(984330),
                        GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                            URI: sdk.String("http://rosy-nanoparticle.biz"),
                        },
                    },
                },
                shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(512393),
                            Model: sdk.String("odio"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumSafeSearchDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                7875.42,
                                8765.06,
                                6064.76,
                                3381.59,
                            },
                        },
                        LanguageHints: []string{
                            "delectus",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(4551.69),
                                Longitude: sdk.Float64(2317.01),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(8788.7),
                                Longitude: sdk.Float64(9493.19),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9413.78),
                                        Y: sdk.Float32(7155.61),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(7992.03),
                                        Y: sdk.Float32(4861.6),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(708548),
                                        Y: sdk.Int(874288),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(498140),
                                        Y: sdk.Int(293020),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(844550),
                                        Y: sdk.Int(848944),
                                    },
                                },
                            },
                            Filter: sdk.String("sequi"),
                            ProductCategories: []string{
                                "impedit",
                                "aut",
                                "voluptatibus",
                            },
                            ProductSet: sdk.String("exercitationem"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "fugit",
                                "porro",
                                "maiores",
                                "doloribus",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("iusto"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://lonely-accompanist.name"),
                        },
                        MimeType: sdk.String("tempora"),
                    },
                    OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                        BatchSize: sdk.Int(368584),
                        GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                            URI: sdk.String("http://concrete-hill.net"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("ex"),
    }, operations.VisionFilesAsyncBatchAnnotateSecurity{
        Option1: &operations.VisionFilesAsyncBatchAnnotateSecurityOption1{
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
