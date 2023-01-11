package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaTransactionInfo
 * A transaction represents the entire purchase transaction.
**/
public class GoogleCloudDiscoveryengineV1alphaTransactionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Float cost;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withCost(Float cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountValue")
    public Float discountValue;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withDiscountValue(Float discountValue) {
        this.discountValue = discountValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Float tax;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withTax(Float tax) {
        this.tax = tax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Float value;
    public GoogleCloudDiscoveryengineV1alphaTransactionInfo withValue(Float value) {
        this.value = value;
        return this;
    }
}