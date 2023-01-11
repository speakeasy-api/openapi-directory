package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2UnwrappedCryptoKey
 * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
**/
public class GooglePrivacyDlpV2UnwrappedCryptoKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GooglePrivacyDlpV2UnwrappedCryptoKey withKey(String key) {
        this.key = key;
        return this;
    }
}