package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
}