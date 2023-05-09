# queryAPI

## Overview

Posting queries to OPA

### Available Operations

* [getQuery](#getquery) - Execute an ad-hoc query (simple)
* [postQuery](#postquery) - Execute an ad-hoc query (complex)
* [postSimpleQuery](#postsimplequery) - Execute a simple query

## getQuery

This API endpoint returns bindings for the variables in the query.

For more complex JSON queries, use `POST /v1/query` instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryRequest;
import org.openapis.openapi.models.operations.GetQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQueryRequest req = new GetQueryRequest("qui") {{
                explain = "impedit";
                metrics = false;
                pretty = false;
            }};            

            GetQueryResponse res = sdk.queryAPI.getQuery(req);

            if (res.getQuery200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuery

This API endpoint returns bindings for the variables in the query.

For simpler JSON queries, you may use `GET /v1/query` instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQueryRequest;
import org.openapis.openapi.models.operations.PostQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQueryRequest req = new PostQueryRequest("cum".getBytes()) {{
                explain = "esse";
                metrics = false;
                pretty = false;
            }};            

            PostQueryResponse res = sdk.queryAPI.postQuery(req);

            if (res.postQuery200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSimpleQuery

This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:

  ```yaml
  package system
  main = msg {
    msg := sprintf("hello, %v", input.user)
  }
  ```

The server will return a *not found* (404) response if */data/system/main* is undefined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSimpleQueryRequest;
import org.openapis.openapi.models.operations.PostSimpleQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSimpleQueryRequest req = new PostSimpleQueryRequest(                new java.util.HashMap<String, Object>() {{
                                put("excepturi", "aspernatur");
                            }}) {{
                pretty = false;
            }};            

            PostSimpleQueryResponse res = sdk.queryAPI.postSimpleQuery(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
