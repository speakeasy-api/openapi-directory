# accounts

## Overview

Account Management

### Available Operations

* [deleteV2AccountsIdJson](#deletev2accountsidjson) - Delete an account
* [getV2AccountsJson](#getv2accountsjson) - List accounts
* [getV2AccountsIdJson](#getv2accountsidjson) - Fetch an account
* [postV2AccountsJson](#postv2accountsjson) - Create an account
* [putV2AccountsIdJson](#putv2accountsidjson) - Update an existing Account

## deleteV2AccountsIdJson

Deletes an account. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.

Deleting an account will remove all connected people from that account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2AccountsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2AccountsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2AccountsIdJsonRequest req = new DeleteV2AccountsIdJsonRequest("consequuntur");            

            DeleteV2AccountsIdJsonResponse res = sdk.accounts.deleteV2AccountsIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccountsJson

Fetches multiple account records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountsJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountsJsonRequest req = new GetV2AccountsJsonRequest() {{
                accountStageId = new Long[]{{
                    add(653108L),
                    add(581850L),
                    add(253291L),
                    add(414369L),
                }};
                accountTierId = new Long[]{{
                    add(474697L),
                    add(244425L),
                }};
                archived = false;
                city = new String[]{{
                    add("quia"),
                    add("quis"),
                    add("vitae"),
                }};
                country = new String[]{{
                    add("animi"),
                    add("enim"),
                    add("odit"),
                }};
                createdAt = new String[]{{
                    add("sequi"),
                    add("tenetur"),
                    add("ipsam"),
                    add("id"),
                }};
                crmId = new String[]{{
                    add("aut"),
                    add("quasi"),
                    add("error"),
                    add("temporibus"),
                }};
                customFields = new java.util.HashMap<String, Object>() {{
                    put("quasi", "reiciendis");
                    put("voluptatibus", "vero");
                    put("nihil", "praesentium");
                }};
                domain = "voluptatibus";
                ids = new Long[]{{
                    add(604846L),
                }};
                includePagingCounts = false;
                industry = new String[]{{
                    add("cum"),
                    add("perferendis"),
                }};
                lastContacted = new java.util.HashMap<String, Object>() {{
                    put("reprehenderit", "ut");
                }};
                limitPagingCounts = false;
                locales = new String[]{{
                    add("dicta"),
                    add("corporis"),
                    add("dolore"),
                    add("iusto"),
                }};
                name = new String[]{{
                    add("harum"),
                }};
                ownerCrmId = new String[]{{
                    add("accusamus"),
                    add("commodi"),
                }};
                ownerId = new String[]{{
                    add("quae"),
                    add("ipsum"),
                    add("quidem"),
                    add("molestias"),
                }};
                ownerIsActive = false;
                page = 566602L;
                perPage = 865103L;
                sortBy = "modi";
                sortDirection = "praesentium";
                state = new String[]{{
                    add("voluptates"),
                    add("quasi"),
                    add("repudiandae"),
                }};
                tag = new String[]{{
                    add("veritatis"),
                    add("itaque"),
                    add("incidunt"),
                }};
                tagId = new Long[]{{
                    add(9356L),
                    add(667411L),
                }};
                updatedAt = new String[]{{
                    add("explicabo"),
                    add("deserunt"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                userRelationships = new java.util.HashMap<String, Object>() {{
                    put("modi", "qui");
                    put("aliquid", "cupiditate");
                }};
                website = new String[]{{
                    add("perferendis"),
                    add("magni"),
                    add("assumenda"),
                }};
            }};            

            GetV2AccountsJsonResponse res = sdk.accounts.getV2AccountsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccountsIdJson

Fetches an account, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountsIdJsonRequest req = new GetV2AccountsIdJsonRequest("ipsam");            

            GetV2AccountsIdJsonResponse res = sdk.accounts.getV2AccountsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2AccountsJson

Creates an account.

"domain" must be unique on the current team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2AccountsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2AccountsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2AccountsJsonRequestBody req = new PostV2AccountsJsonRequestBody("alias", "fugit") {{
                accountTierId = 677817L;
                city = "Dominiquecester";
                companyStageId = 735194L;
                companyType = "labore";
                conversationalName = "delectus";
                country = "Italy";
                crmId = "non";
                crmIdType = "eligendi";
                customFields = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("provident", "necessitatibus");
                        put("sint", "officia");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("debitis", "a");
                    }}),
                    add(new java.util.HashMap<String, Object>() {{
                        put("in", "in");
                        put("illum", "maiores");
                        put("rerum", "dicta");
                    }}),
                }};
                description = "magnam";
                doNotContact = false;
                founded = "cumque";
                industry = "facere";
                linkedinUrl = "ea";
                locale = "aliquid";
                ownerId = 675439L;
                phone = "1-353-996-5765 x59263";
                postalCode = "66404";
                revenueRange = "magnam";
                size = "distinctio";
                state = "id";
                street = "23674 Collins Common";
                tags = new String[]{{
                    add("et"),
                    add("excepturi"),
                }};
                twitterHandle = "ullam";
                website = "provident";
            }};            

            PostV2AccountsJsonResponse res = sdk.accounts.postV2AccountsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2AccountsIdJson

Updates an account.

"domain" must be unique on the current team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2AccountsIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2AccountsIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2AccountsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2AccountsIdJsonRequest req = new PutV2AccountsIdJsonRequest(                new PutV2AccountsIdJsonRequestBody("quos", "sint") {{
                                accountTierId = 33625L;
                                archived = false;
                                city = "Wisozkfurt";
                                companyStageId = 320997L;
                                companyType = "eum";
                                conversationalName = "dolor";
                                country = "Tokelau";
                                crmId = "odit";
                                crmIdType = "nemo";
                                customFields = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("doloribus", "debitis");
                                        put("eius", "maxime");
                                    }}),
                                }};
                                description = "deleniti";
                                doNotContact = false;
                                founded = "facilis";
                                industry = "in";
                                linkedinUrl = "architecto";
                                locale = "architecto";
                                ownerId = 919483L;
                                phone = "(749) 819-8015 x611";
                                postalCode = "88845-1400";
                                revenueRange = "maiores";
                                size = "quidem";
                                state = "ipsam";
                                street = "4708 Wendy Bridge";
                                tags = new String[]{{
                                    add("amet"),
                                    add("aut"),
                                    add("cumque"),
                                    add("corporis"),
                                }};
                                twitterHandle = "hic";
                                website = "libero";
                            }};, "nobis");            

            PutV2AccountsIdJsonResponse res = sdk.accounts.putV2AccountsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
