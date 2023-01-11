package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChartSourceRange
 * Source ranges for a chart.
**/
public class ChartSourceRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public GridRange[] sources;
    public ChartSourceRange withSources(GridRange[] sources) {
        this.sources = sources;
        return this;
    }
}