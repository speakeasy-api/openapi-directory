package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileUsabilityInspectionResult
 * Mobile-usability inspection results.
**/
public class MobileUsabilityInspectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public MobileUsabilityIssue[] issues;
    public MobileUsabilityInspectionResult withIssues(MobileUsabilityIssue[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verdict")
    public MobileUsabilityInspectionResultVerdictEnum verdict;
    public MobileUsabilityInspectionResult withVerdict(MobileUsabilityInspectionResultVerdictEnum verdict) {
        this.verdict = verdict;
        return this;
    }
}