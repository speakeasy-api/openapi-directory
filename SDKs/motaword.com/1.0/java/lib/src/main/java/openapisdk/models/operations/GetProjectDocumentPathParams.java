package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public GetProjectDocumentPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectDocumentPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}