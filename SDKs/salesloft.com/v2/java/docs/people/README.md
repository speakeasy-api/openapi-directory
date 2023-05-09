# people

## Overview

Person Management

### Available Operations

* [deleteV2PeopleIdJson](#deletev2peopleidjson) - Delete a person
* [getV2PeopleJson](#getv2peoplejson) - List people
* [getV2PeopleIdJson](#getv2peopleidjson) - Fetch a person
* [postV2PeopleJson](#postv2peoplejson) - Create a person
* [putV2PeopleIdJson](#putv2peopleidjson) - Update a person

## deleteV2PeopleIdJson

Deletes a person. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2PeopleIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2PeopleIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2PeopleIdJsonRequest req = new DeleteV2PeopleIdJsonRequest("necessitatibus");            

            DeleteV2PeopleIdJsonResponse res = sdk.people.deleteV2PeopleIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2PeopleJson

Fetches multiple person records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PeopleJsonRequest;
import org.openapis.openapi.models.operations.GetV2PeopleJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PeopleJsonRequest req = new GetV2PeopleJsonRequest() {{
                query = "dolore";
                accountId = new Long[]{{
                    add(992012L),
                }};
                bounced = false;
                cadenceId = new Long[]{{
                    add(249420L),
                }};
                canCall = false;
                canEmail = false;
                canText = false;
                city = new String[]{{
                    add("beatae"),
                }};
                country = new String[]{{
                    add("a"),
                    add("debitis"),
                }};
                createdAt = new java.util.HashMap<String, Object>() {{
                    put("corporis", "harum");
                }};
                crmId = new String[]{{
                    add("ipsa"),
                    add("voluptates"),
                }};
                customFields = new java.util.HashMap<String, Object>() {{
                    put("vitae", "accusamus");
                    put("similique", "tempora");
                    put("aspernatur", "voluptas");
                }};
                doNotContact = false;
                emailAddresses = new String[]{{
                    add("voluptas"),
                    add("minima"),
                }};
                euResident = false;
                ids = new Long[]{{
                    add(680116L),
                    add(237807L),
                    add(795535L),
                }};
                importId = new Long[]{{
                    add(503934L),
                }};
                includePagingCounts = false;
                jobSeniority = new String[]{{
                    add("dolore"),
                    add("aliquam"),
                }};
                lastContacted = new java.util.HashMap<String, Object>() {{
                    put("temporibus", "ullam");
                    put("adipisci", "cum");
                    put("blanditiis", "quas");
                    put("hic", "nesciunt");
                }};
                limitPagingCounts = false;
                locales = new String[]{{
                    add("corrupti"),
                    add("pariatur"),
                    add("totam"),
                }};
                new_ = false;
                ownedByGuid = new String[]{{
                    add("exercitationem"),
                    add("nobis"),
                    add("sit"),
                    add("rerum"),
                }};
                ownerCrmId = new String[]{{
                    add("reiciendis"),
                }};
                ownerId = new Long[]{{
                    add(994401L),
                }};
                ownerIsActive = false;
                page = 707918L;
                perPage = 451822L;
                personStageId = new Long[]{{
                    add(70869L),
                    add(611749L),
                    add(292794L),
                }};
                phoneNumber = false;
                replied = false;
                sortBy = "laborum";
                sortDirection = "sed";
                starredByGuid = new String[]{{
                    add("commodi"),
                    add("quidem"),
                }};
                state = new String[]{{
                    add("voluptas"),
                }};
                success = false;
                tagId = new Long[]{{
                    add(100032L),
                    add(382808L),
                    add(960257L),
                }};
                title = new String[]{{
                    add("illo"),
                    add("reiciendis"),
                    add("perferendis"),
                    add("corrupti"),
                }};
                updatedAt = new String[]{{
                    add("incidunt"),
                    add("sed"),
                    add("provident"),
                    add("eius"),
                }};
            }};            

            GetV2PeopleJsonResponse res = sdk.people.getV2PeopleJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2PeopleIdJson

Fetches a person, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PeopleIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2PeopleIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PeopleIdJsonRequest req = new GetV2PeopleIdJsonRequest("necessitatibus");            

            GetV2PeopleIdJsonResponse res = sdk.people.getV2PeopleIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2PeopleJson

Creates a person. Either email_address or phone/last_name must be provided as a unique lookup
on the team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2PeopleJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2PeopleJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2PeopleJsonRequestBody req = new PostV2PeopleJsonRequestBody() {{
                accountId = 215529L;
                autotagDate = false;
                city = "Korystad";
                contactRestrictions = new String[]{{
                    add("tempora"),
                    add("tempora"),
                    add("voluptate"),
                    add("reiciendis"),
                }};
                country = "India";
                crmId = "sit";
                crmIdType = "non";
                customFields = new java.util.HashMap<String, Object>() {{
                    put("praesentium", "facilis");
                    put("quaerat", "incidunt");
                    put("ipsam", "debitis");
                    put("rem", "sit");
                }};
                doNotContact = false;
                emailAddress = "nobis";
                firstName = "Lisa";
                homePhone = "veniam";
                importId = 329543L;
                jobSeniority = "recusandae";
                lastName = "Wisoky";
                linkedinUrl = "nulla";
                locale = "magni";
                mobilePhone = "aperiam";
                ownerId = 901483L;
                personCompanyIndustry = "numquam";
                personCompanyName = "veniam";
                personCompanyWebsite = "in";
                personStageId = 889234L;
                personalEmailAddress = "beatae";
                personalWebsite = "laudantium";
                phone = "(673) 756-9782 x636";
                phoneExtension = "dolorum";
                secondaryEmailAddress = "corrupti";
                state = "accusamus";
                tags = new String[]{{
                    add("atque"),
                    add("fugit"),
                }};
                title = "Mrs.";
                twitterHandle = "fugiat";
                workCity = "voluptatem";
                workCountry = "culpa";
                workState = "expedita";
            }};            

            PostV2PeopleJsonResponse res = sdk.people.postV2PeopleJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2PeopleIdJson

Updates a person.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2PeopleIdJsonRequest;
import org.openapis.openapi.models.operations.PutV2PeopleIdJsonRequestBody;
import org.openapis.openapi.models.operations.PutV2PeopleIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2PeopleIdJsonRequest req = new PutV2PeopleIdJsonRequest("magnam") {{
                requestBody = new PutV2PeopleIdJsonRequestBody() {{
                    accountId = 7884L;
                    city = "Gagetown";
                    contactRestrictions = new String[]{{
                        add("quas"),
                        add("repudiandae"),
                        add("corporis"),
                    }};
                    country = "Belize";
                    crmId = "blanditiis";
                    crmIdType = "ex";
                    customFields = new java.util.HashMap<String, Object>() {{
                        put("sit", "vel");
                    }};
                    doNotContact = false;
                    emailAddress = "nostrum";
                    firstName = "Suzanne";
                    homePhone = "error";
                    importId = 8511L;
                    jobSeniority = "incidunt";
                    lastName = "Wisozk";
                    linkedinUrl = "dolorem";
                    locale = "harum";
                    mobilePhone = "dicta";
                    ownerId = 99416L;
                    personCompanyIndustry = "occaecati";
                    personCompanyName = "labore";
                    personCompanyWebsite = "quidem";
                    personStageId = 539074L;
                    personalEmailAddress = "laborum";
                    personalWebsite = "nam";
                    phone = "502.746.9589 x90664";
                    phoneExtension = "facere";
                    secondaryEmailAddress = "fuga";
                    state = "praesentium";
                    tags = new String[]{{
                        add("veniam"),
                        add("voluptatem"),
                        add("quisquam"),
                    }};
                    title = "Dr.";
                    twitterHandle = "quasi";
                    workCity = "atque";
                    workCountry = "reprehenderit";
                    workState = "asperiores";
                }};;
            }};            

            PutV2PeopleIdJsonResponse res = sdk.people.putV2PeopleIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
