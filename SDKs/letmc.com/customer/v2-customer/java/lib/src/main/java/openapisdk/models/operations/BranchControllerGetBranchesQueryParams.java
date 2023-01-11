package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BranchControllerGetBranchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Integer count;
    public BranchControllerGetBranchesQueryParams withCount(Integer count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public BranchControllerGetBranchesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}