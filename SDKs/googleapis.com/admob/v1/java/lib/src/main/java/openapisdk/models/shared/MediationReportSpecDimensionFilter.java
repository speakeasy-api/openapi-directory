package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediationReportSpecDimensionFilter
 * Describes which report rows to match based on their dimension values.
**/
public class MediationReportSpecDimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public MediationReportSpecDimensionFilterDimensionEnum dimension;
    public MediationReportSpecDimensionFilter withDimension(MediationReportSpecDimensionFilterDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesAny")
    public StringList matchesAny;
    public MediationReportSpecDimensionFilter withMatchesAny(StringList matchesAny) {
        this.matchesAny = matchesAny;
        return this;
    }
}