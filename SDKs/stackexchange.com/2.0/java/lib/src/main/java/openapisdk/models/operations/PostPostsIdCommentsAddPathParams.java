package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPostsIdCommentsAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostPostsIdCommentsAddPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}