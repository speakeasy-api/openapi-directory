package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentTranslationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public GetDocumentTranslationsPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetDocumentTranslationsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}