package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingAssignmentsListResponse
 * Billing assignment List Response
**/
public class BillingAssignmentsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAssignments")
    public BillingAssignment[] billingAssignments;
    public BillingAssignmentsListResponse withBillingAssignments(BillingAssignment[] billingAssignments) {
        this.billingAssignments = billingAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingAssignmentsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}