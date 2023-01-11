package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Invoice
 * The invoice to send.  Provide either invoice, or invoiceData, but not both.
**/
public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingCost")
    public String accountingCost;
    public Invoice withAccountingCost(String accountingCost) {
        this.accountingCost = accountingCost;
        return this;
    }
    @JsonProperty("accountingCustomerParty")
    public AccountingCustomerParty accountingCustomerParty;
    public Invoice withAccountingCustomerParty(AccountingCustomerParty accountingCustomerParty) {
        this.accountingCustomerParty = accountingCustomerParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingSupplierParty")
    public AccountingSupplierParty accountingSupplierParty;
    public Invoice withAccountingSupplierParty(AccountingSupplierParty accountingSupplierParty) {
        this.accountingSupplierParty = accountingSupplierParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowanceCharges")
    public AllowanceCharge[] allowanceCharges;
    public Invoice withAllowanceCharges(AllowanceCharge[] allowanceCharges) {
        this.allowanceCharges = allowanceCharges;
        return this;
    }
    @JsonProperty("amountIncludingVat")
    public Double amountIncludingVat;
    public Invoice withAmountIncludingVat(Double amountIncludingVat) {
        this.amountIncludingVat = amountIncludingVat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingReference")
    public String billingReference;
    public Invoice withBillingReference(String billingReference) {
        this.billingReference = billingReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerReference")
    public String buyerReference;
    public Invoice withBuyerReference(String buyerReference) {
        this.buyerReference = buyerReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerTaxMode")
    public Boolean consumerTaxMode;
    public Invoice withConsumerTaxMode(Boolean consumerTaxMode) {
        this.consumerTaxMode = consumerTaxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractDocumentReference")
    public String contractDocumentReference;
    public Invoice withContractDocumentReference(String contractDocumentReference) {
        this.contractDocumentReference = contractDocumentReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery")
    public Delivery delivery;
    public Invoice withDelivery(Delivery delivery) {
        this.delivery = delivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentCurrencyCode")
    public CurrencyCodeEnum documentCurrencyCode;
    public Invoice withDocumentCurrencyCode(CurrencyCodeEnum documentCurrencyCode) {
        this.documentCurrencyCode = documentCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public String dueDate;
    public Invoice withDueDate(String dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonProperty("invoiceLines")
    public InvoiceLine[] invoiceLines;
    public Invoice withInvoiceLines(InvoiceLine[] invoiceLines) {
        this.invoiceLines = invoiceLines;
        return this;
    }
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public Invoice withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoicePeriod")
    public String invoicePeriod;
    public Invoice withInvoicePeriod(String invoicePeriod) {
        this.invoicePeriod = invoicePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceType")
    public InvoiceTypeOfInvoiceEnum invoiceType;
    public Invoice withInvoiceType(InvoiceTypeOfInvoiceEnum invoiceType) {
        this.invoiceType = invoiceType;
        return this;
    }
    @JsonProperty("issueDate")
    public String issueDate;
    public Invoice withIssueDate(String issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Invoice withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderReference")
    public String orderReference;
    public Invoice withOrderReference(String orderReference) {
        this.orderReference = orderReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMeansArray")
    public PaymentMeans[] paymentMeansArray;
    public Invoice withPaymentMeansArray(PaymentMeans[] paymentMeansArray) {
        this.paymentMeansArray = paymentMeansArray;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMeansBic")
    public String paymentMeansBic;
    public Invoice withPaymentMeansBic(String paymentMeansBic) {
        this.paymentMeansBic = paymentMeansBic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMeansCode")
    public InvoicePaymentMeansCodeEnum paymentMeansCode;
    public Invoice withPaymentMeansCode(InvoicePaymentMeansCodeEnum paymentMeansCode) {
        this.paymentMeansCode = paymentMeansCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMeansIban")
    public String paymentMeansIban;
    public Invoice withPaymentMeansIban(String paymentMeansIban) {
        this.paymentMeansIban = paymentMeansIban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMeansPaymentId")
    public String paymentMeansPaymentId;
    public Invoice withPaymentMeansPaymentId(String paymentMeansPaymentId) {
        this.paymentMeansPaymentId = paymentMeansPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentTerms")
    public InvoiceThePaymentTerms paymentTerms;
    public Invoice withPaymentTerms(InvoiceThePaymentTerms paymentTerms) {
        this.paymentTerms = paymentTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prepaidAmount")
    public Double prepaidAmount;
    public Invoice withPrepaidAmount(Double prepaidAmount) {
        this.prepaidAmount = prepaidAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectReference")
    public String projectReference;
    public Invoice withProjectReference(String projectReference) {
        this.projectReference = projectReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesOrderId")
    public String salesOrderId;
    public Invoice withSalesOrderId(String salesOrderId) {
        this.salesOrderId = salesOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxExemptReason")
    public InvoiceTaxExemptReasonEnum taxExemptReason;
    public Invoice withTaxExemptReason(InvoiceTaxExemptReasonEnum taxExemptReason) {
        this.taxExemptReason = taxExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxPointDate")
    public String taxPointDate;
    public Invoice withTaxPointDate(String taxPointDate) {
        this.taxPointDate = taxPointDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxSubtotals")
    public TaxSubtotal[] taxSubtotals;
    public Invoice withTaxSubtotals(TaxSubtotal[] taxSubtotals) {
        this.taxSubtotals = taxSubtotals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxSystem")
    public InvoiceTaxSystemEnum taxSystem;
    public Invoice withTaxSystem(InvoiceTaxSystemEnum taxSystem) {
        this.taxSystem = taxSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ublExtensions")
    public String[] ublExtensions;
    public Invoice withUblExtensions(String[] ublExtensions) {
        this.ublExtensions = ublExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vatReverseCharge")
    public Boolean vatReverseCharge;
    public Invoice withVatReverseCharge(Boolean vatReverseCharge) {
        this.vatReverseCharge = vatReverseCharge;
        return this;
    }
}