package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MerchantOrderReturn
 * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
public class MerchantOrderReturn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public MerchantOrderReturn withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public MerchantOrderReturn withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public MerchantOrderReturn withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderReturnId")
    public String orderReturnId;
    public MerchantOrderReturn withOrderReturnId(String orderReturnId) {
        this.orderReturnId = orderReturnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnItems")
    public MerchantOrderReturnItem[] returnItems;
    public MerchantOrderReturn withReturnItems(MerchantOrderReturnItem[] returnItems) {
        this.returnItems = returnItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnShipments")
    public ReturnShipment[] returnShipments;
    public MerchantOrderReturn withReturnShipments(ReturnShipment[] returnShipments) {
        this.returnShipments = returnShipments;
        return this;
    }
}