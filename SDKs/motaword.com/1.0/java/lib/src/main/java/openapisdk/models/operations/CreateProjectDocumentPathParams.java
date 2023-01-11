package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public CreateProjectDocumentPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}