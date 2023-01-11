package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportIamPolicyAnalysisRequest
 * A request message for AssetService.ExportIamPolicyAnalysis.
**/
public class ExportIamPolicyAnalysisRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisQuery")
    public IamPolicyAnalysisQuery analysisQuery;
    public ExportIamPolicyAnalysisRequest withAnalysisQuery(IamPolicyAnalysisQuery analysisQuery) {
        this.analysisQuery = analysisQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Options options;
    public ExportIamPolicyAnalysisRequest withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public IamPolicyAnalysisOutputConfig outputConfig;
    public ExportIamPolicyAnalysisRequest withOutputConfig(IamPolicyAnalysisOutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}