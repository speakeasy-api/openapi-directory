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
 * ObTransaction6
 * Provides further details on an entry in the report.
**/
public class ObTransaction6 {
    @JsonProperty("AccountId")
    public String accountId;
    public ObTransaction6 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObTransaction6 withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Balance")
    public ObTransactionCashBalance balance;
    public ObTransaction6 withBalance(ObTransactionCashBalance balance) {
        this.balance = balance;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("BookingDateTime")
    public OffsetDateTime bookingDateTime;
    public ObTransaction6 withBookingDateTime(OffsetDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
        return this;
    }
    @JsonProperty("CreditDebitIndicator")
    public ObCreditDebitCodeEnum creditDebitIndicator;
    public ObTransaction6 withCreditDebitIndicator(ObCreditDebitCodeEnum creditDebitIndicator) {
        this.creditDebitIndicator = creditDebitIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAccount")
    public ObCashAccount6 creditorAccount;
    public ObTransaction6 withCreditorAccount(ObCashAccount6 creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObCashAccount6 debtorAccount;
    public ObTransaction6 withDebtorAccount(ObCashAccount6 debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProprietaryBankTransactionCode")
    public ProprietaryBankTransactionCodeStructure1 proprietaryBankTransactionCode;
    public ObTransaction6 withProprietaryBankTransactionCode(ProprietaryBankTransactionCodeStructure1 proprietaryBankTransactionCode) {
        this.proprietaryBankTransactionCode = proprietaryBankTransactionCode;
        return this;
    }
    @JsonProperty("Status")
    public ObEntryStatus1CodeEnum status;
    public ObTransaction6 withStatus(ObEntryStatus1CodeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionInformation")
    public String transactionInformation;
    public ObTransaction6 withTransactionInformation(String transactionInformation) {
        this.transactionInformation = transactionInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionReference")
    public String transactionReference;
    public ObTransaction6 withTransactionReference(String transactionReference) {
        this.transactionReference = transactionReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValueDateTime")
    public OffsetDateTime valueDateTime;
    public ObTransaction6 withValueDateTime(OffsetDateTime valueDateTime) {
        this.valueDateTime = valueDateTime;
        return this;
    }
}