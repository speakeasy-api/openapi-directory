package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyUrl
 * Tracking URLs from third parties to track interactions with an audio or a video creative.
**/
public class ThirdPartyUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ThirdPartyUrlTypeEnum type;
    public ThirdPartyUrl withType(ThirdPartyUrlTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ThirdPartyUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}