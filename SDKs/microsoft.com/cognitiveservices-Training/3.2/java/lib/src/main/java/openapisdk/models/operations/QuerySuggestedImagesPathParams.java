package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public QuerySuggestedImagesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}