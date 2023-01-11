package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Double projectId;
    public EditProjectPathParams withProjectId(Double projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public EditProjectPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}