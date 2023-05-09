# kvpairs

## Overview

The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `blobs` resource.


### Available Operations

* [addKvPairs](#addkvpairs) - Create key-value pair
* [deleteKvPair](#deletekvpair) - Delete key-value pair
* [getKvPairs](#getkvpairs) - Get all key-value pairs
* [getKvPairsById](#getkvpairsbyid) - Get key-value pair
* [updateKvPair](#updatekvpair) - Update existing Key-value pair

## addKvPairs

Create key-value pair

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddKvPairsResponse;
import org.openapis.openapi.models.shared.KeyValuePairInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.KeyValuePairInput req = new KeyValuePairInput() {{
                kvKey = "foo";
                kvValue = "laborum";
            }};            

            AddKvPairsResponse res = sdk.kvpairs.addKvPairs(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKvPair

Delete key-value pair

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKvPairRequest;
import org.openapis.openapi.models.operations.DeleteKvPairResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteKvPairRequest req = new DeleteKvPairRequest("animi");            

            DeleteKvPairResponse res = sdk.kvpairs.deleteKvPair(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKvPairs

Get all key-value pairs

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKvPairsRequest;
import org.openapis.openapi.models.operations.GetKvPairsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKvPairsRequest req = new GetKvPairsRequest() {{
                after = OffsetDateTime.parse("2022-11-11T13:31:01.643Z");
                afterId = "quo";
                before = "sequi";
                beforeId = "tenetur";
                from = "ipsam";
                fromId = "id";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                kvKey = "possimus";
                limit = 13571L;
                populate = "quasi";
                resultsOnly = false;
                select = "error";
                sort = "temporibus";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 6736.6;
                until = "quasi";
                untilId = "reiciendis";
            }};            

            GetKvPairsResponse res = sdk.kvpairs.getKvPairs(req);

            if (res.getKvPairs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKvPairsById

Get key-value pair

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKvPairsByIdRequest;
import org.openapis.openapi.models.operations.GetKvPairsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetKvPairsByIdRequest req = new GetKvPairsByIdRequest("voluptatibus");            

            GetKvPairsByIdResponse res = sdk.kvpairs.getKvPairsById(req);

            if (res.keyValuePair != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKvPair

Update existing Key-value pair

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKvPairRequest;
import org.openapis.openapi.models.operations.UpdateKvPairResponse;
import org.openapis.openapi.models.shared.KeyValuePairUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateKvPairRequest req = new UpdateKvPairRequest(                new KeyValuePairUpdate() {{
                                kvValue = "vero";
                            }};, "nihil");            

            UpdateKvPairResponse res = sdk.kvpairs.updateKvPair(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
