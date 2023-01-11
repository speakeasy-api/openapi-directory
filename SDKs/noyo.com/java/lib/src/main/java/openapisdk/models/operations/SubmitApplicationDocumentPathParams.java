package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitApplicationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public SubmitApplicationDocumentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=document_id")
    public String documentId;
    public SubmitApplicationDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public SubmitApplicationDocumentPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}