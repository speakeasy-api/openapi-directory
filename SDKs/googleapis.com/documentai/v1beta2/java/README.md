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

            DocumentaiProjectsLocationsDocumentsBatchProcessRequest req = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[]{{
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "quibusdam";
                            }};
                            documentType = "unde";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "nulla";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "illum";
                                        valueTypes = new String[]{{
                                            add("error"),
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "suscipit";
                                        valueTypes = new String[]{{
                                            add("magnam"),
                                            add("debitis"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "ipsa";
                                        valueTypes = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "placeat";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "voluptatum";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "http://nice-gorilla.org";
                                }};
                                mimeType = "temporibus";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("quis"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://previous-algorithm.info";
                                }};
                                pagesPerShard = 832620;
                            }};
                            parent = "sapiente";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                    add("maiores"),
                                }};
                                modelVersion = "molestiae";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 4614.79;
                                                    y = 5204.78;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7805.29;
                                                    y = 6788.8;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1182.74;
                                                    y = 7206.33;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6399.21;
                                                    y = 5820.2;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 537373;
                                                    y = 944669;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 758616;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1059.07;
                                                    y = 4146.62;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 4736;
                                                    y = 2645.55;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1863.32;
                                                    y = 7742.34;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 456150;
                                                    y = 216550;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 568434;
                                                    y = 135218;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 18789;
                                                    y = 324141;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 617636;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6120.96;
                                                    y = 2223.21;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 386489;
                                                    y = 943749;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 902599;
                                                    y = 681820;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 449950;
                                                    y = 359508;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 613064;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9023.49;
                                                    y = 6976.31;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 992.8;
                                                    y = 602.25;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 666767;
                                                    y = 653140;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 670638;
                                                    y = 170909;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 210382;
                                                    y = 358152;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 128926;
                                                    y = 750686;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 315428;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "omnis";
                            }};
                            documentType = "nemo";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "minima";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "accusantium";
                                        valueTypes = new String[]{{
                                            add("culpa"),
                                            add("doloribus"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "sapiente";
                                        valueTypes = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "dolorem";
                                        valueTypes = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "occaecati";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "numquam";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "http://kind-ironclad.biz";
                                }};
                                mimeType = "error";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("quis"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://quixotic-physics.biz";
                                }};
                                pagesPerShard = 138183;
                            }};
                            parent = "quo";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("tenetur"),
                                }};
                                modelVersion = "ipsam";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 135.71;
                                                    y = 971.01;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6228.46;
                                                    y = 8379.45;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6736.6;
                                                    y = 960.98;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9719.45;
                                                    y = 9764.6;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 468651;
                                                    y = 509624;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 976762;
                                                    y = 55714;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 604846;
                                                    y = 451159;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 739264;
                                                    y = 19987;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 39187;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2828.07;
                                                    y = 9795.87;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1201.96;
                                                    y = 3594.44;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 480894;
                                                    y = 118727;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 688661;
                                                    y = 317983;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 880476;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9182.36;
                                                    y = 641.47;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2168.22;
                                                    y = 6924.72;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 566602;
                                                    y = 865103;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 265389;
                                                    y = 508969;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 523248;
                                                    y = 916723;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 93940;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "repudiandae";
                            }};
                            documentType = "sint";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "veritatis";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "incidunt";
                                        valueTypes = new String[]{{
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "quibusdam";
                                        valueTypes = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "distinctio";
                                        valueTypes = new String[]{{
                                            add("labore"),
                                            add("modi"),
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "cupiditate";
                                        valueTypes = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "ipsam";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "alias";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "http://rapid-moat.biz";
                                }};
                                mimeType = "facilis";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("labore"),
                                    add("delectus"),
                                    add("eum"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://simplistic-mop.info";
                                }};
                                pagesPerShard = 592042;
                            }};
                            parent = "necessitatibus";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("officia"),
                                    add("dolor"),
                                    add("debitis"),
                                }};
                                modelVersion = "a";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 4491.98;
                                                    y = 8464.09;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9785.71;
                                                    y = 6994.79;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 297437;
                                                    y = 767024;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 813798;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 3965.06;
                                                    y = 6754.39;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 8811.04;
                                                    y = 2497.96;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 313218;
                                                    y = 881736;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 965417;
                                                    y = 692532;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 588465;
                                                    y = 725255;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 659669;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 5332.06;
                                                    y = 9560.84;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2305.33;
                                                    y = 6439.9;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 3948.69;
                                                    y = 4238.55;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 606393;
                                                    y = 474867;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 19193;
                                                    y = 470132;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 301575;
                                                    y = 716075;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 660174;
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "natus";
                key = "nobis";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "aspernatur";
                uploadProtocol = "architecto";
            }};            

            DocumentaiProjectsLocationsDocumentsBatchProcessResponse res = sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req, new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity("magnam", "et") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [documentaiProjectsLocationsDocumentsBatchProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsDocumentsProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [documentaiProjectsOperationsGet](docs/projects/README.md#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
