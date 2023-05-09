# documents

### Available Operations

* [addOrReplaceDocuments](#addorreplacedocuments) - Add or replace documents
* [addOrUpdateDocuments](#addorupdatedocuments) - Add or update documents
* [deleteAllDocuments](#deletealldocuments) - Delete all documents
* [deleteDocuments](#deletedocuments) - Delete documents
* [deleteOneDocument](#deleteonedocument) - Delete one document
* [getDocuments](#getdocuments) - Get documents
* [getOneDocument](#getonedocument) - Get one document

## addOrReplaceDocuments

Add or replace documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequest;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody;
import org.openapis.openapi.models.operations.AddOrReplaceDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrReplaceDocumentsRequest req = new AddOrReplaceDocumentsRequest() {{
                requestBody = new org.openapis.openapi.models.operations.AddOrReplaceDocumentsRequestBody[]{{
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                    add(new AddOrReplaceDocumentsRequestBody() {{
                        author = "Jane Austen";
                        genre = "romance";
                        id = 2;
                        price = 3.5;
                        title = "Pride and Prejudice";
                    }}),
                }};
                csvDelimiter = ";";
                primaryKey = "id";
            }};            

            AddOrReplaceDocumentsResponse res = sdk.documents.addOrReplaceDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addOrUpdateDocuments

Add or update documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateDocumentsRequest;
import org.openapis.openapi.models.operations.AddOrUpdateDocumentsRequestBody;
import org.openapis.openapi.models.operations.AddOrUpdateDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateDocumentsRequest req = new AddOrUpdateDocumentsRequest() {{
                requestBody = new org.openapis.openapi.models.operations.AddOrUpdateDocumentsRequestBody[]{{
                    add(new AddOrUpdateDocumentsRequestBody() {{
                        author = "J. Austen";
                        date = "1813";
                        id = 2;
                    }}),
                    add(new AddOrUpdateDocumentsRequestBody() {{
                        author = "J. Austen";
                        date = "1813";
                        id = 2;
                    }}),
                    add(new AddOrUpdateDocumentsRequestBody() {{
                        author = "J. Austen";
                        date = "1813";
                        id = 2;
                    }}),
                }};
                csvDelimiter = ";";
                primaryKey = "id";
            }};            

            AddOrUpdateDocumentsResponse res = sdk.documents.addOrUpdateDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAllDocuments

Delete all documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAllDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAllDocumentsResponse res = sdk.documents.deleteAllDocuments();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDocuments

Delete documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new Double[]{{
                add(1),
                add(1),
                add(1),
                add(1),
            }}            

            DeleteDocumentsResponse res = sdk.documents.deleteDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOneDocument

Delete one document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOneDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "unde".getBytes()            

            DeleteOneDocumentResponse res = sdk.documents.deleteOneDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocuments

Get documents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentsRequest;
import org.openapis.openapi.models.operations.GetDocumentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentsRequest req = new GetDocumentsRequest() {{
                fields = "id";
                limit = "1";
                offset = "10";
            }};            

            GetDocumentsResponse res = sdk.documents.getDocuments(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOneDocument

Get one document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOneDocumentRequest;
import org.openapis.openapi.models.operations.GetOneDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOneDocumentRequest req = new GetOneDocumentRequest() {{
                fields = "id";
            }};            

            GetOneDocumentResponse res = sdk.documents.getOneDocument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
