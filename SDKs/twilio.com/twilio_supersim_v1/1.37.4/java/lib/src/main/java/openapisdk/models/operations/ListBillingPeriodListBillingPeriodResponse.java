package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBillingPeriodListBillingPeriodResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_periods")
    public openapisdk.models.shared.SupersimV1SimBillingPeriod[] billingPeriods;
    public ListBillingPeriodListBillingPeriodResponse withBillingPeriods(openapisdk.models.shared.SupersimV1SimBillingPeriod[] billingPeriods) {
        this.billingPeriods = billingPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBillingPeriodListBillingPeriodResponseMeta meta;
    public ListBillingPeriodListBillingPeriodResponse withMeta(ListBillingPeriodListBillingPeriodResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}