package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=AlexaSkillId")
    public String alexaSkillId;
    public CreateServiceCreateServiceRequest withAlexaSkillId(String alexaSkillId) {
        this.alexaSkillId = alexaSkillId;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApnCredentialSid")
    public String apnCredentialSid;
    public CreateServiceCreateServiceRequest withApnCredentialSid(String apnCredentialSid) {
        this.apnCredentialSid = apnCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultAlexaNotificationProtocolVersion")
    public String defaultAlexaNotificationProtocolVersion;
    public CreateServiceCreateServiceRequest withDefaultAlexaNotificationProtocolVersion(String defaultAlexaNotificationProtocolVersion) {
        this.defaultAlexaNotificationProtocolVersion = defaultAlexaNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultApnNotificationProtocolVersion")
    public String defaultApnNotificationProtocolVersion;
    public CreateServiceCreateServiceRequest withDefaultApnNotificationProtocolVersion(String defaultApnNotificationProtocolVersion) {
        this.defaultApnNotificationProtocolVersion = defaultApnNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultFcmNotificationProtocolVersion")
    public String defaultFcmNotificationProtocolVersion;
    public CreateServiceCreateServiceRequest withDefaultFcmNotificationProtocolVersion(String defaultFcmNotificationProtocolVersion) {
        this.defaultFcmNotificationProtocolVersion = defaultFcmNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultGcmNotificationProtocolVersion")
    public String defaultGcmNotificationProtocolVersion;
    public CreateServiceCreateServiceRequest withDefaultGcmNotificationProtocolVersion(String defaultGcmNotificationProtocolVersion) {
        this.defaultGcmNotificationProtocolVersion = defaultGcmNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryCallbackEnabled")
    public Boolean deliveryCallbackEnabled;
    public CreateServiceCreateServiceRequest withDeliveryCallbackEnabled(Boolean deliveryCallbackEnabled) {
        this.deliveryCallbackEnabled = deliveryCallbackEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryCallbackUrl")
    public String deliveryCallbackUrl;
    public CreateServiceCreateServiceRequest withDeliveryCallbackUrl(String deliveryCallbackUrl) {
        this.deliveryCallbackUrl = deliveryCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FacebookMessengerPageId")
    public String facebookMessengerPageId;
    public CreateServiceCreateServiceRequest withFacebookMessengerPageId(String facebookMessengerPageId) {
        this.facebookMessengerPageId = facebookMessengerPageId;
        return this;
    }
    @SpeakeasyMetadata("form:name=FcmCredentialSid")
    public String fcmCredentialSid;
    public CreateServiceCreateServiceRequest withFcmCredentialSid(String fcmCredentialSid) {
        this.fcmCredentialSid = fcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=GcmCredentialSid")
    public String gcmCredentialSid;
    public CreateServiceCreateServiceRequest withGcmCredentialSid(String gcmCredentialSid) {
        this.gcmCredentialSid = gcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogEnabled")
    public Boolean logEnabled;
    public CreateServiceCreateServiceRequest withLogEnabled(Boolean logEnabled) {
        this.logEnabled = logEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public CreateServiceCreateServiceRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}