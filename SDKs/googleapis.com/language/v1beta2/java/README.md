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

import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption2;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesQueryParams;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesResponse;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequest;
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeEntitiesRequest req = new LanguageDocumentsAnalyzeEntitiesRequest() {{
                security = new LanguageDocumentsAnalyzeEntitiesSecurity() {{
                    option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new LanguageDocumentsAnalyzeEntitiesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        boilerplateHandling = "SKIP_BOILERPLATE";
                        content = "suscipit";
                        gcsContentUri = "iure";
                        language = "magnam";
                        referenceWebUri = "debitis";
                        type = "TYPE_UNSPECIFIED";
                    }};
                    encodingType = "UTF32";
                }};
            }};            

            LanguageDocumentsAnalyzeEntitiesResponse res = sdk.documents.languageDocumentsAnalyzeEntities(req);

            if (res.analyzeEntitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### documents

* `languageDocumentsAnalyzeEntities` - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* `languageDocumentsAnalyzeEntitySentiment` - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* `languageDocumentsAnalyzeSentiment` - Analyzes the sentiment of the provided text.
* `languageDocumentsAnalyzeSyntax` - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* `languageDocumentsAnnotateText` - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* `languageDocumentsClassifyText` - Classifies a document into categories.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
