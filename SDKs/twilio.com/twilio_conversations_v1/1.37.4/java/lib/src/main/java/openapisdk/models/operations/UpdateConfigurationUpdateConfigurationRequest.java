package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationUpdateConfigurationRequest {
    @SpeakeasyMetadata("form:name=DefaultChatServiceSid")
    public String defaultChatServiceSid;
    public UpdateConfigurationUpdateConfigurationRequest withDefaultChatServiceSid(String defaultChatServiceSid) {
        this.defaultChatServiceSid = defaultChatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultClosedTimer")
    public String defaultClosedTimer;
    public UpdateConfigurationUpdateConfigurationRequest withDefaultClosedTimer(String defaultClosedTimer) {
        this.defaultClosedTimer = defaultClosedTimer;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultInactiveTimer")
    public String defaultInactiveTimer;
    public UpdateConfigurationUpdateConfigurationRequest withDefaultInactiveTimer(String defaultInactiveTimer) {
        this.defaultInactiveTimer = defaultInactiveTimer;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultMessagingServiceSid")
    public String defaultMessagingServiceSid;
    public UpdateConfigurationUpdateConfigurationRequest withDefaultMessagingServiceSid(String defaultMessagingServiceSid) {
        this.defaultMessagingServiceSid = defaultMessagingServiceSid;
        return this;
    }
}