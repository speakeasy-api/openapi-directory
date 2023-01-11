package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatesIdActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetCertificatesIdActionsSortParameterSortEnum sort;
    public GetCertificatesIdActionsQueryParams withSort(GetCertificatesIdActionsSortParameterSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetCertificatesIdActionsStatusParameterStatusEnum status;
    public GetCertificatesIdActionsQueryParams withStatus(GetCertificatesIdActionsStatusParameterStatusEnum status) {
        this.status = status;
        return this;
    }
}