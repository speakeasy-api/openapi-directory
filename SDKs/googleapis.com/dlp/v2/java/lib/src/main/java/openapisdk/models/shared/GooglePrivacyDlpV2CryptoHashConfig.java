package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CryptoHashConfig
 * Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
**/
public class GooglePrivacyDlpV2CryptoHashConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKey")
    public GooglePrivacyDlpV2CryptoKey cryptoKey;
    public GooglePrivacyDlpV2CryptoHashConfig withCryptoKey(GooglePrivacyDlpV2CryptoKey cryptoKey) {
        this.cryptoKey = cryptoKey;
        return this;
    }
}