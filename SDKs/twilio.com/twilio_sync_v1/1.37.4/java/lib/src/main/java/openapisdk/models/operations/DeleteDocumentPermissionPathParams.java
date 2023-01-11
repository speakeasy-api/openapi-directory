package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocumentPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DocumentSid")
    public String documentSid;
    public DeleteDocumentPermissionPathParams withDocumentSid(String documentSid) {
        this.documentSid = documentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public DeleteDocumentPermissionPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteDocumentPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}