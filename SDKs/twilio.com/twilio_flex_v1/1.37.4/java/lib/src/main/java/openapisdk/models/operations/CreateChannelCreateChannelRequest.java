package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelCreateChannelRequest {
    @SpeakeasyMetadata("form:name=ChatFriendlyName")
    public String chatFriendlyName;
    public CreateChannelCreateChannelRequest withChatFriendlyName(String chatFriendlyName) {
        this.chatFriendlyName = chatFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChatUniqueName")
    public String chatUniqueName;
    public CreateChannelCreateChannelRequest withChatUniqueName(String chatUniqueName) {
        this.chatUniqueName = chatUniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChatUserFriendlyName")
    public String chatUserFriendlyName;
    public CreateChannelCreateChannelRequest withChatUserFriendlyName(String chatUserFriendlyName) {
        this.chatUserFriendlyName = chatUserFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FlexFlowSid")
    public String flexFlowSid;
    public CreateChannelCreateChannelRequest withFlexFlowSid(String flexFlowSid) {
        this.flexFlowSid = flexFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateChannelCreateChannelRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=LongLived")
    public Boolean longLived;
    public CreateChannelCreateChannelRequest withLongLived(Boolean longLived) {
        this.longLived = longLived;
        return this;
    }
    @SpeakeasyMetadata("form:name=PreEngagementData")
    public String preEngagementData;
    public CreateChannelCreateChannelRequest withPreEngagementData(String preEngagementData) {
        this.preEngagementData = preEngagementData;
        return this;
    }
    @SpeakeasyMetadata("form:name=Target")
    public String target;
    public CreateChannelCreateChannelRequest withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskAttributes")
    public String taskAttributes;
    public CreateChannelCreateChannelRequest withTaskAttributes(String taskAttributes) {
        this.taskAttributes = taskAttributes;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaskSid")
    public String taskSid;
    public CreateChannelCreateChannelRequest withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
}