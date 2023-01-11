package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTermsGuaranteedFixedPriceTermsBillingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionTimeMs")
    public String currencyConversionTimeMs;
    public DealTermsGuaranteedFixedPriceTermsBillingInfo withCurrencyConversionTimeMs(String currencyConversionTimeMs) {
        this.currencyConversionTimeMs = currencyConversionTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dfpLineItemId")
    public String dfpLineItemId;
    public DealTermsGuaranteedFixedPriceTermsBillingInfo withDfpLineItemId(String dfpLineItemId) {
        this.dfpLineItemId = dfpLineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalContractedQuantity")
    public String originalContractedQuantity;
    public DealTermsGuaranteedFixedPriceTermsBillingInfo withOriginalContractedQuantity(String originalContractedQuantity) {
        this.originalContractedQuantity = originalContractedQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Price price;
    public DealTermsGuaranteedFixedPriceTermsBillingInfo withPrice(Price price) {
        this.price = price;
        return this;
    }
}