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

            TranslateProjectsLocationsBatchTranslateDocumentRequest req = new TranslateProjectsLocationsBatchTranslateDocumentRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchTranslateDocumentRequest = new BatchTranslateDocumentRequest() {{
                    customizedAttribution = "distinctio";
                    enableShadowRemovalNativePdf = false;
                    formatConversions = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    glossaries = new java.util.HashMap<String, org.openapis.openapi.models.shared.TranslateTextGlossaryConfig>() {{
                        put("magnam", new TranslateTextGlossaryConfig() {{
                            glossary = "debitis";
                            ignoreCase = false;
                        }});
                        put("ipsa", new TranslateTextGlossaryConfig() {{
                            glossary = "delectus";
                            ignoreCase = false;
                        }});
                    }};
                    inputConfigs = new org.openapis.openapi.models.shared.BatchDocumentInputConfig[]{{
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "suscipit";
                            }};
                        }}),
                        add(new BatchDocumentInputConfig() {{
                            gcsSource = new GcsSource() {{
                                inputUri = "molestiae";
                            }};
                        }}),
                    }};
                    models = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    outputConfig = new BatchDocumentOutputConfig() {{
                        gcsDestination = new GcsDestination() {{
                            outputUriPrefix = "quis";
                        }};;
                    }};;
                    sourceLanguageCode = "veritatis";
                    targetLanguageCodes = new String[]{{
                        add("perferendis"),
                        add("ipsam"),
                        add("repellendus"),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            TranslateProjectsLocationsBatchTranslateDocumentResponse res = sdk.projects.translateProjectsLocationsBatchTranslateDocument(req, new TranslateProjectsLocationsBatchTranslateDocumentSecurity("esse", "totam") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [translateProjectsLocationsBatchTranslateDocument](docs/projects/README.md#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsBatchTranslateText](docs/projects/README.md#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [translateProjectsLocationsDetectLanguage](docs/projects/README.md#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [translateProjectsLocationsGetSupportedLanguages](docs/projects/README.md#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [translateProjectsLocationsGlossariesCreate](docs/projects/README.md#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsGlossariesList](docs/projects/README.md#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [translateProjectsLocationsList](docs/projects/README.md#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [translateProjectsLocationsOperationsCancel](docs/projects/README.md#translateprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [translateProjectsLocationsOperationsDelete](docs/projects/README.md#translateprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsGet](docs/projects/README.md#translateprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [translateProjectsLocationsOperationsList](docs/projects/README.md#translateprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [translateProjectsLocationsOperationsWait](docs/projects/README.md#translateprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [translateProjectsLocationsTranslateDocument](docs/projects/README.md#translateprojectslocationstranslatedocument) - Translates documents in synchronous mode.
* [translateProjectsLocationsTranslateText](docs/projects/README.md#translateprojectslocationstranslatetext) - Translates input text and returns translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
