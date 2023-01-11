package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePredictionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeletePredictionPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}