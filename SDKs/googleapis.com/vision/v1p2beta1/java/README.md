# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                    parent = "provident";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 602763;
                                    model = "nulla";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 847252;
                                    model = "vel";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.IMAGE_PROPERTIES;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 645894;
                                    model = "suscipit";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TEXT_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 297534;
                                    model = "debitis";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(2726.56),
                                        add(3834.41),
                                        add(4776.65),
                                        add(7917.25),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 9255.97;
                                        longitude = 8360.79;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 710.36;
                                        longitude = 3373.96;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 6481.72;
                                                y = 202.18;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 832620;
                                                y = 957156;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 778157;
                                                y = 140350;
                                            }}),
                                        }};
                                    }};
                                    filter = "at";
                                    productCategories = new String[]{{
                                        add("maiores"),
                                        add("molestiae"),
                                        add("quod"),
                                        add("quod"),
                                    }};
                                    productSet = "esse";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "nam";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "https://oily-cephalopod.name";
                                }};
                                mimeType = "hic";
                            }};
                            pages = new Integer[]{{
                                add(521848),
                                add(105907),
                                add(414662),
                                add(473600),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 186332;
                                    model = "impedit";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.CROP_HINTS;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 456150;
                                    model = "ipsum";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.SAFE_SEARCH_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(187.89),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("natus"),
                                    add("sed"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 6120.96;
                                        longitude = 2223.21;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 6169.34;
                                        longitude = 3864.89;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 9025.99;
                                                y = 6818.2;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 4499.5;
                                                y = 3595.08;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 6130.64;
                                                y = 4370.32;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 9023.49;
                                                y = 6976.31;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 60225;
                                                y = 969810;
                                            }}),
                                        }};
                                    }};
                                    filter = "est";
                                    productCategories = new String[]{{
                                        add("laborum"),
                                        add("dolores"),
                                        add("dolorem"),
                                    }};
                                    productSet = "corporis";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("nobis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "enim";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "https://gummy-expedition.name";
                                }};
                                mimeType = "accusantium";
                            }};
                            pages = new Integer[]{{
                                add(634274),
                                add(988374),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 102044;
                                    model = "mollitia";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.LANDMARK_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 635059;
                                    model = "consequuntur";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.OBJECT_LOCALIZATION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 653108;
                                    model = "occaecati";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.LOGO_DETECTION;
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 414369;
                                    model = "quam";
                                    type = GoogleCloudVisionV1p2beta1FeatureTypeEnum.DOCUMENT_TEXT_DETECTION;
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(6235.1),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("quis"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1103.75;
                                        longitude = 6747.52;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 6563.3;
                                        longitude = 3172.02;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 7783.46;
                                                y = 1965.82;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 368725;
                                                y = 662527;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 820994;
                                                y = 13571;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 97101;
                                                y = 622846;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 837945;
                                                y = 673660;
                                            }}),
                                        }};
                                    }};
                                    filter = "quasi";
                                    productCategories = new String[]{{
                                        add("voluptatibus"),
                                        add("vero"),
                                        add("nihil"),
                                        add("praesentium"),
                                    }};
                                    productSet = "voluptatibus";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("omnis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "voluptate";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "https://agile-arch-rival.info";
                                }};
                                mimeType = "ut";
                            }};
                            pages = new Integer[]{{
                                add(120196),
                                add(359444),
                                add(296140),
                                add(480894),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                key = "commodi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "ipsum";
                uploadProtocol = "quidem";
            }};            

            VisionFilesAnnotateResponse res = sdk.files.visionFilesAnnotate(req, new VisionFilesAnnotateSecurity() {{
                option1 = new VisionFilesAnnotateSecurityOption1("molestias", "excepturi") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [files](docs/files/README.md)

* [visionFilesAnnotate](docs/files/README.md#visionfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionFilesAsyncBatchAnnotate](docs/files/README.md#visionfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### [images](docs/images/README.md)

* [visionImagesAnnotate](docs/images/README.md#visionimagesannotate) - Run image detection and annotation for a batch of images.
* [visionImagesAsyncBatchAnnotate](docs/images/README.md#visionimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### [projects](docs/projects/README.md)

* [visionProjectsLocationsFilesAnnotate](docs/projects/README.md#visionprojectslocationsfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionProjectsLocationsFilesAsyncBatchAnnotate](docs/projects/README.md#visionprojectslocationsfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* [visionProjectsLocationsImagesAnnotate](docs/projects/README.md#visionprojectslocationsimagesannotate) - Run image detection and annotation for a batch of images.
* [visionProjectsLocationsImagesAsyncBatchAnnotate](docs/projects/README.md#visionprojectslocationsimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
