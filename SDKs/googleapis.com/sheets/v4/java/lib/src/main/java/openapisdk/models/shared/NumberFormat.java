package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumberFormat
 * The number format of a cell.
**/
public class NumberFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pattern")
    public String pattern;
    public NumberFormat withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NumberFormatTypeEnum type;
    public NumberFormat withType(NumberFormatTypeEnum type) {
        this.type = type;
        return this;
    }
}