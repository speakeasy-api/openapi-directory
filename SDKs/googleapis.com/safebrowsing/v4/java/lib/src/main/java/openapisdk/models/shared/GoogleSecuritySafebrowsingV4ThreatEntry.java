package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatEntry
 * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
**/
public class GoogleSecuritySafebrowsingV4ThreatEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;
    public GoogleSecuritySafebrowsingV4ThreatEntry withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public GoogleSecuritySafebrowsingV4ThreatEntry withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleSecuritySafebrowsingV4ThreatEntry withUrl(String url) {
        this.url = url;
        return this;
    }
}