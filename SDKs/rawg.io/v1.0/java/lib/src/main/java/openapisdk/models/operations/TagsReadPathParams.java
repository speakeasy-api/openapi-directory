package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TagsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}