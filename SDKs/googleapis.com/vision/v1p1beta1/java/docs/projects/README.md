# projects

### Available Operations

* [visionProjectsLocationsFilesAnnotate](#visionprojectslocationsfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionProjectsLocationsFilesAsyncBatchAnnotate](#visionprojectslocationsfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* [visionProjectsLocationsImagesAnnotate](#visionprojectslocationsimagesannotate) - Run image detection and annotation for a batch of images.
* [visionProjectsLocationsImagesAsyncBatchAnnotate](#visionprojectslocationsimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## visionProjectsLocationsFilesAnnotate

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAnnotateResponse;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionProjectsLocationsFilesAnnotateRequest req = new VisionProjectsLocationsFilesAnnotateRequest("quae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVisionV1p1beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest() {{
                    parent = "odio";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 787542;
                                    model = "vero";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 338159;
                                    model = "ipsum";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 455169;
                                    model = "consectetur";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.PRODUCT_SEARCH;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 949319;
                                    model = "dignissimos";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(7992.03),
                                        add(4861.6),
                                        add(6304.48),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("vero"),
                                    add("ducimus"),
                                    add("dolore"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 8445.5;
                                        longitude = 8489.44;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 1943.42;
                                        longitude = 6178.77;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 132.36;
                                                y = 9742.59;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3472.33;
                                                y = 8623.1;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 1481.41;
                                                y = 7804.27;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9818.3;
                                                y = 9850.33;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 753570;
                                                y = 497391;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 4048;
                                                y = 639473;
                                            }}),
                                        }};
                                    }};
                                    filter = "tempora";
                                    productCategories = new String[]{{
                                        add("ea"),
                                        add("aspernatur"),
                                    }};
                                    productSet = "vel";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("magnam"),
                                        add("ratione"),
                                        add("ex"),
                                        add("laudantium"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "dicta";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "http://wordy-bother.info";
                                }};
                                mimeType = "nulla";
                            }};
                            pages = new Integer[]{{
                                add(972920),
                                add(343605),
                                add(960835),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 906556;
                                    model = "ea";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.WEB_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 359271;
                                    model = "veniam";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 81101;
                                    model = "magnam";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 775220;
                                    model = "consectetur";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(3253.1),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("a"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 7255.95;
                                        longitude = 139.48;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 114.27;
                                        longitude = 5334.66;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3045.82;
                                                y = 1469.46;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 8828.6;
                                                y = 795.22;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 2506.22;
                                                y = 896.03;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 6774.12;
                                                y = 6720.48;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 245367;
                                                y = 432148;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 420539;
                                                y = 752135;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 557369;
                                                y = 829603;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 860552;
                                                y = 379034;
                                            }}),
                                        }};
                                    }};
                                    filter = "libero";
                                    productCategories = new String[]{{
                                        add("tempora"),
                                    }};
                                    productSet = "numquam";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("provident"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "ipsa";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "http://formal-keystone.biz";
                                }};
                                mimeType = "esse";
                            }};
                            pages = new Integer[]{{
                                add(524593),
                                add(683282),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 695626;
                                    model = "fugiat";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.LOGO_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 433439;
                                    model = "suscipit";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.WEB_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(5093.42),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("veritatis"),
                                    add("ipsa"),
                                    add("id"),
                                    add("quidem"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 2065.94;
                                        longitude = 7786.96;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 8472.76;
                                        longitude = 7774.08;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 2594.22;
                                                y = 1783.67;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3738.13;
                                                y = 698.59;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 5876;
                                                y = 96.88;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 892050;
                                                y = 370853;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 133465;
                                                y = 197054;
                                            }}),
                                        }};
                                    }};
                                    filter = "quo";
                                    productCategories = new String[]{{
                                        add("recusandae"),
                                        add("aperiam"),
                                    }};
                                    productSet = "distinctio";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("dignissimos"),
                                        add("inventore"),
                                        add("nihil"),
                                        add("totam"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "accusamus";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "http://likely-mortality.info";
                                }};
                                mimeType = "sapiente";
                            }};
                            pages = new Integer[]{{
                                add(645570),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "eum";
                key = "quas";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "deleniti";
                uploadProtocol = "fugit";
            }};            

            VisionProjectsLocationsFilesAnnotateResponse res = sdk.projects.visionProjectsLocationsFilesAnnotate(req, new VisionProjectsLocationsFilesAnnotateSecurity() {{
                option1 = new VisionProjectsLocationsFilesAnnotateSecurityOption1("fuga", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudVisionV1p1beta1BatchAnnotateFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## visionProjectsLocationsFilesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAsyncBatchAnnotateRequest;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAsyncBatchAnnotateResponse;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionProjectsLocationsFilesAsyncBatchAnnotateRequest req = new VisionProjectsLocationsFilesAsyncBatchAnnotateRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest = new GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest() {{
                    parent = "explicabo";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 147014;
                                    model = "sapiente";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.LANDMARK_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 187131;
                                    model = "explicabo";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.PRODUCT_SEARCH;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(5438.06),
                                        add(922.6),
                                        add(4569.11),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("accusamus"),
                                    add("veritatis"),
                                    add("esse"),
                                    add("quod"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 7241.68;
                                        longitude = 8771.31;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 3990.25;
                                        longitude = 934.59;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 4263.06;
                                                y = 6900.25;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 4732.21;
                                                y = 6996.22;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 5801.97;
                                                y = 3277.2;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 7162.44;
                                                y = 7567.79;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 636061;
                                                y = 731398;
                                            }}),
                                        }};
                                    }};
                                    filter = "adipisci";
                                    productCategories = new String[]{{
                                        add("consequuntur"),
                                        add("consequatur"),
                                        add("minus"),
                                        add("quaerat"),
                                    }};
                                    productSet = "sapiente";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("esse"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "blanditiis";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "https://weird-stove.name";
                                }};
                                mimeType = "esse";
                            }};
                            outputConfig = new GoogleCloudVisionV1p1beta1OutputConfig() {{
                                batchSize = 97468;
                                gcsDestination = new GoogleCloudVisionV1p1beta1GcsDestination() {{
                                    uri = "https://petty-moonscape.org";
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 157632;
                                    model = "eveniet";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 815524;
                                    model = "veritatis";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.LANDMARK_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 94458;
                                    model = "similique";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.IMAGE_PROPERTIES;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 398434;
                                    model = "tenetur";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(4240.32),
                                        add(4473.78),
                                        add(2586.84),
                                        add(7276.97),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("soluta"),
                                    add("accusantium"),
                                    add("aliquam"),
                                    add("sapiente"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1197.71;
                                        longitude = 3553.69;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 4438.79;
                                        longitude = 3567.07;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 163.28;
                                                y = 5318.49;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 1852.32;
                                                y = 8453.58;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 536275;
                                                y = 929292;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 680270;
                                                y = 99615;
                                            }}),
                                        }};
                                    }};
                                    filter = "omnis";
                                    productCategories = new String[]{{
                                        add("quasi"),
                                        add("at"),
                                        add("et"),
                                        add("voluptate"),
                                    }};
                                    productSet = "ipsa";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("veritatis"),
                                        add("consectetur"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "adipisci";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "https://tedious-antigen.name";
                                }};
                                mimeType = "aut";
                            }};
                            outputConfig = new GoogleCloudVisionV1p1beta1OutputConfig() {{
                                batchSize = 513075;
                                gcsDestination = new GoogleCloudVisionV1p1beta1GcsDestination() {{
                                    uri = "http://primary-bartender.name";
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "aut";
            }};            

            VisionProjectsLocationsFilesAsyncBatchAnnotateResponse res = sdk.projects.visionProjectsLocationsFilesAsyncBatchAnnotate(req, new VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity() {{
                option1 = new VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1("dignissimos", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## visionProjectsLocationsImagesAnnotate

Run image detection and annotation for a batch of images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAnnotateResponse;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionProjectsLocationsImagesAnnotateRequest req = new VisionProjectsLocationsImagesAnnotateRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVisionV1p1beta1BatchAnnotateImagesRequest = new GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest() {{
                    parent = "velit";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest[]{{
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 990345;
                                    model = "aperiam";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 310067;
                                    model = "consequuntur";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.WEB_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "officia";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "maxime";
                                    imageUri = "dignissimos";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(9894.1),
                                        add(3681.02),
                                        add(653.04),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("porro"),
                                    add("quod"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 2883.98;
                                        longitude = 704.47;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 2414.18;
                                        longitude = 6835.73;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3807.29;
                                                y = 2460.63;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 6339.31;
                                                y = 6658.59;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9268.8;
                                                y = 5173.09;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 424089;
                                                y = 497678;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 554688;
                                                y = 427834;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 287051;
                                                y = 822560;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 706575;
                                                y = 738227;
                                            }}),
                                        }};
                                    }};
                                    filter = "commodi";
                                    productCategories = new String[]{{
                                        add("corporis"),
                                        add("reiciendis"),
                                    }};
                                    productSet = "assumenda";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("recusandae"),
                                        add("aliquid"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 738683;
                                    model = "consectetur";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "exercitationem";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "earum";
                                    imageUri = "facere";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(9854.92),
                                        add(3817.6),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("quidem"),
                                    add("saepe"),
                                    add("necessitatibus"),
                                    add("dolore"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1210.59;
                                        longitude = 9920.12;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 2415.45;
                                        longitude = 2494.2;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 1059.06;
                                                y = 4895.09;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 891523;
                                                y = 233420;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 358107;
                                                y = 689768;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 385237;
                                                y = 58356;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 916727;
                                                y = 730709;
                                            }}),
                                        }};
                                    }};
                                    filter = "vitae";
                                    productCategories = new String[]{{
                                        add("similique"),
                                        add("tempora"),
                                        add("aspernatur"),
                                        add("voluptas"),
                                    }};
                                    productSet = "voluptas";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("minima"),
                                        add("nobis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 237807;
                                    model = "minus";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.LANDMARK_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 503934;
                                    model = "in";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.LOGO_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 304468;
                                    model = "officiis";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.WEB_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "ullam";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "adipisci";
                                    imageUri = "cum";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(5553.61),
                                        add(9425.84),
                                        add(2015.17),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("corrupti"),
                                    add("pariatur"),
                                    add("totam"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 9402.1;
                                        longitude = 3487.83;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 7507.65;
                                        longitude = 246.19;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 1488.29;
                                                y = 9679.66;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 1318.52;
                                                y = 9944.01;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 7079.18;
                                                y = 4518.22;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 70869;
                                                y = 611749;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 292794;
                                                y = 671907;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 152354;
                                                y = 447516;
                                            }}),
                                        }};
                                    }};
                                    filter = "commodi";
                                    productCategories = new String[]{{
                                        add("explicabo"),
                                        add("voluptas"),
                                        add("unde"),
                                    }};
                                    productSet = "architecto";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("sapiente"),
                                        add("debitis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 967795;
                                    model = "perferendis";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "maiores";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "incidunt";
                                    imageUri = "sed";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(2587.02),
                                        add(8967.62),
                                        add(2155.29),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("occaecati"),
                                    add("quos"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 9757.52;
                                        longitude = 2716.53;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 2730.09;
                                        longitude = 4554.44;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 4017.13;
                                                y = 254.97;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 2484.13;
                                                y = 8880.44;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 5058.66;
                                                y = 7086.09;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3103.81;
                                                y = 2777.73;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 894864;
                                                y = 524970;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 26522;
                                                y = 750595;
                                            }}),
                                        }};
                                    }};
                                    filter = "error";
                                    productCategories = new String[]{{
                                        add("minima"),
                                        add("recusandae"),
                                    }};
                                    productSet = "reiciendis";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("magni"),
                                        add("aperiam"),
                                        add("saepe"),
                                        add("numquam"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "beatae";
                key = "laudantium";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "cum";
                uploadProtocol = "laboriosam";
            }};            

            VisionProjectsLocationsImagesAnnotateResponse res = sdk.projects.visionProjectsLocationsImagesAnnotate(req, new VisionProjectsLocationsImagesAnnotateSecurity() {{
                option1 = new VisionProjectsLocationsImagesAnnotateSecurityOption1("dolorum", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudVisionV1p1beta1BatchAnnotateImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## visionProjectsLocationsImagesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAsyncBatchAnnotateRequest;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAsyncBatchAnnotateResponse;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionProjectsLocationsImagesAsyncBatchAnnotateRequest req = new VisionProjectsLocationsImagesAsyncBatchAnnotateRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest = new GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest() {{
                    outputConfig = new GoogleCloudVisionV1p1beta1OutputConfig() {{
                        batchSize = 710529;
                        gcsDestination = new GoogleCloudVisionV1p1beta1GcsDestination() {{
                            uri = "https://dirty-polyester.info";
                        }};;
                    }};;
                    parent = "officia";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateImageRequest[]{{
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 879235;
                                    model = "tempora";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 148268;
                                    model = "ut";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.PRODUCT_SEARCH;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 30235;
                                    model = "culpa";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.CROP_HINTS;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "magnam";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "consequatur";
                                    imageUri = "esse";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(245.27),
                                        add(5305.37),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("repudiandae"),
                                    add("corporis"),
                                    add("et"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 5027.1;
                                        longitude = 4059.42;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 1536.27;
                                        longitude = 243.13;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3426.11;
                                                y = 9061.72;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 6222.31;
                                                y = 85.11;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 968865;
                                                y = 209750;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 690894;
                                                y = 115703;
                                            }}),
                                        }};
                                    }};
                                    filter = "architecto";
                                    productCategories = new String[]{{
                                        add("labore"),
                                        add("quidem"),
                                        add("atque"),
                                    }};
                                    productSet = "laborum";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("tenetur"),
                                        add("laboriosam"),
                                        add("alias"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 647197;
                                    model = "voluptate";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "reiciendis";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "provident";
                                    imageUri = "repellendus";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(9147.91),
                                        add(168.71),
                                        add(6672.85),
                                        add(6964.83),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("facere"),
                                    add("fuga"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 5098.07;
                                        longitude = 6485.98;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 3339.65;
                                        longitude = 291;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9195.32;
                                                y = 972.43;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 5424.57;
                                                y = 4420.36;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9911.42;
                                                y = 5199.52;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 3831.03;
                                                y = 6939.57;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 90885;
                                                y = 461007;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 227759;
                                                y = 826825;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 410301;
                                                y = 539118;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 623295;
                                                y = 887265;
                                            }}),
                                        }};
                                    }};
                                    filter = "officiis";
                                    productCategories = new String[]{{
                                        add("natus"),
                                        add("minima"),
                                        add("aspernatur"),
                                        add("ex"),
                                    }};
                                    productSet = "maiores";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("at"),
                                        add("error"),
                                        add("blanditiis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 922348;
                                    model = "atque";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 120919;
                                    model = "recusandae";
                                    type = GoogleCloudVisionV1p1beta1FeatureTypeEnum.IMAGE_PROPERTIES;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p1beta1Image() {{
                                content = "repellendus";
                                source = new GoogleCloudVisionV1p1beta1ImageSource() {{
                                    gcsImageUri = "labore";
                                    imageUri = "reiciendis";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(9197.83),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("accusantium"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1064.29;
                                        longitude = 1747.72;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 3164.88;
                                        longitude = 3891.35;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9521.43;
                                                y = 5627.83;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 906355;
                                                y = 160467;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 580107;
                                                y = 886305;
                                            }}),
                                        }};
                                    }};
                                    filter = "perspiciatis";
                                    productCategories = new String[]{{
                                        add("adipisci"),
                                        add("eveniet"),
                                    }};
                                    productSet = "occaecati";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("fugit"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "error";
                key = "illo";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "eveniet";
                uploadProtocol = "non";
            }};            

            VisionProjectsLocationsImagesAsyncBatchAnnotateResponse res = sdk.projects.visionProjectsLocationsImagesAsyncBatchAnnotate(req, new VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity() {{
                option1 = new VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1("vero", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
