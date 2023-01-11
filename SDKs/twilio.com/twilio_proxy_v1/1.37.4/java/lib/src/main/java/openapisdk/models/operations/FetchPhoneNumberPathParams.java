package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchPhoneNumberPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchPhoneNumberPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}