package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidConfig
 * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
**/
public class AndroidConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collapseKey")
    public String collapseKey;
    public AndroidConfig withCollapseKey(String collapseKey) {
        this.collapseKey = collapseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, String> data;
    public AndroidConfig withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directBootOk")
    public Boolean directBootOk;
    public AndroidConfig withDirectBootOk(Boolean directBootOk) {
        this.directBootOk = directBootOk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmOptions")
    public AndroidFcmOptions fcmOptions;
    public AndroidConfig withFcmOptions(AndroidFcmOptions fcmOptions) {
        this.fcmOptions = fcmOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public AndroidNotification notification;
    public AndroidConfig withNotification(AndroidNotification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public AndroidConfigPriorityEnum priority;
    public AndroidConfig withPriority(AndroidConfigPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedPackageName")
    public String restrictedPackageName;
    public AndroidConfig withRestrictedPackageName(String restrictedPackageName) {
        this.restrictedPackageName = restrictedPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public AndroidConfig withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}