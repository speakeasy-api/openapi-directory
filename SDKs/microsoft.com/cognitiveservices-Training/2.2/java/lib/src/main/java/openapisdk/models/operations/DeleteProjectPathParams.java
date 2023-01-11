package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DeleteProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}