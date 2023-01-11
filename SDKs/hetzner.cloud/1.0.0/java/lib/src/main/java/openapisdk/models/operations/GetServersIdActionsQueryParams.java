package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetServersIdActionsSortParameterSortEnum sort;
    public GetServersIdActionsQueryParams withSort(GetServersIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetServersIdActionsStatusParameterStatusEnum status;
    public GetServersIdActionsQueryParams withStatus(GetServersIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}