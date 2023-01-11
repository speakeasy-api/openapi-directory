package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public CreateTagPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}