<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption2;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionFilesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionFilesAnnotateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1WebDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1LatLongRect;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VisionFilesAnnotateRequest req = new VisionFilesAnnotateRequest() {{
                dollarXgafv = "2";
                googleCloudVisionV1p1beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest() {{
                    parent = "provident";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 602763;
                                    model = "nulla";
                                    type = "SAFE_SEARCH_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 847252;
                                    model = "vel";
                                    type = "IMAGE_PROPERTIES";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 645894;
                                    model = "suscipit";
                                    type = "TEXT_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 297534;
                                    model = "debitis";
                                    type = "TYPE_UNSPECIFIED";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
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
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 9255.97;
                                        longitude = 8360.79;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 710.36;
                                        longitude = 3373.96;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 6481.72;
                                                y = 202.18;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 832620;
                                                y = 957156;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
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
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "nam";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
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
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 186332;
                                    model = "impedit";
                                    type = "CROP_HINTS";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 456150;
                                    model = "ipsum";
                                    type = "SAFE_SEARCH_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(187.89),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("natus"),
                                    add("sed"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 6120.96;
                                        longitude = 2223.21;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 6169.34;
                                        longitude = 3864.89;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9025.99;
                                                y = 6818.2;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 4499.5;
                                                y = 3595.08;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 6130.64;
                                                y = 4370.32;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 9023.49;
                                                y = 6976.31;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
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
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("nobis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "enim";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "https://gummy-expedition.name";
                                }};
                                mimeType = "accusantium";
                            }};
                            pages = new Integer[]{{
                                add(634274),
                                add(988374),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Feature[]{{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 102044;
                                    model = "mollitia";
                                    type = "LANDMARK_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 635059;
                                    model = "consequuntur";
                                    type = "OBJECT_LOCALIZATION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 653108;
                                    model = "occaecati";
                                    type = "LOGO_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 414369;
                                    model = "quam";
                                    type = "DOCUMENT_TEXT_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(6235.1),
                                    }};
                                }};
                                languageHints = new String[]{{
                                    add("quis"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 1103.75;
                                        longitude = 6747.52;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 6563.3;
                                        longitude = 3172.02;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 7783.46;
                                                y = 1965.82;
                                            }}),
                                        }};
                                        vertices = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p1beta1Vertex[]{{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 368725;
                                                y = 662527;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 820994;
                                                y = 13571;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 97101;
                                                y = 622846;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
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
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]{{
                                        add("omnis"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "voluptate";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
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
                }};
                accessToken = "dicta";
                alt = "proto";
                callback = "enim";
                fields = "accusamus";
                key = "commodi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "ipsum";
                uploadProtocol = "quidem";
            }}            

            VisionFilesAnnotateResponse res = sdk.files.visionFilesAnnotate(req, new VisionFilesAnnotateSecurity() {{
                option1 = new VisionFilesAnnotateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudVisionV1p1beta1BatchAnnotateFilesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->