package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountsAccountOrdersCustomerOrderId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public String customerOrderId;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderQty")
    public Double orderQty;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withOrderQty(Double orderQty) {
        this.orderQty = orderQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderType")
    public Double orderType;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public String price;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public Double side;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withSide(Double side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public openapisdk.models.shared.OrderStatusEnum status;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withStatus(openapisdk.models.shared.OrderStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Symbol")
    public Double symbol;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withSymbol(Double symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warning")
    public String warning;
    public PutAccountsAccountOrdersCustomerOrderId200ApplicationJson withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}