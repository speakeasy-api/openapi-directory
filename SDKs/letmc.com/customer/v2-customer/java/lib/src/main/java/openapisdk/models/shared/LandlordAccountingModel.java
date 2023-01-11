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
 * LandlordAccountingModel
 * Landlord Accounting
**/
public class LandlordAccountingModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountBalance")
    public Double accountBalance;
    public LandlordAccountingModel withAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastPayment")
    public OffsetDateTime lastPayment;
    public LandlordAccountingModel withLastPayment(OffsetDateTime lastPayment) {
        this.lastPayment = lastPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentHistory")
    public LandlordAccountingEntryModel[] paymentHistory;
    public LandlordAccountingModel withPaymentHistory(LandlordAccountingEntryModel[] paymentHistory) {
        this.paymentHistory = paymentHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statements")
    public LandlordAccountingInvoiceModel[] statements;
    public LandlordAccountingModel withStatements(LandlordAccountingInvoiceModel[] statements) {
        this.statements = statements;
        return this;
    }
}