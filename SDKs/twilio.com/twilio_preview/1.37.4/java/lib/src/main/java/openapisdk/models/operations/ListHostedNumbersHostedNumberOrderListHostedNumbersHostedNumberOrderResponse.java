package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder[] items;
    public ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse withItems(openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta meta;
    public ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse withMeta(ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}