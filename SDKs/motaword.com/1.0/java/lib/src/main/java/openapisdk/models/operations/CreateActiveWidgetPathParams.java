package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateActiveWidgetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public CreateActiveWidgetPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}