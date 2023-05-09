# tasks

## Overview

Tasks

### Available Operations

* [getV2TasksJson](#getv2tasksjson) - List tasks
* [getV2TasksIdJson](#getv2tasksidjson) - Fetch a task
* [postV2TasksJson](#postv2tasksjson) - Create a Task
* [putV2TasksIdJson](#putv2tasksidjson) - Update a Task

## getV2TasksJson

Fetches multiple task records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TasksJsonRequest;
import org.openapis.openapi.models.operations.GetV2TasksJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TasksJsonRequest req = new GetV2TasksJsonRequest() {{
                accountId = new Long[]{{
                    add(698249L),
                }};
                currentState = new String[]{{
                    add("quis"),
                    add("inventore"),
                }};
                idempotencyKey = "fugit";
                ids = new Long[]{{
                    add(62636L),
                    add(21688L),
                    add(241901L),
                    add(137251L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                locale = new String[]{{
                    add("eius"),
                    add("rem"),
                }};
                page = 871083L;
                perPage = 773084L;
                personId = new Long[]{{
                    add(958741L),
                }};
                sortBy = "eum";
                sortDirection = "dicta";
                taskType = new String[]{{
                    add("beatae"),
                    add("cupiditate"),
                }};
                timeIntervalFilter = "provident";
                userId = new Long[]{{
                    add(745398L),
                    add(940782L),
                    add(848151L),
                    add(52508L),
                }};
            }};            

            GetV2TasksJsonResponse res = sdk.tasks.getV2TasksJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2TasksIdJson

Fetches a task, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TasksIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2TasksIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TasksIdJsonRequest req = new GetV2TasksIdJsonRequest("earum");            

            GetV2TasksIdJsonResponse res = sdk.tasks.getV2TasksIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2TasksJson

Creates a task.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2TasksJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2TasksJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2TasksJsonRequestBody req = new PostV2TasksJsonRequestBody("perspiciatis", "maiores", "debitis", "aliquid", "porro", 380335L) {{
                description = "dolorem";
                idempotencyKey = "fugit";
                remindAt = "cumque";
            }};            

            PostV2TasksJsonResponse res = sdk.tasks.postV2TasksJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2TasksIdJson

Updates a task.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2TasksIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2TasksIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2TasksIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2TasksIdJsonRequest req = new PutV2TasksIdJsonRequest("fuga") {{
                requestBody = new PutV2TasksIdJsonRequestBody() {{
                    currentState = "ratione";
                    description = "animi";
                    dueDate = "necessitatibus";
                    isLogged = false;
                    remindAt = "nulla";
                    subject = "consequatur";
                }};;
            }};            

            PutV2TasksIdJsonResponse res = sdk.tasks.putV2TasksIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
