package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSyncDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchSyncDocumentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSyncDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}