package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignatureInfo
 * Information about the digital signature of the resource.
**/
public class SignatureInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerKmsKeyVersion")
    public String customerKmsKeyVersion;
    public SignatureInfo withCustomerKmsKeyVersion(String customerKmsKeyVersion) {
        this.customerKmsKeyVersion = customerKmsKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePublicKeyPem")
    public String googlePublicKeyPem;
    public SignatureInfo withGooglePublicKeyPem(String googlePublicKeyPem) {
        this.googlePublicKeyPem = googlePublicKeyPem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public SignatureInfo withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}