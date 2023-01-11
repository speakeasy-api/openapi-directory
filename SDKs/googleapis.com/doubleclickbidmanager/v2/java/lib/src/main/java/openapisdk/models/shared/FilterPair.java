package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterPair
 * Filter used to match traffic data in your report.
**/
public class FilterPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FilterPair withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public FilterPair withValue(String value) {
        this.value = value;
        return this;
    }
}