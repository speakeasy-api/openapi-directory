package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWirelessRatePlanListWirelessRatePlanResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWirelessRatePlanListWirelessRatePlanResponseMeta meta;
    public ListWirelessRatePlanListWirelessRatePlanResponse withMeta(ListWirelessRatePlanListWirelessRatePlanResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_plans")
    public openapisdk.models.shared.PreviewWirelessRatePlan[] ratePlans;
    public ListWirelessRatePlanListWirelessRatePlanResponse withRatePlans(openapisdk.models.shared.PreviewWirelessRatePlan[] ratePlans) {
        this.ratePlans = ratePlans;
        return this;
    }
}