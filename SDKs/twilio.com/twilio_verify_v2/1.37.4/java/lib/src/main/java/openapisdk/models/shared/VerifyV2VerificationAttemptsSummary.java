package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyV2VerificationAttemptsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion_rate_percentage")
    public Double conversionRatePercentage;
    public VerifyV2VerificationAttemptsSummary withConversionRatePercentage(Double conversionRatePercentage) {
        this.conversionRatePercentage = conversionRatePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_attempts")
    public Long totalAttempts;
    public VerifyV2VerificationAttemptsSummary withTotalAttempts(Long totalAttempts) {
        this.totalAttempts = totalAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_converted")
    public Long totalConverted;
    public VerifyV2VerificationAttemptsSummary withTotalConverted(Long totalConverted) {
        this.totalConverted = totalConverted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_unconverted")
    public Long totalUnconverted;
    public VerifyV2VerificationAttemptsSummary withTotalUnconverted(Long totalUnconverted) {
        this.totalUnconverted = totalUnconverted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2VerificationAttemptsSummary withUrl(String url) {
        this.url = url;
        return this;
    }
}