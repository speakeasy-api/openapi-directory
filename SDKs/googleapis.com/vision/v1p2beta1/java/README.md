# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            VisionFilesAnnotateRequest req = new VisionFilesAnnotateRequest() {{
                security = new VisionFilesAnnotateSecurity() {{
                    option1 = new VisionFilesAnnotateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new VisionFilesAnnotateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "fugiat";
                    alt = "json";
                    callback = "eos";
                    fields = "delectus";
                    key = "excepturi";
                    oauthToken = "esse";
                    prettyPrint = true;
                    quotaUser = "in";
                    uploadType = "neque";
                    uploadProtocol = "recusandae";
                }};
                request = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest() {{
                    parent = "nulla";
                    requests = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest[]() {{
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 5121381830605284992;
                                    model = "quas";
                                    type = "LABEL_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(58.200001),
                                        add(72.099998),
                                        add(19.200001),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("cupiditate"),
                                    add("eaque"),
                                    add("ullam"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 23.200001;
                                        longitude = 65.099998;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 80.099998;
                                        longitude = 89.099998;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 20.200001;
                                                y = 21.200001;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 4353602771421535085;
                                                y = 5799121225458936603;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 1727608745918787044;
                                                y = 3695476974402256423;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 7202512563447213470;
                                                y = 7901536767093378273;
                                            }}),
                                        }};
                                    }};
                                    filter = "ea";
                                    productCategories = new String[]() {{
                                        add("veritatis"),
                                        add("earum"),
                                    }};
                                    productSet = "est";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("consectetur"),
                                        add("optio"),
                                        add("fugit"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "soluta";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "aut";
                                }};
                                mimeType = "eum";
                            }};
                            pages = new Integer[]() {{
                                add(8218049332550619072),
                                add(6872626749368897404),
                                add(446974519540144749),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 4577497519039366537;
                                    model = "quis";
                                    type = "LANDMARK_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 3369478194431150772;
                                    model = "laudantium";
                                    type = "FACE_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 381604056397610963;
                                    model = "consequuntur";
                                    type = "CROP_HINTS";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(31.100000),
                                        add(23.200001),
                                        add(13.100000),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("vero"),
                                    add("quia"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 27.100000;
                                        longitude = 70.099998;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 67.199997;
                                        longitude = 94.099998;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 79.099998;
                                                y = 0.200000;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 8279165169592762484;
                                                y = 3979550748621857756;
                                            }}),
                                        }};
                                    }};
                                    filter = "rerum";
                                    productCategories = new String[]() {{
                                        add("aperiam"),
                                    }};
                                    productSet = "doloremque";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("laudantium"),
                                        add("qui"),
                                        add("ipsam"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = true;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "est";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "rem";
                                }};
                                mimeType = "dolor";
                            }};
                            pages = new Integer[]() {{
                                add(669794309013279766),
                                add(2716950910023671871),
                            }};
                        }}),
                    }};
                }};
            }};

            VisionFilesAnnotateResponse res = sdk.files.visionFilesAnnotate(req);

            if (res.googleCloudVisionV1p2beta1BatchAnnotateFilesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `visionFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `visionImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `visionProjectsLocationsFilesAnnotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `visionProjectsLocationsFilesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `visionProjectsLocationsImagesAnnotate` - Run image detection and annotation for a batch of images.
* `visionProjectsLocationsImagesAsyncBatchAnnotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
