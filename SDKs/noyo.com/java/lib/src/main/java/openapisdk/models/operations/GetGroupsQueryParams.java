package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_ids")
    public String groupIds;
    public GetGroupsQueryParams withGroupIds(String groupIds) {
        this.groupIds = groupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetGroupsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGroupsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}