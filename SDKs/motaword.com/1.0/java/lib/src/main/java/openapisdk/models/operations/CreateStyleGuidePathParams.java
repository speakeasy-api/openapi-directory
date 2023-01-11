package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStyleGuidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public CreateStyleGuidePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}