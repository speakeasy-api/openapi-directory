package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhooksV3AppIdSettingsGetAllSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public GetWebhooksV3AppIdSettingsGetAllSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}