package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebChannelUpdateWebChannelRequest {
    @SpeakeasyMetadata("form:name=ChatStatus")
    public openapisdk.models.shared.WebChannelEnumChatStatusEnum chatStatus;
    public UpdateWebChannelUpdateWebChannelRequest withChatStatus(openapisdk.models.shared.WebChannelEnumChatStatusEnum chatStatus) {
        this.chatStatus = chatStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostEngagementData")
    public String postEngagementData;
    public UpdateWebChannelUpdateWebChannelRequest withPostEngagementData(String postEngagementData) {
        this.postEngagementData = postEngagementData;
        return this;
    }
}