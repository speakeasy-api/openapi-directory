package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UnsupportedAuthenticationProblem
 * A problem that indicates that the authentication used is not supported.
**/
public class UnsupportedAuthenticationProblem {
    @JsonProperty("detail")
    public String detail;
    public UnsupportedAuthenticationProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public UnsupportedAuthenticationProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UnsupportedAuthenticationProblem withType(String type) {
        this.type = type;
        return this;
    }
}