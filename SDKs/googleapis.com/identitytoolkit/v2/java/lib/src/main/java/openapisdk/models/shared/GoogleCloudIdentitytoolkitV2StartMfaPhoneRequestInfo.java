package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo
 * App Verification info for a StartMfa request.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRetrievalInfo")
    public GoogleCloudIdentitytoolkitV2AutoRetrievalInfo autoRetrievalInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withAutoRetrievalInfo(GoogleCloudIdentitytoolkitV2AutoRetrievalInfo autoRetrievalInfo) {
        this.autoRetrievalInfo = autoRetrievalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosReceipt")
    public String iosReceipt;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withIosReceipt(String iosReceipt) {
        this.iosReceipt = iosReceipt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosSecret")
    public String iosSecret;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withIosSecret(String iosSecret) {
        this.iosSecret = iosSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaToken")
    public String recaptchaToken;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withRecaptchaToken(String recaptchaToken) {
        this.recaptchaToken = recaptchaToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safetyNetToken")
    public String safetyNetToken;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo withSafetyNetToken(String safetyNetToken) {
        this.safetyNetToken = safetyNetToken;
        return this;
    }
}