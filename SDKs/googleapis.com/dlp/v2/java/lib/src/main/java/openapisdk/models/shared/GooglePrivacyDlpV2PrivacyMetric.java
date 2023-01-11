package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2PrivacyMetric
 * Privacy metric to compute for reidentification risk analysis.
**/
public class GooglePrivacyDlpV2PrivacyMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoricalStatsConfig")
    public GooglePrivacyDlpV2CategoricalStatsConfig categoricalStatsConfig;
    public GooglePrivacyDlpV2PrivacyMetric withCategoricalStatsConfig(GooglePrivacyDlpV2CategoricalStatsConfig categoricalStatsConfig) {
        this.categoricalStatsConfig = categoricalStatsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaPresenceEstimationConfig")
    public GooglePrivacyDlpV2DeltaPresenceEstimationConfig deltaPresenceEstimationConfig;
    public GooglePrivacyDlpV2PrivacyMetric withDeltaPresenceEstimationConfig(GooglePrivacyDlpV2DeltaPresenceEstimationConfig deltaPresenceEstimationConfig) {
        this.deltaPresenceEstimationConfig = deltaPresenceEstimationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kAnonymityConfig")
    public GooglePrivacyDlpV2KAnonymityConfig kAnonymityConfig;
    public GooglePrivacyDlpV2PrivacyMetric withKAnonymityConfig(GooglePrivacyDlpV2KAnonymityConfig kAnonymityConfig) {
        this.kAnonymityConfig = kAnonymityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kMapEstimationConfig")
    public GooglePrivacyDlpV2KMapEstimationConfig kMapEstimationConfig;
    public GooglePrivacyDlpV2PrivacyMetric withKMapEstimationConfig(GooglePrivacyDlpV2KMapEstimationConfig kMapEstimationConfig) {
        this.kMapEstimationConfig = kMapEstimationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lDiversityConfig")
    public GooglePrivacyDlpV2LDiversityConfig lDiversityConfig;
    public GooglePrivacyDlpV2PrivacyMetric withLDiversityConfig(GooglePrivacyDlpV2LDiversityConfig lDiversityConfig) {
        this.lDiversityConfig = lDiversityConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericalStatsConfig")
    public GooglePrivacyDlpV2NumericalStatsConfig numericalStatsConfig;
    public GooglePrivacyDlpV2PrivacyMetric withNumericalStatsConfig(GooglePrivacyDlpV2NumericalStatsConfig numericalStatsConfig) {
        this.numericalStatsConfig = numericalStatsConfig;
        return this;
    }
}