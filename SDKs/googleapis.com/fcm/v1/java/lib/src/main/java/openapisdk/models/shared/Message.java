package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Message
 * Message to send by Firebase Cloud Messaging Service.
**/
public class Message {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("android")
    public AndroidConfig android;
    public Message withAndroid(AndroidConfig android) {
        this.android = android;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apns")
    public ApnsConfig apns;
    public Message withApns(ApnsConfig apns) {
        this.apns = apns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public Message withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, String> data;
    public Message withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmOptions")
    public FcmOptions fcmOptions;
    public Message withFcmOptions(FcmOptions fcmOptions) {
        this.fcmOptions = fcmOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Message withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public Notification notification;
    public Message withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public Message withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Message withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webpush")
    public WebpushConfig webpush;
    public Message withWebpush(WebpushConfig webpush) {
        this.webpush = webpush;
        return this;
    }
}