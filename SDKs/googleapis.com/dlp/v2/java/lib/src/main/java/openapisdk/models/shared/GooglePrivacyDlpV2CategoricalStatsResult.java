package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CategoricalStatsResult
 * Result of the categorical stats computation.
**/
public class GooglePrivacyDlpV2CategoricalStatsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueFrequencyHistogramBuckets")
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket[] valueFrequencyHistogramBuckets;
    public GooglePrivacyDlpV2CategoricalStatsResult withValueFrequencyHistogramBuckets(GooglePrivacyDlpV2CategoricalStatsHistogramBucket[] valueFrequencyHistogramBuckets) {
        this.valueFrequencyHistogramBuckets = valueFrequencyHistogramBuckets;
        return this;
    }
}