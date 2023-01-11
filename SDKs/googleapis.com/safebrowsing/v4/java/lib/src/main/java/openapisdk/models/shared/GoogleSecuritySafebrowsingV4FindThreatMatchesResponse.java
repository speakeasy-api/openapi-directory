package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSecuritySafebrowsingV4FindThreatMatchesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public GoogleSecuritySafebrowsingV4ThreatMatch[] matches;
    public GoogleSecuritySafebrowsingV4FindThreatMatchesResponse withMatches(GoogleSecuritySafebrowsingV4ThreatMatch[] matches) {
        this.matches = matches;
        return this;
    }
}