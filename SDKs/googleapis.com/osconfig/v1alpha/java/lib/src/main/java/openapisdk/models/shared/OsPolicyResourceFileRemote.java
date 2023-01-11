package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceFileRemote
 * Specifies a file available via some URI.
**/
public class OsPolicyResourceFileRemote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Checksum")
    public String sha256Checksum;
    public OsPolicyResourceFileRemote withSha256Checksum(String sha256Checksum) {
        this.sha256Checksum = sha256Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public OsPolicyResourceFileRemote withUri(String uri) {
        this.uri = uri;
        return this;
    }
}