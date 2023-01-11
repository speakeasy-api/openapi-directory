package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyTopicEvidence
 * Evidence associated with a policy topic entry.
**/
public class PolicyTopicEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationNotCrawlable")
    public DestinationNotCrawlableEvidence destinationNotCrawlable;
    public PolicyTopicEvidence withDestinationNotCrawlable(DestinationNotCrawlableEvidence destinationNotCrawlable) {
        this.destinationNotCrawlable = destinationNotCrawlable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationNotWorking")
    public DestinationNotWorkingEvidence destinationNotWorking;
    public PolicyTopicEvidence withDestinationNotWorking(DestinationNotWorkingEvidence destinationNotWorking) {
        this.destinationNotWorking = destinationNotWorking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationUrl")
    public DestinationUrlEvidence destinationUrl;
    public PolicyTopicEvidence withDestinationUrl(DestinationUrlEvidence destinationUrl) {
        this.destinationUrl = destinationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainCall")
    public DomainCallEvidence domainCall;
    public PolicyTopicEvidence withDomainCall(DomainCallEvidence domainCall) {
        this.domainCall = domainCall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadSize")
    public DownloadSizeEvidence downloadSize;
    public PolicyTopicEvidence withDownloadSize(DownloadSizeEvidence downloadSize) {
        this.downloadSize = downloadSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpCall")
    public HttpCallEvidence httpCall;
    public PolicyTopicEvidence withHttpCall(HttpCallEvidence httpCall) {
        this.httpCall = httpCall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpCookie")
    public HttpCookieEvidence httpCookie;
    public PolicyTopicEvidence withHttpCookie(HttpCookieEvidence httpCookie) {
        this.httpCookie = httpCookie;
        return this;
    }
}