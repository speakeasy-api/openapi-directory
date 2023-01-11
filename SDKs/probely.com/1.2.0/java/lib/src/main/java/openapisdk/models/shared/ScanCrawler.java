package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanCrawler
 * Information on the status of the crawling step of the scanning process
**/
public class ScanCrawler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String[] error;
    public ScanCrawler withError(String[] error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ScanCrawlerStateEnum state;
    public ScanCrawler withState(ScanCrawlerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ScanCrawlerStatus status;
    public ScanCrawler withStatus(ScanCrawlerStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public String[] warning;
    public ScanCrawler withWarning(String[] warning) {
        this.warning = warning;
        return this;
    }
}