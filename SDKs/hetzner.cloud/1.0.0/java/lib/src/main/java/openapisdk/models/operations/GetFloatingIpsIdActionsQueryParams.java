package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpsIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFloatingIpsIdActionsSortParameterSortEnum sort;
    public GetFloatingIpsIdActionsQueryParams withSort(GetFloatingIpsIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetFloatingIpsIdActionsStatusParameterStatusEnum status;
    public GetFloatingIpsIdActionsQueryParams withStatus(GetFloatingIpsIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}