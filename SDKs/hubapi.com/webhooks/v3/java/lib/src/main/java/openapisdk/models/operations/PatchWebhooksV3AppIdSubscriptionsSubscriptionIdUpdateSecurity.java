package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}