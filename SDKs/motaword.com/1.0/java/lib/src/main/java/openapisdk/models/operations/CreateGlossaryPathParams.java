package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlossaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public CreateGlossaryPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}