package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApkBinary
 * Represents the binary payload of an APK.
**/
public class ApkBinary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1")
    public String sha1;
    public ApkBinary withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public ApkBinary withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
}