package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPostsIdsCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetPostsIdsCommentsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}