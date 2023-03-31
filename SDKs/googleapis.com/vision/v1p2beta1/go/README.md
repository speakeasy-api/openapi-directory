# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vision/v1p2beta1/go
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

    req := operations.VisionFilesAnnotateRequest{
        DollarXgafv: "2",
        GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: "provident",
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 602763,
                            Model: "nulla",
                            Type: "SAFE_SEARCH_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 847252,
                            Model: "vel",
                            Type: "IMAGE_PROPERTIES",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 645894,
                            Model: "suscipit",
                            Type: "TEXT_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 297534,
                            Model: "debitis",
                            Type: "TYPE_UNSPECIFIED",
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
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 102044,
                            Model: "mollitia",
                            Type: "LANDMARK_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 635059,
                            Model: "consequuntur",
                            Type: "OBJECT_LOCALIZATION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 653108,
                            Model: "occaecati",
                            Type: "LOGO_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 414369,
                            Model: "quam",
                            Type: "DOCUMENT_TEXT_DETECTION",
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
                                Latitude: 1103.75,
                                Longitude: 6747.52,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 6563.3,
                                Longitude: 3172.02,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
                                        X: 7783.46,
                                        Y: 1965.82,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p2beta1Vertex{
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 368725,
                                        Y: 662527,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 820994,
                                        Y: 13571,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 97101,
                                        Y: 622846,
                                    },
                                    shared.GoogleCloudVisionV1p2beta1Vertex{
                                        X: 837945,
                                        Y: 673660,
                                    },
                                },
                            },
                            Filter: "quasi",
                            ProductCategories: []string{
                                "voluptatibus",
                                "vero",
                                "nihil",
                                "praesentium",
                            },
                            ProductSet: "voluptatibus",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "omnis",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "voluptate",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "https://agile-arch-rival.info",
                        },
                        MimeType: "ut",
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
        AccessToken: "dicta",
        Alt: "proto",
        Callback: "enim",
        Fields: "accusamus",
        Key: "commodi",
        OauthToken: "repudiandae",
        PrettyPrint: false,
        QuotaUser: "quae",
        UploadType: "ipsum",
        UploadProtocol: "quidem",
    }

    ctx := context.Background()
    res, err := s.Files.VisionFilesAnnotate(ctx, req, operations.VisionFilesAnnotateSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Files

* `VisionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### Images

* `VisionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### Projects

* `VisionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `VisionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
