package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotValueRegion
 * The metric values in the pivot region.
**/
public class PivotValueRegion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public PivotValueRegion withValues(String[] values) {
        this.values = values;
        return this;
    }
}