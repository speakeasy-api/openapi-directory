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
 * SandboxTransaction
 * Transaction information
**/
public class SandboxTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingBalance")
    public Double accountingBalance;
    public SandboxTransaction withAccountingBalance(Double accountingBalance) {
        this.accountingBalance = accountingBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public SandboxTransaction withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("bookingDateTime")
    public OffsetDateTime bookingDateTime;
    public SandboxTransaction withBookingDateTime(OffsetDateTime bookingDateTime) {
        this.bookingDateTime = bookingDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditDebit")
    public String creditDebit;
    public SandboxTransaction withCreditDebit(String creditDebit) {
        this.creditDebit = creditDebit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public SandboxTransaction withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SandboxTransaction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public String reference;
    public SandboxTransaction withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedAccount")
    public String relatedAccount;
    public SandboxTransaction withRelatedAccount(String relatedAccount) {
        this.relatedAccount = relatedAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedName")
    public String relatedName;
    public SandboxTransaction withRelatedName(String relatedName) {
        this.relatedName = relatedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCode")
    public String transactionCode;
    public SandboxTransaction withTransactionCode(String transactionCode) {
        this.transactionCode = transactionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("valueDateTime")
    public OffsetDateTime valueDateTime;
    public SandboxTransaction withValueDateTime(OffsetDateTime valueDateTime) {
        this.valueDateTime = valueDateTime;
        return this;
    }
}