package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RiskAnalysisJobConfig
 * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
**/
public class GooglePrivacyDlpV2RiskAnalysisJobConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public GooglePrivacyDlpV2Action[] actions;
    public GooglePrivacyDlpV2RiskAnalysisJobConfig withActions(GooglePrivacyDlpV2Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacyMetric")
    public GooglePrivacyDlpV2PrivacyMetric privacyMetric;
    public GooglePrivacyDlpV2RiskAnalysisJobConfig withPrivacyMetric(GooglePrivacyDlpV2PrivacyMetric privacyMetric) {
        this.privacyMetric = privacyMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceTable")
    public GooglePrivacyDlpV2BigQueryTable sourceTable;
    public GooglePrivacyDlpV2RiskAnalysisJobConfig withSourceTable(GooglePrivacyDlpV2BigQueryTable sourceTable) {
        this.sourceTable = sourceTable;
        return this;
    }
}