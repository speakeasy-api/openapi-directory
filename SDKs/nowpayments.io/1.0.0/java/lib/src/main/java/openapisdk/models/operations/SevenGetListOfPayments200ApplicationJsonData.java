package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SevenGetListOfPayments200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actually_paid")
    public Double actuallyPaid;
    public SevenGetListOfPayments200ApplicationJsonData withActuallyPaid(Double actuallyPaid) {
        this.actuallyPaid = actuallyPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_description")
    public String orderDescription;
    public SevenGetListOfPayments200ApplicationJsonData withOrderDescription(String orderDescription) {
        this.orderDescription = orderDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_id")
    public String orderId;
    public SevenGetListOfPayments200ApplicationJsonData withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome_amount")
    public Double outcomeAmount;
    public SevenGetListOfPayments200ApplicationJsonData withOutcomeAmount(Double outcomeAmount) {
        this.outcomeAmount = outcomeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome_currency")
    public String outcomeCurrency;
    public SevenGetListOfPayments200ApplicationJsonData withOutcomeCurrency(String outcomeCurrency) {
        this.outcomeCurrency = outcomeCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_address")
    public String payAddress;
    public SevenGetListOfPayments200ApplicationJsonData withPayAddress(String payAddress) {
        this.payAddress = payAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_amount")
    public Double payAmount;
    public SevenGetListOfPayments200ApplicationJsonData withPayAmount(Double payAmount) {
        this.payAmount = payAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pay_currency")
    public String payCurrency;
    public SevenGetListOfPayments200ApplicationJsonData withPayCurrency(String payCurrency) {
        this.payCurrency = payCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_id")
    public Double paymentId;
    public SevenGetListOfPayments200ApplicationJsonData withPaymentId(Double paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_status")
    public String paymentStatus;
    public SevenGetListOfPayments200ApplicationJsonData withPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_amount")
    public Double priceAmount;
    public SevenGetListOfPayments200ApplicationJsonData withPriceAmount(Double priceAmount) {
        this.priceAmount = priceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_currency")
    public String priceCurrency;
    public SevenGetListOfPayments200ApplicationJsonData withPriceCurrency(String priceCurrency) {
        this.priceCurrency = priceCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_id")
    public String purchaseId;
    public SevenGetListOfPayments200ApplicationJsonData withPurchaseId(String purchaseId) {
        this.purchaseId = purchaseId;
        return this;
    }
}