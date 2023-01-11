package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingTypeStats
 * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
**/
public class FindingTypeStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingCount")
    public Integer findingCount;
    public FindingTypeStats withFindingCount(Integer findingCount) {
        this.findingCount = findingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingType")
    public String findingType;
    public FindingTypeStats withFindingType(String findingType) {
        this.findingType = findingType;
        return this;
    }
}