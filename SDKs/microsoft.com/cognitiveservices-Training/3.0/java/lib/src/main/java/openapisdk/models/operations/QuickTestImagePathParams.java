package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public QuickTestImagePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}