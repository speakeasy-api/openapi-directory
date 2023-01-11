package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeltaPresenceEstimationResult
 * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
**/
public class GooglePrivacyDlpV2DeltaPresenceEstimationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaPresenceEstimationHistogram")
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[] deltaPresenceEstimationHistogram;
    public GooglePrivacyDlpV2DeltaPresenceEstimationResult withDeltaPresenceEstimationHistogram(GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[] deltaPresenceEstimationHistogram) {
        this.deltaPresenceEstimationHistogram = deltaPresenceEstimationHistogram;
        return this;
    }
}