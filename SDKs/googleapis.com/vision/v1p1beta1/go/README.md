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
            DollarXgafv: "1",
            AccessToken: "eius",
            Alt: "proto",
            Callback: "minus",
            Fields: "esse",
            Key: "autem",
            OauthToken: "rerum",
            PrettyPrint: true,
            QuotaUser: "laboriosam",
            UploadType: "sint",
            UploadProtocol: "nisi",
        },
        Request: &shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest{
            Parent: "recusandae",
            Requests: []shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest{
                    Features: []shared.GoogleCloudVisionV1p1beta1Feature{
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 3971315781086113626,
                            Model: "esse",
                            Type: "CROP_HINTS",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 3280961666086257703,
                            Model: "dolore",
                            Type: "PRODUCT_SEARCH",
                        },
                        shared.GoogleCloudVisionV1p1beta1Feature{
                            MaxResults: 2168295586647050175,
                            Model: "reprehenderit",
                            Type: "LOGO_DETECTION",
                        },
                    },
                    ImageContext: &shared.GoogleCloudVisionV1p1beta1ImageContext{
                        CropHintsParams: &shared.GoogleCloudVisionV1p1beta1CropHintsParams{
                            AspectRatios: []float32{
                                33.200001,
                                24.200001,
                                19.200001,
                            },
                        },
                        LanguageHints: []string{
                            "ducimus",
                            "quam",
                            "voluptas",
                        },
                        LatLongRect: &shared.GoogleCloudVisionV1p1beta1LatLongRect{
                            MaxLatLng: &shared.LatLng{
                                Latitude: 66.099998,
                                Longitude: 11.100000,
                            },
                            MinLatLng: &shared.LatLng{
                                Latitude: 97.099998,
                                Longitude: 99.199997,
                            },
                        },
                        ProductSearchParams: &shared.GoogleCloudVisionV1p1beta1ProductSearchParams{
                            BoundingPoly: &shared.GoogleCloudVisionV1p1beta1BoundingPoly{
                                NormalizedVertices: []shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                    shared.GoogleCloudVisionV1p1beta1NormalizedVertex{
                                        X: 73.199997,
                                        Y: 20.200001,
                                    },
                                },
                                Vertices: []shared.GoogleCloudVisionV1p1beta1Vertex{
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 4811534959094338657,
                                        Y: 8138503825895719319,
                                    },
                                    shared.GoogleCloudVisionV1p1beta1Vertex{
                                        X: 3370215413715443786,
                                        Y: 894693224882232375,
                                    },
                                },
                            },
                            Filter: "enim",
                            ProductCategories: []string{
                                "voluptatem",
                                "et",
                            },
                            ProductSet: "quia",
                        },
                        TextDetectionParams: &shared.GoogleCloudVisionV1p1beta1TextDetectionParams{
                            AdvancedOcrOptions: []string{
                                "omnis",
                                "libero",
                                "eum",
                            },
                            EnableTextDetectionConfidenceScore: false,
                        },
                        WebDetectionParams: &shared.GoogleCloudVisionV1p1beta1WebDetectionParams{
                            IncludeGeoResults: false,
                        },
                    },
                    InputConfig: &shared.GoogleCloudVisionV1p1beta1InputConfig{
                        Content: "est",
                        GcsSource: &shared.GoogleCloudVisionV1p1beta1GcsSource{
                            URI: "soluta",
                        },
                        MimeType: "consequatur",
                    },
                    Pages: []int32{
                        888600988671988232,
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
