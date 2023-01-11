package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JsonPathMatcher
 * Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
**/
public class JsonPathMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonMatcher")
    public JsonPathMatcherJsonMatcherEnum jsonMatcher;
    public JsonPathMatcher withJsonMatcher(JsonPathMatcherJsonMatcherEnum jsonMatcher) {
        this.jsonMatcher = jsonMatcher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonPath")
    public String jsonPath;
    public JsonPathMatcher withJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
        return this;
    }
}