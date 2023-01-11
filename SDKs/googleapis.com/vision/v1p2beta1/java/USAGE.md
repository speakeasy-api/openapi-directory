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
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest() {{
                    parent = "rerum";
                    requests = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest[]() {{
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 5617773211005988520;
                                    model = "et";
                                    type = "TYPE_UNSPECIFIED";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(50.099998),
                                        add(15.100000),
                                        add(66.099998),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("debitis"),
                                    add("vel"),
                                    add("odio"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 91.099998;
                                        longitude = 57.099998;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 45.099998;
                                        longitude = 78.199997;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 10.200000;
                                                y = 14.200000;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 44.099998;
                                                y = 78.199997;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 87.099998;
                                                y = 0.100000;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 388440063886460141;
                                                y = 7561811714888168464;
                                            }}),
                                        }};
                                    }};
                                    filter = "ipsum";
                                    productCategories = new String[]() {{
                                        add("modi"),
                                        add("sint"),
                                    }};
                                    productSet = "inventore";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("exercitationem"),
                                        add("aut"),
                                        add("reprehenderit"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "incidunt";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "dolor";
                                }};
                                mimeType = "beatae";
                            }};
                            pages = new Integer[]() {{
                                add(2671030200101705776),
                                add(3508963237347473586),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 4564823113789767141;
                                    model = "ex";
                                    type = "SAFE_SEARCH_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 3983722386484812742;
                                    model = "vel";
                                    type = "PRODUCT_SEARCH";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(84.199997),
                                        add(23.100000),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("unde"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 31.100000;
                                        longitude = 13.100000;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 26.100000;
                                        longitude = 90.099998;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 40.099998;
                                                y = 28.100000;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 29.100000;
                                                y = 90.199997;
                                            }}),
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 31.200001;
                                                y = 9.200000;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 7862762095958642309;
                                                y = 4391202566038595699;
                                            }}),
                                        }};
                                    }};
                                    filter = "omnis";
                                    productCategories = new String[]() {{
                                        add("consequatur"),
                                        add("dolor"),
                                    }};
                                    productSet = "commodi";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("reprehenderit"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = true;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "ut";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "laboriosam";
                                }};
                                mimeType = "sed";
                            }};
                            pages = new Integer[]() {{
                                add(1836598054518427835),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p2beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p2beta1Feature() {{
                                    maxResults = 7638413271565042464;
                                    model = "consequuntur";
                                    type = "LANDMARK_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p2beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p2beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(35.200001),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("perferendis"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p2beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 26.200001;
                                        longitude = 87.099998;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 42.099998;
                                        longitude = 15.200000;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p2beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p2beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1NormalizedVertex() {{
                                                x = 50.099998;
                                                y = 9.200000;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p2beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p2beta1Vertex() {{
                                                x = 2333048574390956331;
                                                y = 9205243623417456715;
                                            }}),
                                        }};
                                    }};
                                    filter = "quis";
                                    productCategories = new String[]() {{
                                        add("labore"),
                                    }};
                                    productSet = "et";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p2beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("ad"),
                                        add("expedita"),
                                    }};
                                    enableTextDetectionConfidenceScore = true;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p2beta1WebDetectionParams() {{
                                    includeGeoResults = true;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p2beta1InputConfig() {{
                                content = "modi";
                                gcsSource = new GoogleCloudVisionV1p2beta1GcsSource() {{
                                    uri = "nihil";
                                }};
                                mimeType = "tempora";
                            }};
                            pages = new Integer[]() {{
                                add(4745905187492708501),
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