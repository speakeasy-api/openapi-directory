package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActivitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetActivitiesPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}