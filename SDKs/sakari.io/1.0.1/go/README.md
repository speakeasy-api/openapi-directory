# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sakari.io/1.0.1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authentication.AuthToken(ctx, shared.TokenRequest{
        ClientID: sdk.String("00000000-0000-0000-0000-00000000000"),
        ClientSecret: sdk.String("00000000-0000-0000-0000-00000000000"),
        GrantType: sdk.String("client_credentials"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Authentication](docs/authentication/README.md)

* [AuthToken](docs/authentication/README.md#authtoken) - Get token for accessing APIs

### [Campaigns](docs/campaigns/README.md)

* [CampaignsCreate](docs/campaigns/README.md#campaignscreate) - Create campaign
* [CampaignsFetch](docs/campaigns/README.md#campaignsfetch) - Fetch campaign by ID
* [CampaignsFetchAll](docs/campaigns/README.md#campaignsfetchall) - Fetch campaigns
* [CampaignsRemove](docs/campaigns/README.md#campaignsremove) - Deletes a campaign
* [CampaignsUpdate](docs/campaigns/README.md#campaignsupdate) - Updates a campaign

### [Contacts](docs/contacts/README.md)

* [ContactsCreateJSON](docs/contacts/README.md#contactscreatejson) - Create contact
* [ContactsCreateString](docs/contacts/README.md#contactscreatestring) - Create contact
* [ContactsFetch](docs/contacts/README.md#contactsfetch) - Fetch contact by ID
* [ContactsFetchAll](docs/contacts/README.md#contactsfetchall) - Fetch contacts
* [ContactsRemove](docs/contacts/README.md#contactsremove) - Deletes a contact
* [ContactsUpdate](docs/contacts/README.md#contactsupdate) - Updates a contact

### [Conversations](docs/conversations/README.md)

* [ConversationsClose](docs/conversations/README.md#conversationsclose) - Closes a conversation
* [ConversationsFetch](docs/conversations/README.md#conversationsfetch) - Fetch conversation by ID
* [ConversationsFetchAll](docs/conversations/README.md#conversationsfetchall) - Fetch conversations

### [Messages](docs/messages/README.md)

* [MessagesFetch](docs/messages/README.md#messagesfetch) - Fetch message by id
* [MessagesFetchAll](docs/messages/README.md#messagesfetchall) - Fetch messages
* [MessagesSend](docs/messages/README.md#messagessend) - Send Messages

### [Templates](docs/templates/README.md)

* [TemplatesCreate](docs/templates/README.md#templatescreate) - Create template
* [TemplatesFetch](docs/templates/README.md#templatesfetch) - Fetch template by ID
* [TemplatesFetchAll](docs/templates/README.md#templatesfetchall) - Fetch templates
* [TemplatesRemove](docs/templates/README.md#templatesremove) - Deletes a template
* [TemplatesUpdate](docs/templates/README.md#templatesupdate) - Updates a template

### [Tools](docs/tools/README.md)

* [ToolsShareFileMultipart](docs/tools/README.md#toolssharefilemultipart) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* [ToolsShareFileRaw](docs/tools/README.md#toolssharefileraw) - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### [Webhooks](docs/webhooks/README.md)

* [WebhooksFetchAll](docs/webhooks/README.md#webhooksfetchall) - Fetch active webhooks
* [WebhooksSubscribe](docs/webhooks/README.md#webhookssubscribe) - Subscribe to message events
* [WebhooksUnsubscribe](docs/webhooks/README.md#webhooksunsubscribe) - Unsubscribe to message events
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
