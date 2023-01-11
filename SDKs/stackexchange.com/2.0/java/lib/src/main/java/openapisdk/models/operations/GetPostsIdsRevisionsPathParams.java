package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPostsIdsRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetPostsIdsRevisionsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}