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
 * ObAccount6
 * Unambiguous identification of the account to which credit and debit entries are made.
**/
public class ObAccount6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Account")
    public ObCashAccount5[] account;
    public ObAccount6 withAccount(ObCashAccount5[] account) {
        this.account = account;
        return this;
    }
    @JsonProperty("AccountId")
    public String accountId;
    public ObAccount6 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("AccountSubType")
    public ObExternalAccountSubType1CodeEnum accountSubType;
    public ObAccount6 withAccountSubType(ObExternalAccountSubType1CodeEnum accountSubType) {
        this.accountSubType = accountSubType;
        return this;
    }
    @JsonProperty("AccountType")
    public ObExternalAccountType1CodeEnum accountType;
    public ObAccount6 withAccountType(ObExternalAccountType1CodeEnum accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonProperty("Currency")
    public String currency;
    public ObAccount6 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ObAccount6 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Nickname")
    public String nickname;
    public ObAccount6 withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("OpeningDate")
    public OffsetDateTime openingDate;
    public ObAccount6 withOpeningDate(OffsetDateTime openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Servicer")
    public ObBranchAndFinancialInstitutionIdentification5 servicer;
    public ObAccount6 withServicer(ObBranchAndFinancialInstitutionIdentification5 servicer) {
        this.servicer = servicer;
        return this;
    }
}