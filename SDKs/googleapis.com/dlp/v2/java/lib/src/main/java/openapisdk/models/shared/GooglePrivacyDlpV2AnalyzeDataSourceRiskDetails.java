package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
 * Result of a risk analysis operation request.
**/
public class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoricalStatsResult")
    public GooglePrivacyDlpV2CategoricalStatsResult categoricalStatsResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withCategoricalStatsResult(GooglePrivacyDlpV2CategoricalStatsResult categoricalStatsResult) {
        this.categoricalStatsResult = categoricalStatsResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaPresenceEstimationResult")
    public GooglePrivacyDlpV2DeltaPresenceEstimationResult deltaPresenceEstimationResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withDeltaPresenceEstimationResult(GooglePrivacyDlpV2DeltaPresenceEstimationResult deltaPresenceEstimationResult) {
        this.deltaPresenceEstimationResult = deltaPresenceEstimationResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kAnonymityResult")
    public GooglePrivacyDlpV2KAnonymityResult kAnonymityResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withKAnonymityResult(GooglePrivacyDlpV2KAnonymityResult kAnonymityResult) {
        this.kAnonymityResult = kAnonymityResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kMapEstimationResult")
    public GooglePrivacyDlpV2KMapEstimationResult kMapEstimationResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withKMapEstimationResult(GooglePrivacyDlpV2KMapEstimationResult kMapEstimationResult) {
        this.kMapEstimationResult = kMapEstimationResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lDiversityResult")
    public GooglePrivacyDlpV2LDiversityResult lDiversityResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withLDiversityResult(GooglePrivacyDlpV2LDiversityResult lDiversityResult) {
        this.lDiversityResult = lDiversityResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericalStatsResult")
    public GooglePrivacyDlpV2NumericalStatsResult numericalStatsResult;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withNumericalStatsResult(GooglePrivacyDlpV2NumericalStatsResult numericalStatsResult) {
        this.numericalStatsResult = numericalStatsResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedOptions")
    public GooglePrivacyDlpV2RequestedRiskAnalysisOptions requestedOptions;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withRequestedOptions(GooglePrivacyDlpV2RequestedRiskAnalysisOptions requestedOptions) {
        this.requestedOptions = requestedOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedPrivacyMetric")
    public GooglePrivacyDlpV2PrivacyMetric requestedPrivacyMetric;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withRequestedPrivacyMetric(GooglePrivacyDlpV2PrivacyMetric requestedPrivacyMetric) {
        this.requestedPrivacyMetric = requestedPrivacyMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSourceTable")
    public GooglePrivacyDlpV2BigQueryTable requestedSourceTable;
    public GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails withRequestedSourceTable(GooglePrivacyDlpV2BigQueryTable requestedSourceTable) {
        this.requestedSourceTable = requestedSourceTable;
        return this;
    }
}