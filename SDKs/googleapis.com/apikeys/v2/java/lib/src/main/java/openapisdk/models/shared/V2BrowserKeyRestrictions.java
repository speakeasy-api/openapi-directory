package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2BrowserKeyRestrictions
 * The HTTP referrers (websites) that are allowed to use the key.
**/
public class V2BrowserKeyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedReferrers")
    public String[] allowedReferrers;
    public V2BrowserKeyRestrictions withAllowedReferrers(String[] allowedReferrers) {
        this.allowedReferrers = allowedReferrers;
        return this;
    }
}