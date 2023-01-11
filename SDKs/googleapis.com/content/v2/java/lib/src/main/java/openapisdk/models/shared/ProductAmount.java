package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductAmount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceAmount")
    public Price priceAmount;
    public ProductAmount withPriceAmount(Price priceAmount) {
        this.priceAmount = priceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remittedTaxAmount")
    public Price remittedTaxAmount;
    public ProductAmount withRemittedTaxAmount(Price remittedTaxAmount) {
        this.remittedTaxAmount = remittedTaxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Price taxAmount;
    public ProductAmount withTaxAmount(Price taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}