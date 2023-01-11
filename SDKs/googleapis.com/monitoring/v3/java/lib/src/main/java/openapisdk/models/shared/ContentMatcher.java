package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentMatcher
 * Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
**/
public class ContentMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ContentMatcher withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonPathMatcher")
    public JsonPathMatcher jsonPathMatcher;
    public ContentMatcher withJsonPathMatcher(JsonPathMatcher jsonPathMatcher) {
        this.jsonPathMatcher = jsonPathMatcher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matcher")
    public ContentMatcherMatcherEnum matcher;
    public ContentMatcher withMatcher(ContentMatcherMatcherEnum matcher) {
        this.matcher = matcher;
        return this;
    }
}