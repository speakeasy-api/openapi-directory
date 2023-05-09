# records

### Available Operations

* [getRecord](#getrecord)
* [getRecords](#getrecords)

## getRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecordRequest;
import org.openapis.openapi.models.operations.GetRecordResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRecordRequest req = new GetRecordRequest("maxime", "deleniti", "facilis") {{
                ifMatch = "in";
                ifNoneMatch = "architecto";
                fields = new String[]{{
                    add("repudiandae"),
                }};
            }};            

            GetRecordResponse res = sdk.records.getRecord(req);

            if (res.objectSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecords

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecordsRequest;
import org.openapis.openapi.models.operations.GetRecordsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRecordsRequest req = new GetRecordsRequest("ullam", "expedita") {{
                ifMatch = "nihil";
                ifNoneMatch = "repellat";
                before = 841140L;
                fields = new String[]{{
                    add("saepe"),
                }};
                limit = 868126L;
                since = 37559L;
                sort = new String[]{{
                    add("praesentium"),
                }};
                to = 615560L;
                token = "magni";
                id = "1cddc692-601f-4b57-ab0d-5f0d30c5fbb2";
                lastModified = 339404L;
            }};            

            GetRecordsResponse res = sdk.records.getRecords(req);

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
