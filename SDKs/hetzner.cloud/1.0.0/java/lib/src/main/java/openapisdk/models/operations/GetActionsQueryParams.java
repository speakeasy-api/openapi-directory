package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public GetActionsQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetActionsSortParameterSortEnum sort;
    public GetActionsQueryParams withSort(GetActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetActionsStatusParameterStatusEnum status;
    public GetActionsQueryParams withStatus(GetActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}