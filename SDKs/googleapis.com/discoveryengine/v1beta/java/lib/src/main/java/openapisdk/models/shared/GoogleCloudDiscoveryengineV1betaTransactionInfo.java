package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaTransactionInfo
 * A transaction represents the entire purchase transaction.
**/
public class GoogleCloudDiscoveryengineV1betaTransactionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Float cost;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withCost(Float cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountValue")
    public Float discountValue;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withDiscountValue(Float discountValue) {
        this.discountValue = discountValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Float tax;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withTax(Float tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Float value;
    public GoogleCloudDiscoveryengineV1betaTransactionInfo withValue(Float value) {
        this.value = value;
        return this;
    }
}