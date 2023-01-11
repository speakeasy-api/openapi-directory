package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProgrammaticGuaranteedTerms
 * Pricing terms for Programmatic Guaranteed Deals.
**/
public class ProgrammaticGuaranteedTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrice")
    public Price fixedPrice;
    public ProgrammaticGuaranteedTerms withFixedPrice(Price fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteedLooks")
    public String guaranteedLooks;
    public ProgrammaticGuaranteedTerms withGuaranteedLooks(String guaranteedLooks) {
        this.guaranteedLooks = guaranteedLooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionCap")
    public String impressionCap;
    public ProgrammaticGuaranteedTerms withImpressionCap(String impressionCap) {
        this.impressionCap = impressionCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumDailyLooks")
    public String minimumDailyLooks;
    public ProgrammaticGuaranteedTerms withMinimumDailyLooks(String minimumDailyLooks) {
        this.minimumDailyLooks = minimumDailyLooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentShareOfVoice")
    public String percentShareOfVoice;
    public ProgrammaticGuaranteedTerms withPercentShareOfVoice(String percentShareOfVoice) {
        this.percentShareOfVoice = percentShareOfVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservationType")
    public ProgrammaticGuaranteedTermsReservationTypeEnum reservationType;
    public ProgrammaticGuaranteedTerms withReservationType(ProgrammaticGuaranteedTermsReservationTypeEnum reservationType) {
        this.reservationType = reservationType;
        return this;
    }
}