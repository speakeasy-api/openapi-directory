package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
}