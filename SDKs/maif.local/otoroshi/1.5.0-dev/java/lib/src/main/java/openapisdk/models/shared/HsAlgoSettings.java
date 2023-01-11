package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HsAlgoSettings
 * Settings for an HMAC + SHA signing algorithm
**/
public class HsAlgoSettings {
    @JsonProperty("secret")
    public String secret;
    public HsAlgoSettings withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public HsAlgoSettings withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public HsAlgoSettings withType(String type) {
        this.type = type;
        return this;
    }
}