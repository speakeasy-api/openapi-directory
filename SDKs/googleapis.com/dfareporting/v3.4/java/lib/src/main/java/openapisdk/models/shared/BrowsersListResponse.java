package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrowsersListResponse
 * Browser List Response
**/
public class BrowsersListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browsers")
    public Browser[] browsers;
    public BrowsersListResponse withBrowsers(Browser[] browsers) {
        this.browsers = browsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BrowsersListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}