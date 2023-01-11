package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLabelsRequest
 * ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
**/
public class ListLabelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public ListLabelsRequest withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public String match;
    public ListLabelsRequest withMatch(String match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public ListLabelsRequest withStart(String start) {
        this.start = start;
        return this;
    }
}