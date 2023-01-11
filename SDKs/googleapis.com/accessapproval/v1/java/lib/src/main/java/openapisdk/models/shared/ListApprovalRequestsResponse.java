package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApprovalRequestsResponse
 * Response to listing of ApprovalRequest objects.
**/
public class ListApprovalRequestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalRequests")
    public ApprovalRequest[] approvalRequests;
    public ListApprovalRequestsResponse withApprovalRequests(ApprovalRequest[] approvalRequests) {
        this.approvalRequests = approvalRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApprovalRequestsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}