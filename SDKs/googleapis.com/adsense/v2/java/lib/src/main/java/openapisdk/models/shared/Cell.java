package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cell
 * Cell representation.
**/
public class Cell {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Cell withValue(String value) {
        this.value = value;
        return this;
    }
}