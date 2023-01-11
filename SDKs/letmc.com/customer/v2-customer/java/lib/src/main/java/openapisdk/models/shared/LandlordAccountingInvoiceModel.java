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
 * LandlordAccountingInvoiceModel
 * Invoices
**/
public class LandlordAccountingInvoiceModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Date")
    public OffsetDateTime date;
    public LandlordAccountingInvoiceModel withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceID")
    public String invoiceID;
    public LandlordAccountingInvoiceModel withInvoiceId(String invoiceID) {
        this.invoiceID = invoiceID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMaintenanceInvoice")
    public Boolean isMaintenanceInvoice;
    public LandlordAccountingInvoiceModel withIsMaintenanceInvoice(Boolean isMaintenanceInvoice) {
        this.isMaintenanceInvoice = isMaintenanceInvoice;
        return this;
    }
}