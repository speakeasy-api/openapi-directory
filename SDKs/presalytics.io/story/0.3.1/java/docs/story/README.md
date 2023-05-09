# story

## Overview

Story

### Available Operations

* [storyGet](#storyget) - Story: Get List of User Stories
* [storyIdAnalytics](#storyidanalytics) - Story: View Analytics
* [storyIdDelete](#storyiddelete) - Story: Delete by Id
* [storyIdFileOoxmlautomationidDelete](#storyidfileooxmlautomationiddelete) - Story: Delete Subdocument
* [storyIdFileOoxmlautomationidGet](#storyidfileooxmlautomationidget) - Story: Download Updated File
* [storyIdFilePost](#storyidfilepost) - Story: Upload a File To Existing Story
* [storyIdGet](#storyidget) - Story: Get by Id
* [storyIdOutlineGet](#storyidoutlineget) - Story: Get Story Outline
* [storyIdOutlinePost](#storyidoutlinepost) - Story: Post Story Outline
* [storyIdPublic](#storyidpublic) - Story: Public Link to Story Reveal.js Document
* [storyIdPut](#storyidput) - Story: Modify
* [storyIdReveal](#storyidreveal) - Story: Get Story at Reveal.js Document
* [storyIdStatusGet](#storyidstatusget) - Story: Get Story Status
* [storyPost](#storypost) - Story: Upload
* [storyPostFile](#storypostfile) - Story: Upload a File
* [storyPostFileJson](#storypostfilejson) - Story: Upload a File (base64)

## storyGet

Returns a list of stories for this user identifie via the access token presentated to the api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryGetRequest;
import org.openapis.openapi.models.operations.StoryGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryGetRequest req = new StoryGetRequest() {{
                includeOutline = false;
                includeRelationships = false;
            }};            

            StoryGetResponse res = sdk.story.storyGet(req);

            if (res.stories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdAnalytics

returns an html document containing session and event metrics for the story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdAnalyticsRequest;
import org.openapis.openapi.models.operations.StoryIdAnalyticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdAnalyticsRequest req = new StoryIdAnalyticsRequest("1a8422bb-679d-4232-a715-bf0cbb1e31b8");            

            StoryIdAnalyticsResponse res = sdk.story.storyIdAnalytics(req);

            if (res.revealJsPresenationWithAnalyticsData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdDelete

Remove a story and dependant data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdDeleteRequest;
import org.openapis.openapi.models.operations.StoryIdDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdDeleteRequest req = new StoryIdDeleteRequest("b90f3443-a110-48e0-adcf-4b921879fce9");            

            StoryIdDeleteResponse res = sdk.story.storyIdDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdFileOoxmlautomationidDelete

Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdFileOoxmlautomationidDeleteRequest;
import org.openapis.openapi.models.operations.StoryIdFileOoxmlautomationidDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdFileOoxmlautomationidDeleteRequest req = new StoryIdFileOoxmlautomationidDeleteRequest("53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7", "c70a4562-6d43-4681-bf16-d9f5fce6c556");            

            StoryIdFileOoxmlautomationidDeleteResponse res = sdk.story.storyIdFileOoxmlautomationidDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdFileOoxmlautomationidGet

Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdFileOoxmlautomationidGetRequest;
import org.openapis.openapi.models.operations.StoryIdFileOoxmlautomationidGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdFileOoxmlautomationidGetRequest req = new StoryIdFileOoxmlautomationidGetRequest("146c3e25-0fb0-408c-82e1-41aac366c8dd", "6b144290-7474-4778-a7bd-466d28c10ab3");            

            StoryIdFileOoxmlautomationidGetResponse res = sdk.story.storyIdFileOoxmlautomationidGet(req);

            if (res.powerpointPresentation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdFilePost

Upload a file to an existing story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile;
import org.openapis.openapi.models.operations.StoryIdFilePostRequest;
import org.openapis.openapi.models.operations.StoryIdFilePostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdFilePostRequest req = new StoryIdFilePostRequest(                new StoryIdFilePostOpenOfficeXmlDocumentEGXlsxPptxFile() {{
                                file = new byte[][]{{
                                    add("illum".getBytes()),
                                    add("quo".getBytes()),
                                    add("fuga".getBytes()),
                                    add("eius".getBytes()),
                                }};
                            }};, "251904e5-23c7-4e0b-8717-8e4796f2a70c") {{
                includeOutline = false;
                obsoleteId = "688282aa-4825-462f-a22e-9817ee17cbe6";
                replaceExisting = false;
            }};            

            StoryIdFilePostResponse res = sdk.story.storyIdFilePost(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdGet

Returns story metadata, inlcuding json object with story outline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdGetRequest;
import org.openapis.openapi.models.operations.StoryIdGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdGetRequest req = new StoryIdGetRequest("1e6b7b95-bc0a-4b3c-a0c4-f3789fd871f9") {{
                full = false;
                includeOutline = false;
                includeRelationships = false;
                refreshCache = false;
            }};            

            StoryIdGetResponse res = sdk.story.storyIdGet(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdOutlineGet

Returns Story's outline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdOutlineGetRequest;
import org.openapis.openapi.models.operations.StoryIdOutlineGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdOutlineGetRequest req = new StoryIdOutlineGetRequest("9dd2efd1-21aa-46f1-a674-bdb04f157560");            

            StoryIdOutlineGetResponse res = sdk.story.storyIdOutlineGet(req);

            if (res.storyIdOutlineGet200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdOutlinePost

Update a story outline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdOutlinePostRequest;
import org.openapis.openapi.models.operations.StoryIdOutlinePostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdOutlinePostRequest req = new StoryIdOutlinePostRequest("voluptatum", "2d68ea19-f1d1-4705-9339-d08086a18403");            

            StoryIdOutlinePostResponse res = sdk.story.storyIdOutlinePost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdPublic

returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdPublicRequest;
import org.openapis.openapi.models.operations.StoryIdPublicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdPublicRequest req = new StoryIdPublicRequest("94c26071-f93f-45f0-a42d-ac7af515cc41");            

            StoryIdPublicResponse res = sdk.story.storyIdPublic(req);

            if (res.revealJsPresenation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdPut

Update story metadata, including story outline

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdPutRequest;
import org.openapis.openapi.models.operations.StoryIdPutResponse;
import org.openapis.openapi.models.shared.OoxmlDocument;
import org.openapis.openapi.models.shared.PermissionType;
import org.openapis.openapi.models.shared.Story;
import org.openapis.openapi.models.shared.StoryCollaborator;
import org.openapis.openapi.models.shared.StoryOutlineHistory;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdPutRequest req = new StoryIdPutRequest("3aa63aae-8d67-4864-9bb6-75fd5e60b375",                 new Story() {{
                                collaborators = new org.openapis.openapi.models.shared.StoryCollaborator[]{{
                                    add(new StoryCollaborator() {{
                                        active = false;
                                        createdAt = OffsetDateTime.parse("2022-03-25T07:54:13.852Z");
                                        createdBy = "f6fbee41-f333-417f-a35b-60eb1ea42655";
                                        email = "Nelle79@gmail.com";
                                        id = "28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1";
                                        leadId = 611749;
                                        name = "Janie Cremin";
                                        permissionType = new PermissionType() {{
                                            canAddCollaborators = false;
                                            canDelete = false;
                                            canEdit = false;
                                            canView = false;
                                            createdAt = OffsetDateTime.parse("2022-09-27T03:48:38.490Z");
                                            createdBy = "6916fe1f-08f4-4294-a369-8f447f603e8b";
                                            id = "445e80ca-55ef-4d20-a457-e1858b6a89fb";
                                            name = "Tony Pagac";
                                            updatedAt = OffsetDateTime.parse("2021-11-26T16:42:33.328Z");
                                            updatedBy = "e4824d0a-b407-4508-8e51-862065e904f3";
                                        }};
                                        permissionTypeId = "b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50";
                                        storyId = "ce187f86-bc17-43d6-89ee-e9526f8d986e";
                                        updatedAt = OffsetDateTime.parse("2021-12-01T19:00:30.130Z");
                                        updatedBy = "1ead4f0e-1012-4563-b94e-29e973e922a5";
                                        userId = "7a15be3e-0608-407e-ab6e-3ab8845f0597";
                                    }}),
                                    add(new StoryCollaborator() {{
                                        active = false;
                                        createdAt = OffsetDateTime.parse("2022-03-30T21:08:39.591Z");
                                        createdBy = "0ff2a54a-31e9-4476-8a3e-865e7956f925";
                                        email = "Madonna_Heathcote@gmail.com";
                                        id = "da660ff5-7bfa-4ad4-b9ef-c1b4512c1032";
                                        leadId = 432281;
                                        name = "Deanna Swaniawski";
                                        permissionType = new PermissionType() {{
                                            canAddCollaborators = false;
                                            canDelete = false;
                                            canEdit = false;
                                            canView = false;
                                            createdAt = OffsetDateTime.parse("2021-09-13T13:26:04.826Z");
                                            createdBy = "15199ebf-d0e9-4fe6-8632-ca3aed011799";
                                            id = "6312fde0-4771-4778-bf61-d017476360a1";
                                            name = "Janis Ratke";
                                            updatedAt = OffsetDateTime.parse("2022-08-08T07:20:53.498Z");
                                            updatedBy = "0659a1ad-eaab-4585-9d6c-645b08b61891";
                                        }};
                                        permissionTypeId = "baa0fe1a-de00-48e6-b8c5-f350d8cdb5a3";
                                        storyId = "41814301-0421-4813-9520-8ece7e253b66";
                                        updatedAt = OffsetDateTime.parse("2022-05-25T18:20:51.968Z");
                                        updatedBy = "51c6c6e2-05e1-46de-ab3f-ec9578a64584";
                                        userId = "273a8418-d162-4309-bb09-29921aefb9f5";
                                    }}),
                                    add(new StoryCollaborator() {{
                                        active = false;
                                        createdAt = OffsetDateTime.parse("2021-05-25T00:50:01.296Z");
                                        createdBy = "4d86e68e-4be0-4560-93f5-9da757a59ecf";
                                        email = "Zachariah_Jakubowski@hotmail.com";
                                        id = "f1caa338-3c2b-4eb4-b737-3c8d72f64d1d";
                                        leadId = 726878;
                                        name = "Camille Crist";
                                        permissionType = new PermissionType() {{
                                            canAddCollaborators = false;
                                            canDelete = false;
                                            canEdit = false;
                                            canView = false;
                                            createdAt = OffsetDateTime.parse("2022-12-04T11:51:15.430Z");
                                            createdBy = "0661e963-49e1-4cf9-a06e-3a437000ae6b";
                                            id = "6bc9b8f7-59ea-4c55-a974-1d311352965b";
                                            name = "Wallace Pagac";
                                            updatedAt = OffsetDateTime.parse("2022-10-31T15:56:50.300Z");
                                            updatedBy = "611435e1-39db-4c22-99b1-abda8c070e10";
                                        }};
                                        permissionTypeId = "84cb0672-d1ad-4879-aeb9-665b85efbd02";
                                        storyId = "bae0be2d-7822-459e-bea4-b5197f92443d";
                                        updatedAt = OffsetDateTime.parse("2022-01-06T22:02:52.629Z");
                                        updatedBy = "ce52b895-c537-4c64-94ef-b0b34896c3ca";
                                        userId = "5acfbe2f-d570-4757-b929-177deac646ec";
                                    }}),
                                    add(new StoryCollaborator() {{
                                        active = false;
                                        createdAt = OffsetDateTime.parse("2022-04-21T19:40:37.162Z");
                                        createdBy = "73409e3e-b1e5-4a2b-92eb-07f116db9954";
                                        email = "Yasmin.Rosenbaum@yahoo.com";
                                        id = "fa88970e-189d-4bb3-8fcb-33ea055b197c";
                                        leadId = 820023;
                                        name = "Danielle Waters";
                                        permissionType = new PermissionType() {{
                                            canAddCollaborators = false;
                                            canDelete = false;
                                            canEdit = false;
                                            canView = false;
                                            createdAt = OffsetDateTime.parse("2022-11-01T22:41:35.458Z");
                                            createdBy = "d82d3513-bb6f-448b-a56b-cdb35ff2e4b2";
                                            id = "7537a8cd-9e73-419c-977d-525f77b114ee";
                                            name = "Leo Dare";
                                            updatedAt = OffsetDateTime.parse("2022-06-30T04:42:17.193Z");
                                            updatedBy = "5fc37814-d4c9-48e0-82bb-89eb75dad636";
                                        }};
                                        permissionTypeId = "c600503d-8bb3-4118-8f73-9ae9e057eb80";
                                        storyId = "9e281033-1f39-481d-8c70-0b607f3c93c7";
                                        updatedAt = OffsetDateTime.parse("2022-04-04T09:40:23.441Z");
                                        updatedBy = "9da3f2ce-da7e-423f-a257-411faf4b7544";
                                        userId = "e472e802-857a-45b4-8463-a7d575f1400e";
                                    }}),
                                }};
                                createdAt = OffsetDateTime.parse("2022-08-02T23:28:33.531Z");
                                createdBy = "4ad7334e-c1b7-481b-b6a0-8088d100efad";
                                id = "a200ef04-22eb-4216-8cf9-ab8366c723ff";
                                isPublic = false;
                                ooxmlDocuments = new org.openapis.openapi.models.shared.OoxmlDocument[]{{
                                    add(new OoxmlDocument() {{
                                        createdAt = OffsetDateTime.parse("2021-10-07T02:38:58.799Z");
                                        createdBy = "e06bee48-25c1-4fc0-a115-c80bff918544";
                                        deleteTargetOnStoryDelete = false;
                                        id = "ec42defc-ce8f-4197-b773-e63562a7b408";
                                        ooxmlAutomationId = "f05e3d48-fdaf-4313-a1f5-fd94259c0b36";
                                        storyId = "f25ea944-f3b7-456c-91f6-c37a51262438";
                                        updatedAt = OffsetDateTime.parse("2022-08-26T06:53:46.257Z");
                                        updatedBy = "bbc05a23-a45c-4efc-9fde-10a0ce2169e5";
                                    }}),
                                    add(new OoxmlDocument() {{
                                        createdAt = OffsetDateTime.parse("2022-12-19T16:09:38.668Z");
                                        createdBy = "019c6dc5-e347-4627-99bf-bbe6949fb2bb";
                                        deleteTargetOnStoryDelete = false;
                                        id = "4ecae6c3-d5db-43ad-abd5-daea4c506a8a";
                                        ooxmlAutomationId = "a94c0264-4cf5-4e9d-9a45-78adc1ac600d";
                                        storyId = "ec001ac8-02e2-4ec0-9ff8-f0f816ff3477";
                                        updatedAt = OffsetDateTime.parse("2022-09-19T07:21:23.270Z");
                                        updatedBy = "3e902c14-125b-4096-8a66-8151a472af92";
                                    }}),
                                    add(new OoxmlDocument() {{
                                        createdAt = OffsetDateTime.parse("2022-03-13T00:08:56.282Z");
                                        createdBy = "5949f83f-350c-4f87-affb-901c6ecbb4e2";
                                        deleteTargetOnStoryDelete = false;
                                        id = "43cf789f-fafe-4da5-be5a-e6e0ac184c2b";
                                        ooxmlAutomationId = "9c247c88-373a-440e-9942-f32e55055756";
                                        storyId = "f5d56d0b-d0af-42df-a13d-b4f62cba3f89";
                                        updatedAt = OffsetDateTime.parse("2022-11-26T07:10:57.925Z");
                                        updatedBy = "aebc0b80-a692-44d3-b2ec-fcc8f895010f";
                                    }}),
                                    add(new OoxmlDocument() {{
                                        createdAt = OffsetDateTime.parse("2022-02-17T12:07:51.076Z");
                                        createdBy = "d3d6fa18-04e5-44c8-af16-8a363c8873e4";
                                        deleteTargetOnStoryDelete = false;
                                        id = "84380b1f-6b8c-4a27-9a60-a04c495cc699";
                                        ooxmlAutomationId = "171b51c1-bdb1-4cf4-b888-ebdfc4ccca99";
                                        storyId = "bc7fc0b2-dce1-4087-be42-b006d678878b";
                                        updatedAt = OffsetDateTime.parse("2021-12-01T11:16:17.353Z");
                                        updatedBy = "581a5820-8c54-4fef-a9c9-5f2eac5565d3";
                                    }}),
                                }};
                                outline = "sit";
                                outlineHistory = new org.openapis.openapi.models.shared.StoryOutlineHistory[]{{
                                    add(new StoryOutlineHistory() {{
                                        collaboratorUserId = "cfee8120-6e28-413f-a4a4-1c480d3f2132";
                                        createdAt = OffsetDateTime.parse("2021-02-11T12:50:04.175Z");
                                        createdBy = "03102d51-4f4c-4c6f-98bf-9621a6a4f77a";
                                        id = "87ee3e4b-e752-4c65-b344-18e3bb91c8d9";
                                        outline = "iusto";
                                        revisionNumber = 315671L;
                                        storyId = "e0e8419d-8f84-4f14-8f3e-07edcc4aa5f3";
                                        updatedAt = OffsetDateTime.parse("2020-12-26T16:15:07.247Z");
                                        updatedBy = "bd905a97-2e05-4672-8227-b2d309470bf7";
                                    }}),
                                    add(new StoryOutlineHistory() {{
                                        collaboratorUserId = "a4fa87cf-535a-46fa-a54e-bf60c321f023";
                                        createdAt = OffsetDateTime.parse("2022-02-08T20:10:51.233Z");
                                        createdBy = "5d2367fe-1a0c-4c8d-b79f-0a396d90c364";
                                        id = "b7c15dfb-ace1-488b-9c4e-e2c8c6ce611f";
                                        outline = "itaque";
                                        revisionNumber = 875452L;
                                        storyId = "b1c7cbdb-6eec-4743-b8ba-25317747dc91";
                                        updatedAt = OffsetDateTime.parse("2022-05-01T07:01:55.800Z");
                                        updatedBy = "d2caf5dd-6723-4dc0-b5ae-2f3a6b700878";
                                    }}),
                                }};
                                revision = 474885L;
                                title = "Mrs.";
                                updatedAt = OffsetDateTime.parse("2022-12-06T23:05:29.295Z");
                                updatedBy = "43f5a6c9-8b55-4554-880d-40bcacc6cbd6";
                            }};) {{
                includeOutline = false;
            }};            

            StoryIdPutResponse res = sdk.story.storyIdPut(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdReveal

returns an html document containing a reveal.js epresentation of the story

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdRevealRequest;
import org.openapis.openapi.models.operations.StoryIdRevealResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdRevealRequest req = new StoryIdRevealRequest("b5f3ec90-9304-4f92-abad-2553819b474b");            

            StoryIdRevealResponse res = sdk.story.storyIdReveal(req);

            if (res.revealJsPresenation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyIdStatusGet

Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdStatusGetRequest;
import org.openapis.openapi.models.operations.StoryIdStatusGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdStatusGetRequest req = new StoryIdStatusGetRequest("0ed20e56-248f-4ff6-b9a9-10abdcab6267");            

            StoryIdStatusGetResponse res = sdk.story.storyIdStatusGet(req);

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyPost

Upload new story to presalytics api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryPostRequest;
import org.openapis.openapi.models.operations.StoryPostResponse;
import org.openapis.openapi.models.shared.Outline;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryPostRequest req = new StoryPostRequest(                new Outline() {{
                                outline = "nisi";
                            }};) {{
                includeOutline = false;
            }};            

            StoryPostResponse res = sdk.story.storyPost(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyPostFile

Upload new story to presalytics api via an Open Office Xml file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile;
import org.openapis.openapi.models.operations.StoryPostFileRequest;
import org.openapis.openapi.models.operations.StoryPostFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryPostFileRequest req = new StoryPostFileRequest(                new StoryPostFileOpenOfficeXmlDocumentEGXlsxPptxFile() {{
                                file = new byte[][]{{
                                    add("provident".getBytes()),
                                    add("laboriosam".getBytes()),
                                }};
                            }};) {{
                includeOutline = false;
            }};            

            StoryPostFileResponse res = sdk.story.storyPostFile(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyPostFileJson

Upload new story to presalytics api via an Open Office Xml file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryPostFileJsonRequest;
import org.openapis.openapi.models.operations.StoryPostFileJsonResponse;
import org.openapis.openapi.models.shared.FileUpload;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryPostFileJsonRequest req = new StoryPostFileJsonRequest() {{
                fileUpload = new FileUpload() {{
                    contentLength = 881568L;
                    file = "ab";
                    fileName = "itaque";
                    mimetype = "quisquam";
                }};;
                includeOutline = false;
            }};            

            StoryPostFileJsonResponse res = sdk.story.storyPostFileJson(req);

            if (res.story != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
