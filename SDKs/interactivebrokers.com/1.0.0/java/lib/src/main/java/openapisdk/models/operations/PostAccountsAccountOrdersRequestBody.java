package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAccountsAccountOrdersRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aux Price")
    public Double auxPrice;
    public PostAccountsAccountOrdersRequestBody withAuxPrice(Double auxPrice) {
        this.auxPrice = auxPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public PostAccountsAccountOrdersRequestBody withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Currency")
    public String currency;
    public PostAccountsAccountOrdersRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public String customerOrderId;
    public PostAccountsAccountOrdersRequestBody withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GermanHftAlgo")
    public Boolean germanHftAlgo;
    public PostAccountsAccountOrdersRequestBody withGermanHftAlgo(Boolean germanHftAlgo) {
        this.germanHftAlgo = germanHftAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstrumentType")
    public String instrumentType;
    public PostAccountsAccountOrdersRequestBody withInstrumentType(String instrumentType) {
        this.instrumentType = instrumentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListingExchange")
    public String listingExchange;
    public PostAccountsAccountOrdersRequestBody withListingExchange(String listingExchange) {
        this.listingExchange = listingExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2Algo")
    public String mifid2Algo;
    public PostAccountsAccountOrdersRequestBody withMifid2Algo(String mifid2Algo) {
        this.mifid2Algo = mifid2Algo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2DecisionMaker")
    public String mifid2DecisionMaker;
    public PostAccountsAccountOrdersRequestBody withMifid2DecisionMaker(String mifid2DecisionMaker) {
        this.mifid2DecisionMaker = mifid2DecisionMaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2ExecutionAlgo")
    public String mifid2ExecutionAlgo;
    public PostAccountsAccountOrdersRequestBody withMifid2ExecutionAlgo(String mifid2ExecutionAlgo) {
        this.mifid2ExecutionAlgo = mifid2ExecutionAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2ExecutionTrader")
    public String mifid2ExecutionTrader;
    public PostAccountsAccountOrdersRequestBody withMifid2ExecutionTrader(String mifid2ExecutionTrader) {
        this.mifid2ExecutionTrader = mifid2ExecutionTrader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Order Type")
    public Double orderType;
    public PostAccountsAccountOrdersRequestBody withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrderRestrictions")
    public Double orderRestrictions;
    public PostAccountsAccountOrdersRequestBody withOrderRestrictions(Double orderRestrictions) {
        this.orderRestrictions = orderRestrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outside RTH")
    public Double outsideRTH;
    public PostAccountsAccountOrdersRequestBody withOutsideRth(Double outsideRTH) {
        this.outsideRTH = outsideRTH;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public PostAccountsAccountOrdersRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public PostAccountsAccountOrdersRequestBody withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public Double side;
    public PostAccountsAccountOrdersRequestBody withSide(Double side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ticker")
    public String ticker;
    public PostAccountsAccountOrdersRequestBody withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Time in Force")
    public Double timeInForce;
    public PostAccountsAccountOrdersRequestBody withTimeInForce(Double timeInForce) {
        this.timeInForce = timeInForce;
        return this;
    }
}