# document

### Available Operations

* [getAllDocumentSubjects](#getalldocumentsubjects) - Get a list of subjects of projects
* [getDocument](#getdocument) - View a single document
* [getDocumentProgress](#getdocumentprogress) - View a document translation progress
* [getDocuments](#getdocuments) - View your documents
* [getSimilarDocuments](#getsimilardocuments) - Find documents similar to this document.
* [getUserDocuments](#getuserdocuments) - Get a list of your documents
* [regeneratePreview](#regeneratepreview) - Regenerate preview and return preview URL for given file
* [useAsDraft](#useasdraft) - Use the translation of given source manual document as manual draft source for the given target document.
* [useAsRegular](#useasregular) - Use the translation of the given manual document as a regular file.

## getAllDocumentSubjects

Get a list of subjects of projects

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllDocumentSubjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAllDocumentSubjectsResponse res = sdk.document.getAllDocumentSubjects();

            if (res.documentSubjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument

View a single document from your MotaWord account with its translation info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentRequest;
import org.openapis.openapi.models.operations.GetDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDocumentRequest req = new GetDocumentRequest("expedita");            

            GetDocumentResponse res = sdk.document.getDocument(req);

            if (res.continuousProjectDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentProgress

View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentProgressRequest;
import org.openapis.openapi.models.operations.GetDocumentProgressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDocumentProgressRequest req = new GetDocumentProgressRequest(1536.94);            

            GetDocumentProgressResponse res = sdk.document.getDocumentProgress(req);

            if (res.progress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocuments

View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentsOrderByEnum;
import org.openapis.openapi.models.operations.GetDocumentsRequest;
import org.openapis.openapi.models.operations.GetDocumentsResponse;
import org.openapis.openapi.models.operations.GetDocumentsTypeFilterEnum;
import org.openapis.openapi.models.operations.GetDocumentsWithEnum;
import org.openapis.openapi.models.shared.ListOrderTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetDocumentsRequest req = new GetDocumentsRequest() {{
                languageCode = "libero";
                orderBy = GetDocumentsOrderByEnum.UPDATED_AT;
                orderType = ListOrderTypeEnum.DESC;
                page = 463575L;
                perPage = 214880L;
                recent = false;
                search = "incidunt";
                typeFilter = GetDocumentsTypeFilterEnum.PRESENTATIONS;
                with = new org.openapis.openapi.models.operations.GetDocumentsWithEnum[]{{
                    add(GetDocumentsWithEnum.EDITORS),
                    add(GetDocumentsWithEnum.EDITORS),
                    add(GetDocumentsWithEnum.EDITORS),
                }};
            }};            

            GetDocumentsResponse res = sdk.document.getDocuments(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimilarDocuments

Find documents similar to this document. Optionally, include translation information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimilarDocumentsRequest;
import org.openapis.openapi.models.operations.GetSimilarDocumentsResponse;
import org.openapis.openapi.models.operations.GetSimilarDocumentsWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSimilarDocumentsRequest req = new GetSimilarDocumentsRequest(674848L) {{
                perPage = 517379L;
                with = new org.openapis.openapi.models.operations.GetSimilarDocumentsWithEnum[]{{
                    add(GetSimilarDocumentsWithEnum.PREVIEW),
                    add(GetSimilarDocumentsWithEnum.PREVIEW),
                }};
            }};            

            GetSimilarDocumentsResponse res = sdk.document.getSimilarDocuments(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserDocuments

Get a list of your documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserDocumentsOrderByEnum;
import org.openapis.openapi.models.operations.GetUserDocumentsRequest;
import org.openapis.openapi.models.operations.GetUserDocumentsResponse;
import org.openapis.openapi.models.operations.GetUserDocumentsTypeFilterEnum;
import org.openapis.openapi.models.shared.ListOrderTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserDocumentsRequest req = new GetUserDocumentsRequest(704474L) {{
                languageCode = "aliquid";
                orderBy = GetUserDocumentsOrderByEnum.UPDATED_AT;
                orderType = ListOrderTypeEnum.DESC;
                page = 840429L;
                perPage = 183280L;
                recent = false;
                search = "neque";
                typeFilter = GetUserDocumentsTypeFilterEnum.TEXT_DOCUMENTS;
            }};            

            GetUserDocumentsResponse res = sdk.document.getUserDocuments(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## regeneratePreview

Regenerate preview and return preview URL for given file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegeneratePreviewRequest;
import org.openapis.openapi.models.operations.RegeneratePreviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RegeneratePreviewRequest req = new RegeneratePreviewRequest(488056L);            

            RegeneratePreviewResponse res = sdk.document.regeneratePreview(req);

            if (res.regeneratePreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## useAsDraft

Use the translation of given source manual document as manual draft source for the given target document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UseAsDraftRequest;
import org.openapis.openapi.models.operations.UseAsDraftResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UseAsDraftPayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UseAsDraftRequest req = new UseAsDraftRequest(355613L) {{
                useAsDraftPayload = new UseAsDraftPayload() {{
                    fromFileId = 7220.81;
                    fromManualTranslationFileId = 9404.32;
                    toManualTranslationFileId = 304.52;
                }};;
            }};            

            UseAsDraftResponse res = sdk.document.useAsDraft(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## useAsRegular

Use the translation of the given manual document as a regular file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UseAsRegularRequest;
import org.openapis.openapi.models.operations.UseAsRegularResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UseAsRegularPayload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UseAsRegularRequest req = new UseAsRegularRequest(746994L) {{
                useAsRegularPayload = new UseAsRegularPayload() {{
                    allowOriginalFilePreview = false;
                    allowReviewInManualEditor = false;
                    disableInvitations = false;
                    fromManualTranslationFileId = 7486.64;
                    hideNumbers = false;
                    recreate = false;
                }};;
            }};            

            UseAsRegularResponse res = sdk.document.useAsRegular(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
