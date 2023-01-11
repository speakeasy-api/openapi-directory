package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}