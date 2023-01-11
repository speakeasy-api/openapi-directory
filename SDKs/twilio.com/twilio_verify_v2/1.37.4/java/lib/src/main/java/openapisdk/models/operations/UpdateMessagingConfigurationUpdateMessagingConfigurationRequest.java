package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest {
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public UpdateMessagingConfigurationUpdateMessagingConfigurationRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}