package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[] items;
    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse withItems(openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta meta;
    public ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse withMeta(ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}