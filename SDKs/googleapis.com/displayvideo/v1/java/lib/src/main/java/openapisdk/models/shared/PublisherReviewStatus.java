package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherReviewStatus
 * Publisher review status for the creative.
**/
public class PublisherReviewStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public PublisherReviewStatus withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PublisherReviewStatusStatusEnum status;
    public PublisherReviewStatus withStatus(PublisherReviewStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}