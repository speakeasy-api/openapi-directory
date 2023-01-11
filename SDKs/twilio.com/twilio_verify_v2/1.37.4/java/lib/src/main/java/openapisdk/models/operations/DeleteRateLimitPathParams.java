package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRateLimitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public DeleteRateLimitPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteRateLimitPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}