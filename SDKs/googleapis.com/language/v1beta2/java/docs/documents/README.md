# documents

### Available Operations

* [languageDocumentsAnalyzeEntities](#languagedocumentsanalyzeentities) - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* [languageDocumentsAnalyzeEntitySentiment](#languagedocumentsanalyzeentitysentiment) - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* [languageDocumentsAnalyzeSentiment](#languagedocumentsanalyzesentiment) - Analyzes the sentiment of the provided text.
* [languageDocumentsAnalyzeSyntax](#languagedocumentsanalyzesyntax) - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* [languageDocumentsAnnotateText](#languagedocumentsannotatetext) - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
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
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.KEEP_BOILERPLATE;
                        content = "placeat";
                        gcsContentUri = "voluptatum";
                        language = "iusto";
                        referenceWebUri = "excepturi";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnalyzeEntitiesRequestEncodingTypeEnum.UTF32;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            LanguageDocumentsAnalyzeEntitiesResponse res = sdk.documents.languageDocumentsAnalyzeEntities(req, new LanguageDocumentsAnalyzeEntitiesSecurity() {{
                option1 = new LanguageDocumentsAnalyzeEntitiesSecurityOption1("quo", "odit") {{
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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
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
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.KEEP_BOILERPLATE;
                        content = "maiores";
                        gcsContentUri = "molestiae";
                        language = "quod";
                        referenceWebUri = "quod";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnalyzeEntitySentimentRequestEncodingTypeEnum.UTF16;
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            LanguageDocumentsAnalyzeEntitySentimentResponse res = sdk.documents.languageDocumentsAnalyzeEntitySentiment(req, new LanguageDocumentsAnalyzeEntitySentimentSecurity() {{
                option1 = new LanguageDocumentsAnalyzeEntitySentimentSecurityOption1("optio", "totam") {{
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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
import org.openapis.openapi.models.shared.DocumentTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LanguageDocumentsAnalyzeSentimentRequest req = new LanguageDocumentsAnalyzeSentimentRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                analyzeSentimentRequest = new AnalyzeSentimentRequest() {{
                    document = new Document() {{
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.SKIP_BOILERPLATE;
                        content = "molestiae";
                        gcsContentUri = "modi";
                        language = "qui";
                        referenceWebUri = "impedit";
                        type = DocumentTypeEnum.HTML;
                    }};;
                    encodingType = AnalyzeSentimentRequestEncodingTypeEnum.UTF8;
                }};;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            LanguageDocumentsAnalyzeSentimentResponse res = sdk.documents.languageDocumentsAnalyzeSentiment(req, new LanguageDocumentsAnalyzeSentimentSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSentimentSecurityOption1("natus", "laboriosam") {{
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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
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
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.KEEP_BOILERPLATE;
                        content = "fuga";
                        gcsContentUri = "in";
                        language = "corporis";
                        referenceWebUri = "iste";
                        type = DocumentTypeEnum.PLAIN_TEXT;
                    }};;
                    encodingType = AnalyzeSyntaxRequestEncodingTypeEnum.UTF32;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            LanguageDocumentsAnalyzeSyntaxResponse res = sdk.documents.languageDocumentsAnalyzeSyntax(req, new LanguageDocumentsAnalyzeSyntaxSecurity() {{
                option1 = new LanguageDocumentsAnalyzeSyntaxSecurityOption1("corporis", "explicabo") {{
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

A convenience method that provides all syntax, sentiment, entity, and classification features in one call.

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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
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
                dollarXgafv = XgafvEnum.TWO;
                annotateTextRequest = new AnnotateTextRequest() {{
                    document = new Document() {{
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.BOILERPLATE_HANDLING_UNSPECIFIED;
                        content = "omnis";
                        gcsContentUri = "nemo";
                        language = "minima";
                        referenceWebUri = "excepturi";
                        type = DocumentTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                    encodingType = AnnotateTextRequestEncodingTypeEnum.UTF8;
                    features = new Features() {{
                        classificationModelOptions = new ClassificationModelOptions() {{
                            v1Model = new java.util.HashMap<String, Object>() {{
                                put("doloribus", "sapiente");
                                put("architecto", "mollitia");
                                put("dolorem", "culpa");
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
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "velit";
                uploadProtocol = "error";
            }};            

            LanguageDocumentsAnnotateTextResponse res = sdk.documents.languageDocumentsAnnotateText(req, new LanguageDocumentsAnnotateTextSecurity() {{
                option1 = new LanguageDocumentsAnnotateTextSecurityOption1("quia", "quis") {{
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
import org.openapis.openapi.models.shared.DocumentBoilerplateHandlingEnum;
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
                            put("animi", "enim");
                            put("odit", "quo");
                            put("sequi", "tenetur");
                        }};
                        v2Model = new V2Model() {{
                            contentCategoriesVersion = V2ModelContentCategoriesVersionEnum.V1;
                        }};;
                    }};;
                    document = new Document() {{
                        boilerplateHandling = DocumentBoilerplateHandlingEnum.SKIP_BOILERPLATE;
                        content = "possimus";
                        gcsContentUri = "aut";
                        language = "quasi";
                        referenceWebUri = "error";
                        type = DocumentTypeEnum.HTML;
                    }};;
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            LanguageDocumentsClassifyTextResponse res = sdk.documents.languageDocumentsClassifyText(req, new LanguageDocumentsClassifyTextSecurity() {{
                option1 = new LanguageDocumentsClassifyTextSecurityOption1("omnis", "voluptate") {{
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
