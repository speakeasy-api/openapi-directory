package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyRatingsMpaa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public EditVideoRequestBodyRatingsMpaaReasonEnum reason;
    public EditVideoRequestBodyRatingsMpaa withReason(EditVideoRequestBodyRatingsMpaaReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}