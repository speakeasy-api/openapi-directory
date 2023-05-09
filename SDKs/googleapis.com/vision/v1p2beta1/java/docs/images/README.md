# images

### Available Operations

* [visionImagesAnnotate](#visionimagesannotate) - Run image detection and annotation for a batch of images.
* [visionImagesAsyncBatchAnnotate](#visionimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## visionImagesAnnotate

Run image detection and annotation for a batch of images.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionImagesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionImagesAnnotateResponse;
import org.openapis.openapi.models.operations.VisionImagesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionImagesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionImagesAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateImageRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageSource;
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

            VisionImagesAnnotateRequest req = new VisionImagesAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVisionV1p2beta1BatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest() {{
                    parent = "atque";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateImageRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 67249;
                                    model = "soluta";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.IMAGE_PROPERTIES;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 478596;
                                    model = "voluptate";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.IMAGE_PROPERTIES;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 536579;
                                    model = "omnis";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.PRODUCT_SEARCH;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 714697;
                                    model = "asperiores";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.DOCUMENT_TEXT_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p2beta1Image() {{
                                content = "ipsum";
                                source = new GoogleCloudVisionV1p2beta1ImageSource() {{
                                    gcsImageUri = "voluptate";
                                    imageUri = "id";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(2633.22),
                                        add(1372.2),
                                        add(206.51),
                                        add(2292.19),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("accusamus"),
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 6457.85;
                                        longitude = 5883.17;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 3246.83;
                                        longitude = 8310.49;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 6289.82;
                                                y = 0.55;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 8726.51;
                                                y = 3118.6;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 2735.42;
                                                y = 4254.51;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 885338;
                                                y = 185636;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 679880;
                                                y = 952792;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 456130;
                                                y = 687488;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 483409;
                                                y = 215507;
                                            }}),
                                        }};
                                    }};
                                    filter = "quisquam";
                                    productCategories = new String[]{{
                                        add("amet"),
                                        add("tempore"),
                                        add("accusamus"),
                                        add("numquam"),
                                    }};
                                    productSet = "enim";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("sapiente"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "expedita";
                key = "neque";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "libero";
                uploadProtocol = "voluptas";
            }};            

            VisionImagesAnnotateResponse res = sdk.images.visionImagesAnnotate(req, new VisionImagesAnnotateSecurity() {{
                option1 = new VisionImagesAnnotateSecurityOption1("deserunt", "quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudVisionV1p2beta1BatchAnnotateImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## visionImagesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VisionImagesAsyncBatchAnnotateRequest;
import org.openapis.openapi.models.operations.VisionImagesAsyncBatchAnnotateResponse;
import org.openapis.openapi.models.operations.VisionImagesAsyncBatchAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionImagesAsyncBatchAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionImagesAsyncBatchAnnotateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateImageRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Image;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageSource;
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

            VisionImagesAsyncBatchAnnotateRequest req = new VisionImagesAsyncBatchAnnotateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest() {{
                    outputConfig = new GoogleCloudVisionV1p2beta1OutputConfig() {{
                        batchSize = 277628;
                        gcsDestination = new GoogleCloudVisionV1p2beta1GcsDestination() {{
                            uri = "http://offensive-simplification.org";
                        }};;
                    }};;
                    parent = "soluta";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateImageRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AnnotateImageRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 517379;
                                    model = "incidunt";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.FACE_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 174909;
                                    model = "distinctio";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.CROP_HINTS;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 396060;
                                    model = "quam";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                            }};
                            image = new GoogleCloudVisionV1p2beta1Image() {{
                                content = "temporibus";
                                source = new GoogleCloudVisionV1p2beta1ImageSource() {{
                                    gcsImageUri = "qui";
                                    imageUri = "neque";
                                }};
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(1649.59),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("sunt"),
                                    add("ullam"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 7220.81;
                                        longitude = 9404.32;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 304.52;
                                        longitude = 7653.26;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 7486.64;
                                                y = 925.96;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 9037.2;
                                                y = 2174.5;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 834.22;
                                                y = 7492.55;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 731694;
                                                y = 584476;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 45614;
                                                y = 961937;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 209157;
                                                y = 292147;
                                            }}),
                                        }};
                                    }};
                                    filter = "labore";
                                    productCategories = new String[]{{
                                        add("dolorum"),
                                    }};
                                    productSet = "architecto";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("aut"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "est";
                key = "repellendus";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "ut";
                uploadProtocol = "facilis";
            }};            

            VisionImagesAsyncBatchAnnotateResponse res = sdk.images.visionImagesAsyncBatchAnnotate(req, new VisionImagesAsyncBatchAnnotateSecurity() {{
                option1 = new VisionImagesAsyncBatchAnnotateSecurityOption1("cupiditate", "qui") {{
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
