package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta meta;
    public ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse withMeta(ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[] results;
    public ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse withResults(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment[] results) {
        this.results = results;
        return this;
    }
}