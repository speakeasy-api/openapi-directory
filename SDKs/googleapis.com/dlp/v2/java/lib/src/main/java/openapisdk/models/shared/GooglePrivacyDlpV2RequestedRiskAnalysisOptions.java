package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RequestedRiskAnalysisOptions
 * Risk analysis options.
**/
public class GooglePrivacyDlpV2RequestedRiskAnalysisOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobConfig")
    public GooglePrivacyDlpV2RiskAnalysisJobConfig jobConfig;
    public GooglePrivacyDlpV2RequestedRiskAnalysisOptions withJobConfig(GooglePrivacyDlpV2RiskAnalysisJobConfig jobConfig) {
        this.jobConfig = jobConfig;
        return this;
    }
}