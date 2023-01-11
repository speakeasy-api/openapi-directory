package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEvaluationListEvaluationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEvaluationListEvaluationResponseMeta meta;
    public ListEvaluationListEvaluationResponse withMeta(ListEvaluationListEvaluationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation[] results;
    public ListEvaluationListEvaluationResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation[] results) {
        this.results = results;
        return this;
    }
}