# Projects

### Available Operations

* [VisionProjectsLocationsFilesAnnotate](#visionprojectslocationsfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [VisionProjectsLocationsFilesAsyncBatchAnnotate](#visionprojectslocationsfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* [VisionProjectsLocationsImagesAnnotate](#visionprojectslocationsimagesannotate) - Run image detection and annotation for a batch of images.
* [VisionProjectsLocationsImagesAsyncBatchAnnotate](#visionprojectslocationsimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## VisionProjectsLocationsFilesAnnotate

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
    res, err := s.Projects.VisionProjectsLocationsFilesAnnotate(ctx, operations.VisionProjectsLocationsFilesAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: sdk.String("non"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(580152),
                            Model: sdk.String("numquam"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumWebDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                3762.26,
                            },
                        },
                        LanguageHints: []string{
                            "dignissimos",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(1154.84),
                                Longitude: sdk.Float64(9816.4),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6184.8),
                                Longitude: sdk.Float64(2446.51),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3743.23),
                                        Y: sdk.Float32(9903.45),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(456.59),
                                        Y: sdk.Float32(4090.54),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3100.67),
                                        Y: sdk.Float32(1629.54),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(8315.2),
                                        Y: sdk.Float32(6387.62),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(490305),
                                        Y: sdk.Int(640024),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(989410),
                                        Y: sdk.Int(368102),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(65304),
                                        Y: sdk.Int(312753),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(783235),
                                        Y: sdk.Int(801836),
                                    },
                                },
                            },
                            Filter: sdk.String("labore"),
                            ProductCategories: []string{
                                "adipisci",
                            },
                            ProductSet: sdk.String("fuga"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "suscipit",
                                "velit",
                                "culpa",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("est"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("https://marvelous-stimulation.info"),
                        },
                        MimeType: sdk.String("ducimus"),
                    },
                    Pages: []int{
                        427834,
                        287051,
                        822560,
                    },
                },
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.VisionProjectsLocationsFilesAnnotateSecurity{
        Option1: &operations.VisionProjectsLocationsFilesAnnotateSecurityOption1{
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

## VisionProjectsLocationsFilesAsyncBatchAnnotate

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
    res, err := s.Projects.VisionProjectsLocationsFilesAsyncBatchAnnotate(ctx, operations.VisionProjectsLocationsFilesAsyncBatchAnnotateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest{
            Parent: sdk.String("cum"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(348519),
                            Model: sdk.String("earum"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumWebDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(257233),
                            Model: sdk.String("doloribus"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLabelDetection.ToPointer(),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                6971.42,
                                9049.49,
                                8970.71,
                                2965.56,
                            },
                        },
                        LanguageHints: []string{
                            "asperiores",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(2415.45),
                                Longitude: sdk.Float64(2494.2),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(2282.63),
                                Longitude: sdk.Float64(1059.06),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(9509.53),
                                        Y: sdk.Float32(8915.23),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(2334.2),
                                        Y: sdk.Float32(3581.07),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(385237),
                                        Y: sdk.Int(58356),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(916727),
                                        Y: sdk.Int(730709),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(113816),
                                        Y: sdk.Int(881721),
                                    },
                                },
                            },
                            Filter: sdk.String("similique"),
                            ProductCategories: []string{
                                "aspernatur",
                                "voluptas",
                            },
                            ProductSet: sdk.String("voluptas"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "minima",
                                "nobis",
                            },
                            EnableTextDetectionConfidenceScore: sdk.Bool(false),
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: sdk.Bool(false),
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: sdk.String("dolorum"),
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: sdk.String("http://stable-closing.name"),
                        },
                        MimeType: sdk.String("in"),
                    },
                    OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                        BatchSize: sdk.Int(296242),
                        GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                            URI: sdk.String("http://unfinished-sport.info"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("quas"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("nesciunt"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("totam"),
    }, operations.VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity{
        Option1: &operations.VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1{
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

## VisionProjectsLocationsImagesAnnotate

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
    res, err := s.Projects.VisionProjectsLocationsImagesAnnotate(ctx, operations.VisionProjectsLocationsImagesAnnotateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest{
            Parent: sdk.String("exercitationem"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(699575),
                            Model: sdk.String("sed"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumObjectLocalization.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("explicabo"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("asperiores"),
                            ImageURI: sdk.String("facilis"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                7090.72,
                                708.69,
                            },
                        },
                        LanguageHints: []string{
                            "dolore",
                            "laborum",
                            "sed",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(4475.16),
                                Longitude: sdk.Float64(4174.86),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6960.77),
                                Longitude: sdk.Float64(1312.89),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6041.18),
                                        Y: sdk.Float32(1000.32),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3828.08),
                                        Y: sdk.Float32(9602.57),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(72434),
                                        Y: sdk.Int(967795),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(19300),
                                        Y: sdk.Int(546885),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(979574),
                                        Y: sdk.Int(274823),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(148478),
                                        Y: sdk.Int(592231),
                                    },
                                },
                            },
                            Filter: sdk.String("eius"),
                            ProductCategories: []string{
                                "ipsum",
                                "ea",
                                "occaecati",
                                "quos",
                            },
                            ProductSet: sdk.String("voluptatibus"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "tempora",
                                "voluptate",
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
                            MaxResults: sdk.Int(401713),
                            Model: sdk.String("sit"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLogoDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(888044),
                            Model: sdk.String("praesentium"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumCropHints.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(310381),
                            Model: sdk.String("incidunt"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLabelDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(894864),
                            Model: sdk.String("rem"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTypeUnspecified.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("nobis"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("error"),
                            ImageURI: sdk.String("veniam"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                9241.59,
                                9671.22,
                            },
                        },
                        LanguageHints: []string{
                            "magni",
                            "aperiam",
                            "saepe",
                            "numquam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3299.35),
                                Longitude: sdk.Float64(4461.35),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(8892.34),
                                Longitude: sdk.Float64(1046.27),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3484.76),
                                        Y: sdk.Float32(5106.29),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(7400.98),
                                        Y: sdk.Float32(3868.27),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6805.15),
                                        Y: sdk.Float32(5300.89),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(944708),
                                        Y: sdk.Int(710529),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(892863),
                                        Y: sdk.Int(204923),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(677115),
                                        Y: sdk.Int(341698),
                                    },
                                },
                            },
                            Filter: sdk.String("officia"),
                            ProductCategories: []string{
                                "corrupti",
                                "accusamus",
                                "tempora",
                            },
                            ProductSet: sdk.String("atque"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "ut",
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
                            MaxResults: sdk.Int(30235),
                            Model: sdk.String("culpa"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumCropHints.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(299643),
                            Model: sdk.String("consequatur"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumTextDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(372679),
                            Model: sdk.String("sit"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumDocumentTextDetection.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(558065),
                            Model: sdk.String("repudiandae"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLabelDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("et"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("blanditiis"),
                            ImageURI: sdk.String("ex"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                243.13,
                            },
                        },
                        LanguageHints: []string{
                            "nostrum",
                            "saepe",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6222.31),
                                Longitude: sdk.Float64(85.11),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(2790.68),
                                Longitude: sdk.Float64(9688.65),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6908.94),
                                        Y: sdk.Float32(1157.03),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(577140),
                                        Y: sdk.Int(289776),
                                    },
                                },
                            },
                            Filter: sdk.String("quidem"),
                            ProductCategories: []string{
                                "laborum",
                                "nam",
                                "tenetur",
                            },
                            ProductSet: sdk.String("laboriosam"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "amet",
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
                            MaxResults: sdk.Int(454860),
                            Model: sdk.String("unde"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumObjectLocalization.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(588740),
                            Model: sdk.String("repellendus"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumObjectLocalization.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(914791),
                            Model: sdk.String("perferendis"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("quidem"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("reprehenderit"),
                            ImageURI: sdk.String("facere"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                5098.07,
                                6485.98,
                                3339.65,
                            },
                        },
                        LanguageHints: []string{
                            "quisquam",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9195.32),
                                Longitude: sdk.Float64(972.43),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(5424.57),
                                Longitude: sdk.Float64(4420.36),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(5199.52),
                                        Y: sdk.Float32(3831.03),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6939.57),
                                        Y: sdk.Float32(8066.7),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(908.85),
                                        Y: sdk.Float32(4610.07),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(2277.59),
                                        Y: sdk.Float32(8268.25),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(539118),
                                        Y: sdk.Int(623295),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(887265),
                                        Y: sdk.Int(886961),
                                    },
                                },
                            },
                            Filter: sdk.String("accusamus"),
                            ProductCategories: []string{
                                "minima",
                                "aspernatur",
                                "ex",
                            },
                            ProductSet: sdk.String("maiores"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "at",
                                "error",
                                "blanditiis",
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
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("atque"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("recusandae"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.VisionProjectsLocationsImagesAnnotateSecurity{
        Option1: &operations.VisionProjectsLocationsImagesAnnotateSecurityOption1{
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

## VisionProjectsLocationsImagesAsyncBatchAnnotate

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
    res, err := s.Projects.VisionProjectsLocationsImagesAsyncBatchAnnotate(ctx, operations.VisionProjectsLocationsImagesAsyncBatchAnnotateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest: &shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest{
            OutputConfig: &shared.GoogleCloudVisionV1p1beta1OutputConfig{
                BatchSize: sdk.Int(919783),
                GcsDestination: &shared.GoogleCloudVisionV1p1beta1GcsDestination{
                    URI: sdk.String("http://animated-brief.biz"),
                },
            },
            Parent: sdk.String("enim"),
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(952143),
                            Model: sdk.String("molestias"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumLogoDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("saepe"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("consequuntur"),
                            ImageURI: sdk.String("occaecati"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                5979.37,
                                4463.94,
                                2380.43,
                                9078.76,
                            },
                        },
                        LanguageHints: []string{
                            "consequuntur",
                            "fugit",
                            "id",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3356.31),
                                Longitude: sdk.Float64(4402.64),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6255.28),
                                Longitude: sdk.Float64(764.86),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6964.63),
                                        Y: sdk.Float32(9109.94),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(2473.99),
                                        Y: sdk.Float32(8784.93),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(434156),
                                        Y: sdk.Int(59944),
                                    },
                                },
                            },
                            Filter: sdk.String("totam"),
                            ProductCategories: []string{
                                "molestiae",
                            },
                            ProductSet: sdk.String("eveniet"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "cum",
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
                            MaxResults: sdk.Int(898063),
                            Model: sdk.String("ratione"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumImageProperties.ToPointer(),
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: sdk.Int(715208),
                            Model: sdk.String("voluptatum"),
                            Type: shared.GoogleCloudVisionV1p1beta1FeatureTypeEnumDocumentTextDetection.ToPointer(),
                        },
                    },
                    Image: &shared.GoogleCloudVisionV1p1beta1Image{
                        Content: sdk.String("aliquam"),
                        Source: &shared.GoogleCloudVisionV1p1beta1ImageSource{
                            GcsImageURI: sdk.String("ad"),
                            ImageURI: sdk.String("repellat"),
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                3621.89,
                            },
                        },
                        LanguageHints: []string{
                            "nihil",
                            "mollitia",
                            "voluptas",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(51.89),
                                Longitude: sdk.Float64(9795.27),
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: sdk.Float64(9702.22),
                                Longitude: sdk.Float64(1746.58),
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(3279.88),
                                        Y: sdk.Float32(2931.44),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(6803.49),
                                        Y: sdk.Float32(2003.64),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: sdk.Float32(632.07),
                                        Y: sdk.Float32(9257.03),
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(309251),
                                        Y: sdk.Int(477646),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(403218),
                                        Y: sdk.Int(284000),
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: sdk.Int(633062),
                                        Y: sdk.Int(238413),
                                    },
                                },
                            },
                            Filter: sdk.String("debitis"),
                            ProductCategories: []string{
                                "eum",
                                "nemo",
                                "recusandae",
                            },
                            ProductSet: sdk.String("esse"),
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "quis",
                                "eum",
                                "reiciendis",
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
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("nostrum"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("animi"),
    }, operations.VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity{
        Option1: &operations.VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1{
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
