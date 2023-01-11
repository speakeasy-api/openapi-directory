package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleRange
 * Specifies the double start and end of the range using half-open interval semantics [start, end).
**/
public class DoubleRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Double end;
    public DoubleRange withEnd(Double end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Double start;
    public DoubleRange withStart(Double start) {
        this.start = start;
        return this;
    }
}