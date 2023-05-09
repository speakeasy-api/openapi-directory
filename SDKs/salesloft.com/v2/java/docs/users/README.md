# users

## Overview

User Management

### Available Operations

* [getV2UsersJson](#getv2usersjson) - List users
* [getV2UsersIdJson](#getv2usersidjson) - Fetch a user
* [putV2UsersIdJson](#putv2usersidjson) - Update a user

## getV2UsersJson

Non Admin: Lists only your user, or all on team depending on group visibility policy
Team Admin: Lists users associated with your team


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2UsersJsonRequest;
import org.openapis.openapi.models.operations.GetV2UsersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2UsersJsonRequest req = new GetV2UsersJsonRequest() {{
                active = false;
                groupId = new String[]{{
                    add("tempora"),
                    add("esse"),
                }};
                guid = new String[]{{
                    add("consectetur"),
                    add("aliquid"),
                }};
                hasCrmUser = false;
                ids = new Long[]{{
                    add(671384L),
                }};
                includePagingCounts = false;
                page = 123844L;
                perPage = 344718L;
                roleId = new String[]{{
                    add("expedita"),
                    add("aliquid"),
                    add("officia"),
                    add("suscipit"),
                }};
                search = "aliquid";
                sortBy = "perferendis";
                sortDirection = "eum";
                visibleOnly = false;
                workCountry = new String[]{{
                    add("iste"),
                    add("id"),
                }};
            }};            

            GetV2UsersJsonResponse res = sdk.users.getV2UsersJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2UsersIdJson

Fetches a user, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2UsersIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2UsersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2UsersIdJsonRequest req = new GetV2UsersIdJsonRequest("ab");            

            GetV2UsersIdJsonResponse res = sdk.users.getV2UsersIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2UsersIdJson

Updates a user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2UsersIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2UsersIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2UsersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2UsersIdJsonRequest req = new PutV2UsersIdJsonRequest("error") {{
                requestBody = new PutV2UsersIdJsonRequestBody() {{
                    active = false;
                    groupId = 822407L;
                    roleId = "voluptates";
                    workCountry = "mollitia";
                }};;
            }};            

            PutV2UsersIdJsonResponse res = sdk.users.putV2UsersIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
