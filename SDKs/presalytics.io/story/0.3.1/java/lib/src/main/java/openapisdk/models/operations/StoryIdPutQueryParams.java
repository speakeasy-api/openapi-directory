package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdPutQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryIdPutQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
}