package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AggregateFamily {
    @JsonProperty("label")
    public AggregateFamilyLabelEnum label;
    public AggregateFamily withLabel(AggregateFamilyLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public AggregateFamily withValue(Long value) {
        this.value = value;
        return this;
    }
}