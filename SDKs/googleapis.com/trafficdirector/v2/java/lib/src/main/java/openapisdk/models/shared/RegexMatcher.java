package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegexMatcher
 * A regex matcher designed for safety when used with untrusted input.
**/
public class RegexMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleRe2")
    public GoogleRe2 googleRe2;
    public RegexMatcher withGoogleRe2(GoogleRe2 googleRe2) {
        this.googleRe2 = googleRe2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public RegexMatcher withRegex(String regex) {
        this.regex = regex;
        return this;
    }
}