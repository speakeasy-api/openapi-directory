package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}