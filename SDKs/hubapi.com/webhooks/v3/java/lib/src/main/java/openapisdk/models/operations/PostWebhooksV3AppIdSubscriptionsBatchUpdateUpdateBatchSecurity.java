package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}