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
 * BulkPaymentInitiationWithStatusResponse
 * Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
 * 
**/
public class BulkPaymentInitiationWithStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("acceptorTransactionDateTime")
    public OffsetDateTime acceptorTransactionDateTime;
    public BulkPaymentInitiationWithStatusResponse withAcceptorTransactionDateTime(OffsetDateTime acceptorTransactionDateTime) {
        this.acceptorTransactionDateTime = acceptorTransactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchBookingPreferred")
    public Boolean batchBookingPreferred;
    public BulkPaymentInitiationWithStatusResponse withBatchBookingPreferred(Boolean batchBookingPreferred) {
        this.batchBookingPreferred = batchBookingPreferred;
        return this;
    }
    @JsonProperty("debtorAccount")
    public AccountReference16Ch debtorAccount;
    public BulkPaymentInitiationWithStatusResponse withDebtorAccount(AccountReference16Ch debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentInformationId")
    public String paymentInformationId;
    public BulkPaymentInitiationWithStatusResponse withPaymentInformationId(String paymentInformationId) {
        this.paymentInformationId = paymentInformationId;
        return this;
    }
    @JsonProperty("payments")
    public PaymentInitiationBulkElementJson[] payments;
    public BulkPaymentInitiationWithStatusResponse withPayments(PaymentInitiationBulkElementJson[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedExecutionDate")
    public LocalDate requestedExecutionDate;
    public BulkPaymentInitiationWithStatusResponse withRequestedExecutionDate(LocalDate requestedExecutionDate) {
        this.requestedExecutionDate = requestedExecutionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public BulkPaymentInitiationWithStatusResponse withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}