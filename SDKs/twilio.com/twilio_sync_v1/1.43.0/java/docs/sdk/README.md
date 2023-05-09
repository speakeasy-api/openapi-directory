# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDocument](#createdocument)
* [createService](#createservice)
* [createStreamMessage](#createstreammessage) - Create a new Stream Message.
* [createSyncList](#createsynclist)
* [createSyncListItem](#createsynclistitem)
* [createSyncMap](#createsyncmap)
* [createSyncMapItem](#createsyncmapitem)
* [createSyncStream](#createsyncstream) - Create a new Stream.
* [deleteDocument](#deletedocument)
* [deleteDocumentPermission](#deletedocumentpermission) - Delete a specific Sync Document Permission.
* [deleteService](#deleteservice)
* [deleteSyncList](#deletesynclist)
* [deleteSyncListItem](#deletesynclistitem)
* [deleteSyncListPermission](#deletesynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncMap](#deletesyncmap)
* [deleteSyncMapItem](#deletesyncmapitem)
* [deleteSyncMapPermission](#deletesyncmappermission) - Delete a specific Sync Map Permission.
* [deleteSyncStream](#deletesyncstream) - Delete a specific Stream.
* [fetchDocument](#fetchdocument)
* [fetchDocumentPermission](#fetchdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchService](#fetchservice)
* [fetchSyncList](#fetchsynclist)
* [fetchSyncListItem](#fetchsynclistitem)
* [fetchSyncListPermission](#fetchsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncMap](#fetchsyncmap)
* [fetchSyncMapItem](#fetchsyncmapitem)
* [fetchSyncMapPermission](#fetchsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchSyncStream](#fetchsyncstream) - Fetch a specific Stream.
* [listDocument](#listdocument)
* [listDocumentPermission](#listdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listService](#listservice)
* [listSyncList](#listsynclist)
* [listSyncListItem](#listsynclistitem)
* [listSyncListPermission](#listsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncMap](#listsyncmap)
* [listSyncMapItem](#listsyncmapitem)
* [listSyncMapPermission](#listsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listSyncStream](#listsyncstream) - Retrieve a list of all Streams in a Service Instance.
* [updateDocument](#updatedocument)
* [updateDocumentPermission](#updatedocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateService](#updateservice)
* [updateSyncList](#updatesynclist)
* [updateSyncListItem](#updatesynclistitem)
* [updateSyncListPermission](#updatesynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncMap](#updatesyncmap)
* [updateSyncMapItem](#updatesyncmapitem)
* [updateSyncMapPermission](#updatesyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateSyncStream](#updatesyncstream) - Update a specific Stream.

## createDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentCreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentRequest;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.operations.CreateDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDocumentRequest req = new CreateDocumentRequest("corrupti") {{
                requestBody = new CreateDocumentCreateDocumentRequest() {{
                    data = "illum";
                    ttl = 423655L;
                    uniqueName = "error";
                }};;
            }};            

            CreateDocumentResponse res = sdk.sdk.createDocument(req, new CreateDocumentSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest() {{
                aclEnabled = false;
                friendlyName = "iure";
                reachabilityDebouncingEnabled = false;
                reachabilityDebouncingWindow = 297534L;
                reachabilityWebhooksEnabled = false;
                webhookUrl = "https://awesome-voter.biz";
                webhooksFromRestEnabled = false;
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStreamMessage

Create a new Stream Message.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamMessageCreateStreamMessageRequest;
import org.openapis.openapi.models.operations.CreateStreamMessageRequest;
import org.openapis.openapi.models.operations.CreateStreamMessageResponse;
import org.openapis.openapi.models.operations.CreateStreamMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateStreamMessageRequest req = new CreateStreamMessageRequest("minus", "placeat") {{
                requestBody = new CreateStreamMessageCreateStreamMessageRequest("voluptatum");;
            }};            

            CreateStreamMessageResponse res = sdk.sdk.createStreamMessage(req, new CreateStreamMessageSecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncStreamStreamMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncListCreateSyncListRequest;
import org.openapis.openapi.models.operations.CreateSyncListRequest;
import org.openapis.openapi.models.operations.CreateSyncListResponse;
import org.openapis.openapi.models.operations.CreateSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncListRequest req = new CreateSyncListRequest("nisi") {{
                requestBody = new CreateSyncListCreateSyncListRequest() {{
                    collectionTtl = 925597L;
                    ttl = 836079L;
                    uniqueName = "ab";
                }};;
            }};            

            CreateSyncListResponse res = sdk.sdk.createSyncList(req, new CreateSyncListSecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncListItemCreateSyncListItemRequest;
import org.openapis.openapi.models.operations.CreateSyncListItemRequest;
import org.openapis.openapi.models.operations.CreateSyncListItemResponse;
import org.openapis.openapi.models.operations.CreateSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncListItemRequest req = new CreateSyncListItemRequest("deserunt", "perferendis") {{
                requestBody = new CreateSyncListItemCreateSyncListItemRequest("ipsam") {{
                    collectionTtl = 832620L;
                    itemTtl = 957156L;
                    ttl = 778157L;
                }};;
            }};            

            CreateSyncListItemResponse res = sdk.sdk.createSyncListItem(req, new CreateSyncListItemSecurity("odit", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncMapCreateSyncMapRequest;
import org.openapis.openapi.models.operations.CreateSyncMapRequest;
import org.openapis.openapi.models.operations.CreateSyncMapResponse;
import org.openapis.openapi.models.operations.CreateSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncMapRequest req = new CreateSyncMapRequest("at") {{
                requestBody = new CreateSyncMapCreateSyncMapRequest() {{
                    collectionTtl = 978619L;
                    ttl = 473608L;
                    uniqueName = "quod";
                }};;
            }};            

            CreateSyncMapResponse res = sdk.sdk.createSyncMap(req, new CreateSyncMapSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncMapItemCreateSyncMapItemRequest;
import org.openapis.openapi.models.operations.CreateSyncMapItemRequest;
import org.openapis.openapi.models.operations.CreateSyncMapItemResponse;
import org.openapis.openapi.models.operations.CreateSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncMapItemRequest req = new CreateSyncMapItemRequest("totam", "porro") {{
                requestBody = new CreateSyncMapItemCreateSyncMapItemRequest("dolorum", "dicta") {{
                    collectionTtl = 720633L;
                    itemTtl = 639921L;
                    ttl = 582020L;
                }};;
            }};            

            CreateSyncMapItemResponse res = sdk.sdk.createSyncMapItem(req, new CreateSyncMapItemSecurity("fugit", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSyncStream

Create a new Stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSyncStreamCreateSyncStreamRequest;
import org.openapis.openapi.models.operations.CreateSyncStreamRequest;
import org.openapis.openapi.models.operations.CreateSyncStreamResponse;
import org.openapis.openapi.models.operations.CreateSyncStreamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSyncStreamRequest req = new CreateSyncStreamRequest("hic") {{
                requestBody = new CreateSyncStreamCreateSyncStreamRequest() {{
                    ttl = 758616L;
                    uniqueName = "totam";
                }};;
            }};            

            CreateSyncStreamResponse res = sdk.sdk.createSyncStream(req, new CreateSyncStreamSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentRequest;
import org.openapis.openapi.models.operations.DeleteDocumentResponse;
import org.openapis.openapi.models.operations.DeleteDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDocumentRequest req = new DeleteDocumentRequest("molestiae", "modi");            

            DeleteDocumentResponse res = sdk.sdk.deleteDocument(req, new DeleteDocumentSecurity("qui", "impedit") {{
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

## deleteDocumentPermission

Delete a specific Sync Document Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentPermissionRequest;
import org.openapis.openapi.models.operations.DeleteDocumentPermissionResponse;
import org.openapis.openapi.models.operations.DeleteDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDocumentPermissionRequest req = new DeleteDocumentPermissionRequest("cum", "esse", "ipsum");            

            DeleteDocumentPermissionResponse res = sdk.sdk.deleteDocumentPermission(req, new DeleteDocumentPermissionSecurity("excepturi", "aspernatur") {{
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

## deleteService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("perferendis");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("ad", "natus") {{
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

## deleteSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncListRequest;
import org.openapis.openapi.models.operations.DeleteSyncListResponse;
import org.openapis.openapi.models.operations.DeleteSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncListRequest req = new DeleteSyncListRequest("sed", "iste");            

            DeleteSyncListResponse res = sdk.sdk.deleteSyncList(req, new DeleteSyncListSecurity("dolor", "natus") {{
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

## deleteSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncListItemRequest;
import org.openapis.openapi.models.operations.DeleteSyncListItemResponse;
import org.openapis.openapi.models.operations.DeleteSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncListItemRequest req = new DeleteSyncListItemRequest(386489L, "hic", "saepe") {{
                ifMatch = "fuga";
            }};            

            DeleteSyncListItemResponse res = sdk.sdk.deleteSyncListItem(req, new DeleteSyncListItemSecurity("in", "corporis") {{
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

## deleteSyncListPermission

Delete a specific Sync List Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncListPermissionRequest;
import org.openapis.openapi.models.operations.DeleteSyncListPermissionResponse;
import org.openapis.openapi.models.operations.DeleteSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncListPermissionRequest req = new DeleteSyncListPermissionRequest("iste", "iure", "saepe");            

            DeleteSyncListPermissionResponse res = sdk.sdk.deleteSyncListPermission(req, new DeleteSyncListPermissionSecurity("quidem", "architecto") {{
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

## deleteSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncMapRequest;
import org.openapis.openapi.models.operations.DeleteSyncMapResponse;
import org.openapis.openapi.models.operations.DeleteSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncMapRequest req = new DeleteSyncMapRequest("ipsa", "reiciendis");            

            DeleteSyncMapResponse res = sdk.sdk.deleteSyncMap(req, new DeleteSyncMapSecurity("est", "mollitia") {{
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

## deleteSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncMapItemRequest;
import org.openapis.openapi.models.operations.DeleteSyncMapItemResponse;
import org.openapis.openapi.models.operations.DeleteSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncMapItemRequest req = new DeleteSyncMapItemRequest("laborum", "dolores", "dolorem") {{
                ifMatch = "corporis";
            }};            

            DeleteSyncMapItemResponse res = sdk.sdk.deleteSyncMapItem(req, new DeleteSyncMapItemSecurity("explicabo", "nobis") {{
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

## deleteSyncMapPermission

Delete a specific Sync Map Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.DeleteSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.DeleteSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncMapPermissionRequest req = new DeleteSyncMapPermissionRequest("enim", "omnis", "nemo");            

            DeleteSyncMapPermissionResponse res = sdk.sdk.deleteSyncMapPermission(req, new DeleteSyncMapPermissionSecurity("minima", "excepturi") {{
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

## deleteSyncStream

Delete a specific Stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSyncStreamRequest;
import org.openapis.openapi.models.operations.DeleteSyncStreamResponse;
import org.openapis.openapi.models.operations.DeleteSyncStreamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSyncStreamRequest req = new DeleteSyncStreamRequest("accusantium", "iure");            

            DeleteSyncStreamResponse res = sdk.sdk.deleteSyncStream(req, new DeleteSyncStreamSecurity("culpa", "doloribus") {{
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

## fetchDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDocumentRequest;
import org.openapis.openapi.models.operations.FetchDocumentResponse;
import org.openapis.openapi.models.operations.FetchDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDocumentRequest req = new FetchDocumentRequest("sapiente", "architecto");            

            FetchDocumentResponse res = sdk.sdk.fetchDocument(req, new FetchDocumentSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDocumentPermission

Fetch a specific Sync Document Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDocumentPermissionRequest;
import org.openapis.openapi.models.operations.FetchDocumentPermissionResponse;
import org.openapis.openapi.models.operations.FetchDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDocumentPermissionRequest req = new FetchDocumentPermissionRequest("culpa", "consequuntur", "repellat");            

            FetchDocumentPermissionResponse res = sdk.sdk.fetchDocumentPermission(req, new FetchDocumentPermissionSecurity("mollitia", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocumentDocumentPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("numquam");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncListRequest;
import org.openapis.openapi.models.operations.FetchSyncListResponse;
import org.openapis.openapi.models.operations.FetchSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncListRequest req = new FetchSyncListRequest("molestiae", "velit");            

            FetchSyncListResponse res = sdk.sdk.fetchSyncList(req, new FetchSyncListSecurity("error", "quia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncListItemRequest;
import org.openapis.openapi.models.operations.FetchSyncListItemResponse;
import org.openapis.openapi.models.operations.FetchSyncListItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncListItemRequest req = new FetchSyncListItemRequest(338007L, "vitae", "laborum");            

            FetchSyncListItemResponse res = sdk.sdk.fetchSyncListItem(req, new FetchSyncListItemSecurity("animi", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncListPermission

Fetch a specific Sync List Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncListPermissionRequest;
import org.openapis.openapi.models.operations.FetchSyncListPermissionResponse;
import org.openapis.openapi.models.operations.FetchSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncListPermissionRequest req = new FetchSyncListPermissionRequest("odit", "quo", "sequi");            

            FetchSyncListPermissionResponse res = sdk.sdk.fetchSyncListPermission(req, new FetchSyncListPermissionSecurity("tenetur", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncListSyncListPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncMapRequest;
import org.openapis.openapi.models.operations.FetchSyncMapResponse;
import org.openapis.openapi.models.operations.FetchSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncMapRequest req = new FetchSyncMapRequest("id", "possimus");            

            FetchSyncMapResponse res = sdk.sdk.fetchSyncMap(req, new FetchSyncMapSecurity("aut", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncMapItemRequest;
import org.openapis.openapi.models.operations.FetchSyncMapItemResponse;
import org.openapis.openapi.models.operations.FetchSyncMapItemSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncMapItemRequest req = new FetchSyncMapItemRequest("error", "temporibus", "laborum");            

            FetchSyncMapItemResponse res = sdk.sdk.fetchSyncMapItem(req, new FetchSyncMapItemSecurity("quasi", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncMapPermission

Fetch a specific Sync Map Permission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.FetchSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.FetchSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncMapPermissionRequest req = new FetchSyncMapPermissionRequest("voluptatibus", "vero", "nihil");            

            FetchSyncMapPermissionResponse res = sdk.sdk.fetchSyncMapPermission(req, new FetchSyncMapPermissionSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMapSyncMapPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSyncStream

Fetch a specific Stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSyncStreamRequest;
import org.openapis.openapi.models.operations.FetchSyncStreamResponse;
import org.openapis.openapi.models.operations.FetchSyncStreamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSyncStreamRequest req = new FetchSyncStreamRequest("ipsa", "omnis");            

            FetchSyncStreamResponse res = sdk.sdk.fetchSyncStream(req, new FetchSyncStreamSecurity("voluptate", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentRequest;
import org.openapis.openapi.models.operations.ListDocumentResponse;
import org.openapis.openapi.models.operations.ListDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDocumentRequest req = new ListDocumentRequest("perferendis") {{
                page = 39187L;
                pageSize = 441711L;
                pageToken = "ut";
            }};            

            ListDocumentResponse res = sdk.sdk.listDocument(req, new ListDocumentSecurity("maiores", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentPermissionRequest;
import org.openapis.openapi.models.operations.ListDocumentPermissionResponse;
import org.openapis.openapi.models.operations.ListDocumentPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDocumentPermissionRequest req = new ListDocumentPermissionRequest("corporis", "dolore") {{
                page = 480894L;
                pageSize = 118727L;
                pageToken = "harum";
            }};            

            ListDocumentPermissionResponse res = sdk.sdk.listDocumentPermission(req, new ListDocumentPermissionSecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDocumentPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                page = 414263L;
                pageSize = 918236L;
                pageToken = "quae";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("ipsum", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncListRequest;
import org.openapis.openapi.models.operations.ListSyncListResponse;
import org.openapis.openapi.models.operations.ListSyncListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncListRequest req = new ListSyncListRequest("molestias") {{
                page = 566602L;
                pageSize = 865103L;
                pageToken = "modi";
            }};            

            ListSyncListResponse res = sdk.sdk.listSyncList(req, new ListSyncListSecurity("praesentium", "rem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncListItemRequest;
import org.openapis.openapi.models.operations.ListSyncListItemResponse;
import org.openapis.openapi.models.operations.ListSyncListItemSecurity;
import org.openapis.openapi.models.shared.SyncListItemEnumQueryFromBoundTypeEnum;
import org.openapis.openapi.models.shared.SyncListItemEnumQueryResultOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncListItemRequest req = new ListSyncListItemRequest("voluptates", "quasi") {{
                bounds = SyncListItemEnumQueryFromBoundTypeEnum.EXCLUSIVE;
                from = "sint";
                order = SyncListItemEnumQueryResultOrderEnum.ASC;
                page = 929297L;
                pageSize = 277718L;
                pageToken = "enim";
            }};            

            ListSyncListItemResponse res = sdk.sdk.listSyncListItem(req, new ListSyncListItemSecurity("consequatur", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncListItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncListPermissionRequest;
import org.openapis.openapi.models.operations.ListSyncListPermissionResponse;
import org.openapis.openapi.models.operations.ListSyncListPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncListPermissionRequest req = new ListSyncListPermissionRequest("quibusdam", "explicabo") {{
                page = 647174L;
                pageSize = 716327L;
                pageToken = "quibusdam";
            }};            

            ListSyncListPermissionResponse res = sdk.sdk.listSyncListPermission(req, new ListSyncListPermissionSecurity("labore", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncListPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncMapRequest;
import org.openapis.openapi.models.operations.ListSyncMapResponse;
import org.openapis.openapi.models.operations.ListSyncMapSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncMapRequest req = new ListSyncMapRequest("qui") {{
                page = 397821L;
                pageSize = 586513L;
                pageToken = "quos";
            }};            

            ListSyncMapResponse res = sdk.sdk.listSyncMap(req, new ListSyncMapSecurity("perferendis", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncMapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncMapItemRequest;
import org.openapis.openapi.models.operations.ListSyncMapItemResponse;
import org.openapis.openapi.models.operations.ListSyncMapItemSecurity;
import org.openapis.openapi.models.shared.SyncMapItemEnumQueryFromBoundTypeEnum;
import org.openapis.openapi.models.shared.SyncMapItemEnumQueryResultOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncMapItemRequest req = new ListSyncMapItemRequest("assumenda", "ipsam") {{
                bounds = SyncMapItemEnumQueryFromBoundTypeEnum.INCLUSIVE;
                from = "fugit";
                order = SyncMapItemEnumQueryResultOrderEnum.DESC;
                page = 569618L;
                pageSize = 270008L;
                pageToken = "facilis";
            }};            

            ListSyncMapItemResponse res = sdk.sdk.listSyncMapItem(req, new ListSyncMapItemSecurity("tempore", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncMapItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.ListSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.ListSyncMapPermissionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncMapPermissionRequest req = new ListSyncMapPermissionRequest("delectus", "eum") {{
                page = 248753L;
                pageSize = 756107L;
                pageToken = "sint";
            }};            

            ListSyncMapPermissionResponse res = sdk.sdk.listSyncMapPermission(req, new ListSyncMapPermissionSecurity("aliquid", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncMapPermissionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncStream

Retrieve a list of all Streams in a Service Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncStreamRequest;
import org.openapis.openapi.models.operations.ListSyncStreamResponse;
import org.openapis.openapi.models.operations.ListSyncStreamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSyncStreamRequest req = new ListSyncStreamRequest("necessitatibus") {{
                page = 572252L;
                pageSize = 638921L;
                pageToken = "dolor";
            }};            

            ListSyncStreamResponse res = sdk.sdk.listSyncStream(req, new ListSyncStreamSecurity("debitis", "a") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSyncStreamResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocument

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentRequest;
import org.openapis.openapi.models.operations.UpdateDocumentResponse;
import org.openapis.openapi.models.operations.UpdateDocumentSecurity;
import org.openapis.openapi.models.operations.UpdateDocumentUpdateDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDocumentRequest req = new UpdateDocumentRequest("dolorum", "in") {{
                ifMatch = "in";
                requestBody = new UpdateDocumentUpdateDocumentRequest() {{
                    data = "illum";
                    ttl = 978571L;
                }};;
            }};            

            UpdateDocumentResponse res = sdk.sdk.updateDocument(req, new UpdateDocumentSecurity("rerum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDocumentPermission

Update an identity's access to a specific Sync Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDocumentPermissionRequest;
import org.openapis.openapi.models.operations.UpdateDocumentPermissionResponse;
import org.openapis.openapi.models.operations.UpdateDocumentPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateDocumentPermissionUpdateDocumentPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDocumentPermissionRequest req = new UpdateDocumentPermissionRequest("magnam", "cumque", "facere") {{
                requestBody = new UpdateDocumentPermissionUpdateDocumentPermissionRequest(false, false, false);;
            }};            

            UpdateDocumentPermissionResponse res = sdk.sdk.updateDocumentPermission(req, new UpdateDocumentPermissionSecurity("ea", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceDocumentDocumentPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("laborum") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    aclEnabled = false;
                    friendlyName = "accusamus";
                    reachabilityDebouncingEnabled = false;
                    reachabilityDebouncingWindow = 249796L;
                    reachabilityWebhooksEnabled = false;
                    webhookUrl = "https://frilly-system.org";
                    webhooksFromRestEnabled = false;
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("quidem", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncListRequest;
import org.openapis.openapi.models.operations.UpdateSyncListResponse;
import org.openapis.openapi.models.operations.UpdateSyncListSecurity;
import org.openapis.openapi.models.operations.UpdateSyncListUpdateSyncListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncListRequest req = new UpdateSyncListRequest("nam", "id") {{
                requestBody = new UpdateSyncListUpdateSyncListRequest() {{
                    collectionTtl = 501324L;
                    ttl = 533206L;
                }};;
            }};            

            UpdateSyncListResponse res = sdk.sdk.updateSyncList(req, new UpdateSyncListSecurity("sapiente", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncListItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncListItemRequest;
import org.openapis.openapi.models.operations.UpdateSyncListItemResponse;
import org.openapis.openapi.models.operations.UpdateSyncListItemSecurity;
import org.openapis.openapi.models.operations.UpdateSyncListItemUpdateSyncListItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncListItemRequest req = new UpdateSyncListItemRequest(643990L, "nisi", "vel") {{
                ifMatch = "natus";
                requestBody = new UpdateSyncListItemUpdateSyncListItemRequest() {{
                    collectionTtl = 606393L;
                    data = "molestiae";
                    itemTtl = 19193L;
                    ttl = 470132L;
                }};;
            }};            

            UpdateSyncListItemResponse res = sdk.sdk.updateSyncListItem(req, new UpdateSyncListItemSecurity("magnam", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncListSyncListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncListPermission

Update an identity's access to a specific Sync List.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncListPermissionRequest;
import org.openapis.openapi.models.operations.UpdateSyncListPermissionResponse;
import org.openapis.openapi.models.operations.UpdateSyncListPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateSyncListPermissionUpdateSyncListPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncListPermissionRequest req = new UpdateSyncListPermissionRequest("id", "labore", "labore") {{
                requestBody = new UpdateSyncListPermissionUpdateSyncListPermissionRequest(false, false, false);;
            }};            

            UpdateSyncListPermissionResponse res = sdk.sdk.updateSyncListPermission(req, new UpdateSyncListPermissionSecurity("suscipit", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncListSyncListPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncMap

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncMapRequest;
import org.openapis.openapi.models.operations.UpdateSyncMapResponse;
import org.openapis.openapi.models.operations.UpdateSyncMapSecurity;
import org.openapis.openapi.models.operations.UpdateSyncMapUpdateSyncMapRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncMapRequest req = new UpdateSyncMapRequest("nobis", "eum") {{
                requestBody = new UpdateSyncMapUpdateSyncMapRequest() {{
                    collectionTtl = 878453L;
                    ttl = 135474L;
                }};;
            }};            

            UpdateSyncMapResponse res = sdk.sdk.updateSyncMap(req, new UpdateSyncMapSecurity("architecto", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncMapItem

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncMapItemRequest;
import org.openapis.openapi.models.operations.UpdateSyncMapItemResponse;
import org.openapis.openapi.models.operations.UpdateSyncMapItemSecurity;
import org.openapis.openapi.models.operations.UpdateSyncMapItemUpdateSyncMapItemRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncMapItemRequest req = new UpdateSyncMapItemRequest("et", "excepturi", "ullam") {{
                ifMatch = "provident";
                requestBody = new UpdateSyncMapItemUpdateSyncMapItemRequest() {{
                    collectionTtl = 551816L;
                    data = "sint";
                    itemTtl = 33625L;
                    ttl = 653201L;
                }};;
            }};            

            UpdateSyncMapItemResponse res = sdk.sdk.updateSyncMapItem(req, new UpdateSyncMapItemSecurity("reiciendis", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMapSyncMapItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncMapPermission

Update an identity's access to a specific Sync Map.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncMapPermissionRequest;
import org.openapis.openapi.models.operations.UpdateSyncMapPermissionResponse;
import org.openapis.openapi.models.operations.UpdateSyncMapPermissionSecurity;
import org.openapis.openapi.models.operations.UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncMapPermissionRequest req = new UpdateSyncMapPermissionRequest("ad", "eum", "dolor") {{
                requestBody = new UpdateSyncMapPermissionUpdateSyncMapPermissionRequest(false, false, false);;
            }};            

            UpdateSyncMapPermissionResponse res = sdk.sdk.updateSyncMapPermission(req, new UpdateSyncMapPermissionSecurity("necessitatibus", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncMapSyncMapPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSyncStream

Update a specific Stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSyncStreamRequest;
import org.openapis.openapi.models.operations.UpdateSyncStreamResponse;
import org.openapis.openapi.models.operations.UpdateSyncStreamSecurity;
import org.openapis.openapi.models.operations.UpdateSyncStreamUpdateSyncStreamRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSyncStreamRequest req = new UpdateSyncStreamRequest("nemo", "quasi") {{
                requestBody = new UpdateSyncStreamUpdateSyncStreamRequest() {{
                    ttl = 435865L;
                }};;
            }};            

            UpdateSyncStreamResponse res = sdk.sdk.updateSyncStream(req, new UpdateSyncStreamSecurity("doloribus", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.syncV1ServiceSyncStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
