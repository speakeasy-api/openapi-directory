package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathFilter
 * A representation of filter path.
**/
public class PathFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regexes")
    public String[] regexes;
    public PathFilter withRegexes(String[] regexes) {
        this.regexes = regexes;
        return this;
    }
}