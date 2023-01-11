package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransitTableTransitTimeRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public TransitTableTransitTimeRowTransitTimeValue[] values;
    public TransitTableTransitTimeRow withValues(TransitTableTransitTimeRowTransitTimeValue[] values) {
        this.values = values;
        return this;
    }
}