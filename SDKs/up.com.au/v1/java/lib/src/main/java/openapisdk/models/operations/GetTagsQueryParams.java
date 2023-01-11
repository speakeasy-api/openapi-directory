package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page[size]")
    public Long pageSize;
    public GetTagsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}