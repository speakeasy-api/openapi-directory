package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTermsRubiconNonGuaranteedTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorityPrice")
    public Price priorityPrice;
    public DealTermsRubiconNonGuaranteedTerms withPriorityPrice(Price priorityPrice) {
        this.priorityPrice = priorityPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardPrice")
    public Price standardPrice;
    public DealTermsRubiconNonGuaranteedTerms withStandardPrice(Price standardPrice) {
        this.standardPrice = standardPrice;
        return this;
    }
}