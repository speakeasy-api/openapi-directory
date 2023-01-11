package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntroductoryPriceInfo
 * Contains the introductory price information for a subscription.
**/
public class IntroductoryPriceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPriceAmountMicros")
    public String introductoryPriceAmountMicros;
    public IntroductoryPriceInfo withIntroductoryPriceAmountMicros(String introductoryPriceAmountMicros) {
        this.introductoryPriceAmountMicros = introductoryPriceAmountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPriceCurrencyCode")
    public String introductoryPriceCurrencyCode;
    public IntroductoryPriceInfo withIntroductoryPriceCurrencyCode(String introductoryPriceCurrencyCode) {
        this.introductoryPriceCurrencyCode = introductoryPriceCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPriceCycles")
    public Integer introductoryPriceCycles;
    public IntroductoryPriceInfo withIntroductoryPriceCycles(Integer introductoryPriceCycles) {
        this.introductoryPriceCycles = introductoryPriceCycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("introductoryPricePeriod")
    public String introductoryPricePeriod;
    public IntroductoryPriceInfo withIntroductoryPricePeriod(String introductoryPricePeriod) {
        this.introductoryPricePeriod = introductoryPricePeriod;
        return this;
    }
}