package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchDocumentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchDocumentPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}