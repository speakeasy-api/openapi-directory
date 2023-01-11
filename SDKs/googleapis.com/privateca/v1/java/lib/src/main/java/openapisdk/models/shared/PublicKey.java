package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicKey
 * A PublicKey describes a public key.
**/
public class PublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public PublicKeyFormatEnum format;
    public PublicKey withFormat(PublicKeyFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PublicKey withKey(String key) {
        this.key = key;
        return this;
    }
}