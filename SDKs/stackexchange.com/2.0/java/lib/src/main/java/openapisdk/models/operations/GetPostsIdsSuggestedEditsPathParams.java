package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPostsIdsSuggestedEditsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ids")
    public String ids;
    public GetPostsIdsSuggestedEditsPathParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}