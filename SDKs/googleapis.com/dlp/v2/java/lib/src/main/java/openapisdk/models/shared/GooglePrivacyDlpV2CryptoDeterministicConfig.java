package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CryptoDeterministicConfig
 * Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
**/
public class GooglePrivacyDlpV2CryptoDeterministicConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public GooglePrivacyDlpV2FieldId context;
    public GooglePrivacyDlpV2CryptoDeterministicConfig withContext(GooglePrivacyDlpV2FieldId context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKey")
    public GooglePrivacyDlpV2CryptoKey cryptoKey;
    public GooglePrivacyDlpV2CryptoDeterministicConfig withCryptoKey(GooglePrivacyDlpV2CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surrogateInfoType")
    public GooglePrivacyDlpV2InfoType surrogateInfoType;
    public GooglePrivacyDlpV2CryptoDeterministicConfig withSurrogateInfoType(GooglePrivacyDlpV2InfoType surrogateInfoType) {
        this.surrogateInfoType = surrogateInfoType;
        return this;
    }
}