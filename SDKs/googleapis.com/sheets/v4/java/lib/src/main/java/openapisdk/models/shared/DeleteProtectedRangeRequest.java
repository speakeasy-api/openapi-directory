package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteProtectedRangeRequest
 * Deletes the protected range with the given ID.
**/
public class DeleteProtectedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRangeId")
    public Integer protectedRangeId;
    public DeleteProtectedRangeRequest withProtectedRangeId(Integer protectedRangeId) {
        this.protectedRangeId = protectedRangeId;
        return this;
    }
}