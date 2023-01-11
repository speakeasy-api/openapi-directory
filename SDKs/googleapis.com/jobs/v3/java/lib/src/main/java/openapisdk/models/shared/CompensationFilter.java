package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationFilter
 * Input only. Filter on job compensation type and amount.
**/
public class CompensationFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeJobsWithUnspecifiedCompensationRange")
    public Boolean includeJobsWithUnspecifiedCompensationRange;
    public CompensationFilter withIncludeJobsWithUnspecifiedCompensationRange(Boolean includeJobsWithUnspecifiedCompensationRange) {
        this.includeJobsWithUnspecifiedCompensationRange = includeJobsWithUnspecifiedCompensationRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public CompensationRange range;
    public CompensationFilter withRange(CompensationRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CompensationFilterTypeEnum type;
    public CompensationFilter withType(CompensationFilterTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public CompensationFilterUnitsEnum[] units;
    public CompensationFilter withUnits(CompensationFilterUnitsEnum[] units) {
        this.units = units;
        return this;
    }
}