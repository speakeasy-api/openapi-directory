package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImageCountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public QuerySuggestedImageCountPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}