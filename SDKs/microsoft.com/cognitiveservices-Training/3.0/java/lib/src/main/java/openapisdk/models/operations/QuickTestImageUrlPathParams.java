package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public QuickTestImageUrlPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}