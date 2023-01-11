package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInteractionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListInteractionPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SessionSid")
    public String sessionSid;
    public ListInteractionPathParams withSessionSid(String sessionSid) {
        this.sessionSid = sessionSid;
        return this;
    }
}