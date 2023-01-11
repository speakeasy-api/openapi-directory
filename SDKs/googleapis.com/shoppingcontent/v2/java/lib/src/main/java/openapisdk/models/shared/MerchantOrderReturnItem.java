package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MerchantOrderReturnItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerReturnReason")
    public CustomerReturnReason customerReturnReason;
    public MerchantOrderReturnItem withCustomerReturnReason(CustomerReturnReason customerReturnReason) {
        this.customerReturnReason = customerReturnReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public MerchantOrderReturnItem withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantReturnReason")
    public RefundReason merchantReturnReason;
    public MerchantOrderReturnItem withMerchantReturnReason(RefundReason merchantReturnReason) {
        this.merchantReturnReason = merchantReturnReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public OrderLineItemProduct product;
    public MerchantOrderReturnItem withProduct(OrderLineItemProduct product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShipmentIds")
    public String[] returnShipmentIds;
    public MerchantOrderReturnItem withReturnShipmentIds(String[] returnShipmentIds) {
        this.returnShipmentIds = returnShipmentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public MerchantOrderReturnItem withState(String state) {
        this.state = state;
        return this;
    }
}