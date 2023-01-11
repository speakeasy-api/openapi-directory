package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionData
 * Represents details collected when the visitor performs a transaction on the page.
**/
public class TransactionData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public TransactionData withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionRevenue")
    public Double transactionRevenue;
    public TransactionData withTransactionRevenue(Double transactionRevenue) {
        this.transactionRevenue = transactionRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionShipping")
    public Double transactionShipping;
    public TransactionData withTransactionShipping(Double transactionShipping) {
        this.transactionShipping = transactionShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionTax")
    public Double transactionTax;
    public TransactionData withTransactionTax(Double transactionTax) {
        this.transactionTax = transactionTax;
        return this;
    }
}