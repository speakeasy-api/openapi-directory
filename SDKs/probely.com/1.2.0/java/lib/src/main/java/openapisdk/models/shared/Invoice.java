package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount_due")
    public Long amountDue;
    public Invoice withAmountDue(Long amountDue) {
        this.amountDue = amountDue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount_paid")
    public Long amountPaid;
    public Invoice withAmountPaid(Long amountPaid) {
        this.amountPaid = amountPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency_code")
    public String currencyCode;
    public Invoice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discounts")
    public InvoiceDiscounts[] discounts;
    public Invoice withDiscounts(InvoiceDiscounts[] discounts) {
        this.discounts = discounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_items")
    public InvoiceLineItems[] lineItems;
    public Invoice withLineItems(InvoiceLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public Invoice withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_id")
    public String planId;
    public Invoice withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_total")
    public Long subTotal;
    public Invoice withSubTotal(Long subTotal) {
        this.subTotal = subTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public InvoiceTaxes[] taxes;
    public Invoice withTaxes(InvoiceTaxes[] taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public Invoice withTotal(Long total) {
        this.total = total;
        return this;
    }
}