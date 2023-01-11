package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPostsIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetPostsIdsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}