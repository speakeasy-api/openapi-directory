package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetTagsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}