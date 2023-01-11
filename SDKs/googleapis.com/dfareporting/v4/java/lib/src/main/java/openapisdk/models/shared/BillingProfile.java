package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfile
 * Contains properties of a Campaign Manager Billing Profile.
**/
public class BillingProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consolidatedInvoice")
    public Boolean consolidatedInvoice;
    public BillingProfile withConsolidatedInvoice(Boolean consolidatedInvoice) {
        this.consolidatedInvoice = consolidatedInvoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public BillingProfile withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BillingProfile withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BillingProfile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceLevel")
    public BillingProfileInvoiceLevelEnum invoiceLevel;
    public BillingProfile withInvoiceLevel(BillingProfileInvoiceLevelEnum invoiceLevel) {
        this.invoiceLevel = invoiceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public BillingProfile withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingProfile withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BillingProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsAccountId")
    public String paymentsAccountId;
    public BillingProfile withPaymentsAccountId(String paymentsAccountId) {
        this.paymentsAccountId = paymentsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsCustomerId")
    public String paymentsCustomerId;
    public BillingProfile withPaymentsCustomerId(String paymentsCustomerId) {
        this.paymentsCustomerId = paymentsCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrder")
    public String purchaseOrder;
    public BillingProfile withPurchaseOrder(String purchaseOrder) {
        this.purchaseOrder = purchaseOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryPaymentsCustomerId")
    public String secondaryPaymentsCustomerId;
    public BillingProfile withSecondaryPaymentsCustomerId(String secondaryPaymentsCustomerId) {
        this.secondaryPaymentsCustomerId = secondaryPaymentsCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public BillingProfileStatusEnum status;
    public BillingProfile withStatus(BillingProfileStatusEnum status) {
        this.status = status;
        return this;
    }
}