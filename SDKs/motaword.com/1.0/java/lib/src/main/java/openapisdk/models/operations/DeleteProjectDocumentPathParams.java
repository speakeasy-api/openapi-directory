package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public DeleteProjectDocumentPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public DeleteProjectDocumentPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}