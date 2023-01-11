package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountDetails
 * The ASPSP shall give at least one of the account reference identifiers:
 *   - iban
 *   - bban
 *   - pan
 *   - maskedPan
 *   - msisdn
 * If the account is a multicurrency account currency code in "currency" is set to "XXX".
 * 
**/
public class AccountDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public AccountDetails withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balances")
    public Balance[] balances;
    public AccountDetails withBalances(Balance[] balances) {
        this.balances = balances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bban")
    public String bban;
    public AccountDetails withBban(String bban) {
        this.bban = bban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public AccountDetails withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashAccountType")
    public String cashAccountType;
    public AccountDetails withCashAccountType(String cashAccountType) {
        this.cashAccountType = cashAccountType;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public AccountDetails withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public AccountDetails withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AccountDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public AccountDetails withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedAccounts")
    public String linkedAccounts;
    public AccountDetails withLinkedAccounts(String linkedAccounts) {
        this.linkedAccounts = linkedAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msisdn")
    public String msisdn;
    public AccountDetails withMsisdn(String msisdn) {
        this.msisdn = msisdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerName")
    public String ownerName;
    public AccountDetails withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public String product;
    public AccountDetails withProduct(String product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public AccountDetails withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountStatusEnum status;
    public AccountDetails withStatus(AccountStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public AccountDetailsUsageEnum usage;
    public AccountDetails withUsage(AccountDetailsUsageEnum usage) {
        this.usage = usage;
        return this;
    }
}