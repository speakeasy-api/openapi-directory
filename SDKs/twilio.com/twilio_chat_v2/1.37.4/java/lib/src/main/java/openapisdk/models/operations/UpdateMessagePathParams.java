package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public UpdateMessagePathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public UpdateMessagePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateMessagePathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}