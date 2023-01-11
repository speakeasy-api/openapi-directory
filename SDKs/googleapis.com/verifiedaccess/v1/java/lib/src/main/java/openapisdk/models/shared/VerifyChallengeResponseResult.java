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
    @JsonProperty("deviceEnrollmentId")
    public String deviceEnrollmentId;
    public VerifyChallengeResponseResult withDeviceEnrollmentId(String deviceEnrollmentId) {
        this.deviceEnrollmentId = deviceEnrollmentId;
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
    @JsonProperty("signedPublicKeyAndChallenge")
    public String signedPublicKeyAndChallenge;
    public VerifyChallengeResponseResult withSignedPublicKeyAndChallenge(String signedPublicKeyAndChallenge) {
        this.signedPublicKeyAndChallenge = signedPublicKeyAndChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationOutput")
    public String verificationOutput;
    public VerifyChallengeResponseResult withVerificationOutput(String verificationOutput) {
        this.verificationOutput = verificationOutput;
        return this;
    }
}