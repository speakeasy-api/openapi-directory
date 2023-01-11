package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryPostFileJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryPostFileJsonQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
}