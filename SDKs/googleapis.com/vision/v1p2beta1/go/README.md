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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest{
            Parent: "facilis",
            Requests: []shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 297534,
                            Model: "saepe",
                            Type: "TYPE_UNSPECIFIED",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 963663,
                            Model: "enim",
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
                            "deleniti",
                            "similique",
                            "reprehenderit",
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
                            Filter: "accusamus",
                            ProductCategories: []string{
                                "reiciendis",
                                "rem",
                                "quibusdam",
                                "et",
                            },
                            ProductSet: "praesentium",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "dolor",
                                "soluta",
                                "sed",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "quisquam",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "https://kristina.com",
                        },
                        MimeType: "sed",
                    },
                    Pages: []int{
                        758616,
                        521848,
                        105907,
                        414662,
                    },
                },
                shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p2beta1Feature{
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 264555,
                            Model: "amet",
                            Type: "WEB_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p2beta1Feature{
                            MaxResults: 736918,
                            Model: "blanditiis",
                            Type: "LANDMARK_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p2beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p2beta1CropHintsParams{
                            AspectRatios: []float32{
                                1352.18,
                                187.89,
                                3241.41,
                            },
                        },
                        LanguageHints: []string{
                            "voluptatem",
                            "laborum",
                            "modi",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p2beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 6169.34,
                                Longitude: 3864.89,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 9437.49,
                                Longitude: 9025.99,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p2beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p2beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p2beta1NormalizedVertex{
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
                            Filter: "libero",
                            ProductCategories: []string{
                                "libero",
                                "ipsum",
                                "non",
                            },
                            ProductSet: "ea",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p2beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "placeat",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p2beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p2beta1InputConfig{
                        Content: "ipsam",
                        GcsSource: &shared.GoogleCloudVisionV1p2beta1GcsSource{
                            URI: "https://frank.biz",
                        },
                        MimeType: "similique",
                    },
                    Pages: []int{
                        438601,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
