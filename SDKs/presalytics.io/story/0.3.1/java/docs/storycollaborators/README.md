# storyCollaborators

## Overview

Story Collaborators

### Available Operations

* [storyIdCollaboratorsGet](#storyidcollaboratorsget) - Story Collaborators: List
* [storyIdCollaboratorsInactivePost](#storyidcollaboratorsinactivepost) - Story Collaborators: Edit Inactive User Permission
* [storyIdCollaboratorsPost](#storyidcollaboratorspost) - Story Collaborators: Add New User
* [storyIdCollaboratorsUseridDelete](#storyidcollaboratorsuseriddelete) - Story Collaborators: Remove User
* [storyIdCollaboratorsUseridGet](#storyidcollaboratorsuseridget) - Story Collaborators: Access Permissions
* [storyIdCollaboratorsUseridPut](#storyidcollaboratorsuseridput) - Story Collaborators: Edit Access Rights

## storyIdCollaboratorsGet

Gets a list users that can read or edit this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsGetRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsGetRequest req = new StoryIdCollaboratorsGetRequest("00221b33-5d89-4acb-becf-da8d0c549ef0");            

            StoryIdCollaboratorsGetResponse res = sdk.storyCollaborators.storyIdCollaboratorsGet(req);

            if (res.storyCollaborators != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdCollaboratorsInactivePost

Edit story permissions for inactive users.  Requires admin rights.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsInactivePostRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsInactivePostResponse;
import org.openapis.openapi.models.shared.ModifyInactiveCollaborator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsInactivePostRequest req = new StoryIdCollaboratorsInactivePostRequest("3004978a-61fa-41cf-a068-8f77c1ffc71d",                 new ModifyInactiveCollaborator() {{
                                action = "maxime";
                                leadId = 681578;
                                userId = "163f2a3c-80a9-47ff-b34c-ddf857a9e618";
                            }};);            

            StoryIdCollaboratorsInactivePostResponse res = sdk.storyCollaborators.storyIdCollaboratorsInactivePost(req);

            if (res.storyCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdCollaboratorsPost

Add a colloborator to this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsPostRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsPostResponse;
import org.openapis.openapi.models.shared.AddNewCollaboratorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsPostRequest req = new StoryIdCollaboratorsPostRequest(                new AddNewCollaboratorRequest() {{
                                collaboratorType = "odio";
                                userEmail = "commodi";
                                userId = "c6ab21d2-9dfc-494d-afec-d799390066a6";
                            }};, "d2d00035-5338-4cec-886f-a21e9152cb31");            

            StoryIdCollaboratorsPostResponse res = sdk.storyCollaborators.storyIdCollaboratorsPost(req);

            if (res.storyCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdCollaboratorsUseridDelete

Remove a collaborator from this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridDeleteRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsUseridDeleteRequest req = new StoryIdCollaboratorsUseridDeleteRequest("19167b8e-3c8d-4b03-808d-6d364ffd4559", "06d1263d-48e9-435c-ac9e-81f30be3e432");            

            StoryIdCollaboratorsUseridDeleteResponse res = sdk.storyCollaborators.storyIdCollaboratorsUseridDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdCollaboratorsUseridGet

Data to help you understand the access rights of a particular collaborator on this story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridGetRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsUseridGetRequest req = new StoryIdCollaboratorsUseridGetRequest("02d72165-7650-4664-9870-d9d21f9ad030", "c4ecc11a-0836-4429-868b-8502a55e7f73");            

            StoryIdCollaboratorsUseridGetResponse res = sdk.storyCollaborators.storyIdCollaboratorsUseridGet(req);

            if (res.storyCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdCollaboratorsUseridPut

Modify a user's access right to this story (e.g., grant edit permissions)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridPutRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridPutResponse;
import org.openapis.openapi.models.shared.PermissionType;
import org.openapis.openapi.models.shared.StoryCollaborator;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsUseridPutRequest req = new StoryIdCollaboratorsUseridPutRequest("bc845e32-0a31-49f4-badf-947c9a867bc4",                 new StoryCollaborator() {{
                                active = false;
                                createdAt = OffsetDateTime.parse("2022-09-13T17:26:24.471Z");
                                createdBy = "26665816-ddca-48ef-91fc-b4c593ec12cd";
                                email = "Maiya87@yahoo.com";
                                id = "c7afedbd-80df-4448-a47f-9390c5888098";
                                leadId = 218413;
                                name = "Blake Purdy";
                                permissionType = new PermissionType() {{
                                    canAddCollaborators = false;
                                    canDelete = false;
                                    canEdit = false;
                                    canView = false;
                                    createdAt = OffsetDateTime.parse("2020-02-19T05:19:30.502Z");
                                    createdBy = "3ffdd9f7-f079-4af4-9357-24cdb0f4d281";
                                    id = "187d5684-4ede-4d85-a906-5e628bdfc203";
                                    name = "Alison Hodkiewicz";
                                    updatedAt = OffsetDateTime.parse("2022-05-24T10:46:29.092Z");
                                    updatedBy = "923b7e13-584f-47ae-92c6-891f82ce1157";
                                }};;
                                permissionTypeId = "17230537-7dcf-4a89-9f97-5e356686092e";
                                storyId = "9c3ddc5f-111d-4ea1-826d-541a4d190feb";
                                updatedAt = OffsetDateTime.parse("2022-11-20T20:17:47.531Z");
                                updatedBy = "780bccc0-dbbd-4db4-8470-8fb4e391e6bc";
                                userId = "158c4c4e-5459-49ea-b422-60e9b200ce78";
                            }};, "a1bd8fb7-a0a1-416c-a723-d4097fa30e9a");            

            StoryIdCollaboratorsUseridPutResponse res = sdk.storyCollaborators.storyIdCollaboratorsUseridPut(req);

            if (res.storyCollaborator != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
