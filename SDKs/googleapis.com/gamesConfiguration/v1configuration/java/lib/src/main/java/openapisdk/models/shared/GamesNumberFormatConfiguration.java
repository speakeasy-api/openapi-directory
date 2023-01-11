package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesNumberFormatConfiguration
 * A number format resource.
**/
public class GamesNumberFormatConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GamesNumberFormatConfiguration withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numDecimalPlaces")
    public Integer numDecimalPlaces;
    public GamesNumberFormatConfiguration withNumDecimalPlaces(Integer numDecimalPlaces) {
        this.numDecimalPlaces = numDecimalPlaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberFormatType")
    public GamesNumberFormatConfigurationNumberFormatTypeEnum numberFormatType;
    public GamesNumberFormatConfiguration withNumberFormatType(GamesNumberFormatConfigurationNumberFormatTypeEnum numberFormatType) {
        this.numberFormatType = numberFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public GamesNumberAffixConfiguration suffix;
    public GamesNumberFormatConfiguration withSuffix(GamesNumberAffixConfiguration suffix) {
        this.suffix = suffix;
        return this;
    }
}