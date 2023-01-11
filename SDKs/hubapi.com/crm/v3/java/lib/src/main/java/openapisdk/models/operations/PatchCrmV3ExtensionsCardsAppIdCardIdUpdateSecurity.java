package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}