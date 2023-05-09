# accountTiers

## Overview

Account Tier Information

### Available Operations

* [getV2AccountTiersJson](#getv2accounttiersjson) - List Account Tiers
* [getV2AccountTiersIdJson](#getv2accounttiersidjson) - Fetch an account tier

## getV2AccountTiersJson

Fetches multiple account tier records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountTiersJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountTiersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountTiersJsonRequest req = new GetV2AccountTiersJsonRequest() {{
                ids = new Long[]{{
                    add(479977L),
                    add(568045L),
                    add(392785L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                name = new String[]{{
                    add("temporibus"),
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                }};
                page = 648172L;
                perPage = 20218L;
                sortBy = "ipsam";
                sortDirection = "repellendus";
            }};            

            GetV2AccountTiersJsonResponse res = sdk.accountTiers.getV2AccountTiersJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccountTiersIdJson

Fetches an account tier, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountTiersIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountTiersIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountTiersIdJsonRequest req = new GetV2AccountTiersIdJsonRequest("sapiente");            

            GetV2AccountTiersIdJsonResponse res = sdk.accountTiers.getV2AccountTiersIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
