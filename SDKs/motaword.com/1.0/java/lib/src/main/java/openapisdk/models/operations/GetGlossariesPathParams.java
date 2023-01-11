package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGlossariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetGlossariesPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}