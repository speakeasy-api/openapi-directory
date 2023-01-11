package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyRatingsTv {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public EditVideoRequestBodyRatingsTvReasonEnum reason;
    public EditVideoRequestBodyRatingsTv withReason(EditVideoRequestBodyRatingsTvReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}