package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta meta;
    public ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse withMeta(ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment[] results;
    public ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse withResults(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment[] results) {
        this.results = results;
        return this;
    }
}