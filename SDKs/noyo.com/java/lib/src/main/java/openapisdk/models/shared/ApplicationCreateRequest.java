package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationCreateRequest {
    @JsonProperty("application_type")
    public ApplicationCreateRequestApplicationTypeEnum applicationType;
    public ApplicationCreateRequest withApplicationType(ApplicationCreateRequestApplicationTypeEnum applicationType) {
        this.applicationType = applicationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_group_id")
    public String carrierGroupId;
    public ApplicationCreateRequest withCarrierGroupId(String carrierGroupId) {
        this.carrierGroupId = carrierGroupId;
        return this;
    }
    @JsonProperty("carrier_id")
    public String carrierId;
    public ApplicationCreateRequest withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ApplicationCreateRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}