package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegeneratePreviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public RegeneratePreviewPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
}