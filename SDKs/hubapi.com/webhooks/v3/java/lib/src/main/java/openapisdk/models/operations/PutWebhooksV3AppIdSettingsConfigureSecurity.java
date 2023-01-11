package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksV3AppIdSettingsConfigureSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PutWebhooksV3AppIdSettingsConfigureSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}