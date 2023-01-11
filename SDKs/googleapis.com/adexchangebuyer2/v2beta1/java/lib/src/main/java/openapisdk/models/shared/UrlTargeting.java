package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlTargeting
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
public class UrlTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedUrls")
    public String[] excludedUrls;
    public UrlTargeting withExcludedUrls(String[] excludedUrls) {
        this.excludedUrls = excludedUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetedUrls")
    public String[] targetedUrls;
    public UrlTargeting withTargetedUrls(String[] targetedUrls) {
        this.targetedUrls = targetedUrls;
        return this;
    }
}