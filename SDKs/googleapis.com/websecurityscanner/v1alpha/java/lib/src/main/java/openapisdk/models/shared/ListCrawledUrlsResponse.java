package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCrawledUrlsResponse
 * Response for the `ListCrawledUrls` method.
**/
public class ListCrawledUrlsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawledUrls")
    public CrawledUrl[] crawledUrls;
    public ListCrawledUrlsResponse withCrawledUrls(CrawledUrl[] crawledUrls) {
        this.crawledUrls = crawledUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCrawledUrlsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}