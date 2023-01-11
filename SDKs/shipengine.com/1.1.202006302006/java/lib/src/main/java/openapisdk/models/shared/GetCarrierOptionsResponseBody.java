package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCarrierOptionsResponseBody
 * A carrier list options response body
**/
public class GetCarrierOptionsResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public GetCarrierOptionsResponseBodyCarrierAdvancedOption[] options;
    public GetCarrierOptionsResponseBody withOptions(GetCarrierOptionsResponseBodyCarrierAdvancedOption[] options) {
        this.options = options;
        return this;
    }
}