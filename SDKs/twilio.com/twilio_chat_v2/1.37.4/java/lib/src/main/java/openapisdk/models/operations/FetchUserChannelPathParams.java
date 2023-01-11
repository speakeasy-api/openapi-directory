package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchUserChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ChannelSid")
    public String channelSid;
    public FetchUserChannelPathParams withChannelSid(String channelSid) {
        this.channelSid = channelSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public FetchUserChannelPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UserSid")
    public String userSid;
    public FetchUserChannelPathParams withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}