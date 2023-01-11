package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdSessionsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relationships")
    public Boolean includeRelationships;
    public StoryIdSessionsGetQueryParams withIncludeRelationships(Boolean includeRelationships) {
        this.includeRelationships = includeRelationships;
        return this;
    }
}