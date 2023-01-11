package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransientCryptoKey
 * Use this to have a random data crypto key generated. It will be discarded after the request finishes.
**/
public class GooglePrivacyDlpV2TransientCryptoKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2TransientCryptoKey withName(String name) {
        this.name = name;
        return this;
    }
}