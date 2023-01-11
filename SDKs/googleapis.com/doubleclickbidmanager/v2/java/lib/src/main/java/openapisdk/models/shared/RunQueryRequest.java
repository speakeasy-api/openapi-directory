package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunQueryRequest
 * Request to run a stored query to generate a report.
**/
public class RunQueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataRange")
    public DataRange dataRange;
    public RunQueryRequest withDataRange(DataRange dataRange) {
        this.dataRange = dataRange;
        return this;
    }
}