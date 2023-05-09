# activities

### Available Operations

* [deleteWorkspaceSlugMembersMemberSlugActivitiesId](#deleteworkspaceslugmembersmemberslugactivitiesid) - Delete a post activity
* [getWorkspaceSlugActivities](#getworkspaceslugactivities) - List activities for a workspace
* [getWorkspaceSlugActivitiesId](#getworkspaceslugactivitiesid) - Get an activity in the workspace
* [getWorkspaceSlugMembersMemberSlugActivities](#getworkspaceslugmembersmemberslugactivities) - List activities for a member
* [getWorkspaceSlugOrganizationsOrganizationIdActivities](#getworkspaceslugorganizationsorganizationidactivities) - List member activities in an organization
* [postWorkspaceSlugActivities](#postworkspaceslugactivities) - Create a Custom or a Content activity for a new or existing member
* [postWorkspaceSlugMembersMemberSlugActivities](#postworkspaceslugmembersmemberslugactivities) - Create a Custom or a Content activity for a member
* [putWorkspaceSlugMembersMemberSlugActivitiesId](#putworkspaceslugmembersmemberslugactivitiesid) - Update a custom activity for a member

## deleteWorkspaceSlugMembersMemberSlugActivitiesId

Delete a post activity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest req = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest("unde", "nulla", "corrupti");            

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse res = sdk.activities.deleteWorkspaceSlugMembersMemberSlugActivitiesId(req, new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity("illum") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceSlugActivities

List activities for a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesActivityTypeEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesAffiliationEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesDirectionEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesIdentityEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesSecurity;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugActivitiesRequest req = new GetWorkspaceSlugActivitiesRequest("vel") {{
                activityType = GetWorkspaceSlugActivitiesActivityTypeEnum.DISCUSSIONS_REPLY;
                affiliation = GetWorkspaceSlugActivitiesAffiliationEnum.TEAMMATE;
                cities = "suscipit";
                company = "iure";
                countries = "magnam";
                direction = GetWorkspaceSlugActivitiesDirectionEnum.DESC;
                endDate = "ipsa";
                identity = GetWorkspaceSlugActivitiesIdentityEnum.DISCORD;
                items = GetWorkspaceSlugActivitiesItemsEnum.TEN;
                memberTags = "suscipit";
                orbit = "molestiae";
                page = "minus";
                regions = "placeat";
                relative = "voluptatum";
                sort = GetWorkspaceSlugActivitiesSortEnum.OCCURRED_AT;
                startDate = "excepturi";
                title = "nisi";
                type = "recusandae";
            }};            

            GetWorkspaceSlugActivitiesResponse res = sdk.activities.getWorkspaceSlugActivities(req, new GetWorkspaceSlugActivitiesSecurity("temporibus") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceSlugActivitiesId

Get an activity in the workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesIdResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugActivitiesIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugActivitiesIdRequest req = new GetWorkspaceSlugActivitiesIdRequest("ab", "quis");            

            GetWorkspaceSlugActivitiesIdResponse res = sdk.activities.getWorkspaceSlugActivitiesId(req, new GetWorkspaceSlugActivitiesIdSecurity("veritatis") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceSlugMembersMemberSlugActivities

List activities for a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesSecurity;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugMembersMemberSlugActivitiesRequest req = new GetWorkspaceSlugMembersMemberSlugActivitiesRequest("deserunt", "perferendis") {{
                activityType = "ipsam";
                direction = GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnum.DESC;
                items = GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnum.ONE_HUNDRED;
                page = "quo";
                sort = GetWorkspaceSlugMembersMemberSlugActivitiesSortEnum.OCCURRED_AT;
                type = "at";
            }};            

            GetWorkspaceSlugMembersMemberSlugActivitiesResponse res = sdk.activities.getWorkspaceSlugMembersMemberSlugActivities(req, new GetWorkspaceSlugMembersMemberSlugActivitiesSecurity("at") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspaceSlugOrganizationsOrganizationIdActivities

List member activities in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest req = new GetWorkspaceSlugOrganizationsOrganizationIdActivitiesRequest("maiores", "molestiae") {{
                activityType = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesActivityTypeEnum.SLACK;
                direction = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesDirectionEnum.DESC;
                items = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesItemsEnum.FIFTY;
                page = "totam";
                sort = GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSortEnum.MEMBER;
            }};            

            GetWorkspaceSlugOrganizationsOrganizationIdActivitiesResponse res = sdk.activities.getWorkspaceSlugOrganizationsOrganizationIdActivities(req, new GetWorkspaceSlugOrganizationsOrganizationIdActivitiesSecurity("dolorum") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWorkspaceSlugActivities

Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugActivitiesRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugActivitiesResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugActivitiesSecurity;
import org.openapis.openapi.models.shared.ActivityAndIdentity;
import org.openapis.openapi.models.shared.ActivityWithMember;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Member;
import org.openapis.openapi.models.shared.PostActivityWithMember;
import org.openapis.openapi.models.shared.PostActivityWithMemberActivityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugActivitiesRequest req = new PostWorkspaceSlugActivitiesRequest("dicta") {{
                activityAndIdentity = new ActivityAndIdentity() {{
                    activity = new PostActivityWithMember(PostActivityWithMemberActivityTypeEnum.CONTENT, "officia") {{
                        member = new Member() {{
                            bio = "occaecati";
                            birthday = "fugit";
                            company = "Welch - Rosenbaum";
                            devto = "totam";
                            email = "Haskell18@gmail.com";
                            github = "impedit";
                            linkedin = "cum";
                            location = "esse";
                            name = "Mrs. Miriam Collier";
                            pronouns = "sed";
                            shippingAddress = "iste";
                            slug = "dolor";
                            tagList = "natus";
                            tags = "laboriosam";
                            tagsToAdd = "hic";
                            teammate = false;
                            title = "Dr.";
                            tshirt = "fuga";
                            twitter = "in";
                            url = "corporis";
                        }};;
                        occurredAt = "iste";
                    }};;
                    identity = new Identity("iure") {{
                        email = "Maxie96@hotmail.com";
                        name = "Shaun Osinski";
                        sourceHost = "corporis";
                        uid = "explicabo";
                        url = "nobis";
                        username = "Emerald.Mohr";
                    }};;
                }};;
            }};            

            PostWorkspaceSlugActivitiesResponse res = sdk.activities.postWorkspaceSlugActivities(req, new PostWorkspaceSlugActivitiesSecurity("excepturi") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWorkspaceSlugMembersMemberSlugActivities

Create a Custom or a Content activity for a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugActivitiesRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugActivitiesResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugActivitiesSecurity;
import org.openapis.openapi.models.shared.Activity;
import org.openapis.openapi.models.shared.PostActivity;
import org.openapis.openapi.models.shared.PostActivityActivityTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugMembersMemberSlugActivitiesRequest req = new PostWorkspaceSlugMembersMemberSlugActivitiesRequest("accusantium", "iure") {{
                requestBody = new PostActivity(PostActivityActivityTypeEnum.CONTENT, "doloribus") {{
                    occurredAt = "sapiente";
                }};;
            }};            

            PostWorkspaceSlugMembersMemberSlugActivitiesResponse res = sdk.activities.postWorkspaceSlugMembersMemberSlugActivities(req, new PostWorkspaceSlugMembersMemberSlugActivitiesSecurity("architecto") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkspaceSlugMembersMemberSlugActivitiesId

Update a custom activity for a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdResponse;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;
import org.openapis.openapi.models.shared.Activity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest req = new PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest("mollitia", "dolorem", "culpa") {{
                activity = new Activity("consequuntur") {{
                    activityType = "repellat";
                    activityTypeKey = "mollitia";
                    description = "occaecati";
                    key = "numquam";
                    link = "commodi";
                    linkText = "quam";
                    occurredAt = "molestiae";
                    properties = new java.util.HashMap<String, Object>() {{
                        put("error", "quia");
                    }};
                    weight = "quis";
                }};;
            }};            

            PutWorkspaceSlugMembersMemberSlugActivitiesIdResponse res = sdk.activities.putWorkspaceSlugMembersMemberSlugActivitiesId(req, new PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity("vitae") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
