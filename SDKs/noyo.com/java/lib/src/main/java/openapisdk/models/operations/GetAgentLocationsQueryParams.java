package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentLocationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetAgentLocationsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetAgentLocationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}