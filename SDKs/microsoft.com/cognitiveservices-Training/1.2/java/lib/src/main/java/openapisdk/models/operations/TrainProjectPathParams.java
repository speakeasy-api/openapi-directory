package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public TrainProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}