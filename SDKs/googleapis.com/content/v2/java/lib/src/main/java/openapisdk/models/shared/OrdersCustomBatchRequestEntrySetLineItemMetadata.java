package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntrySetLineItemMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public OrderMerchantProvidedAnnotation[] annotations;
    public OrdersCustomBatchRequestEntrySetLineItemMetadata withAnnotations(OrderMerchantProvidedAnnotation[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersCustomBatchRequestEntrySetLineItemMetadata withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersCustomBatchRequestEntrySetLineItemMetadata withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}