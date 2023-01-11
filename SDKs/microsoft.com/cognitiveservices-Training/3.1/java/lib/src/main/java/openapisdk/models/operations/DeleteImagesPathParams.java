package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeleteImagesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}