# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/trashnothing.com/1.3/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.GetGroup(ctx, operations.GetGroupRequest{
        GroupID: "corrupti",
    }, operations.GetGroupSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Groups](docs/groups/README.md)

* [GetGroup](docs/groups/README.md#getgroup) - Retrieve a group
* [GetGroupsByIds](docs/groups/README.md#getgroupsbyids) - Retrieve multiple groups
* [SearchGroups](docs/groups/README.md#searchgroups) - Search groups

### [Posts](docs/posts/README.md)

* [GetAllPosts](docs/posts/README.md#getallposts) - List all posts
* [GetAllPostsChanges](docs/posts/README.md#getallpostschanges) - List all post changes
* [GetPost](docs/posts/README.md#getpost) - Retrieve a post
* [GetPostAndRelatedData](docs/posts/README.md#getpostandrelateddata) - Retrieve post display data
* [GetPosts](docs/posts/README.md#getposts) - List posts
* [GetPostsByIds](docs/posts/README.md#getpostsbyids) - Retrieve multiple posts
* [SearchPosts](docs/posts/README.md#searchposts) - Search posts

### [Users](docs/users/README.md)

* [GetUserPosts](docs/users/README.md#getuserposts) - List posts by a user
* [SearchUserPosts](docs/users/README.md#searchuserposts) - Search posts by a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
