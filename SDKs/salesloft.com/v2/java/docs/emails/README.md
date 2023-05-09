# emails

## Overview

Email Management

### Available Operations

* [getV2ActivitiesEmailsJson](#getv2activitiesemailsjson) - List emails
* [getV2ActivitiesEmailsIdJson](#getv2activitiesemailsidjson) - Fetch an email

## getV2ActivitiesEmailsJson

Fetches multiple email records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActivitiesEmailsJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActivitiesEmailsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActivitiesEmailsJsonRequest req = new GetV2ActivitiesEmailsJsonRequest() {{
                actionId = new Long[]{{
                    add(128860L),
                    add(325685L),
                    add(392676L),
                }};
                bounced = false;
                cadenceId = new Long[]{{
                    add(956406L),
                }};
                crmActivityId = new Long[]{{
                    add(187131L),
                }};
                emailAddresses = new String[]{{
                    add("saepe"),
                }};
                ids = new Long[]{{
                    add(543806L),
                    add(92260L),
                    add(456911L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                oneOff = false;
                page = 910545L;
                perPage = 882042L;
                personId = new Long[]{{
                    add(458604L),
                }};
                personalization = new String[]{{
                    add("nam"),
                    add("vero"),
                    add("aliquid"),
                    add("quasi"),
                }};
                scopedFields = new String[]{{
                    add("vel"),
                    add("harum"),
                    add("molestiae"),
                    add("rerum"),
                }};
                sentAt = new String[]{{
                    add("minima"),
                    add("distinctio"),
                    add("eligendi"),
                }};
                sortBy = "sit";
                sortDirection = "culpa";
                status = new String[]{{
                    add("adipisci"),
                    add("cumque"),
                    add("consequuntur"),
                }};
                stepId = new Long[]{{
                    add(796392L),
                }};
                updatedAt = new String[]{{
                    add("sapiente"),
                    add("consectetur"),
                }};
                userId = new Long[]{{
                    add(503427L),
                    add(590984L),
                }};
            }};            

            GetV2ActivitiesEmailsJsonResponse res = sdk.emails.getV2ActivitiesEmailsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ActivitiesEmailsIdJson

Fetches an email, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActivitiesEmailsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActivitiesEmailsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActivitiesEmailsIdJsonRequest req = new GetV2ActivitiesEmailsIdJsonRequest("a");            

            GetV2ActivitiesEmailsIdJsonResponse res = sdk.emails.getV2ActivitiesEmailsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
