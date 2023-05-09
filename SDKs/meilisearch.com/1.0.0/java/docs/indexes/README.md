# indexes

### Available Operations

* [createIndexWithPrimaryKey](#createindexwithprimarykey) - Create index with primary key
* [deleteAnIndex](#deleteanindex) - Delete an index
* [getIndexes](#getindexes) - Get indexes
* [showIndex](#showindex) - Show index
* [swapIndexes](#swapindexes) - Swap indexes
* [updateIndex](#updateindex) - Update index

## createIndexWithPrimaryKey

Create index with primary key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIndexWithPrimaryKeyRequestBody;
import org.openapis.openapi.models.operations.CreateIndexWithPrimaryKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIndexWithPrimaryKeyRequestBody req = new CreateIndexWithPrimaryKeyRequestBody() {{
                primaryKey = "number";
                uid = "books";
            }};            

            CreateIndexWithPrimaryKeyResponse res = sdk.indexes.createIndexWithPrimaryKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnIndex

Delete an index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAnIndexResponse res = sdk.indexes.deleteAnIndex();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndexes

Get indexes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndexesRequest;
import org.openapis.openapi.models.operations.GetIndexesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndexesRequest req = new GetIndexesRequest() {{
                limit = "2";
                offset = "0";
            }};            

            GetIndexesResponse res = sdk.indexes.getIndexes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## showIndex

Show index

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShowIndexResponse res = sdk.indexes.showIndex();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## swapIndexes

Swap indexes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SwapIndexesRequestBody;
import org.openapis.openapi.models.operations.SwapIndexesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.operations.SwapIndexesRequestBody[]{{
                add(new SwapIndexesRequestBody() {{
                    indexes = new String[]{{
                        add("books"),
                        add("books"),
                        add("books"),
                    }};
                }}),
                add(new SwapIndexesRequestBody() {{
                    indexes = new String[]{{
                        add("books"),
                        add("books"),
                        add("books"),
                        add("books"),
                    }};
                }}),
                add(new SwapIndexesRequestBody() {{
                    indexes = new String[]{{
                        add("books"),
                        add("books"),
                    }};
                }}),
                add(new SwapIndexesRequestBody() {{
                    indexes = new String[]{{
                        add("books"),
                        add("books"),
                        add("books"),
                    }};
                }}),
            }}            

            SwapIndexesResponse res = sdk.indexes.swapIndexes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIndex

Can only change the document identifier if it has not already been added before.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIndexRequestBody;
import org.openapis.openapi.models.operations.UpdateIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIndexRequestBody req = new UpdateIndexRequestBody() {{
                primaryKey = "title";
            }};            

            UpdateIndexResponse res = sdk.indexes.updateIndex(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
