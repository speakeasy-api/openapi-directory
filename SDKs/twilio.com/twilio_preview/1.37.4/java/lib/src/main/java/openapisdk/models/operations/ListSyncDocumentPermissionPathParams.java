package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncDocumentPermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DocumentSid")
    public String documentSid;
    public ListSyncDocumentPermissionPathParams withDocumentSid(String documentSid) {
        this.documentSid = documentSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncDocumentPermissionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}