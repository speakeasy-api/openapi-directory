package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplianceOccurrence
 * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
**/
public class ComplianceOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonComplianceReason")
    public String nonComplianceReason;
    public ComplianceOccurrence withNonComplianceReason(String nonComplianceReason) {
        this.nonComplianceReason = nonComplianceReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonCompliantFiles")
    public NonCompliantFile[] nonCompliantFiles;
    public ComplianceOccurrence withNonCompliantFiles(NonCompliantFile[] nonCompliantFiles) {
        this.nonCompliantFiles = nonCompliantFiles;
        return this;
    }
}