# teamTemplates

## Overview

Team Template Management

### Available Operations

* [getV2TeamTemplatesJson](#getv2teamtemplatesjson) - List team templates
* [getV2TeamTemplatesIdJson](#getv2teamtemplatesidjson) - Fetch a team template

## getV2TeamTemplatesJson

Fetches multiple team template records. The records can be filtered, paged, and sorted according to
the respective parameters.

Team templates are templates that are available team-wide. Admins may use
team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,
and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TeamTemplatesJsonRequest;
import org.openapis.openapi.models.operations.GetV2TeamTemplatesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TeamTemplatesJsonRequest req = new GetV2TeamTemplatesJsonRequest() {{
                ids = new String[]{{
                    add("doloribus"),
                }};
                includeArchivedTemplates = false;
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 859581L;
                perPage = 896582L;
                search = "ipsa";
                sortBy = "tempora";
                sortDirection = "nihil";
                tag = new String[]{{
                    add("dicta"),
                    add("iusto"),
                }};
                tagIds = new Long[]{{
                    add(508390L),
                    add(979963L),
                }};
                updatedAt = new String[]{{
                    add("vel"),
                    add("architecto"),
                    add("fugiat"),
                    add("doloremque"),
                }};
            }};            

            GetV2TeamTemplatesJsonResponse res = sdk.teamTemplates.getV2TeamTemplatesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2TeamTemplatesIdJson

Fetches a team template, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2TeamTemplatesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2TeamTemplatesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2TeamTemplatesIdJsonRequest req = new GetV2TeamTemplatesIdJsonRequest("dicta") {{
                includeSignature = false;
            }};            

            GetV2TeamTemplatesIdJsonResponse res = sdk.teamTemplates.getV2TeamTemplatesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
