# ontolIdentifier

## Overview

Retrieve IDs for labels

### Available Operations

* [getOntolIdentifierResource](#getontolidentifierresource) - Fetches a map from CURIEs/IDs to labels
* [postOntolIdentifierResource](#postontolidentifierresource) - Fetches a map from CURIEs/IDs to labels

## getOntolIdentifierResource

Fetches a map from CURIEs/IDs to labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntolIdentifierResourceRequest;
import org.openapis.openapi.models.operations.GetOntolIdentifierResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntolIdentifierResourceRequest req = new GetOntolIdentifierResourceRequest(                new String[]{{
                                add("quis"),
                                add("sint"),
                                add("accusamus"),
                            }});            

            GetOntolIdentifierResourceResponse res = sdk.ontolIdentifier.getOntolIdentifierResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOntolIdentifierResource

Takes 'label' list argument either as a querystring argument or as a key
in the POST body when content-type is application/json.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOntolIdentifierResourceRequest;
import org.openapis.openapi.models.operations.PostOntolIdentifierResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOntolIdentifierResourceRequest req = new PostOntolIdentifierResourceRequest(                new String[]{{
                                add("hic"),
                                add("necessitatibus"),
                                add("asperiores"),
                                add("ex"),
                            }});            

            PostOntolIdentifierResourceResponse res = sdk.ontolIdentifier.postOntolIdentifierResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
