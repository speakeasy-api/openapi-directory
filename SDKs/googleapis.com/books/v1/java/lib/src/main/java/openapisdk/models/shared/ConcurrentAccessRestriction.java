package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConcurrentAccessRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceAllowed")
    public Boolean deviceAllowed;
    public ConcurrentAccessRestriction withDeviceAllowed(Boolean deviceAllowed) {
        this.deviceAllowed = deviceAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConcurrentAccessRestriction withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentDevices")
    public Integer maxConcurrentDevices;
    public ConcurrentAccessRestriction withMaxConcurrentDevices(Integer maxConcurrentDevices) {
        this.maxConcurrentDevices = maxConcurrentDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ConcurrentAccessRestriction withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public ConcurrentAccessRestriction withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public ConcurrentAccessRestriction withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restricted")
    public Boolean restricted;
    public ConcurrentAccessRestriction withRestricted(Boolean restricted) {
        this.restricted = restricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public ConcurrentAccessRestriction withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ConcurrentAccessRestriction withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeWindowSeconds")
    public Integer timeWindowSeconds;
    public ConcurrentAccessRestriction withTimeWindowSeconds(Integer timeWindowSeconds) {
        this.timeWindowSeconds = timeWindowSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public ConcurrentAccessRestriction withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}