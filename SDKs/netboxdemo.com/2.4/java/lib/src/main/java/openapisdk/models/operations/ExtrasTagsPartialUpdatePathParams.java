package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasTagsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasTagsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}