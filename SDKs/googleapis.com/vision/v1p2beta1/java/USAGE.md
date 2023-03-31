<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption1;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurityOption2;
import org.openapis.openapi.models.operations.VisionFilesAnnotateSecurity;
import org.openapis.openapi.models.operations.VisionFilesAnnotateQueryParams;
import org.openapis.openapi.models.operations.VisionFilesAnnotateRequest;
import org.openapis.openapi.models.operations.VisionFilesAnnotateResponse;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ImageContext;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1WebDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1TextDetectionParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1ProductSearchParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Vertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1LatLongRect;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1CropHintsParams;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1FeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest() {{
                    parent = "deserunt";
                    requests = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest[]{{
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new org.openapis.openapi.models.shared.GoogleCloudVisionV1p2beta1Feature[]{{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 297534;
                                    model = "debitis";
                                    type = "TYPE_UNSPECIFIED";
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 963663;
                                    model = "tempora";
                                    type = "LABEL_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]{{
                                        add(7917.25),
                                        add(8121.69),
                                    }};
                                }};
                                languageHints = new String[]{{
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
                                    type = "CROP_HINTS";
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 456150;
                                    model = "ipsum";
                                    type = "SAFE_SEARCH_DETECTION";
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