# projectDocument

### Available Operations

* [createProjectDocument](#createprojectdocument) - Upload a new document
* [deleteProjectDocument](#deleteprojectdocument) - Delete the document
* [downloadProjectDocument](#downloadprojectdocument) - Download a project source document
* [downloadTranslatedDocumentForLanguage](#downloadtranslateddocumentforlanguage) - Download translated document
* [getProjectDocument](#getprojectdocument) - View a project source document
* [getProjectDocuments](#getprojectdocuments) - View project source documents
* [updateProjectDocumentJson](#updateprojectdocumentjson) - Update the document.
* [updateProjectDocumentMultipart](#updateprojectdocumentmultipart) - Update the document.

## createProjectDocument

Upload a new document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectDocumentRequest;
import org.openapis.openapi.models.operations.CreateProjectDocumentResponse;
import org.openapis.openapi.models.shared.DocumentUpdates;
import org.openapis.openapi.models.shared.LinkedSourceDocument;
import org.openapis.openapi.models.shared.LinkedSourceDocumentSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateProjectDocumentRequest req = new CreateProjectDocumentRequest(426306L) {{
                documentUpdates = new DocumentUpdates() {{
                    documents = new byte[][]{{
                        add("molestiae".getBytes()),
                        add("rerum".getBytes()),
                        add("occaecati".getBytes()),
                    }};
                    schemes = "minima";
                    sourceLinks = new org.openapis.openapi.models.shared.LinkedSourceDocument[]{{
                        add(new LinkedSourceDocument() {{
                            name = "Mark Nicolas";
                            size = 766964L;
                            source = LinkedSourceDocumentSourceEnum.DROPBOX;
                            url = "http://staid-energy.org";
                        }}),
                        add(new LinkedSourceDocument() {{
                            name = "Joy Labadie";
                            size = 857723L;
                            source = LinkedSourceDocumentSourceEnum.GOOGLEDRIVE;
                            url = "http://bumpy-vendor.name";
                        }}),
                        add(new LinkedSourceDocument() {{
                            name = "Jody Schuster";
                            size = 992430L;
                            source = LinkedSourceDocumentSourceEnum.ICLOUD;
                            url = "http://cultured-boogeyman.name";
                        }}),
                    }};
                }};;
            }};            

            CreateProjectDocumentResponse res = sdk.projectDocument.createProjectDocument(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProjectDocument

Delete the document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectDocumentRequest;
import org.openapis.openapi.models.operations.DeleteProjectDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteProjectDocumentRequest req = new DeleteProjectDocumentRequest(398434L, 949298L);            

            DeleteProjectDocumentResponse res = sdk.projectDocument.deleteProjectDocument(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadProjectDocument

Download an actual source file you uploaded to be translated in your project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadProjectDocumentRequest;
import org.openapis.openapi.models.operations.DownloadProjectDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadProjectDocumentRequest req = new DownloadProjectDocumentRequest(936747L, 424032L);            

            DownloadProjectDocumentResponse res = sdk.projectDocument.downloadProjectDocument(req);

            if (res.downloadProjectDocument200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadTranslatedDocumentForLanguage

Download translated document in the given target language.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadTranslatedDocumentForLanguageRequest;
import org.openapis.openapi.models.operations.DownloadTranslatedDocumentForLanguageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadTranslatedDocumentForLanguageRequest req = new DownloadTranslatedDocumentForLanguageRequest(258684L, "libero", 849039L) {{
                certified = false;
            }};            

            DownloadTranslatedDocumentForLanguageResponse res = sdk.projectDocument.downloadTranslatedDocumentForLanguage(req);

            if (res.downloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectDocument

View the details of a source file you uploaded to be translated in your project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectDocumentRequest;
import org.openapis.openapi.models.operations.GetProjectDocumentResponse;
import org.openapis.openapi.models.operations.GetProjectDocumentWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectDocumentRequest req = new GetProjectDocumentRequest(33304L, 306986L) {{
                with = new org.openapis.openapi.models.operations.GetProjectDocumentWithEnum[]{{
                    add(GetProjectDocumentWithEnum.PREVIEW),
                    add(GetProjectDocumentWithEnum.PREVIEW),
                    add(GetProjectDocumentWithEnum.PREVIEW),
                    add(GetProjectDocumentWithEnum.PREVIEW),
                }};
            }};            

            GetProjectDocumentResponse res = sdk.projectDocument.getProjectDocument(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectDocuments

Get a list of source files you uploaded to be translated in your project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectDocumentsRequest;
import org.openapis.openapi.models.operations.GetProjectDocumentsResponse;
import org.openapis.openapi.models.operations.GetProjectDocumentsWithEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectDocumentsRequest req = new GetProjectDocumentsRequest(16328L) {{
                with = new org.openapis.openapi.models.operations.GetProjectDocumentsWithEnum[]{{
                    add(GetProjectDocumentsWithEnum.PREVIEW),
                    add(GetProjectDocumentsWithEnum.EDITORS),
                    add(GetProjectDocumentsWithEnum.PREVIEW),
                }};
            }};            

            GetProjectDocumentsResponse res = sdk.projectDocument.getProjectDocuments(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectDocumentJson

Update the document. File name and contents will replaced with the new one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectDocumentJsonRequest;
import org.openapis.openapi.models.operations.UpdateProjectDocumentJsonResponse;
import org.openapis.openapi.models.shared.DocumentUploadRequest;
import org.openapis.openapi.models.shared.LinkedSourceDocument;
import org.openapis.openapi.models.shared.LinkedSourceDocumentSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectDocumentJsonRequest req = new UpdateProjectDocumentJsonRequest(929292L, 680270L) {{
                documentUploadRequest = new DocumentUploadRequest() {{
                    documents = "architecto".getBytes();
                    schemes = "omnis";
                    sourceLink = new LinkedSourceDocument() {{
                        name = "Ms. Roger Strosin II";
                        size = 86532L;
                        source = LinkedSourceDocumentSourceEnum.DROPBOX;
                        url = "http://peaceful-spot.com";
                    }};;
                }};;
            }};            

            UpdateProjectDocumentJsonResponse res = sdk.projectDocument.updateProjectDocumentJson(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectDocumentMultipart

Update the document. File name and contents will replaced with the new one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectDocumentMultipartRequest;
import org.openapis.openapi.models.operations.UpdateProjectDocumentMultipartResponse;
import org.openapis.openapi.models.shared.DocumentUploadRequest1;
import org.openapis.openapi.models.shared.DocumentUploadRequestDocuments;
import org.openapis.openapi.models.shared.LinkedSourceDocument;
import org.openapis.openapi.models.shared.LinkedSourceDocumentSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateProjectDocumentMultipartRequest req = new UpdateProjectDocumentMultipartRequest(15606L, 513075L) {{
                documentUploadRequest1 = new DocumentUploadRequest1() {{
                    documents = new DocumentUploadRequestDocuments("eum".getBytes(), "mollitia");;
                    schemes = "ab";
                    sourceLink = new LinkedSourceDocument() {{
                        name = "Kyle Bartoletti";
                        size = 253191L;
                        source = LinkedSourceDocumentSourceEnum.ICLOUD;
                        url = "http://haunting-advertisement.info";
                    }};;
                }};;
            }};            

            UpdateProjectDocumentMultipartResponse res = sdk.projectDocument.updateProjectDocumentMultipart(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
