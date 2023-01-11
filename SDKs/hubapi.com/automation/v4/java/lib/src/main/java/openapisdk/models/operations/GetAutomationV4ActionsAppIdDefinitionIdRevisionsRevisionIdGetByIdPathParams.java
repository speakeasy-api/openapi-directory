package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public Integer appId;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=definitionId")
    public String definitionId;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionId")
    public String revisionId;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}