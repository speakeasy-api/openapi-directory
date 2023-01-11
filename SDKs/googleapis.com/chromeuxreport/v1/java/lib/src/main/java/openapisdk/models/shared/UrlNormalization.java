package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlNormalization
 * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
**/
public class UrlNormalization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedUrl")
    public String normalizedUrl;
    public UrlNormalization withNormalizedUrl(String normalizedUrl) {
        this.normalizedUrl = normalizedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalUrl")
    public String originalUrl;
    public UrlNormalization withOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
        return this;
    }
}