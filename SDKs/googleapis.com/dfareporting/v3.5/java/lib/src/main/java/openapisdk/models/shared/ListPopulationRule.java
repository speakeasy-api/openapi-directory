package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPopulationRule
 * Remarketing List Population Rule.
**/
public class ListPopulationRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityId")
    public String floodlightActivityId;
    public ListPopulationRule withFloodlightActivityId(String floodlightActivityId) {
        this.floodlightActivityId = floodlightActivityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityName")
    public String floodlightActivityName;
    public ListPopulationRule withFloodlightActivityName(String floodlightActivityName) {
        this.floodlightActivityName = floodlightActivityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPopulationClauses")
    public ListPopulationClause[] listPopulationClauses;
    public ListPopulationRule withListPopulationClauses(ListPopulationClause[] listPopulationClauses) {
        this.listPopulationClauses = listPopulationClauses;
        return this;
    }
}