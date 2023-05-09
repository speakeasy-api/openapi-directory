# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/presalytics.io/story/0.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetEnvironment(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEnvironment200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetEnvironment](docs/sdk/README.md#getenvironment) - Environment: Get
* [SpecNoTags](docs/sdk/README.md#specnotags) - Specification: No tags

### [Cache](docs/cache/README.md)

* [CacheNonceGet](docs/cache/README.md#cachenonceget) - Cache: Get Subdocument
* [CachePost](docs/cache/README.md#cachepost) - Cache: Store Subdocument

### [Conversation](docs/conversation/README.md)

* [StoryIDMessagesGet](docs/conversation/README.md#storyidmessagesget) - Conversation: List Conversation Messages
* [StoryIDMessagesPost](docs/conversation/README.md#storyidmessagespost) - Conversation: Send a Message

### [Events](docs/events/README.md)

* [StoryIDEventsGet](docs/events/README.md#storyideventsget) - Events: List Events
* [StoryIDEventsPost](docs/events/README.md#storyideventspost) - Events: Manage Events

### [Permissions](docs/permissions/README.md)

* [StoryIDCollaboratorsUseridPermissiontypeGet](docs/permissions/README.md#storyidcollaboratorsuseridpermissiontypeget) - Permissions: Story Authorization for a User
* [StoryPermissionTypesGet](docs/permissions/README.md#storypermissiontypesget) - Permissions: List Permission Types

### [Restricted](docs/restricted/README.md)

* [CollaboratorsPost](docs/restricted/README.md#collaboratorspost) - Collborators: Bulk Update (Admin Only)

### [Schemas](docs/schemas/README.md)

* [StoryOutlineSchema](docs/schemas/README.md#storyoutlineschema) - Story Outline Schema

### [Sessions](docs/sessions/README.md)

* [SessionIDDelete](docs/sessions/README.md#sessioniddelete) - Sessions: Delete by Id
* [SessionIDGet](docs/sessions/README.md#sessionidget) - Sessions: Get
* [StoryIDSessionPost](docs/sessions/README.md#storyidsessionpost) - Sessions: Create a Session
* [StoryIDSessionsGet](docs/sessions/README.md#storyidsessionsget) - Sessions: List Story Sessions

### [Story](docs/story/README.md)

* [StoryGet](docs/story/README.md#storyget) - Story: Get List of User Stories
* [StoryIDAnalytics](docs/story/README.md#storyidanalytics) - Story: View Analytics
* [StoryIDDelete](docs/story/README.md#storyiddelete) - Story: Delete by Id
* [StoryIDFileOoxmlautomationidDelete](docs/story/README.md#storyidfileooxmlautomationiddelete) - Story: Delete Subdocument
* [StoryIDFileOoxmlautomationidGet](docs/story/README.md#storyidfileooxmlautomationidget) - Story: Download Updated File
* [StoryIDFilePost](docs/story/README.md#storyidfilepost) - Story: Upload a File To Existing Story
* [StoryIDGet](docs/story/README.md#storyidget) - Story: Get by Id
* [StoryIDOutlineGet](docs/story/README.md#storyidoutlineget) - Story: Get Story Outline
* [StoryIDOutlinePost](docs/story/README.md#storyidoutlinepost) - Story: Post Story Outline
* [StoryIDPublic](docs/story/README.md#storyidpublic) - Story: Public Link to Story Reveal.js Document
* [StoryIDPut](docs/story/README.md#storyidput) - Story: Modify
* [StoryIDReveal](docs/story/README.md#storyidreveal) - Story: Get Story at Reveal.js Document
* [StoryIDStatusGet](docs/story/README.md#storyidstatusget) - Story: Get Story Status
* [StoryPost](docs/story/README.md#storypost) - Story: Upload
* [StoryPostFile](docs/story/README.md#storypostfile) - Story: Upload a File
* [StoryPostFileJSON](docs/story/README.md#storypostfilejson) - Story: Upload a File (base64)

### [StoryCollaborators](docs/storycollaborators/README.md)

* [StoryIDCollaboratorsGet](docs/storycollaborators/README.md#storyidcollaboratorsget) - Story Collaborators: List
* [StoryIDCollaboratorsInactivePost](docs/storycollaborators/README.md#storyidcollaboratorsinactivepost) - Story Collaborators: Edit Inactive User Permission
* [StoryIDCollaboratorsPost](docs/storycollaborators/README.md#storyidcollaboratorspost) - Story Collaborators: Add New User
* [StoryIDCollaboratorsUseridDelete](docs/storycollaborators/README.md#storyidcollaboratorsuseriddelete) - Story Collaborators: Remove User
* [StoryIDCollaboratorsUseridGet](docs/storycollaborators/README.md#storyidcollaboratorsuseridget) - Story Collaborators: Access Permissions
* [StoryIDCollaboratorsUseridPut](docs/storycollaborators/README.md#storyidcollaboratorsuseridput) - Story Collaborators: Edit Access Rights

### [Views](docs/views/README.md)

* [SessionsIDViewsGet](docs/views/README.md#sessionsidviewsget) - Views: List Session Views
* [SessionsIDViewsPost](docs/views/README.md#sessionsidviewspost) - Views: Create A Session View
* [ViewsIDDelete](docs/views/README.md#viewsiddelete) - Views: Delete by Id
* [ViewsIDGet](docs/views/README.md#viewsidget) - Views: Get View
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
