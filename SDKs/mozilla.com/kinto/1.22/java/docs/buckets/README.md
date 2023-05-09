# buckets

### Available Operations

* [getBucket](#getbucket)
* [getBuckets](#getbuckets)

## getBucket

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketRequest;
import org.openapis.openapi.models.operations.GetBucketResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBucketRequest req = new GetBucketRequest("sed") {{
                ifMatch = "iste";
                ifNoneMatch = "dolor";
                fields = new String[]{{
                    add("laboriosam"),
                    add("hic"),
                    add("saepe"),
                }};
            }};            

            GetBucketResponse res = sdk.buckets.getBucket(req);

            if (res.objectSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBuckets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketsRequest;
import org.openapis.openapi.models.operations.GetBucketsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBucketsRequest req = new GetBucketsRequest() {{
                ifMatch = "fuga";
                ifNoneMatch = "in";
                before = 359508L;
                fields = new String[]{{
                    add("iure"),
                    add("saepe"),
                    add("quidem"),
                }};
                limit = 99280L;
                since = 60225L;
                sort = new String[]{{
                    add("est"),
                    add("mollitia"),
                    add("laborum"),
                    add("dolores"),
                }};
                to = 210382L;
                token = "corporis";
                id = "2c595590-7aff-41a3-a2fa-9467739251aa";
                lastModified = 317202L;
            }};            

            GetBucketsResponse res = sdk.buckets.getBuckets(req);

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
