package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetCommentsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}