package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta meta;
    public ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse withMeta(ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[] results;
    public ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse withResults(openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment[] results) {
        this.results = results;
        return this;
    }
}