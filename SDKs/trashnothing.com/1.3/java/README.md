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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ContactModeratorsPathParams;
import org.openapis.openapi.models.operations.ContactModeratorsRequestBody;
import org.openapis.openapi.models.operations.ContactModeratorsRequest;
import org.openapis.openapi.models.operations.ContactModeratorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2Code = new SchemeOauth2Code() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            ContactModeratorsRequest req = new ContactModeratorsRequest() {{
                pathParams = new ContactModeratorsPathParams() {{
                    groupId = "corrupti";
                }};
                request = new ContactModeratorsRequestBody() {{
                    message = "provident";
                    subject = "distinctio";
                }};
            }};            

            ContactModeratorsResponse res = sdk.groups.contactModerators(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### groups

* `contactModerators` - Contact group moderators
* `getGroup` - Retrieve a group
* `getGroupsByIds` - Retrieve multiple groups
* `joinGroups` - Join groups
* `leaveGroup` - Leave a group
* `searchGroups` - Search groups
* `submitAnswers` - Submit group answers

### messages

* `archiveAllConversations` - Archive all conversations
* `archiveConversation` - Archive conversation
* `blockConversation` - Block conversation
* `deleteConversation` - Delete conversation
* `getConversationMessages` - List conversation messages
* `getConversations` - List conversations
* `markAllConversationsRead` - Mark all conversations as read
* `markConversationRead` - Mark conversation as read
* `replyToConversation` - Reply to conversation
* `reportConversation` - Report conversation
* `searchConversations` - Search conversations
* `unarchiveConversation` - Unarchive conversation
* `unblockConversation` - Unblock conversation

### misc

* `sendFeedback` - Send feedback

### photos

* `deletePhoto` - Delete a photo
* `getPhotosByIds` - Retrieve multiple photos
* `rotatePhoto` - Rotate a photo
* `uploadPhoto` - Create a photo

### posts

* `bookmarkPost` - Bookmark a post
* `deleteBookmark` - Delete a post bookmark
* `deletePost` - Delete a post
* `getAllPosts` - List all posts
* `getAllPostsChanges` - List all post changes
* `getPost` - Retrieve a post
* `getPostAndRelatedData` - Retrieve post display data
* `getPosts` - List posts
* `getPostsByIds` - Retrieve multiple posts
* `promisePost` - Promise an offer post
* `replyToPost` - Reply to a post
* `reportPost` - Report a post
* `satisfyPost` - Satisfy a post
* `searchPosts` - Search posts
* `sharePost` - Share a post
* `submitPost` - Submit a post
* `unpromisePost` - Unpromise an offer post
* `updatePost` - Update a post
* `withdrawPost` - Withdraw a post

### stories

* `getStories` - List stories
* `getStory` - Retrieve a story
* `likeStory` - Like a story
* `submitStory` - Submit a story
* `unlikeStory` - Unlike a story
* `viewedStory` - Record story viewed

### users

* `changeEmail` - Change email address
* `createAlert` - Create an email alert
* `deleteAlert` - Delete an email alert
* `getAlerts` - List current users' email alerts
* `getCurrentUser` - Retrieve current user
* `getCurrentUserGroups` - List current users' groups
* `getCurrentUserPosts` - List current users' posts
* `getPostLocations` - List current users' post locations
* `getProfileImageFile` - Retrieve a users' profile image
* `getProfileImages` - List current users' profile images
* `getUser` - Retrieve a user
* `getUserAndRelatedData` - Retrieve user display info
* `getUserGroupNotices` - List current users' group notices
* `getUserPosts` - List posts by a user
* `removeUserFeedback` - Remove feedback on a user
* `reportUser` - Report a user
* `resendAccountVerificationEmail` - Resend account verification email
* `savePostLocation` - Save a post location for the current user
* `searchCurrentUserPosts` - Search current users' posts
* `searchUserPosts` - Search posts by a user
* `sendPasswordResetEmail` - Send password reset email
* `setEmailNotBouncing` - Set users' email address as not bouncing
* `setProfileImage` - Set a profile image
* `submitUserFeedback` - Submit feedback on a user
* `updateCurrentUser` - Update current user
* `updateLocation` - Update location
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
