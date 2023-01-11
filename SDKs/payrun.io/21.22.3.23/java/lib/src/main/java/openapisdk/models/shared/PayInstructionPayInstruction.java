package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayInstructionPayInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PayInstructionPayInstruction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public LocalDate endDate;
    public PayInstructionPayInstruction withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayLineTag")
    public String payLineTag;
    public PayInstructionPayInstruction withPayLineTag(String payLineTag) {
        this.payLineTag = payLineTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public LocalDate startDate;
    public PayInstructionPayInstruction withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}