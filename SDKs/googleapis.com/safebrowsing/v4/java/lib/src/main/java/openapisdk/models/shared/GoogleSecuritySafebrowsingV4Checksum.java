package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4Checksum
 * The expected state of a client's local database.
**/
public class GoogleSecuritySafebrowsingV4Checksum {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256")
    public String sha256;
    public GoogleSecuritySafebrowsingV4Checksum withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
}