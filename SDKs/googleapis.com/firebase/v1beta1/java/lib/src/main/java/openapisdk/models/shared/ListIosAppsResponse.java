package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIosAppsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public IosApp[] apps;
    public ListIosAppsResponse withApps(IosApp[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListIosAppsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}