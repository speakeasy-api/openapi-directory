# documents

### Available Operations

* [languageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

## languageDocumentsAnalyzeEntities

Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitiesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequest;
import org.openapis.openapi.models.shared.AnalyzeEntitiesRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeEntitiesRequest req = new LanguageDocumentsAnalyzeEntitiesRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                analyzeEntitiesRequest = new AnalyzeEntitiesRequest() {{
                    document = new Document() {{
                        content = "suscipit";
                        gcsContentUri = "molestiae";
                        language = "minus";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeEntitiesRequestEncodingTypeEnum.UTF16;
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            LanguageDocumentsAnalyzeEntitiesResponse res = sdk.documents.languageDocumentsAnalyzeEntities(req, new LanguageDocumentsAnalyzeEntitiesSecurity() {{
                option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.analyzeEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageDocumentsAnalyzeSentiment

Analyzes the sentiment of the provided text.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSentimentRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSentimentResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSentimentSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSentimentSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSentimentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeSentimentRequest;
import org.openapis.openapi.models.shared.AnalyzeSentimentRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeSentimentRequest req = new LanguageDocumentsAnalyzeSentimentRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeSentimentRequest = new AnalyzeSentimentRequest() {{
                    document = new Document() {{
                        content = "sapiente";
                        gcsContentUri = "quo";
                        language = "odit";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeSentimentRequestEncodingTypeEnum.UTF32;
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            LanguageDocumentsAnalyzeSentimentResponse res = sdk.documents.languageDocumentsAnalyzeSentiment(req, new LanguageDocumentsAnalyzeSentimentSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSentimentSecurityOption1("nam", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.analyzeSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageDocumentsAnalyzeSyntax

Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSyntaxRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSyntaxResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSyntaxSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSyntaxSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeSyntaxSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeSyntaxRequest;
import org.openapis.openapi.models.shared.AnalyzeSyntaxRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeSyntaxRequest req = new LanguageDocumentsAnalyzeSyntaxRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeSyntaxRequest = new AnalyzeSyntaxRequest() {{
                    document = new Document() {{
                        content = "fugit";
                        gcsContentUri = "deleniti";
                        language = "hic";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeSyntaxRequestEncodingTypeEnum.UTF16;
                }};;
                accessToken = "beatae";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "modi";
                key = "qui";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            LanguageDocumentsAnalyzeSyntaxResponse res = sdk.documents.languageDocumentsAnalyzeSyntax(req, new LanguageDocumentsAnalyzeSyntaxSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSyntaxSecurityOption1("excepturi", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.analyzeSyntaxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## languageDocumentsAnnotateText

A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnnotateTextRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnnotateTextResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnnotateTextSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnnotateTextSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnnotateTextSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnnotateTextRequest;
import org.openapis.openapi.models.shared.AnnotateTextRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.Features;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnnotateTextRequest req = new LanguageDocumentsAnnotateTextRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                annotateTextRequest = new AnnotateTextRequest() {{
                    document = new Document() {{
                        content = "ad";
                        gcsContentUri = "natus";
                        language = "sed";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnnotateTextRequestEncodingTypeEnum.NONE;
                    features = new Features() {{
                        extractDocumentSentiment = false;
                        extractEntities = false;
                        extractSyntax = false;
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            LanguageDocumentsAnnotateTextResponse res = sdk.documents.languageDocumentsAnnotateText(req, new LanguageDocumentsAnnotateTextSecurity() {{
                option1 = new LanguageDocumentsAnnotateTextSecurityOption1("saepe", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.annotateTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
