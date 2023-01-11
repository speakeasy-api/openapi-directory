package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Invoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Float amount;
    public Invoice withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BillingAddress billing;
    public Invoice withBilling(BillingAddress billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Invoice withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Invoice withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_no")
    public Long invoiceNo;
    public Invoice withInvoiceNo(Long invoiceNo) {
        this.invoiceNo = invoiceNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invoiced_at")
    public OffsetDateTime invoicedAt;
    public Invoice withInvoicedAt(OffsetDateTime invoicedAt) {
        this.invoicedAt = invoicedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public InvoiceLinks links;
    public Invoice withLinks(InvoiceLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Invoice withStatus(String status) {
        this.status = status;
        return this;
    }
}