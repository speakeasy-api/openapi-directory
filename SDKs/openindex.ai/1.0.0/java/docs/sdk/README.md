# SDK

## Overview

A retrieval API for querying and filtering documents based on natural language queries and metadata

### Available Operations

* [queryQueryPost](#queryquerypost) - Query

## queryQueryPost

Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryQueryPostResponse;
import org.openapis.openapi.models.operations.QueryQueryPostSecurity;
import org.openapis.openapi.models.shared.DocumentMetadataFilter;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.SourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.QueryRequest req = new QueryRequest(                new org.openapis.openapi.models.shared.Query[]{{
                                add(new Query("sed") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "totam";
                                        collectionId = "beatae";
                                        documentId = "commodi";
                                        endDate = "molestiae";
                                        keywords = new String[]{{
                                            add("qui"),
                                            add("impedit"),
                                        }};
                                        language = "cum";
                                        source = SourceEnum.WEB;
                                        sourceId = "ipsum";
                                        startDate = "excepturi";
                                        timePeriod = "aspernatur";
                                        userId = "perferendis";
                                    }};
                                    query = "ad";
                                    topK = 617636L;
                                }}),
                                add(new Query("mollitia") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "iste";
                                        collectionId = "dolor";
                                        documentId = "natus";
                                        endDate = "laboriosam";
                                        keywords = new String[]{{
                                            add("saepe"),
                                            add("fuga"),
                                            add("in"),
                                            add("corporis"),
                                        }};
                                        language = "iste";
                                        source = SourceEnum.WEB;
                                        sourceId = "saepe";
                                        startDate = "quidem";
                                        timePeriod = "architecto";
                                        userId = "ipsa";
                                    }};
                                    query = "reiciendis";
                                    topK = 666767L;
                                }}),
                                add(new Query("doloribus") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "laborum";
                                        collectionId = "dolores";
                                        documentId = "dolorem";
                                        endDate = "corporis";
                                        keywords = new String[]{{
                                            add("nobis"),
                                        }};
                                        language = "enim";
                                        source = SourceEnum.FILE;
                                        sourceId = "nemo";
                                        startDate = "minima";
                                        timePeriod = "excepturi";
                                        userId = "accusantium";
                                    }};
                                    query = "iure";
                                    topK = 634274L;
                                }}),
                                add(new Query("quis") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "sapiente";
                                        collectionId = "architecto";
                                        documentId = "mollitia";
                                        endDate = "dolorem";
                                        keywords = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                        language = "occaecati";
                                        source = SourceEnum.WEB;
                                        sourceId = "commodi";
                                        startDate = "quam";
                                        timePeriod = "molestiae";
                                        userId = "velit";
                                    }};
                                    query = "error";
                                    topK = 158969L;
                                }}),
                            }}) {{
                namespace = "vitae";
            }};            

            QueryQueryPostResponse res = sdk.sdk.queryQueryPost(req, new QueryQueryPostSecurity("laborum") {{
                httpBearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
