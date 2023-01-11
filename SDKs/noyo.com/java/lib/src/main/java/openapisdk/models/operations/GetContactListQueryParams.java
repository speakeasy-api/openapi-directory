package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetContactListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetContactListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}