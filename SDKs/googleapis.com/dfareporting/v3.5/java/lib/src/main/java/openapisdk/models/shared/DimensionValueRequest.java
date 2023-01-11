package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionValueRequest
 * Represents a DimensionValuesRequest.
**/
public class DimensionValueRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionName")
    public String dimensionName;
    public DimensionValueRequest withDimensionName(String dimensionName) {
        this.dimensionName = dimensionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public DimensionValueRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public DimensionFilter[] filters;
    public DimensionValueRequest withFilters(DimensionFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DimensionValueRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public DimensionValueRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}