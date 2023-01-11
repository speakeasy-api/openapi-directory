package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActiveWidgetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetActiveWidgetsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}