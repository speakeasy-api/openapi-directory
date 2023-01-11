package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmpUrl
 * AMP URL response for a requested URL.
**/
public class AmpUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ampUrl")
    public String ampUrl;
    public AmpUrl withAmpUrl(String ampUrl) {
        this.ampUrl = ampUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cdnAmpUrl")
    public String cdnAmpUrl;
    public AmpUrl withCdnAmpUrl(String cdnAmpUrl) {
        this.cdnAmpUrl = cdnAmpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalUrl")
    public String originalUrl;
    public AmpUrl withOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
        return this;
    }
}