package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}