package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSessionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchSessionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSessionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}