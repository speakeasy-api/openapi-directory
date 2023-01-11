package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetLocationListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetLocationListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}