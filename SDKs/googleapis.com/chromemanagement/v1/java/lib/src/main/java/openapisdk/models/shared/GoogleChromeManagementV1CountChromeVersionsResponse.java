package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountChromeVersionsResponse
 * Response containing requested browser versions details and counts.
**/
public class GoogleChromeManagementV1CountChromeVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserVersions")
    public GoogleChromeManagementV1BrowserVersion[] browserVersions;
    public GoogleChromeManagementV1CountChromeVersionsResponse withBrowserVersions(GoogleChromeManagementV1BrowserVersion[] browserVersions) {
        this.browserVersions = browserVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1CountChromeVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public GoogleChromeManagementV1CountChromeVersionsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}