# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnvironmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEnvironmentResponse res = sdk.getEnvironment();

            if (res.getEnvironment200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getEnvironment](docs/sdk/README.md#getenvironment) - Environment: Get
* [specNoTags](docs/sdk/README.md#specnotags) - Specification: No tags

### [cache](docs/cache/README.md)

* [cacheNonceGet](docs/cache/README.md#cachenonceget) - Cache: Get Subdocument
* [cachePost](docs/cache/README.md#cachepost) - Cache: Store Subdocument

### [conversation](docs/conversation/README.md)

* [storyIdMessagesGet](docs/conversation/README.md#storyidmessagesget) - Conversation: List Conversation Messages
* [storyIdMessagesPost](docs/conversation/README.md#storyidmessagespost) - Conversation: Send a Message

### [events](docs/events/README.md)

* [storyIdEventsGet](docs/events/README.md#storyideventsget) - Events: List Events
* [storyIdEventsPost](docs/events/README.md#storyideventspost) - Events: Manage Events

### [permissions](docs/permissions/README.md)

* [storyIdCollaboratorsUseridPermissiontypeGet](docs/permissions/README.md#storyidcollaboratorsuseridpermissiontypeget) - Permissions: Story Authorization for a User
* [storyPermissionTypesGet](docs/permissions/README.md#storypermissiontypesget) - Permissions: List Permission Types

### [restricted](docs/restricted/README.md)

* [collaboratorsPost](docs/restricted/README.md#collaboratorspost) - Collborators: Bulk Update (Admin Only)

### [schemas](docs/schemas/README.md)

* [storyOutlineSchema](docs/schemas/README.md#storyoutlineschema) - Story Outline Schema

### [sessions](docs/sessions/README.md)

* [sessionIdDelete](docs/sessions/README.md#sessioniddelete) - Sessions: Delete by Id
* [sessionIdGet](docs/sessions/README.md#sessionidget) - Sessions: Get
* [storyIdSessionPost](docs/sessions/README.md#storyidsessionpost) - Sessions: Create a Session
* [storyIdSessionsGet](docs/sessions/README.md#storyidsessionsget) - Sessions: List Story Sessions

### [story](docs/story/README.md)

* [storyGet](docs/story/README.md#storyget) - Story: Get List of User Stories
* [storyIdAnalytics](docs/story/README.md#storyidanalytics) - Story: View Analytics
* [storyIdDelete](docs/story/README.md#storyiddelete) - Story: Delete by Id
* [storyIdFileOoxmlautomationidDelete](docs/story/README.md#storyidfileooxmlautomationiddelete) - Story: Delete Subdocument
* [storyIdFileOoxmlautomationidGet](docs/story/README.md#storyidfileooxmlautomationidget) - Story: Download Updated File
* [storyIdFilePost](docs/story/README.md#storyidfilepost) - Story: Upload a File To Existing Story
* [storyIdGet](docs/story/README.md#storyidget) - Story: Get by Id
* [storyIdOutlineGet](docs/story/README.md#storyidoutlineget) - Story: Get Story Outline
* [storyIdOutlinePost](docs/story/README.md#storyidoutlinepost) - Story: Post Story Outline
* [storyIdPublic](docs/story/README.md#storyidpublic) - Story: Public Link to Story Reveal.js Document
* [storyIdPut](docs/story/README.md#storyidput) - Story: Modify
* [storyIdReveal](docs/story/README.md#storyidreveal) - Story: Get Story at Reveal.js Document
* [storyIdStatusGet](docs/story/README.md#storyidstatusget) - Story: Get Story Status
* [storyPost](docs/story/README.md#storypost) - Story: Upload
* [storyPostFile](docs/story/README.md#storypostfile) - Story: Upload a File
* [storyPostFileJson](docs/story/README.md#storypostfilejson) - Story: Upload a File (base64)

### [storyCollaborators](docs/storycollaborators/README.md)

* [storyIdCollaboratorsGet](docs/storycollaborators/README.md#storyidcollaboratorsget) - Story Collaborators: List
* [storyIdCollaboratorsInactivePost](docs/storycollaborators/README.md#storyidcollaboratorsinactivepost) - Story Collaborators: Edit Inactive User Permission
* [storyIdCollaboratorsPost](docs/storycollaborators/README.md#storyidcollaboratorspost) - Story Collaborators: Add New User
* [storyIdCollaboratorsUseridDelete](docs/storycollaborators/README.md#storyidcollaboratorsuseriddelete) - Story Collaborators: Remove User
* [storyIdCollaboratorsUseridGet](docs/storycollaborators/README.md#storyidcollaboratorsuseridget) - Story Collaborators: Access Permissions
* [storyIdCollaboratorsUseridPut](docs/storycollaborators/README.md#storyidcollaboratorsuseridput) - Story Collaborators: Edit Access Rights

### [views](docs/views/README.md)

* [sessionsIdViewsGet](docs/views/README.md#sessionsidviewsget) - Views: List Session Views
* [sessionsIdViewsPost](docs/views/README.md#sessionsidviewspost) - Views: Create A Session View
* [viewsIdDelete](docs/views/README.md#viewsiddelete) - Views: Delete by Id
* [viewsIdGet](docs/views/README.md#viewsidget) - Views: Get View
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
