package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageWithNoStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public PredictImageWithNoStorePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}