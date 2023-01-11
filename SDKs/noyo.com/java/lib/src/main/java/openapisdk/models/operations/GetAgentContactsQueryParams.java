package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentContactsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetAgentContactsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetAgentContactsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}