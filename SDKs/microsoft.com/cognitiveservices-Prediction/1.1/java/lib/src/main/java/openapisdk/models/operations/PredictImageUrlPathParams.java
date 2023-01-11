package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public PredictImageUrlPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}