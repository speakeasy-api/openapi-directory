package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskChannelCreateTaskChannelRequest {
    @SpeakeasyMetadata("form:name=ChannelOptimizedRouting")
    public Boolean channelOptimizedRouting;
    public CreateTaskChannelCreateTaskChannelRequest withChannelOptimizedRouting(Boolean channelOptimizedRouting) {
        this.channelOptimizedRouting = channelOptimizedRouting;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateTaskChannelCreateTaskChannelRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateTaskChannelCreateTaskChannelRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}