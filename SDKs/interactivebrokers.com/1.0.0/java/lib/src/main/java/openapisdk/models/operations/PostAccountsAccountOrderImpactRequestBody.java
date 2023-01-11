package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAccountsAccountOrderImpactRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aux Price")
    public Double auxPrice;
    public PostAccountsAccountOrderImpactRequestBody withAuxPrice(Double auxPrice) {
        this.auxPrice = auxPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public PostAccountsAccountOrderImpactRequestBody withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Currency")
    public String currency;
    public PostAccountsAccountOrderImpactRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public String customerOrderId;
    public PostAccountsAccountOrderImpactRequestBody withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstrumentType")
    public String instrumentType;
    public PostAccountsAccountOrderImpactRequestBody withInstrumentType(String instrumentType) {
        this.instrumentType = instrumentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListingExchange")
    public String listingExchange;
    public PostAccountsAccountOrderImpactRequestBody withListingExchange(String listingExchange) {
        this.listingExchange = listingExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Order Type")
    public Double orderType;
    public PostAccountsAccountOrderImpactRequestBody withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public PostAccountsAccountOrderImpactRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public PostAccountsAccountOrderImpactRequestBody withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public Double side;
    public PostAccountsAccountOrderImpactRequestBody withSide(Double side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ticker")
    public String ticker;
    public PostAccountsAccountOrderImpactRequestBody withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Time in Force")
    public Double timeInForce;
    public PostAccountsAccountOrderImpactRequestBody withTimeInForce(Double timeInForce) {
        this.timeInForce = timeInForce;
        return this;
    }
}