package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Invoice
 * A single invoice.
**/
public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetInvoiceGroupingId")
    public String budgetInvoiceGroupingId;
    public Invoice withBudgetInvoiceGroupingId(String budgetInvoiceGroupingId) {
        this.budgetInvoiceGroupingId = budgetInvoiceGroupingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetSummaries")
    public BudgetSummary[] budgetSummaries;
    public Invoice withBudgetSummaries(BudgetSummary[] budgetSummaries) {
        this.budgetSummaries = budgetSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("correctedInvoiceId")
    public String correctedInvoiceId;
    public Invoice withCorrectedInvoiceId(String correctedInvoiceId) {
        this.correctedInvoiceId = correctedInvoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Invoice withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Invoice withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public Date dueDate;
    public Invoice withDueDate(Date dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public Invoice withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceType")
    public InvoiceInvoiceTypeEnum invoiceType;
    public Invoice withInvoiceType(InvoiceInvoiceTypeEnum invoiceType) {
        this.invoiceType = invoiceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueDate")
    public Date issueDate;
    public Invoice withIssueDate(Date issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Invoice withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonBudgetMicros")
    public String nonBudgetMicros;
    public Invoice withNonBudgetMicros(String nonBudgetMicros) {
        this.nonBudgetMicros = nonBudgetMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsAccountId")
    public String paymentsAccountId;
    public Invoice withPaymentsAccountId(String paymentsAccountId) {
        this.paymentsAccountId = paymentsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsProfileId")
    public String paymentsProfileId;
    public Invoice withPaymentsProfileId(String paymentsProfileId) {
        this.paymentsProfileId = paymentsProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdfUrl")
    public String pdfUrl;
    public Invoice withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNumber")
    public String purchaseOrderNumber;
    public Invoice withPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replacedInvoiceIds")
    public String[] replacedInvoiceIds;
    public Invoice withReplacedInvoiceIds(String[] replacedInvoiceIds) {
        this.replacedInvoiceIds = replacedInvoiceIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceDateRange")
    public DateRange serviceDateRange;
    public Invoice withServiceDateRange(DateRange serviceDateRange) {
        this.serviceDateRange = serviceDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtotalAmountMicros")
    public String subtotalAmountMicros;
    public Invoice withSubtotalAmountMicros(String subtotalAmountMicros) {
        this.subtotalAmountMicros = subtotalAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalAmountMicros")
    public String totalAmountMicros;
    public Invoice withTotalAmountMicros(String totalAmountMicros) {
        this.totalAmountMicros = totalAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalTaxAmountMicros")
    public String totalTaxAmountMicros;
    public Invoice withTotalTaxAmountMicros(String totalTaxAmountMicros) {
        this.totalTaxAmountMicros = totalTaxAmountMicros;
        return this;
    }
}