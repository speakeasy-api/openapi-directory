package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateProtectedRangeRequest
 * Updates an existing protected range with the specified protectedRangeId.
**/
public class UpdateProtectedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateProtectedRangeRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRange")
    public ProtectedRange protectedRange;
    public UpdateProtectedRangeRequest withProtectedRange(ProtectedRange protectedRange) {
        this.protectedRange = protectedRange;
        return this;
    }
}