package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NotifyV1ServiceNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public NotifyV1ServiceNotification withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public NotifyV1ServiceNotification withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alexa")
    public Object alexa;
    public NotifyV1ServiceNotification withAlexa(Object alexa) {
        this.alexa = alexa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apn")
    public Object apn;
    public NotifyV1ServiceNotification withApn(Object apn) {
        this.apn = apn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public NotifyV1ServiceNotification withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public NotifyV1ServiceNotification withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public NotifyV1ServiceNotification withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_messenger")
    public Object facebookMessenger;
    public NotifyV1ServiceNotification withFacebookMessenger(Object facebookMessenger) {
        this.facebookMessenger = facebookMessenger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcm")
    public Object fcm;
    public NotifyV1ServiceNotification withFcm(Object fcm) {
        this.fcm = fcm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcm")
    public Object gcm;
    public NotifyV1ServiceNotification withGcm(Object gcm) {
        this.gcm = gcm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identities")
    public String[] identities;
    public NotifyV1ServiceNotification withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public NotificationEnumPriorityEnum priority;
    public NotifyV1ServiceNotification withPriority(NotificationEnumPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public String[] segments;
    public NotifyV1ServiceNotification withSegments(String[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public NotifyV1ServiceNotification withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NotifyV1ServiceNotification withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public Object sms;
    public NotifyV1ServiceNotification withSms(Object sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sound")
    public String sound;
    public NotifyV1ServiceNotification withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public NotifyV1ServiceNotification withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public NotifyV1ServiceNotification withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public NotifyV1ServiceNotification withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}