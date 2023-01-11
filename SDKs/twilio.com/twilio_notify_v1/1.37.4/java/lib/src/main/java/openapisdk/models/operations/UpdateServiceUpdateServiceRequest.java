package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=AlexaSkillId")
    public String alexaSkillId;
    public UpdateServiceUpdateServiceRequest withAlexaSkillId(String alexaSkillId) {
        this.alexaSkillId = alexaSkillId;
        return this;
    }
    @SpeakeasyMetadata("form:name=ApnCredentialSid")
    public String apnCredentialSid;
    public UpdateServiceUpdateServiceRequest withApnCredentialSid(String apnCredentialSid) {
        this.apnCredentialSid = apnCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultAlexaNotificationProtocolVersion")
    public String defaultAlexaNotificationProtocolVersion;
    public UpdateServiceUpdateServiceRequest withDefaultAlexaNotificationProtocolVersion(String defaultAlexaNotificationProtocolVersion) {
        this.defaultAlexaNotificationProtocolVersion = defaultAlexaNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultApnNotificationProtocolVersion")
    public String defaultApnNotificationProtocolVersion;
    public UpdateServiceUpdateServiceRequest withDefaultApnNotificationProtocolVersion(String defaultApnNotificationProtocolVersion) {
        this.defaultApnNotificationProtocolVersion = defaultApnNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultFcmNotificationProtocolVersion")
    public String defaultFcmNotificationProtocolVersion;
    public UpdateServiceUpdateServiceRequest withDefaultFcmNotificationProtocolVersion(String defaultFcmNotificationProtocolVersion) {
        this.defaultFcmNotificationProtocolVersion = defaultFcmNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultGcmNotificationProtocolVersion")
    public String defaultGcmNotificationProtocolVersion;
    public UpdateServiceUpdateServiceRequest withDefaultGcmNotificationProtocolVersion(String defaultGcmNotificationProtocolVersion) {
        this.defaultGcmNotificationProtocolVersion = defaultGcmNotificationProtocolVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryCallbackEnabled")
    public Boolean deliveryCallbackEnabled;
    public UpdateServiceUpdateServiceRequest withDeliveryCallbackEnabled(Boolean deliveryCallbackEnabled) {
        this.deliveryCallbackEnabled = deliveryCallbackEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryCallbackUrl")
    public String deliveryCallbackUrl;
    public UpdateServiceUpdateServiceRequest withDeliveryCallbackUrl(String deliveryCallbackUrl) {
        this.deliveryCallbackUrl = deliveryCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FacebookMessengerPageId")
    public String facebookMessengerPageId;
    public UpdateServiceUpdateServiceRequest withFacebookMessengerPageId(String facebookMessengerPageId) {
        this.facebookMessengerPageId = facebookMessengerPageId;
        return this;
    }
    @SpeakeasyMetadata("form:name=FcmCredentialSid")
    public String fcmCredentialSid;
    public UpdateServiceUpdateServiceRequest withFcmCredentialSid(String fcmCredentialSid) {
        this.fcmCredentialSid = fcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUpdateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=GcmCredentialSid")
    public String gcmCredentialSid;
    public UpdateServiceUpdateServiceRequest withGcmCredentialSid(String gcmCredentialSid) {
        this.gcmCredentialSid = gcmCredentialSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogEnabled")
    public Boolean logEnabled;
    public UpdateServiceUpdateServiceRequest withLogEnabled(Boolean logEnabled) {
        this.logEnabled = logEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSid")
    public String messagingServiceSid;
    public UpdateServiceUpdateServiceRequest withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
}