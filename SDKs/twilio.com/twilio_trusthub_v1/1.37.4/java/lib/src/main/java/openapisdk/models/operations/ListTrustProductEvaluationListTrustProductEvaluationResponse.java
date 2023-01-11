package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrustProductEvaluationListTrustProductEvaluationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrustProductEvaluationListTrustProductEvaluationResponseMeta meta;
    public ListTrustProductEvaluationListTrustProductEvaluationResponse withMeta(ListTrustProductEvaluationListTrustProductEvaluationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation[] results;
    public ListTrustProductEvaluationListTrustProductEvaluationResponse withResults(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation[] results) {
        this.results = results;
        return this;
    }
}