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
            AccessToken: "qui",
            Alt: "json",
            Callback: "quia",
            Fields: "nihil",
            Key: "a",
            OauthToken: "ipsum",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "molestiae",
            UploadProtocol: "quos",
        },
        Request: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: "magni",
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 9054612188019787817,
                            Model: "voluptas",
                            Type: "LOGO_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 6279949479516132377,
                            Model: "rerum",
                            Type: "SAFE_SEARCH_DETECTION",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 2674223919223570006,
                            Model: "aut",
                            Type: "FACE_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                41.099998,
                            },
                        },
                        LanguageHints: []string{
                            "natus",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 51.200001,
                                Longitude: 60.099998,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 0.200000,
                                Longitude: 80.099998,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 94.199997,
                                        Y: 71.099998,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 58.099998,
                                        Y: 53.099998,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 6285200166427849714,
                                        Y: 1409038305879143013,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 8961039413042777855,
                                        Y: 7329385736035822789,
                                    },
                                },
                            },
                            Filter: "deserunt",
                            ProductCategories: []string{
                                "fuga",
                                "nostrum",
                            },
                            ProductSet: "nulla",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "placeat",
                            },
                            EnableTextDetectionConfidenceScore: true,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: true,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "dolores",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "aut",
                        },
                        MimeType: "fugiat",
                    },
                    Pages: []int32{
                        250075947926464361,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `VisionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `VisionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `VisionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `VisionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `VisionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `VisionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
