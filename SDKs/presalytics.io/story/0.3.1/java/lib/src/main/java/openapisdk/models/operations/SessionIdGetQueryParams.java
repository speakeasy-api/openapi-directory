package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relationships")
    public Boolean includeRelationships;
    public SessionIdGetQueryParams withIncludeRelationships(Boolean includeRelationships) {
        this.includeRelationships = includeRelationships;
        return this;
    }
}