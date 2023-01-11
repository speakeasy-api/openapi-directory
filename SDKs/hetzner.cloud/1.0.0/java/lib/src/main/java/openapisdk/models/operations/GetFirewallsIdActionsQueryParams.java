package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallsIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFirewallsIdActionsSortParameterSortEnum sort;
    public GetFirewallsIdActionsQueryParams withSort(GetFirewallsIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetFirewallsIdActionsStatusParameterStatusEnum status;
    public GetFirewallsIdActionsQueryParams withStatus(GetFirewallsIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}