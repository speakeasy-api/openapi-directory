package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountAccess
 * Requested access services for a consent.
 * 
**/
public class AccountAccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public AccountReference16Ch[] accounts;
    public AccountAccess withAccounts(AccountReference16Ch[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInformation")
    public AdditionalInformationAccess additionalInformation;
    public AccountAccess withAdditionalInformation(AdditionalInformationAccess additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allPsd2")
    public AccountAccessAllPsd2Enum allPsd2;
    public AccountAccess withAllPsd2(AccountAccessAllPsd2Enum allPsd2) {
        this.allPsd2 = allPsd2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableAccounts")
    public AccountAccessAvailableAccountsEnum availableAccounts;
    public AccountAccess withAvailableAccounts(AccountAccessAvailableAccountsEnum availableAccounts) {
        this.availableAccounts = availableAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableAccountsWithBalance")
    public AccountAccessAvailableAccountsWithBalanceEnum availableAccountsWithBalance;
    public AccountAccess withAvailableAccountsWithBalance(AccountAccessAvailableAccountsWithBalanceEnum availableAccountsWithBalance) {
        this.availableAccountsWithBalance = availableAccountsWithBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balances")
    public AccountReference16Ch[] balances;
    public AccountAccess withBalances(AccountReference16Ch[] balances) {
        this.balances = balances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedTo")
    public String[] restrictedTo;
    public AccountAccess withRestrictedTo(String[] restrictedTo) {
        this.restrictedTo = restrictedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public AccountReference16Ch[] transactions;
    public AccountAccess withTransactions(AccountReference16Ch[] transactions) {
        this.transactions = transactions;
        return this;
    }
}