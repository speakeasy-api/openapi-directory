package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClickThroughUrl
 * Click-through URL
**/
public class ClickThroughUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computedClickThroughUrl")
    public String computedClickThroughUrl;
    public ClickThroughUrl withComputedClickThroughUrl(String computedClickThroughUrl) {
        this.computedClickThroughUrl = computedClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClickThroughUrl")
    public String customClickThroughUrl;
    public ClickThroughUrl withCustomClickThroughUrl(String customClickThroughUrl) {
        this.customClickThroughUrl = customClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLandingPage")
    public Boolean defaultLandingPage;
    public ClickThroughUrl withDefaultLandingPage(Boolean defaultLandingPage) {
        this.defaultLandingPage = defaultLandingPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landingPageId")
    public String landingPageId;
    public ClickThroughUrl withLandingPageId(String landingPageId) {
        this.landingPageId = landingPageId;
        return this;
    }
}