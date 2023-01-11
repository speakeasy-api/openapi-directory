package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaggedImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public GetTaggedImagesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}