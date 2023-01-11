package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entry
 * A single replacement configuration.
**/
public class Entry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public Entry withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replace")
    public String replace;
    public Entry withReplace(String replace) {
        this.replace = replace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search")
    public String search;
    public Entry withSearch(String search) {
        this.search = search;
        return this;
    }
}