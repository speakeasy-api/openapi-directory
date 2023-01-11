package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}