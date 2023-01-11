package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpRouteHeaderMatchIntegerRange
 * Represents an integer value range.
**/
public class HttpRouteHeaderMatchIntegerRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public Integer end;
    public HttpRouteHeaderMatchIntegerRange withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public Integer start;
    public HttpRouteHeaderMatchIntegerRange withStart(Integer start) {
        this.start = start;
        return this;
    }
}