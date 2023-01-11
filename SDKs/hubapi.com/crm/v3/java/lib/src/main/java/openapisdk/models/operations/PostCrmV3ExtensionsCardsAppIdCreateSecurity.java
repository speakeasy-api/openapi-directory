package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCrmV3ExtensionsCardsAppIdCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PostCrmV3ExtensionsCardsAppIdCreateSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}