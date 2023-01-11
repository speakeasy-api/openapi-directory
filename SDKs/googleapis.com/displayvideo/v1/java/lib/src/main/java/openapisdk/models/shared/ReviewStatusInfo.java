package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewStatusInfo
 * Review statuses for the creative.
**/
public class ReviewStatusInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalStatus")
    public ReviewStatusInfoApprovalStatusEnum approvalStatus;
    public ReviewStatusInfo withApprovalStatus(ReviewStatusInfoApprovalStatusEnum approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentAndPolicyReviewStatus")
    public ReviewStatusInfoContentAndPolicyReviewStatusEnum contentAndPolicyReviewStatus;
    public ReviewStatusInfo withContentAndPolicyReviewStatus(ReviewStatusInfoContentAndPolicyReviewStatusEnum contentAndPolicyReviewStatus) {
        this.contentAndPolicyReviewStatus = contentAndPolicyReviewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeAndLandingPageReviewStatus")
    public ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum creativeAndLandingPageReviewStatus;
    public ReviewStatusInfo withCreativeAndLandingPageReviewStatus(ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum creativeAndLandingPageReviewStatus) {
        this.creativeAndLandingPageReviewStatus = creativeAndLandingPageReviewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeReviewStatuses")
    public ExchangeReviewStatus[] exchangeReviewStatuses;
    public ReviewStatusInfo withExchangeReviewStatuses(ExchangeReviewStatus[] exchangeReviewStatuses) {
        this.exchangeReviewStatuses = exchangeReviewStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherReviewStatuses")
    public PublisherReviewStatus[] publisherReviewStatuses;
    public ReviewStatusInfo withPublisherReviewStatuses(PublisherReviewStatus[] publisherReviewStatuses) {
        this.publisherReviewStatuses = publisherReviewStatuses;
        return this;
    }
}