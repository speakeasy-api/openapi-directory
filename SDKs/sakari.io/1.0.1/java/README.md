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
import org.openapis.openapi.models.operations.AuthTokenResponse;
import org.openapis.openapi.models.shared.TokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TokenRequest req = new TokenRequest() {{
                clientId = "00000000-0000-0000-0000-00000000000";
                clientSecret = "00000000-0000-0000-0000-00000000000";
                grantType = "client_credentials";
            }};            

            AuthTokenResponse res = sdk.authentication.authToken(req);

            if (res.tokenResponse != null) {
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


### [authentication](docs/authentication/README.md)

* [authToken](docs/authentication/README.md#authtoken) - Get token for accessing APIs

### [campaigns](docs/campaigns/README.md)

* [campaignsCreate](docs/campaigns/README.md#campaignscreate) - Create campaign
* [campaignsFetch](docs/campaigns/README.md#campaignsfetch) - Fetch campaign by ID
* [campaignsFetchAll](docs/campaigns/README.md#campaignsfetchall) - Fetch campaigns
* [campaignsRemove](docs/campaigns/README.md#campaignsremove) - Deletes a campaign
* [campaignsUpdate](docs/campaigns/README.md#campaignsupdate) - Updates a campaign

### [contacts](docs/contacts/README.md)

* [contactsCreateJson](docs/contacts/README.md#contactscreatejson) - Create contact
* [contactsCreateString](docs/contacts/README.md#contactscreatestring) - Create contact
* [contactsFetch](docs/contacts/README.md#contactsfetch) - Fetch contact by ID
* [contactsFetchAll](docs/contacts/README.md#contactsfetchall) - Fetch contacts
* [contactsRemove](docs/contacts/README.md#contactsremove) - Deletes a contact
* [contactsUpdate](docs/contacts/README.md#contactsupdate) - Updates a contact

### [conversations](docs/conversations/README.md)

* [conversationsClose](docs/conversations/README.md#conversationsclose) - Closes a conversation
* [conversationsFetch](docs/conversations/README.md#conversationsfetch) - Fetch conversation by ID
* [conversationsFetchAll](docs/conversations/README.md#conversationsfetchall) - Fetch conversations

### [messages](docs/messages/README.md)

* [messagesFetch](docs/messages/README.md#messagesfetch) - Fetch message by id
* [messagesFetchAll](docs/messages/README.md#messagesfetchall) - Fetch messages
* [messagesSend](docs/messages/README.md#messagessend) - Send Messages

### [templates](docs/templates/README.md)

* [templatesCreate](docs/templates/README.md#templatescreate) - Create template
* [templatesFetch](docs/templates/README.md#templatesfetch) - Fetch template by ID
* [templatesFetchAll](docs/templates/README.md#templatesfetchall) - Fetch templates
* [templatesRemove](docs/templates/README.md#templatesremove) - Deletes a template
* [templatesUpdate](docs/templates/README.md#templatesupdate) - Updates a template

### [tools](docs/tools/README.md)

* [toolsShareFileMultipart](docs/tools/README.md#toolssharefilemultipart) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* [toolsShareFileRaw](docs/tools/README.md#toolssharefileraw) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### [webhooks](docs/webhooks/README.md)

* [webhooksFetchAll](docs/webhooks/README.md#webhooksfetchall) - Fetch active webhooks
* [webhooksSubscribe](docs/webhooks/README.md#webhookssubscribe) - Subscribe to message events
* [webhooksUnsubscribe](docs/webhooks/README.md#webhooksunsubscribe) - Unsubscribe to message events
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
