package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthV1Certs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public Object keys;
    public OauthV1Certs withKeys(Object keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public OauthV1Certs withUrl(String url) {
        this.url = url;
        return this;
    }
}