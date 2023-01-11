package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UseAsDraftPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public UseAsDraftPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
}