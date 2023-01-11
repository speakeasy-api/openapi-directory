package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Filtering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public java.util.Map<String, String>[] exclude;
    public Filtering withExclude(java.util.Map<String, String>[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public java.util.Map<String, String>[] include;
    public Filtering withInclude(java.util.Map<String, String>[] include) {
        this.include = include;
        return this;
    }
}