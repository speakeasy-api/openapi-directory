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

import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessPathParams;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessResponse;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2BoundingPoly;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OutputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsDestination;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2OcrParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2InputConfig;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2GcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2FormExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2EntityExtractionParams;
import org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2AutoMlParams;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsDocumentsBatchProcessRequest req = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest() {{
                security = new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DocumentaiProjectsLocationsDocumentsBatchProcessPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[]{{
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "iure";
                            }};
                            documentType = "magnam";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "debitis";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "delectus";
                                        valueTypes = new String[]{{
                                            add("suscipit"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "minus";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "placeat";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://lawful-missionary.info";
                                }};
                                mimeType = "recusandae";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://happy-spear.org";
                                }};
                                pagesPerShard = 778157;
                            }};
                            parent = "odit";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("at"),
                                    add("maiores"),
                                    add("molestiae"),
                                    add("quod"),
                                }};
                                modelVersion = "quod";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
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
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "sed";
                            }};
                            documentType = "iste";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "dolor";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "laboriosam";
                                        valueTypes = new String[]{{
                                            add("saepe"),
                                            add("fuga"),
                                            add("in"),
                                            add("corporis"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "iste";
                                        valueTypes = new String[]{{
                                            add("saepe"),
                                            add("quidem"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "architecto";
                                        valueTypes = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "est";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "mollitia";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://deadly-corsage.info";
                                }};
                                mimeType = "explicabo";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("enim"),
                                    add("omnis"),
                                    add("nemo"),
                                    add("minima"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "https://antique-housework.name";
                                }};
                                pagesPerShard = 988374;
                            }};
                            parent = "sapiente";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("mollitia"),
                                }};
                                modelVersion = "dolorem";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9953;
                                                    y = 6531.08;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 253291;
                                                    y = 414369;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 466311;
                                                    y = 474697;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 244425;
                                                    y = 623510;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 158969;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1103.75;
                                                    y = 6747.52;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6563.3;
                                                    y = 3172.02;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 778346;
                                                    y = 196582;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 949572;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6625.27;
                                                    y = 8209.94;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 135.71;
                                                    y = 971.01;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 837945;
                                                    y = 673660;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 96098;
                                                    y = 971945;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 976460;
                                                    y = 878194;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 468651;
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};
            }};            

            DocumentaiProjectsLocationsDocumentsBatchProcessResponse res = sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req);

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `documentaiProjectsLocationsDocumentsBatchProcess` - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* `documentaiProjectsLocationsDocumentsProcess` - Processes a single document.
* `documentaiProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
