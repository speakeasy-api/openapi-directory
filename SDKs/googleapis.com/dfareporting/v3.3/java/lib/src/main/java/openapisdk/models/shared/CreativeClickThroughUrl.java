package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeClickThroughUrl
 * Click-through URL
**/
public class CreativeClickThroughUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computedClickThroughUrl")
    public String computedClickThroughUrl;
    public CreativeClickThroughUrl withComputedClickThroughUrl(String computedClickThroughUrl) {
        this.computedClickThroughUrl = computedClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClickThroughUrl")
    public String customClickThroughUrl;
    public CreativeClickThroughUrl withCustomClickThroughUrl(String customClickThroughUrl) {
        this.customClickThroughUrl = customClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landingPageId")
    public String landingPageId;
    public CreativeClickThroughUrl withLandingPageId(String landingPageId) {
        this.landingPageId = landingPageId;
        return this;
    }
}