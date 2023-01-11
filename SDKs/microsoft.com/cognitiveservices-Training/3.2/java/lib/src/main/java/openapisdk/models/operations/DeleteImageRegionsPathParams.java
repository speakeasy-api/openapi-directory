package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeleteImageRegionsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}