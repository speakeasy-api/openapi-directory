package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta meta;
    public ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse withMeta(ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[] results;
    public ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse withResults(openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[] results) {
        this.results = results;
        return this;
    }
}