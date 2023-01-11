package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetImagesIdActionsSortParameterSortEnum sort;
    public GetImagesIdActionsQueryParams withSort(GetImagesIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetImagesIdActionsStatusParameterStatusEnum status;
    public GetImagesIdActionsQueryParams withStatus(GetImagesIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}