package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkReportSpecDimensionFilter
 * Describes which report rows to match based on their dimension values.
**/
public class NetworkReportSpecDimensionFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public NetworkReportSpecDimensionFilterDimensionEnum dimension;
    public NetworkReportSpecDimensionFilter withDimension(NetworkReportSpecDimensionFilterDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesAny")
    public StringList matchesAny;
    public NetworkReportSpecDimensionFilter withMatchesAny(StringList matchesAny) {
        this.matchesAny = matchesAny;
        return this;
    }
}