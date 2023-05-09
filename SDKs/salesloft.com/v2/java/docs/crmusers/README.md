# crmUsers

## Overview

Crm Users

### Available Operations

* [getV2CrmUsersJson](#getv2crmusersjson) - List crm users

## getV2CrmUsersJson

Crm Users


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CrmUsersJsonRequest;
import org.openapis.openapi.models.operations.GetV2CrmUsersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CrmUsersJsonRequest req = new GetV2CrmUsersJsonRequest() {{
                crmId = new String[]{{
                    add("provident"),
                }};
                ids = new Long[]{{
                    add(476477L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 301598L;
                perPage = 487935L;
                sortBy = "eius";
                sortDirection = "esse";
                userGuid = new String[]{{
                    add("rem"),
                    add("fuga"),
                }};
                userId = new Long[]{{
                    add(695626L),
                    add(852635L),
                }};
            }};            

            GetV2CrmUsersJsonResponse res = sdk.crmUsers.getV2CrmUsersJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
