# projects

### Available Operations

* [documentaiProjectsLocationsDocumentsBatchProcess](#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsDocumentsProcess](#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [documentaiProjectsOperationsGet](#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## documentaiProjectsLocationsDocumentsBatchProcess

LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessResponse;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2AutoMlParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2FormExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OcrParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsDocumentsBatchProcessRequest req = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[]{{
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "quos";
                            }};
                            documentType = "sint";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "accusantium";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "reiciendis";
                                        valueTypes = new String[]{{
                                            add("ad"),
                                            add("eum"),
                                            add("dolor"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "necessitatibus";
                                        valueTypes = new String[]{{
                                            add("nemo"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "quasi";
                                        valueTypes = new String[]{{
                                            add("doloribus"),
                                            add("debitis"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "eius";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "maxime";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://rotating-identification.com";
                                }};
                                mimeType = "architecto";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("ullam"),
                                    add("expedita"),
                                    add("nihil"),
                                    add("repellat"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "https://crazy-thrush.org";
                                }};
                                pagesPerShard = 37559;
                            }};
                            parent = "consequuntur";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("natus"),
                                    add("magni"),
                                    add("sunt"),
                                }};
                                modelVersion = "quo";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 8073.19;
                                                    y = 4113.97;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 5691.01;
                                                    y = 1399.72;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 4071.83;
                                                    y = 332.22;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 691.67;
                                                    y = 9825.75;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 373291;
                                                    y = 453543;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 420075;
                                                    y = 722056;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 50588;
                                                    y = 866383;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 365496;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 166.27;
                                                    y = 8558.04;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2307.42;
                                                    y = 117.14;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7649.12;
                                                    y = 3599.78;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9441.24;
                                                    y = 7299.91;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 171629;
                                                    y = 339404;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 521037;
                                                    y = 489549;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 54338;
                                                    y = 338985;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 199996;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 185.21;
                                                    y = 1709.86;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 463451;
                                                    y = 223924;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 874573;
                                                    y = 345352;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 944120;
                                                    y = 928082;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 608253;
                                                    y = 704415;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 596656;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7836.45;
                                                    y = 1646.94;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 621479;
                                                    y = 50370;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 577229;
                                                    y = 699098;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 237893;
                                                    y = 992397;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 934214;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "modi";
                            }};
                            documentType = "iste";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "dolorum";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "pariatur";
                                        valueTypes = new String[]{{
                                            add("nobis"),
                                            add("libero"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "quaerat";
                                        valueTypes = new String[]{{
                                            add("aliquid"),
                                            add("dolorem"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "dolor";
                                        valueTypes = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "hic";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "excepturi";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://jam-packed-kingdom.org";
                                }};
                                mimeType = "amet";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("numquam"),
                                    add("veritatis"),
                                    add("ipsa"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://infatuated-keyboarding.biz";
                                }};
                                pagesPerShard = 881005;
                            }};
                            parent = "quidem";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("voluptas"),
                                    add("natus"),
                                    add("eos"),
                                    add("atque"),
                                }};
                                modelVersion = "sit";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7438.35;
                                                    y = 6793.93;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 453697;
                                                    y = 677082;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 536579;
                                                    y = 607045;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 896672;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9903.39;
                                                    y = 4694.97;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2168.97;
                                                    y = 4560.15;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6630.78;
                                                    y = 9064.18;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 137220;
                                                    y = 20651;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 229219;
                                                    y = 758379;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 881586;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9044.25;
                                                    y = 3834.64;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6457.85;
                                                    y = 5883.17;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 831049;
                                                    y = 519711;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 628982;
                                                    y = 55;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 872651;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2735.42;
                                                    y = 4254.51;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7980.47;
                                                    y = 8853.38;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 679880;
                                                    y = 952792;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 456130;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "harum";
                            }};
                            documentType = "iusto";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "ipsum";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "tenetur";
                                        valueTypes = new String[]{{
                                            add("tempore"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "accusamus";
                                        valueTypes = new String[]{{
                                            add("enim"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "sapiente";
                                        valueTypes = new String[]{{
                                            add("nihil"),
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "neque";
                                        valueTypes = new String[]{{
                                            add("vel"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "libero";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "voluptas";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://juvenile-course.biz";
                                }};
                                mimeType = "qui";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("maxime"),
                                    add("pariatur"),
                                    add("soluta"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://quixotic-liquor.biz";
                                }};
                                pagesPerShard = 132068;
                            }};
                            parent = "dolores";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("facilis"),
                                    add("aliquid"),
                                    add("quam"),
                                }};
                                modelVersion = "molestias";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2048.65;
                                                    y = 1448.47;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 488056;
                                                    y = 124833;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 355613;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9404.32;
                                                    y = 304.52;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7653.26;
                                                    y = 7469.94;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7486.64;
                                                    y = 925.96;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 217450;
                                                    y = 83422;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 749255;
                                                    y = 552193;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 731694;
                                                    y = 584476;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 45614;
                                                    y = 961937;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 209157;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2869.15;
                                                    y = 2408.29;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6772.63;
                                                    y = 1002.94;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 16429;
                                                    y = 555649;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 929530;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6699.17;
                                                    y = 8330.38;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 984330;
                                                    y = 281730;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 703495;
                                                    y = 586410;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 181631;
                                                    y = 63955;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 512393;
                                                    y = 485628;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 580447;
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "omnis";
                key = "quis";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "voluptate";
                uploadProtocol = "consectetur";
            }};            

            DocumentaiProjectsLocationsDocumentsBatchProcessResponse res = sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req, new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity("vero", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentaiProjectsLocationsDocumentsProcess

Processes a single document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsProcessRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsProcessResponse;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsProcessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2AutoMlParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2FormExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OcrParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsDocumentsProcessRequest req = new DocumentaiProjectsLocationsDocumentsProcessRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDocumentaiV1beta2ProcessDocumentRequest = new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                    automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                        model = "distinctio";
                    }};;
                    documentType = "quod";
                    entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                        enabled = false;
                        modelVersion = "odio";
                    }};;
                    formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                        enabled = false;
                        keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                            add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                key = "facilis";
                                valueTypes = new String[]{{
                                    add("ducimus"),
                                    add("dolore"),
                                    add("quibusdam"),
                                    add("illum"),
                                }};
                            }}),
                            add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                key = "sequi";
                                valueTypes = new String[]{{
                                    add("impedit"),
                                    add("aut"),
                                    add("voluptatibus"),
                                }};
                            }}),
                            add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                key = "exercitationem";
                                valueTypes = new String[]{{
                                    add("fugit"),
                                    add("porro"),
                                    add("maiores"),
                                    add("doloribus"),
                                }};
                            }}),
                        }};
                        modelVersion = "iusto";
                    }};;
                    inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                        contents = "eligendi";
                        gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                            uri = "http://academic-path.biz";
                        }};;
                        mimeType = "ipsam";
                    }};;
                    ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                        languageHints = new String[]{{
                            add("aspernatur"),
                            add("vel"),
                        }};
                    }};;
                    outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                        gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                            uri = "https://fond-compliment.info";
                        }};;
                        pagesPerShard = 511319;
                    }};;
                    parent = "dicta";
                    tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                        enabled = false;
                        headerHints = new String[]{{
                            add("maiores"),
                        }};
                        modelVersion = "quasi";
                        tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                            add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                    normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 5692.11;
                                            y = 9729.2;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 3436.05;
                                            y = 9608.35;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 7888.73;
                                            y = 9065.56;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 4113.72;
                                            y = 7740.48;
                                        }}),
                                    }};
                                    vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                        add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                            x = 333145;
                                            y = 399499;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                            x = 81101;
                                            y = 301831;
                                        }}),
                                    }};
                                }};
                                pageNumber = 407241;
                            }}),
                            add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                    normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 2322.34;
                                            y = 9262.13;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 1324.87;
                                            y = 3253.1;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 534.27;
                                            y = 9528.71;
                                        }}),
                                        add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                            x = 7255.95;
                                            y = 139.48;
                                        }}),
                                    }};
                                    vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                        add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                            x = 533466;
                                            y = 770581;
                                        }}),
                                    }};
                                }};
                                pageNumber = 304582;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "non";
                key = "et";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "placeat";
                uploadProtocol = "velit";
            }};            

            DocumentaiProjectsLocationsDocumentsProcessResponse res = sdk.projects.documentaiProjectsLocationsDocumentsProcess(req, new DocumentaiProjectsLocationsDocumentsProcessSecurity("eum", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDocumentaiV1beta2Document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## documentaiProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DocumentaiProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.DocumentaiProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsOperationsGetRequest req = new DocumentaiProjectsOperationsGetRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "libero";
                key = "quasi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            DocumentaiProjectsOperationsGetResponse res = sdk.projects.documentaiProjectsOperationsGet(req, new DocumentaiProjectsOperationsGetSecurity("ipsa", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
