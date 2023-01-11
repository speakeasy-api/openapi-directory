package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersUpdateMerchantOrderIdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public OrdersUpdateMerchantOrderIdRequest withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersUpdateMerchantOrderIdRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
}