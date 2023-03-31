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

import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentRequest;
import org.openapis.openapi.models.operations.TranslateProjectsLocationsBatchTranslateDocumentResponse;
import org.openapis.openapi.models.shared.BatchTranslateDocumentRequest;
import org.openapis.openapi.models.shared.BatchDocumentOutputConfig;
import org.openapis.openapi.models.shared.GcsDestination;
import org.openapis.openapi.models.shared.BatchDocumentInputConfig;
import org.openapis.openapi.models.shared.GcsSource;
import org.openapis.openapi.models.shared.TranslateTextGlossaryConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateProjectsLocationsBatchTranslateDocumentRequest req = new TranslateProjectsLocationsBatchTranslateDocumentRequest() {{
                security = new TranslateProjectsLocationsBatchTranslateDocumentSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TranslateProjectsLocationsBatchTranslateDocumentPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new TranslateProjectsLocationsBatchTranslateDocumentQueryParams() {{
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
                request = new BatchTranslateDocumentRequest() {{
                    customizedAttribution = "suscipit";
                    enableShadowRemovalNativePdf = false;
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("suscipit", new TranslateTextGlossaryConfig() {{
                            glossary = "molestiae";
                            ignoreCase = false;
                        }});
                        put("minus", new TranslateTextGlossaryConfig() {{
                            glossary = "placeat";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.BatchDocumentInputConfig[]{{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "iusto";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "excepturi";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "nisi";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "sapiente";
                        }};
                    }};
                    sourceLanguageCode = "quo";
                    targetLanguageCodes = new String[]{{
                        add("at"),
                    }};
                }};
            }};            

            TranslateProjectsLocationsBatchTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsBatchTranslateDocument(req);

            if (res.operation.isPresent()) {
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

* `translateProjectsLocationsBatchTranslateDocument` - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsBatchTranslateText` - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* `translateProjectsLocationsDatasetsCreate` - Creates a Dataset.
* `translateProjectsLocationsDatasetsExamplesList` - Lists sentence pairs in the dataset.
* `translateProjectsLocationsDatasetsExportData` - Exports dataset's data to the provided output location.
* `translateProjectsLocationsDatasetsImportData` - Import sentence pairs into translation Dataset.
* `translateProjectsLocationsDatasetsList` - Lists datasets.
* `translateProjectsLocationsDetectLanguage` - Detects the language of text within a request.
* `translateProjectsLocationsGetSupportedLanguages` - Returns a list of supported languages for translation.
* `translateProjectsLocationsGlossariesCreate` - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsGlossariesGlossaryEntriesCreate` - Creates a glossary entry.
* `translateProjectsLocationsGlossariesGlossaryEntriesList` - List the entries for the glossary.
* `translateProjectsLocationsGlossariesGlossaryEntriesPatch` - Updates a glossary entry.
* `translateProjectsLocationsGlossariesList` - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* `translateProjectsLocationsList` - Lists information about the supported locations for this service.
* `translateProjectsLocationsModelsCreate` - Creates a Model.
* `translateProjectsLocationsModelsList` - Lists models.
* `translateProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `translateProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `translateProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `translateProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `translateProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `translateProjectsLocationsTranslateDocument` - Translates documents in synchronous mode.
* `translateProjectsLocationsTranslateText` - Translates input text and returns translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
