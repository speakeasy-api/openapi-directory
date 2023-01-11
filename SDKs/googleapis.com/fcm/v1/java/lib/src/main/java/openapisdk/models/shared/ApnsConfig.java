package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApnsConfig
 * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
**/
public class ApnsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fcmOptions")
    public ApnsFcmOptions fcmOptions;
    public ApnsConfig withFcmOptions(ApnsFcmOptions fcmOptions) {
        this.fcmOptions = fcmOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public ApnsConfig withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public java.util.Map<String, Object> payload;
    public ApnsConfig withPayload(java.util.Map<String, Object> payload) {
        this.payload = payload;
        return this;
    }
}