package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskChannelUpdateTaskChannelRequest {
    @SpeakeasyMetadata("form:name=ChannelOptimizedRouting")
    public Boolean channelOptimizedRouting;
    public UpdateTaskChannelUpdateTaskChannelRequest withChannelOptimizedRouting(Boolean channelOptimizedRouting) {
        this.channelOptimizedRouting = channelOptimizedRouting;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateTaskChannelUpdateTaskChannelRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}