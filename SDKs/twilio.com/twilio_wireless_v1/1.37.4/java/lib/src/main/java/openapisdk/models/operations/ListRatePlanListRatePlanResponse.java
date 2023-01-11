package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRatePlanListRatePlanResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRatePlanListRatePlanResponseMeta meta;
    public ListRatePlanListRatePlanResponse withMeta(ListRatePlanListRatePlanResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_plans")
    public openapisdk.models.shared.WirelessV1RatePlan[] ratePlans;
    public ListRatePlanListRatePlanResponse withRatePlans(openapisdk.models.shared.WirelessV1RatePlan[] ratePlans) {
        this.ratePlans = ratePlans;
        return this;
    }
}