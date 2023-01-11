package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutomationV4ActionsAppIdGetPageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetAutomationV4ActionsAppIdGetPageQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=archived")
    public Boolean archived;
    public GetAutomationV4ActionsAppIdGetPageQueryParams withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetAutomationV4ActionsAppIdGetPageQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}