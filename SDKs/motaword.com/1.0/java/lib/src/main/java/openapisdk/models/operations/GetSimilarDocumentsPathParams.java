package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimilarDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public GetSimilarDocumentsPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
}