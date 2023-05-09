# notes

## Overview

Note Management

### Available Operations

* [deleteV2NotesIdJson](#deletev2notesidjson) - Delete a note
* [getV2NotesJson](#getv2notesjson) - List notes
* [getV2NotesIdJson](#getv2notesidjson) - Fetch a note
* [postV2NotesJson](#postv2notesjson) - Create a note
* [putV2NotesIdJson](#putv2notesidjson) - Update a note

## deleteV2NotesIdJson

Deletes a note owned by authorized account.
This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2NotesIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2NotesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2NotesIdJsonRequest req = new DeleteV2NotesIdJsonRequest("recusandae");            

            DeleteV2NotesIdJsonResponse res = sdk.notes.deleteV2NotesIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2NotesJson

Fetches multiple note records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2NotesJsonRequest;
import org.openapis.openapi.models.operations.GetV2NotesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2NotesJsonRequest req = new GetV2NotesJsonRequest() {{
                associatedWithId = 517309L;
                associatedWithType = "fugiat";
                ids = new Long[]{{
                    add(497678L),
                    add(554688L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 427834L;
                perPage = 287051L;
                sortBy = "possimus";
                sortDirection = "facilis";
                updatedAt = new String[]{{
                    add("commodi"),
                    add("in"),
                    add("corporis"),
                }};
            }};            

            GetV2NotesJsonResponse res = sdk.notes.getV2NotesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2NotesIdJson

Fetches a note, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2NotesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2NotesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2NotesIdJsonRequest req = new GetV2NotesIdJsonRequest("reiciendis");            

            GetV2NotesIdJsonResponse res = sdk.notes.getV2NotesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2NotesJson

Creates a note.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2NotesJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2NotesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2NotesJsonRequestBody req = new PostV2NotesJsonRequestBody(828657L, "nemo", "recusandae") {{
                callId = 397533L;
                skipCrmSync = false;
                subject = "aperiam";
                userGuid = "cum";
            }};            

            PostV2NotesJsonResponse res = sdk.notes.postV2NotesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2NotesIdJson

Updates a note. Any changes to the note or associated records will not reflect in your CRM.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2NotesIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2NotesIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2NotesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2NotesIdJsonRequest req = new PutV2NotesIdJsonRequest(                new PutV2NotesIdJsonRequestBody("consectetur") {{
                                callId = 449083L;
                            }};, "exercitationem");            

            PutV2NotesIdJsonResponse res = sdk.notes.putV2NotesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
