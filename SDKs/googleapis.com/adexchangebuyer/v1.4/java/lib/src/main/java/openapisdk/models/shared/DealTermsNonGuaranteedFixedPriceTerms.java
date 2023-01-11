package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTermsNonGuaranteedFixedPriceTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrices")
    public PricePerBuyer[] fixedPrices;
    public DealTermsNonGuaranteedFixedPriceTerms withFixedPrices(PricePerBuyer[] fixedPrices) {
        this.fixedPrices = fixedPrices;
        return this;
    }
}