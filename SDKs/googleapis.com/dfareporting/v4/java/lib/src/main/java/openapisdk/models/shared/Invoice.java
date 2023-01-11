package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Invoice
 * Contains information about a single invoice
**/
public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("campaign_summaries")
    public CampaignSummary[] campaignSummaries;
    public Invoice withCampaignSummaries(CampaignSummary[] campaignSummaries) {
        this.campaignSummaries = campaignSummaries;
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
    @JsonProperty("dueDate")
    public String dueDate;
    public Invoice withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Invoice withId(String id) {
        this.id = id;
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
    public String issueDate;
    public Invoice withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Invoice withKind(String kind) {
        this.kind = kind;
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
    @JsonProperty("serviceEndDate")
    public String serviceEndDate;
    public Invoice withServiceEndDate(String serviceEndDate) {
        this.serviceEndDate = serviceEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceStartDate")
    public String serviceStartDate;
    public Invoice withServiceStartDate(String serviceStartDate) {
        this.serviceStartDate = serviceStartDate;
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