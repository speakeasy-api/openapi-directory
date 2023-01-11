package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCoverageCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_coverage")
    public Boolean existingCoverage;
    public GroupCoverageCreateRequest withExistingCoverage(Boolean existingCoverage) {
        this.existingCoverage = existingCoverage;
        return this;
    }
    @JsonProperty("line_of_coverage")
    public GroupCoverageCreateRequestLineOfCoverageEnum lineOfCoverage;
    public GroupCoverageCreateRequest withLineOfCoverage(GroupCoverageCreateRequestLineOfCoverageEnum lineOfCoverage) {
        this.lineOfCoverage = lineOfCoverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GroupCoverageCreateRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("requested_effective_date")
    public LocalDate requestedEffectiveDate;
    public GroupCoverageCreateRequest withRequestedEffectiveDate(LocalDate requestedEffectiveDate) {
        this.requestedEffectiveDate = requestedEffectiveDate;
        return this;
    }
}