package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UpsInvoice
 * UPS invoice
**/
public class UpsInvoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control_id")
    public String controlId;
    public UpsInvoice withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_amount")
    public Double invoiceAmount;
    public UpsInvoice withInvoiceAmount(Double invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invoice_date")
    public OffsetDateTime invoiceDate;
    public UpsInvoice withInvoiceDate(OffsetDateTime invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_number")
    public String invoiceNumber;
    public UpsInvoice withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
}