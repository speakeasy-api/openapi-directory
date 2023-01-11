package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyChallengeResponseResult
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
public class VerifyChallengeResponseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public VerifyChallengeResponseResult withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePermanentId")
    public String devicePermanentId;
    public VerifyChallengeResponseResult withDevicePermanentId(String devicePermanentId) {
        this.devicePermanentId = devicePermanentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSignal")
    public String deviceSignal;
    public VerifyChallengeResponseResult withDeviceSignal(String deviceSignal) {
        this.deviceSignal = deviceSignal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyTrustLevel")
    public VerifyChallengeResponseResultKeyTrustLevelEnum keyTrustLevel;
    public VerifyChallengeResponseResult withKeyTrustLevel(VerifyChallengeResponseResultKeyTrustLevelEnum keyTrustLevel) {
        this.keyTrustLevel = keyTrustLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signedPublicKeyAndChallenge")
    public String signedPublicKeyAndChallenge;
    public VerifyChallengeResponseResult withSignedPublicKeyAndChallenge(String signedPublicKeyAndChallenge) {
        this.signedPublicKeyAndChallenge = signedPublicKeyAndChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualDeviceId")
    public String virtualDeviceId;
    public VerifyChallengeResponseResult withVirtualDeviceId(String virtualDeviceId) {
        this.virtualDeviceId = virtualDeviceId;
        return this;
    }
}