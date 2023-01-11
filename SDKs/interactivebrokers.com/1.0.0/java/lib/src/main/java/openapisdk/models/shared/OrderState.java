package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderState
 * An object containing all the properties defining an order
**/
public class OrderState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public OrderState withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public Double customerOrderId;
    public OrderState withCustomerOrderId(Double customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilledQuantity")
    public Double filledQuantity;
    public OrderState withFilledQuantity(Double filledQuantity) {
        this.filledQuantity = filledQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListingExchange")
    public String listingExchange;
    public OrderState withListingExchange(String listingExchange) {
        this.listingExchange = listingExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderType")
    public Double orderType;
    public OrderState withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutsideRTH")
    public String outsideRTH;
    public OrderState withOutsideRth(String outsideRTH) {
        this.outsideRTH = outsideRTH;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public OrderState withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemainingQuantity")
    public Double remainingQuantity;
    public OrderState withRemainingQuantity(Double remainingQuantity) {
        this.remainingQuantity = remainingQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public OrderStateSideEnum side;
    public OrderState withSide(OrderStateSideEnum side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public OrderStatusEnum status;
    public OrderState withStatus(OrderStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ticker")
    public String ticker;
    public OrderState withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeInForce")
    public Double timeInForce;
    public OrderState withTimeInForce(Double timeInForce) {
        this.timeInForce = timeInForce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionTime")
    public String transactionTime;
    public OrderState withTransactionTime(String transactionTime) {
        this.transactionTime = transactionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warning")
    public String warning;
    public OrderState withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}