# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### authentication

* `authToken` - Get token for accessing APIs

### campaigns

* `campaignsCreate` - Create campaign
* `campaignsFetch` - Fetch campaign by ID
* `campaignsFetchAll` - Fetch campaigns
* `campaignsRemove` - Deletes a campaign
* `campaignsUpdate` - Updates a campaign

### contacts

* `contactsCreateJson` - Create contact
* `contactsCreateString` - Create contact
* `contactsFetch` - Fetch contact by ID
* `contactsFetchAll` - Fetch contacts
* `contactsRemove` - Deletes a contact
* `contactsUpdate` - Updates a contact

### conversations

* `conversationsClose` - Closes a conversation
* `conversationsFetch` - Fetch conversation by ID
* `conversationsFetchAll` - Fetch conversations

### messages

* `messagesFetch` - Fetch message by id
* `messagesFetchAll` - Fetch messages
* `messagesSend` - Send Messages

### templates

* `templatesCreate` - Create template
* `templatesFetch` - Fetch template by ID
* `templatesFetchAll` - Fetch templates
* `templatesRemove` - Deletes a template
* `templatesUpdate` - Updates a template

### tools

* `toolsShareFileMultipart` - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
* `toolsShareFileRaw` - Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### webhooks

* `webhooksFetchAll` - Fetch active webhooks
* `webhooksSubscribe` - Subscribe to message events
* `webhooksUnsubscribe` - Unsubscribe to message events
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
