package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegexValidation
 * Validation based on regular expressions.
**/
public class RegexValidation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexes")
    public String[] regexes;
    public RegexValidation withRegexes(String[] regexes) {
        this.regexes = regexes;
        return this;
    }
}