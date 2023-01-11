package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyzeIamPolicyResponse
 * A response message for AssetService.AnalyzeIamPolicy.
**/
public class AnalyzeIamPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullyExplored")
    public Boolean fullyExplored;
    public AnalyzeIamPolicyResponse withFullyExplored(Boolean fullyExplored) {
        this.fullyExplored = fullyExplored;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainAnalysis")
    public IamPolicyAnalysis mainAnalysis;
    public AnalyzeIamPolicyResponse withMainAnalysis(IamPolicyAnalysis mainAnalysis) {
        this.mainAnalysis = mainAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonCriticalErrors")
    public GoogleCloudAssetV1p4beta1AnalysisState[] nonCriticalErrors;
    public AnalyzeIamPolicyResponse withNonCriticalErrors(GoogleCloudAssetV1p4beta1AnalysisState[] nonCriticalErrors) {
        this.nonCriticalErrors = nonCriticalErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountImpersonationAnalysis")
    public IamPolicyAnalysis[] serviceAccountImpersonationAnalysis;
    public AnalyzeIamPolicyResponse withServiceAccountImpersonationAnalysis(IamPolicyAnalysis[] serviceAccountImpersonationAnalysis) {
        this.serviceAccountImpersonationAnalysis = serviceAccountImpersonationAnalysis;
        return this;
    }
}