# projects

### Available Operations

* [translateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
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

            TranslateProjectsLocationsDetectLanguageRequest req = new TranslateProjectsLocationsDetectLanguageRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                detectLanguageRequest = new DetectLanguageRequest() {{
                    content = "id";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "quasi");
                        put("error", "temporibus");
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                    }};
                    mimeType = "vero";
                    model = "nihil";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "omnis";
                key = "voluptate";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            TranslateProjectsLocationsDetectLanguageResponse res = sdk.projects.translateProjectsLocationsDetectLanguage(req, new TranslateProjectsLocationsDetectLanguageSecurity() {{
                option1 = new TranslateProjectsLocationsDetectLanguageSecurityOption1("ut", "maiores") {{
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

            TranslateProjectsLocationsGetSupportedLanguagesRequest req = new TranslateProjectsLocationsGetSupportedLanguagesRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                displayLanguageCode = "harum";
                fields = "enim";
                key = "accusamus";
                model = "commodi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "ipsum";
                uploadProtocol = "quidem";
            }};            

            TranslateProjectsLocationsGetSupportedLanguagesResponse res = sdk.projects.translateProjectsLocationsGetSupportedLanguages(req, new TranslateProjectsLocationsGetSupportedLanguagesSecurity() {{
                option1 = new TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1("molestias", "excepturi") {{
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

            TranslateProjectsLocationsGlossariesCreateRequest req = new TranslateProjectsLocationsGlossariesCreateRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                glossaryInput = new GlossaryInput() {{
                    inputConfig = new GlossaryInputConfig() {{
                        gcsSource = new GcsSource() {{
                            inputUri = "praesentium";
                        }};;
                    }};;
                    languageCodesSet = new LanguageCodesSet() {{
                        languageCodes = new String[]{{
                            add("voluptates"),
                            add("quasi"),
                            add("repudiandae"),
                        }};
                    }};;
                    languagePair = new LanguageCodePair() {{
                        sourceLanguageCode = "sint";
                        targetLanguageCode = "veritatis";
                    }};;
                    name = "Miss Randall Hamill";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            TranslateProjectsLocationsGlossariesCreateResponse res = sdk.projects.translateProjectsLocationsGlossariesCreate(req, new TranslateProjectsLocationsGlossariesCreateSecurity("quos", "perferendis") {{
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

            TranslateProjectsLocationsGlossariesListRequest req = new TranslateProjectsLocationsGlossariesListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                filter = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                pageSize = 735194L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "eum";
                uploadProtocol = "non";
            }};            

            TranslateProjectsLocationsGlossariesListResponse res = sdk.projects.translateProjectsLocationsGlossariesList(req, new TranslateProjectsLocationsGlossariesListSecurity() {{
                option1 = new TranslateProjectsLocationsGlossariesListSecurityOption1("eligendi", "sint") {{
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

            TranslateProjectsLocationsListRequest req = new TranslateProjectsLocationsListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolor";
                filter = "debitis";
                key = "a";
                oauthToken = "dolorum";
                pageSize = 447125L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            TranslateProjectsLocationsListResponse res = sdk.projects.translateProjectsLocationsList(req, new TranslateProjectsLocationsListSecurity() {{
                option1 = new TranslateProjectsLocationsListSecurityOption1("dicta", "magnam") {{
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

            TranslateProjectsLocationsOperationsCancelRequest req = new TranslateProjectsLocationsOperationsCancelRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "laborum");
                    put("accusamus", "non");
                }};
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "delectus";
                key = "quidem";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "id";
                uploadProtocol = "blanditiis";
            }};            

            TranslateProjectsLocationsOperationsCancelResponse res = sdk.projects.translateProjectsLocationsOperationsCancel(req, new TranslateProjectsLocationsOperationsCancelSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsCancelSecurityOption1("deleniti", "sapiente") {{
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

            TranslateProjectsLocationsOperationsDeleteRequest req = new TranslateProjectsLocationsOperationsDeleteRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            TranslateProjectsLocationsOperationsDeleteResponse res = sdk.projects.translateProjectsLocationsOperationsDelete(req, new TranslateProjectsLocationsOperationsDeleteSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsDeleteSecurityOption1("id", "labore") {{
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

            TranslateProjectsLocationsOperationsGetRequest req = new TranslateProjectsLocationsOperationsGetRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "vero";
                key = "aspernatur";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            TranslateProjectsLocationsOperationsGetResponse res = sdk.projects.translateProjectsLocationsOperationsGet(req, new TranslateProjectsLocationsOperationsGetSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsGetSecurityOption1("ullam", "provident") {{
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

            TranslateProjectsLocationsOperationsListRequest req = new TranslateProjectsLocationsOperationsListRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "mollitia";
                filter = "ad";
                key = "eum";
                oauthToken = "dolor";
                pageSize = 896547L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            TranslateProjectsLocationsOperationsListResponse res = sdk.projects.translateProjectsLocationsOperationsList(req, new TranslateProjectsLocationsOperationsListSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsListSecurityOption1("doloribus", "debitis") {{
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

            TranslateProjectsLocationsOperationsWaitRequest req = new TranslateProjectsLocationsOperationsWaitRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                waitOperationRequest = new WaitOperationRequest() {{
                    timeout = "deleniti";
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            TranslateProjectsLocationsOperationsWaitResponse res = sdk.projects.translateProjectsLocationsOperationsWait(req, new TranslateProjectsLocationsOperationsWaitSecurity() {{
                option1 = new TranslateProjectsLocationsOperationsWaitSecurityOption1("quibusdam", "sed") {{
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

            TranslateProjectsLocationsTranslateDocumentRequest req = new TranslateProjectsLocationsTranslateDocumentRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                translateDocumentRequest = new TranslateDocumentRequest() {{
                    customizedAttribution = "accusantium";
                    documentInputConfig = new DocumentInputConfig() {{
                        content = "consequuntur";
                        gcsSource = new GcsSource() {{
                            inputUri = "praesentium";
                        }};;
                        mimeType = "natus";
                    }};;
                    documentOutputConfig = new DocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "magni";
                        }};;
                        mimeType = "sunt";
                    }};;
                    enableRotationCorrection = false;
                    enableShadowRemovalNativePdf = false;
                    glossaryConfig = new TranslateTextGlossaryConfig() {{
                        glossary = "quo";
                        ignoreCase = false;
                    }};;
                    isTranslateNativePdfOnly = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "maxime");
                        put("ea", "excepturi");
                        put("odit", "ea");
                        put("accusantium", "ab");
                    }};
                    model = "maiores";
                    sourceLanguageCode = "quidem";
                    targetLanguageCode = "ipsam";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "eaque";
                key = "pariatur";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "perferendis";
                uploadProtocol = "fugiat";
            }};            

            TranslateProjectsLocationsTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsTranslateDocument(req, new TranslateProjectsLocationsTranslateDocumentSecurity() {{
                option1 = new TranslateProjectsLocationsTranslateDocumentSecurityOption1("amet", "aut") {{
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

            TranslateProjectsLocationsTranslateTextRequest req = new TranslateProjectsLocationsTranslateTextRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                translateTextRequest = new TranslateTextRequest() {{
                    contents = new String[]{{
                        add("libero"),
                        add("nobis"),
                        add("dolores"),
                        add("quis"),
                    }};
                    glossaryConfig = new TranslateTextGlossaryConfig() {{
                        glossary = "totam";
                        ignoreCase = false;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("eaque", "quis");
                        put("nesciunt", "eos");
                    }};
                    mimeType = "perferendis";
                    model = "dolores";
                    sourceLanguageCode = "minus";
                    targetLanguageCode = "quam";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "hic";
                key = "recusandae";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptatem";
            }};            

            TranslateProjectsLocationsTranslateTextResponse res = sdk.projects.translateProjectsLocationsTranslateText(req, new TranslateProjectsLocationsTranslateTextSecurity() {{
                option1 = new TranslateProjectsLocationsTranslateTextSecurityOption1("porro", "consequuntur") {{
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
