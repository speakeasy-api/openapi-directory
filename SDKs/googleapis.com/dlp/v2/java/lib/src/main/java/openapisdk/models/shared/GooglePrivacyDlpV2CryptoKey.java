package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CryptoKey
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
**/
public class GooglePrivacyDlpV2CryptoKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsWrapped")
    public GooglePrivacyDlpV2KmsWrappedCryptoKey kmsWrapped;
    public GooglePrivacyDlpV2CryptoKey withKmsWrapped(GooglePrivacyDlpV2KmsWrappedCryptoKey kmsWrapped) {
        this.kmsWrapped = kmsWrapped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transient")
    public GooglePrivacyDlpV2TransientCryptoKey transient_;
    public GooglePrivacyDlpV2CryptoKey withTransient(GooglePrivacyDlpV2TransientCryptoKey transient_) {
        this.transient_ = transient_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unwrapped")
    public GooglePrivacyDlpV2UnwrappedCryptoKey unwrapped;
    public GooglePrivacyDlpV2CryptoKey withUnwrapped(GooglePrivacyDlpV2UnwrappedCryptoKey unwrapped) {
        this.unwrapped = unwrapped;
        return this;
    }
}