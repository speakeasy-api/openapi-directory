package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
}