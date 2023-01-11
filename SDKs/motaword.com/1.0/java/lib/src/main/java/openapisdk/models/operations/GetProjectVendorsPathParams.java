package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectVendorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectVendorsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}