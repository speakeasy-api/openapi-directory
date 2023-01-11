package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumesIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetVolumesIdActionsSortParameterSortEnum sort;
    public GetVolumesIdActionsQueryParams withSort(GetVolumesIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetVolumesIdActionsStatusParameterStatusEnum status;
    public GetVolumesIdActionsQueryParams withStatus(GetVolumesIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}