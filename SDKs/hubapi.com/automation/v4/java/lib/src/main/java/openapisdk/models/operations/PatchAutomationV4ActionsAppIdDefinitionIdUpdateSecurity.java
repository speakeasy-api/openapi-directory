package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}