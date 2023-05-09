# projects

### Available Operations

* [translateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDatasetsCreate](#translateprojectslocationsdatasetscreate) - Creates a Dataset.
* [translateProjectsLocationsDatasetsExamplesList](#translateprojectslocationsdatasetsexampleslist) - Lists sentence pairs in the dataset.
* [translateProjectsLocationsDatasetsExportData](#translateprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location.
* [translateProjectsLocationsDatasetsImportData](#translateprojectslocationsdatasetsimportdata) - Import sentence pairs into translation Dataset.
* [translateProjectsLocationsDatasetsList](#translateprojectslocationsdatasetslist) - Lists datasets.
* [translateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesGlossaryEntriesCreate](#translateprojectslocationsglossariesglossaryentriescreate) - Creates a glossary entry.
* [translateProjectsLocationsGlossariesGlossaryEntriesList](#translateprojectslocationsglossariesglossaryentrieslist) - List the entries for the glossary.
* [translateProjectsLocationsGlossariesGlossaryEntriesPatch](#translateprojectslocationsglossariesglossaryentriespatch) - Updates a glossary entry.
* [translateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [translateProjectsLocationsModelsCreate](#translateprojectslocationsmodelscreate) - Creates a Model.
* [translateProjectsLocationsModelsList](#translateprojectslocationsmodelslist) - Lists models.
* [translateProjectsLocationsOperationsCancel](#translateprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [translateProjectsLocationsOperationsDelete](#translateprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsGet](#translateprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [translateProjectsLocationsOperationsList](#translateprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsWait](#translateprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [translateProjectsLocationsTranslateDocument](#translateprojectslocationstranslatedocument) - Translates documents in synchronous mode.
* [translateProjectsLocationsTranslateText](#translateprojectslocationstranslatetext) - Translates input text and returns translated text.

## translateProjectsLocationsBatchTranslateDocument

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDocumentInputConfig;
import org.openapis.openapi.models.shared.BatchDocumentOutputConfig;
import org.openapis.openapi.models.shared.BatchTranslateDocumentRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsBatchTranslateDocumentRequest req = new TranslateProjectsLocationsBatchTranslateDocumentRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                batchTranslateDocumentRequest = new BatchTranslateDocumentRequest() {{
                    customizedAttribution = "dicta";
                    enableShadowRemovalNativePdf = false;
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                        put("hic", "optio");
                    }};
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("beatae", new TranslateTextGlossaryConfig() {{
                            glossary = "commodi";
                            ignoreCase = false;
                        }});
                        put("molestiae", new TranslateTextGlossaryConfig() {{
                            glossary = "modi";
                            ignoreCase = false;
                        }});
                        put("qui", new TranslateTextGlossaryConfig() {{
                            glossary = "impedit";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.BatchDocumentInputConfig[]{{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "esse";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "ipsum";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "excepturi";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("perferendis", "ad");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "natus";
                        }};;
                    }};;
                    sourceLanguageCode = "sed";
                    targetLanguageCodes = new String[]{{
                        add("dolor"),
                        add("natus"),
                        add("laboriosam"),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "in";
                key = "corporis";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
            }};            

            TranslateProjectsLocationsBatchTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsBatchTranslateDocument(req, new TranslateProjectsLocationsBatchTranslateDocumentSecurity("architecto", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## translateProjectsLocationsBatchTranslateText

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateTextRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateTextResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateTextSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchTranslateTextRequest;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.InputConfig;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsBatchTranslateTextRequest req = new TranslateProjectsLocationsBatchTranslateTextRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                batchTranslateTextRequest = new BatchTranslateTextRequest() {{
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("laborum", new TranslateTextGlossaryConfig() {{
                            glossary = "dolores";
                            ignoreCase = false;
                        }});
                        put("dolorem", new TranslateTextGlossaryConfig() {{
                            glossary = "corporis";
                            ignoreCase = false;
                        }});
                        put("explicabo", new TranslateTextGlossaryConfig() {{
                            glossary = "nobis";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.InputConfig[]{{
                        add(new InputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "omnis";
                            }};
                            mimeType = "nemo";
                        }}),
                        add(new InputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "minima";
                            }};
                            mimeType = "excepturi";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "culpa");
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("sapiente", "architecto");
                        put("mollitia", "dolorem");
                        put("culpa", "consequuntur");
                        put("repellat", "mollitia");
                    }};
                    outputConfig = new OutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "occaecati";
                        }};;
                    }};;
                    sourceLanguageCode = "numquam";
                    targetLanguageCodes = new String[]{{
                        add("quam"),
                        add("molestiae"),
                    }};
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            TranslateProjectsLocationsBatchTranslateTextResponse res = sdk.projects.translateProjectsLocationsBatchTranslateText(req, new TranslateProjectsLocationsBatchTranslateTextSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## translateProjectsLocationsDatasetsCreate

Creates a Dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatasetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDatasetsCreateRequest req = new TranslateProjectsLocationsDatasetsCreateRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                datasetInput = new DatasetInput() {{
                    displayName = "id";
                    name = "Richard Boyer";
                    sourceLanguageCode = "laborum";
                    targetLanguageCode = "quasi";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            TranslateProjectsLocationsDatasetsCreateResponse res = sdk.projects.translateProjectsLocationsDatasetsCreate(req, new TranslateProjectsLocationsDatasetsCreateSecurity() {{
                option1 = new TranslateProjectsLocationsDatasetsCreateSecurityOption1("cum", "perferendis") {{
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

## translateProjectsLocationsDatasetsExamplesList

Lists sentence pairs in the dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExamplesListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExamplesListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExamplesListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExamplesListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExamplesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDatasetsExamplesListRequest req = new TranslateProjectsLocationsDatasetsExamplesListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "corporis";
                filter = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                pageSize = 688661L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            TranslateProjectsLocationsDatasetsExamplesListResponse res = sdk.projects.translateProjectsLocationsDatasetsExamplesList(req, new TranslateProjectsLocationsDatasetsExamplesListSecurity() {{
                option1 = new TranslateProjectsLocationsDatasetsExamplesListSecurityOption1("quae", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listExamplesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExportDataRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExportDataResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExportDataSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExportDataSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsExportDataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatasetOutputConfig;
import org.openapis.openapi.models.shared.ExportDataRequest;
import org.openapis.openapi.models.shared.GcsOutputDestination;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDatasetsExportDataRequest req = new TranslateProjectsLocationsDatasetsExportDataRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                exportDataRequest = new ExportDataRequest() {{
                    outputConfig = new DatasetOutputConfig() {{
                        gcsDestination = new GcsOutputDestination() {{
                            outputUriPrefix = "excepturi";
                        }};;
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "sint";
                uploadProtocol = "veritatis";
            }};            

            TranslateProjectsLocationsDatasetsExportDataResponse res = sdk.projects.translateProjectsLocationsDatasetsExportData(req, new TranslateProjectsLocationsDatasetsExportDataSecurity() {{
                option1 = new TranslateProjectsLocationsDatasetsExportDataSecurityOption1("itaque", "incidunt") {{
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

## translateProjectsLocationsDatasetsImportData

Import sentence pairs into translation Dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsImportDataRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsImportDataResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsImportDataSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsImportDataSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsImportDataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatasetInputConfig;
import org.openapis.openapi.models.shared.GcsInputSource;
import org.openapis.openapi.models.shared.ImportDataRequest;
import org.openapis.openapi.models.shared.InputFile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDatasetsImportDataRequest req = new TranslateProjectsLocationsDatasetsImportDataRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                importDataRequest = new ImportDataRequest() {{
                    inputConfig = new DatasetInputConfig() {{
                        inputFiles = new org.openapis.openapi.models.shared.InputFile[]{{
                            add(new InputFile() {{
                                gcsSource = new GcsInputSource() {{
                                    inputUri = "quibusdam";
                                }};
                                usage = "explicabo";
                            }}),
                            add(new InputFile() {{
                                gcsSource = new GcsInputSource() {{
                                    inputUri = "deserunt";
                                }};
                                usage = "distinctio";
                            }}),
                            add(new InputFile() {{
                                gcsSource = new GcsInputSource() {{
                                    inputUri = "quibusdam";
                                }};
                                usage = "labore";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }};            

            TranslateProjectsLocationsDatasetsImportDataResponse res = sdk.projects.translateProjectsLocationsDatasetsImportData(req, new TranslateProjectsLocationsDatasetsImportDataSecurity() {{
                option1 = new TranslateProjectsLocationsDatasetsImportDataSecurityOption1("alias", "fugit") {{
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

## translateProjectsLocationsDatasetsList

Lists datasets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDatasetsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDatasetsListRequest req = new TranslateProjectsLocationsDatasetsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            TranslateProjectsLocationsDatasetsListResponse res = sdk.projects.translateProjectsLocationsDatasetsList(req, new TranslateProjectsLocationsDatasetsListSecurity() {{
                option1 = new TranslateProjectsLocationsDatasetsListSecurityOption1("necessitatibus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsDetectLanguage

Detects the language of text within a request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDetectLanguageRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDetectLanguageResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDetectLanguageSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDetectLanguageSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsDetectLanguageSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DetectLanguageRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsDetectLanguageRequest req = new TranslateProjectsLocationsDetectLanguageRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                detectLanguageRequest = new DetectLanguageRequest() {{
                    content = "debitis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorum", "in");
                        put("in", "illum");
                        put("maiores", "rerum");
                        put("dicta", "magnam");
                    }};
                    mimeType = "cumque";
                    model = "facere";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "accusamus";
                key = "non";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "delectus";
            }};            

            TranslateProjectsLocationsDetectLanguageResponse res = sdk.projects.translateProjectsLocationsDetectLanguage(req, new TranslateProjectsLocationsDetectLanguageSecurity() {{
                option1 = new TranslateProjectsLocationsDetectLanguageSecurityOption1("quidem", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.detectLanguageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsGetSupportedLanguages

Returns a list of supported languages for translation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGetSupportedLanguagesRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGetSupportedLanguagesResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGetSupportedLanguagesSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGetSupportedLanguagesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGetSupportedLanguagesRequest req = new TranslateProjectsLocationsGetSupportedLanguagesRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                displayLanguageCode = "amet";
                fields = "deserunt";
                key = "nisi";
                model = "vel";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            TranslateProjectsLocationsGetSupportedLanguagesResponse res = sdk.projects.translateProjectsLocationsGetSupportedLanguages(req, new TranslateProjectsLocationsGetSupportedLanguagesSecurity() {{
                option1 = new TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1("nihil", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.supportedLanguages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsGlossariesCreate

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesCreateRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesCreateResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.GlossaryInput;
import org.openapis.openapi.models.shared.GlossaryInputConfig;
import org.openapis.openapi.models.shared.LanguageCodePair;
import org.openapis.openapi.models.shared.LanguageCodesSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGlossariesCreateRequest req = new TranslateProjectsLocationsGlossariesCreateRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                glossaryInput = new GlossaryInput() {{
                    displayName = "labore";
                    inputConfig = new GlossaryInputConfig() {{
                        gcsSource = new GcsSource() {{
                            inputUri = "labore";
                        }};;
                    }};;
                    languageCodesSet = new LanguageCodesSet() {{
                        languageCodes = new String[]{{
                            add("natus"),
                            add("nobis"),
                        }};
                    }};;
                    languagePair = new LanguageCodePair() {{
                        sourceLanguageCode = "eum";
                        targetLanguageCode = "vero";
                    }};;
                    name = "Ms. Julie Gusikowski";
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            TranslateProjectsLocationsGlossariesCreateResponse res = sdk.projects.translateProjectsLocationsGlossariesCreate(req, new TranslateProjectsLocationsGlossariesCreateSecurity("dolor", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## translateProjectsLocationsGlossariesGlossaryEntriesCreate

Creates a glossary entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlossaryEntry;
import org.openapis.openapi.models.shared.GlossaryTerm;
import org.openapis.openapi.models.shared.GlossaryTermsPair;
import org.openapis.openapi.models.shared.GlossaryTermsSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest req = new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                glossaryEntry = new GlossaryEntry() {{
                    description = "quasi";
                    name = "Melba Toy";
                    termsPair = new GlossaryTermsPair() {{
                        sourceTerm = new GlossaryTerm() {{
                            languageCode = "deleniti";
                            text = "facilis";
                        }};;
                        targetTerm = new GlossaryTerm() {{
                            languageCode = "in";
                            text = "architecto";
                        }};;
                    }};;
                    termsSet = new GlossaryTermsSet() {{
                        terms = new org.openapis.openapi.models.shared.GlossaryTerm[]{{
                            add(new GlossaryTerm() {{
                                languageCode = "repudiandae";
                                text = "ullam";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse res = sdk.projects.translateProjectsLocationsGlossariesGlossaryEntriesCreate(req, new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity() {{
                option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1("praesentium", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.glossaryEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsGlossariesGlossaryEntriesList

List the entries for the glossary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest req = new TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                pageSize = 139972L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse res = sdk.projects.translateProjectsLocationsGlossariesGlossaryEntriesList(req, new TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity() {{
                option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1("quidem", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGlossaryEntriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsGlossariesGlossaryEntriesPatch

Updates a glossary entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlossaryEntry;
import org.openapis.openapi.models.shared.GlossaryTerm;
import org.openapis.openapi.models.shared.GlossaryTermsPair;
import org.openapis.openapi.models.shared.GlossaryTermsSet;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest req = new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                glossaryEntry = new GlossaryEntry() {{
                    description = "nam";
                    name = "Meredith Hickle PhD";
                    termsPair = new GlossaryTermsPair() {{
                        sourceTerm = new GlossaryTerm() {{
                            languageCode = "amet";
                            text = "aut";
                        }};;
                        targetTerm = new GlossaryTerm() {{
                            languageCode = "cumque";
                            text = "corporis";
                        }};;
                    }};;
                    termsSet = new GlossaryTermsSet() {{
                        terms = new org.openapis.openapi.models.shared.GlossaryTerm[]{{
                            add(new GlossaryTerm() {{
                                languageCode = "libero";
                                text = "nobis";
                            }}),
                            add(new GlossaryTerm() {{
                                languageCode = "dolores";
                                text = "quis";
                            }}),
                            add(new GlossaryTerm() {{
                                languageCode = "totam";
                                text = "dignissimos";
                            }}),
                            add(new GlossaryTerm() {{
                                languageCode = "eaque";
                                text = "quis";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                key = "minus";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "dolor";
                updateMask = "vero";
                uploadType = "nostrum";
                uploadProtocol = "hic";
            }};            

            TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse res = sdk.projects.translateProjectsLocationsGlossariesGlossaryEntriesPatch(req, new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity() {{
                option1 = new TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1("recusandae", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.glossaryEntry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsGlossariesList

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsGlossariesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsGlossariesListRequest req = new TranslateProjectsLocationsGlossariesListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatem";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "blanditiis";
                filter = "error";
                key = "eaque";
                oauthToken = "occaecati";
                pageSize = 699098L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            TranslateProjectsLocationsGlossariesListResponse res = sdk.projects.translateProjectsLocationsGlossariesList(req, new TranslateProjectsLocationsGlossariesListSecurity() {{
                option1 = new TranslateProjectsLocationsGlossariesListSecurityOption1("iste", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGlossariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsListRequest req = new TranslateProjectsLocationsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "delectus";
                filter = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                pageSize = 212390L;
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "qui";
                uploadProtocol = "ipsum";
            }};            

            TranslateProjectsLocationsListResponse res = sdk.projects.translateProjectsLocationsList(req, new TranslateProjectsLocationsListSecurity() {{
                option1 = new TranslateProjectsLocationsListSecurityOption1("hic", "excepturi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsModelsCreate

Creates a Model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsCreateRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsCreateResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsCreateSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsCreateSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsModelsCreateRequest req = new TranslateProjectsLocationsModelsCreateRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                modelInput = new ModelInput() {{
                    dataset = "dignissimos";
                    displayName = "reiciendis";
                    name = "Mr. Lee Funk III";
                }};;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            TranslateProjectsLocationsModelsCreateResponse res = sdk.projects.translateProjectsLocationsModelsCreate(req, new TranslateProjectsLocationsModelsCreateSecurity() {{
                option1 = new TranslateProjectsLocationsModelsCreateSecurityOption1("sit", "fugiat") {{
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

## translateProjectsLocationsModelsList

Lists models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsModelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsModelsListRequest req = new TranslateProjectsLocationsModelsListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "dolorum";
                filter = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                pageSize = 714697L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "ipsum";
                uploadProtocol = "voluptate";
            }};            

            TranslateProjectsLocationsModelsListResponse res = sdk.projects.translateProjectsLocationsModelsList(req, new TranslateProjectsLocationsModelsListSecurity() {{
                option1 = new TranslateProjectsLocationsModelsListSecurityOption1("id", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsOperationsCancelRequest req = new TranslateProjectsLocationsOperationsCancelRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("amet", "optio");
                }};
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "suscipit";
                key = "deserunt";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "repellendus";
                uploadProtocol = "totam";
            }};            

            TranslateProjectsLocationsOperationsCancelResponse res = sdk.projects.translateProjectsLocationsOperationsCancel(req, new TranslateProjectsLocationsOperationsCancelSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsCancelSecurityOption1("similique", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsOperationsDeleteRequest req = new TranslateProjectsLocationsOperationsDeleteRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "officiis";
                key = "qui";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "esse";
                uploadProtocol = "harum";
            }};            

            TranslateProjectsLocationsOperationsDeleteResponse res = sdk.projects.translateProjectsLocationsOperationsDelete(req, new TranslateProjectsLocationsOperationsDeleteSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsDeleteSecurityOption1("iusto", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsOperationsGetRequest req = new TranslateProjectsLocationsOperationsGetRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "numquam";
                key = "enim";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "totam";
                uploadProtocol = "nihil";
            }};            

            TranslateProjectsLocationsOperationsGetResponse res = sdk.projects.translateProjectsLocationsOperationsGet(req, new TranslateProjectsLocationsOperationsGetSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsGetSecurityOption1("sit", "expedita") {{
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

## translateProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsOperationsListRequest req = new TranslateProjectsLocationsOperationsListRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "deserunt";
                filter = "quam";
                key = "ipsum";
                oauthToken = "incidunt";
                pageSize = 186458L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "pariatur";
                uploadProtocol = "soluta";
            }};            

            TranslateProjectsLocationsOperationsListResponse res = sdk.projects.translateProjectsLocationsOperationsList(req, new TranslateProjectsLocationsOperationsListSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsListSecurityOption1("dicta", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsWaitRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsWaitResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsWaitSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsWaitSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsOperationsWaitSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WaitOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsOperationsWaitRequest req = new TranslateProjectsLocationsOperationsWaitRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                waitOperationRequest = new WaitOperationRequest() {{
                    timeout = "aspernatur";
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "aliquid";
                key = "quam";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "qui";
                uploadProtocol = "neque";
            }};            

            TranslateProjectsLocationsOperationsWaitResponse res = sdk.projects.translateProjectsLocationsOperationsWait(req, new TranslateProjectsLocationsOperationsWaitSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsWaitSecurityOption1("fugit", "magni") {{
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

## translateProjectsLocationsTranslateDocument

Translates documents in synchronous mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateDocumentRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateDocumentResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateDocumentSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateDocumentSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateDocumentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DocumentInputConfig;
import org.openapis.openapi.models.shared.DocumentOutputConfig;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.TranslateDocumentRequest;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsTranslateDocumentRequest req = new TranslateProjectsLocationsTranslateDocumentRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                translateDocumentRequest = new TranslateDocumentRequest() {{
                    customizedAttribution = "ullam";
                    documentInputConfig = new DocumentInputConfig() {{
                        content = "nam";
                        gcsSource = new GcsSource() {{
                            inputUri = "hic";
                        }};;
                        mimeType = "voluptatem";
                    }};;
                    documentOutputConfig = new DocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "cumque";
                        }};;
                        mimeType = "soluta";
                    }};;
                    enableRotationCorrection = false;
                    enableShadowRemovalNativePdf = false;
                    glossaryConfig = new TranslateTextGlossaryConfig() {{
                        glossary = "nobis";
                        ignoreCase = false;
                    }};;
                    isTranslateNativePdfOnly = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("saepe", "ipsum");
                    }};
                    model = "veritatis";
                    sourceLanguageCode = "nobis";
                    targetLanguageCode = "quos";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                key = "dolorem";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "adipisci";
                uploadProtocol = "dolorum";
            }};            

            TranslateProjectsLocationsTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsTranslateDocument(req, new TranslateProjectsLocationsTranslateDocumentSecurity() {{
                option1 = new TranslateProjectsLocationsTranslateDocumentSecurityOption1("architecto", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.translateDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateProjectsLocationsTranslateText

Translates input text and returns translated text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateTextRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateTextResponse;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateTextSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateTextSecurityOption1;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsTranslateTextSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.TranslateTextRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsTranslateTextRequest req = new TranslateProjectsLocationsTranslateTextRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                translateTextRequest = new TranslateTextRequest() {{
                    contents = new String[]{{
                        add("consequatur"),
                        add("est"),
                        add("repellendus"),
                        add("porro"),
                    }};
                    glossaryConfig = new TranslateTextGlossaryConfig() {{
                        glossary = "doloribus";
                        ignoreCase = false;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("facilis", "cupiditate");
                        put("qui", "quae");
                    }};
                    mimeType = "laudantium";
                    model = "odio";
                    sourceLanguageCode = "occaecati";
                    targetLanguageCode = "voluptatibus";
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quis";
                key = "ipsum";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "consectetur";
                uploadProtocol = "vero";
            }};            

            TranslateProjectsLocationsTranslateTextResponse res = sdk.projects.translateProjectsLocationsTranslateText(req, new TranslateProjectsLocationsTranslateTextSecurity() {{
                option1 = new TranslateProjectsLocationsTranslateTextSecurityOption1("tenetur", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.translateTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
