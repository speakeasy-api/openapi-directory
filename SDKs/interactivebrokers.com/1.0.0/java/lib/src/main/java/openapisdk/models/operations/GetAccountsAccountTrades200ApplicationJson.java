package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountsAccountTrades200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvgPrice")
    public Double avgPrice;
    public GetAccountsAccountTrades200ApplicationJson withAvgPrice(Double avgPrice) {
        this.avgPrice = avgPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Commission")
    public Double commission;
    public GetAccountsAccountTrades200ApplicationJson withCommission(Double commission) {
        this.commission = commission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommissionCurrency")
    public String commissionCurrency;
    public GetAccountsAccountTrades200ApplicationJson withCommissionCurrency(String commissionCurrency) {
        this.commissionCurrency = commissionCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public GetAccountsAccountTrades200ApplicationJson withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Currency")
    public String currency;
    public GetAccountsAccountTrades200ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public Double customerOrderId;
    public GetAccountsAccountTrades200ApplicationJson withCustomerOrderId(Double customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecId")
    public String execId;
    public GetAccountsAccountTrades200ApplicationJson withExecId(String execId) {
        this.execId = execId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionTime")
    public String executionTime;
    public GetAccountsAccountTrades200ApplicationJson withExecutionTime(String executionTime) {
        this.executionTime = executionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilledQuantity")
    public Double filledQuantity;
    public GetAccountsAccountTrades200ApplicationJson withFilledQuantity(Double filledQuantity) {
        this.filledQuantity = filledQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastMarket")
    public String lastMarket;
    public GetAccountsAccountTrades200ApplicationJson withLastMarket(String lastMarket) {
        this.lastMarket = lastMarket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListingExchange")
    public String listingExchange;
    public GetAccountsAccountTrades200ApplicationJson withListingExchange(String listingExchange) {
        this.listingExchange = listingExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderId")
    public String orderId;
    public GetAccountsAccountTrades200ApplicationJson withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderType")
    public Double orderType;
    public GetAccountsAccountTrades200ApplicationJson withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public GetAccountsAccountTrades200ApplicationJson withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemainingQuantity")
    public Double remainingQuantity;
    public GetAccountsAccountTrades200ApplicationJson withRemainingQuantity(Double remainingQuantity) {
        this.remainingQuantity = remainingQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public GetAccountsAccountTrades200ApplicationJsonSideEnum side;
    public GetAccountsAccountTrades200ApplicationJson withSide(GetAccountsAccountTrades200ApplicationJsonSideEnum side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ticker")
    public String ticker;
    public GetAccountsAccountTrades200ApplicationJson withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TradePrice")
    public Double tradePrice;
    public GetAccountsAccountTrades200ApplicationJson withTradePrice(Double tradePrice) {
        this.tradePrice = tradePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TradeSize")
    public Double tradeSize;
    public GetAccountsAccountTrades200ApplicationJson withTradeSize(Double tradeSize) {
        this.tradeSize = tradeSize;
        return this;
    }
}