# emailTemplates

## Overview

Email Templates Management

### Available Operations

* [getV2EmailTemplatesJson](#getv2emailtemplatesjson) - List email templates
* [getV2EmailTemplatesIdJson](#getv2emailtemplatesidjson) - Fetch an email template

## getV2EmailTemplatesJson

Fetches multiple email template records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EmailTemplatesJsonRequest;
import org.openapis.openapi.models.operations.GetV2EmailTemplatesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EmailTemplatesJsonRequest req = new GetV2EmailTemplatesJsonRequest() {{
                cadenceId = new Long[]{{
                    add(197054L),
                }};
                filterByOwner = false;
                groupId = new Long[]{{
                    add(459856L),
                    add(925164L),
                    add(44612L),
                    add(715179L),
                }};
                ids = new Long[]{{
                    add(490819L),
                    add(76956L),
                    add(469498L),
                    add(518835L),
                }};
                includeArchivedTemplates = false;
                includeCadenceTemplates = false;
                includePagingCounts = false;
                limitPagingCounts = false;
                linkedToTeamTemplate = false;
                page = 882710L;
                perPage = 306810L;
                search = "odio";
                sortBy = "occaecati";
                sortDirection = "commodi";
                tag = new String[]{{
                    add("dolores"),
                    add("deserunt"),
                    add("molestiae"),
                    add("accusantium"),
                }};
                tagIds = new Long[]{{
                    add(430402L),
                    add(556429L),
                    add(510017L),
                    add(159867L),
                }};
                updatedAt = new String[]{{
                    add("fugit"),
                    add("fuga"),
                    add("mollitia"),
                }};
            }};            

            GetV2EmailTemplatesJsonResponse res = sdk.emailTemplates.getV2EmailTemplatesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2EmailTemplatesIdJson

Fetches an email template, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2EmailTemplatesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2EmailTemplatesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2EmailTemplatesIdJsonRequest req = new GetV2EmailTemplatesIdJsonRequest("incidunt") {{
                includeSignature = false;
            }};            

            GetV2EmailTemplatesIdJsonResponse res = sdk.emailTemplates.getV2EmailTemplatesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
