package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebChannelCreateWebChannelRequest {
    @SpeakeasyMetadata("form:name=ChatFriendlyName")
    public String chatFriendlyName;
    public CreateWebChannelCreateWebChannelRequest withChatFriendlyName(String chatFriendlyName) {
        this.chatFriendlyName = chatFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChatUniqueName")
    public String chatUniqueName;
    public CreateWebChannelCreateWebChannelRequest withChatUniqueName(String chatUniqueName) {
        this.chatUniqueName = chatUniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomerFriendlyName")
    public String customerFriendlyName;
    public CreateWebChannelCreateWebChannelRequest withCustomerFriendlyName(String customerFriendlyName) {
        this.customerFriendlyName = customerFriendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=FlexFlowSid")
    public String flexFlowSid;
    public CreateWebChannelCreateWebChannelRequest withFlexFlowSid(String flexFlowSid) {
        this.flexFlowSid = flexFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String identity;
    public CreateWebChannelCreateWebChannelRequest withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=PreEngagementData")
    public String preEngagementData;
    public CreateWebChannelCreateWebChannelRequest withPreEngagementData(String preEngagementData) {
        this.preEngagementData = preEngagementData;
        return this;
    }
}