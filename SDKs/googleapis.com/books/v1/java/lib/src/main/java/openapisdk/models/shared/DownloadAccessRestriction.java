package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DownloadAccessRestriction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceAllowed")
    public Boolean deviceAllowed;
    public DownloadAccessRestriction withDeviceAllowed(Boolean deviceAllowed) {
        this.deviceAllowed = deviceAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadsAcquired")
    public Integer downloadsAcquired;
    public DownloadAccessRestriction withDownloadsAcquired(Integer downloadsAcquired) {
        this.downloadsAcquired = downloadsAcquired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("justAcquired")
    public Boolean justAcquired;
    public DownloadAccessRestriction withJustAcquired(Boolean justAcquired) {
        this.justAcquired = justAcquired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DownloadAccessRestriction withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDownloadDevices")
    public Integer maxDownloadDevices;
    public DownloadAccessRestriction withMaxDownloadDevices(Integer maxDownloadDevices) {
        this.maxDownloadDevices = maxDownloadDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DownloadAccessRestriction withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public DownloadAccessRestriction withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonCode")
    public String reasonCode;
    public DownloadAccessRestriction withReasonCode(String reasonCode) {
        this.reasonCode = reasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restricted")
    public Boolean restricted;
    public DownloadAccessRestriction withRestricted(Boolean restricted) {
        this.restricted = restricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public DownloadAccessRestriction withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public DownloadAccessRestriction withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeId")
    public String volumeId;
    public DownloadAccessRestriction withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}