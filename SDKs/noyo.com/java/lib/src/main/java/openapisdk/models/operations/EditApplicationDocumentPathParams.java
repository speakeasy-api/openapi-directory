package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditApplicationDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public EditApplicationDocumentPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=document_id")
    public String documentId;
    public EditApplicationDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditApplicationDocumentPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}