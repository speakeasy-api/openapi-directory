package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectdPayloadError
 * Describes the error status for payloads that were not written.
**/
public class CollectdPayloadError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CollectdPayloadError withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public CollectdPayloadError withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueErrors")
    public CollectdValueError[] valueErrors;
    public CollectdPayloadError withValueErrors(CollectdValueError[] valueErrors) {
        this.valueErrors = valueErrors;
        return this;
    }
}