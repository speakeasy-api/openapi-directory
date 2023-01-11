package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentsIdEditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostCommentsIdEditPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}