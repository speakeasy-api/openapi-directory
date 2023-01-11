package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncDocumentPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DocumentSid")
    public String documentSid;
    public UpdateSyncDocumentPermissionPathParams withDocumentSid(String documentSid) {
        this.documentSid = documentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Identity")
    public String identity;
    public UpdateSyncDocumentPermissionPathParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public UpdateSyncDocumentPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}