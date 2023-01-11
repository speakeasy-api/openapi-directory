package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public ListMemberPathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListMemberPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}