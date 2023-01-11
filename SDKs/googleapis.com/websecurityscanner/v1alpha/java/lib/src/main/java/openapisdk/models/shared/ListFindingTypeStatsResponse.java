package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingTypeStatsResponse
 * Response for the `ListFindingTypeStats` method.
**/
public class ListFindingTypeStatsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingTypeStats")
    public FindingTypeStats[] findingTypeStats;
    public ListFindingTypeStatsResponse withFindingTypeStats(FindingTypeStats[] findingTypeStats) {
        this.findingTypeStats = findingTypeStats;
        return this;
    }
}