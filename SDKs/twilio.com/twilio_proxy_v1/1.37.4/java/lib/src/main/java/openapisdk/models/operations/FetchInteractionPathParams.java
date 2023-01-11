package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchInteractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchInteractionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SessionSid")
    public String sessionSid;
    public FetchInteractionPathParams withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchInteractionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}