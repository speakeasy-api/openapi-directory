package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Digest
 * A Digest holds a cryptographic message digest.
**/
public class Digest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public Digest withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha384")
    public String sha384;
    public Digest withSha384(String sha384) {
        this.sha384 = sha384;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha512")
    public String sha512;
    public Digest withSha512(String sha512) {
        this.sha512 = sha512;
        return this;
    }
}