package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryGetQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relationships")
    public Boolean includeRelationships;
    public StoryGetQueryParams withIncludeRelationships(Boolean includeRelationships) {
        this.includeRelationships = includeRelationships;
        return this;
    }
}