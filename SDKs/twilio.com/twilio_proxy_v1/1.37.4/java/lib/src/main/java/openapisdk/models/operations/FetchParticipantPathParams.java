package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchParticipantPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SessionSid")
    public String sessionSid;
    public FetchParticipantPathParams withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchParticipantPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}