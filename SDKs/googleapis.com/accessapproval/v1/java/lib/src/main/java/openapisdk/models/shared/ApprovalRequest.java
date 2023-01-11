package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApprovalRequest
 * A request for the customer to approve access to a resource.
**/
public class ApprovalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approve")
    public ApproveDecision approve;
    public ApprovalRequest withApprove(ApproveDecision approve) {
        this.approve = approve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismiss")
    public DismissDecision dismiss;
    public ApprovalRequest withDismiss(DismissDecision dismiss) {
        this.dismiss = dismiss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApprovalRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTime")
    public String requestTime;
    public ApprovalRequest withRequestTime(String requestTime) {
        this.requestTime = requestTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedExpiration")
    public String requestedExpiration;
    public ApprovalRequest withRequestedExpiration(String requestedExpiration) {
        this.requestedExpiration = requestedExpiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedLocations")
    public AccessLocations requestedLocations;
    public ApprovalRequest withRequestedLocations(AccessLocations requestedLocations) {
        this.requestedLocations = requestedLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedReason")
    public AccessReason requestedReason;
    public ApprovalRequest withRequestedReason(AccessReason requestedReason) {
        this.requestedReason = requestedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedResourceName")
    public String requestedResourceName;
    public ApprovalRequest withRequestedResourceName(String requestedResourceName) {
        this.requestedResourceName = requestedResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedResourceProperties")
    public ResourceProperties requestedResourceProperties;
    public ApprovalRequest withRequestedResourceProperties(ResourceProperties requestedResourceProperties) {
        this.requestedResourceProperties = requestedResourceProperties;
        return this;
    }
}