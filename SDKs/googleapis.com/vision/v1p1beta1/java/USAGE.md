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
                    dollarXgafv = "2";
                    accessToken = "dolores";
                    alt = "media";
                    callback = "at";
                    fields = "nam";
                    key = "possimus";
                    oauthToken = "sit";
                    prettyPrint = false;
                    quotaUser = "ducimus";
                    uploadType = "enim";
                    uploadProtocol = "ratione";
                }};
                request = new GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest() {{
                    parent = "ut";
                    requests = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest[]() {{
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 6725778894754404376;
                                    model = "vero";
                                    type = "TEXT_DETECTION";
                                }}),
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 549281521027920069;
                                    model = "amet";
                                    type = "CROP_HINTS";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(26.100000),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("aliquid"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 14.200000;
                                        longitude = 95.199997;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 52.200001;
                                        longitude = 82.199997;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 94.199997;
                                                y = 46.099998;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 31.100000;
                                                y = 19.100000;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 73.099998;
                                                y = 71.099998;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 6747778643897124420;
                                                y = 7113136146408432061;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 5298725985902018887;
                                                y = 1682768394375305980;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 7808928602474870876;
                                                y = 5233932946482818087;
                                            }}),
                                        }};
                                    }};
                                    filter = "ipsa";
                                    productCategories = new String[]() {{
                                        add("et"),
                                    }};
                                    productSet = "molestiae";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("inventore"),
                                        add("sunt"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = true;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "omnis";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "eum";
                                }};
                                mimeType = "accusantium";
                            }};
                            pages = new Integer[]() {{
                                add(336746896231667751),
                                add(7344093703704195356),
                                add(1246319357605616727),
                            }};
                        }}),
                        add(new GoogleCloudVisionV1p1beta1AnnotateFileRequest() {{
                            features = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1Feature[]() {{
                                add(new GoogleCloudVisionV1p1beta1Feature() {{
                                    maxResults = 4193184341188883484;
                                    model = "enim";
                                    type = "LOGO_DETECTION";
                                }}),
                            }};
                            imageContext = new GoogleCloudVisionV1p1beta1ImageContext() {{
                                cropHintsParams = new GoogleCloudVisionV1p1beta1CropHintsParams() {{
                                    aspectRatios = new Float[]() {{
                                        add(33.099998),
                                    }};
                                }};
                                languageHints = new String[]() {{
                                    add("recusandae"),
                                }};
                                latLongRect = new GoogleCloudVisionV1p1beta1LatLongRect() {{
                                    maxLatLng = new LatLng() {{
                                        latitude = 39.099998;
                                        longitude = 4.200000;
                                    }};
                                    minLatLng = new LatLng() {{
                                        latitude = 55.099998;
                                        longitude = 59.099998;
                                    }};
                                }};
                                productSearchParams = new GoogleCloudVisionV1p1beta1ProductSearchParams() {{
                                    boundingPoly = new GoogleCloudVisionV1p1beta1BoundingPoly() {{
                                        normalizedVertices = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1NormalizedVertex[]() {{
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 68.099998;
                                                y = 22.100000;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 7.100000;
                                                y = 41.099998;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1NormalizedVertex() {{
                                                x = 7.200000;
                                                y = 86.099998;
                                            }}),
                                        }};
                                        vertices = new openapisdk.models.shared.GoogleCloudVisionV1p1beta1Vertex[]() {{
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 7510835614484263541;
                                                y = 7483403041636441084;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 152034630506638122;
                                                y = 7191194957632574214;
                                            }}),
                                            add(new GoogleCloudVisionV1p1beta1Vertex() {{
                                                x = 7531229499286041808;
                                                y = 4996558737170357005;
                                            }}),
                                        }};
                                    }};
                                    filter = "veritatis";
                                    productCategories = new String[]() {{
                                        add("suscipit"),
                                        add("in"),
                                    }};
                                    productSet = "enim";
                                }};
                                textDetectionParams = new GoogleCloudVisionV1p1beta1TextDetectionParams() {{
                                    advancedOcrOptions = new String[]() {{
                                        add("quidem"),
                                        add("qui"),
                                    }};
                                    enableTextDetectionConfidenceScore = false;
                                }};
                                webDetectionParams = new GoogleCloudVisionV1p1beta1WebDetectionParams() {{
                                    includeGeoResults = false;
                                }};
                            }};
                            inputConfig = new GoogleCloudVisionV1p1beta1InputConfig() {{
                                content = "dolor";
                                gcsSource = new GoogleCloudVisionV1p1beta1GcsSource() {{
                                    uri = "fuga";
                                }};
                                mimeType = "rem";
                            }};
                            pages = new Integer[]() {{
                                add(8350013725116190478),
                                add(2617811619911184952),
                                add(3755819217830359676),
                            }};
                        }}),
                    }};
                }};
            }};

            VisionFilesAnnotateResponse res = sdk.files.visionFilesAnnotate(req);

            if (res.googleCloudVisionV1p1beta1BatchAnnotateFilesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->