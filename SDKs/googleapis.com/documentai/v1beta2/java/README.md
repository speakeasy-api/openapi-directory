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
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
import org.openapis.openapi.models.operations.DocumentaiProjectsLocationsDocumentsBatchProcessResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DocumentaiProjectsLocationsDocumentsBatchProcessRequest req = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest() {{
                dollarXgafv = "2";
                googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest[]{{
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "distinctio";
                            }};
                            documentType = "quibusdam";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "unde";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "corrupti";
                                        valueTypes = new String[]{{
                                            add("vel"),
                                            add("error"),
                                            add("deserunt"),
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "iure";
                                        valueTypes = new String[]{{
                                            add("debitis"),
                                            add("ipsa"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "delectus";
                                        valueTypes = new String[]{{
                                            add("suscipit"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "minus";
                                        valueTypes = new String[]{{
                                            add("voluptatum"),
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "recusandae";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "temporibus";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "http://gloomy-blanket.name";
                                }};
                                mimeType = "perferendis";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("repellendus"),
                                    add("sapiente"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "https://constant-sundae.org";
                                }};
                                pagesPerShard = 978619;
                            }};
                            parent = "molestiae";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("quod"),
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                }};
                                modelVersion = "dolorum";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6399.21;
                                                    y = 5820.2;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1433.53;
                                                    y = 5373.73;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 9446.69;
                                                    y = 7586.16;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 105907;
                                                    y = 414662;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 473600;
                                                    y = 264555;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 186332;
                                                    y = 774234;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 736918;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "esse";
                            }};
                            documentType = "ipsum";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "excepturi";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "perferendis";
                                        valueTypes = new String[]{{
                                            add("natus"),
                                            add("sed"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "iste";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "dolor";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://hoarse-upper.org";
                                }};
                                mimeType = "fuga";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("corporis"),
                                    add("iste"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://unsteady-progress.com";
                                }};
                                pagesPerShard = 60225;
                            }};
                            parent = "reiciendis";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                modelVersion = "dolorem";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 7506.86;
                                                    y = 3154.28;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 363711;
                                                    y = 325047;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 570197;
                                                    y = 38425;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 438601;
                                                    y = 634274;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 988374;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1020.44;
                                                    y = 6527.9;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2088.76;
                                                    y = 6350.59;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 1613.09;
                                                    y = 9953;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6531.08;
                                                    y = 5818.5;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 414369;
                                                    y = 466311;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 474697;
                                                    y = 244425;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 623510;
                                    }}),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest() {{
                            automlParams = new GoogleCloudDocumentaiV1beta2AutoMlParams() {{
                                model = "quia";
                            }};
                            documentType = "quis";
                            entityExtractionParams = new GoogleCloudDocumentaiV1beta2EntityExtractionParams() {{
                                enabled = false;
                                modelVersion = "vitae";
                            }};
                            formExtractionParams = new GoogleCloudDocumentaiV1beta2FormExtractionParams() {{
                                enabled = false;
                                keyValuePairHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2KeyValuePairHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "animi";
                                        valueTypes = new String[]{{
                                            add("odit"),
                                            add("quo"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "sequi";
                                        valueTypes = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2KeyValuePairHint() {{
                                        key = "quasi";
                                        valueTypes = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                    }}),
                                }};
                                modelVersion = "reiciendis";
                            }};
                            inputConfig = new GoogleCloudDocumentaiV1beta2InputConfig() {{
                                contents = "voluptatibus";
                                gcsSource = new GoogleCloudDocumentaiV1beta2GcsSource() {{
                                    uri = "https://klutzy-level.org";
                                }};
                                mimeType = "ipsa";
                            }};
                            ocrParams = new GoogleCloudDocumentaiV1beta2OcrParams() {{
                                languageHints = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                            }};
                            outputConfig = new GoogleCloudDocumentaiV1beta2OutputConfig() {{
                                gcsDestination = new GoogleCloudDocumentaiV1beta2GcsDestination() {{
                                    uri = "http://insubstantial-dramaturge.org";
                                }};
                                pagesPerShard = 120196;
                            }};
                            parent = "corporis";
                            tableExtractionParams = new GoogleCloudDocumentaiV1beta2TableExtractionParams() {{
                                enabled = false;
                                headerHints = new String[]{{
                                    add("iusto"),
                                    add("dicta"),
                                }};
                                modelVersion = "harum";
                                tableBoundHints = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2TableBoundHint[]{{
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 4142.63;
                                                    y = 9182.36;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 641.47;
                                                    y = 2168.22;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 6924.72;
                                                    y = 5651.89;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 5666.02;
                                                    y = 8651.03;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 508969;
                                                    y = 523248;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 916723;
                                                    y = 93940;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 921158;
                                    }}),
                                    add(new GoogleCloudDocumentaiV1beta2TableBoundHint() {{
                                        boundingBox = new GoogleCloudDocumentaiV1beta2BoundingPoly() {{
                                            normalizedVertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2NormalizedVertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 831.12;
                                                    y = 9292.97;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 2777.18;
                                                    y = 3185.69;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2NormalizedVertex() {{
                                                    x = 93.56;
                                                    y = 6674.11;
                                                }}),
                                            }};
                                            vertices = new org.openapis.openapi.models.shared.GoogleCloudDocumentaiV1beta2Vertex[]{{
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 131797;
                                                    y = 647174;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 716327;
                                                    y = 841386;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 289406;
                                                    y = 264730;
                                                }}),
                                                add(new GoogleCloudDocumentaiV1beta2Vertex() {{
                                                    x = 183191;
                                                    y = 397821;
                                                }}),
                                            }};
                                        }};
                                        pageNumber = 586513;
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                }};
                accessToken = "quos";
                alt = "json";
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                parent = "fugit";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "excepturi";
                uploadProtocol = "tempora";
            }}            

            DocumentaiProjectsLocationsDocumentsBatchProcessResponse res = sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req, new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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
