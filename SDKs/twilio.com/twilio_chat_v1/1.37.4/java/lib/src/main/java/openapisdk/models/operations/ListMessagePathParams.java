package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public ListMessagePathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListMessagePathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}