package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=full")
    public Boolean full;
    public StoryIdGetQueryParams withFull(Boolean full) {
        this.full = full;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryIdGetQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relationships")
    public Boolean includeRelationships;
    public StoryIdGetQueryParams withIncludeRelationships(Boolean includeRelationships) {
        this.includeRelationships = includeRelationships;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=refresh_cache")
    public Boolean refreshCache;
    public StoryIdGetQueryParams withRefreshCache(Boolean refreshCache) {
        this.refreshCache = refreshCache;
        return this;
    }
}