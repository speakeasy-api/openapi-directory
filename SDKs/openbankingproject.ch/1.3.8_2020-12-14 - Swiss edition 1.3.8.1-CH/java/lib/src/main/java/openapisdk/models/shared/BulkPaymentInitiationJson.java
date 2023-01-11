package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BulkPaymentInitiationJson
 * Generic Body for a bulk payment initation via JSON.
 * 
 * paymentInformationId is contained in code but commented since it is n.a.
 * and not all ASPSP are able to support this field now.
 * In a later version the field will be mandatory.
 * 
**/
public class BulkPaymentInitiationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchBookingPreferred")
    public Boolean batchBookingPreferred;
    public BulkPaymentInitiationJson withBatchBookingPreferred(Boolean batchBookingPreferred) {
        this.batchBookingPreferred = batchBookingPreferred;
        return this;
    }
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public BulkPaymentInitiationJson withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonProperty("debtorAgent")
    public DebtorAgent7Ch debtorAgent;
    public BulkPaymentInitiationJson withDebtorAgent(DebtorAgent7Ch debtorAgent) {
        this.debtorAgent = debtorAgent;
        return this;
    }
    @JsonProperty("payments")
    public PaymentInitiationBulkElementJson[] payments;
    public BulkPaymentInitiationJson withPayments(PaymentInitiationBulkElementJson[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedExecutionDate")
    public LocalDate requestedExecutionDate;
    public BulkPaymentInitiationJson withRequestedExecutionDate(LocalDate requestedExecutionDate) {
        this.requestedExecutionDate = requestedExecutionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedExecutionTime")
    public OffsetDateTime requestedExecutionTime;
    public BulkPaymentInitiationJson withRequestedExecutionTime(OffsetDateTime requestedExecutionTime) {
        this.requestedExecutionTime = requestedExecutionTime;
        return this;
    }
}