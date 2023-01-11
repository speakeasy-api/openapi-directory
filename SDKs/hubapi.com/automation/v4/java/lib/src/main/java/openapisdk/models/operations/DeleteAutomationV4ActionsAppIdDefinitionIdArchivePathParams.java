package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
}