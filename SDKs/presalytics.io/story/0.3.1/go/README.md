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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
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

### SDK SDK

* `GetEnvironment` - Environment: Get
* `SpecNoTags` - Specification: No tags

### Cache

* `CacheNonceGet` - Cache: Get Subdocument
* `CachePost` - Cache: Store Subdocument

### Conversation

* `StoryIDMessagesGet` - Conversation: List Conversation Messages
* `StoryIDMessagesPost` - Conversation: Send a Message

### Events

* `StoryIDEventsGet` - Events: List Events
* `StoryIDEventsPost` - Events: Manage Events

### Permissions

* `StoryIDCollaboratorsUseridPermissiontypeGet` - Permissions: Story Authorization for a User
* `StoryPermissionTypesGet` - Permissions: List Permission Types

### Restricted

* `CollaboratorsPost` - Collborators: Bulk Update (Admin Only)

### Schemas

* `StoryOutlineSchema` - Story Outline Schema

### Sessions

* `SessionIDDelete` - Sessions: Delete by Id
* `SessionIDGet` - Sessions: Get
* `StoryIDSessionPost` - Sessions: Create a Session
* `StoryIDSessionsGet` - Sessions: List Story Sessions

### Story

* `StoryGet` - Story: Get List of User Stories
* `StoryIDAnalytics` - Story: View Analytics
* `StoryIDDelete` - Story: Delete by Id
* `StoryIDFileOoxmlautomationidDelete` - Story: Delete Subdocument
* `StoryIDFileOoxmlautomationidGet` - Story: Download Updated File
* `StoryIDFilePost` - Story: Upload a File To Existing Story
* `StoryIDGet` - Story: Get by Id
* `StoryIDOutlineGet` - Story: Get Story Outline
* `StoryIDOutlinePost` - Story: Post Story Outline
* `StoryIDPublic` - Story: Public Link to Story Reveal.js Document
* `StoryIDPut` - Story: Modify
* `StoryIDReveal` - Story: Get Story at Reveal.js Document
* `StoryIDStatusGet` - Story: Get Story Status
* `StoryPost` - Story: Upload
* `StoryPostFile` - Story: Upload a File
* `StoryPostFileJSON` - Story: Upload a File (base64)

### StoryCollaborators

* `StoryIDCollaboratorsGet` - Story Collaborators: List
* `StoryIDCollaboratorsInactivePost` - Story Collaborators: Edit Inactive User Permission
* `StoryIDCollaboratorsPost` - Story Collaborators: Add New User
* `StoryIDCollaboratorsUseridDelete` - Story Collaborators: Remove User
* `StoryIDCollaboratorsUseridGet` - Story Collaborators: Access Permissions
* `StoryIDCollaboratorsUseridPut` - Story Collaborators: Edit Access Rights

### Views

* `SessionsIDViewsGet` - Views: List Session Views
* `SessionsIDViewsPost` - Views: Create A Session View
* `ViewsIDDelete` - Views: Delete by Id
* `ViewsIDGet` - Views: Get View
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
