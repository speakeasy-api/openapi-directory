package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAlertPoliciesResponse
 * The protocol for the ListAlertPolicies response.
**/
public class ListAlertPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertPolicies")
    public AlertPolicy[] alertPolicies;
    public ListAlertPoliciesResponse withAlertPolicies(AlertPolicy[] alertPolicies) {
        this.alertPolicies = alertPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAlertPoliciesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListAlertPoliciesResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}