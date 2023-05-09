# indexService

## Overview

Indexing operations, such as creating and deleting documents

### Available Operations

* [delete](#delete) - Delete
* [fileUpload](#fileupload) - File Upload
* [index](#index) - Index

## delete

Delete

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRequest;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.operations.DeleteSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VectaraDeleteDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRequest req = new DeleteRequest(363711L,                 new VectaraDeleteDocumentRequest() {{
                                corpusId = "minima";
                                customerId = "excepturi";
                                documentId = "accusantium";
                            }};);            

            DeleteResponse res = sdk.indexService.delete(req, new DeleteSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vectaraDeleteDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileUpload

File Upload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileUploadRequest;
import org.openapis.openapi.models.operations.FileUploadRequestBody;
import org.openapis.openapi.models.operations.FileUploadRequestBodyFile;
import org.openapis.openapi.models.operations.FileUploadResponse;
import org.openapis.openapi.models.operations.FileUploadSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileUploadRequest req = new FileUploadRequest(438601L, 634274L) {{
                requestBody = new FileUploadRequestBody() {{
                    docMetadata = "doloribus";
                    file = new FileUploadRequestBodyFile("sapiente".getBytes(), "architecto");;
                }};;
                d = false;
            }};            

            FileUploadResponse res = sdk.indexService.fileUpload(req, new FileUploadSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.fileUpload200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## index

Index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IndexRequest;
import org.openapis.openapi.models.operations.IndexResponse;
import org.openapis.openapi.models.operations.IndexSecurity;
import org.openapis.openapi.models.shared.IndexingSection;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VectaraIndexDocumentRequest;
import org.openapis.openapi.models.shared.VectaraindexingCustomDimension;
import org.openapis.openapi.models.shared.VectaraindexingDocument;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndexRequest req = new IndexRequest(652790L,                 new VectaraIndexDocumentRequest() {{
                                corpusId = "dolorem";
                                customerId = "culpa";
                                document = new VectaraindexingDocument() {{
                                    customDims = new org.openapis.openapi.models.shared.VectaraindexingCustomDimension[]{{
                                        add(new VectaraindexingCustomDimension() {{
                                            name = "Shaun McCullough";
                                            value = 4663.11;
                                        }}),
                                    }};
                                    description = "molestiae";
                                    documentId = "velit";
                                    metadataJson = "error";
                                    section = new org.openapis.openapi.models.shared.IndexingSection[]{{
                                        add(new IndexingSection() {{
                                            customDims = new org.openapis.openapi.models.shared.VectaraindexingCustomDimension[]{{
                                                add(new VectaraindexingCustomDimension() {{
                                                    name = "Kayla O'Kon";
                                                    value = 7783.46;
                                                }}),
                                                add(new VectaraindexingCustomDimension() {{
                                                    name = "Mandy Hills";
                                                    value = 135.71;
                                                }}),
                                            }};
                                            id = 97101;
                                            metadataJson = "error";
                                            section = new org.openapis.openapi.models.shared.IndexingSection[]{{
                                                add(new IndexingSection() {{}}),
                                                add(new IndexingSection() {{}}),
                                                add(new IndexingSection() {{}}),
                                                add(new IndexingSection() {{}}),
                                            }};
                                            text = "laborum";
                                            title = "Mr.";
                                        }}),
                                    }};
                                    title = "Dr.";
                                }};;
                            }};);            

            IndexResponse res = sdk.indexService.index(req, new IndexSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.vectaraIndexDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
