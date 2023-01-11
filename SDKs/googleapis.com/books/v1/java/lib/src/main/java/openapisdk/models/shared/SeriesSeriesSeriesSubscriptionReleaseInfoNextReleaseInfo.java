package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountInMicros")
    public Double amountInMicros;
    public SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo withAmountInMicros(Double amountInMicros) {
        this.amountInMicros = amountInMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseNumber")
    public String releaseNumber;
    public SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo withReleaseNumber(String releaseNumber) {
        this.releaseNumber = releaseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseTime")
    public String releaseTime;
    public SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo withReleaseTime(String releaseTime) {
        this.releaseTime = releaseTime;
        return this;
    }
}