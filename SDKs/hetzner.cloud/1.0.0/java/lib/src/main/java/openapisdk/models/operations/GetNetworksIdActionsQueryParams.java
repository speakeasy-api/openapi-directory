package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworksIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetNetworksIdActionsSortParameterSortEnum sort;
    public GetNetworksIdActionsQueryParams withSort(GetNetworksIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetNetworksIdActionsStatusParameterStatusEnum status;
    public GetNetworksIdActionsQueryParams withStatus(GetNetworksIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}