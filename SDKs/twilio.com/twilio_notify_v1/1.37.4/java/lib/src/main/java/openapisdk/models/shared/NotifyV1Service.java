package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NotifyV1Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public NotifyV1Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alexa_skill_id")
    public String alexaSkillId;
    public NotifyV1Service withAlexaSkillId(String alexaSkillId) {
        this.alexaSkillId = alexaSkillId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apn_credential_sid")
    public String apnCredentialSid;
    public NotifyV1Service withApnCredentialSid(String apnCredentialSid) {
        this.apnCredentialSid = apnCredentialSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public NotifyV1Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public NotifyV1Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_alexa_notification_protocol_version")
    public String defaultAlexaNotificationProtocolVersion;
    public NotifyV1Service withDefaultAlexaNotificationProtocolVersion(String defaultAlexaNotificationProtocolVersion) {
        this.defaultAlexaNotificationProtocolVersion = defaultAlexaNotificationProtocolVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_apn_notification_protocol_version")
    public String defaultApnNotificationProtocolVersion;
    public NotifyV1Service withDefaultApnNotificationProtocolVersion(String defaultApnNotificationProtocolVersion) {
        this.defaultApnNotificationProtocolVersion = defaultApnNotificationProtocolVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_fcm_notification_protocol_version")
    public String defaultFcmNotificationProtocolVersion;
    public NotifyV1Service withDefaultFcmNotificationProtocolVersion(String defaultFcmNotificationProtocolVersion) {
        this.defaultFcmNotificationProtocolVersion = defaultFcmNotificationProtocolVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_gcm_notification_protocol_version")
    public String defaultGcmNotificationProtocolVersion;
    public NotifyV1Service withDefaultGcmNotificationProtocolVersion(String defaultGcmNotificationProtocolVersion) {
        this.defaultGcmNotificationProtocolVersion = defaultGcmNotificationProtocolVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_callback_enabled")
    public Boolean deliveryCallbackEnabled;
    public NotifyV1Service withDeliveryCallbackEnabled(Boolean deliveryCallbackEnabled) {
        this.deliveryCallbackEnabled = deliveryCallbackEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_callback_url")
    public String deliveryCallbackUrl;
    public NotifyV1Service withDeliveryCallbackUrl(String deliveryCallbackUrl) {
        this.deliveryCallbackUrl = deliveryCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_messenger_page_id")
    public String facebookMessengerPageId;
    public NotifyV1Service withFacebookMessengerPageId(String facebookMessengerPageId) {
        this.facebookMessengerPageId = facebookMessengerPageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcm_credential_sid")
    public String fcmCredentialSid;
    public NotifyV1Service withFcmCredentialSid(String fcmCredentialSid) {
        this.fcmCredentialSid = fcmCredentialSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public NotifyV1Service withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcm_credential_sid")
    public String gcmCredentialSid;
    public NotifyV1Service withGcmCredentialSid(String gcmCredentialSid) {
        this.gcmCredentialSid = gcmCredentialSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public NotifyV1Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_enabled")
    public Boolean logEnabled;
    public NotifyV1Service withLogEnabled(Boolean logEnabled) {
        this.logEnabled = logEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_sid")
    public String messagingServiceSid;
    public NotifyV1Service withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NotifyV1Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NotifyV1Service withUrl(String url) {
        this.url = url;
        return this;
    }
}