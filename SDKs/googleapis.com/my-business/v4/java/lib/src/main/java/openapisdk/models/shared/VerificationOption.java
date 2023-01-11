package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerificationOption
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
**/
public class VerificationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressData")
    public AddressVerificationData addressData;
    public VerificationOption withAddressData(AddressVerificationData addressData) {
        this.addressData = addressData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailData")
    public EmailVerificationData emailData;
    public VerificationOption withEmailData(EmailVerificationData emailData) {
        this.emailData = emailData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneData")
    public PhoneVerificationData phoneData;
    public VerificationOption withPhoneData(PhoneVerificationData phoneData) {
        this.phoneData = phoneData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationMethod")
    public VerificationOptionVerificationMethodEnum verificationMethod;
    public VerificationOption withVerificationMethod(VerificationOptionVerificationMethodEnum verificationMethod) {
        this.verificationMethod = verificationMethod;
        return this;
    }
}