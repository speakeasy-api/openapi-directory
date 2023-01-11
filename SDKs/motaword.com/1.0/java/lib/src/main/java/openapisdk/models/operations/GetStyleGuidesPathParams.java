package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStyleGuidesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetStyleGuidesPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}