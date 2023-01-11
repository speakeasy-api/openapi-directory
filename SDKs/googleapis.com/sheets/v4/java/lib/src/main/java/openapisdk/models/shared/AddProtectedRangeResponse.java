package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddProtectedRangeResponse
 * The result of adding a new protected range.
**/
public class AddProtectedRangeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRange")
    public ProtectedRange protectedRange;
    public AddProtectedRangeResponse withProtectedRange(ProtectedRange protectedRange) {
        this.protectedRange = protectedRange;
        return this;
    }
}