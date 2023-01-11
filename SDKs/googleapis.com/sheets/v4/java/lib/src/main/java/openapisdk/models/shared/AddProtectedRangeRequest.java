package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddProtectedRangeRequest
 * Adds a new protected range.
**/
public class AddProtectedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRange")
    public ProtectedRange protectedRange;
    public AddProtectedRangeRequest withProtectedRange(ProtectedRange protectedRange) {
        this.protectedRange = protectedRange;
        return this;
    }
}