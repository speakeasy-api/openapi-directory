package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSecuritySafebrowsingV4FindFullHashesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public GoogleSecuritySafebrowsingV4ThreatMatch[] matches;
    public GoogleSecuritySafebrowsingV4FindFullHashesResponse withMatches(GoogleSecuritySafebrowsingV4ThreatMatch[] matches) {
        this.matches = matches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumWaitDuration")
    public String minimumWaitDuration;
    public GoogleSecuritySafebrowsingV4FindFullHashesResponse withMinimumWaitDuration(String minimumWaitDuration) {
        this.minimumWaitDuration = minimumWaitDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeCacheDuration")
    public String negativeCacheDuration;
    public GoogleSecuritySafebrowsingV4FindFullHashesResponse withNegativeCacheDuration(String negativeCacheDuration) {
        this.negativeCacheDuration = negativeCacheDuration;
        return this;
    }
}