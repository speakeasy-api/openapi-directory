package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountInMicros")
    public Double amountInMicros;
    public SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo withAmountInMicros(Double amountInMicros) {
        this.amountInMicros = amountInMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseNumber")
    public String releaseNumber;
    public SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo withReleaseNumber(String releaseNumber) {
        this.releaseNumber = releaseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseTime")
    public String releaseTime;
    public SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo withReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
        return this;
    }
}