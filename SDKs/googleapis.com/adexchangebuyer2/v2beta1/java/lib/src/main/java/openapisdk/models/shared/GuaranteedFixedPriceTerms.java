package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuaranteedFixedPriceTerms
 * Terms for Programmatic Guaranteed Deals.
**/
public class GuaranteedFixedPriceTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrices")
    public PricePerBuyer[] fixedPrices;
    public GuaranteedFixedPriceTerms withFixedPrices(PricePerBuyer[] fixedPrices) {
        this.fixedPrices = fixedPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedImpressions")
    public String guaranteedImpressions;
    public GuaranteedFixedPriceTerms withGuaranteedImpressions(String guaranteedImpressions) {
        this.guaranteedImpressions = guaranteedImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedLooks")
    public String guaranteedLooks;
    public GuaranteedFixedPriceTerms withGuaranteedLooks(String guaranteedLooks) {
        this.guaranteedLooks = guaranteedLooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionCap")
    public String impressionCap;
    public GuaranteedFixedPriceTerms withImpressionCap(String impressionCap) {
        this.impressionCap = impressionCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumDailyLooks")
    public String minimumDailyLooks;
    public GuaranteedFixedPriceTerms withMinimumDailyLooks(String minimumDailyLooks) {
        this.minimumDailyLooks = minimumDailyLooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentShareOfVoice")
    public String percentShareOfVoice;
    public GuaranteedFixedPriceTerms withPercentShareOfVoice(String percentShareOfVoice) {
        this.percentShareOfVoice = percentShareOfVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationType")
    public GuaranteedFixedPriceTermsReservationTypeEnum reservationType;
    public GuaranteedFixedPriceTerms withReservationType(GuaranteedFixedPriceTermsReservationTypeEnum reservationType) {
        this.reservationType = reservationType;
        return this;
    }
}