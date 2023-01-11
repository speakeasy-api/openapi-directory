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
 * SandboxBankAccountInfo
 * General account information
**/
public class SandboxBankAccountInfo {
    @JsonProperty("accountSubType")
    public String accountSubType;
    public SandboxBankAccountInfo withAccountSubType(String accountSubType) {
        this.accountSubType = accountSubType;
        return this;
    }
    @JsonProperty("accountType")
    public String accountType;
    public SandboxBankAccountInfo withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public SandboxBankAccountInfo withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableBalance")
    public Double availableBalance;
    public SandboxBankAccountInfo withAvailableBalance(Double availableBalance) {
        this.availableBalance = availableBalance;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public SandboxBankAccountInfo withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SandboxBankAccountInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("iban")
    public String iban;
    public SandboxBankAccountInfo withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ledgerBalance")
    public Double ledgerBalance;
    public SandboxBankAccountInfo withLedgerBalance(Double ledgerBalance) {
        this.ledgerBalance = ledgerBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("openingDate")
    public OffsetDateTime openingDate;
    public SandboxBankAccountInfo withOpeningDate(OffsetDateTime openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overdraftLimit")
    public Double overdraftLimit;
    public SandboxBankAccountInfo withOverdraftLimit(Double overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
        return this;
    }
}