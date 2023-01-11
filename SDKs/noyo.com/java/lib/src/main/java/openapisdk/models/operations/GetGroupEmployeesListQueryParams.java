package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupEmployeesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetGroupEmployeesListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGroupEmployeesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}