package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectDocumentsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}