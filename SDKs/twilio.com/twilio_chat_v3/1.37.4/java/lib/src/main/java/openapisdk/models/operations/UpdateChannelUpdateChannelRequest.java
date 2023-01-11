package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelUpdateChannelRequest {
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public UpdateChannelUpdateChannelRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ChannelEnumChannelTypeEnum type;
    public UpdateChannelUpdateChannelRequest withType(openapisdk.models.shared.ChannelEnumChannelTypeEnum type) {
        this.type = type;
        return this;
    }
}