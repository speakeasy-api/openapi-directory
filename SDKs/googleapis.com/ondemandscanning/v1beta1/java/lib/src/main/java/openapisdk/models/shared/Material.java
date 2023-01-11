package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Material {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public java.util.Map<String, String> digest;
    public Material withDigest(java.util.Map<String, String> digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Material withUri(String uri) {
        this.uri = uri;
        return this;
    }
}