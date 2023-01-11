package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionsResponse200Json
 * Body of the JSON response for a successful read transaction list request.
 * This account report contains transactions resulting from the query parameters.
 * 
**/
public class TransactionsResponse200Json {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public TransactionsResponse200Json withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public AccountReference16Ch account;
    public TransactionsResponse200Json withAccount(AccountReference16Ch account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balances")
    public Balance[] balances;
    public TransactionsResponse200Json withBalances(Balance[] balances) {
        this.balances = balances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public AccountReport transactions;
    public TransactionsResponse200Json withTransactions(AccountReport transactions) {
        this.transactions = transactions;
        return this;
    }
}