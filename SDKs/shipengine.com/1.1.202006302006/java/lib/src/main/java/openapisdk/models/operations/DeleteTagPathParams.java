package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_name")
    public String tagName;
    public DeleteTagPathParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}