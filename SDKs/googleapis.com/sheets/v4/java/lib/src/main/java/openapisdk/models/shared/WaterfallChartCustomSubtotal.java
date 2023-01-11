package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaterfallChartCustomSubtotal
 * A custom subtotal column for a waterfall chart series.
**/
public class WaterfallChartCustomSubtotal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataIsSubtotal")
    public Boolean dataIsSubtotal;
    public WaterfallChartCustomSubtotal withDataIsSubtotal(Boolean dataIsSubtotal) {
        this.dataIsSubtotal = dataIsSubtotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public WaterfallChartCustomSubtotal withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtotalIndex")
    public Integer subtotalIndex;
    public WaterfallChartCustomSubtotal withSubtotalIndex(Integer subtotalIndex) {
        this.subtotalIndex = subtotalIndex;
        return this;
    }
}