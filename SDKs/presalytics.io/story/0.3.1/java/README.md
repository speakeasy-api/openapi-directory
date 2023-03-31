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

            if (res.getEnvironment200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getEnvironment` - Environment: Get
* `specNoTags` - Specification: No tags

### cache

* `cacheNonceGet` - Cache: Get Subdocument
* `cachePost` - Cache: Store Subdocument

### conversation

* `storyIdMessagesGet` - Conversation: List Conversation Messages
* `storyIdMessagesPost` - Conversation: Send a Message

### events

* `storyIdEventsGet` - Events: List Events
* `storyIdEventsPost` - Events: Manage Events

### permissions

* `storyIdCollaboratorsUseridPermissiontypeGet` - Permissions: Story Authorization for a User
* `storyPermissionTypesGet` - Permissions: List Permission Types

### restricted

* `collaboratorsPost` - Collborators: Bulk Update (Admin Only)

### schemas

* `storyOutlineSchema` - Story Outline Schema

### sessions

* `sessionIdDelete` - Sessions: Delete by Id
* `sessionIdGet` - Sessions: Get
* `storyIdSessionPost` - Sessions: Create a Session
* `storyIdSessionsGet` - Sessions: List Story Sessions

### story

* `storyGet` - Story: Get List of User Stories
* `storyIdAnalytics` - Story: View Analytics
* `storyIdDelete` - Story: Delete by Id
* `storyIdFileOoxmlautomationidDelete` - Story: Delete Subdocument
* `storyIdFileOoxmlautomationidGet` - Story: Download Updated File
* `storyIdFilePost` - Story: Upload a File To Existing Story
* `storyIdGet` - Story: Get by Id
* `storyIdOutlineGet` - Story: Get Story Outline
* `storyIdOutlinePost` - Story: Post Story Outline
* `storyIdPublic` - Story: Public Link to Story Reveal.js Document
* `storyIdPut` - Story: Modify
* `storyIdReveal` - Story: Get Story at Reveal.js Document
* `storyIdStatusGet` - Story: Get Story Status
* `storyPost` - Story: Upload
* `storyPostFile` - Story: Upload a File
* `storyPostFileJson` - Story: Upload a File (base64)

### storyCollaborators

* `storyIdCollaboratorsGet` - Story Collaborators: List
* `storyIdCollaboratorsInactivePost` - Story Collaborators: Edit Inactive User Permission
* `storyIdCollaboratorsPost` - Story Collaborators: Add New User
* `storyIdCollaboratorsUseridDelete` - Story Collaborators: Remove User
* `storyIdCollaboratorsUseridGet` - Story Collaborators: Access Permissions
* `storyIdCollaboratorsUseridPut` - Story Collaborators: Edit Access Rights

### views

* `sessionsIdViewsGet` - Views: List Session Views
* `sessionsIdViewsPost` - Views: Create A Session View
* `viewsIdDelete` - Views: Delete by Id
* `viewsIdGet` - Views: Get View
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
