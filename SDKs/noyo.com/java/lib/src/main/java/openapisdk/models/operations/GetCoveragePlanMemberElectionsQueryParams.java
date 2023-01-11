package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoveragePlanMemberElectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetCoveragePlanMemberElectionsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetCoveragePlanMemberElectionsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}