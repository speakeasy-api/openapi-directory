package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CisJobInstructionBaseCisJobInstructionBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employer")
    public CisJobInstructionBaseCisJobInstructionBaseEmployer employer;
    public CisJobInstructionBaseCisJobInstructionBase withEmployer(CisJobInstructionBaseCisJobInstructionBaseEmployer employer) {
        this.employer = employer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public CisJobInstructionBaseCisJobInstructionBase withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubContractors")
    public CisJobInstructionBaseCisJobInstructionBaseSubContractor subContractors;
    public CisJobInstructionBaseCisJobInstructionBase withSubContractors(CisJobInstructionBaseCisJobInstructionBaseSubContractor subContractors) {
        this.subContractors = subContractors;
        return this;
    }
}