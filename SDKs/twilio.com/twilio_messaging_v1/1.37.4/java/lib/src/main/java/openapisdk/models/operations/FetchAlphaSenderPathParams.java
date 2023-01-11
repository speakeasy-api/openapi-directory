package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAlphaSenderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchAlphaSenderPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchAlphaSenderPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}