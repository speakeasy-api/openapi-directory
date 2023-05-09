# members

### Available Operations

* [deleteWorkspaceSlugMembersMemberSlug](#deleteworkspaceslugmembersmemberslug) - Delete a member
* [deleteWorkspaceSlugMembersMemberSlugIdentities](#deleteworkspaceslugmembersmemberslugidentities) - Remove identity from a member
* [getWorkspaceSlugMembers](#getworkspaceslugmembers) - List members in a workspace
* [getWorkspaceSlugMembersFind](#getworkspaceslugmembersfind) - Find a member by an identity
* [getWorkspaceSlugMembersMemberSlug](#getworkspaceslugmembersmemberslug) - Get a member
* [getWorkspaceSlugOrganizationsOrganizationIdMembers](#getworkspaceslugorganizationsorganizationidmembers) - List members in an organization
* [postWorkspaceSlugMembers](#postworkspaceslugmembers) - Create or update a member
* [postWorkspaceSlugMembersMemberSlugIdentities](#postworkspaceslugmembersmemberslugidentities) - Add identity to a member
* [putWorkspaceSlugMembersMemberSlug](#putworkspaceslugmembersmemberslug) - Update a member

## deleteWorkspaceSlugMembersMemberSlug

Delete a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugRequest req = new DeleteWorkspaceSlugMembersMemberSlugRequest("enim", "odit");            

            DeleteWorkspaceSlugMembersMemberSlugResponse res = sdk.members.deleteWorkspaceSlugMembersMemberSlug(req, new DeleteWorkspaceSlugMembersMemberSlugSecurity("quo") {{
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

## deleteWorkspaceSlugMembersMemberSlugIdentities

Remove identity from a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity;
import org.openapis.openapi.models.shared.Identity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest req = new DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest("sequi", "tenetur") {{
                identity = new Identity("ipsam") {{
                    email = "Reid62@yahoo.com";
                    name = "Neal Boyer";
                    sourceHost = "vero";
                    uid = "nihil";
                    url = "praesentium";
                    username = "Whitney.Bednar";
                }};;
            }};            

            DeleteWorkspaceSlugMembersMemberSlugIdentitiesResponse res = sdk.members.deleteWorkspaceSlugMembersMemberSlugIdentities(req, new DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity("cum") {{
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

## getWorkspaceSlugMembers

List members in a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersActivityTypeEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersAffiliationEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersDirectionEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersIdentityEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersSecurity;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugMembersRequest req = new GetWorkspaceSlugMembersRequest("perferendis") {{
                activitiesCountMax = "doloremque";
                activitiesCountMin = "reprehenderit";
                activityType = GetWorkspaceSlugMembersActivityTypeEnum.ISSUE_COMMENT_CREATED;
                affiliation = GetWorkspaceSlugMembersAffiliationEnum.TEAMMATE;
                cities = "dicta";
                company = "corporis";
                countries = "dolore";
                direction = GetWorkspaceSlugMembersDirectionEnum.ASC;
                endDate = "dicta";
                identity = GetWorkspaceSlugMembersIdentityEnum.DEVTO;
                items = GetWorkspaceSlugMembersItemsEnum.TEN;
                memberTags = "accusamus";
                orbit = "commodi";
                page = "repudiandae";
                query = "quae";
                regions = "ipsum";
                relative = "quidem";
                sort = GetWorkspaceSlugMembersSortEnum.LOVE;
                startDate = "excepturi";
                title = "pariatur";
                type = "modi";
            }};            

            GetWorkspaceSlugMembersResponse res = sdk.members.getWorkspaceSlugMembers(req, new GetWorkspaceSlugMembersSecurity("praesentium") {{
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

## getWorkspaceSlugMembersFind

Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersFindRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersFindResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersFindSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugMembersFindRequest req = new GetWorkspaceSlugMembersFindRequest("rem") {{
                email = "Aurelia.Waelchi@hotmail.com";
                github = "itaque";
                source = "incidunt";
                sourceHost = "enim";
                uid = "consequatur";
                username = "Marc64";
            }};            

            GetWorkspaceSlugMembersFindResponse res = sdk.members.getWorkspaceSlugMembersFind(req, new GetWorkspaceSlugMembersFindSecurity("distinctio") {{
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

## getWorkspaceSlugMembersMemberSlug

Get a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugMembersMemberSlugSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugMembersMemberSlugRequest req = new GetWorkspaceSlugMembersMemberSlugRequest("quibusdam", "labore");            

            GetWorkspaceSlugMembersMemberSlugResponse res = sdk.members.getWorkspaceSlugMembersMemberSlug(req, new GetWorkspaceSlugMembersMemberSlugSecurity("modi") {{
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

## getWorkspaceSlugOrganizationsOrganizationIdMembers

List members in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersResponse;
import org.openapis.openapi.models.operations.GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest req = new GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest("qui", "aliquid") {{
                items = GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum.FIFTY;
                page = "quos";
            }};            

            GetWorkspaceSlugOrganizationsOrganizationIdMembersResponse res = sdk.members.getWorkspaceSlugOrganizationsOrganizationIdMembers(req, new GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity("perferendis") {{
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

## postWorkspaceSlugMembers

This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersSecurity;
import org.openapis.openapi.models.shared.Identity;
import org.openapis.openapi.models.shared.Member;
import org.openapis.openapi.models.shared.MemberAndIdentity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugMembersRequest req = new PostWorkspaceSlugMembersRequest("magni") {{
                memberAndIdentity = new MemberAndIdentity() {{
                    identity = new Identity("assumenda") {{
                        email = "Abigale_Corkery27@yahoo.com";
                        name = "Geoffrey Green";
                        sourceHost = "non";
                        uid = "eligendi";
                        url = "sint";
                        username = "Grace_Medhurst63";
                    }};;
                    member = new Member() {{
                        bio = "dolor";
                        birthday = "debitis";
                        company = "Parisian, King and Kirlin";
                        devto = "illum";
                        email = "Maximo76@hotmail.com";
                        github = "facere";
                        linkedin = "ea";
                        location = "aliquid";
                        name = "Tomas Friesen";
                        pronouns = "accusamus";
                        shippingAddress = "delectus";
                        slug = "quidem";
                        tagList = "provident";
                        tags = "nam";
                        tagsToAdd = "id";
                        teammate = false;
                        title = "Ms.";
                        tshirt = "deleniti";
                        twitter = "sapiente";
                        url = "amet";
                    }};;
                }};;
            }};            

            PostWorkspaceSlugMembersResponse res = sdk.members.postWorkspaceSlugMembers(req, new PostWorkspaceSlugMembersSecurity("deserunt") {{
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

## postWorkspaceSlugMembersMemberSlugIdentities

Add identity to a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugIdentitiesRequest;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugIdentitiesResponse;
import org.openapis.openapi.models.operations.PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity;
import org.openapis.openapi.models.shared.Identity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWorkspaceSlugMembersMemberSlugIdentitiesRequest req = new PostWorkspaceSlugMembersMemberSlugIdentitiesRequest("nisi", "vel") {{
                identity = new Identity("natus") {{
                    email = "Jarred.Aufderhar@yahoo.com";
                    name = "Alfonso Green";
                    sourceHost = "natus";
                    uid = "nobis";
                    url = "eum";
                    username = "Shaina29";
                }};;
            }};            

            PostWorkspaceSlugMembersMemberSlugIdentitiesResponse res = sdk.members.postWorkspaceSlugMembersMemberSlugIdentities(req, new PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity("et") {{
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

## putWorkspaceSlugMembersMemberSlug

Update a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugRequest;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugResponse;
import org.openapis.openapi.models.operations.PutWorkspaceSlugMembersMemberSlugSecurity;
import org.openapis.openapi.models.shared.Member;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkspaceSlugMembersMemberSlugRequest req = new PutWorkspaceSlugMembersMemberSlugRequest("excepturi", "ullam") {{
                member = new Member() {{
                    bio = "provident";
                    birthday = "quos";
                    company = "Bartoletti - O'Hara";
                    devto = "reiciendis";
                    email = "Emmie89@yahoo.com";
                    github = "odit";
                    linkedin = "nemo";
                    location = "quasi";
                    name = "Melba Toy";
                    pronouns = "deleniti";
                    shippingAddress = "facilis";
                    slug = "in";
                    tagList = "architecto";
                    tags = "architecto";
                    tagsToAdd = "repudiandae";
                    teammate = false;
                    title = "Mrs.";
                    tshirt = "expedita";
                    twitter = "nihil";
                    url = "repellat";
                }};;
            }};            

            PutWorkspaceSlugMembersMemberSlugResponse res = sdk.members.putWorkspaceSlugMembersMemberSlug(req, new PutWorkspaceSlugMembersMemberSlugSecurity("quibusdam") {{
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
