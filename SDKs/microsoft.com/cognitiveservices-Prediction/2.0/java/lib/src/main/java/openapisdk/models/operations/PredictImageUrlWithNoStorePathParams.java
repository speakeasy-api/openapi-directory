package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlWithNoStorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public PredictImageUrlWithNoStorePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}