package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicKeyCredential
 * A public key format and data.
**/
public class PublicKeyCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public PublicKeyCredentialFormatEnum format;
    public PublicKeyCredential withFormat(PublicKeyCredentialFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public PublicKeyCredential withKey(String key) {
        this.key = key;
        return this;
    }
}