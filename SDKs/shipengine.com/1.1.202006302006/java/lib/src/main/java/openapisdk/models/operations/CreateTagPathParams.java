package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_name")
    public String tagName;
    public CreateTagPathParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}