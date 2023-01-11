package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSyncDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListSyncDocumentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}