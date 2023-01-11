package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationInfo
 * Job compensation details.
**/
public class CompensationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualizedBaseCompensationRange")
    public CompensationRange annualizedBaseCompensationRange;
    public CompensationInfo withAnnualizedBaseCompensationRange(CompensationRange annualizedBaseCompensationRange) {
        this.annualizedBaseCompensationRange = annualizedBaseCompensationRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annualizedTotalCompensationRange")
    public CompensationRange annualizedTotalCompensationRange;
    public CompensationInfo withAnnualizedTotalCompensationRange(CompensationRange annualizedTotalCompensationRange) {
        this.annualizedTotalCompensationRange = annualizedTotalCompensationRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public CompensationEntry[] entries;
    public CompensationInfo withEntries(CompensationEntry[] entries) {
        this.entries = entries;
        return this;
    }
}