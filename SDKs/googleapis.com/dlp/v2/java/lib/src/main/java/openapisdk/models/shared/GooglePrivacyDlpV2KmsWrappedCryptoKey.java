package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KmsWrappedCryptoKey
 * Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
**/
public class GooglePrivacyDlpV2KmsWrappedCryptoKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyName")
    public String cryptoKeyName;
    public GooglePrivacyDlpV2KmsWrappedCryptoKey withCryptoKeyName(String cryptoKeyName) {
        this.cryptoKeyName = cryptoKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrappedKey")
    public String wrappedKey;
    public GooglePrivacyDlpV2KmsWrappedCryptoKey withWrappedKey(String wrappedKey) {
        this.wrappedKey = wrappedKey;
        return this;
    }
}