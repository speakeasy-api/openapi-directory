package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity withDeveloperHapikey(openapisdk.models.shared.SchemeDeveloperHapikey developerHapikey) {
        this.developerHapikey = developerHapikey;
        return this;
    }
}