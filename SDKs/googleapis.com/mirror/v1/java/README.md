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

import org.openapis.openapi.models.operations.MirrorAccountsInsertPathParams;
import org.openapis.openapi.models.operations.MirrorAccountsInsertQueryParams;
import org.openapis.openapi.models.operations.MirrorAccountsInsertRequest;
import org.openapis.openapi.models.operations.MirrorAccountsInsertResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.UserData;
import org.openapis.openapi.models.shared.AuthToken;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest() {{
                pathParams = new MirrorAccountsInsertPathParams() {{
                    accountName = "corrupti";
                    accountType = "provident";
                    userToken = "distinctio";
                }};
                queryParams = new MirrorAccountsInsertQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
                request = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "error";
                            type = "deserunt";
                        }}),
                        add(new AuthToken() {{
                            authToken = "suscipit";
                            type = "iure";
                        }}),
                    }};
                    features = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    password = "delectus";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "suscipit";
                            value = "molestiae";
                        }}),
                        add(new UserData() {{
                            key = "minus";
                            value = "placeat";
                        }}),
                    }};
                }};
            }};            

            MirrorAccountsInsertResponse res = sdk.accounts.mirrorAccountsInsert(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `mirrorAccountsInsert` - Inserts a new account for a user

### contacts

* `mirrorContactsDelete` - Deletes a contact.
* `mirrorContactsGet` - Gets a single contact by ID.
* `mirrorContactsInsert` - Inserts a new contact.
* `mirrorContactsList` - Retrieves a list of contacts for the authenticated user.
* `mirrorContactsPatch` - Updates a contact in place. This method supports patch semantics.
* `mirrorContactsUpdate` - Updates a contact in place.

### locations

* `mirrorLocationsGet` - Gets a single location by ID.
* `mirrorLocationsList` - Retrieves a list of locations for the user.

### settings

* `mirrorSettingsGet` - Gets a single setting by ID.

### subscriptions

* `mirrorSubscriptionsDelete` - Deletes a subscription.
* `mirrorSubscriptionsInsert` - Creates a new subscription.
* `mirrorSubscriptionsList` - Retrieves a list of subscriptions for the authenticated user and service.
* `mirrorSubscriptionsUpdate` - Updates an existing subscription in place.

### timeline

* `mirrorTimelineAttachmentsDelete` - Deletes an attachment from a timeline item.
* `mirrorTimelineAttachmentsGet` - Retrieves an attachment on a timeline item by item ID and attachment ID.
* `mirrorTimelineAttachmentsInsert` - Adds a new attachment to a timeline item.
* `mirrorTimelineAttachmentsList` - Returns a list of attachments for a timeline item.
* `mirrorTimelineDelete` - Deletes a timeline item.
* `mirrorTimelineGet` - Gets a single timeline item by ID.
* `mirrorTimelineInsert` - Inserts a new item into the timeline.
* `mirrorTimelineList` - Retrieves a list of timeline items for the authenticated user.
* `mirrorTimelinePatch` - Updates a timeline item in place. This method supports patch semantics.
* `mirrorTimelineUpdate` - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
