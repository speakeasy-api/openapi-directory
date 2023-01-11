package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_group_id")
    public String carrierGroupId;
    public ApplicationEditRequest withCarrierGroupId(String carrierGroupId) {
        this.carrierGroupId = carrierGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ApplicationEditRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}