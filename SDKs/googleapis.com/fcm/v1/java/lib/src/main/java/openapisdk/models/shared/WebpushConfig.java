package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebpushConfig
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
public class WebpushConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, String> data;
    public WebpushConfig withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmOptions")
    public WebpushFcmOptions fcmOptions;
    public WebpushConfig withFcmOptions(WebpushFcmOptions fcmOptions) {
        this.fcmOptions = fcmOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public WebpushConfig withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public java.util.Map<String, Object> notification;
    public WebpushConfig withNotification(java.util.Map<String, Object> notification) {
        this.notification = notification;
        return this;
    }
}