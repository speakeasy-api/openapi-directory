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
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.operations.GetGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupRequest req = new GetGroupRequest("corrupti");            

            GetGroupResponse res = sdk.groups.getGroup(req, new GetGroupSecurity("provident") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.group != null) {
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


### [groups](docs/groups/README.md)

* [getGroup](docs/groups/README.md#getgroup) - Retrieve a group
* [getGroupsByIds](docs/groups/README.md#getgroupsbyids) - Retrieve multiple groups
* [searchGroups](docs/groups/README.md#searchgroups) - Search groups

### [posts](docs/posts/README.md)

* [getAllPosts](docs/posts/README.md#getallposts) - List all posts
* [getAllPostsChanges](docs/posts/README.md#getallpostschanges) - List all post changes
* [getPost](docs/posts/README.md#getpost) - Retrieve a post
* [getPostAndRelatedData](docs/posts/README.md#getpostandrelateddata) - Retrieve post display data
* [getPosts](docs/posts/README.md#getposts) - List posts
* [getPostsByIds](docs/posts/README.md#getpostsbyids) - Retrieve multiple posts
* [searchPosts](docs/posts/README.md#searchposts) - Search posts

### [users](docs/users/README.md)

* [getUserPosts](docs/users/README.md#getuserposts) - List posts by a user
* [searchUserPosts](docs/users/README.md#searchuserposts) - Search posts by a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
