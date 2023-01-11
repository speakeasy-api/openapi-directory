package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanCrawlerStatus
 * The number of crawled URLs and total number of URLs in the queue
**/
public class ScanCrawlerStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("0")
    public Long zero;
    public ScanCrawlerStatus withZero(Long zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public Long one;
    public ScanCrawlerStatus withOne(Long one) {
        this.one = one;
        return this;
    }
}