package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetUntaggedImagesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}