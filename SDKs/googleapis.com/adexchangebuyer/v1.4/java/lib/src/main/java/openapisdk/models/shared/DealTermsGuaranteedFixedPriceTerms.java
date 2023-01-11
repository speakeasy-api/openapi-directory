package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DealTermsGuaranteedFixedPriceTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingInfo")
    public DealTermsGuaranteedFixedPriceTermsBillingInfo billingInfo;
    public DealTermsGuaranteedFixedPriceTerms withBillingInfo(DealTermsGuaranteedFixedPriceTermsBillingInfo billingInfo) {
        this.billingInfo = billingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrices")
    public PricePerBuyer[] fixedPrices;
    public DealTermsGuaranteedFixedPriceTerms withFixedPrices(PricePerBuyer[] fixedPrices) {
        this.fixedPrices = fixedPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedImpressions")
    public String guaranteedImpressions;
    public DealTermsGuaranteedFixedPriceTerms withGuaranteedImpressions(String guaranteedImpressions) {
        this.guaranteedImpressions = guaranteedImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedLooks")
    public String guaranteedLooks;
    public DealTermsGuaranteedFixedPriceTerms withGuaranteedLooks(String guaranteedLooks) {
        this.guaranteedLooks = guaranteedLooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumDailyLooks")
    public String minimumDailyLooks;
    public DealTermsGuaranteedFixedPriceTerms withMinimumDailyLooks(String minimumDailyLooks) {
        this.minimumDailyLooks = minimumDailyLooks;
        return this;
    }
}