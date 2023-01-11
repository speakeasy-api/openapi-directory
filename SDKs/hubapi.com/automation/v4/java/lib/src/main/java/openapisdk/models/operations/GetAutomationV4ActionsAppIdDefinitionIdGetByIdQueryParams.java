package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
}