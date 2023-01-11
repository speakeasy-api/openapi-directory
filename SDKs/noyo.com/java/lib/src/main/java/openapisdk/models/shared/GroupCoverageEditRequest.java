package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCoverageEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_coverage")
    public Boolean existingCoverage;
    public GroupCoverageEditRequest withExistingCoverage(Boolean existingCoverage) {
        this.existingCoverage = existingCoverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GroupCoverageEditRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_effective_date")
    public LocalDate requestedEffectiveDate;
    public GroupCoverageEditRequest withRequestedEffectiveDate(LocalDate requestedEffectiveDate) {
        this.requestedEffectiveDate = requestedEffectiveDate;
        return this;
    }
}