package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeleteImageTagsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}