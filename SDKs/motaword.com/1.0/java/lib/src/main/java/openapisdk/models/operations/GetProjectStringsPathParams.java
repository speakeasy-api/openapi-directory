package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectStringsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectStringsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}