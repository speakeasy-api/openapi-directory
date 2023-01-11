package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentsIdDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostCommentsIdDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}