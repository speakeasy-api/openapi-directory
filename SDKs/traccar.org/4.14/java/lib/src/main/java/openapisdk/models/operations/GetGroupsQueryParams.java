package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetGroupsQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetGroupsQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}