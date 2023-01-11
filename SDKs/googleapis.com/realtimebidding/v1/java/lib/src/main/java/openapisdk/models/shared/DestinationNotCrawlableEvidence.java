package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationNotCrawlableEvidence
 * Evidence that the creative's destination URL was not crawlable by Google.
**/
public class DestinationNotCrawlableEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawlTime")
    public String crawlTime;
    public DestinationNotCrawlableEvidence withCrawlTime(String crawlTime) {
        this.crawlTime = crawlTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawledUrl")
    public String crawledUrl;
    public DestinationNotCrawlableEvidence withCrawledUrl(String crawledUrl) {
        this.crawledUrl = crawledUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public DestinationNotCrawlableEvidenceReasonEnum reason;
    public DestinationNotCrawlableEvidence withReason(DestinationNotCrawlableEvidenceReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}