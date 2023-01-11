package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountsAccountOrdersCustomerOrderIdRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Aux Price")
    public Double auxPrice;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withAuxPrice(Double auxPrice) {
        this.auxPrice = auxPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerOrderId")
    public String customerOrderId;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withCustomerOrderId(String customerOrderId) {
        this.customerOrderId = customerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GermanHftAlgo")
    public Boolean germanHftAlgo;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withGermanHftAlgo(Boolean germanHftAlgo) {
        this.germanHftAlgo = germanHftAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2Algo")
    public String mifid2Algo;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withMifid2Algo(String mifid2Algo) {
        this.mifid2Algo = mifid2Algo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2DecisionMaker")
    public String mifid2DecisionMaker;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withMifid2DecisionMaker(String mifid2DecisionMaker) {
        this.mifid2DecisionMaker = mifid2DecisionMaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2ExecutionAlgo")
    public String mifid2ExecutionAlgo;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withMifid2ExecutionAlgo(String mifid2ExecutionAlgo) {
        this.mifid2ExecutionAlgo = mifid2ExecutionAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mifid2ExecutionTrader")
    public String mifid2ExecutionTrader;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withMifid2ExecutionTrader(String mifid2ExecutionTrader) {
        this.mifid2ExecutionTrader = mifid2ExecutionTrader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Order Type")
    public Double orderType;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withOrderType(Double orderType) {
        this.orderType = orderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrigCustomerOrderId")
    public String origCustomerOrderId;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withOrigCustomerOrderId(String origCustomerOrderId) {
        this.origCustomerOrderId = origCustomerOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outside RTH")
    public Double outsideRTH;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withOutsideRth(Double outsideRTH) {
        this.outsideRTH = outsideRTH;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Double quantity;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Side")
    public Double side;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withSide(Double side) {
        this.side = side;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Time in Force")
    public Double timeInForce;
    public PutAccountsAccountOrdersCustomerOrderIdRequestBody withTimeInForce(Double timeInForce) {
        this.timeInForce = timeInForce;
        return this;
    }
}