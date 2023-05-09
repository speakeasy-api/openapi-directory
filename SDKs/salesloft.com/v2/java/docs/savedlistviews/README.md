# savedListViews

## Overview

Saved List Views

### Available Operations

* [deleteV2SavedListViewsIdJson](#deletev2savedlistviewsidjson) - Delete a saved list view
* [getV2SavedListViewsJson](#getv2savedlistviewsjson) - List saved list views
* [getV2SavedListViewsIdJson](#getv2savedlistviewsidjson) - Fetch a saved list view
* [postV2SavedListViewsJson](#postv2savedlistviewsjson) - Create a saved list view
* [putV2SavedListViewsIdJson](#putv2savedlistviewsidjson) - Update a saved list view

## deleteV2SavedListViewsIdJson

Deletes a saved list view. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2SavedListViewsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2SavedListViewsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2SavedListViewsIdJsonRequest req = new DeleteV2SavedListViewsIdJsonRequest("alias");            

            DeleteV2SavedListViewsIdJsonResponse res = sdk.savedListViews.deleteV2SavedListViewsIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2SavedListViewsJson

Fetches multiple saved list view records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2SavedListViewsJsonRequest;
import org.openapis.openapi.models.operations.GetV2SavedListViewsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2SavedListViewsJsonRequest req = new GetV2SavedListViewsJsonRequest() {{
                ids = new Long[]{{
                    add(970222L),
                    add(174658L),
                    add(663866L),
                    add(327988L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 293144L;
                perPage = 680349L;
                sortBy = "nesciunt";
                sortDirection = "quae";
                view = "recusandae";
            }};            

            GetV2SavedListViewsJsonResponse res = sdk.savedListViews.getV2SavedListViewsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2SavedListViewsIdJson

Fetches a saved list view, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2SavedListViewsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2SavedListViewsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2SavedListViewsIdJsonRequest req = new GetV2SavedListViewsIdJsonRequest("omnis");            

            GetV2SavedListViewsIdJsonResponse res = sdk.savedListViews.getV2SavedListViewsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2SavedListViewsJson

Creates a saved list view.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2SavedListViewsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2SavedListViewsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2SavedListViewsJsonRequestBody req = new PostV2SavedListViewsJsonRequestBody("quaerat", "molestiae") {{
                isDefault = false;
                viewParams = "ex";
            }};            

            PostV2SavedListViewsJsonResponse res = sdk.savedListViews.postV2SavedListViewsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2SavedListViewsIdJson

Updates a saved list view.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2SavedListViewsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2SavedListViewsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2SavedListViewsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2SavedListViewsIdJsonRequest req = new PutV2SavedListViewsIdJsonRequest("ut") {{
                requestBody = new PutV2SavedListViewsIdJsonRequestBody() {{
                    isDefault = false;
                    name = "Jeff Toy";
                    viewParams = "nemo";
                }};;
            }};            

            PutV2SavedListViewsIdJsonResponse res = sdk.savedListViews.putV2SavedListViewsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
