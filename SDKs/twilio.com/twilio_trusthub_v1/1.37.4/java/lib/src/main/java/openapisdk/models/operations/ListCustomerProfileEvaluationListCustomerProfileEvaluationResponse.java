package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta meta;
    public ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse withMeta(ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[] results;
    public ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse withResults(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[] results) {
        this.results = results;
        return this;
    }
}