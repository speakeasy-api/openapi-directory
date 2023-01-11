package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAppsResponse
 * Response for the apps list request.
**/
public class ListAppsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public App[] apps;
    public ListAppsResponse withApps(App[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAppsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}