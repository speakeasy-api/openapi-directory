package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrmV3ExtensionsCardsAppIdGetAllSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public GetCrmV3ExtensionsCardsAppIdGetAllSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}