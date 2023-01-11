package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadProjectDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public DownloadProjectDocumentPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public DownloadProjectDocumentPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}