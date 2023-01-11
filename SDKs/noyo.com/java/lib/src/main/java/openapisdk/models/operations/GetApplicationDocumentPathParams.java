package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetApplicationDocumentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=document_id")
    public String documentId;
    public GetApplicationDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}