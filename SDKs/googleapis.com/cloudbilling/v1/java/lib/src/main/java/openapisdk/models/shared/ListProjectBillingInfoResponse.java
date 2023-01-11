package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProjectBillingInfoResponse
 * Request message for `ListProjectBillingInfoResponse`.
**/
public class ListProjectBillingInfoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListProjectBillingInfoResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectBillingInfo")
    public ProjectBillingInfo[] projectBillingInfo;
    public ListProjectBillingInfoResponse withProjectBillingInfo(ProjectBillingInfo[] projectBillingInfo) {
        this.projectBillingInfo = projectBillingInfo;
        return this;
    }
}