# vectorOperations

## Overview

Endpoints for manipulating vectors

### Available Operations

* [delete](#delete) - Delete
* [describeIndexStats](#describeindexstats) - Describe Index Stats
* [fetch](#fetch) - Fetch
* [query](#query) - Query
* [update](#update) - Fetch
* [upsert](#upsert) - Upsert

## delete

The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.shared.DeleteRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DeleteRequest req = new DeleteRequest() {{
                deleteAll = false;
                filter = new java.util.HashMap<String, Object>() {{
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                    put("quis", "veritatis");
                }};
                ids = new String[]{{
                    add("vector-0"),
                    add("vector-0"),
                    add("vector-0"),
                }};
                namespace = "namespace-0";
            }};            

            DeleteResponse res = sdk.vectorOperations.delete(req);

            if (res.deleteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIndexStats

The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIndexStatsResponse;
import org.openapis.openapi.models.shared.DescribeIndexStatsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DescribeIndexStatsRequest req = new DescribeIndexStatsRequest() {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("repellendus", "sapiente");
                    put("quo", "odit");
                }};
            }};            

            DescribeIndexStatsResponse res = sdk.vectorOperations.describeIndexStats(req);

            if (res.describeIndexStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetch

The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchResponse;
import org.openapis.openapi.models.shared.FetchRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.FetchRequest req = new FetchRequest(                new String[]{{
                                add("vector-0"),
                                add("vector-0"),
                                add("vector-0"),
                                add("vector-0"),
                            }}) {{
                namespace = "namespace-0";
            }};            

            FetchResponse res = sdk.vectorOperations.fetch(req);

            if (res.fetchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## query

The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparseVectorData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.QueryRequest req = new QueryRequest(473608L) {{
                filter = new java.util.HashMap<String, Object>() {{
                    put("quod", "esse");
                    put("totam", "porro");
                    put("dolorum", "dicta");
                    put("nam", "officia");
                }};
                id = "vector-0";
                includeMetadata = false;
                includeValues = false;
                namespace = "namespace-0";
                sparseVector = new SparseVectorData(                new Long[]{{
                                    add(143353L),
                                    add(537373L),
                                    add(944669L),
                                }},                 new Float[]{{
                                    add(5218.48),
                                    add(1059.07),
                                    add(4146.62),
                                    add(4736),
                                }});;
                vector = new Float[]{{
                    add(1863.32),
                    add(7742.34),
                }};
            }};            

            QueryResponse res = sdk.vectorOperations.query(req);

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update

The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparseVectorData;
import org.openapis.openapi.models.shared.UpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UpdateRequest req = new UpdateRequest("esse") {{
                namespace = "namespace-0";
                setMetadata = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "aspernatur");
                }};
                sparseValues = new SparseVectorData(                new Long[]{{
                                    add(324141L),
                                }},                 new Float[]{{
                                    add(1496.75),
                                    add(6120.96),
                                    add(2223.21),
                                }});;
                values = new Float[]{{
                    add(3864.89),
                    add(9437.49),
                    add(9025.99),
                }};
            }};            

            UpdateResponse res = sdk.vectorOperations.update(req);

            if (res.updateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsert

The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SparseVectorData;
import org.openapis.openapi.models.shared.UpsertRequest;
import org.openapis.openapi.models.shared.UpsertVector;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UpsertRequest req = new UpsertRequest(                new org.openapis.openapi.models.shared.UpsertVector[]{{
                                add(new UpsertVector() {{
                                    id = "vector-0";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("iste", "iure");
                                        put("saepe", "quidem");
                                    }};
                                    sparseValues = new SparseVectorData(                new Long[]{{
                                                        add(358152L),
                                                    }},                 new Float[]{{
                                                        add(7506.86),
                                                    }}) {{
                                        indices = new Long[]{{
                                            add(60225L),
                                        }};
                                        values = new Float[]{{
                                            add(6667.67),
                                            add(6531.4),
                                            add(6706.38),
                                            add(1709.09),
                                        }};
                                    }};
                                    values = new Float[]{{
                                        add(6078.31),
                                        add(3637.11),
                                    }};
                                }}),
                                add(new UpsertVector() {{
                                    id = "vector-0";
                                    metadata = new java.util.HashMap<String, Object>() {{
                                        put("excepturi", "accusantium");
                                        put("iure", "culpa");
                                    }};
                                    sparseValues = new SparseVectorData(                new Long[]{{
                                                        add(253291L),
                                                        add(414369L),
                                                        add(466311L),
                                                    }},                 new Float[]{{
                                                        add(2444.25),
                                                        add(6235.1),
                                                    }}) {{
                                        indices = new Long[]{{
                                            add(958950L),
                                            add(102044L),
                                            add(652790L),
                                            add(208876L),
                                        }};
                                        values = new Float[]{{
                                            add(1613.09),
                                            add(9953),
                                            add(6531.08),
                                        }};
                                    }};
                                    values = new Float[]{{
                                        add(3380.07),
                                    }};
                                }}),
                            }}) {{
                namespace = "namespace-0";
            }};            

            UpsertResponse res = sdk.vectorOperations.upsert(req);

            if (res.upsertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
