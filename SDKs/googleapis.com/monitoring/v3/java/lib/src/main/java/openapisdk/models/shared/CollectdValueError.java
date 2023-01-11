package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectdValueError
 * Describes the error status for values that were not written.
**/
public class CollectdValueError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CollectdValueError withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public CollectdValueError withIndex(Integer index) {
        this.index = index;
        return this;
    }
}