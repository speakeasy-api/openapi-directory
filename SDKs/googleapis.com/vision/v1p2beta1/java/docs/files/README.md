# files

### Available Operations

* [visionFilesAnnotate](#visionfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionFilesAsyncBatchAnnotate](#visionfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

## visionFilesAnnotate

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionFilesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionFilesAnnotateResponse;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionFilesAnnotateRequest req = new VisionFilesAnnotateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudVisionV1p2beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest() {{
                    parent = "modi";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 916723;
                                    model = "quasi";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.PRODUCT_SEARCH;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 575947;
                                    model = "veritatis";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 277718;
                                    model = "enim";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(8423.42),
                                        add(1317.97),
                                        add(6471.74),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("quibusdam"),
                                    add("labore"),
                                    add("modi"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1831.91;
                                        longitude = 3978.21;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 5865.13;
                                        longitude = 5528.22;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 1649.4;
                                                y = 8289.4;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 4695;
                                                y = 146441;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 677817;
                                                y = 569618;
                                            }}),
                                        }};
                                    }};
                                    filter = "tempora";
                                    productCategories = new String[]{{
                                        add("tempore"),
                                        add("labore"),
                                        add("delectus"),
                                    }};
                                    productSet = "eum";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("eligendi"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "sint";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "http://optimistic-tenth.name";
                                }};
                                mimeType = "officia";
                            }};
                            pages = new Integer[]{{
                                add(891555),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 680056;
                                    model = "in";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 846409;
                                    model = "maiores";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.CROP_HINTS;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 116202;
                                    model = "magnam";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.CROP_HINTS;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 813798;
                                    model = "ea";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(8811.04),
                                        add(2497.96),
                                        add(5812.73),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("accusamus"),
                                    add("delectus"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 6925.32;
                                        longitude = 5884.65;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 7252.55;
                                        longitude = 6596.69;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 5332.06;
                                                y = 9560.84;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 2305.33;
                                                y = 6439.9;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 3948.69;
                                                y = 4238.55;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 606393;
                                                y = 474867;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 19193;
                                                y = 470132;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 301575;
                                                y = 716075;
                                            }}),
                                        }};
                                    }};
                                    filter = "id";
                                    productCategories = new String[]{{
                                        add("labore"),
                                        add("suscipit"),
                                    }};
                                    productSet = "natus";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("eum"),
                                        add("vero"),
                                        add("aspernatur"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "architecto";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "http://brisk-mobile.info";
                                }};
                                mimeType = "provident";
                            }};
                            pages = new Integer[]{{
                                add(574325),
                                add(33625),
                                add(653201),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 652103;
                                    model = "ad";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 221262;
                                    model = "necessitatibus";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.FACE_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 367562;
                                    model = "quasi";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 984043;
                                    model = "debitis";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.LOGO_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(5370.23),
                                        add(7038.89),
                                        add(4479.26),
                                        add(1002.26),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("repudiandae"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 3523.12;
                                        longitude = 7142.42;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 4692.49;
                                        longitude = 9988.48;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 1494.48;
                                                y = 9046.48;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 8681.26;
                                                y = 375.59;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 1624.93;
                                                y = 5083.15;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 6155.6;
                                                y = 1668.47;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 779051;
                                                y = 848009;
                                            }}),
                                        }};
                                    }};
                                    filter = "pariatur";
                                    productCategories = new String[]{{
                                        add("ea"),
                                        add("excepturi"),
                                        add("odit"),
                                        add("ea"),
                                    }};
                                    productSet = "accusantium";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("maiores"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "quidem";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "http://jealous-hearing.net";
                                }};
                                mimeType = "eaque";
                            }};
                            pages = new Integer[]{{
                                add(365496),
                                add(975522),
                                add(16627),
                                add(855804),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "corporis";
                key = "hic";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "dolores";
                uploadProtocol = "quis";
            }};            

            VisionFilesAnnotateResponse res = sdk.files.visionFilesAnnotate(req, new VisionFilesAnnotateSecurity() {{
                option1 = new VisionFilesAnnotateSecurityOption1("totam", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudVisionV1p2beta1BatchAnnotateFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## visionFilesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionFilesAsyncBatchAnnotateRequest;
import org.openapis.openapi.models.operations.VisionFilesAsyncBatchAnnotateResponse;
import org.openapis.openapi.models.operations.VisionFilesAsyncBatchAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionFilesAsyncBatchAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionFilesAsyncBatchAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1LatLongRect;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1WebDetectionParams;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionFilesAsyncBatchAnnotateRequest req = new VisionFilesAsyncBatchAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest() {{
                    parent = "quis";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 18521;
                                    model = "dolores";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.WEB_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(2239.24),
                                        add(8745.73),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("hic"),
                                    add("recusandae"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 6082.53;
                                        longitude = 7044.15;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 5966.56;
                                        longitude = 318.38;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 1646.94;
                                                y = 5000.26;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 6214.79;
                                                y = 503.7;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 5772.29;
                                                y = 6990.98;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 2378.93;
                                                y = 9923.97;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 267262;
                                                y = 613966;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 679091;
                                                y = 535633;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 864282;
                                                y = 589910;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 750844;
                                                y = 730122;
                                            }}),
                                        }};
                                    }};
                                    filter = "delectus";
                                    productCategories = new String[]{{
                                        add("quos"),
                                        add("aliquid"),
                                    }};
                                    productSet = "dolorem";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("dolor"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "qui";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "http://wasteful-moai.net";
                                }};
                                mimeType = "voluptate";
                            }};
                            outputConfig = new GoogleCloudVisionV1p2beta1OutputConfig() {{
                                batchSize = 490459;
                                gcsDestination = new GoogleCloudVisionV1p2beta1GcsDestination() {{
                                    uri = "https://electric-porter.biz";
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "iure";
                key = "odio";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "quidem";
                uploadProtocol = "voluptatibus";
            }};            

            VisionFilesAsyncBatchAnnotateResponse res = sdk.files.visionFilesAsyncBatchAnnotate(req, new VisionFilesAsyncBatchAnnotateSecurity() {{
                option1 = new VisionFilesAsyncBatchAnnotateSecurityOption1("voluptas", "natus") {{
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
