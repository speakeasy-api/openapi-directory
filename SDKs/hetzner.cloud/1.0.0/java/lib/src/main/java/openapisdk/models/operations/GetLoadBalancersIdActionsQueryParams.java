package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancersIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetLoadBalancersIdActionsSortParameterSortEnum sort;
    public GetLoadBalancersIdActionsQueryParams withSort(GetLoadBalancersIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetLoadBalancersIdActionsStatusParameterStatusEnum status;
    public GetLoadBalancersIdActionsQueryParams withStatus(GetLoadBalancersIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}