# blobs

## Overview

The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `kvpairs` resource.


### Available Operations

* [addBlob](#addblob) - Create binary large object (blob) metadata
* [deleteBlob](#deleteblob) - Delete binary large object (blob)
* [getBlobById](#getblobbyid) - Download a binary large object (blob)
* [getBlobMetadataById](#getblobmetadatabyid) - Get binary large object (blob)
* [getBlobs](#getblobs) - Get all binary large objects (blob)
* [uploadBlobById](#uploadblobbyid) - Create binary large object (blob)

## addBlob

Create binary large object (blob) metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddBlobResponse;
import org.openapis.openapi.models.shared.BlobInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BlobInput req = new BlobInput() {{
                blobKey = "foobar";
                contentType = "image/png";
                filename = "Foo bar";
            }};            

            AddBlobResponse res = sdk.blobs.addBlob(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBlob

Delete binary large object (blob)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBlobRequest;
import org.openapis.openapi.models.operations.DeleteBlobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBlobRequest req = new DeleteBlobRequest("corrupti");            

            DeleteBlobResponse res = sdk.blobs.deleteBlob(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlobById

Download a binary large object (blob)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlobByIdRequest;
import org.openapis.openapi.models.operations.GetBlobByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlobByIdRequest req = new GetBlobByIdRequest("provident", "distinctio");            

            GetBlobByIdResponse res = sdk.blobs.getBlobById(req);

            if (res.getBlobById200ImageWildcardBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlobMetadataById

Get binary large object (blob)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlobMetadataByIdRequest;
import org.openapis.openapi.models.operations.GetBlobMetadataByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlobMetadataByIdRequest req = new GetBlobMetadataByIdRequest("quibusdam");            

            GetBlobMetadataByIdResponse res = sdk.blobs.getBlobMetadataById(req);

            if (res.blob != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlobs

Get all binary large objects (blob)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlobsRequest;
import org.openapis.openapi.models.operations.GetBlobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBlobsRequest req = new GetBlobsRequest() {{
                after = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                afterId = "corrupti";
                before = "illum";
                beforeId = "vel";
                blobKey = "error";
                contentType = "deserunt";
                filename = "suscipit";
                from = "iure";
                fromId = "magnam";
                hash = "debitis";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                limit = 56713L;
                populate = "delectus";
                resultsOnly = false;
                select = "tempora";
                sort = "suscipit";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeLastAccessed = "molestiae";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 7917.25;
                until = "placeat";
                untilId = "voluptatum";
            }};            

            GetBlobsResponse res = sdk.blobs.getBlobs(req);

            if (res.getBlobs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadBlobById

Create binary large object (blob)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadBlobByIdRequest;
import org.openapis.openapi.models.operations.UploadBlobByIdRequestBody;
import org.openapis.openapi.models.operations.UploadBlobByIdRequestBodyFile;
import org.openapis.openapi.models.operations.UploadBlobByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadBlobByIdRequest req = new UploadBlobByIdRequest("iusto") {{
                requestBody = new UploadBlobByIdRequestBody() {{
                    file = new UploadBlobByIdRequestBodyFile("excepturi".getBytes(), "nisi");;
                }};;
            }};            

            UploadBlobByIdResponse res = sdk.blobs.uploadBlobById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
