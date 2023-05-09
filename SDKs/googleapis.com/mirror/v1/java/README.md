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
import org.openapis.openapi.models.operations.MirrorAccountsInsertRequest;
import org.openapis.openapi.models.operations.MirrorAccountsInsertResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthToken;
import org.openapis.openapi.models.shared.UserData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorAccountsInsertRequest req = new MirrorAccountsInsertRequest("corrupti", "provident", "distinctio") {{
                account = new Account() {{
                    authTokens = new org.openapis.openapi.models.shared.AuthToken[]{{
                        add(new AuthToken() {{
                            authToken = "unde";
                            type = "nulla";
                        }}),
                        add(new AuthToken() {{
                            authToken = "corrupti";
                            type = "illum";
                        }}),
                        add(new AuthToken() {{
                            authToken = "vel";
                            type = "error";
                        }}),
                        add(new AuthToken() {{
                            authToken = "deserunt";
                            type = "suscipit";
                        }}),
                    }};
                    features = new String[]{{
                        add("magnam"),
                        add("debitis"),
                    }};
                    password = "ipsa";
                    userData = new org.openapis.openapi.models.shared.UserData[]{{
                        add(new UserData() {{
                            key = "tempora";
                            value = "suscipit";
                        }}),
                        add(new UserData() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new UserData() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                        add(new UserData() {{
                            key = "iusto";
                            value = "excepturi";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                userIp = "quis";
            }};            

            MirrorAccountsInsertResponse res = sdk.accounts.mirrorAccountsInsert(req);

            if (res.body != null) {
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


### [accounts](docs/accounts/README.md)

* [mirrorAccountsInsert](docs/accounts/README.md#mirroraccountsinsert) - Inserts a new account for a user

### [contacts](docs/contacts/README.md)

* [mirrorContactsDelete](docs/contacts/README.md#mirrorcontactsdelete) - Deletes a contact.
* [mirrorContactsGet](docs/contacts/README.md#mirrorcontactsget) - Gets a single contact by ID.
* [mirrorContactsInsert](docs/contacts/README.md#mirrorcontactsinsert) - Inserts a new contact.
* [mirrorContactsList](docs/contacts/README.md#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [mirrorContactsPatch](docs/contacts/README.md#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [mirrorContactsUpdate](docs/contacts/README.md#mirrorcontactsupdate) - Updates a contact in place.

### [locations](docs/locations/README.md)

* [mirrorLocationsGet](docs/locations/README.md#mirrorlocationsget) - Gets a single location by ID.
* [mirrorLocationsList](docs/locations/README.md#mirrorlocationslist) - Retrieves a list of locations for the user.

### [settings](docs/settings/README.md)

* [mirrorSettingsGet](docs/settings/README.md#mirrorsettingsget) - Gets a single setting by ID.

### [subscriptions](docs/subscriptions/README.md)

* [mirrorSubscriptionsDelete](docs/subscriptions/README.md#mirrorsubscriptionsdelete) - Deletes a subscription.
* [mirrorSubscriptionsInsert](docs/subscriptions/README.md#mirrorsubscriptionsinsert) - Creates a new subscription.
* [mirrorSubscriptionsList](docs/subscriptions/README.md#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [mirrorSubscriptionsUpdate](docs/subscriptions/README.md#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

### [timeline](docs/timeline/README.md)

* [mirrorTimelineAttachmentsDelete](docs/timeline/README.md#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [mirrorTimelineAttachmentsGet](docs/timeline/README.md#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [mirrorTimelineAttachmentsInsert](docs/timeline/README.md#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [mirrorTimelineAttachmentsList](docs/timeline/README.md#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [mirrorTimelineDelete](docs/timeline/README.md#mirrortimelinedelete) - Deletes a timeline item.
* [mirrorTimelineGet](docs/timeline/README.md#mirrortimelineget) - Gets a single timeline item by ID.
* [mirrorTimelineInsert](docs/timeline/README.md#mirrortimelineinsert) - Inserts a new item into the timeline.
* [mirrorTimelineList](docs/timeline/README.md#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [mirrorTimelinePatch](docs/timeline/README.md#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [mirrorTimelineUpdate](docs/timeline/README.md#mirrortimelineupdate) - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
