package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}