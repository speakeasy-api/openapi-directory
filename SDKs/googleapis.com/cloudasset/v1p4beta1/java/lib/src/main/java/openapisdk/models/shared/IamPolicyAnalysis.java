package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicyAnalysis
 * An analysis message to group the query and results.
**/
public class IamPolicyAnalysis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisQuery")
    public IamPolicyAnalysisQuery analysisQuery;
    public IamPolicyAnalysis withAnalysisQuery(IamPolicyAnalysisQuery analysisQuery) {
        this.analysisQuery = analysisQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisResults")
    public IamPolicyAnalysisResult[] analysisResults;
    public IamPolicyAnalysis withAnalysisResults(IamPolicyAnalysisResult[] analysisResults) {
        this.analysisResults = analysisResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullyExplored")
    public Boolean fullyExplored;
    public IamPolicyAnalysis withFullyExplored(Boolean fullyExplored) {
        this.fullyExplored = fullyExplored;
        return this;
    }
}