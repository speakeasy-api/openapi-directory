# payLine

### Available Operations

* [getAllPayLineTags](#getallpaylinetags) - Get all pay line tags
* [getPayLineFromEmployee](#getpaylinefromemployee) - Gets the specified pay line from the employee
* [getPayLinesFromEmployee](#getpaylinesfromemployee) - Gets the pay lines from the specified employee
* [getPayLinesFromPayRun](#getpaylinesfrompayrun) - Gets the pay lines from the specified pay run
* [getPayLinesWithTag](#getpaylineswithtag) - Get pay lines with tag

## getAllPayLineTags

Gets all the pay line tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPayLineTagsRequest;
import org.openapis.openapi.models.operations.GetAllPayLineTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPayLineTagsRequest req = new GetAllPayLineTagsRequest("praesentium", "odit", "explicabo", "corporis");            

            GetAllPayLineTagsResponse res = sdk.payLine.getAllPayLineTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayLineFromEmployee

Returns the specified pay line from employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayLineFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetPayLineFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayLineFromEmployeeRequest req = new GetPayLineFromEmployeeRequest("error", "earum", "adipisci", "recusandae", "similique");            

            GetPayLineFromEmployeeResponse res = sdk.payLine.getPayLineFromEmployee(req);

            if (res.payLine != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayLinesFromEmployee

Get links to all pay lines for the specified employee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayLinesFromEmployeeRequest;
import org.openapis.openapi.models.operations.GetPayLinesFromEmployeeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayLinesFromEmployeeRequest req = new GetPayLinesFromEmployeeRequest("ut", "quidem", "quis", "beatae");            

            GetPayLinesFromEmployeeResponse res = sdk.payLine.getPayLinesFromEmployee(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayLinesFromPayRun

Get links to all pay lines for the specified pay run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayLinesFromPayRunRequest;
import org.openapis.openapi.models.operations.GetPayLinesFromPayRunResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayLinesFromPayRunRequest req = new GetPayLinesFromPayRunRequest("unde", "molestiae", "delectus", "cupiditate", "fugit");            

            GetPayLinesFromPayRunResponse res = sdk.payLine.getPayLinesFromPayRun(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayLinesWithTag

Gets the pay line with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayLinesWithTagRequest;
import org.openapis.openapi.models.operations.GetPayLinesWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayLinesWithTagRequest req = new GetPayLinesWithTagRequest("numquam", "numquam", "nesciunt", "at", "officia");            

            GetPayLinesWithTagResponse res = sdk.payLine.getPayLinesWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
