# documents

### Available Operations

* [languageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeEntitySentiment](#languagedocumentsanalyzeentitysentiment) - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* [languageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
* [languageDocumentsClassifyText](#languagedocumentsclassifytext) - Classifies a document into categories.

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

## languageDocumentsAnalyzeEntitySentiment

Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitySentimentRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitySentimentResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitySentimentSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitySentimentSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsAnalyzeEntitySentimentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeEntitySentimentRequest;
import org.openapis.openapi.models.shared.AnalyzeEntitySentimentRequestEncodingTypeEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeEntitySentimentRequest req = new LanguageDocumentsAnalyzeEntitySentimentRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeEntitySentimentRequest = new AnalyzeEntitySentimentRequest() {{
                    document = new Document() {{
                        content = "sapiente";
                        gcsContentUri = "quo";
                        language = "odit";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeEntitySentimentRequestEncodingTypeEnum.UTF32;
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

            LanguageDocumentsAnalyzeEntitySentimentResponse res = sdk.documents.languageDocumentsAnalyzeEntitySentiment(req, new LanguageDocumentsAnalyzeEntitySentimentSecurity() {{
                option1 = new LanguageDocumentsAnalyzeEntitySentimentSecurityOption1("nam", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.analyzeEntitySentimentResponse != null) {
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
                        content = "fugit";
                        gcsContentUri = "deleniti";
                        language = "hic";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeSentimentRequestEncodingTypeEnum.UTF16;
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

            LanguageDocumentsAnalyzeSentimentResponse res = sdk.documents.languageDocumentsAnalyzeSentiment(req, new LanguageDocumentsAnalyzeSentimentSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSentimentSecurityOption1("excepturi", "aspernatur") {{
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
                dollarXgafv = XgafvEnum.ONE;
                analyzeSyntaxRequest = new AnalyzeSyntaxRequest() {{
                    document = new Document() {{
                        content = "ad";
                        gcsContentUri = "natus";
                        language = "sed";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnalyzeSyntaxRequestEncodingTypeEnum.NONE;
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

            LanguageDocumentsAnalyzeSyntaxResponse res = sdk.documents.languageDocumentsAnalyzeSyntax(req, new LanguageDocumentsAnalyzeSyntaxSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSyntaxSecurityOption1("saepe", "quidem") {{
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
import org.openapis.openapi.models.shared.ClassificationModelOptions;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.Features;
import org.openapis.openapi.models.shared.V2Model;
import org.openapis.openapi.models.shared.V2ModelContentCategoriesVersionEnum;
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
                        content = "ipsa";
                        gcsContentUri = "reiciendis";
                        language = "est";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnnotateTextRequestEncodingTypeEnum.UTF16;
                    features = new Features() {{
                        classificationModelOptions = new ClassificationModelOptions() {{
                            v1Model = new java.util.HashMap<String, Object>() {{
                                put("dolorem", "corporis");
                            }};
                            v2Model = new V2Model() {{
                                contentCategoriesVersion = V2ModelContentCategoriesVersionEnum.CONTENT_CATEGORIES_VERSION_UNSPECIFIED;
                            }};;
                        }};;
                        classifyText = false;
                        extractDocumentSentiment = false;
                        extractEntities = false;
                        extractEntitySentiment = false;
                        extractSyntax = false;
                    }};;
                }};;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "nemo";
                key = "minima";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            LanguageDocumentsAnnotateTextResponse res = sdk.documents.languageDocumentsAnnotateText(req, new LanguageDocumentsAnnotateTextSecurity() {{
                option1 = new LanguageDocumentsAnnotateTextSecurityOption1("doloribus", "sapiente") {{
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

## languageDocumentsClassifyText

Classifies a document into categories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LanguageDocumentsClassifyTextRequest;
import org.openapis.openapi.models.operations.LanguageDocumentsClassifyTextResponse;
import org.openapis.openapi.models.operations.LanguageDocumentsClassifyTextSecurity;
import org.openapis.openapi.models.operations.LanguageDocumentsClassifyTextSecurityOption1;
import org.openapis.openapi.models.operations.LanguageDocumentsClassifyTextSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClassificationModelOptions;
import org.openapis.openapi.models.shared.ClassifyTextRequest;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.V2Model;
import org.openapis.openapi.models.shared.V2ModelContentCategoriesVersionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsClassifyTextRequest req = new LanguageDocumentsClassifyTextRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                classifyTextRequest = new ClassifyTextRequest() {{
                    classificationModelOptions = new ClassificationModelOptions() {{
                        v1Model = new java.util.HashMap<String, Object>() {{
                            put("dolorem", "culpa");
                            put("consequuntur", "repellat");
                            put("mollitia", "occaecati");
                        }};
                        v2Model = new V2Model() {{
                            contentCategoriesVersion = V2ModelContentCategoriesVersionEnum.CONTENT_CATEGORIES_VERSION_UNSPECIFIED;
                        }};;
                    }};;
                    document = new Document() {{
                        content = "commodi";
                        gcsContentUri = "quam";
                        language = "molestiae";
                        type = DocumentTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            LanguageDocumentsClassifyTextResponse res = sdk.documents.languageDocumentsClassifyText(req, new LanguageDocumentsClassifyTextSecurity() {{
                option1 = new LanguageDocumentsClassifyTextSecurityOption1("sequi", "tenetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.classifyTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
