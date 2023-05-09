# docs

### Available Operations

* [createDoc](#createdoc) - Create doc
* [deleteDoc](#deletedoc) - Delete doc
* [getDoc](#getdoc) - Get doc
* [searchDocs](#searchdocs) - Search docs
* [updateDoc](#updatedoc) - Update doc

## createDoc

Create a new doc inside of this project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocRequest;
import org.openapis.openapi.models.operations.CreateDocResponse;
import org.openapis.openapi.models.operations.CreateDocSecurity;
import org.openapis.openapi.models.shared.Doc;
import org.openapis.openapi.models.shared.DocTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocRequest req = new CreateDocRequest(                new Doc("sed", "iste") {{
                                body = "dolor";
                                hidden = false;
                                parentDoc = "natus";
                                type = DocTypeEnum.ERROR;
                            }};, "hic");            

            CreateDocResponse res = sdk.docs.createDoc(req, new CreateDocSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDoc

Delete the doc with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocRequest;
import org.openapis.openapi.models.operations.DeleteDocResponse;
import org.openapis.openapi.models.operations.DeleteDocSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDocRequest req = new DeleteDocRequest("in", "corporis");            

            DeleteDocResponse res = sdk.docs.deleteDoc(req, new DeleteDocSecurity("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDoc

Returns the doc with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocRequest;
import org.openapis.openapi.models.operations.GetDocResponse;
import org.openapis.openapi.models.operations.GetDocSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocRequest req = new GetDocRequest("saepe", "quidem");            

            GetDocResponse res = sdk.docs.getDoc(req, new GetDocSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchDocs

Returns all docs that match the search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDocsRequest;
import org.openapis.openapi.models.operations.SearchDocsResponse;
import org.openapis.openapi.models.operations.SearchDocsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchDocsRequest req = new SearchDocsRequest("reiciendis", "est");            

            SearchDocsResponse res = sdk.docs.searchDocs(req, new SearchDocsSecurity("mollitia", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDoc

Update a doc with this slug

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocRequest;
import org.openapis.openapi.models.operations.UpdateDocResponse;
import org.openapis.openapi.models.operations.UpdateDocSecurity;
import org.openapis.openapi.models.shared.Doc;
import org.openapis.openapi.models.shared.DocTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDocRequest req = new UpdateDocRequest(                new Doc("dolores", "dolorem") {{
                                body = "corporis";
                                hidden = false;
                                parentDoc = "explicabo";
                                type = DocTypeEnum.LINK;
                            }};, "enim", "omnis");            

            UpdateDocResponse res = sdk.docs.updateDoc(req, new UpdateDocSecurity("nemo", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
