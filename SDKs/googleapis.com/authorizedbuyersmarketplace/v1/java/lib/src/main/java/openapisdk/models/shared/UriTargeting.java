package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UriTargeting
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
public class UriTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedUris")
    public String[] excludedUris;
    public UriTargeting withExcludedUris(String[] excludedUris) {
        this.excludedUris = excludedUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedUris")
    public String[] targetedUris;
    public UriTargeting withTargetedUris(String[] targetedUris) {
        this.targetedUris = targetedUris;
        return this;
    }
}