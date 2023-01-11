package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DuplicateLineItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateLineItemId")
    public String duplicateLineItemId;
    public DuplicateLineItemResponse withDuplicateLineItemId(String duplicateLineItemId) {
        this.duplicateLineItemId = duplicateLineItemId;
        return this;
    }
}