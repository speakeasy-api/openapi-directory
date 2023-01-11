package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessagingConfigurationCreateMessagingConfigurationRequest {
    @SpeakeasyMetadata("form:name=Country")
    public String country;
    public CreateMessagingConfigurationCreateMessagingConfigurationRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateMessagingConfigurationCreateMessagingConfigurationRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}