package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCoverageResult {
    @JsonProperty("application_id")
    public String applicationId;
    public GroupCoverageResult withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public GroupCoverageResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_coverage")
    public Boolean existingCoverage;
    public GroupCoverageResult withExistingCoverage(Boolean existingCoverage) {
        this.existingCoverage = existingCoverage;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GroupCoverageResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("line_of_coverage")
    public GroupCoverageResultLineOfCoverageEnum lineOfCoverage;
    public GroupCoverageResult withLineOfCoverage(GroupCoverageResultLineOfCoverageEnum lineOfCoverage) {
        this.lineOfCoverage = lineOfCoverage;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public GroupCoverageResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public GroupCoverageResult withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("requested_effective_date")
    public LocalDate requestedEffectiveDate;
    public GroupCoverageResult withRequestedEffectiveDate(LocalDate requestedEffectiveDate) {
        this.requestedEffectiveDate = requestedEffectiveDate;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public GroupCoverageResult withVersion(String version) {
        this.version = version;
        return this;
    }
}