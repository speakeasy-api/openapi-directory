package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StringMatcher
 * Specifies the way to match a string. [#next-free-field: 7]
**/
public class StringMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public StringMatcher withExact(String exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreCase")
    public Boolean ignoreCase;
    public StringMatcher withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public StringMatcher withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public StringMatcher withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safeRegex")
    public RegexMatcher safeRegex;
    public StringMatcher withSafeRegex(RegexMatcher safeRegex) {
        this.safeRegex = safeRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public StringMatcher withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}