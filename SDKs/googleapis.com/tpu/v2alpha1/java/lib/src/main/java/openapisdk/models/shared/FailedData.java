package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedData
 * Further data for the failed state.
**/
public class FailedData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public FailedData withError(Status error) {
        this.error = error;
        return this;
    }
}