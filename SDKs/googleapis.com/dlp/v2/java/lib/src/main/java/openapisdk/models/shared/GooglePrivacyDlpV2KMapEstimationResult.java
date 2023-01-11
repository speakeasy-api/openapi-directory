package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KMapEstimationResult
 * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
**/
public class GooglePrivacyDlpV2KMapEstimationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kMapEstimationHistogram")
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket[] kMapEstimationHistogram;
    public GooglePrivacyDlpV2KMapEstimationResult withKMapEstimationHistogram(GooglePrivacyDlpV2KMapEstimationHistogramBucket[] kMapEstimationHistogram) {
        this.kMapEstimationHistogram = kMapEstimationHistogram;
        return this;
    }
}