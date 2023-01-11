package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimension
 * This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
**/
public class Dimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionType")
    public String dimensionType;
    public Dimension withDimensionType(String dimensionType) {
        this.dimensionType = dimensionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionValues")
    public DimensionDimensionValue[] dimensionValues;
    public Dimension withDimensionValues(DimensionDimensionValue[] dimensionValues) {
        this.dimensionValues = dimensionValues;
        return this;
    }
}