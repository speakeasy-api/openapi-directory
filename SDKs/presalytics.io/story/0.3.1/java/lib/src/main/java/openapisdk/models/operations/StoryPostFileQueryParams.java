package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryPostFileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryPostFileQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
}