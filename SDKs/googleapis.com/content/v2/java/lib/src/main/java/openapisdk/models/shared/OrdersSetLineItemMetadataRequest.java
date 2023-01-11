package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersSetLineItemMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public OrderMerchantProvidedAnnotation[] annotations;
    public OrdersSetLineItemMetadataRequest withAnnotations(OrderMerchantProvidedAnnotation[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersSetLineItemMetadataRequest withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersSetLineItemMetadataRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersSetLineItemMetadataRequest withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}