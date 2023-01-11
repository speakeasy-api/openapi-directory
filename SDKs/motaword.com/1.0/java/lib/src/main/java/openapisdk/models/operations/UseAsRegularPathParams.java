package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UseAsRegularPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public Long documentId;
    public UseAsRegularPathParams withDocumentId(Long documentId) {
        this.documentId = documentId;
        return this;
    }
}